import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'blue' | 'ghost' | 'white';
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
      padding: '8px 16px',
      fontSize: '13.5px',
      borderRadius: '9999px',
      gap: '6px',
    },
    md: {
      padding: '11px 20px',
      fontSize: '14px',
      borderRadius: '9999px',
      gap: '7px',
    },
    lg: {
      padding: '13px 24px',
      fontSize: '14.5px',
      borderRadius: '9999px',
      gap: '8px',
    },
  };

  // In Saro Reference: Primary CTA is sleek black pill (#141414), Secondary is #f0f0f0 pill
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: '#141414',
      color: '#ffffff',
      border: '1px solid #141414',
    },
    dark: {
      backgroundColor: '#141414',
      color: '#ffffff',
      border: '1px solid #141414',
    },
    secondary: {
      backgroundColor: '#f0f0f0',
      color: '#141414',
      border: '1px solid #f0f0f0',
    },
    blue: {
      backgroundColor: '#0066ff',
      color: '#ffffff',
      border: '1px solid #0066ff',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#141414',
      border: '1px solid transparent',
    },
    white: {
      backgroundColor: '#ffffff',
      color: '#141414',
      border: '1px solid #ebebeb',
    },
  };

  const combinedStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    letterSpacing: '-0.01em',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style,
  };

  const textStr = typeof children === 'string' ? children : undefined;

  const content = (
    <>
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      {textStr ? (
        <span className="roll-text" data-text={textStr}>
          <span>{textStr}</span>
        </span>
      ) : (
        <span>{children}</span>
      )}
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
