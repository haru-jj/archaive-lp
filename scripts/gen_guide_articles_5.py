#!/usr/bin/env python3
# 用語定義ページ ⑨ARCHAIVE機能(13本) / A〜F(30本) を確定原稿から .md 生成。
# - 「# Core（基盤）」等のセクション見出しチャンク（定義なし）はスキップ
# - 「> 【図表制作指示】…」の制作指示ブロックは本文から除去
# - FAQ後の締めセクションは本文に取り込む（他generatorと同じ）
# 本文・数値・出典は逐語コピー。
import json, re, os, sys

HOME = os.path.expanduser('~')
SRC9 = os.path.join(HOME, 'Downloads', 'ARCHAIVE_用語定義_⑨機能_v2.md')
SRCAF = os.path.join(HOME, 'Downloads', 'ARCHAIVE_用語定義_AtoF_v2.md')
OUT = os.path.join(os.path.dirname(__file__), '..', 'src', 'content', 'guide')
UPDATED = "2026-06-26"

# クリーンタイトル → (slug, cluster)。全て type=spoke。
T5S = {
    # ⑨ ARCHAIVE機能
    "仕様書管理とは": ("spec-management", "features"),
    "部品情報管理とは": ("parts-information-management", "features"),
    "社内ドキュメント検索（エンタープライズサーチ）とは": ("enterprise-search", "features"),
    "製造業の案件管理とは": ("manufacturing-project-management", "features"),
    "3D CADとは": ("3d-cad", "features"),
    "ドキュメント生成AIとは": ("document-generation-ai", "features"),
    "販売管理システムとは": ("sales-management-system", "features"),
    "CRM（顧客関係管理）とは": ("crm", "features"),
    "RPAとは": ("rpa", "features"),
    "ETL（データ連携・変換）とは": ("etl", "features"),
    "生産スケジューラとは": ("production-scheduler", "features"),
    "モジュール型システム（コンポーザブル）とは": ("modular-system", "features"),
    "業務アプリ開発（内製化）とは": ("custom-app-development", "features"),
    # A. DX・経営の上位概念 / B. AIの土台語 / C. データ・情報基盤 → dx-ai-data
    "DXとは": ("dx", "dx-ai-data"),
    "製造業DXとは": ("manufacturing-dx", "dx-ai-data"),
    "スマートファクトリーとは": ("smart-factory", "dx-ai-data"),
    "インダストリー4.0とは": ("industry-4-0", "dx-ai-data"),
    "ペーパーレスとは": ("paperless", "dx-ai-data"),
    "機械学習とは": ("machine-learning", "dx-ai-data"),
    "ディープラーニングとは": ("deep-learning", "dx-ai-data"),
    "LLM（大規模言語モデル）とは": ("llm", "dx-ai-data"),
    "ハルシネーションとは": ("hallucination", "dx-ai-data"),
    "コンピュータビジョンとは": ("computer-vision", "dx-ai-data"),
    "マルチモーダルAIとは": ("multimodal-ai", "dx-ai-data"),
    "非構造化データとは": ("unstructured-data", "dx-ai-data"),
    "データサイロとは": ("data-silo", "dx-ai-data"),
    "メタデータとは": ("metadata", "dx-ai-data"),
    "マスタデータ管理（MDM）とは": ("mdm", "dx-ai-data"),
    "SaaSとは": ("saas", "dx-ai-data"),
    # D. 製造・生産システム / E. 製造・設計の現場概念 → manufacturing-systems
    "SCM（サプライチェーンマネジメント）とは": ("scm", "manufacturing-systems"),
    "ワークフロー（電子承認）とは": ("workflow", "manufacturing-systems"),
    "CAE（解析）とは": ("cae", "manufacturing-systems"),
    "CAM（製造）とは": ("cam", "manufacturing-systems"),
    "IoT（モノのインターネット）とは": ("iot", "manufacturing-systems"),
    "デジタルツインとは": ("digital-twin", "manufacturing-systems"),
    "予知保全（予兆保全）とは": ("predictive-maintenance", "manufacturing-systems"),
    "品質管理（QC）とは": ("quality-control", "manufacturing-systems"),
    "フロントローディングとは": ("front-loading", "manufacturing-systems"),
    # F. 建設DX → 既存 construction クラスターに合流
    "BIM（ビルディング・インフォメーション・モデリング）とは": ("bim", "construction"),
    "CIMとは": ("cim", "construction"),
    "i-Constructionとは": ("i-construction", "construction"),
    "施工管理とは": ("construction-management", "construction"),
    "積算とは": ("estimation", "construction"),
}

