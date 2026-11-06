import React from 'react';
import { Link } from 'react-router-dom';

interface SaroMarkProps {
  size?: number;
  bg?: string;
  fg?: string;
}

export const SaroMark: React.FC<SaroMarkProps> = ({
  size = 36,
  bg = '#141414',
  fg = '#ffffff',
}) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
  >
    <svg
      width={size * 0.56}
      height={size * 0.56}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3.75V20.25M4.5 7.5L19.5 16.5M4.5 16.5L19.5 7.5"
        stroke={fg}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

interface SaroLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  lowercase?: boolean;
}

export const SaroLogo: React.FC<SaroLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showText = true,
  lowercase = false,
}) => {
  const iconSizes = {
    sm: 28,
    md: 36,
    lg: 42,
  };

  const textSizes = {
    sm: '16px',
    md: '19px',
    lg: '22px',
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
        gap: '10px',
        textDecoration: 'none',
        userSelect: 'none',
      }}
      aria-label="Saro Home"
    >
      <SaroMark size={currentIconSize} bg={circleBg} fg={strokeColor} />

      {showText && (
        <span
          style={{
            fontSize: textSizes[size],
            fontWeight: 600,
            letterSpacing: '-0.03em',
            color: textColor,
            lineHeight: 1,
          }}
        >
          {lowercase ? 'saro' : 'Saro'}
        </span>
      )}
    </Link>
  );
};
