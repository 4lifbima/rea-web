import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  style?: React.CSSProperties;
  className?: string;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  style,
  className = '',
  id,
}) => {
  const maxDimensions = {
    sm: '768px',
    md: '960px',
    lg: '1200px',
    xl: '1360px',
    full: '100%',
  };

  return (
    <div
      id={id}
      className={`container ${className}`}
      style={{
        maxWidth: maxDimensions[size],
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 'var(--container-padding)',
        paddingRight: 'var(--container-padding)',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

