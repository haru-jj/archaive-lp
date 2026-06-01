'use client';

/**
 * HeroAnim — ARCHAIVE LP のヒーロー用アニメーション
 *
 *   src/app/_components/HeroAnim.tsx として配置し、
 *   HeroSection.tsx の右カラムに <HeroAnim /> として組み込む想定。
 *
 * Tailwind の lp- パレットは使わずインラインカラーで動くため、
 * tailwind.config.ts に変更を加えなくてもそのまま動作する。
 *
 * 依存: react, lucide-react のみ。
 */

import {
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from 'react';
import {
  AlertTriangle,
  Box,
  Calculator,
  Check,
  ChevronDown,
  ClipboardList,
  Cpu,
  FileText,
  Layers,
  Package,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

// ── color tokens (ARCHAIVE primary family only) ──────────────────────────────
const C = {
  primary: '#37B7C4',
  primaryStrong: '#1F8FA0',
  primaryDeep: '#0E5D6B',
  primaryDarkest: '#06343C',
  primarySoft: '#E8F6F8',
  primaryTint: '#C8EAEE',
  ink: '#0A1A24',
  inkSoft: '#3a4954',
  inkMuted: '#6b7882',
};

// ── easing / utility ─────────────────────────────────────────────────────────
const easeInOutCubic = (x: number) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
const easeOutCubic = (x: number) =>
  1 - Math.pow(1 - Math.max(0, Math.min(1, x)), 3);
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const ramp = (t: number, start: number, end: number) =>
  clamp((t - start) / Math.max(1e-6, end - start), 0, 1);
const bell = (t: number, start: number, end: number, fade = 0.4) => {
  if (t < start || t > end) return 0;
  const inT = ramp(t, start, start + fade);
  const outT = 1 - ramp(t, end - fade, end);
  return Math.min(inT, outT);
};

type HeroAnimProps = {
  /** ライト or ダーク背景の上に置くかで配色を切り替える */
  isDark?: boolean;
  className?: string;
};

export function HeroAnim({ isDark = false, className }: HeroAnimProps) {
  return <HeroAnimInner isDark={isDark} className={className} />;
}

// ── The animation ─────────────────────────────────────────────────────────
// One-shot timeline (seconds, FINAL≈23.6):
//   0.0 – 3.6    30 docs fly into the monitor (dense — screen visibly fills)
//   3.5 – 4.6    screen wake-up flash
//   4.6 – 8.6    AI chat: past-trouble lookup (full by 7.3, hold 0.7s, fade)
//   8.0 – 12.4   見積書 auto-gen (full by 11.1, hold 0.7s, fade)
//  11.8 – 16.6   BOM tree list (full by 15.3, hold 0.7s, fade)
//  16.0 – 20.3   drawing diff view (full by 19.0, hold 0.7s, fade)
//  19.7 – 20.9   white flash into finale
//  20.3 – 21.8   ARCHAIVE logo zooms in (overshoot), monitor frame fades
//  21.8 – 23.6   tagline + CTA hint

const FINAL = 23.6;

// All internal pixel sizes are authored against this design canvas.
// The outer wrapper measures its width and applies transform: scale so the
// inner contents grow/shrink as one piece (preserving relative proportions).
const DESIGN_W = 600;
const DESIGN_H = DESIGN_W / 1.08;

function HeroAnimInner({ isDark, className }: { isDark: boolean; className?: string }) {
  const [t, setT] = useState(0);
  const startRef = useRef<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const update = () => {
      setScale(el.getBoundingClientRect().width / DESIGN_W);
    };
    update();
    const obs = new ResizeObserver(update);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    let raf = 0;
    const tick = (now: number) => {
      if (startRef.current == null) startRef.current = now;
      const elapsed = (now - startRef.current) / 1000;
      setT(Math.min(elapsed, FINAL));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={'relative w-full mx-auto ' + (className ?? '')}
      style={{ aspectRatio: '1.08 / 1' }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: DESIGN_W,
          height: DESIGN_H,
          transform: scale != null ? `scale(${scale})` : 'scale(1)',
          transformOrigin: 'top left',
          visibility: scale != null ? 'visible' : 'hidden',
        }}
      >
        {/* central monitor visual */}
        <Monitor t={t} isDark={isDark} />
        {/* documents flying in (above monitor visually until they enter the screen) */}
        <DocsLayer t={t} />
        {/* logo finale (on top) */}
        <LogoFinale t={t} isDark={isDark} />
      </div>
    </div>
  );
}

// ── Documents Layer ───────────────────────────────────────────────────────
const DOC_TYPES = ['drawing', 'cad', 'estimate', 'trouble', 'spec', 'inspect'];
const DOC_COUNT = 30;

// Pre-compute pixel offsets in design space so per-frame positioning is
// pure transform (no layout). Targets the screen-center area (50%, 38%).
const DOC_TARGET_X_PX = 0.5 * DESIGN_W;
const DOC_TARGET_Y_PX = 0.38 * DESIGN_H;

function DocsLayer({ t }: { t: number }) {
  // 30 docs flying in from positions around the container, at the original
  // ~1.6s pace. Many in flight at once — at peak the canvas visibly fills.
  const docs = useMemo(() => {
    const arr = [];
    for (let i = 0; i < DOC_COUNT; i++) {
      const start = (i / (DOC_COUNT - 1)) * 2.0;
      const angle = (i / DOC_COUNT) * 2 * Math.PI + (i % 7) * 0.12;
      const radius = 72 + (i % 5) * 4;
      const sxPx = (0.5 + Math.cos(angle) * radius / 100) * DESIGN_W;
      const syPx = (0.5 + Math.sin(angle) * radius * 0.88 / 100) * DESIGN_H;
      const rot = ((i * 137) % 36) - 18;
      arr.push({ id: 'd' + i, type: DOC_TYPES[i % DOC_TYPES.length], start, dur: 1.6, sxPx, syPx, rot });
    }
    return arr;
  }, []);
  return (
    <div className="absolute inset-0 pointer-events-none">
      {docs.map((d) => {
        const local = t - d.start;
        // unmount as soon as fully transparent (opacity reaches 0 at p=1)
        if (local < 0 || local > d.dur) return null;
        const p = clamp(local / d.dur, 0, 1);
        const e = easeInOutCubic(p);
        const xPx = d.sxPx + (DOC_TARGET_X_PX - d.sxPx) * e;
        const yPx = d.syPx + (DOC_TARGET_Y_PX - d.syPx) * e;
        const scale = p < 0.6 ? 1 - 0.1 * p : 0.94 - 0.84 * ((p - 0.6) / 0.4);
        const opacity = p < 0.75 ? 1 : 1 - (p - 0.75) / 0.25;
        const rotation = d.rot + e * (d.rot > 0 ? 70 : -70);
        return (
          <div
            key={d.id}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              transform: `translate3d(${xPx}px, ${yPx}px, 0) translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
              opacity,
              willChange: 'transform, opacity',
            }}
          >
            <DocCard type={d.type} />
          </div>
        );
      })}
    </div>
  );
}

const DocCard = memo(function DocCard({ type }: { type: string }) {
  const W = 108, H = 130;
  const base: CSSProperties = {
    width: W, height: H, borderRadius: 8, background: '#ffffff',
    border: '1px solid rgba(10,26,36,0.10)',
    boxShadow: '0 18px 36px -12px rgba(10,26,36,0.30), 0 2px 4px rgba(10,26,36,0.08)',
    padding: 9,
    display: 'flex', flexDirection: 'column', gap: 6,
    color: C.ink,
    fontFamily: "'Inter','Noto Sans JP',sans-serif",
  };
  const labelStyle: CSSProperties = { fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' };
  const subStyle: CSSProperties = { fontSize: 9, fontWeight: 600, color: C.inkMuted };

  if (type === 'drawing') {
    return (
      <div style={base}>
        <div className="flex items-center justify-between">
          <span style={{ ...labelStyle, color: C.primaryDeep }}>DRAWING</span>
          <FileText size={11} strokeWidth={2.4} color={C.primary} />
        </div>
        <div style={subStyle}>P-1138 / A2</div>
        <div style={{ flex: 1, background: '#FAFBFC', border: '1px solid rgba(10,26,36,0.06)', borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
          <svg viewBox="0 0 100 60" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <rect x="10" y="10" width="80" height="40" fill="none" stroke={C.ink} strokeWidth="1" />
            <circle cx="35" cy="30" r="8" fill="none" stroke={C.ink} strokeWidth="1" />
            <line x1="10" y1="50" x2="90" y2="50" stroke={C.primary} strokeWidth="0.8" strokeDasharray="2 1" />
            <line x1="55" y1="22" x2="80" y2="22" stroke={C.ink} strokeWidth="0.6" />
            <line x1="55" y1="32" x2="75" y2="32" stroke={C.ink} strokeWidth="0.6" />
            <line x1="55" y1="42" x2="78" y2="42" stroke={C.ink} strokeWidth="0.6" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === 'cad') {
    return (
      <div style={{ ...base, background: '#0E5D6B', color: '#fff', border: '1px solid rgba(255,255,255,0.18)' }}>
        <div className="flex items-center justify-between">
          <span style={{ ...labelStyle, color: '#C8EAEE' }}>3D CAD</span>
          <Box size={11} strokeWidth={2.4} color="#fff" />
        </div>
        <div style={{ ...subStyle, color: 'rgba(255,255,255,0.7)' }}>part_07.stp</div>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
          <svg viewBox="0 0 100 60" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            {/* isometric cube */}
            <g stroke={C.primary} strokeWidth="1" fill="none">
              <polygon points="50,12 78,24 78,48 50,60 22,48 22,24" />
              <line x1="50" y1="12" x2="50" y2="36" />
              <line x1="22" y1="24" x2="50" y2="36" />
              <line x1="78" y1="24" x2="50" y2="36" />
            </g>
            <g fill="#37B7C4" opacity="0.18">
              <polygon points="50,12 78,24 50,36 22,24" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === 'estimate') {
    return (
      <div style={base}>
        <div className="flex items-center justify-between">
          <span style={{ ...labelStyle, color: C.primaryDeep }}>QUOTE</span>
          <Calculator size={11} strokeWidth={2.4} color={C.primary} />
        </div>
        <div style={subStyle}>Q-2024-039</div>
        <div style={{ flex: 1, padding: 6, background: '#FAFBFC', border: '1px solid rgba(10,26,36,0.06)', borderRadius: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div className="flex items-center justify-between" style={{ fontSize: 8 }}>
            <span style={{ color: C.inkMuted }}>材料費</span>
            <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>¥ 82,400</span>
          </div>
          <div className="flex items-center justify-between" style={{ fontSize: 8 }}>
            <span style={{ color: C.inkMuted }}>加工費</span>
            <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>¥ 91,800</span>
          </div>
          <div style={{ height: 1, background: 'rgba(10,26,36,0.08)' }} />
          <div className="flex items-center justify-between" style={{ fontSize: 9 }}>
            <span style={{ color: C.ink, fontWeight: 700 }}>合計</span>
            <span style={{ fontWeight: 900, fontVariantNumeric: 'tabular-nums', color: C.primaryDeep }}>¥ 184,200</span>
          </div>
        </div>
      </div>
    );
  }
  if (type === 'trouble') {
    return (
      <div style={{ ...base, borderColor: 'rgba(245,158,11,0.5)' }}>
        <div className="flex items-center justify-between">
          <span style={{ ...labelStyle, color: '#92400e' }}>過去トラ</span>
          <AlertTriangle size={11} strokeWidth={2.4} color="#d97706" />
        </div>
        <div style={subStyle}>2024-03 / TRB-088</div>
        <div style={{ flex: 1, padding: 6, background: '#FFFBEB', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 4, fontSize: 8, lineHeight: 1.4 }}>
          <div style={{ fontWeight: 800, color: C.ink, marginBottom: 3 }}>バリ大 / 焼け跡</div>
          <div style={{ color: C.inkSoft }}>SUS304 t2.0 板。ベンダーR=1.5</div>
          <div style={{ color: '#a16207', fontWeight: 700, marginTop: 4 }}>→ R=2.5 に変更で解消</div>
        </div>
      </div>
    );
  }
  if (type === 'spec') {
    return (
      <div style={base}>
        <div className="flex items-center justify-between">
          <span style={{ ...labelStyle, color: C.primaryDeep }}>SPEC</span>
          <ClipboardList size={11} strokeWidth={2.4} color={C.primary} />
        </div>
        <div style={subStyle}>32 項目</div>
        <div style={{ flex: 1, padding: 6, background: '#FAFBFC', border: '1px solid rgba(10,26,36,0.06)', borderRadius: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {['材質  SUS304', '板厚  2.0 mm', '表面  HL', '公差  ±0.1'].map((row, i) => (
            <div key={i} className="flex items-center gap-1.5" style={{ fontSize: 8 }}>
              <span style={{ width: 4, height: 4, borderRadius: 99, background: C.primary, flexShrink: 0 }} />
              <span style={{ color: C.ink, fontWeight: 600 }}>{row}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (type === 'inspect') {
    return (
      <div style={base}>
        <div className="flex items-center justify-between">
          <span style={{ ...labelStyle, color: C.primaryDeep }}>INSPECT</span>
          <ShieldCheck size={11} strokeWidth={2.4} color={C.primary} />
        </div>
        <div style={subStyle}>C-A8 / Lot 240829-A</div>
        <div style={{ flex: 1, padding: 8, background: '#F0FDF4', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {['寸法', '表面処理', 'バリ取り'].map((row, i) => (
            <div key={i} className="flex items-center justify-between" style={{ fontSize: 8 }}>
              <span style={{ color: C.ink, fontWeight: 600 }}>{row}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, color: '#15803d', fontWeight: 800 }}>
                <Check size={9} strokeWidth={3.2} /> OK
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
});

// ── Monitor + Screen contents ─────────────────────────────────────────────
function Monitor({ t, isDark }: { t: number; isDark: boolean }) {
  const flash = bell(t, 3.5, 4.6, 0.4);
  // Each scene fully forms, holds 0.7s, then crossfades (0.6s)
  const chatVis     = clamp(ramp(t, 4.6, 5.2) - ramp(t, 8.0, 8.6), 0, 1);
  const estimateVis = clamp(ramp(t, 8.0, 8.6) - ramp(t, 11.8, 12.4), 0, 1);
  const bomVis      = clamp(ramp(t, 11.8, 12.4) - ramp(t, 16.0, 16.6), 0, 1);
  const diffVis     = clamp(ramp(t, 16.0, 16.6) - ramp(t, 19.7, 20.3), 0, 1);
  const whiteOut    = clamp(ramp(t, 19.7, 20.3) - ramp(t, 21.4, 22.0), 0, 1);
  const monitorAlpha = 1 - ramp(t, 21.4, 22.0);
  if (monitorAlpha <= 0.001) return null;

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center"
      style={{ opacity: monitorAlpha, transform: `scale(${1 + (1 - monitorAlpha) * 0.08})`, transformOrigin: 'center' }}
    >
      {/* monitor frame */}
      <div
        style={{
          width: '92%',
          background: '#1a2530',
          borderRadius: 18,
          padding: 9,
          boxShadow: `0 40px 80px -24px rgba(0,0,0,${isDark ? 0.7 : 0.35}), 0 0 0 1px rgba(255,255,255,0.05)`,
        }}
      >
        {/* screen */}
        <div
          style={{
            position: 'relative',
            background: '#ffffff',
            borderRadius: 10,
            overflow: 'hidden',
            aspectRatio: '16 / 10',
          }}
        >
          {/* chrome */}
          <div
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '8px 12px',
              borderBottom: '1px solid #EEF1F4',
              background: '#fafbfc',
            }}
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span style={{ width: 7, height: 7, borderRadius: 99, background: '#FF5F57' }} />
                <span style={{ width: 7, height: 7, borderRadius: 99, background: '#FEBC2E' }} />
                <span style={{ width: 7, height: 7, borderRadius: 99, background: '#28C840' }} />
              </div>
              <span style={{ marginLeft: 8, fontSize: 9, fontWeight: 800, color: C.inkMuted, letterSpacing: '0.18em', fontFamily: "'Inter',sans-serif" }}>
                ARCHAIVE
              </span>
            </div>
            <span style={{ fontSize: 8, color: C.inkMuted, letterSpacing: '0.06em', fontFamily: "'Inter',sans-serif", fontWeight: 600 }}>
              すべての製品の記憶
            </span>
          </div>

          {/* content area */}
          <div style={{ position: 'relative', flex: 1, height: 'calc(100% - 30px)' }}>
            {chatVis > 0.01 && (
              <div style={{ position: 'absolute', inset: 0, opacity: chatVis }}>
                <ChatScreen t={t - 4.6} />
              </div>
            )}
            {estimateVis > 0.01 && (
              <div style={{ position: 'absolute', inset: 0, opacity: estimateVis }}>
                <EstimateScreen t={t - 8.0} />
              </div>
            )}
            {bomVis > 0.01 && (
              <div style={{ position: 'absolute', inset: 0, opacity: bomVis }}>
                <BomScreen t={t - 11.8} />
              </div>
            )}
            {diffVis > 0.01 && (
              <div style={{ position: 'absolute', inset: 0, opacity: diffVis }}>
                <DiffScreen t={t - 16.0} />
              </div>
            )}
            {/* wake flash overlay */}
            {flash > 0.01 && (
              <div
                aria-hidden
                style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: `linear-gradient(135deg, ${C.primary}66, ${C.primaryTint}00)`,
                  opacity: flash,
                  mixBlendMode: 'overlay',
                }}
              />
            )}
            {/* scanline */}
            {flash > 0.01 && (
              <div
                aria-hidden
                style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute', left: 0, right: 0, height: '40%',
                    background: `linear-gradient(180deg, transparent, ${C.primary}55, transparent)`,
                    animation: 'screen-scan 1.05s cubic-bezier(0.22,0.61,0.36,1) forwards',
                    willChange: 'transform',
                  }}
                />
                <style>{`@keyframes screen-scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(250%); } }`}</style>
              </div>
            )}
            {/* white-out overlay during finale transition */}
            {whiteOut > 0.01 && (
              <div
                aria-hidden
                style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: '#ffffff', opacity: whiteOut,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* stand */}
      <div style={{ width: '24%', height: 16, background: 'linear-gradient(180deg,#1a2530,#0e1620)', clipPath: 'polygon(20% 0,80% 0,100% 100%,0 100%)' }} />
      <div style={{ width: '40%', height: 6, background: '#0e1620', borderRadius: '0 0 6px 6px' }} />
    </div>
  );
}

// ── Chat Screen (past-trouble lookup) ─────────────────────────────────────
// local time: 0 at start of chat (t-3)
function ChatScreen({ t }: { t: number }) {
  // Timeline within chat (0 to ~3.5 visible):
  //   0.0–0.4   user message slides in
  //   0.6–1.1   typing dots
  //   1.1–1.6   AI message shell appears
  //   1.6–2.6   answer details appear in sequence
  const userT = clamp(t / 0.5, 0, 1);
  const dotsActive = t > 0.6 && t < 1.1;
  const aiShell = clamp((t - 1.1) / 0.4, 0, 1);
  const aiTitle = clamp((t - 1.5) / 0.3, 0, 1);
  const aiRow1 = clamp((t - 1.8) / 0.3, 0, 1);
  const aiRow2 = clamp((t - 2.1) / 0.3, 0, 1);
  const aiRow3 = clamp((t - 2.4) / 0.3, 0, 1);

  return (
    <div style={{ position: 'absolute', inset: 0, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10, fontFamily: "'Noto Sans JP','Inter',sans-serif", overflow: 'hidden' }}>
      {/* user message */}
      <div
        style={{
          alignSelf: 'flex-end', maxWidth: '78%',
          background: C.primary, color: '#fff',
          padding: '8px 12px', borderRadius: '14px 14px 4px 14px',
          fontSize: 11, fontWeight: 700, lineHeight: 1.4,
          transform: `translateY(${(1 - easeOutCubic(userT)) * 12}px)`,
          opacity: userT,
          boxShadow: `0 6px 16px -6px ${C.primary}80`,
        }}
      >
        前回のSUS304加工で起きたトラブルと対応は？
      </div>

      {/* AI message */}
      <div style={{ alignSelf: 'flex-start', maxWidth: '82%', opacity: aiShell, transform: `translateY(${(1 - easeOutCubic(aiShell)) * 12}px)`, display: 'flex', gap: 8 }}>
        <div
          style={{
            flexShrink: 0, width: 22, height: 22, borderRadius: 99,
            background: `linear-gradient(135deg, ${C.primaryDeep}, ${C.primary})`,
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 0 0 2px ${C.primaryTint}`,
          }}
        >
          <Sparkles size={11} strokeWidth={2.4} />
        </div>
        <div style={{ flex: 1 }}>
          {dotsActive ? (
            <div style={{ display: 'flex', gap: 3, padding: '6px 10px', background: '#F2F5F7', borderRadius: 12, width: 'fit-content' }}>
              {[0, 1, 2].map((i) => (
                <span key={i} style={{ width: 5, height: 5, borderRadius: 99, background: C.primaryStrong, animation: `dotPulse 0.9s ease-in-out ${i * 0.15}s infinite` }} />
              ))}
            </div>
          ) : null}
          {aiShell > 0.5 && (
            <div
              style={{
                background: '#F8FAFB',
                border: `1px solid ${C.primaryTint}`,
                borderRadius: 12,
                padding: 10,
                marginTop: dotsActive ? 4 : 0,
                fontSize: 11, lineHeight: 1.5, color: C.ink,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, opacity: aiTitle }}>
                <Check size={10} strokeWidth={3.2} color="#15803d" />
                <span style={{ fontWeight: 800 }}>1 件、見つかりました</span>
                <span style={{ fontSize: 9, fontWeight: 700, color: C.inkMuted, fontFamily: "'Inter',sans-serif" }}>
                  P-1138 / 2024-03
                </span>
              </div>
              <div style={{ marginTop: 8, opacity: aiRow1 }}>
                <div style={{ fontSize: 9, fontWeight: 800, color: C.inkMuted, letterSpacing: '0.12em' }}>事象</div>
                <div style={{ fontWeight: 700 }}>SUS304 t2.0 板。バリ大 / 焼け跡発生</div>
              </div>
              <div style={{ marginTop: 6, opacity: aiRow2 }}>
                <div style={{ fontSize: 9, fontWeight: 800, color: C.inkMuted, letterSpacing: '0.12em' }}>原因</div>
                <div style={{ fontWeight: 700 }}>ベンダーR=1.5 では SUS304 に対し過剰負荷</div>
              </div>
              <div style={{ marginTop: 6, opacity: aiRow3 }}>
                <div style={{ fontSize: 9, fontWeight: 800, color: C.inkMuted, letterSpacing: '0.12em' }}>対応</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 99, background: C.primary + '20', color: C.primaryDeep, fontWeight: 800 }}>
                  ベンダー R = 2.5 に変更で解消
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`@keyframes dotPulse { 0%,100% { opacity: 0.3; transform: translateY(0); } 50% { opacity: 1; transform: translateY(-2px); } }`}</style>
    </div>
  );
}

