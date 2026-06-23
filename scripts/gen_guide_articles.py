#!/usr/bin/env python3
# 図面管理クラスター記事(全25本)を、確定原稿 articles_drawing_cluster.md から
# Markdown(フロントマター付き)へ変換し src/content/guide/ に出力する。
# 本文・数値・出典は原稿から「逐語」コピー（言い換え・捏造をしない）。
import json, re, os, sys

SRC = os.path.expanduser('~/Downloads/articles_drawing_cluster.md')
OUT = os.path.join(os.path.dirname(__file__), '..', 'src', 'content', 'guide')
UPDATED = "2026-06-30"

# クリーンタイトル(｜より前) → (slug, type)
T2S = {
    "図面管理とは": ("drawing-management", "spoke"),
    "図面管理システムとは": ("drawing-management-system", "spoke"),
    "AI図面管理とは": ("ai-drawing-management", "spoke"),
    "図面検索とは": ("drawing-search", "spoke"),
    "クラウド図面管理とは": ("cloud-drawing-management", "spoke"),
    "図面管理システムの選び方": ("drawing-management-howto", "pillar"),
    "なぜ製造業で図面管理の導入が進まないのか": ("why-not-adopted", "pillar"),
    "類似図面検索とは": ("similar-search", "spoke"),
    "AI-OCRとは": ("ai-ocr", "spoke"),
    "差分検出・図面比較とは": ("diff-detection", "spoke"),
    "帳票生成とは": ("voucher-generation", "spoke"),
    "案件管理とは": ("project-management", "spoke"),
    "図番とは": ("drawing-number", "spoke"),
    "員数とは": ("block-count", "spoke"),
    "部品表（BOM）とは": ("bom", "spoke"),
    "版管理（リビジョン管理）とは": ("revision-management", "spoke"),
    "CADデータ管理とは": ("cad-data-management", "spoke"),
    "図番採番ルールとは": ("drawing-numbering-rule", "spoke"),
    "図面の属人化とは": ("drawing-attribution", "spoke"),
    "ファイルサーバー管理の限界": ("file-server-limit", "spoke"),
    "Excel図面管理の限界": ("excel-drawing-limit", "spoke"),
    "紙図面の電子化とは": ("paper-drawing-digitization", "spoke"),
    "設計流用とは": ("design-reuse", "spoke"),
    "技術伝承・2025年問題とは": ("tech-succession-2025", "spoke"),
    "PLM・PDMと図面管理の違い": ("plm-pdm-difference", "spoke"),
}
# 関連用語/中核記事の表記 → slug（クリーンタイトルと一致する想定。差分のみ補う）
NAME2SLUG = {k: v[0] for k, v in T2S.items()}

# drawing-management-howto は既存の充実版を維持（上書きしない）
SKIP = {"drawing-management-howto"}

def q(s):
    return json.dumps(s, ensure_ascii=False)

def parse_chunks(text):
    # 先頭の HTML コメントを除去
    text = re.sub(r'^<!--.*?-->\s*', '', text, flags=re.S)
    parts = re.split(r'(?m)^---\s*$', text)
    return [p.strip('\n') for p in parts if p.strip()]

def parse_article(chunk):
    lines = chunk.split('\n')
    # 前後の空行を除去
    while lines and not lines[0].strip():
        lines.pop(0)
    while lines and not lines[-1].strip():
        lines.pop()
    title_full = lines[0].lstrip('#').strip()
    clean = title_full.split('｜')[0].strip()
    def_idx = next(i for i, l in enumerate(lines) if l.startswith('> **定義**'))
    faq_idx = next(i for i, l in enumerate(lines) if l.strip().startswith('## よくある質問'))
    foot_idx = next(i for i, l in enumerate(lines) if l.startswith('**関連用語**'))

    def_text = lines[def_idx].split('：', 1)[1].strip()
    intro = '\n'.join(lines[1:def_idx]).strip()
    body_sections = '\n'.join(lines[def_idx + 1:faq_idx]).strip()

    # FAQ
    faq = []
    i = faq_idx + 1
    region = lines[faq_idx + 1:foot_idx]
    j = 0
    while j < len(region):
        l = region[j]
        if l.startswith('**Q.'):
            ql = re.sub(r'\*', '', l).strip()
            ql = re.sub(r'^Q\.\s*', '', ql)
            a = ''
            j += 1
            while j < len(region):
                ll = region[j]
                if ll.strip().startswith('A.'):
                    a = ll.strip()[2:].strip()
                    j += 1
                    break
                j += 1
            faq.append((ql, a))
        else:
            j += 1

    # footer
    related, sources, datapoint, core = [], [], None, None
    for l in lines[foot_idx:]:
        if l.startswith('**関連用語**'):
            names = l.split('：', 1)[1]
            for n in re.split(r'[／/]', names):
                n = n.strip()
                if n in NAME2SLUG:
                    related.append(NAME2SLUG[n])
                elif n:
                    print(f"  [WARN] 未マップの関連用語: {n!r}", file=sys.stderr)
        elif l.startswith('**中核記事**'):
            m = re.search(r'「(.+?)」', l)
            if m and m.group(1) in NAME2SLUG:
                core = NAME2SLUG[m.group(1)]
            elif m:
                print(f"  [WARN] 未マップの中核記事: {m.group(1)!r}", file=sys.stderr)
        elif l.startswith('**データ**'):
            data = l.split('：', 1)[1]
            for seg in re.split(r'[／/]', data):
                seg = seg.strip()
                if '株式会社STAR UP調べ' in seg:
                    sources.append(seg)
                    if datapoint is None:
                        datapoint = "関連データ：" + seg
        # **運用メモ** は内部メモのため出力しない
    return dict(title_full=title_full, clean=clean, def_text=def_text, intro=intro,
                body=body_sections, faq=faq, related=related, sources=sources,
                datapoint=datapoint, core=core)

def build_md(a, order):
    slug, typ = T2S[a['clean']]
    title = a['clean']
    desc = a['def_text'].split('。')[0] + '。'
    related = []
    for s in a['related'] + ([a['core']] if a['core'] else []):
        if s and s != slug and s not in related:
            related.append(s)
    fm = []
    fm.append(f'slug: {q(slug)}')
    fm.append(f'title: {q(title)}')
    fm.append(f'description: {q(desc)}')
    fm.append(f'type: {q(typ)}')
    fm.append('cluster: "drawing-management"')
    fm.append(f'order: {order}')
    body = ''
    if typ == 'pillar':
        fm.append('eyebrow: "課題の構造"')
        fm.append(f'lead: {q(a["intro"])}')
        body = a['body']
    else:
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
    text = open(SRC, encoding='utf-8').read()
    chunks = parse_chunks(text)
    written, skipped = [], []
    for order, ch in enumerate(chunks, 1):
        a = parse_article(ch)
        slug, _ = T2S[a['clean']]
        if slug in SKIP:
            skipped.append(slug); continue
        _, md = build_md(a, order)
        path = os.path.join(OUT, slug + '.md')
        open(path, 'w', encoding='utf-8').write(md)
        written.append(slug)
    print(f"chunks={len(chunks)} written={len(written)} skipped={skipped}")
    for w in written:
        print("  +", w)

if __name__ == '__main__':
    main()
