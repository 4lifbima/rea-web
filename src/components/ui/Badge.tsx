import React from 'react';

export type BadgeIconType =
  | 'burst'
  | 'grid-blue'
  | 'grid-lime'
  | 'grid-orange'
  | 'butterfly'
  | 'clover-mint'
  | 'clover-lime'
  | 'puzzle'
  | 'lemon'
  | 'book'
  | 'chat';

interface BadgeProps {
  number?: string | number;
  label?: string;
  isLive?: boolean;
  isNew?: boolean;
  iconType?: BadgeIconType;
  children?: React.ReactNode;
  variant?: 'default' | 'live' | 'pill' | 'dark';
  className?: string;
}

const renderBadgeIcon = (type: BadgeIconType) => {
  switch (type) {
    case 'burst':
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1L9.6 3.1L12.2 2.4L12.3 5.1L14.8 6.1L13.5 8.5L14.8 10.9L12.3 11.9L12.2 14.6L9.6 13.9L8 16L6.4 13.9L3.8 14.6L3.7 11.9L1.2 10.9L2.5 8.5L1.2 6.1L3.7 5.1L3.8 2.4L6.4 3.1L8 1Z"
            fill="#CCFF00"
          />
        </svg>
      );
    case 'grid-blue':
      return (
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <circle cx="4" cy="4" r="2.3" fill="#70B2FF" />
          <circle cx="10" cy="4" r="2.3" fill="#70B2FF" />
          <circle cx="4" cy="10" r="2.3" fill="#70B2FF" />
          <circle cx="10" cy="10" r="2.3" fill="#70B2FF" />
        </svg>
      );
    case 'grid-lime':
      return (
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <rect x="1.5" y="1.5" width="4.5" height="4.5" rx="1" fill="#CCFF00" />
          <rect x="8" y="1.5" width="4.5" height="4.5" rx="1" fill="#CCFF00" />
          <rect x="1.5" y="8" width="4.5" height="4.5" rx="1" fill="#CCFF00" />
          <rect x="8" y="8" width="4.5" height="4.5" rx="1" fill="#CCFF00" />
        </svg>
      );
    case 'grid-orange':
      return (
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <circle cx="4" cy="4" r="2.3" fill="#FF6B1A" />
          <circle cx="10" cy="4" r="2.3" fill="#FF6B1A" />
          <circle cx="4" cy="10" r="2.3" fill="#FF6B1A" />
          <circle cx="10" cy="10" r="2.3" fill="#FF6B1A" />
        </svg>
      );
    case 'butterfly':
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 5.2C6.4 2.2 1.5 1.8 1.5 5.8C1.5 8.1 4.2 9.2 6.2 9.4C4.2 10.1 2.8 11.7 3.5 13.3C4.2 14.8 6.8 14.2 8 11.8C9.2 14.2 11.8 14.8 12.5 13.3C13.2 11.7 11.8 10.1 9.8 9.4C11.8 9.2 14.5 8.1 14.5 5.8C14.5 1.8 9.6 2.2 8 5.2Z"
            fill="#CCFF00"
          />
        </svg>
      );
    case 'clover-mint':
    case 'clover-lime': {
      const fill = type === 'clover-mint' ? '#2EE6C5' : '#CCFF00';
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="4.5" r="3" fill={fill} />
          <circle cx="5" cy="8.5" r="3" fill={fill} />
          <circle cx="11" cy="8.5" r="3" fill={fill} />
          <path d="M7.2 10.5H8.8L9.6 14.5H6.4L7.2 10.5Z" fill={fill} />
        </svg>
      );
    }
    case 'puzzle':
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 2.5C6 1.7 6.7 1 7.5 1C8.3 1 9 1.7 9 2.5H12C12.6 2.5 13 2.9 13 3.5V6.5C13.8 6.5 14.5 7.2 14.5 8C14.5 8.8 13.8 9.5 13 9.5V12.5C13 13.1 12.6 13.5 12 13.5H3.5C2.9 13.5 2.5 13.1 2.5 12.5V3.5C2.5 2.9 2.9 2.5 3.5 2.5H6Z"
            fill="#FF6B1A"
          />
        </svg>
      );
    case 'lemon':
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M12.8 3.2C10.2 2.2 6.5 3.1 4.4 5.2C2.3 7.3 1.4 11 2.4 13.6C5 14.6 8.7 13.7 10.8 11.6C12.9 9.5 13.8 5.8 12.8 3.2Z"
            fill="#FFE600"
          />
        </svg>
      );
    case 'book':
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M2 3.5C2 2.9 2.5 2.5 3 2.5H6.8C7.5 2.5 8 3 8 3.7V13.5C8 13 7.5 12.5 6.8 12.5H3C2.5 12.5 2 12.1 2 11.5V3.5ZM14 3.5C14 2.9 13.5 2.5 13 2.5H9.2C8.5 2.5 8 3 8 3.7V13.5C8 13 8.5 12.5 9.2 12.5H13C13.5 12.5 14 12.1 14 11.5V3.5Z"
            fill="#FF6B1A"
          />
        </svg>
      );
    case 'chat':
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 2C4.4 2 1.5 4.5 1.5 7.6C1.5 9.1 2.2 10.5 3.4 11.5L2.5 14L5.5 12.8C6.3 13.1 7.1 13.2 8 13.2C11.6 13.2 14.5 10.7 14.5 7.6C14.5 4.5 11.6 2 8 2Z"
            fill="#CCFF00"
          />
        </svg>
      );
  }
};

const defaultIconByNumber: Record<string, BadgeIconType> = {
  '1': 'grid-blue',
  '2': 'grid-lime',
  '3': 'butterfly',
  '4': 'clover-mint',
  '5': 'puzzle',
  '6': 'lemon',
  '7': 'burst',
  '8': 'butterfly',
  '9': 'book',
  '10': 'grid-orange',
  '11': 'chat',
  '12': 'burst',
};

export const Badge: React.FC<BadgeProps> = ({
  number,
  label,
  isNew = false,
  iconType,
  children,
  variant = 'default',
  className = '',
}) => {
  const leftText = isNew ? 'New' : number ? String(number) : 'New';
  const resolvedIcon: BadgeIconType =
    iconType || (number ? defaultIconByNumber[String(number)] || 'burst' : 'burst');
  const isDark = variant === 'dark';

  return (
    <div
      className={`saro-tag ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        userSelect: 'none',
      }}
    >
      {/* Left Blue Pill */}
      <span
        style={{
          height: '30px',
          padding: '0 10px',
          borderRadius: '8px',
          backgroundColor: '#0066ff',
          color: '#ffffff',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontFamily: isNew ? 'var(--font-sans)' : 'var(--font-mono)',
          fontSize: '12.5px',
          fontWeight: 500,
          letterSpacing: '-0.01em',
          lineHeight: 1,
        }}
      >
        <span>{leftText}</span>
        {renderBadgeIcon(resolvedIcon)}
      </span>

      {/* Right Label Pill */}
      <span
        style={{
          height: '30px',
          padding: '0 12px',
          borderRadius: '8px',
          backgroundColor: isDark ? '#222222' : '#ffffff',
          color: isDark ? '#ffffff' : '#141414',
          border: isDark ? '1px solid #333333' : '1px solid #ebebeb',
          display: 'inline-flex',
          alignItems: 'center',
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '-0.01em',
          lineHeight: 1,
          boxShadow: isDark ? 'none' : '0 1px 2px rgba(0,0,0,0.03)',
        }}
      >
        {label || children}
      </span>
    </div>
  );
};
