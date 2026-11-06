import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  const [activeCurrency, setActiveCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');

  const balances = {
    USD: { formatted: '$2,481,920.00', delta: '+4.2% ($102,400)', change: '+4.2%' },
    EUR: { formatted: '€2,284,350.00', delta: '+3.8% (€84,100)', change: '+3.8%' },
    GBP: { formatted: '£1,962,800.00', delta: '+4.5% (£85,200)', change: '+4.5%' },
  };

  return (
    <section
      id="hero"
      data-framer-name="Hero"
      style={{
        paddingTop: '64px',
        paddingBottom: '80px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Announcement Pill Badge */}
        <div style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-subtle)',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--color-text)',
            }}
          >
            <span
              style={{
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-primary-subtle)',
                color: 'var(--color-primary)',
                fontSize: '11px',
                fontWeight: 600,
              }}
            >
              New
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#12a150',
                }}
                className="animate-pulse-dot"
              />
              Realtime cash flow is live
            </span>
          </div>
        </div>

        {/* Hero Main Heading */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.08,
            color: 'var(--color-text)',
            maxWidth: '900px',
            margin: '0 auto 20px auto',
          }}
        >
          Run Your Money From One Panel
        </h1>

        {/* Hero Subheadline */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            maxWidth: '640px',
            margin: '0 auto 36px auto',
          }}
        >
          The finance dashboard for modern teams. Payments, cards and payouts in one live panel, synced every second.
        </p>

        {/* CTA Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '60px',
          }}
        >
          <Button to="/pricing" variant="primary" size="lg" iconRight={<ArrowRight size={16} />}>
            Start for free
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Book a demo
          </Button>
        </div>

        {/* Hero Visual Composition: Calm Finance Dashboard Panel */}
        <div
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            borderRadius: '24px',
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-elevated)',
            overflow: 'hidden',
            textAlign: 'left',
          }}
          className="animate-fade-in"
        >
          {/* Top Panel Bar */}
          <div
            style={{
              padding: '16px 24px',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fafafa',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#e5e7eb' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#e5e7eb' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#e5e7eb' }} />
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#141414', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Saro Operating Workspace</span>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: '#e7f6ee',
                    color: '#12a150',
                    fontSize: '11px',
                    fontWeight: 500,
                  }}
                >
                  Live synced
                </span>
              </div>
            </div>

            {/* Currency Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {(['USD', 'EUR', 'GBP'] as const).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => setActiveCurrency(curr)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    backgroundColor: activeCurrency === curr ? '#141414' : '#f0f0f0',
                    color: activeCurrency === curr ? '#ffffff' : '#707070',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Main Canvas */}
          <div style={{ padding: '32px' }}>
            {/* Balance & Key Trend */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
                marginBottom: '32px',
              }}
            >
              <div>
                <div style={{ fontSize: '13px', color: '#707070', fontWeight: 500, marginBottom: '6px' }}>
                  Total Realtime Liquidity
                </div>
                <div
                  className="mono-num"
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    color: '#141414',
                    marginBottom: '8px',
                  }}
                >
                  {balances[activeCurrency].formatted}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#12a150',
                      fontWeight: 600,
                    }}
                  >
                    <ArrowUpRight size={15} />
                    {balances[activeCurrency].change}
                  </span>
                  <span style={{ color: '#707070' }}>vs last month ({balances[activeCurrency].delta})</span>
                </div>
              </div>

              {/* Mini Trend Area Graphic */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  backgroundColor: '#fbfbfb',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px solid #f0f0f0',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#707070', marginBottom: '8px' }}>
                  <span>30-Day Cash Flow Trend</span>
                  <span style={{ color: '#12a150', fontWeight: 600 }}>Zero overdraft risk</span>
                </div>
                {/* SVG Sparkline */}
                <svg viewBox="0 0 400 80" style={{ width: '100%', height: '56px', overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0066ff" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#0066ff" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,60 Q60,50 120,40 T240,25 T340,15 T400,8 L400,80 L0,80 Z"
                    fill="url(#trendGradient)"
                  />
                  <path
                    d="M0,60 Q60,50 120,40 T240,25 T340,15 T400,8"
                    fill="none"
                    stroke="#0066ff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="400" cy="8" r="4" fill="#0066ff" />
                </svg>
              </div>
            </div>

            {/* Quick Financial Summary Row: 4 Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '16px',
                paddingTop: '24px',
                borderTop: '1px solid #f0f0f0',
              }}
            >
              <div
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#f7f7f7',
                  border: '1px solid #ebebeb',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#707070', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Payments
                </div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#141414', marginBottom: '2px' }}>
                  128 payment methods
                </div>
                <div style={{ fontSize: '12px', color: '#12a150', fontWeight: 500 }}>Settle same day</div>
              </div>

              <div
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#f7f7f7',
                  border: '1px solid #ebebeb',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#707070', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Cards
                </div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#141414', marginBottom: '2px' }}>
                  Virtual & physical cards
                </div>
                <div style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: 500 }}>Live limit enforcement</div>
              </div>

              <div
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#f7f7f7',
                  border: '1px solid #ebebeb',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#707070', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Treasury
                </div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#141414', marginBottom: '2px' }}>
                  Up to 4.2% yield
                </div>
                <div style={{ fontSize: '12px', color: '#12a150', fontWeight: 500 }}>Automated daily sweep</div>
              </div>

              <div
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#f7f7f7',
                  border: '1px solid #ebebeb',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#707070', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Payouts
                </div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#141414', marginBottom: '2px' }}>
                  Sent to 190 countries
                </div>
                <div style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: 500 }}>Zero foreign FX markups</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