# 関連用語/中核記事の表記 → slug。本ファイル43本＋既出クラスターの該当語。
NAME2SLUG = {k: v[0] for k, v in T5S.items()}
NAME2SLUG.update({
    "図面管理とは": "drawing-management",
    "図面管理システムとは": "drawing-management-system",
    "AI図面管理とは": "ai-drawing-management",
    "図面検索とは": "drawing-search",
    "クラウド図面管理とは": "cloud-drawing-management",
    "図面管理システムの選び方": "drawing-management-howto",
    "類似図面検索とは": "similar-search",
    "AI-OCRとは": "ai-ocr",
    "AI-OCRによるデータ化とは": "ai-ocr-datafication",
    "差分検出・図面比較とは": "diff-detection",
    "帳票生成とは": "voucher-generation",
    "帳票管理とは": "voucher-generation",
    "案件管理とは": "project-management",
    "図番とは": "drawing-number",
    "員数とは": "block-count",
    "部品表（BOM）とは": "bom",
    "版管理（リビジョン管理）とは": "revision-management",
    "CADデータ管理とは": "cad-data-management",
    "図番採番ルールとは": "drawing-numbering-rule",
    "図面の属人化とは": "drawing-attribution",
    "ファイルサーバー管理の限界": "file-server-limit",
    "Excel図面管理の限界": "excel-drawing-limit",
    "紙図面の電子化とは": "paper-drawing-digitization",
    "設計流用とは": "design-reuse",
    "技術伝承・2025年問題とは": "tech-succession-2025",
    "2025年問題とは": "tech-succession-2025",
    "PLM・PDMと図面管理の違い": "plm-pdm-difference",
    "PLMとは": "plm",
    "PDMとは": "pdm",
    "ERPとは": "erp",
    "生産管理システムとは": "production-management-system",
    "製品ライフサイクル管理とは": "product-lifecycle-management",
    "設計BOMと製造BOMの違い": "ebom-mbom",
    "設計変更管理とは": "design-change-management",
    "構成管理とは": "configuration-management",
    "トレーサビリティとは": "traceability",
    "中小製造業のPLM代替とは": "plm-alternative-sme",
    "製造業の暗黙知を形式知化するAIとは": "tacit-knowledge-ai",
    "形状検索・3D類似検索とは": "shape-search",
    "特徴量・ベクトル検索とは": "vector-search",
    "セマンティック検索とは": "semantic-search",
    "自然言語検索・チャット型検索とは": "nl-search",
    "RAG（検索拡張生成）とは": "rag",
    "生成AIと製造業とは": "generative-ai-manufacturing",
    "AIエージェントとは": "ai-agent",
    "AI見積・自動見積とは": "ai-estimation",
    "ナレッジマネジメントとは": "knowledge-management",
    "API連携とは": "api-integration",
    "CAD連携とは": "cad-integration",
    "ERP連携とは": "erp-integration",
    "データ移行とは": "data-migration",
    "対応ファイル形式とは": "supported-file-formats",
    "情報漏洩対策とは": "information-leak-prevention",
    "ISO 27001・ISMSとは": "iso27001-isms",
    "AES-256暗号化とは": "aes-256",
    "TLS 1.3とは": "tls-13",
    "RBAC（ロールベースアクセス制御）とは": "rbac",
    "冗長化・高可用性とは": "redundancy-high-availability",
    "自動バックアップ・データ保護とは": "backup-data-protection",
    "セキュアクラウド・AWSとは": "secure-cloud-aws",
    "建設業の図面管理とは": "construction-drawing-management",
    "意匠図・構造図・設備図とは": "architectural-structural-mep-drawings",
    "物件管理・物件ツリーとは": "property-management",
    "工区とは": "construction-zone",
    "施工計画書とは": "construction-plan",
    "協力会社管理とは": "subcontractor-management",
    "類似物件・類似工事検索とは": "similar-construction-search",
    "図面改訂管理とは": "drawing-revision-management",
    # 脚注で使われる短縮名のエイリアス（本ファイル内の用語へ）
    "IoTとは": "iot",
    "LLMとは": "llm",
    "BIMとは": "bim",
    "CAEとは": "cae",
    "CAMとは": "cam",
    "ETLとは": "etl",
    "RAGとは": "rag",
    "SCMとは": "scm",
    "MDMとは": "mdm",
    "CRMとは": "crm",
    "SaaSとは": "saas",
    "予知保全とは": "predictive-maintenance",
    "品質管理とは": "quality-control",
    "版管理とは": "revision-management",
    "流用設計とは": "design-reuse",
    "生産管理とは": "production-management-system",
    "デジタルツインとは": "digital-twin",
    "ワークフローとは": "workflow",
    "メタデータとは": "metadata",
})


def q(s):
    return json.dumps(s, ensure_ascii=False)


def parse_chunks(text):
    text = re.sub(r'^<!--.*?-->\s*', '', text, flags=re.S)
    parts = re.split(r'(?m)^---\s*$', text)
    return [p.strip('\n') for p in parts if p.strip()]


def strip_fig(s):
    # 図表制作指示のブロッククォートを本文から除去
    return '\n'.join(
        l for l in s.split('\n') if not l.lstrip().startswith('> 【')
    ).strip()


