'use client';

// 再利用可能な診断ツール(F4)。設問・判定は diagnosisConfigs のデータ駆動。
// 状態はコンポーネントのメモリ内のみ（localStorage/sessionStorage は使わない）。
// 記事埋め込み(diagnosis:true)と /tools 単独設置の両方から同一コンポーネントを使い回す。
import { useState } from 'react';
import { getDiagnosisConfig } from './diagnosisConfigs';

export default function DiagnosisTool({ configId }: { configId?: string }) {
  const config = getDiagnosisConfig(configId);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [verdictId, setVerdictId] = useState<string | null>(null);
  const [incomplete, setIncomplete] = useState(false);

  const run = () => {
    const allAnswered = config.questions.every((q) => answers[q.id]);
    if (!allAnswered) {
      setIncomplete(true);
      setVerdictId(null);
      return;
    }
    setIncomplete(false);
    setVerdictId(config.evaluate(answers));
  };

  const verdict = verdictId ? config.verdicts.find((v) => v.id === verdictId) : null;

  return (
    <div className="guide-diag">
      <div className="dh">{config.heading}</div>
      <div className="dsub">{config.sub}</div>

      {config.questions.map((q) => (
        <div className="dq" key={q.id}>
          <label htmlFor={`diag-${config.id}-${q.id}`}>{q.label}</label>
          <select
            id={`diag-${config.id}-${q.id}`}
            value={answers[q.id] ?? ''}
            onChange={(e) =>
              setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
            }
          >
            <option value="">選択</option>
            {q.options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      ))}

      <button type="button" className="drun" onClick={run}>
        {config.runLabel}
      </button>

      {incomplete && (
        <div className="dresult r-mid" role="status">
          <span className="rtag">{config.incompleteMessage}</span>
        </div>
      )}

      {verdict && (
        <div className={`dresult r-${verdict.tone}`} role="status">
          <span className="rtag">{verdict.tag}</span>
          <span>{verdict.text}</span>
        </div>
      )}
    </div>
  );
}
