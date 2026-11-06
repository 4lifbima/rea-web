import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const PARTNER_LOGOS = [
  '/assets/svgs/FuiFarr3QTYXqyqMVAc3sG5MNJA.svg',
  '/assets/svgs/T1nWoszgnZpayyptljgqyxsq7s.svg',
  '/assets/svgs/OhDeN9SIXDzgHpOWOe9Rha68dw.svg',
  '/assets/svgs/fiEkizV5UawQFZyvE8FXddATTw.svg',
  '/assets/svgs/hC8qlT5Jb6E8g8ruSpawznE7E.svg',
];

const VENDORS = [
  {
    name: 'Hexa',
    category: 'Project tools',
    growth: '+142%',
    amount: '$48,200',
    bars: [32, 38, 45, 52, 64, 100],
  },
  {
    name: 'Sparkhost',
    category: 'Cloud hosting',
    growth: '+88%',
    amount: '$31,740',
    bars: [42, 46, 54, 62, 72, 100],
  },
  {
    name: 'Stackpad',
    category: 'Workspace',
    growth: '+61%',
    amount: '$12,960',
    bars: [48, 52, 58, 66, 76, 95],
  },
];

export const SaroAISection: React.FC = () => {
  return (
    <section
      id="saro-ai"
      style={{
        padding: '96px 0',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left Column */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '420px',
            }}
          >
            <div>
              <div style={{ marginBottom: '20px' }}>
                <Badge number="3" iconType="butterfly" label="Saro AI" />
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.05,
                  color: '#141414',
                  marginBottom: '18px',
                  maxWidth: '440px',
                }}
              >
                Give your finance team an AI copilot.
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: '#525252',
                  maxWidth: '420px',
                  marginBottom: '28px',
                }}
              >
                Ask about spend, cash flow or late invoices in plain English. Saro AI reads your live ledger and answers with the chart already built.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
                <Button variant="secondary" href="/contact" showChevron>
                  Try Saro AI
                </Button>
                <span style={{ fontSize: '12px', color: '#8a8a8a' }}>
                  Included on Growth and Scale plans
                </span>
              </div>
            </div>

            {/* Bottom Partner Logos */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '28px',
                flexWrap: 'wrap',
                marginTop: '48px',
                opacity: 0.45,
              }}
            >
              {PARTNER_LOGOS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  style={{
                    height: '20px',
                    width: 'auto',
                    objectFit: 'contain',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Gray AI Panel */}
          <div
            style={{
              backgroundColor: '#f7f7f7',
              borderRadius: '28px',
              padding: '36px 28px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {/* User Prompt Bubble */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '999px',
                  padding: '12px 20px',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  color: '#141414',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  border: '1px solid rgba(0,0,0,0.04)',
                }}
              >
                Which vendors grew fastest this quarter, and why?
              </div>
            </div>

            {/* Found 3 vendors indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: 500,
                color: '#6b6b6b',
              }}
            >
              <span style={{ color: '#0066ff', fontSize: '13px' }}>✦</span>
              Found 3 vendors
            </div>

            {/* 3 Vendor Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(175px, 1fr))',
                gap: '14px',
                overflowX: 'auto',
                paddingBottom: '4px',
              }}
              className="no-scrollbar"
            >
              {VENDORS.map((vendor, idx) => (
                <motion.div
                  key={vendor.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    padding: '18px',
                    border: '1px solid rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '18px',
                  }}
                >
                  {/* Top Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '8px',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '15px',
                          fontWeight: 600,
                          color: '#141414',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {vendor.name}
                      </div>
                      <div style={{ fontSize: '11px', color: '#8a8a8a' }}>
                        {vendor.category}
                      </div>
                    </div>
                    <span
                      style={{
                        padding: '3px 8px',
                        borderRadius: '999px',
                        backgroundColor: '#e8f1ff',
                        color: '#0066ff',
                        fontSize: '11px',
                        fontWeight: 600,
                      }}
                    >
                      {vendor.growth}
                    </span>
                  </div>

                  {/* 6-Bar Chart */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(6, 1fr)',
                      gap: '6px',
                      height: '64px',
                      alignItems: 'end',
                    }}
                  >
                    {vendor.bars.map((barH, bIdx) => (
                      <div
                        key={bIdx}
                        style={{
                          height: `${barH}%`,
                          borderRadius: '4px',
                          backgroundColor: bIdx === 5 ? '#0066ff' : '#b3d1ff',
                        }}
                      />
                    ))}
                  </div>

                  {/* Bottom Amount */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: 600,
                        color: '#141414',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {vendor.amount}
                    </span>
                    <span style={{ fontSize: '11px', color: '#8a8a8a' }}>
                      this quarter
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
