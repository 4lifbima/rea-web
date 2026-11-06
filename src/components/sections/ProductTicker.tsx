import React from 'react';
import { productTickerItems } from '../../data/products';

export const ProductTicker: React.FC = () => {
  // Duplicate array for infinite seamless looping
  const tickerItems = [...productTickerItems, ...productTickerItems, ...productTickerItems];

  return (
    <section
      id="ticker"
      data-framer-name="Products"
      style={{
        paddingTop: '20px',
        paddingBottom: '40px',
        overflow: 'hidden',
        position: 'relative',
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
      }}
    >
      <div
        className="ticker-track"
        style={{
          display: 'flex',
          gap: '16px',
          width: 'max-content',
          animation: 'marqueeScroll 45s linear infinite',
        }}
      >
        {tickerItems.map((item, index) => (
          <div
            key={`${item.category}-${index}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 20px',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-subtle)',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: 'border-color var(--transition-fast), transform var(--transition-fast)',
            }}
            className="ticker-item"
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: 'var(--color-primary)',
                backgroundColor: 'var(--color-primary-subtle)',
                padding: '3px 8px',
                borderRadius: 'var(--radius-full)',
              }}
            >
              {item.category}
            </span>

            <span style={{ fontSize: '14px', fontWeight: 600, color: '#141414' }}>
              {item.title}
            </span>

            <span style={{ fontSize: '13px', color: '#707070' }}>
              · {item.description}
            </span>

            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: '#12a150',
                backgroundColor: '#e7f6ee',
                padding: '2px 7px',
                borderRadius: '4px',
              }}
            >
              {item.metric}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .ticker-track:hover {
          animation-play-state: paused;
        }
        .ticker-item:hover {
          border-color: #0066ff !important;
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
};