// ── Diff Screen (drawing version comparison) ──────────────────────────────
// Layout mirrors ARCHAIVE 差分検出 UI: top bar + tabs + drawing canvas with
// red/blue diff overlays + right-side diff-info panel with thumbnails.
function DiffScreen({ t }: { t: number }) {
  const header = clamp(t / 0.4, 0, 1);
  const tabs   = clamp((t - 0.3) / 0.4, 0, 1);
  const draw   = clamp((t - 0.6) / 0.8, 0, 1);
  const diffs  = clamp((t - 1.3) / 0.7, 0, 1);
  const side   = clamp((t - 1.6) / 0.5, 0, 1);
  const thumbs = clamp((t - 2.0) / 0.6, 0, 1);
  const note   = clamp((t - 2.5) / 0.5, 0, 1);

  const red = '#F64848';
  const blue = '#2563EB';

  return (
    <div
      style={{
        position: 'absolute', inset: 0, padding: '10px 12px',
        display: 'flex', flexDirection: 'column', gap: 8,
        fontFamily: "'Noto Sans JP','Inter',sans-serif",
        overflow: 'hidden', background: '#ffffff',
      }}
    >
      {/* top bar */}
      <div
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
          opacity: header, transform: `translateY(${(1 - easeOutCubic(header)) * 4}px)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 800, color: C.ink }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 14, height: 14, color: C.ink, fontSize: 10, fontWeight: 900 }}>±</span>
          <span>差分検出</span>
          <span
            style={{
              background: red, color: '#fff',
              fontSize: 9, fontWeight: 800, padding: '2px 7px', borderRadius: 4,
              letterSpacing: '0.04em',
            }}
          >
            類似度: 高
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, color: C.inkMuted, fontWeight: 700 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, padding: '3px 7px', border: '1px solid rgba(10,26,36,0.10)', borderRadius: 6, background: '#fff', color: C.ink }}>
            ‹ 前の図面
          </span>
          <span style={{ fontFamily: "'Inter',sans-serif", fontVariantNumeric: 'tabular-nums' }}>2 / 10</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, padding: '3px 7px', border: '1px solid rgba(10,26,36,0.10)', borderRadius: 6, background: '#fff', color: C.ink }}>
            次の図面 ›
          </span>
        </div>
      </div>

      {/* tabs row */}
      <div
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          opacity: tabs, transform: `translateY(${(1 - easeOutCubic(tabs)) * 4}px)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 2, padding: 2, background: '#F2F5F7', borderRadius: 8 }}>
          <span style={{ padding: '4px 10px', borderRadius: 6, background: C.primary, color: '#fff', fontSize: 10, fontWeight: 800 }}>差分表示</span>
          <span style={{ padding: '4px 10px', fontSize: 10, fontWeight: 700, color: C.inkMuted }}>元の図面</span>
          <span style={{ padding: '4px 10px', fontSize: 10, fontWeight: 700, color: C.inkMuted }}>類似図面</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3, padding: 3, background: '#fff', border: '1px solid rgba(10,26,36,0.08)', borderRadius: 8 }}>
          {['⤢', '✂', 'β', '≡'].map((g, i) => (
            <span key={i} style={{ width: 18, height: 18, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4, color: C.inkMuted, fontSize: 10, fontWeight: 700 }}>{g}</span>
          ))}
        </div>
      </div>

      {/* main: canvas + sidebar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 8, flex: 1, minHeight: 0 }}>
        {/* canvas */}
        <div style={{ position: 'relative', background: '#ffffff', border: '1px solid rgba(10,26,36,0.10)', borderRadius: 6, overflow: 'hidden' }}>
          <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <defs>
              <pattern id="hatch" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="4" stroke={C.inkMuted} strokeWidth="0.4" />
              </pattern>
            </defs>

            {/* hatched top strip */}
            <g style={{ opacity: draw }}>
              <rect x="2" y="2" width="196" height="6" fill="url(#hatch)" opacity="0.35" />
              <text x="6" y="13.5" fontSize="3" fontWeight="700" fill={C.inkSoft} fontFamily="Inter,sans-serif">A1</text>
              <text x="16" y="13.5" fontSize="3" fontWeight="700" fill={C.inkSoft} fontFamily="Inter,sans-serif">B1</text>
            </g>

            {/* 2D drawing (left side of canvas) */}
            <g
              style={{
                strokeDasharray: 400,
                strokeDashoffset: 400 * (1 - draw),
                opacity: draw > 0 ? 1 : 0,
                transition: 'none',
              }}
              fill="none"
              stroke={C.ink}
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* main rectangle */}
              <rect x="18" y="40" width="78" height="55" />
              {/* center circle */}
              <circle cx="58" cy="68" r="11" />
              {/* 2 small holes */}
              <circle cx="35" cy="86" r="1.6" />
              <circle cx="80" cy="86" r="1.6" />
            </g>

            {/* dimensions */}
            <g style={{ opacity: draw }} fill={C.inkSoft} fontFamily="Inter,sans-serif" stroke="none">
              <text x="58" y="26" fontSize="3" textAnchor="middle" fontWeight="700">49.00</text>
              <text x="46" y="32" fontSize="2.6" textAnchor="middle">23.00</text>
              <text x="34" y="38" fontSize="2.4" textAnchor="middle">14.00</text>
              <text x="13" y="68" fontSize="2.6" textAnchor="middle" transform="rotate(-90 13 68)">18.00±0.1</text>
              <text x="58" y="106" fontSize="2.8" textAnchor="middle" fontWeight="700">38.00</text>
              <text x="100" y="58" fontSize="2.4" fontWeight="600">2-φ2.50</text>
              <text x="70" y="65" fontSize="2.4">φ18.00</text>
            </g>

            {/* dimension lines */}
            <g style={{ opacity: draw }} stroke={C.inkSoft} strokeWidth="0.18">
              <line x1="18" y1="28" x2="96" y2="28" />
              <line x1="18" y1="100" x2="96" y2="100" />
              <line x1="10" y1="40" x2="10" y2="95" />
            </g>

            {/* 3D isometric (right side of canvas) */}
            <g
              transform="translate(120, 50)"
              style={{
                opacity: draw,
                strokeDasharray: 200,
                strokeDashoffset: 200 * (1 - draw),
              }}
              fill="none"
              stroke={C.ink}
              strokeWidth="0.5"
              strokeLinecap="round"
            >
              {/* face */}
              <polygon points="0,10 40,0 60,8 60,40 40,48 0,40" />
              {/* depth */}
              <line x1="0" y1="10" x2="20" y2="-5" />
              <line x1="20" y1="-5" x2="60" y2="-12" />
              <line x1="60" y1="-12" x2="60" y2="8" />
              <line x1="20" y1="-5" x2="20" y2="20" />
              <line x1="20" y1="20" x2="60" y2="12" />
              {/* circular hole */}
              <ellipse cx="30" cy="22" rx="8" ry="7" />
              <ellipse cx="30" cy="22" rx="5" ry="4.4" />
              {/* small holes */}
              <circle cx="48" cy="14" r="1.3" />
              <circle cx="12" cy="14" r="1.3" />
              <circle cx="48" cy="36" r="1.3" />
              <circle cx="12" cy="36" r="1.3" />
            </g>

            {/* DIFF overlays (red = removed/before, blue = added/after) */}
            <g style={{ opacity: diffs }}>
              {/* offset red/blue arcs on center hole */}
              <circle cx="58" cy="68" r="12.2" fill="none" stroke={red} strokeWidth="0.6" />
              <circle cx="58" cy="68" r="10.0" fill="none" stroke={blue} strokeWidth="0.6" />
              {/* on 3D */}
              <ellipse cx="150" cy="72" rx="9" ry="7.6" fill="none" stroke={red} strokeWidth="0.6" />
              <ellipse cx="150" cy="72" rx="6" ry="5.2" fill="none" stroke={blue} strokeWidth="0.6" />
              {/* small holes diff dots */}
              <circle cx="35" cy="86" r="2.2" fill="none" stroke={red} strokeWidth="0.5" />
              <circle cx="80" cy="86" r="2.2" fill="none" stroke={blue} strokeWidth="0.5" />
            </g>

            {/* title block bottom */}
            <g style={{ opacity: draw }}>
              <rect x="2" y="113" width="196" height="14" fill="none" stroke={C.ink} strokeWidth="0.3" />
              <line x1="55" y1="113" x2="55" y2="127" stroke={C.ink} strokeWidth="0.3" />
              <line x1="100" y1="113" x2="100" y2="127" stroke={C.ink} strokeWidth="0.3" />
              <line x1="135" y1="113" x2="135" y2="127" stroke={C.ink} strokeWidth="0.3" />
              <line x1="165" y1="113" x2="165" y2="127" stroke={C.ink} strokeWidth="0.3" />
              <line x1="2" y1="120" x2="198" y2="120" stroke={C.ink} strokeWidth="0.3" />
              <g fontSize="2.4" fontFamily="Inter,sans-serif" fill={C.inkMuted}>
                <text x="5" y="117.5">製図</text>
                <text x="58" y="117.5">図番</text>
                <text x="103" y="117.5">商品名</text>
                <text x="138" y="117.5">材質</text>
                <text x="168" y="117.5">寸法</text>
              </g>
              <g fontSize="2.8" fontFamily="Inter,sans-serif" fill={C.ink} fontWeight="700">
                <text x="5" y="125">T.Tsuji</text>
                <text x="58" y="125">ab47890</text>
                <text x="103" y="125">筐体パーツ</text>
                <text x="138" y="125">SUS302</text>
                <text x="168" y="125">210</text>
              </g>
            </g>

            {/* zoom indicator */}
            <g style={{ opacity: side > 0 ? 1 : 0 }}>
              <rect x="174" y="100" width="22" height="9" rx="2" fill="#fff" stroke="rgba(10,26,36,0.16)" strokeWidth="0.3" />
              <text x="185" y="106.5" fontSize="3" fontWeight="700" fill={C.inkSoft} textAnchor="middle" fontFamily="Inter,sans-serif">144%</text>
            </g>
          </svg>
        </div>

        {/* right side panel */}
        <div
          style={{
            display: 'flex', flexDirection: 'column', gap: 6,
            opacity: side, transform: `translateX(${(1 - easeOutCubic(side)) * 12}px)`,
          }}
        >
          {/* mini preview */}
          <div style={{ position: 'relative', height: 64, background: '#FAFBFC', border: '1px solid rgba(10,26,36,0.08)', borderRadius: 6, overflow: 'hidden' }}>
            <svg viewBox="0 0 100 64" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <rect x="4" y="4" width="92" height="56" fill="none" stroke={C.inkSoft} strokeWidth="0.4" />
              <rect x="14" y="18" width="40" height="30" fill="none" stroke={C.ink} strokeWidth="0.4" />
              <circle cx="34" cy="33" r="6" fill="none" stroke={C.ink} strokeWidth="0.4" />
              <g transform="translate(60, 22)">
                <polygon points="0,5 18,0 28,3 28,20 18,25 0,20" fill="none" stroke={C.ink} strokeWidth="0.4" />
                <ellipse cx="14" cy="12" rx="4" ry="3.5" fill="none" stroke={C.ink} strokeWidth="0.4" />
              </g>
              {/* viewport rect */}
              <rect x="22" y="14" width="50" height="36" fill="none" stroke={C.primary} strokeWidth="0.8" />
            </svg>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 9, fontWeight: 700, color: C.inkMuted, fontFamily: "'Inter',sans-serif" }}>
            <span>ズーム</span>
            <span>144%</span>
          </div>

          {/* divider */}
          <div style={{ height: 1, background: 'rgba(10,26,36,0.06)' }} />

          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 10.5, fontWeight: 800, color: C.ink }}>差分情報</span>
            <span style={{ fontSize: 9, fontWeight: 700, color: C.inkMuted, fontFamily: "'Inter',sans-serif" }}>
              検出された差分: <span style={{ color: red, fontWeight: 900 }}>2 件</span>
            </span>
          </div>

          {/* diff thumbs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, flex: 1, minHeight: 0 }}>
            {[0, 1].map((i) => {
              const o = clamp((thumbs - i * 0.3), 0, 1);
              return (
                <div key={i} style={{ position: 'relative', background: '#FAFBFC', border: '1px solid rgba(10,26,36,0.10)', borderRadius: 6, overflow: 'hidden', opacity: o, transform: `translateY(${(1 - o) * 6}px)` }}>
                  <svg viewBox="0 0 70 50" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                    {i === 0 ? (
                      <g>
                        <circle cx="35" cy="25" r="10" fill="none" stroke={C.ink} strokeWidth="0.5" />
                        <circle cx="35" cy="25" r="11.5" fill="none" stroke={red} strokeWidth="0.6" />
                        <circle cx="35" cy="25" r="9.0" fill="none" stroke={blue} strokeWidth="0.6" />
                        <text x="35" y="46" fontSize="3" fontWeight="700" fill={C.inkSoft} textAnchor="middle" fontFamily="Inter,sans-serif">φ18.00</text>
                      </g>
                    ) : (
                      <g>
                        <rect x="14" y="10" width="42" height="30" fill="none" stroke={C.ink} strokeWidth="0.5" />
                        <circle cx="22" cy="32" r="2" fill="none" stroke={red} strokeWidth="0.5" />
                        <circle cx="48" cy="32" r="2" fill="none" stroke={blue} strokeWidth="0.5" />
                        <text x="35" y="46" fontSize="3" fontWeight="700" fill={C.inkSoft} textAnchor="middle" fontFamily="Inter,sans-serif">φ2.50</text>
                      </g>
                    )}
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* note */}
      <div
        style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '6px 10px',
          background: C.primary + '15',
          border: `1px solid ${C.primaryTint}`,
          borderRadius: 8,
          fontSize: 10, fontWeight: 700, color: C.primaryDeep,
          opacity: note, transform: `translateY(${(1 - easeOutCubic(note)) * 6}px)`,
        }}
      >
        <Sparkles size={11} strokeWidth={2.4} />
        <span style={{ color: C.ink }}>変更理由:</span>
        <span>過去トラ TRB-088 の対応により <span style={{ fontFamily: "'Inter',sans-serif" }}>R 1.5 → 2.5</span></span>
      </div>
    </div>
  );
}

