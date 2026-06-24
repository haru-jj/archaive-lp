# フォーム送信のデータ仕様（現行 LP コードが正）

旧 GAS は参考に留め、この仕様は **現行 LP のコードから抽出した実際の送信内容** に基づく。
出典:
- `src/app/api/submit-form/route.ts`（turnstileToken を除いた JSON をそのまま GAS へ転送）
- `src/app/download/DownloadPageClient.tsx`（資料請求フォーム本体）
- `src/app/apply/ApplyPageClient.tsx`（無料トライアルフォーム本体）

---

## 全体フロー

```
[資料請求 /download]   [無料トライアル /apply]
        │                      │
        └──────────┬───────────┘
                   ▼
        POST /api/submit-form        ← Next.js API Route
                   │  ① Turnstile 検証（bot 対策）
                   │  ② turnstileToken を除去
                   ▼
        POST GAS_WEB_APP_URL (/exec) ← この GAS を新規作成して差し替える対象
                   │  ③ スプレッドシートに1行追記
                   │  ④ 管理者へ通知メール
                   │  ⑤（任意）申込者へ自動返信
                   ▼
        { success: true, message } を返す
```

> ⚠️ **お問い合わせフォームについて**
> `src/hooks/useContactForm.ts` → `src/app/api/contact/route.ts` という別系統が存在するが、
> `useContactForm` を **import しているページは現状ゼロ**（＝画面に出ていない死にコード）。
> さらに `/api/contact` は中身が全部コメントアウトされた空実装で、成功を返すだけ。
> よって今回の GAS 再構築の対象は **資料請求(download) と 無料トライアル(apply) の2つだけ**。
> お問い合わせを復活させたい場合は別タスク（HANDOFF.md 末尾の「将来の課題」参照）。

---

## GAS が受け取る JSON

### 共通フィールド
| キー | 内容 | 例 |
|------|------|----|
| `formType` | `"download"` or `"apply"` で分岐 | `"download"` |
| `companyName` | 会社名（必須） | `株式会社テスト` |
| `name` | 氏名（**1項目**。姓名は分割していない） | `山田 太郎` |
| `department` | 部署 | `設計部` |
| `position` | 役職（select） | `部門長` |
| `email` | メールアドレス（必須） | `test@example.com` |
| `phone` | 電話番号 | `03-0000-0000` |

> 旧 GAS は download で `lastName` / `firstName` を読んでいたが、現行フォームは `name` 1項目で送る。
> （これが旧シートで「姓・名」列が空だった原因）

### download（資料請求）固有
| キー | 内容 | 取りうる値（チェックボックス複数→ `', '` で結合） |
|------|------|----|
| `inquiryContent` | 現在抱えている課題（必須） | 図面検索業務の効率化 / 見積作成業務の効率化 / ナレッジ共有の仕組み化 / 過去トラブル・不良の活用 / その他 |
| `inquiryDetails` | お問い合わせ詳細（任意） | 自由記述 |

### apply（無料トライアル）固有
| キー | 内容 | 取りうる値 |
|------|------|----|
| `employeeCount` | 従業員数（select） | 1-49名 / 50-199名 / 200-499名 / 500名以上 |
| `purpose` | ご検討の目的（必須・複数→ `', '` 結合） | 図面検索業務の効率化 / 見積作成業務の効率化 / ナレッジ共有の仕組み化 / データ連携・AI活用 / その他 |
| `message` | ご質問・ご要望（任意） | 自由記述 |

### 役職 select の選択肢（download / apply 共通）
取締役 / 執行役員 / 部門長 / 課長 / リーダー・主任 / 一般社員 / その他

---

## GAS が返すべきレスポンス（route.ts が前提にしている契約）

`src/app/api/submit-form/route.ts` は次を期待する:

- **HTTP 200** であること（`response.ok`）
- ボディ JSON が以下の形:

```jsonc
// 成功
{ "success": true,  "message": "資料請求を受け付けました。" }
// 失敗
{ "success": false, "error":   "データの保存に失敗しました。…" }
```

`success` が false / HTTP が非 200 だと、LP 側で「フォームの送信に失敗しました」と表示される。

---

## スプレッドシートの列（= sheets/*.csv のヘッダー）

### シート「資料請求」
`送信日時, 会社名, 氏名, 部署, 役職, メールアドレス, 電話番号, 現在抱えている課題, お問い合わせ詳細`

### シート「無料トライアル」
`送信日時, 会社名, 氏名, 部署, 役職, メールアドレス, 電話番号, 従業員数, ご検討の目的, ご質問・ご要望`

> ヘッダーは GAS が初回追記時に自動生成するので、手で作らなくても動く。
> 手で用意したい場合のみ sheets/ の CSV を取り込む。
