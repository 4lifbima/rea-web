import React from 'react';
import { Link } from 'react-router-dom';

interface SaroLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const SaroLogo: React.FC<SaroLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showText = true,
}) => {
  const iconSizes = {
    sm: 24,
    md: 28,
    lg: 36,
  };

  const textSizes = {
    sm: '18px',
    md: '21px',
    lg: '26px',
  };

  const currentIconSize = iconSizes[size];

  const circleBg = variant === 'light' ? '#ffffff' : '#141414';
  const strokeColor = variant === 'light' ? '#141414' : '#ffffff';
  const textColor = variant === 'light' ? '#ffffff' : '#141414';

  return (
    <Link
      to="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '9px',
        textDecoration: 'none',
        userSelect: 'none',
      }}
      aria-label="Saro Finance Home"
    >
      <div
        style={{
          width: currentIconSize,
          height: currentIconSize,
          borderRadius: '50%',
          backgroundColor: circleBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: variant === 'dark' ? '0 2px 6px rgba(0,0,0,0.12)' : 'none',
        }}
      >
        <svg
          width={currentIconSize * 0.65}
          height={currentIconSize * 0.65}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Saro Starburst Mark */}
          <line
            x1="12"
            y1="3.5"
            x2="12"
            y2="20.5"
            stroke={strokeColor}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <line
            x1="4.5"
            y1="7.5"
            x2="19.5"
            y2="16.5"
            stroke={strokeColor}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <line
            x1="4.5"
            y1="16.5"
            x2="19.5"
            y2="7.5"
            stroke={strokeColor}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showText && (
        <span
          style={{
            fontSize: textSizes[size],
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: textColor,
            lineHeight: 1,
            display: 'inline-block',
            transform: 'translateY(-0.5px)',
          }}
        >
          saro
        </span>
      )}
    </Link>
  );
};

