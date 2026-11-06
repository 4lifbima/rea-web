import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Wifi, ArrowRight } from 'lucide-react';

export const CardsSection: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<'obsidian' | 'silver' | 'cobalt'>('obsidian');

  const cardStyles = {
    obsidian: {
      bg: 'linear-gradient(135deg, #1f1f1f 0%, #141414 100%)',
      textColor: '#ffffff',
      border: '1px solid #333333',
      name: 'Obsidian Matte',
    },
    silver: {
      bg: 'linear-gradient(135deg, #e0e0e0 0%, #c8c8c8 100%)',
      textColor: '#141414',
      border: '1px solid #b8b8b8',
      name: 'Titanium Brushed',
    },
    cobalt: {
      bg: 'linear-gradient(135deg, #0052d9 0%, #003399 100%)',
      textColor: '#ffffff',
      border: '1px solid #0044cc',
      name: 'Cobalt Blue',
    },
  };

  const currentStyle = cardStyles[selectedColor];

  return (
    <section
      id="cards"
      data-framer-name="Cards Unique"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: '#fafafa',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px, 100%), 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Visual Customizer Card Preview */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid var(--color-border)',
              padding: '40px',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* The Fintech Metal Card */}
            <div
              style={{
                width: '100%',
                maxWidth: '360px',
                height: '215px',
                borderRadius: '16px',
                background: currentStyle.bg,
                color: currentStyle.textColor,
                border: currentStyle.border,
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '24px',
              }}
            >
              {/* Card Top: Saro Logo & Contactless */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.04em' }}>saro</span>
                  <span style={{ fontSize: '10px', textTransform: 'uppercase', opacity: 0.7, letterSpacing: '0.08em' }}>Business</span>
                </div>
                <Wifi size={20} style={{ transform: 'rotate(90deg)', opacity: 0.8 }} />
              </div>

              {/* Card Chip */}
              <div
                style={{
                  width: '36px',
                  height: '28px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #d4af37 0%, #aa820a 100%)',
                  border: '1px solid #8e6c04',
                }}
              />

              {/* Card Number & Holder */}
              <div>
                <div
                  className="mono-num"
                  style={{
                    fontSize: '15px',
                    letterSpacing: '0.15em',
                    fontWeight: 600,
                    marginBottom: '8px',
                  }}
                >
                  â€¢â€¢â€¢â€¢ â€¢â€¢â€¢â€¢ â€¢â€¢â€¢â€¢ 5530
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: '12px' }}>
                  <div style={{ fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Maya Chen
                  </div>
                  <div style={{ fontWeight: 600 }}>09/29</div>
                </div>
              </div>
            </div>

            {/* Finish Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '13px', color: '#707070', fontWeight: 500 }}>Color finish:</span>
              <button
                type="button"
                onClick={() => setSelectedColor('obsidian')}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: '#141414',
                  border: selectedColor === 'obsidian' ? '2px solid #0066ff' : '2px solid transparent',
                  cursor: 'pointer',
                }}
                aria-label="Obsidian Finish"
              />
              <button
                type="button"
                onClick={() => setSelectedColor('silver')}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: '#d0d0d0',
                  border: selectedColor === 'silver' ? '2px solid #0066ff' : '2px solid transparent',
                  cursor: 'pointer',
                }}
                aria-label="Titanium Finish"
              />
              <button
                type="button"
                onClick={() => setSelectedColor('cobalt')}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: '#0052d9',
                  border: selectedColor === 'cobalt' ? '2px solid #0066ff' : '2px solid transparent',
                  cursor: 'pointer',
                }}
                aria-label="Cobalt Finish"
              />
            </div>
          </div>

          {/* Right Column: Copy & Details */}
          <div>
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <Badge isNew label="Saro Cards" />
            </div>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              Cards as unique as your team
            </h2>
            <p className="section-description" style={{ marginBottom: '20px' }}>
              Give every teammate a card that feels like theirs. Pick a colour, print a name and set the limits before it ships. Pay anywhere and withdraw cash while travelling, or go fully virtual and add it to your phoneâ€™s wallet in one tap.
            </p>
            <p style={{ fontSize: '13px', color: '#adadad', marginBottom: '32px' }}>
              Custom designs and delivery fees may apply on some plans.
            </p>

            <Button to="/pricing" variant="primary" size="lg" iconRight={<ArrowRight size={16} />}>
              Order your cards
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

