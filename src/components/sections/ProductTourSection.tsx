import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '../ui/Badge';
import { SaroCardGraphic } from '../ui/SaroCardGraphic';

const TOUR_ITEMS = [
  { id: 'tour-analytics', label: 'Analytics' },
  { id: 'tour-accounts', label: 'Multi-currency accounts' },
  { id: 'tour-cards', label: 'Cards and spend' },
  { id: 'tour-budgeting', label: 'Budgeting' },
  { id: 'tour-fx', label: 'FX and payouts' },
];

const TIMEFRAMES: Record<string, { total: string; delta: string; bars: number[] }> = {
  '1H': {
    total: '$2,481,920',
    delta: '+0.8%',
    bars: [42, 44, 43, 46, 48, 45, 50, 52, 49, 53, 55, 54, 58, 60, 57, 62, 65, 63, 68, 70, 66, 72, 75, 73, 78, 80, 77, 82, 85, 92, 84, 80, 78, 82, 86, 84, 88, 90, 87, 91, 94, 92, 96, 98],
  },
  '1D': {
    total: '$2,481,920',
    delta: '+1.9%',
    bars: [35, 38, 36, 42, 45, 40, 48, 52, 47, 55, 58, 52, 60, 64, 58, 66, 70, 64, 72, 76, 70, 78, 82, 76, 84, 88, 82, 86, 90, 96, 85, 79, 83, 87, 81, 89, 92, 86, 90, 94, 88, 92, 95, 99],
  },
  '1W': {
    total: '$2,481,920',
    delta: '+4.2%',
    bars: [38, 42, 35, 48, 52, 44, 40, 55, 60, 48, 52, 62, 58, 46, 54, 66, 62, 50, 58, 70, 64, 54, 62, 74, 68, 58, 66, 78, 84, 98, 76, 68, 72, 80, 74, 66, 74, 82, 78, 70, 78, 86, 82, 88],
  },
  '1M': {
    total: '$2,481,920',
    delta: '+11.4%',
    bars: [28, 30, 32, 35, 33, 38, 42, 40, 45, 48, 46, 52, 55, 53, 58, 62, 60, 65, 68, 66, 70, 74, 72, 76, 80, 78, 82, 86, 90, 97, 84, 82, 86, 88, 85, 89, 91, 88, 92, 94, 91, 95, 97, 100],
  },
  All: {
    total: '$2,481,920',
    delta: '+38.6%',
    bars: [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 74, 78, 95, 80, 82, 84, 86, 88, 90, 91, 92, 94, 95, 96, 98, 99, 100],
  },
};

