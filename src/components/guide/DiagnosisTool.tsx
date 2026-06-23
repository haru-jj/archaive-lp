'use client';

// 再利用可能な診断ツール(F4)。設問・判定は diagnosisConfigs のデータ駆動。
// 状態はコンポーネントのメモリ内のみ（localStorage/sessionStorage は使わない）。
// 演出: 実行で 0→100% をイージング表示（約1.15秒）→ 判定をフェードアップで表示。
import { useEffect, useRef, useState } from 'react';
import { getDiagnosisConfig } from './diagnosisConfigs';

const DURATION = 1150; // ms
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function DiagnosisTool({ configId }: { configId?: string }) {
  const config = getDiagnosisConfig(configId);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [verdictId, setVerdictId] = useState<string | null>(null);
  const [incomplete, setIncomplete] = useState(false);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const run = () => {
    if (running) return;
    const allAnswered = config.questions.every((q) => answers[q.id]);
    if (!allAnswered) {
      setIncomplete(true);
      setVerdictId(null);
      return;
    }
    setIncomplete(false);
    setVerdictId(null);
    setRunning(true);
    setProgress(0);

    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      setProgress(Math.round(easeInOutCubic(t) * 100));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setRunning(false);
        setVerdictId(config.evaluate(answers));
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const verdict = verdictId ? config.verdicts.find((v) => v.id === verdictId) : null;

  return (
    <div className="guide-diag">
      <div className="diag-head">
        <div className="dh">{config.heading}</div>
        <span className="diag-badge">30 SEC</span>
      </div>
      <div className="dsub">{config.sub}</div>

      {config.questions.map((q, i) => (
        <div className="dq" key={q.id}>
          <div className="dq-label">
            <span className="dq-num">{i + 1}</span>
            {q.label}
          </div>
          <div className="dopts" role="group" aria-label={q.label}>
            {q.options.map((o) => {
              const active = answers[q.id] === o.value;
              return (
                <button
                  type="button"
                  key={o.value}
                  className={`dopt${active ? ' active' : ''}`}
                  aria-pressed={active}
                  onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: o.value }))}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <button type="button" className="drun" onClick={run} disabled={running}>
        {running ? '分析中…' : config.runLabel}
        {!running && <span aria-hidden="true">→</span>}
      </button>

      {running && (
        <div className="dprogress" role="status" aria-live="polite">
          <div className="dbar">
            <span style={{ width: `${progress}%` }} />
          </div>
          <div className="dpct">
            <small>ANALYZING</small>
            {progress}
            <small>%</small>
          </div>
        </div>
      )}

      {!running && incomplete && (
        <div className="dresult r-mid diag-in" role="status">
          <span className="rtag">{config.incompleteMessage}</span>
        </div>
      )}

      {!running && verdict && (
        <div className={`dresult r-${verdict.tone} diag-in`} role="status">
          <span className="rtag">{verdict.tag}</span>
          <span>{verdict.text}</span>
        </div>
      )}
    </div>
  );
}
