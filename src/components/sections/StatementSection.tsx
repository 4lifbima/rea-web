import React from 'react';

export const StatementSection: React.FC = () => {
  return (
    <section
      id="statement"
      data-framer-name="Statement"
      style={{
        paddingTop: '60px',
        paddingBottom: '80px',
        textAlign: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: '980px' }}>
        <p
          style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 500,
            lineHeight: 1.25,
            letterSpacing: '-0.03em',
            color: 'var(--color-text)',
          }}
        >
          Saro is the first finance panel where teams can{' '}
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>track</span>,{' '}
          <span style={{ color: '#141414', fontWeight: 600 }}>move</span> and{' '}
          <span style={{ color: '#12a150', fontWeight: 600 }}>grow</span> money in one calm place.
        </p>
      </div>
    </section>
  );
};

