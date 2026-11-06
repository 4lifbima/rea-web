import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const PAYOUT_ROWS = [
  {
    symbol: '₹',
    bg: '#ff8c42',
    color: '#ffffff',
    title: 'Bangalore team',
    subtitle: 'INR · Local transfer',
    amount: '₹680,000',
  },
  {
    symbol: '$',
    bg: '#ccff00',
    color: '#141414',
    title: 'Austin payroll',
    subtitle: 'USD · ACH',
    amount: '$46,300.00',
  },
  {
    symbol: '₩',
    bg: '#2ee6c5',
    color: '#141414',
    title: 'Seoul partners',
    subtitle: 'KRW · Local transfer',
    amount: '₩9,800,000',
  },
  {
    symbol: '₦',
    bg: '#635bff',
    color: '#ffffff',
    title: 'Lagos vendors',
    subtitle: 'NGN · Instant',
    amount: '₦4,200,000',
  },
  {
    symbol: '€',
    bg: '#0066ff',
    color: '#ffffff',
    title: 'Lisbon studio',
    subtitle: 'EUR · SEPA Instant',
    amount: '€12,400.00',
  },
  {
    symbol: '£',
    bg: '#e5e5e5',
    color: '#141414',
    title: 'London contractors',
    subtitle: 'GBP · Faster Payments',
    amount: '£8,920.50',
  },
];

export const GlobalPayoutsSection: React.FC = () => {
  return (
    <section
      id="global-payouts"
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
          <div>
            <div style={{ marginBottom: '20px' }}>
              <Badge number="5" iconType="puzzle" label="Global payouts" />
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
              Pay anyone, anywhere, in their currency.
            </h2>

            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#525252',
                maxWidth: '430px',
                marginBottom: '28px',
              }}
            >
              Send local transfers in 50+ currencies across 190 countries at the real mid-market rate, with no hidden spread.
            </p>

            {/* 3 Green Check Bullets */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                marginBottom: '32px',
              }}
            >
              {[
                'Same-day delivery on local rails',
                'Mid-market FX with a flat, transparent fee',
                'Batch payouts from a CSV or your accounting tool',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '14px',
                    color: '#141414',
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '999px',
                      backgroundColor: '#dffae8',
                      color: '#0a8537',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <Button variant="secondary" href="/contact" showChevron>
              See payout coverage
            </Button>
          </div>

          {/* Right Column: Gray Container with Floating Pills + Scrolling Payouts Card */}
          <div
            style={{
              backgroundColor: '#f7f7f7',
              borderRadius: '28px',
              padding: '48px 32px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '430px',
            }}
          >
            {/* Top-left floating pill: 190 countries */}
            <div
              style={{
                position: 'absolute',
                top: '26px',
                left: '26px',
                zIndex: 3,
                backgroundColor: '#ffffff',
                borderRadius: '999px',
                padding: '8px 14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#141414',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(0,0,0,0.04)',
              }}
            >
              <span style={{ color: '#0066ff', display: 'inline-flex' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </span>
              190 countries
            </div>

            {/* Center White Card */}
            <div
              style={{
                width: '100%',
                maxWidth: '370px',
                backgroundColor: '#ffffff',
                borderRadius: '22px',
                padding: '20px',
                boxShadow: '0 8px 28px rgba(0, 0, 0, 0.04)',
                border: '1px solid rgba(0,0,0,0.04)',
                overflow: 'hidden',
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #f2f2f2',
                }}
              >
                <span style={{ fontSize: '12px', color: '#7a7a7a', fontWeight: 500 }}>
                  Payouts today
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '3px 9px',
                    borderRadius: '999px',
                    backgroundColor: '#dffae8',
                    color: '#0a8537',
                    fontSize: '11px',
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '999px',
                      backgroundColor: '#00d64f',
                    }}
                  />
                  Live
                </span>
              </div>

              {/* Vertical Marquee List */}
              <div
                style={{
                  height: '240px',
                  overflow: 'hidden',
                  position: 'relative',
                  maskImage: 'linear-gradient(180deg, transparent 0%, #000 10%, #000 90%, transparent 100%)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    animation: 'marqueeUp 18s linear infinite',
                  }}
                >
                  {[...PAYOUT_ROWS, ...PAYOUT_ROWS].map((row, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '4px 0',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '9px',
                            backgroundColor: row.bg,
                            color: row.color,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '13px',
                            fontWeight: 700,
                            flexShrink: 0,
                          }}
                        >
                          {row.symbol}
                        </span>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 600, color: '#141414' }}>
                            {row.title}
                          </div>
                          <div style={{ fontSize: '11px', color: '#8a8a8a' }}>
                            {row.subtitle}
                          </div>
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#141414',
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {row.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom-right floating pill: Arrives in seconds */}
            <div
              style={{
                position: 'absolute',
                bottom: '26px',
                right: '26px',
                zIndex: 3,
                backgroundColor: '#141414',
                borderRadius: '999px',
                padding: '9px 16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                fontSize: '12px',
                fontWeight: 500,
                color: '#ffffff',
                boxShadow: '0 10px 28px rgba(0, 0, 0, 0.18)',
              }}
            >
              <span style={{ color: '#ccff00' }}>⚡</span>
              Arrives in seconds
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
