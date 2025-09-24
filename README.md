This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# ARCHAIVE_LP

## ディレクトリ構成と役割

- `src/` : アプリケーション本体のソースコードを格納します。
  - `src/components/` : 複数のページや機能で再利用するUIコンポーネント（例：ボタン、ヘッダー、フッターなど）を配置します。
  - `src/features/` : 特定の機能やドメインごとにまとめたロジックやコンポーネントを配置します（例：ユーザー管理、LP生成機能など）。
- `docs/` : 仕様や設計、提案内容などのドキュメントを格納します。
- `public/` : 画像やフォントなどの静的ファイルを格納します。
- `pages/` または `src/pages/` : Next.jsのルーティングに使われるページコンポーネントを配置します。

---

### ディレクトリの使い方例

- `src/components/` : Button.tsx, Header.tsx, Footer.tsx など汎用UI
- `src/features/` : lp/（LP生成機能）、auth/（認証機能）など機能単位でディレクトリを分ける
