"use client";
import { useEffect } from "react";

/* Scroll engine: reveal/stagger/felt-underline, chapter dots, progress bar,
   click-to-copy swatches, copy-CSS-vars. One IntersectionObserver, no deps. */
export default function Engine({ cssVars }: { cssVars: string }) {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((g) =>
      Array.from(g.children).forEach((c, i) => (c as HTMLElement).style.setProperty("--i", String(i)))
    );

    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          if (e.target.classList.contains("pop")) e.target.classList.add("felt-in");
          io.unobserve(e.target);
        }),
      { threshold: 0.14, rootMargin: "0px 0px -7% 0px" }
    );
    document.querySelectorAll("[data-reveal],[data-stagger],.pop").forEach((el) => io.observe(el));

    const chapters = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
    const rail = document.getElementById("rail");
    if (rail) {
      rail.innerHTML = "";
      chapters.forEach((ch) => {
        const a = document.createElement("a");
        a.href = "#" + ch.id;
        a.dataset.id = ch.id;
        rail.appendChild(a);
      });
    }
    const dots = rail ? Array.from(rail.children) as HTMLElement[] : [];
    const bar = document.getElementById("bar");

    function sync() {
      const d = document.documentElement;
      const p = d.scrollTop / (d.scrollHeight - d.clientHeight || 1);
      if (bar) bar.style.setProperty("--sp", p.toFixed(4));
      let act = chapters[0];
      for (const ch of chapters) if (ch.getBoundingClientRect().top < window.innerHeight * 0.42) act = ch;
      dots.forEach((a) => a.classList.toggle("active", a.dataset.id === (act && act.id)));
    }
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        sync();
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    sync();

    const toast = document.getElementById("toast");
    let tm: ReturnType<typeof setTimeout>;
    const flash = (m: string) => {
      if (!toast) return;
      toast.textContent = m;
      toast.classList.add("show");
      clearTimeout(tm);
      tm = setTimeout(() => toast.classList.remove("show"), 1500);
    };
    const swatchHandlers: Array<[HTMLElement, () => void]> = [];
    document.querySelectorAll<HTMLElement>(".swatch").forEach((s) => {
      const h = () => {
        const hex = s.dataset.hex || "";
        navigator.clipboard?.writeText(hex).catch(() => {});
        flash(hex + " copied");
      };
      s.addEventListener("click", h);
      swatchHandlers.push([s, h]);
    });
    const copyBtn = document.getElementById("copyVars");
    const onCopyVars = () => {
      navigator.clipboard?.writeText(cssVars).catch(() => {});
      flash("CSS variables copied");
    };
    copyBtn?.addEventListener("click", onCopyVars);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      swatchHandlers.forEach(([s, h]) => s.removeEventListener("click", h));
      copyBtn?.removeEventListener("click", onCopyVars);
    };
  }, [cssVars]);

  return null;
}
