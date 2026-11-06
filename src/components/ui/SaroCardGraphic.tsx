import React from 'react';

interface SaroCardGraphicProps {
  color?: 'lime' | 'blue' | 'black';
  variant?: 'lime' | 'blue' | 'black';
  size?: 'sm' | 'md' | 'lg';
  last4?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  className?: string;
}

export const SaroCardGraphic: React.FC<SaroCardGraphicProps> = ({
  color,
  variant,
  size = 'md',
  last4 = '8812',
  width,
  height,
  style,
  className = '',
}) => {
  const resolvedColor = color ?? variant ?? 'black';

  const dimensions = {
    sm: { w: 195, h: 122 },
    md: { w: 230, h: 144 },
    lg: { w: 264, h: 165 },
  }[size];

  const finalWidth = width ?? dimensions.w;
  const finalHeight = height ?? dimensions.h;

  const palette = {
    lime: {
      bg: '#ccff00',
      text: '#141414',
      chip: 'rgba(255, 255, 255, 0.72)',
      border: 'rgba(20, 20, 20, 0.08)',
    },
    blue: {
      bg: '#0066ff',
      text: '#ffffff',
      chip: 'rgba(255, 255, 255, 0.75)',
      border: 'rgba(255, 255, 255, 0.14)',
    },
    black: {
      bg: '#141414',
      text: '#ffffff',
      chip: 'rgba(255, 255, 255, 0.75)',
      border: 'rgba(255, 255, 255, 0.1)',
    },
  }[resolvedColor];

  return (
    <div
      className={className}
      style={{
        width: finalWidth,
        height: finalHeight,
        borderRadius: '14px',
        backgroundColor: palette.bg,
        color: palette.text,
        border: `1px solid ${palette.border}`,
        padding: '16px 18px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 14px 32px rgba(0, 0, 0, 0.14), 0 3px 8px rgba(0, 0, 0, 0.06)',
        userSelect: 'none',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Top Row: saro wordmark + contactless circle */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span
          style={{
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          saro
        </span>
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="7.5" stroke={palette.text} strokeWidth="1.3" strokeOpacity="0.85" />
          <path
            d="M6.8 11.2C6.1 10.5 5.8 9.8 5.8 9C5.8 8.2 6.1 7.5 6.8 6.8M9 12.3C7.9 11.3 7.4 10.2 7.4 9C7.4 7.8 7.9 6.7 9 5.7M11.2 13.4C9.8 12.1 9.1 10.6 9.1 9C9.1 7.4 9.8 5.9 11.2 4.6"
            stroke={palette.text}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Bottom Row: Chip + Last 4 digits */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div
          style={{
            width: '28px',
            height: '20px',
            borderRadius: '5px',
            backgroundColor: palette.chip,
          }}
        />
        <span
          className="mono-num"
          style={{
            fontSize: '11.5px',
            fontWeight: 600,
            letterSpacing: '0.04em',
            opacity: 0.92,
          }}
        >
          •••• {last4}
        </span>
      </div>
    </div>
  );
};