// ── Estimate auto-gen screen ──────────────────────────────────────────────
// Visualizes ARCHAIVE generating a quote line-by-line.
function EstimateScreen({ t }: { t: number }) {
  // local t 0 = scene start
  const header = clamp(t / 0.5, 0, 1);
  // 4 lines, staggered with typing feel
  const lineTs = [0.7, 1.1, 1.5, 1.9].map((s) => clamp((t - s) / 0.45, 0, 1));
  const totalT = clamp((t - 2.3) / 0.5, 0, 1);
  const stampT = clamp((t - 2.7) / 0.4, 0, 1);

  const rows = [
    { label: '材料費',    detail: 'SUS304 t2.0 × 2枚',         value: '¥ 82,400' },
    { label: '加工費',    detail: 'レーザー + ベンド + バリ取り', value: '¥ 91,800' },
    { label: '工数',      detail: '段取り 0.5h + 加工 2.2h',     value: '2.7 h' },
    { label: '管理費',    detail: '10% (社内基準)',              value: '¥ 10,000' },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8, fontFamily: "'Noto Sans JP','Inter',sans-serif", overflow: 'hidden' }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: header }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: C.ink }}>
          見積書 — <span style={{ fontFamily: "'Inter',sans-serif", color: C.primaryDeep }}>Q-2024-039</span>
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 9, fontWeight: 800, color: C.primaryDeep, background: C.primary + '20', padding: '2px 8px', borderRadius: 99 }}>
          <span style={{ width: 5, height: 5, borderRadius: 99, background: C.primary, animation: 'dotPulse 0.9s ease-in-out infinite' }} />
          AI 自動生成中
        </span>
      </div>

      {/* breakdown rows */}
      <div style={{ background: '#F8FAFB', border: `1px solid ${C.primaryTint}`, borderRadius: 10, padding: 10, display: 'flex', flexDirection: 'column', gap: 6, minHeight: 0, flex: 1 }}>
        {rows.map((r, i) => {
          const o = lineTs[i];
          const widthPct = 100 * o;
          return (
            <div key={r.label} style={{ position: 'relative' }}>
              <div style={{
                display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8,
                opacity: o, transform: `translateY(${(1 - o) * 4}px)`,
                fontSize: 10.5,
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, minWidth: 0 }}>
                  <span style={{ fontWeight: 800, color: C.ink, whiteSpace: 'nowrap' }}>{r.label}</span>
                  <span style={{ color: C.inkMuted, fontSize: 9.5, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.detail}</span>
                </div>
                <span style={{ fontWeight: 900, fontVariantNumeric: 'tabular-nums', color: C.ink, fontFamily: "'Inter','Noto Sans JP',sans-serif", whiteSpace: 'nowrap' }}>
                  {r.value}
                </span>
              </div>
              {/* underline progress */}
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: -2, height: 1, background: 'rgba(10,26,36,0.06)' }} />
              <div style={{ position: 'absolute', left: 0, bottom: -2, height: 1, width: `${widthPct}%`, background: C.primary }} />
            </div>
          );
        })}
      </div>

      {/* total */}
      <div
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 14px', borderRadius: 10,
          background: C.primary, color: '#fff',
          opacity: totalT, transform: `translateY(${(1 - totalT) * 8}px)`,
          boxShadow: `0 14px 30px -10px ${C.primary}66`,
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.08em' }}>合計 (税抜)</span>
        <span style={{ fontSize: 17, fontWeight: 900, fontFamily: "'Inter','Noto Sans JP',sans-serif", fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.01em' }}>
          ¥ 184,200
        </span>
      </div>

      {/* stamp */}
      <div
        style={{
          position: 'absolute',
          right: 22, bottom: 16,
          display: 'inline-flex', alignItems: 'center', gap: 5,
          padding: '5px 9px', borderRadius: 6,
          border: `1.5px solid ${C.primaryStrong}`,
          color: C.primaryStrong,
          fontSize: 9.5, fontWeight: 900, letterSpacing: '0.12em',
          transform: `rotate(-6deg) scale(${0.6 + 0.4 * stampT})`,
          opacity: stampT,
          background: 'rgba(255,255,255,0.7)',
          fontFamily: "'Inter',sans-serif",
        }}
      >
        ✓ AUTO-GENERATED
      </div>

      <style>{`@keyframes dotPulse { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }`}</style>
    </div>
  );
}

