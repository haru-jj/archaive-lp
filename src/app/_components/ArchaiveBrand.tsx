import { type ReactNode } from 'react';

export function ArchaiveBrand() {
  return (
    <span className='whitespace-nowrap'>
      <span style={{ color: '#37B7C4' }}>ARCH</span>
      <span style={{ color: '#F64848' }}>AI</span>
      <span style={{ color: '#37B7C4' }}>VE</span>
    </span>
  );
}

export function renderArchaiveText(text: string): ReactNode {
  const parts: ReactNode[] = [];
  const regex = /ARCHAIVE\+|ARCHAIVE/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[0] === 'ARCHAIVE+') {
      parts.push(
        <span
          key={`archaive-plus-${key}`}
          className='whitespace-nowrap'
          style={{ color: '#F64848' }}
        >
          ARCHAIVE+
        </span>,
      );
    } else {
      parts.push(<ArchaiveBrand key={`archaive-${key}`} />);
    }
    key += 1;
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return <>{parts}</>;
}