def parse_article(chunk):
    lines = chunk.split('\n')
    while lines and not lines[0].strip():
        lines.pop(0)
    while lines and not lines[-1].strip():
        lines.pop()
    title_full = lines[0].lstrip('#').strip()
    clean = title_full.split('｜')[0].strip()
    def_idx = next((i for i, l in enumerate(lines) if l.startswith('> **定義**')), None)
    if def_idx is None:
        return None  # セクション見出しチャンク
    faq_idx = next((i for i, l in enumerate(lines) if l.strip().startswith('## よくある質問')), None)
    foot_idx = next((i for i, l in enumerate(lines) if l.startswith('**関連用語**')), None)
    if faq_idx is None or foot_idx is None:
        return None

    def_text = lines[def_idx].split('：', 1)[1].strip()
    intro = '\n'.join(lines[1:def_idx]).strip()
    body_sections = '\n'.join(lines[def_idx + 1:faq_idx]).strip()

    close_idx = next((k for k in range(faq_idx + 1, foot_idx) if lines[k].startswith('## ')), None)
    faq_end = close_idx if close_idx is not None else foot_idx
    if close_idx is not None:
        closing = '\n'.join(lines[close_idx:foot_idx]).strip()
        if closing:
            body_sections = (body_sections + '\n\n' + closing).strip()
    body_sections = strip_fig(body_sections)

    faq = []
    region = lines[faq_idx + 1:faq_end]
    j = 0
    while j < len(region):
        l = region[j]
        if l.startswith('**Q.'):
            ql = re.sub(r'^Q\.\s*', '', re.sub(r'\*', '', l).strip())
            a = ''
            j += 1
            while j < len(region):
                if region[j].strip().startswith('A.'):
                    a = region[j].strip()[2:].strip()
                    j += 1
                    break
                j += 1
            faq.append((ql, a))
        else:
            j += 1

    related, sources, datapoint, core = [], [], None, None
    for l in lines[foot_idx:]:
        if l.startswith('**関連用語**'):
            for n in re.split(r'[／/]', l.split('：', 1)[1]):
                n = n.strip()
                if n in NAME2SLUG:
                    related.append(NAME2SLUG[n])
                elif n:
                    print(f"  [WARN] 未マップ関連用語: {n!r}", file=sys.stderr)
        elif l.startswith('**中核記事**'):
            m = re.search(r'「(.+?)」', l)
            if m and m.group(1) in NAME2SLUG:
                core = NAME2SLUG[m.group(1)]
            elif m:
                print(f"  [WARN] 未マップ中核記事: {m.group(1)!r}", file=sys.stderr)
        elif l.startswith('**データ**'):
            for seg in re.split(r'[／/]', l.split('：', 1)[1]):
                seg = seg.strip()
                if '株式会社STAR UP調べ' in seg:
                    seg = seg.replace('株式会社STAR UP調べ', '当社調べ')
                    sources.append(seg)
                    if datapoint is None:
                        datapoint = "関連データ：" + seg
    return dict(clean=clean, def_text=def_text, intro=intro, body=body_sections,
                faq=faq, related=related, sources=sources, datapoint=datapoint, core=core)


def build_md(a, order):
    slug, cluster = T5S[a['clean']]
    title = a['clean']
    desc = a['def_text'].split('。')[0] + '。'
    related = []
    for s in a['related'] + ([a['core']] if a['core'] else []):
        if s and s != slug and s not in related:
            related.append(s)
    fm = [f'slug: {q(slug)}', f'title: {q(title)}', f'description: {q(desc)}',
          f'type: "spoke"', f'cluster: {q(cluster)}', f'order: {order}']
    body = (a['intro'] + '\n\n' + a['body']).strip()
    fm.append('related: ' + json.dumps(related, ensure_ascii=False))
    fm.append('definition:')
    fm.append(f'  term: {q(title)}')
    fm.append(f'  body: {q(a["def_text"])}')
    if a['datapoint']:
        fm.append(f'  datapoint: {q(a["datapoint"])}')
    if a['faq']:
        fm.append('faq:')
        for qq, aa in a['faq']:
            fm.append(f'  - q: {q(qq)}')
            fm.append(f'    a: {q(aa)}')
    if a['sources']:
        fm.append('sources:')
        for s in a['sources']:
            fm.append(f'  - {q(s)}')
    fm.append(f'updated: {q(UPDATED)}')
    return slug, '---\n' + '\n'.join(fm) + '\n---\n\n' + body + '\n'


def main():
    order = 1
    written, skipped = [], 0
    for src in (SRC9, SRCAF):
        for ch in parse_chunks(open(src, encoding='utf-8').read()):
            a = parse_article(ch)
            if a is None:
                skipped += 1
                continue
            if a['clean'] not in T5S:
                print(f"  [WARN] 未定義タイトル: {a['clean']!r}", file=sys.stderr)
                continue
            slug, md = build_md(a, order)
            open(os.path.join(OUT, slug + '.md'), 'w', encoding='utf-8').write(md)
            written.append(slug)
            order += 1
    print(f"written={len(written)} skipped_sections={skipped}")
    for w in written:
        print("  +", w)


if __name__ == '__main__':
    main()
