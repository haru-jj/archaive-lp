import React from 'react';

export type IconType = 'ai' | 'speed' | 'chat' | 'doc' | 'diff' | 'user' | 'company' | 'arrow' | 'check' | 'search' | 'alert' | 'chevron-down' | 'chevron-up' | 'database' | 'disconnect' | 'time' | 'chart-down' | 'factory' | 'shop' | 'bank' | 'secure';

export default function Icon({ type, className = '', size = 32 }: { type: IconType; className?: string; size?: number }) {
  switch (type) {
    case 'ai':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="3" /><path d="M10 16L15 21L22 11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'speed':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="3" /><path d="M16 8V16L22 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
      );
    case 'chat':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><rect x="4" y="6" width="24" height="16" rx="4" stroke="currentColor" strokeWidth="3" /><path d="M8 22V26L16 22H24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
      );
    case 'doc':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><rect x="7" y="4" width="18" height="24" rx="3" stroke="currentColor" strokeWidth="3" /><path d="M11 10H21M11 16H21M11 22H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      );
    case 'diff':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><rect x="4" y="8" width="24" height="16" rx="4" stroke="currentColor" strokeWidth="3" /><path d="M12 16H20M16 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      );
    case 'user':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><circle cx="16" cy="12" r="6" stroke="currentColor" strokeWidth="3" /><path d="M6 26C6 21.58 10.03 18 16 18C21.97 18 26 21.58 26 26" stroke="currentColor" strokeWidth="3" /></svg>
      );
    case 'company':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><rect x="6" y="10" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="3" /><rect x="12" y="6" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="3" /></svg>
      );
    case 'arrow':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><path d="M8 16H24M18 10L24 16L18 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'check':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="3" /><path d="M10 16L15 21L22 11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'search':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="3" /><line x1="22" y1="22" x2="28" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
      );
    case 'alert':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="3" /><path d="M16 10V18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><circle cx="16" cy="23" r="2" fill="currentColor" /></svg>
      );
    case 'chevron-down':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'chevron-up':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}><path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'database':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}><ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/><path d="M3 5V19C3 20.66 7.03 22 12 22S21 20.66 21 19V5" stroke="currentColor" strokeWidth="2"/><path d="M3 12C3 13.66 7.03 15 12 15S21 13.66 21 12" stroke="currentColor" strokeWidth="2"/></svg>
      );
    case 'disconnect':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}><path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M3 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M19 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
      );
    case 'time':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      );
    case 'chart-down':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}><polyline points="22,17 13.5,8.5 8.5,13.5 2,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="16,17 22,17 22,11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      );
    case 'factory':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}><path d="M2 20H22V22H2V20Z" fill="currentColor"/><path d="M17 10L20 7L17 4V6H13V8H17V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="10" width="8" height="10" stroke="currentColor" strokeWidth="2"/></svg>
      );
    case 'shop':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}><path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="3,6 21,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 10C16 12.21 14.21 14 12 14C9.79 14 8 12.21 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      );
    case 'bank':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}><line x1="3" y1="21" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="5" y1="21" x2="5" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="19" y1="21" x2="19" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="9" y1="21" x2="9" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="15" y1="21" x2="15" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="2,10 12,3 22,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      );
    case 'secure':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}><path d="M12 22S8 18 8 13V6L12 4L16 6V13C16 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      );
    default:
      return null;
  }
} 