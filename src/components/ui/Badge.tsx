import React from 'react';

interface BadgeProps {
  number?: string | number;
  label?: string;
  isLive?: boolean;
  isNew?: boolean;
  children?: React.ReactNode;
  variant?: 'default' | 'live' | 'pill' | 'dark';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  number,
  label,
  isLive = false,
  isNew = false,
  children,
  variant = 'default',
  className = '',
}) => {
  return (
    <div
      className={`section-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 12px',
        borderRadius: 'var(--radius-full)',
        backgroundColor:
          variant === 'dark'
            ? '#1f1f1f'
            : variant === 'live'
            ? '#e7f6ee'
            : 'var(--color-badge-bg)',
        color:
          variant === 'dark'
            ? '#ffffff'
            : variant === 'live'
            ? '#12a150'
            : 'var(--color-badge-text)',
        border:
          variant === 'dark'
            ? '1px solid #333333'
            : variant === 'live'
            ? '1px solid #c3ebda'
            : '1px solid var(--color-badge-border)',
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
      }}
    >
      {isLive && (
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            backgroundColor: '#12a150',
            display: 'inline-block',
          }}
          className="animate-pulse-dot"
        />
      )}

      {isNew && (
        <span
          style={{
            padding: '1px 6px',
            borderRadius: '4px',
            backgroundColor: 'var(--color-primary)',
            color: '#ffffff',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          New
        </span>
      )}

      {number && (
        <span
          style={{
            color: 'var(--color-text-subtle)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            fontSize: '11px',
          }}
        >
          {number}
        </span>
      )}

      <span>{label || children}</span>
    </div>
  );
};

