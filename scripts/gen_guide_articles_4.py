#!/usr/bin/env python3
# クラスター⑦(セキュリティ規格, 8本) / ⑧(連携・データ基盤, 6本) を確定原稿から .md 生成。
# 本文・数値・出典は逐語コピー（言い換え・捏造しない）。型は gen_guide_articles_2/3.py と同じ。
import json, re, os, sys

HOME = os.path.expanduser('~')
SRC7 = os.path.join(HOME, 'Downloads', 'files', 'ARCHAIVE_クラスター⑦_セキュリティ規格.md')
SRC8 = os.path.join(HOME, 'Downloads', 'files', 'ARCHAIVE_クラスター⑧_連携テ_ータ基盤.md')
OUT = os.path.join(os.path.dirname(__file__), '..', 'src', 'content', 'guide')
UPDATED = "2026-06-24"

# クリーンタイトル(｜より前) → (slug, type, cluster)
T78S = {
    # ⑦ セキュリティ規格
    "ISO 27001・ISMSとは": ("iso27001-isms", "spoke", "security"),
    "AES-256暗号化とは": ("aes-256", "spoke", "security"),
    "TLS 1.3とは": ("tls-13", "spoke", "security"),
    "RBAC（ロールベースアクセス制御）とは": ("rbac", "spoke", "security"),
    "冗長化・高可用性とは": ("redundancy-high-availability", "spoke", "security"),
    "自動バックアップ・データ保護とは": ("backup-data-protection", "spoke", "security"),
    "セキュアクラウド・AWSとは": ("secure-cloud-aws", "spoke", "security"),
    "情報漏洩対策とは": ("information-leak-prevention", "pillar", "security"),
    # ⑧ 連携・データ基盤
    "API連携とは": ("api-integration", "pillar", "integration"),
    "CAD連携とは": ("cad-integration", "spoke", "integration"),
    "ERP連携とは": ("erp-integration", "spoke", "integration"),
    "データ移行とは": ("data-migration", "spoke", "integration"),
    "AI-OCRによるデータ化とは": ("ai-ocr-datafication", "spoke", "integration"),
    "対応ファイル形式とは": ("supported-file-formats", "spoke", "integration"),
}

# 関連用語/中核記事の表記 → slug（本クラスター＋既出クラスターの該当語）。
NAME2SLUG = {k: v[0] for k, v in T78S.items()}
NAME2SLUG.update({
    # 既出（図面管理クラスター等）
    "部品表（BOM）とは": "bom",
    "ファイルサーバー管理の限界": "file-server-limit",
    "AI-OCRとは": "ai-ocr",
    "紙図面の電子化とは": "paper-drawing-digitization",
    "CADデータ管理とは": "cad-data-management",
})

EYEBROW = {
    "information-leak-prevention": "セキュリティ",
    "api-integration": "連携・データ基盤",
}

def q(s):
    return json.dumps(s, ensure_ascii=False)

def parse_chunks(text):
    text = re.sub(r'^<!--.*?-->\s*', '', text, flags=re.S)
    parts = re.split(r'(?m)^---\s*$', text)
    return [p.strip('\n') for p in parts if p.strip()]

def parse_article(chunk):
    lines = chunk.split('\n')
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

    # FAQの後ろ・関連用語の前にある締めセクション（## 見出し）を本文へ取り込む
    close_idx = next((k for k in range(faq_idx + 1, foot_idx) if lines[k].startswith('## ')), None)
    faq_end = close_idx if close_idx is not None else foot_idx
    if close_idx is not None:
        closing = '\n'.join(lines[close_idx:foot_idx]).strip()
        if closing:
            body_sections = (body_sections + '\n\n' + closing).strip()

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
    slug, typ, cluster = T78S[a['clean']]
    title = a['clean']
    desc = a['def_text'].split('。')[0] + '。'
    related = []
    for s in a['related'] + ([a['core']] if a['core'] else []):
        if s and s != slug and s not in related:
            related.append(s)
    fm = [f'slug: {q(slug)}', f'title: {q(title)}', f'description: {q(desc)}',
          f'type: {q(typ)}', f'cluster: {q(cluster)}', f'order: {order}']
    if typ == 'pillar':
        fm.append(f'eyebrow: {q(EYEBROW.get(slug, "ガイド"))}')
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
    order = 1
    written = []
    for src in (SRC7, SRC8):
        for ch in parse_chunks(open(src, encoding='utf-8').read()):
            a = parse_article(ch)
            if a['clean'] not in T78S:
                print(f"  [WARN] 未定義タイトル: {a['clean']!r}", file=sys.stderr)
                continue
            slug, md = build_md(a, order)
            open(os.path.join(OUT, slug + '.md'), 'w', encoding='utf-8').write(md)
            written.append(slug)
            order += 1
    print(f"written={len(written)}")
    for w in written:
        print("  +", w)

if __name__ == '__main__':
    main()
