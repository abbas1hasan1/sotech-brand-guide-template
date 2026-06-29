import { brandGuide as b } from "@/data/brandGuide";
import Engine from "./Engine";

/* wrap a [[word]] in the signature underline */
function Tag({ s }: { s: string }) {
  const m = s.match(/\[\[(.+?)\]\]/);
  if (!m) return <>{s}</>;
  const [pre, post] = s.split(m[0]);
  return (<>{pre}<span className="pop">{m[1]}</span>{post}</>);
}

export default function Page() {
  const c = b.theme.colors, f = b.theme.fonts;
  const cssVars =
    `:root{\n  --ink:${c.ink};\n  --deep:${c.deep};\n  --mid:${c.mid};\n  --soft:${c.soft};\n  --bg:${c.bg};\n  --warm:${c.warm};\n` +
    `  --font-head:'${f.head.family}',serif;\n  --font-body:'${f.body.family}',sans-serif;\n}`;

  return (
    <>
      <div className="progress"><span id="bar" /></div>
      <nav className="rail" id="rail" />

      {/* HERO */}
      <header className="hero section" id="hero" data-chapter>
        <div className="container">
          <img className="logo" src={b.logo.mark} alt={b.meta.displayName} data-reveal />
          <div className="eyebrow" data-reveal>Brand Experience</div>
          <h1 data-reveal>{b.meta.displayName}</h1>
          <p className="tag" data-reveal><Tag s={b.tagline} /></p>
          <div className="btn-row" data-reveal>
            <button className="btn" id="copyVars">⧉ Copy CSS variables</button>
            <button className="btn" id="printPdf">↓ Download PDF</button>
            <a className="btn" href={b.logo.mark} download>↓ Download logo</a>
          </div>
          <div className="meta" data-reveal>
            <div>Industry<b>{b.meta.industry}</b></div>
            <div>Location<b>{b.meta.location}</b></div>
            <div>Prepared by<b>{b.meta.preparedBy}</b></div>
          </div>
        </div>
        <div className="scrollcue">scroll ↓</div>
      </header>

      {/* LOGO */}
      <section className="section bg-white" id="logo" data-chapter>
        <div className="container">
          <span className="sec-label" data-reveal>01 — Identity</span>
          <h2 className="sec-title" data-reveal>The <span className="pop">mark</span></h2>
          <p className="sec-desc" data-reveal>The logo and icon. Use the full lockup where space allows; the icon alone for avatars and favicons.</p>
          <div className="logo-feature" data-reveal>
            <img src={b.logo.mark} alt="icon" />
            <div className="wm">{b.meta.displayName.replace(/ Schools?$/, "")}<small>{/Schools?$/.test(b.meta.displayName) ? "Schools" : ""}</small></div>
          </div>
          <div className="asset-row" data-stagger>
            <div className="asset"><span className="tag">Icon</span><img src={b.logo.mark} alt="" /></div>
            <div className="asset"><span className="tag">Wordmark</span><div className="wm-only">{b.meta.displayName}</div></div>
            <div className="asset"><span className="tag">App icon</span><div className="ic-app"><img src={b.logo.icon} alt="" /></div></div>
          </div>
          <div className="bg-row" data-stagger>
            <div className="bgc bc-bg"><span className="tag">On light</span><img src={b.logo.mark} alt="" /></div>
            <div className="bgc bc-ink"><span className="tag">On dark</span><span className="coin"><img src={b.logo.mark} alt="" /></span></div>
            <div className="bgc bc-mid"><span className="tag">On accent</span><span className="coin"><img src={b.logo.mark} alt="" /></span></div>
          </div>
          <div className="dodont" data-reveal>
            <div className="dd ok"><div className="h">✓ Do</div>Use supplied files · keep clear space · put the mark on a white coin over photos/dark colour.</div>
            <div className="dd no"><div className="h">✕ Don&apos;t</div>Recolour or redraw the mark · stretch or rotate · place bare on a busy photo.</div>
          </div>
        </div>
      </section>

      {/* COLOR */}
      <section className="section bg-ink" id="color" data-chapter>
        <div className="container">
          <span className="sec-label" data-reveal>02 — Colour</span>
          <h2 className="sec-title" data-reveal>The <span className="pop">palette</span></h2>
          <p className="sec-desc" data-reveal>The colour system. Click any swatch to copy its hex.</p>
          <div className="swatches" data-stagger>
            {b.palette.map((s) => (
              <button className="swatch" data-hex={s.hex} key={s.hex + s.name}>
                <div className="chip" style={{ background: s.hex }}><span className="c">copy</span></div>
                <div className="info"><div className="nm">{s.name}</div><div className="role">{s.role}</div><div className="hex">{s.hex}</div></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TYPE */}
      <section className="section bg-bg" id="type" data-chapter>
        <div className="container">
          <span className="sec-label" data-reveal>03 — Type</span>
          <h2 className="sec-title" data-reveal><span className="pop">Typography</span></h2>
          <div className="type-grid" data-stagger>
            <div className="type-card"><div className="fam">Headings · {f.head.family}</div><div className="big">Ag</div><div className="note">For headlines and pull quotes.</div></div>
            <div className="type-card"><div className="fam">Body · {f.body.family}</div><div className="big body">Ag</div><div className="note">For body copy, labels, and long-form.</div></div>
          </div>
          <div className="scale" data-reveal>
            {b.scale.map((r) => (
              <div className="r" key={r.label}>
                <span>{r.label}</span>
                <span className={r.kind === "head" ? "h" : "b"} style={{ fontSize: r.kind === "head" ? 30 : 17 }}>{r.sample}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOICE */}
      <section className="section bg-mid" id="voice" data-chapter>
        <div className="container">
          <span className="sec-label" data-reveal>04 — Voice</span>
          <p className="vquote" data-reveal>{b.voice.quote}</p>
          {b.voice.illustrative && <p className="ph-note" data-reveal style={{ color: "rgba(255,255,255,.85)", marginTop: 14 }}>illustrative — real voice comes from the brand kit</p>}
          <div className="lex" data-stagger>
            <div className="box"><div className="h">✓ Approved</div><div className="chips">{b.voice.approved.map((w) => <span className="chip-w" key={w}>{w}</span>)}</div></div>
            <div className="box no"><div className="h">✕ Avoid</div><div className="chips">{b.voice.avoid.map((w) => <span className="chip-w" key={w}>{w}</span>)}</div></div>
          </div>
        </div>
      </section>

      {/* DIRECTION */}
      <section className="section bg-white" id="direction" data-chapter>
        <div className="container">
          <span className="sec-label" data-reveal>05 — Direction</span>
          <h2 className="sec-title" data-reveal>Look &amp; <span className="pop">audience</span></h2>
          <div className="duo" data-stagger>
            <div className="pcard"><div className="k">Style anchor</div><p>{b.styleAnchor.text}</p>{b.styleAnchor.illustrative && <p className="ph">illustrative — kit&apos;s styleAnchor</p>}</div>
            <div className="pcard"><div className="k">Audience</div><p>{b.audience.text}</p>{b.audience.illustrative && <p className="ph">illustrative — kit&apos;s audience</p>}</div>
          </div>
        </div>
      </section>

      {/* IMAGERY */}
      <section className="section bg-ink" id="imagery" data-chapter>
        <div className="container">
          <span className="sec-label" data-reveal>06 — Imagery</span>
          <h2 className="sec-title" data-reveal>The <span className="pop">world</span></h2>
          <p className="sec-desc" data-reveal>The reference set that defines the brand&apos;s photographic world.</p>
          <div className="gallery" data-stagger>
            {b.imagery.map((im, i) => (
              <div className={`tile ph${i % 4}`} key={im.n} style={im.src ? { backgroundImage: `url(${im.src})` } : undefined}>
                <span className="n">{im.n}</span>
                {!im.src && <span className="cap">{im.cap}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section bg-bg" id="pillars" data-chapter>
        <div className="container">
          <span className="sec-label" data-reveal>07 — Content</span>
          <h2 className="sec-title" data-reveal>The <span className="pop">pillars</span></h2>
          <p className="sec-desc" data-reveal>Editorial pillars that guide social + content.</p>
          <table data-reveal>
            <thead><tr><th>Pillar</th><th>What it covers</th><th>Mood</th></tr></thead>
            <tbody>
              {b.pillars.items.map((p) => (
                <tr key={p.name}><td><span className="pl">{p.name}</span></td><td>{p.covers}</td><td><span className="tg">{p.mood}</span></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CLOSE */}
      <section className="section bg-ink close" id="close" data-chapter>
        <div className="container">
          <img className="mark" src={b.logo.mark} alt="" data-reveal />
          <h2 data-reveal>One brand. <span className="pop">Every</span> touchpoint.</h2>
          <p className="sec-desc" data-reveal>The living brand system for {b.meta.displayName} — by {b.meta.preparedBy}.</p>
        </div>
      </section>
      <footer>{b.meta.displayName} — Brand Experience · by {b.meta.preparedBy}</footer>

      <div className="toast" id="toast">Copied</div>
      <Engine cssVars={cssVars} />
    </>
  );
}
