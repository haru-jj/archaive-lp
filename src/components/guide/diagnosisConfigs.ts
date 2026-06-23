// 診断ツールの設問・判定を「データ（設定）」として保持。1コンポーネントを使い回し、
// 将来別テーマの診断を増やせるよう configId で差し替え可能にする(F4)。
// ※このファイルは fs / server-only を含まないため、クライアントコンポーネントから import 可。

export type DiagTone = 'ok' | 'mid' | 'warn';

export interface DiagQuestion {
  id: string;
  label: string;
  options: Array<{ value: string; label: string }>;
}

export interface DiagVerdict {
  id: string;
  tag: string;
  tone: DiagTone;
  text: string;
}

export interface DiagConfig {
  id: string;
  heading: string;
  sub: string;
  runLabel: string;
  incompleteMessage: string;
  questions: DiagQuestion[];
  verdicts: DiagVerdict[];
  /** 回答(answers)から verdict.id を返す純粋関数 */
  evaluate: (answers: Record<string, string>) => string;
}

// PLM代替 / 図面管理 着手判定（7章ロジック準拠）
const plmAlternative: DiagConfig = {
  id: 'plm-alternative',
  heading: 'PLM代替 かんたん診断',
  sub: '3つ選ぶと、導入・代替・見送りのどれに当てはまるかが出ます。',
  runLabel: '診断する',
  incompleteMessage: '3つとも選んでください',
  questions: [
    {
      id: 'd1',
      label: '社の図面の流通量は？',
      options: [
        { value: 'hi', label: '多い（日常的に図面を引く）' },
        { value: 'lo', label: '少ない' },
      ],
    },
    {
      id: 'd2',
      label: '図面のデータ化の状態は？',
      options: [
        { value: 'done', label: '部品表・工程まで整備済み' },
        { value: 'mess', label: '図面はあるがバラバラ・属人化' },
        { value: 'paper', label: 'ほぼ紙のみ' },
      ],
    },
    {
      id: 'd3',
      label: '社内に推進者（旗を振る人）は？',
      options: [
        { value: 'yes', label: 'いる' },
        { value: 'no', label: 'いない' },
      ],
    },
  ],
  verdicts: [
    {
      id: 'warn',
      tag: '今は見送り',
      tone: 'warn',
      text: '図面の流通量・データ化・推進者のどれかが未整備です。製品が合わないのではなく順番の問題。まず最小のデータ化から始め、流通量が一定を超えてから再検討するのが、投資効率の面で有利です。',
    },
    {
      id: 'ok',
      tag: 'PLM導入も選択肢',
      tone: 'ok',
      text: '部品表・工程まで整い推進体制もある状態です。フル機能のPLM導入も検討に値します。あわせて図面管理の軽量化でコストを抑える道もあります。',
    },
    {
      id: 'mid',
      tag: 'AI図面管理で代替できる',
      tone: 'mid',
      text: '図面は動いているが属人化している、という最多パターンです。PLMの前に、図面の構造化（検索・流用・差分管理）から着手するのが現実的です。',
    },
  ],
  // 判定（バランス調整版）: AI代替(mid)を既定＝最多に。
  // 「未整備シグナル」= 流通量少ない(d1=lo) / 紙のみ(d2=paper) / 推進者なし(d3=no)。
  //  2つ以上 → 見送り(warn) ／ 高流通×整備済み×推進者あり → PLM導入(ok) ／ それ以外 → AI代替(mid)。
  evaluate: (a) => {
    const unready =
      (a.d1 === 'lo' ? 1 : 0) +
      (a.d2 === 'paper' ? 1 : 0) +
      (a.d3 === 'no' ? 1 : 0);
    if (unready >= 2) return 'warn';
    if (a.d1 === 'hi' && a.d2 === 'done' && a.d3 === 'yes') return 'ok';
    return 'mid';
  },
};

export const DIAGNOSIS_CONFIGS: Record<string, DiagConfig> = {
  'plm-alternative': plmAlternative,
};

export const DEFAULT_DIAGNOSIS_ID = 'plm-alternative';

export function getDiagnosisConfig(id?: string | boolean): DiagConfig {
  if (typeof id === 'string' && DIAGNOSIS_CONFIGS[id]) return DIAGNOSIS_CONFIGS[id];
  return DIAGNOSIS_CONFIGS[DEFAULT_DIAGNOSIS_ID];
}