// ── BOM tree formation screen ─────────────────────────────────────────────
// List-tree view matching the ARCHAIVE BOM一覧 UI screenshot:
// root product on top, expandable sub-assemblies with chevron + layers icon,
// leaf parts with cpu icon, each row has [code] [xQty] [name].
function BomScreen({ t }: { t: number }) {
  const header = clamp(t / 0.45, 0, 1);

  // rows in display order, with appear time `at`
  const rows = [
    { id: 'root',   level: 0, kind: 'root', code: 'GAC-PSA-M25-ACT-101', name: '高精度サーボアクチュエータユニット', qty: '',    at: 0.30 },
    { id: 's1',     level: 1, kind: 'sub',  code: 'GAC-RGU-M25-MOD',     name: '高精度減速機構部',               qty: 'x1',  at: 0.60 },
    { id: 's1-1',   level: 2, kind: 'leaf', code: 'GAC-PHG-M2.5-35T',    name: '精密ヘルカルギヤ',               qty: 'x1',  at: 0.85 },
    { id: 's1-2',   level: 2, kind: 'leaf', code: 'GAC-DGBB-6206-2RS',   name: '精密深溝玉軸受',                 qty: 'x4',  at: 1.05 },
    { id: 's1-3',   level: 2, kind: 'leaf', code: 'GAC-SFT-40-SCM',      name: '出力シャフト',                   qty: 'x1',  at: 1.25 },
    { id: 's1-4',   level: 2, kind: 'leaf', code: 'GAC-CAS-125-AL',      name: 'アルミダイカストハウジング',     qty: 'x1',  at: 1.45 },
    { id: 's2',     level: 1, kind: 'sub',  code: 'GAC-MOT-ACT-SUB',     name: 'モータ駆動サブアッセンブリ',     qty: 'x1',  at: 1.75 },
    { id: 's2-1',   level: 2, kind: 'leaf', code: 'GAC-MOT-BLDC-01',     name: 'ブラシレスDCモータ',             qty: 'x1',  at: 2.00 },
    { id: 's2-2',   level: 2, kind: 'leaf', code: 'GAC-ENC-ABS-16',      name: 'アブソリュートエンコーダ',       qty: 'x1',  at: 2.20 },
    { id: 's3',     level: 1, kind: 'sub',  code: 'GAC-CON-IF-ASSY',     name: 'インターフェース制御サブアッセンブリ', qty: 'x1',  at: 2.50 },
    { id: 's3-1',   level: 2, kind: 'leaf', code: 'C-2W-M-001',          name: '2極防水コネクタ オス',           qty: 'x2',  at: 2.75 },
    { id: 's3-2',   level: 2, kind: 'leaf', code: 'GAC-PCB-PSA-MAIN',    name: 'メイン制御基板',                 qty: 'x1',  at: 2.95 },
    { id: 'l1',     level: 1, kind: 'leaf', code: 'GAC-BOLT-M6-20',      name: '六角穴付きボルト (M6×20)',       qty: 'x12', at: 3.20 },
  ] as const;
  const footer = clamp((t - 3.4) / 0.4, 0, 1);

  return (
    <div style={{ position: 'absolute', inset: 0, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8, fontFamily: "'Noto Sans JP','Inter',sans-serif", overflow: 'hidden', background: '#ffffff' }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: header }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 800, color: C.ink }}>
          <Layers size={12} strokeWidth={2.4} color={C.primaryDeep} />
          <span>BOM構造</span>
          <span style={{ color: C.inkMuted, fontWeight: 700, fontFamily: "'Inter',sans-serif" }}>GAC-PSA-M25-ACT-101</span>
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 9, fontWeight: 800, color: C.primaryDeep, background: C.primary + '20', padding: '2px 8px', borderRadius: 99 }}>
          <span style={{ width: 5, height: 5, borderRadius: 99, background: C.primary, animation: 'dotPulse 0.9s ease-in-out infinite' }} />
          ツリー構築中
        </span>
      </div>

      {/* tree list */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', background: '#ffffff', border: '1px solid rgba(10,26,36,0.06)', borderRadius: 8 }}>
        {rows.map((r) => {
          const o = clamp((t - r.at) / 0.35, 0, 1);
          return (
            <BomRow
              key={r.id}
              level={r.level}
              kind={r.kind}
              code={r.code}
              name={r.name}
              qty={r.qty}
              opacity={o}
              ty={(1 - o) * 4}
              last={r.id === 'l1'}
            />
          );
        })}
      </div>

      {/* footer summary */}
      <div
        style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '6px 10px',
          background: C.primary + '15',
          border: `1px solid ${C.primaryTint}`,
          borderRadius: 8,
          fontSize: 10, fontWeight: 700, color: C.primaryDeep,
          opacity: footer,
          transform: `translateY(${(1 - footer) * 6}px)`,
        }}
      >
        <Sparkles size={11} strokeWidth={2.4} />
        <span style={{ color: C.ink }}>13 ノード /</span>
        <span>過去の図面・帳票から自動構築</span>
      </div>

      <style>{`@keyframes dotPulse { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }`}</style>
    </div>
  );
}