export const ProductTourSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('tour-analytics');
  const [timeframe, setTimeframe] = useState<string>('1W');
  const [showExtraAccount, setShowExtraAccount] = useState(false);
  const [fxAmount, setFxAmount] = useState<number>(10000);
  const [fxTarget, setFxTarget] = useState<'EUR' | 'GBP' | 'JPY'>('EUR');

  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const offset = 240;
      let current = TOUR_ITEMS[0].id;
      for (const item of TOUR_ITEMS) {
        const el = cardRefs.current[item.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            current = item.id;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = (id: string) => {
    setActiveId(id);
    const el = cardRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const activeChart = TIMEFRAMES[timeframe];
  const fxRates = { EUR: 0.9184, GBP: 0.7842, JPY: 153.4 };
  const fxSymbols = { EUR: '€', GBP: '£', JPY: '¥' };

  return (
    <section
      id="product-tour"
      style={{
        padding: '100px 0',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="container">
        {/* Centered Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '64px',
          }}
        >
          <div style={{ marginBottom: '18px' }}>
            <Badge number="6" iconType="lemon" label="Product tour" />
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.25rem, 4.2vw, 3.35rem)',
              fontWeight: 500,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: '#141414',
              marginBottom: '14px',
            }}
          >
            Every money move, mapped out.
          </h2>
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.55,
              color: '#525252',
              maxWidth: '460px',
            }}
          >
            Jump to any feature to see how Saro keeps cash, cards and payouts in sync.
          </p>
        </div>

        {/* Two-Column Layout: Sticky Left Nav + Stacked Right Cards */}
        <div
          className="tour-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '230px 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* Left Sticky Sidebar */}
          <div
            className="tour-sidebar"
            style={{
              position: 'sticky',
              top: '120px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {TOUR_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToCard(item.id)}
                  style={{
                    textAlign: 'left',
                    padding: '10px 0 10px 16px',
                    borderTop: 'none',
                    borderRight: 'none',
                    borderBottom: 'none',
                    borderLeft: isActive ? '2px solid #141414' : '2px solid #ebebeb',
                    backgroundColor: 'transparent',
                    color: isActive ? '#141414' : '#8a8a8a',
                    fontSize: '13.5px',
                    fontWeight: isActive ? 600 : 400,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Stacked Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Card 1: Analytics */}
            <div
              ref={(el) => {
                cardRefs.current['tour-analytics'] = el;
              }}
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: '28px',
                padding: '28px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    backgroundColor: '#141414',
                    color: '#ffffff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 style={{ fontSize: '21px', fontWeight: 500, letterSpacing: '-0.025em', color: '#141414' }}>
                  Analytics
                </h3>
              </div>
              <p style={{ fontSize: '14px', color: '#6b6b6b', marginBottom: '22px', maxWidth: '540px' }}>
                Track cash, revenue and burn in real time. Drill into any line item with a single click.
              </p>

              {/* Inner White Card */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '24px',
                  border: '1px solid rgba(0,0,0,0.04)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginBottom: '28px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={{
                        fontSize: '26px',
                        fontWeight: 600,
                        letterSpacing: '-0.03em',
                        color: '#141414',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {activeChart.total}
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
                      {activeChart.delta}
                    </span>
                  </div>

                  {/* Timeframe Tabs */}
                  <div
                    style={{
                      display: 'inline-flex',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '999px',
                      padding: '3px',
                      gap: '2px',
                    }}
                  >
                    {Object.keys(TIMEFRAMES).map((tf) => {
                      const active = timeframe === tf;
                      return (
                        <button
                          key={tf}
                          type="button"
                          onClick={() => setTimeframe(tf)}
                          style={{
                            padding: '4px 10px',
                            borderRadius: '999px',
                            border: 'none',
                            backgroundColor: active ? '#141414' : 'transparent',
                            color: active ? '#ffffff' : '#6b6b6b',
                            fontSize: '11px',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          {tf}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 44-Bar Vertical Chart + Floating Pill */}
                <div style={{ position: 'relative', paddingTop: '24px' }}>
                  {/* Floating Tooltip Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '64%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#141414',
                      color: '#ffffff',
                      padding: '5px 12px',
                      borderRadius: '999px',
                      fontSize: '11px',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.14)',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '999px',
                        backgroundColor: '#0066ff',
                      }}
                    />
                    Today · $2.48M
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: `repeat(${activeChart.bars.length}, 1fr)`,
                      gap: '4px',
                      height: '130px',
                      alignItems: 'end',
                    }}
                  >
                    {activeChart.bars.map((h, i) => (
                      <div
                        key={i}
                        style={{
                          height: `${h}%`,
                          borderRadius: '3px',
                          backgroundColor: i === 29 ? '#0066ff' : '#b3d1ff',
                          transition: 'height 0.3s ease',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Multi-currency accounts */}
            <div
              ref={(el) => {
                cardRefs.current['tour-accounts'] = el;
              }}
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: '28px',
                padding: '28px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    backgroundColor: '#0066ff',
                    color: '#ffffff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                  </svg>
                </span>
                <h3 style={{ fontSize: '21px', fontWeight: 500, letterSpacing: '-0.025em', color: '#141414' }}>
                  Multi-currency accounts
                </h3>
              </div>
              <p style={{ fontSize: '14px', color: '#6b6b6b', marginBottom: '22px', maxWidth: '560px' }}>
                Hold, convert and receive in 30+ currencies with local account details in the US, UK, EU and more.
              </p>

              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '18px 22px',
                  border: '1px solid rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                {[
                  { symbol: '$', bg: '#0066ff', name: 'Main account · USD', detail: 'US · ···· 4821', amount: '$1,240,500.00' },
                  { symbol: '€', bg: '#141414', name: 'Operations · EUR', detail: 'EU · ···· 9104', amount: '€382,120.40' },
                  { symbol: '£', bg: '#00d64f', name: 'Payroll · GBP', detail: 'UK · ···· 2219', amount: '£96,800.00' },
                  ...(showExtraAccount
                    ? [{ symbol: '¥', bg: '#635bff', name: 'APAC · JPY', detail: 'JP · ···· 7740', amount: '¥14,200,000' }]
                    : []),
                ].map((acc) => (
                  <div
                    key={acc.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingBottom: '12px',
                      borderBottom: '1px solid #f2f2f2',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '9px',
                          backgroundColor: acc.bg,
                          color: '#ffffff',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '13px',
                          fontWeight: 700,
                        }}
                      >
                        {acc.symbol}
                      </span>
                      <div>
                        <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#141414' }}>
                          {acc.name}
                        </div>
                        <div style={{ fontSize: '11px', color: '#8a8a8a' }}>{acc.detail}</div>
                      </div>
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

                <button
                  type="button"
                  onClick={() => setShowExtraAccount((prev) => !prev)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '12px',
                    border: '1px dashed #d8d8d8',
                    backgroundColor: 'transparent',
                    color: '#6b6b6b',
                    fontSize: '12px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  {showExtraAccount ? '− Hide APAC JPY account' : '+ Add a currency account'}
                </button>
              </div>
            </div>

            {/* Card 3: Cards and spend */}
            <div
              ref={(el) => {
                cardRefs.current['tour-cards'] = el;
              }}
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: '28px',
                padding: '28px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    backgroundColor: '#ccff00',
                    color: '#141414',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </span>
                <h3 style={{ fontSize: '21px', fontWeight: 500, letterSpacing: '-0.025em', color: '#141414' }}>
                  Cards and spend
                </h3>
              </div>
              <p style={{ fontSize: '14px', color: '#6b6b6b', marginBottom: '22px', maxWidth: '560px' }}>
                Issue virtual and physical cards in seconds. Set per-card limits, merchant locks and auto-receipts.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '16px',
                }}
              >
                {/* Left Card Box */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(0,0,0,0.04)',
                  }}
                >
                  <SaroCardGraphic variant="black" last4="8812" size="md" />
                </div>

                {/* Right Spend Box */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    padding: '20px',
                    border: '1px solid rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '16px',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '12px',
                        marginBottom: '8px',
                      }}
                    >
                      <span style={{ color: '#7a7a7a' }}>Monthly limit</span>
                      <span style={{ fontWeight: 600, color: '#141414' }}>$4,960 of $8,000</span>
                    </div>
                    <div
                      style={{
                        height: '6px',
                        borderRadius: '999px',
                        backgroundColor: '#efefef',
                        display: 'flex',
                        gap: '2px',
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{ width: '38%', backgroundColor: '#0066ff', borderRadius: '999px' }} />
                      <div style={{ width: '16%', backgroundColor: '#141414', borderRadius: '999px' }} />
                      <div style={{ width: '10%', backgroundColor: '#ccff00', borderRadius: '999px' }} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { name: 'Pairboard', amount: '-$45.00', bg: '#0066ff' },
                      { name: 'Stackpad', amount: '-$96.00', bg: '#00d64f' },
                    ].map((tx) => (
                      <div
                        key={tx.name}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '13px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span
                            style={{
                              width: '22px',
                              height: '22px',
                              borderRadius: '6px',
                              backgroundColor: tx.bg,
                              color: '#ffffff',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '10px',
                              fontWeight: 700,
                            }}
                          >
                            {tx.name[0]}
                          </span>
                          <span style={{ fontWeight: 500, color: '#141414' }}>{tx.name}</span>
                        </div>
                        <span style={{ fontWeight: 600, color: '#141414' }}>{tx.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Budgeting */}
            <div
              ref={(el) => {
                cardRefs.current['tour-budgeting'] = el;
              }}
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: '28px',
                padding: '28px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    backgroundColor: '#00d64f',
                    color: '#ffffff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 2v10l8.5 5" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </span>
                <h3 style={{ fontSize: '21px', fontWeight: 500, letterSpacing: '-0.025em', color: '#141414' }}>
                  Budgeting
                </h3>
              </div>
              <p style={{ fontSize: '14px', color: '#6b6b6b', marginBottom: '22px', maxWidth: '560px' }}>
                Set team and project budgets that update automatically as cards are swiped and bills are paid.
              </p>

              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '20px 22px',
                  border: '1px solid rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {[
                  { team: 'Engineering', sub: 'Cloud & tools', spent: '$34,200 / $45,000', pct: 76, color: '#0066ff' },
                  { team: 'Growth & Marketing', sub: 'Paid acquisition', spent: '$21,800 / $30,000', pct: 73, color: '#00d64f' },
                  { team: 'Operations', sub: 'Travel & workplace', spent: '$9,400 / $15,000', pct: 63, color: '#635bff' },
                ].map((b) => (
                  <div key={b.team}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        marginBottom: '6px',
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#141414' }}>
                          {b.team}
                        </span>
                        <span style={{ fontSize: '12px', color: '#8a8a8a', marginLeft: '8px' }}>
                          {b.sub}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: '12.5px',
                          fontWeight: 600,
                          color: '#141414',
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {b.spent}
                      </span>
                    </div>
                    <div
                      style={{
                        height: '7px',
                        borderRadius: '999px',
                        backgroundColor: '#efefef',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: `${b.pct}%`,
                          height: '100%',
                          backgroundColor: b.color,
                          borderRadius: '999px',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 5: FX and payouts */}
            <div
              ref={(el) => {
                cardRefs.current['tour-fx'] = el;
              }}
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: '28px',
                padding: '28px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    backgroundColor: '#635bff',
                    color: '#ffffff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M7 10l5-5 5 5M17 14l-5 5-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 style={{ fontSize: '21px', fontWeight: 500, letterSpacing: '-0.025em', color: '#141414' }}>
                  FX and payouts
                </h3>
              </div>
              <p style={{ fontSize: '14px', color: '#6b6b6b', marginBottom: '22px', maxWidth: '560px' }}>
                Convert at the real mid-market rate and send local transfers to 190 countries in seconds.
              </p>

              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '20px 22px',
                  border: '1px solid rgba(0,0,0,0.04)',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      padding: '14px 16px',
                      borderRadius: '14px',
                      backgroundColor: '#f7f7f7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '11px', color: '#8a8a8a', marginBottom: '2px' }}>
                        You send
                      </div>
                      <input
                        type="number"
                        value={fxAmount}
                        onChange={(e) => setFxAmount(Math.max(0, Number(e.target.value)))}
                        aria-label="You send amount in USD"
                        style={{
                          fontSize: '18px',
                          fontWeight: 600,
                          color: '#141414',
                          border: 'none',
                          backgroundColor: 'transparent',
                          width: '120px',
                          outline: 'none',
                        }}
                      />
                    </div>
                    <span
                      style={{
                        padding: '5px 10px',
                        borderRadius: '999px',
                        backgroundColor: '#ffffff',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#141414',
                      }}
                    >
                      $ USD
                    </span>
                  </div>

                  <div
                    style={{
                      padding: '14px 16px',
                      borderRadius: '14px',
                      backgroundColor: '#f7f7f7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '11px', color: '#8a8a8a', marginBottom: '2px' }}>
                        Recipient gets
                      </div>
                      <div
                        style={{
                          fontSize: '18px',
                          fontWeight: 600,
                          color: '#141414',
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {(fxAmount * fxRates[fxTarget]).toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {(['EUR', 'GBP', 'JPY'] as const).map((code) => (
                        <button
                          key={code}
                          type="button"
                          onClick={() => setFxTarget(code)}
                          style={{
                            padding: '5px 9px',
                            borderRadius: '999px',
                            border: 'none',
                            backgroundColor: fxTarget === code ? '#141414' : '#ffffff',
                            color: fxTarget === code ? '#ffffff' : '#6b6b6b',
                            fontSize: '11px',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          {fxSymbols[code]} {code}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#7a7a7a',
                  }}
                >
                  <span>
                    Mid-market rate · 1 USD = {fxRates[fxTarget]} {fxTarget}
                  </span>
                  <span style={{ color: '#0a8537', fontWeight: 600 }}>⚡ Arrives today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tour-layout {
            grid-template-columns: 1fr !important;
          }
          .tour-sidebar {
            position: static !important;
            flex-direction: row !important;
            overflow-x: auto;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
};
