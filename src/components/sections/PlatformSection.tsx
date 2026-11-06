import React from 'react';
import { Badge } from '../ui/Badge';
import { CheckCircle2 } from 'lucide-react';

export const PlatformSection: React.FC = () => {
  const transactions = [
    { name: 'Pairboard', type: 'Design tools', amount: '-$45.00', positive: false },
    { name: 'Stackpad', type: 'Hosting infrastructure', amount: '-$96.00', positive: false },
    { name: 'Orbit payout', type: 'Client invoice #1042', amount: '+$12,480.00', positive: true },
    { name: 'Ridely', type: 'Ride & ground transit', amount: '-$23.40', positive: false },
    { name: 'Cloudhaus', type: 'Dedicated GPU compute', amount: '-$3,210.44', positive: false },
    { name: 'Lumen Studio', type: 'Subscription revenue', amount: '+$9,800.00', positive: true },
    { name: 'Gusto payroll', type: 'Bi-weekly team payroll', amount: '-$86,400.00', positive: false },
  ];

  return (
    <section
      id="platform"
      data-framer-name="Features"
      style={{
        paddingTop: '80px',
        paddingBottom: '96px',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <Badge number="1" label="Platform" />
          </div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Every Flow, One Calm Panel
          </h2>
          <p className="section-description" style={{ margin: '0 auto' }}>
            Track spending, connect your banks, issue cards and see what’s next, all from one place.
          </p>
        </div>

        {/* 4 Feature Cards Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
          }}
        >
          {/* Card 1: Track daily Spending (Col span 7) */}
          <div
            style={{
              gridColumn: 'span 7',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              padding: '32px',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '380px',
            }}
            className="feature-card-col-7"
          >
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '6px' }}>
                Realtime Ledger
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#141414', marginBottom: '8px' }}>
                Track your daily Spending
              </h3>
              <p style={{ fontSize: '14px', color: '#707070', lineHeight: 1.5, marginBottom: '24px' }}>
                Every card swipe, wire, and direct debit automatically tagged and categorized with zero latency.
              </p>
            </div>

            {/* Micro transaction list */}
            <div
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: '14px',
                padding: '12px 16px',
                border: '1px solid #ebebeb',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                maxHeight: '220px',
                overflowY: 'auto',
              }}
            >
              {transactions.slice(0, 5).map((tx, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #f0f0f0',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#141414' }}>{tx.name}</div>
                    <div style={{ fontSize: '11px', color: '#707070' }}>{tx.type}</div>
                  </div>
                  <div
                    className="mono-num"
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: tx.positive ? '#12a150' : '#141414',
                    }}
                  >
                    {tx.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Connect all your Bank Accounts (Col span 5) */}
          <div
            style={{
              gridColumn: 'span 5',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              padding: '32px',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '380px',
            }}
            className="feature-card-col-5"
          >
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#ff6b1a', textTransform: 'uppercase', marginBottom: '6px' }}>
                Unified Accounts
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#141414', marginBottom: '8px' }}>
                Connect all your Bank Accounts
              </h3>
              <p style={{ fontSize: '14px', color: '#707070', lineHeight: 1.5, marginBottom: '24px' }}>
                Live balances across 12,000+ banks worldwide in one single secure view.
              </p>
            </div>

            {/* Bank Card Preview */}
            <div
              style={{
                backgroundColor: '#141414',
                color: '#ffffff',
                borderRadius: '16px',
                padding: '24px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#adadad' }}>Main Operating Checking</div>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: '#ffffff' }}>Chase Business •••• 4021</div>
                </div>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#00d64f',
                    backgroundColor: 'rgba(0, 214, 79, 0.15)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}
                >
                  Synced just now
                </span>
              </div>
              <div
                className="mono-num"
                style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  marginBottom: '12px',
                }}
              >
                $842,120.00
              </div>
              <div style={{ fontSize: '11px', color: '#707070', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={13} color="#12a150" />
                <span>FDIC insured up to $2.5M across sweep network</span>
              </div>
            </div>
          </div>

          {/* Card 3: Issue your team’s Smart Cards (Col span 5) */}
          <div
            style={{
              gridColumn: 'span 5',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              padding: '32px',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '360px',
            }}
            className="feature-card-col-5"
          >
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#12a150', textTransform: 'uppercase', marginBottom: '6px' }}>
                Instant Issuance
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#141414', marginBottom: '8px' }}>
                Issue your team’s Smart Cards
              </h3>
              <p style={{ fontSize: '14px', color: '#707070', lineHeight: 1.5, marginBottom: '20px' }}>
                Virtual & physical cards with spending rules and vendor limits baked directly in.
              </p>
            </div>

            {/* Overlapping mini cards visual */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                backgroundColor: '#f7f7f7',
                padding: '16px',
                borderRadius: '14px',
              }}
            >
              {[
                { name: 'Elena Rossi · Marketing', last4: '0219', limit: '$5,000 / mo', color: '#141414' },
                { name: 'DevOps & AWS Cloud', last4: '5530', limit: '$15,000 / mo', color: '#0066ff' },
                { name: 'Marcus Chen · Exec Card', last4: '8812', limit: 'No limit', color: '#262626' },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #ebebeb',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: 28,
                        height: 18,
                        borderRadius: '4px',
                        backgroundColor: c.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '8px',
                        fontWeight: 700,
                      }}
                    >
                      saro
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 600, color: '#141414' }}>{c.name}</div>
                      <div style={{ fontSize: '11px', color: '#707070' }}>•••• {c.last4}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: '#12a150', backgroundColor: '#e7f6ee', padding: '2px 8px', borderRadius: '4px' }}>
                    {c.limit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Plan ahead with Cash Forecasts (Col span 7) */}
          <div
            style={{
              gridColumn: 'span 7',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              padding: '32px',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '360px',
            }}
            className="feature-card-col-7"
          >
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#7e22ce', textTransform: 'uppercase', marginBottom: '6px' }}>
                Forecasting
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#141414', marginBottom: '8px' }}>
                Plan ahead with Cash Forecasts
              </h3>
              <p style={{ fontSize: '14px', color: '#707070', lineHeight: 1.5, marginBottom: '24px' }}>
                Automatic scenario modeling based on historical revenue, payroll, and known recurring liabilities.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#fbfbfb',
                borderRadius: '16px',
                padding: '20px',
                border: '1px solid #ebebeb',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#707070' }}>Cash forecast · 90 days projected net</div>
                  <div
                    className="mono-num"
                    style={{ fontSize: '26px', fontWeight: 700, color: '#12a150' }}
                  >
                    +$1.24M
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '12px', color: '#707070' }}>Runway confidence</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#141414' }}>
                    34 Months (Conservative)
                  </div>
                </div>
              </div>

              {/* Progress runway bar */}
              <div style={{ width: '100%', height: '8px', backgroundColor: '#ebebeb', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '82%', height: '100%', backgroundColor: '#12a150', borderRadius: '4px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .feature-card-col-7, .feature-card-col-5 {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
