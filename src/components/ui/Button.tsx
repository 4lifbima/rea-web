import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconRight,
  children,
  className = '',
  style,
  disabled,
  ...props
}) => {
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: '7px 14px',
      fontSize: '13px',
      borderRadius: '8px',
      gap: '6px',
    },
    md: {
      padding: '9px 18px',
      fontSize: '14px',
      borderRadius: '10px',
      gap: '8px',
    },
    lg: {
      padding: '12px 24px',
      fontSize: '15px',
      borderRadius: '12px',
      gap: '8px',
    },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: '#ffffff',
      border: '1px solid rgba(0, 102, 255, 0.2)',
      boxShadow: '0 2px 8px rgba(0, 102, 255, 0.25)',
    },
    secondary: {
      backgroundColor: '#ffffff',
      color: 'var(--color-text)',
      border: '1px solid var(--color-border)',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)',
    },
    dark: {
      backgroundColor: '#141414',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-secondary)',
      border: '1px solid transparent',
    },
    white: {
      backgroundColor: '#ffffff',
      color: '#141414',
      border: '1px solid rgba(255, 255, 255, 0.8)',
      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
    },
  };

  const combinedStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all var(--transition-fast)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style,
  };

  const content = (
    <>
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      <span>{children}</span>
      {iconRight && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{iconRight}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} style={combinedStyles} className={className}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={combinedStyles} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button style={combinedStyles} className={className} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

