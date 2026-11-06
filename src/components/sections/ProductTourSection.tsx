import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { Tabs } from '../ui/Tabs';
import { productTourTabs } from '../../data/products';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const ProductTourSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('analytics');
  const [chartTimeframe, setChartTimeframe] = useState<'1H' | '1D' | '1W' | '1M' | 'All'>('1M');

  const currentTab = productTourTabs.find((t) => t.id === activeTab) || productTourTabs[0];

  return (
    <section
      id="tour"
      data-framer-name="Product Tour"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: '#fafafa',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <Badge number="6" label="Product tour" />
          </div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Every money move, mapped out.
          </h2>
          <p className="section-description" style={{ margin: '0 auto 32px auto' }}>
            Scroll through the core of Saro, from live analytics to instant FX, all in one calm panel.
          </p>

          {/* Interactive Tab Switcher */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Tabs
              tabs={productTourTabs}
              activeTabId={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </div>

        {/* Tour Main Display Card */}
        <div
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-card)',
            overflow: 'hidden',
          }}
          className="animate-fade-in"
        >
          {/* Header of Preview */}
          <div
            style={{
              padding: '24px 32px',
              borderBottom: '1px solid #f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                {currentTab.label}
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#141414' }}>
                {currentTab.title}
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div className="mono-num" style={{ fontSize: '22px', fontWeight: 700, color: '#141414' }}>
                {currentTab.metric}
              </div>
              <div style={{ fontSize: '12px', color: '#12a150', fontWeight: 600 }}>
                {currentTab.delta}
              </div>
            </div>
          </div>

          {/* Content Pane depending on tab */}
          <div style={{ padding: '36px' }}>
            {activeTab === 'analytics' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <div style={{ fontSize: '14px', color: '#707070' }}>Realtime Cash Inflow vs Outflow</div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {(['1H', '1D', '1W', '1M', 'All'] as const).map((tf) => (
                      <button
                        key={tf}
                        type="button"
                        onClick={() => setChartTimeframe(tf)}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: 600,
                          backgroundColor: chartTimeframe === tf ? '#141414' : '#f0f0f0',
                          color: chartTimeframe === tf ? '#ffffff' : '#707070',
                          cursor: 'pointer',
                        }}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rich SVG Analytics Chart */}
                <svg viewBox="0 0 900 240" style={{ width: '100%', height: 'auto', maxHeight: '240px' }}>
                  <defs>
                    <linearGradient id="tourChartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0066ff" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#0066ff" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Grid Lines */}
                  <line x1="0" y1="60" x2="900" y2="60" stroke="#f0f0f0" strokeDasharray="4 4" />
                  <line x1="0" y1="120" x2="900" y2="120" stroke="#f0f0f0" strokeDasharray="4 4" />
                  <line x1="0" y1="180" x2="900" y2="180" stroke="#f0f0f0" strokeDasharray="4 4" />

                  {/* Area fill */}
                  <path
                    d="M 0,180 C 150,170 250,120 400,100 C 550,80 700,40 900,20 L 900,240 L 0,240 Z"
                    fill="url(#tourChartGradient)"
                  />
                  {/* Primary Trend Line */}
                  <path
                    d="M 0,180 C 150,170 250,120 400,100 C 550,80 700,40 900,20"
                    fill="none"
                    stroke="#0066ff"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="900" cy="20" r="5" fill="#0066ff" />
                </svg>
              </div>
            )}

            {activeTab === 'accounts' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: '20px' }}>
                {[
                  { name: 'US Operating Account', iban: 'US89 SARO 0124 5510', amount: '$1,240,500.00', status: 'Domestic ACH' },
                  { name: 'European Treasury IBAN', iban: 'DE89 3704 0044 0532', amount: 'â‚¬382,120.40', status: 'SEPA Instant' },
                  { name: 'UK Clearing Account', iban: 'GB29 NWBK 6016 1331', amount: 'Â£96,800.00', status: 'Faster Payments' },
                ].map((acc, i) => (
                  <div key={i} style={{ padding: '20px', borderRadius: '14px', backgroundColor: '#f9f9f9', border: '1px solid #ebebeb' }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#141414', marginBottom: '4px' }}>{acc.name}</div>
                    <div style={{ fontSize: '11px', color: '#707070', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>{acc.iban}</div>
                    <div className="mono-num" style={{ fontSize: '22px', fontWeight: 700, color: '#141414', marginBottom: '8px' }}>{acc.amount}</div>
                    <span style={{ fontSize: '11px', color: '#12a150', backgroundColor: '#e7f6ee', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                      {acc.status}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'cards' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '20px' }}>
                <div style={{ padding: '24px', borderRadius: '16px', backgroundColor: '#141414', color: '#ffffff' }}>
                  <div style={{ fontSize: '12px', color: '#adadad', marginBottom: '8px' }}>Corporate Virtual Card</div>
                  <div style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '24px' }}>
                    â€¢â€¢â€¢â€¢ â€¢â€¢â€¢â€¢ â€¢â€¢â€¢â€¢ 4410
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span>Elena Rossi</span>
                    <span>EXP 08/28</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#141414' }}>
                    <CheckCircle2 size={16} color="#12a150" />
                    <span>Real-time receipt SMS match</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#141414' }}>
                    <CheckCircle2 size={16} color="#12a150" />
                    <span>Auto-block on unauthorized categories</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#141414' }}>
                    <CheckCircle2 size={16} color="#12a150" />
                    <span>Zero foreign exchange surcharges</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'budgeting' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { department: 'Engineering & Cloud Compute', spent: '$142,500', total: '$180,000', percent: 79 },
                  { department: 'Sales & Customer Acquisition', spent: '$68,200', total: '$100,000', percent: 68 },
                  { department: 'Operations & Workspace', spent: '$24,100', total: '$35,000', percent: 68 },
                ].map((b, i) => (
                  <div key={i} style={{ padding: '16px 20px', borderRadius: '12px', backgroundColor: '#f9f9f9', border: '1px solid #ebebeb' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#141414' }}>{b.department}</span>
                      <span className="mono-num" style={{ fontSize: '13px', fontWeight: 600, color: '#707070' }}>{b.spent} / {b.total}</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${b.percent}%`, height: '100%', backgroundColor: 'var(--color-primary)', borderRadius: '4px' }} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'fx' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ fontSize: '16px', color: '#141414', fontWeight: 600 }}>
                  Live Institutional Mid-Market FX Conversion
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <div style={{ padding: '16px 24px', backgroundColor: '#f7f7f7', borderRadius: '12px', border: '1px solid #e0e0e0' }}>
                    <div style={{ fontSize: '12px', color: '#707070' }}>You send</div>
                    <div className="mono-num" style={{ fontSize: '24px', fontWeight: 700, color: '#141414' }}>10,000.00 USD</div>
                  </div>
                  <ArrowRight size={24} color="#0066ff" />
                  <div style={{ padding: '16px 24px', backgroundColor: '#e7f6ee', borderRadius: '12px', border: '1px solid #c3ebda' }}>
                    <div style={{ fontSize: '12px', color: '#12a150' }}>Recipient receives in 2s</div>
                    <div className="mono-num" style={{ fontSize: '24px', fontWeight: 700, color: '#12a150' }}>9,214.30 EUR</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
