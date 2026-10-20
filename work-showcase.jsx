const { CompositionStage, useComposition, Easing, clamp } = window;

const C = { pink: '#FF5FC8', mint: '#BDF0E6', lime: '#9BE89B', lav: '#CFC8FF', orange: '#FF7A1A', blue: '#1456E5', ink: '#0A0A0A', page: '#F7F7F5', line: '#E4E4E0', grey: '#ECECE8' };
const SANS = '"Geist", "Inter Tight", system-ui, sans-serif';
const MONO = '"JetBrains Mono", ui-monospace, monospace';

const MOTION = {
  enter: (T, s, d = 0.6) => Easing.easeOutCubic(clamp((T - s) / d, 0, 1)),
  draw: (T, s, d = 1) => Easing.easeInOutCubic(clamp((T - s) / d, 0, 1)),
  pop: (T, s, d = 0.6) => Easing.easeOutBack(clamp((T - s) / d, 0, 1)),
};

const PROJECTS = [
  { name: '111 Mart', c: C.lime, c2: C.ink, tag: 'Daily essentials' },
  { name: 'ReRoot Health', c: C.mint, c2: '#128C7C', tag: 'Clean nutrition' },
  { name: 'The Cub Story', c: C.lav, c2: '#5B4BD6', tag: 'For little ones' },
  { name: 'Untapped London', c: C.ink, c2: C.orange, tag: 'New season', dark: true },
  { name: 'Wear Duds', c: C.orange, c2: C.ink, tag: 'Drop 04' },
  { name: 'Travogy', c: C.pink, c2: C.ink, tag: 'Pack light' },
  { name: 'House of Baani', c: '#F1E7DA', c2: '#8A5A3C', tag: 'Handcrafted' },
  { name: 'Jeevrasa', c: C.lime, c2: '#2F551A', tag: 'Rooted in nature' },
  { name: 'Mhari', c: C.lav, c2: C.ink, tag: 'The edit' },
  { name: 'Big Rock Nutrition', c: C.blue, c2: C.lime, tag: 'Fuel better', dark: true },
  { name: 'Chaos & Co', c: C.pink, c2: C.ink, tag: 'Loud by design' },
  { name: 'Just What Works', c: C.mint, c2: C.ink, tag: 'Only essentials' },
];