function BomRow({ level, kind, code, name, qty, opacity, ty, last }: { level: number; kind: 'root' | 'sub' | 'leaf'; code: string; name: string; qty: string; opacity: number; ty: number; last: boolean }) {
  // base padding-left scales with level
  const pl = 10 + level * 18;
  const iconColor = kind === 'root' ? C.primary : (kind === 'sub' ? C.primaryDeep : C.inkSoft);
  const Icon = kind === 'root' ? Package : (kind === 'sub' ? Layers : Cpu);
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex', alignItems: 'center', gap: 6,
        paddingTop: 5, paddingBottom: 5, paddingLeft: pl, paddingRight: 10,
        borderBottom: last ? 'none' : '1px solid rgba(10,26,36,0.04)',
        opacity, transform: `translateY(${ty}px)`,
      }}
    >
      {/* tree guides */}
      {level >= 1 && (
        <span aria-hidden style={{ position: 'absolute', left: 18, top: 0, bottom: 0, width: 1, background: 'rgba(10,26,36,0.08)' }} />
      )}
      {level >= 2 && (
        <span aria-hidden style={{ position: 'absolute', left: 36, top: 0, bottom: 0, width: 1, background: 'rgba(10,26,36,0.08)' }} />
      )}
      {/* chevron for sub-assembly rows */}
      {kind === 'sub' && (
        <ChevronDown size={10} strokeWidth={2.4} color={C.inkMuted} style={{ marginLeft: -4, marginRight: 0 }} />
      )}
      {/* icon */}
      <span
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 18, height: 18,
          borderRadius: 4,
          background: kind === 'root' ? C.primarySoft : (kind === 'sub' ? C.primarySoft : 'rgba(10,26,36,0.04)'),
          color: iconColor,
          flexShrink: 0,
        }}
      >
        <Icon size={11} strokeWidth={2.4} />
      </span>
      {/* code */}
      <span
        style={{
          fontFamily: "'Inter','JetBrains Mono',ui-monospace,monospace",
          fontWeight: kind === 'root' ? 800 : 700,
          fontSize: kind === 'root' ? 11 : 10.5,
          color: C.ink,
          letterSpacing: '0.01em',
          whiteSpace: 'nowrap',
        }}
      >
        {code}
      </span>
      {/* qty badge */}
      {qty && (
        <span
          style={{
            padding: '1px 5px',
            borderRadius: 4,
            background: 'rgba(10,26,36,0.06)',
            color: C.inkSoft,
            fontFamily: "'Inter',sans-serif",
            fontWeight: 700,
            fontSize: 8.5,
            letterSpacing: '0.01em',
          }}
        >
          {qty}
        </span>
      )}
      {/* name */}
      <span
        style={{
          color: C.inkMuted,
          fontSize: 9.5,
          fontWeight: 600,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          minWidth: 0,
        }}
      >
        {name}
      </span>
    </div>
  );
}

