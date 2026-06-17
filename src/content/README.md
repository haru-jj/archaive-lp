# ガイド記事システム（図面管理クラスター）運用メモ

`/guide` 配下の記事は **Markdown（フロントマター付き）** で管理します。記事を増やすときは
`src/content/guide/<slug>.md` を追加するだけで、一覧・内部リンク・sitemap・JSON-LD が自動反映されます。
（ビルドは静的生成。ページの手書きは不要）

## ファイル

- `src/content/guide/*.md` … 記事本体。1ファイル=1記事。
- `src/content/clusters.yml` … クラスター定義（一覧・パンくず・内部リンクの生成元）。
- 型・ローダー: `src/lib/guide.ts`
- テンプレ: `src/components/guide/PillarArticle.tsx`（ピラー9ブロック） / `SpokeArticle.tsx`（spoke 4要素）
- 診断ツール: `src/components/guide/DiagnosisTool.tsx` ＋設定 `diagnosisConfigs.ts`
- 配色: `src/app/guide/guide.css`（参照HTMLの editorial トークン。`.guide-root` にスコープ）

## フロントマター（主要キー）

| キー | 必須 | 説明 |
| --- | --- | --- |
| `slug` | - | 省略時はファイル名 |
| `title` | ○ | 一般語そのまま（title・アンカーに使用） |
| `description` | ○ | meta description（120字前後） |
| `type` | ○ | `pillar` または `spoke` |
| `cluster` | ○ | 所属クラスターID（clusters.yml のキー） |
| `related` | - | 関連記事 slug 配列（内部リンク） |
| `definition` | - | 定義ブロック（`term` / `body` / `datapoint`） |
| `judgeTable` | - | 判断表（`columns` / `columnTypes` / `rows`）※ピラー |
| `callout` | - | 補足の注意喚起（HTML可）※ピラー |
| `diagnosis` | - | `true` か診断ID（例 `"plm-alternative"`）で診断ツール埋め込み |
| `faq` | - | `{q, a}` 配列（FAQPage を自動出力） |
| `cases` | - | 実名事例リンク ※ピラー |
| `sources` | - | 出典。**数値を載せる場合は必須**（出典のない数値は表示しない） |
| `cta` | - | 浅いCV ※ピラー |
| `updated` | - | 更新日 `YYYY-MM-DD` |

## 重複注意（6.4）

`clusters.yml` の `duplicates` に挙げた spoke（例: `bom`, `plm-pdm-difference`）は、
**次の PLM・BOM クラスターと定義が重なります。同じ定義文を複製しないこと。**
片方を主記事として定義を書き、もう片方からは `related` の内部リンクで送ります
（重複定義はクラスター全体の評価を下げるため）。

## 制約

- 数値には必ず `sources` の出典を併記。
- 簡体字・繁体字を混入させない（日本語字形のみ）。
- 診断ツールは状態をメモリ内のみで保持（`localStorage`/`sessionStorage` 不使用）。