function StoreMock({ p, w = 560, scroll = 0 }) {
  const s = w / 560;
  const fg = p.dark ? '#FFFFFF' : C.ink;
  return (
    <div style={{ width: w, height: 360 * s, overflow: 'hidden', borderRadius: 12 * s, background: '#FFFFFF', boxShadow: '0 1px 0 rgba(0,0,0,.04)', position: 'relative' }}>
      <div style={{ width: 560, height: 720, transform: `scale(${s}) translateY(${-scroll * 300}px)`, transformOrigin: '0 0', fontFamily: SANS }}>
        <div style={{ height: 22, background: C.ink, color: '#fff', fontFamily: MONO, fontSize: 8, letterSpacing: '.16em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>FREE SHIPPING ON PREPAID ORDERS</div>
        <div style={{ height: 44, display: 'flex', alignItems: 'center', padding: '0 20px', gap: 18, borderBottom: '1px solid #EEE' }}>
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-.02em' }}>{p.name}</span>
          <span style={{ marginLeft: 'auto', fontFamily: MONO, fontSize: 8, letterSpacing: '.14em', color: '#666' }}>SHOP · COLLECTIONS · ABOUT</span>
          <span style={{ width: 16, height: 16, borderRadius: 99, border: '1.5px solid #222' }} />
        </div>
        <div style={{ height: 214, background: p.c, padding: '30px 26px', display: 'flex', flexDirection: 'column', gap: 10, position: 'relative', overflow: 'hidden' }}>
          <span style={{ fontFamily: MONO, fontSize: 8, letterSpacing: '.16em', color: fg, opacity: .7 }}>{p.tag.toUpperCase()}</span>
          <span style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-.04em', lineHeight: 1, color: fg, maxWidth: 260 }}>{p.tag}.</span>
          <span style={{ width: 200, height: 6, borderRadius: 3, background: fg, opacity: .18 }} />
          <span style={{ width: 150, height: 6, borderRadius: 3, background: fg, opacity: .18 }} />
          <span style={{ marginTop: 6, alignSelf: 'flex-start', padding: '8px 16px', borderRadius: 99, background: p.dark ? '#fff' : C.ink, color: p.dark ? C.ink : '#fff', fontFamily: MONO, fontSize: 8, letterSpacing: '.14em' }}>SHOP NOW →</span>
          <span style={{ position: 'absolute', right: 34, top: 30, width: 150, height: 150, borderRadius: 999, background: p.c2, opacity: .92 }} />
          <span style={{ position: 'absolute', right: 120, top: 118, width: 64, height: 64, borderRadius: 16, background: '#fff', opacity: .9 }} />
        </div>
        <div style={{ padding: '20px 20px 0', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
            <div key={i}>
              <div style={{ height: 118, borderRadius: 8, background: '#F2F2EF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ width: 46, height: i % 2 ? 46 : 66, borderRadius: i % 3 ? 99 : 10, background: i % 2 ? p.c2 : p.c, opacity: .9 }} />
              </div>
              <div style={{ marginTop: 7, width: '80%', height: 5, borderRadius: 3, background: '#DDD' }} />
              <div style={{ marginTop: 5, width: '40%', height: 5, borderRadius: 3, background: '#BBB' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Rise = ({ T, at, dy = 18, style, children }) => {
  const p = MOTION.enter(T, at, 0.6);
  return <div style={{ ...style, opacity: p, transform: `translateY(${(1 - p) * dy}px)` }}>{children}</div>;
};
const Pill = ({ children, style }) => (
  <span style={{ display: 'inline-flex', alignSelf: 'flex-start', background: C.ink, color: '#fff', fontFamily: MONO, fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', padding: '7px 13px', borderRadius: 99, ...style }}>{children}</span>
);
const grid = { backgroundImage: `repeating-linear-gradient(90deg, transparent 0 199px, ${C.line} 199px 200px)` };
const VW = 1600, VH = 896;
const Sec = ({ children, bg }) => (
  <div style={{ position: 'relative', width: VW, height: VH, overflow: 'hidden', background: bg || C.page, ...grid }}>{children}</div>
);

function Hero({ T, s }) {
  const pin = MOTION.enter(T, s + 0.1, 1.2);
  return (
    <Sec>
      <Rise T={T} at={s} style={{ position: 'absolute', left: 48, top: 36 }}><img src="assets/logo-horizontal-dark.png" style={{ height: 30, display: 'block' }} /></Rise>
      <Rise T={T} at={s + 0.08} style={{ position: 'absolute', right: 48, top: 44, fontFamily: MONO, fontSize: 13, letterSpacing: '.14em', color: '#333', display: 'flex', gap: 28 }}><span>WORK</span><span>SERVICES</span><span>ABOUT</span><span>CONTACT</span></Rise>
      <Rise T={T} at={s + 0.3} style={{ position: 'absolute', left: 48, top: 430, display: 'flex', flexDirection: 'column', gap: 12 }}><Pill>Work / Featured</Pill><span style={{ fontFamily: SANS, fontSize: 30, fontWeight: 500, letterSpacing: '-.03em', color: C.ink, maxWidth: 260, lineHeight: 1.1 }}>Shopify stores we've shipped.</span></Rise>
      <Rise T={T} at={s + 0.38} style={{ position: 'absolute', right: 48, top: 436, fontFamily: MONO, fontSize: 14, letterSpacing: '.14em', color: '#333' }}>(12 PROJECTS)</Rise>
      <div style={{ position: 'absolute', left: '50%', top: '52%', width: 0, height: 0, perspective: 2200, opacity: pin, transform: `translateY(${(1 - pin) * 80}px)` }}>
        <div style={{ position: 'absolute', transformStyle: 'preserve-3d', transform: 'rotateX(56deg) rotateZ(-12deg)' }}>
          {PROJECTS.map((p, k) => {
            const ph = ((k / PROJECTS.length + T * 0.075) % 1 + 1) % 1;
            const y = (0.5 - ph) * 1500;
            const vis = Math.sin(ph * Math.PI);
            return (
              <div key={p.name} style={{ position: 'absolute', left: -280, top: -180, transform: `translate3d(0,${y}px,${k * 0.5}px)`, opacity: clamp(vis * 1.6, 0, 1), filter: `blur(${Math.abs(ph - 0.5) * 5}px)`, boxShadow: '0 40px 80px rgba(0,0,0,.18)', borderRadius: 12 }}>
                <StoreMock p={p} w={560} scroll={0} />
              </div>
            );
          })}
        </div>
      </div>
    </Sec>
  );
}

function Positioning({ T, s }) {
  const para = [['We combine design, performance ads and', 'development into one team — so the store,', 'the creative and the traffic work together.'], ['Shopify builds, Meta and Google Ads, branding', 'and social, run by people who sit in the', 'same room and read the same numbers.']];
  return (
    <Sec>
      <Rise T={T} at={s + 0.1} style={{ position: 'absolute', left: 48, top: 120 }}><Pill>About / Approach</Pill></Rise>
      <div style={{ position: 'absolute', left: 48, top: 300, fontFamily: SANS, fontSize: 68, fontWeight: 500, letterSpacing: '-.04em', lineHeight: 1.02, color: C.ink }}>
        <Rise T={T} at={s + 0.2}>End-to-End</Rise>
        <Rise T={T} at={s + 0.28}>D2C Growth Partner</Rise>
      </div>
      <div style={{ position: 'absolute', left: 848, top: 308, display: 'flex', flexDirection: 'column', gap: 34, fontFamily: SANS, fontSize: 24, lineHeight: 1.45, color: '#55554F', letterSpacing: '-.01em' }}>
        {para.map((lines, pi) => <div key={pi}>{lines.map((l, li) => <Rise key={li} T={T} at={s + 0.4 + (pi * 3 + li) * 0.07}>{l}</Rise>)}</div>)}
      </div>
    </Sec>
  );
}

function OutcomeVisual({ i, T, p }) {
  const box = { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' };
  if (i === 0) return <div style={{ ...box, flexWrap: 'wrap', alignContent: 'center', gap: 10, padding: 30 }}>{Array.from({ length: 30 }).map((_, k) => <span key={k} style={{ width: 22, height: 22, borderRadius: 99, background: C.ink, opacity: clamp(T * 3 - k * 0.12 - p * 0, 0, 1) * (k < Math.floor(p * 30) + 1 ? 1 : 0.15) }} />)}</div>;
  if (i === 1) return <div style={{ ...box, alignItems: 'flex-end', gap: 12, padding: '0 40px 40px' }}>{[0.3, 0.45, 0.4, 0.62, 0.78, 0.95].map((h, k) => <span key={k} style={{ width: 22, height: 200 * h * clamp(p * 1.4 - k * 0.07, 0, 1), borderRadius: 6, background: C.ink }} />)}</div>;
  if (i === 2) return <div style={box}><div style={{ borderRadius: 10, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,.15)' }}><StoreMock p={PROJECTS[1]} w={210} scroll={(Math.sin(T * 0.9) + 1) * 0.5} /></div></div>;
  if (i === 3) { const r = (T * 0.8) % 1; return <div style={box}><span style={{ position: 'absolute', width: 120 + r * 120, height: 120 + r * 120, borderRadius: 999, border: `2px solid ${C.ink}`, opacity: 1 - r }} /><span style={{ padding: '14px 26px', borderRadius: 99, background: C.ink, color: '#fff', fontFamily: MONO, fontSize: 13, letterSpacing: '.12em' }}>ADD TO CART</span></div>; }
  return <div style={box}>{[160, 120, 80].map((d, k) => <span key={k} style={{ position: 'absolute', width: d, height: d, borderRadius: 999, border: `2px dashed ${C.ink}`, transform: `rotate(${T * (k % 2 ? -40 : 40)}deg)` }} />)}<span style={{ width: 30, height: 30, borderRadius: 99, background: C.ink }} /></div>;
}

function Outcomes({ T, s }) {
  const cards = [['Growing the consumer base', C.lime, '111 Mart'], ['Scaling ROAS', C.pink, 'Travogy'], ['Launching on Shopify', C.mint, 'ReRoot Health'], ['Enhancing user experience', C.lav, 'The Cub Story'], ['Innovating through AI', C.orange, 'Wear Duds']];
  return (
    <Sec>
      <Rise T={T} at={s} style={{ position: 'absolute', left: 48, top: 72, display: 'flex', alignItems: 'center', gap: 20 }}><Pill>Outcomes</Pill><span style={{ fontFamily: SANS, fontSize: 30, fontWeight: 500, letterSpacing: '-.03em' }}>What we move.</span></Rise>
      <div style={{ position: 'absolute', left: 48, right: 48, top: 170, display: 'flex', gap: 16 }}>
        {cards.map(([t, col, cs], i) => {
          const p = MOTION.enter(T, s + 0.3 + i * 0.09, 0.7);
          return (
            <div key={t} style={{ flex: 1, height: 640, borderRadius: 18, background: C.grey, padding: 14, display: 'flex', flexDirection: 'column', opacity: p, transform: `translateY(${(1 - p) * 90}px)` }}>
              <div style={{ position: 'relative', height: 420, borderRadius: 12, background: col, overflow: 'hidden', transform: `scale(${0.9 + 0.1 * p})` }}><OutcomeVisual i={i} T={T - s} p={MOTION.enter(T, s + 0.8 + i * 0.09, 1.4)} /></div>
              <span style={{ marginTop: 22, fontFamily: SANS, fontSize: 24, fontWeight: 500, letterSpacing: '-.025em', lineHeight: 1.15, color: C.ink, padding: '0 6px' }}>{t}</span>
              <span style={{ marginTop: 'auto', padding: '0 6px 6px', fontFamily: MONO, fontSize: 11, letterSpacing: '.14em', color: '#777' }}>CASE · {cs.toUpperCase()}</span>
            </div>
          );
        })}
      </div>
    </Sec>
  );
}

function About({ T, s }) {
  const quotes = [['Every creative is a business decision.', C.pink], ['We turn Figma into fast storefronts.', C.mint], ['Data first, then design.', C.lime], ['Built to be iterated, not rebuilt.', C.lav]];
  const items = [];
  quotes.forEach((q, k) => { items.push({ art: PROJECTS[(k * 3 + 2) % 12] }); items.push({ q }); });
  const W = 300, G = 16, total = items.length * (W + G);
  const x = -((T * 130) % total);
  return (
    <Sec>
      <Rise T={T} at={s} style={{ position: 'absolute', left: 48, top: 90 }}><Pill>About</Pill></Rise>
      <Rise T={T} at={s + 0.1} style={{ position: 'absolute', left: 48, top: 150, fontFamily: SANS, fontSize: 60, fontWeight: 500, letterSpacing: '-.04em', color: C.ink }}>Rabiro, Growth Studio</Rise>
      <Rise T={T} at={s + 0.2} style={{ position: 'absolute', left: 848, top: 160, width: 680, fontFamily: SANS, fontSize: 22, lineHeight: 1.5, color: '#55554F' }}>A team of designers, marketers and developers in Mohali building Shopify stores, running performance ads and making the creative that feeds them.</Rise>
      <div style={{ position: 'absolute', left: 0, top: 380, height: 420, width: VW, overflow: 'hidden', opacity: MOTION.enter(T, s + 0.35, 0.8) }}>
        <div style={{ display: 'flex', gap: G, transform: `translateX(${x}px)` }}>
          {items.concat(items).map((it, k) => it.art ? (
            <div key={k} style={{ flex: 'none', width: W, height: 420, borderRadius: 18, background: it.art.c, padding: 18, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '.14em', color: it.art.dark ? '#fff' : C.ink }}>{it.art.name.toUpperCase()}</span>
              <div style={{ borderRadius: 10, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,.18)' }}><StoreMock p={it.art} w={264} scroll={(Math.sin(T * 0.6 + k) + 1) * 0.4} /></div>
            </div>
          ) : (
            <div key={k} style={{ flex: 'none', width: W, height: 420, borderRadius: 18, background: it.q[1], padding: 26, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '.14em' }}>(NOTE)</span>
              <span style={{ fontFamily: SANS, fontSize: 32, fontWeight: 500, letterSpacing: '-.03em', lineHeight: 1.08, color: C.ink }}>{it.q[0]}</span>
            </div>
          ))}
        </div>
      </div>
    </Sec>
  );
}

function CTA({ T, s }) {
  const p = MOTION.pop(T, s + 0.15, 0.7);
  const h = [['#5FD4FF', 0, 0], [C.pink, 1, 0], [C.lav, 0, 1], [C.orange, 1, 1]];
  return (
    <Sec bg="#FFFFFF">
      <div style={{ position: 'absolute', left: '50%', top: '50%', width: 520, height: 520, marginLeft: -260, marginTop: -260, transform: `scale(${0.6 + 0.4 * p})`, opacity: clamp(p * 2, 0, 1) }}>
        <div style={{ position: 'absolute', inset: 0, background: C.ink, borderRadius: 6, padding: 48, display: 'flex', alignItems: 'flex-end', color: '#fff', fontFamily: SANS, fontSize: 52, fontWeight: 500, letterSpacing: '-.04em', lineHeight: 1.02 }}>Have an idea? We'll make it real.</div>
        <div style={{ position: 'absolute', inset: -12, border: '1.5px solid #5FD4FF' }} />
        {h.map(([c, x, y], k) => <span key={k} style={{ position: 'absolute', left: x ? 'auto' : -20, right: x ? -20 : 'auto', top: y ? 'auto' : -20, bottom: y ? -20 : 'auto', width: 16, height: 16, background: c, border: '2px solid #fff', boxShadow: '0 0 0 1px rgba(0,0,0,.1)' }} />)}
        <span style={{ position: 'absolute', left: -12, bottom: -52, fontFamily: MONO, fontSize: 12, background: '#5FD4FF', color: C.ink, padding: '4px 8px' }}>520 × 520</span>
      </div>
    </Sec>
  );
}

const bez = (t, a, b, c) => [(1 - t) ** 2 * a[0] + 2 * (1 - t) * t * b[0] + t * t * c[0], (1 - t) ** 2 * a[1] + 2 * (1 - t) * t * b[1] + t * t * c[1]];
function Statement({ T, s }) {
  const A = [160, 720], B = [800, 80], Cc = [1440, 700];
  const cp = MOTION.draw(T, s + 0.1, 1.4);
  const [cx, cy] = bez(cp, A, B, Cc);
  const tags = ['Shopify', 'Meta Ads', 'Branding', 'SEO', 'UGC', 'Google Ads'];
  const cols = [C.mint, C.pink, C.lime, C.lav, C.orange, '#5FD4FF'];
  const rowW = 6 * 150, rowX = (VW - rowW) / 2;
  const tp = MOTION.enter(T, s + 1.0, 0.8);
  const para = 'Personalised experiences, powered by data and AI — for brands that want every visit to count.';
  const n = Math.floor(para.length * clamp((T - s - 1.6) / 1.1, 0, 1));
  return (
    <Sec>
      {tags.map((t, k) => {
        const at = (k + 0.5) / 6;
        const [px, py] = bez(at, A, B, Cc);
        const tk = s + 0.1 + at * 1.4;
        const show = MOTION.pop(T, tk, 0.35);
        const fall = MOTION.draw(T, tk + 0.35, 0.7);
        const fx = rowX + k * 150, fy = 740;
        return <span key={t} style={{ position: 'absolute', left: px + (fx - px) * fall, top: py + (fy - py) * fall, transform: `translate(-50%,-50%) scale(${show})`, marginLeft: 65 * fall, background: cols[k], color: C.ink, fontFamily: MONO, fontSize: 14, letterSpacing: '.1em', padding: '9px 16px', borderRadius: 99, whiteSpace: 'nowrap' }}>{t.toUpperCase()}</span>;
      })}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 330, textAlign: 'center', fontFamily: SANS, fontSize: 76, fontWeight: 500, letterSpacing: '-.045em', color: C.ink, filter: `blur(${(1 - tp) * 14}px)`, opacity: tp }}>Committed to crafting growth.</div>
      <div style={{ position: 'absolute', left: '50%', width: 760, marginLeft: -380, top: 460, textAlign: 'center', fontFamily: SANS, fontSize: 24, lineHeight: 1.5, color: '#55554F', minHeight: 72 }}>{para.slice(0, n)}<span style={{ opacity: n > 0 && n < para.length ? 1 : 0 }}>▍</span></div>
      <svg width="30" height="36" viewBox="0 0 30 36" style={{ position: 'absolute', left: cx, top: cy, opacity: 1 - MOTION.enter(T, s + 1.6, 0.4) }}><path d="M2 2 L2 30 L10 23 L15 34 L20 32 L15 21 L26 21 Z" fill={C.ink} stroke="#fff" strokeWidth="2" /></svg>
    </Sec>
  );
}

function FAQ({ T, s }) {
  const rows = ['A team that owns design, ads and code', 'Weekly numbers, not monthly decks', 'Shopify builds that can be iterated', 'One point of contact, always'];
  const ex = MOTION.draw(T, s + 0.9, 0.6);
  return (
    <Sec>
      <Rise T={T} at={s} style={{ position: 'absolute', left: 48, top: 58, width: 720, height: 780, borderRadius: 24, background: C.lav, padding: 40, display: 'flex', flexDirection: 'column', gap: 30 }}>
        <span style={{ fontFamily: SANS, fontSize: 44, fontWeight: 500, letterSpacing: '-.04em', lineHeight: 1.04, maxWidth: 480 }}>Want to see our work in action?</span>
        <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,.18)' }}>
          <StoreMock p={PROJECTS[6]} w={640} scroll={clamp((T - s) / 3, 0, 1) * 0.8} />
          <span style={{ position: 'absolute', left: '50%', top: '50%', width: 84, height: 84, marginLeft: -42, marginTop: -42, borderRadius: 99, background: C.ink, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>▶</span>
        </div>
      </Rise>
      <div style={{ position: 'absolute', left: 848, top: 70, width: 700 }}>
        <Rise T={T} at={s + 0.15} style={{ fontFamily: SANS, fontSize: 34, fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1.1 }}>What can you expect from working with Rabiro?</Rise>
        <div style={{ marginTop: 28, borderTop: `1px solid ${C.line}` }}>
          {rows.map((r, k) => (
            <Rise key={r} T={T} at={s + 0.3 + k * 0.07} style={{ borderBottom: `1px solid ${C.line}`, padding: '18px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: SANS, fontSize: 21, fontWeight: 500 }}><span>{r}</span><span style={{ transform: `rotate(${k === 0 ? ex * 45 : 0}deg)` }}>+</span></div>
              {k === 0 && <div style={{ height: ex * 96, overflow: 'hidden' }}><p style={{ margin: '12px 0 0', fontSize: 17, lineHeight: 1.5, color: '#55554F', fontFamily: SANS }}>Strategy, creative, storefront and media under one roof.</p><div style={{ marginTop: 12, display: 'flex', gap: 8 }}><span style={{ background: C.mint, fontFamily: MONO, fontSize: 11, letterSpacing: '.12em', padding: '6px 11px', borderRadius: 99 }}>SHOPIFY</span><span style={{ background: C.pink, fontFamily: MONO, fontSize: 11, letterSpacing: '.12em', padding: '6px 11px', borderRadius: 99 }}>META ADS</span></div></div>}
            </Rise>
          ))}
        </div>
        <Rise T={T} at={s + 1.3} style={{ marginTop: 40, fontFamily: SANS, fontSize: 22, fontWeight: 500 }}>Any questions? Fill out the form.</Rise>
        {['Name', 'Email', 'Brand'].map((f, k) => (
          <div key={f} style={{ marginTop: 26, fontFamily: MONO, fontSize: 12, letterSpacing: '.14em', color: '#777', opacity: MOTION.enter(T, s + 1.4 + k * 0.08) }}>{f.toUpperCase()}
            <div style={{ marginTop: 10, height: 1, background: C.ink, transformOrigin: '0 0', transform: `scaleX(${MOTION.draw(T, s + 1.45 + k * 0.08, 0.6)})` }} />
          </div>
        ))}
      </div>
    </Sec>
  );
}

function Clock({ T, s }) {
  const p = MOTION.enter(T, s, 0.7);
  const sec = Math.floor(8 + (T - s) * 1) % 60;
  return (
    <Sec bg="#FFFFFF">
      <div style={{ position: 'absolute', left: '50%', top: '50%', width: 480, height: 480, marginLeft: -240, marginTop: -240, opacity: p, transform: `scale(${0.92 + 0.08 * p})` }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: 999, background: C.ink, transform: `rotate(${T * 14}deg)` }}>
          {Array.from({ length: 60 }).map((_, k) => <span key={k} style={{ position: 'absolute', left: 239, top: 14, width: 2, height: k % 5 ? 10 : 22, background: '#fff', opacity: k % 5 ? .4 : 1, transformOrigin: '1px 226px', transform: `rotate(${k * 6}deg)` }} />)}
        </div>
        <div style={{ position: 'absolute', inset: 90, borderRadius: 999, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SANS, fontSize: 36, fontWeight: 500, letterSpacing: '-.035em' }}>Let's build it</div>
      </div>
      <Rise T={T} at={s + 0.2} style={{ position: 'absolute', left: 120, top: 428, fontFamily: MONO, fontSize: 30, letterSpacing: '.06em' }}>11:24:{String(sec).padStart(2, '0')} AM</Rise>
      <Rise T={T} at={s + 0.25} style={{ position: 'absolute', right: 120, top: 428, fontFamily: MONO, fontSize: 30, letterSpacing: '.06em', color: '#777' }}>(GMT+5:30)</Rise>
    </Sec>
  );
}

function Footer({ T, s }) {
  const w = MOTION.draw(T, s + 1.2, 0.8);
  const Cols = () => (
    <div style={{ position: 'absolute', left: 48, top: 90, display: 'flex', gap: 110, fontFamily: MONO, fontSize: 14, letterSpacing: '.12em', color: C.ink }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}><span style={{ opacity: .55 }}>(PAGES)</span><span>HOME</span><span>WORK</span><span>SERVICES</span><span>CONTACT</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}><span style={{ opacity: .55 }}>(STUDIO)</span><span>MIRANS SQUARE, D180C</span><span>SECTOR 74A, MOHALI</span><span>PUNJAB 140308</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}><span style={{ opacity: .55 }}>(SAY HI)</span><span>HELLO@RABIRO.COM</span></div>
    </div>
  );
  const Word = ({ c }) => <span style={{ position: 'absolute', right: -30, bottom: -150, fontFamily: SANS, fontSize: 440, fontWeight: 700, letterSpacing: '-.06em', lineHeight: 1, color: c }}>RABIRO</span>;
  return (
    <Sec bg={C.mint}>
      <div style={{ position: 'absolute', inset: 0, background: C.mint }}><Cols /><Word c="rgba(10,10,10,.1)" /></div>
      <div style={{ position: 'absolute', inset: 0, background: C.orange, clipPath: `inset(0 ${(1 - w) * 100}% 0 0)` }}><Cols /><Word c="rgba(10,10,10,.14)" /></div>
    </Sec>
  );
}

const ORDER = ['Hero', 'Positioning', 'Outcomes', 'About', 'CTA', 'Statement', 'FAQ', 'Clock', 'Footer'];
const SECS = { Hero, Positioning, Outcomes, About, CTA, Statement, FAQ, Clock, Footer };

function Piece() {
  const { T, CUES } = useComposition();
  let y = 0;
  for (let i = 1; i < ORDER.length; i++) y += VH * MOTION.draw(T, CUES[ORDER[i]] - 0.7, 1.0);
  const intro = MOTION.enter(T, 0, 0.9);
  return (
    <div data-screen-label={'t=' + Math.floor(T) + 's'} style={{ position: 'absolute', inset: 0, background: '#141414' }}>
      <div style={{ position: 'absolute', left: 160, top: 64, width: VW, height: VH + 56, borderRadius: 22, overflow: 'hidden', background: '#fff', boxShadow: '0 50px 120px rgba(0,0,0,.5)', opacity: intro, transform: `translateY(${(1 - intro) * 24}px)` }}>
        <div style={{ height: 56, display: 'flex', alignItems: 'center', gap: 8, padding: '0 20px', borderBottom: `1px solid ${C.line}`, background: '#FBFBFA' }}>
          {[0, 1, 2].map(k => <span key={k} style={{ width: 12, height: 12, borderRadius: 99, background: '#DDDDD8' }} />)}
          <span style={{ marginLeft: 16, padding: '6px 16px', borderRadius: 99, background: '#F0F0EC', fontFamily: MONO, fontSize: 13, color: '#777' }}>rabiro.com/work</span>
        </div>
        <div style={{ position: 'relative', height: VH, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, transform: `translateY(${-y}px)` }}>
            {ORDER.map(n => { const S = SECS[n]; return <S key={n} T={T} s={CUES[n]} />; })}
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkShowcaseVideo() {
  return (
    <CompositionStage width={1920} height={1080} scenes={window.OM_SCENES} playback={window.OM_PLAYBACK} bg="#141414">
      <Piece />
    </CompositionStage>
  );
}

window.WorkShowcaseVideo = WorkShowcaseVideo;
window.StoreMock = StoreMock;
