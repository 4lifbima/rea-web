import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { SaroCardGraphic } from '../ui/SaroCardGraphic';


const CURRENCIES = [
  { code: 'EUR', symbol: '€', rate: 0.91842 },
  { code: 'GBP', symbol: '£', rate: 0.7842 },
  { code: 'CAD', symbol: '$', rate: 1.3615 },
  { code: 'AUD', symbol: '$', rate: 1.5124 },
];

const PAYMENT_PILLS_ROW_1 = [
  { label: 'All major cards', color: '#0066ff', icon: '💳' },
  { label: 'Mobile wallets', color: '#141414', icon: '' },
  { label: 'Wire transfer', color: '#00d64f', icon: '🏦' },
  { label: 'Tap to pay', color: '#635bff', icon: ')))' },
];

const PAYMENT_PILLS_ROW_2 = [
  { label: 'Wire transfer', color: '#00d64f', icon: '⇄' },
  { label: 'Tap to pay', color: '#ccff00', icon: '✦' },
  { label: 'ACH Debit', color: '#ff6b1a', icon: '⚡' },
  { label: 'SEPA Debit', color: '#0066ff', icon: '€' },
];

export const ProductSuiteSection: React.FC = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const [paidMode, setPaidMode] = useState<'none' | 'wallet' | 'card'>('none');
  const [cardsHovered, setCardsHovered] = useState(false);

  const activeCurrency = CURRENCIES[currIdx];
  const converted = (10000 * activeCurrency.rate).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const cycleCurrency = () => {
    setCurrIdx((prev) => (prev + 1) % CURRENCIES.length);
  };

  return (
    <section
      id="product-suite"
      style={{
        padding: '100px 0',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="container">
        {/* Split Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'end',
            marginBottom: '48px',
          }}
        >
          <div>
            <div style={{ marginBottom: '18px' }}>
              <Badge number="2" iconType="grid-lime" label="Products" />
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.2vw, 3.35rem)',
                fontWeight: 500,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: '#141414',
                maxWidth: '520px',
              }}
            >
              A fully integrated suite of money tools.
            </h2>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.55,
                color: '#525252',
                maxWidth: '380px',
              }}
            >
              Start with one product and add the rest when you need it. Everything shares one ledger, one login and one calm panel.
            </p>
          </div>
        </div>

        {/* 12-column Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '18px',
          }}
          className="suite-bento-grid"
        >
          {/* 1. Payments (col-span 8) */}
          <div
            className="suite-col-8"
            style={{
              gridColumn: 'span 8',
              backgroundColor: '#f7f7f7',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '28px',
              overflow: 'hidden',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '21px',
                  fontWeight: 500,
                  letterSpacing: '-0.025em',
                  color: '#141414',
                  marginBottom: '6px',
                }}
              >
                Payments
              </h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: 1.5, maxWidth: '460px' }}>
                Accept cards, bank transfers and wallets anywhere, with funds settling straight into your Saro balance.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                gap: '18px',
                alignItems: 'center',
              }}
            >
              {/* Left Checkout Card */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '18px',
                  padding: '18px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  border: '1px solid rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ fontSize: '11px', color: '#7a7a7a', marginBottom: '2px' }}>
                  Annual plan
                </div>
                <div
                  style={{
                    fontSize: '25px',
                    fontWeight: 600,
                    letterSpacing: '-0.03em',
                    color: '#141414',
                    marginBottom: '14px',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  $4,200.00
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={() => setPaidMode(paidMode === 'wallet' ? 'none' : 'wallet')}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      backgroundColor: '#141414',
                      color: '#ffffff',
                      fontSize: '12px',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      border: 'none',
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="6" width="20" height="14" rx="3" />
                      <path d="M16 13h.01" />
                    </svg>
                    {paidMode === 'wallet' ? 'Paid with wallet ✓' : 'Pay with wallet'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaidMode(paidMode === 'card' ? 'none' : 'card')}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      backgroundColor: '#0066ff',
                      color: '#ffffff',
                      fontSize: '12px',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      border: 'none',
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                    {paidMode === 'card' ? 'Paid with card ✓' : 'Pay with card'}
                  </button>
                </div>
              </div>

              {/* Right Scrolling Method Pills */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  overflow: 'hidden',
                  maskImage: 'linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    width: 'max-content',
                    animation: 'marqueeLeft 22s linear infinite',
                  }}
                >
                  {[...PAYMENT_PILLS_ROW_1, ...PAYMENT_PILLS_ROW_1].map((pill, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 14px 8px 10px',
                        borderRadius: '999px',
                        backgroundColor: '#ffffff',
                        border: '1px solid rgba(0,0,0,0.05)',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: '#141414',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <span
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '6px',
                          backgroundColor: pill.color,
                          color: pill.color === '#ccff00' ? '#141414' : '#ffffff',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '10px',
                          fontWeight: 700,
                        }}
                      >
                        {pill.icon}
                      </span>
                      {pill.label}
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    width: 'max-content',
                    animation: 'marqueeRight 24s linear infinite',
                  }}
                >
                  {[...PAYMENT_PILLS_ROW_2, ...PAYMENT_PILLS_ROW_2].map((pill, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 14px 8px 10px',
                        borderRadius: '999px',
                        backgroundColor: '#ffffff',
                        border: '1px solid rgba(0,0,0,0.05)',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: '#141414',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <span
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '6px',
                          backgroundColor: pill.color,
                          color: pill.color === '#ccff00' ? '#141414' : '#ffffff',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '10px',
                          fontWeight: 700,
                        }}
                      >
                        {pill.icon}
                      </span>
                      {pill.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. Cards (col-span 4, row-span 2) */}
          <div
            className="suite-col-4"
            onMouseEnter={() => setCardsHovered(true)}
            onMouseLeave={() => setCardsHovered(false)}
            style={{
              gridColumn: 'span 4',
              gridRow: 'span 2',
              backgroundColor: '#f7f7f7',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '21px',
                  fontWeight: 500,
                  letterSpacing: '-0.025em',
                  color: '#141414',
                  marginBottom: '6px',
                }}
              >
                Cards
              </h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: 1.5 }}>
                Spin up virtual or physical cards for any teammate, vendor or trip with built-in spend rules.
              </p>
            </div>

            {/* Stacked Tilted Saro Cards */}
            <div
              style={{
                position: 'relative',
                height: '250px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '16px 0',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: cardsHovered ? '4px' : '12px',
                  transform: cardsHovered ? 'rotate(-10deg) translateY(-8px)' : 'rotate(-7deg)',
                  transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                  zIndex: 1,
                }}
              >
                <SaroCardGraphic variant="lime" last4="4410" size="sm" />
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: '44px',
                  transform: cardsHovered ? 'rotate(2deg) translateY(-4px)' : 'rotate(-2deg)',
                  transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                  zIndex: 2,
                }}
              >
                <SaroCardGraphic variant="blue" last4="2290" size="sm" />
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: cardsHovered ? '86px' : '78px',
                  transform: cardsHovered ? 'rotate(7deg) translateY(6px)' : 'rotate(4deg)',
                  transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                  zIndex: 3,
                }}
              >
                <SaroCardGraphic variant="black" last4="8812" size="sm" />
              </div>
            </div>

            {/* Monthly Limit Footer */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '14px 16px',
                border: '1px solid rgba(0,0,0,0.04)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '10px',
                  fontSize: '12px',
                }}
              >
                <span style={{ color: '#6b6b6b' }}>Monthly limit</span>
                <span style={{ fontWeight: 600, color: '#141414', fontVariantNumeric: 'tabular-nums' }}>
                  $4,960 of $8,000
                </span>
              </div>
              <div
                style={{
                  height: '6px',
                  borderRadius: '999px',
                  backgroundColor: '#efefef',
                  display: 'flex',
                  overflow: 'hidden',
                  gap: '2px',
                }}
              >
                <div style={{ width: '38%', backgroundColor: '#0066ff', borderRadius: '999px' }} />
                <div style={{ width: '16%', backgroundColor: '#141414', borderRadius: '999px' }} />
                <div style={{ width: '12%', backgroundColor: '#ccff00', borderRadius: '999px' }} />
              </div>
            </div>
          </div>

          {/* 3. Accounts (col-span 4) */}
          <div
            className="suite-col-4"
            style={{
              gridColumn: 'span 4',
              backgroundColor: '#f7f7f7',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '22px',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '21px',
                  fontWeight: 500,
                  letterSpacing: '-0.025em',
                  color: '#141414',
                  marginBottom: '6px',
                }}
              >
                Accounts
              </h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: 1.5 }}>
                Hold, convert and earn on balances in 30+ currencies.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '18px',
                padding: '14px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                border: '1px solid rgba(0,0,0,0.04)',
              }}
            >
              {[
                { symbol: '$', code: 'USD', amount: '$1.24M', bg: '#0066ff' },
                { symbol: '€', code: 'EUR', amount: '€382K', bg: '#141414' },
                { symbol: '£', code: 'GBP', amount: '£96.8K', bg: '#00d64f' },
              ].map((acc) => (
                <div
                  key={acc.code}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '7px',
                        backgroundColor: acc.bg,
                        color: '#ffffff',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 600,
                      }}
                    >
                      {acc.symbol}
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: 500, color: '#141414' }}>
                      {acc.code}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#141414',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {acc.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Payouts (col-span 4) */}
          <div
            className="suite-col-4"
            style={{
              gridColumn: 'span 4',
              backgroundColor: '#f7f7f7',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '22px',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '21px',
                  fontWeight: 500,
                  letterSpacing: '-0.025em',
                  color: '#141414',
                  marginBottom: '6px',
                }}
              >
                Payouts
              </h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: 1.5 }}>
                Pay vendors and contractors in 190 countries at the real rate.
              </p>
            </div>

            <div
              onClick={cycleCurrency}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '18px',
                padding: '14px 16px',
                border: '1px solid rgba(0,0,0,0.04)',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '10px',
                  borderBottom: '1px solid #f0f0f0',
                }}
              >
                <div>
                  <div style={{ fontSize: '10px', color: '#8a8a8a' }}>You send exactly</div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: '#141414', fontVariantNumeric: 'tabular-nums' }}>
                    10,000.00
                  </div>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    backgroundColor: '#f5f5f5',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#141414',
                  }}
                >
                  <span style={{ color: '#0066ff' }}>$</span> USD
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '10px',
                }}
              >
                <div>
                  <div style={{ fontSize: '10px', color: '#8a8a8a' }}>Recipient gets</div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: '#141414', fontVariantNumeric: 'tabular-nums' }}>
                    {converted}
                  </div>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    backgroundColor: '#f5f5f5',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#141414',
                  }}
                >
                  <span style={{ color: '#0066ff' }}>{activeCurrency.symbol}</span> {activeCurrency.code} ⇄
                </span>
              </div>

              <div
                style={{
                  textAlign: 'center',
                  fontSize: '10px',
                  color: '#9a9a9a',
                  marginTop: '8px',
                }}
              >
                Tap the currency to switch
              </div>
            </div>
          </div>

          {/* 5. Treasury (col-span 4) */}
          <div
            className="suite-col-4"
            style={{
              gridColumn: 'span 4',
              backgroundColor: '#f7f7f7',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '22px',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '21px',
                  fontWeight: 500,
                  letterSpacing: '-0.025em',
                  color: '#141414',
                  marginBottom: '6px',
                }}
              >
                Treasury
              </h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: 1.5 }}>
                Put idle cash to work in low-risk treasury funds, liquid whenever you need it.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '18px',
                padding: '16px',
                border: '1px solid rgba(0,0,0,0.04)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                }}
              >
                <span style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.03em', color: '#141414' }}>
                  $4.81M
                </span>
                <span
                  style={{
                    padding: '3px 9px',
                    borderRadius: '999px',
                    backgroundColor: '#dffae8',
                    color: '#0a8537',
                    fontSize: '11px',
                    fontWeight: 600,
                  }}
                >
                  4.2%
                </span>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, 1fr)',
                  gap: '6px',
                  height: '58px',
                  alignItems: 'end',
                }}
              >
                {[38, 46, 52, 60, 70, 82, 100].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      height: `${h}%`,
                      borderRadius: '5px',
                      backgroundColor: i === 6 ? '#0066ff' : '#b3d1ff',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 6. Saro AI (col-span 8) */}
          <div
            className="suite-col-8"
            style={{
              gridColumn: 'span 8',
              backgroundColor: '#f7f7f7',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '22px',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '21px',
                  fontWeight: 500,
                  letterSpacing: '-0.025em',
                  color: '#141414',
                  marginBottom: '6px',
                }}
              >
                Saro AI
              </h3>
              <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: 1.5, maxWidth: '480px' }}>
                Ask questions in plain English. Get answers, charts and anomalies from your live numbers in seconds.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div
                  style={{
                    padding: '9px 16px',
                    borderRadius: '999px',
                    backgroundColor: '#ebebeb',
                    fontSize: '13px',
                    color: '#141414',
                  }}
                >
                  Which vendors grew fastest this quarter?
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '14px 18px',
                  border: '1px solid rgba(0,0,0,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '6px',
                      backgroundColor: '#0066ff',
                      color: '#ffffff',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                    }}
                  >
                    ✦
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: '#141414' }}>
                    Three vendors grew more than 50%.
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '6px' }}>
                  {['+142%', '+88%', '+61%'].map((pct) => (
                    <span
                      key={pct}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '999px',
                        backgroundColor: '#f5f5f5',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#141414',
                      }}
                    >
                      {pct}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .suite-bento-grid .suite-col-8,
          .suite-bento-grid .suite-col-4 {
            grid-column: span 12 !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </section>
  );
};