// Sequence (global t):
//   20.0  icon + wordmark appear at small scale
//   20.9  overshoot peak + glow burst
//   21.4  monitor frame already gone, logo locked
//   21.8  tagline + CTA hint fade in
//   22.5  hold
function LogoFinale({ t, isDark }: { t: number; isDark: boolean }) {
  if (t < 20.2) return null;
  const local = t - 20.3;
  const easeOutBack = (x: number) => {
    const c1 = 1.70158, c3 = c1 + 1;
    const k = clamp(x, 0, 1);
    return 1 + c3 * Math.pow(k - 1, 3) + c1 * Math.pow(k - 1, 2);
  };
  const logoT = clamp(local / 1.2, 0, 1);
  const logoScale = 0.2 + 0.8 * easeOutBack(logoT);
  const logoOpacity = clamp(local / 0.4, 0, 1);

  const burstT = clamp((local - 0.4) / 1.0, 0, 1);
  const burstScale = 0.4 + burstT * 1.8;
  const burstOpacity = burstT < 0.3 ? burstT / 0.3 : 1 - (burstT - 0.3) / 0.7;

  const tagT = clamp((local - 1.8) / 0.6, 0, 1);
  const ctaT = clamp((local - 2.3) / 0.5, 0, 1);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      {/* burst */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: '50%', top: '50%',
          width: '90%', aspectRatio: '1 / 1',
          transform: `translate(-50%, -50%) scale(${burstScale})`,
          background: `radial-gradient(circle, ${C.primary}55 0%, ${C.primary}25 35%, transparent 65%)`,
          opacity: burstOpacity,
          filter: 'blur(2px)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: '50%', top: '50%',
          width: '60%', aspectRatio: '1 / 1',
          transform: `translate(-50%, -50%) scale(${0.5 + burstT * 1.6})`,
          border: `2px solid ${C.primary}`,
          borderRadius: '999px',
          opacity: (1 - burstT) * 0.6,
        }}
      />

      {/* icon + wordmark (brand bicolor, no shadow) */}
      <div
        style={{
          transform: `scale(${logoScale})`,
          transformOrigin: 'center',
          opacity: logoOpacity,
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(12px, 1.6vw, 22px)',
          width: 'min(78%, 560px)',
          justifyContent: 'center',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/svg/logo.svg"
          alt=""
          style={{ height: 'clamp(48px, 6.4vw, 84px)', width: 'auto', flexShrink: 0 }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/svg/logo-text.svg"
          alt="ARCHAIVE"
          style={{ height: 'clamp(36px, 5vw, 64px)', width: 'auto', flexShrink: 0 }}
        />
      </div>

      {/* tagline */}
      <div
        style={{
          marginTop: 56,
          opacity: tagT,
          transform: `translateY(${(1 - easeOutCubic(tagT)) * 16}px)`,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
            fontWeight: 800,
            letterSpacing: '0.04em',
            color: isDark ? '#ffffff' : C.ink,
            fontFamily: "'Noto Sans JP','Inter',sans-serif",
          }}
        >
          ものづくりの記憶を、すべての人へ。
        </div>
        <div
          style={{
            marginTop: 6,
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: isDark ? 'rgba(255,255,255,0.7)' : C.inkMuted,
            fontFamily: "'Inter',sans-serif",
            textTransform: 'uppercase',
          }}
        >
          Knowledge Infrastructure for Manufacturing
        </div>
      </div>

      {/* CTA chevron hint — anchored near the bottom of the canvas */}
      <div
        style={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          opacity: ctaT,
          transform: `translateX(-50%) translateY(${(1 - easeOutCubic(ctaT)) * 12}px)`,
        }}
      >
        <span
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            color: isDark ? '#ffffff' : C.ink,
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: '0.04em',
            animation: 'hero-cta-bounce 2s ease-in-out 2.8s infinite',
          }}
        >
          ▼ 詳しく見る
        </span>
      </div>
      <style>{`@keyframes hero-cta-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }`}</style>
    </div>
  );
}

