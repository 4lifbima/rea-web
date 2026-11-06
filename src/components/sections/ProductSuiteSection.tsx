import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { CreditCard, Send, Building2, TrendingUp, Sparkles, Wallet } from 'lucide-react';

export const ProductSuiteSection: React.FC = () => {
  const [payoutAmount, setPayoutAmount] = useState('10000.00');

  // Interactive conversion calculation
  const calculatedEur = (parseFloat(payoutAmount || '0') * 0.91842).toFixed(2);

  return (
    <section
      id="suite"
      data-framer-name="Suite"
      style={{
        paddingTop: '80px',
        paddingBottom: '96px',
        backgroundColor: '#fafafa',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <Badge number="2" label="Products" />
          </div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            A fully integrated suite of money tools.
          </h2>
          <p className="section-description" style={{ margin: '0 auto' }}>
            Start with one product and add the rest when you need it. Everything shares one ledger, one login and one calm panel.
          </p>
        </div>

        {/* 6 Suite Grid Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Card 1: Payments */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span
                  style={{
                    padding: '8px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-primary-subtle)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                  }}
                >
                  <Wallet size={18} />
                </span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Payments</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#141414', marginBottom: '10px', lineHeight: 1.3 }}>
                Accept 128 payment methods and settle the same day.
              </h3>
              <p style={{ fontSize: '14px', color: '#707070', lineHeight: 1.5, marginBottom: '20px' }}>
                Annual plan $4,200.00. Settle instantly in local currency without intermediary fees.
              </p>
            </div>

            {/* Interactive Checkout preview */}
            <div
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: '12px',
                padding: '16px',
                border: '1px solid #ebebeb',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#141414' }}>Annual Enterprise Plan</span>
                <span className="mono-num" style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>$4,200.00</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Apple Pay', 'Google Pay', 'Cards', 'ACH', 'SEPA', 'Instant Wire'].map((m) => (
                  <span
                    key={m}
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      backgroundColor: '#ffffff',
                      border: '1px solid #e0e0e0',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      color: '#404040',
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Cards */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span
                  style={{
                    padding: '8px',
                    borderRadius: '8px',
                    backgroundColor: '#e7f6ee',
                    color: '#12a150',
                    display: 'flex',
                  }}
                >
                  <CreditCard size={18} />
                </span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Cards</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#141414', marginBottom: '10px', lineHeight: 1.3 }}>
                Virtual and metal cards with limits built in.
              </h3>
              <p style={{ fontSize: '14px', color: '#707070', lineHeight: 1.5, marginBottom: '20px' }}>
                Empower your team while keeping strict budget control before transactions settle.
              </p>
            </div>

            {/* Spend limit widget */}
            <div
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: '12px',
                padding: '16px',
                border: '1px solid #ebebeb',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#707070', marginBottom: '6px' }}>
                <span>Monthly Team Spend</span>
                <span className="mono-num" style={{ fontWeight: 600, color: '#141414' }}>$4,960 of $8,000</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden', marginBottom: '10px' }}>
                <div style={{ width: '62%', height: '100%', backgroundColor: '#0066ff', borderRadius: '4px' }} />
              </div>
              <div style={{ fontSize: '11px', color: '#12a150', fontWeight: 500 }}>
                • 3 cards active (•••• 4410, •••• 2290, •••• 8812)
              </div>
            </div>
          </div>

          {/* Card 3: Accounts */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span
                  style={{
                    padding: '8px',
                    borderRadius: '8px',
                    backgroundColor: '#fff2ea',
                    color: '#ff6b1a',
                    display: 'flex',
                  }}
                >
                  <Building2 size={18} />
                </span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Accounts</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#141414', marginBottom: '10px', lineHeight: 1.3 }}>
                Local details in 40 currencies.
              </h3>
              <p style={{ fontSize: '14px', color: '#707070', lineHeight: 1.5, marginBottom: '20px' }}>
                Hold multi-currency reserves with zero conversion friction.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
              }}
            >
              {[
                { curr: 'USD', bal: '$1.24M', flag: '🇺🇸' },
                { curr: 'EUR', bal: '€382K', flag: '🇪🇺' },
                { curr: 'GBP', bal: '£96.8K', flag: '🇬🇧' },
              ].map((c) => (
                <div
                  key={c.curr}
                  style={{
                    backgroundColor: '#f7f7f7',
                    borderRadius: '10px',
                    padding: '12px 10px',
                    border: '1px solid #ebebeb',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '18px', marginBottom: '4px' }}>{c.flag}</div>
                  <div style={{ fontSize: '11px', color: '#707070', fontWeight: 600 }}>{c.curr}</div>
                  <div className="mono-num" style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>{c.bal}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Payouts */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span
                  style={{
                    padding: '8px',
                    borderRadius: '8px',
                    backgroundColor: '#ebf3ff',
                    color: '#0052d9',
                    display: 'flex',
                  }}
                >
                  <Send size={18} />
                </span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Payouts</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#141414', marginBottom: '10px', lineHeight: 1.3 }}>
                Pay anyone in 190 countries in seconds.
              </h3>
              <p style={{ fontSize: '14px', color: '#707070', lineHeight: 1.5, marginBottom: '20px' }}>
                Instant real-time currency conversion with zero spread.
              </p>
            </div>

            {/* Interactive Currency Converter */}
            <div
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: '12px',
                padding: '14px',
                border: '1px solid #ebebeb',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', color: '#707070' }}>You send</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <input
                    type="text"
                    value={payoutAmount}
                    onChange={(e) => setPayoutAmount(e.target.value)}
                    className="mono-num"
                    style={{
                      width: '90px',
                      padding: '4px 6px',
                      borderRadius: '4px',
                      border: '1px solid #d0d0d0',
                      fontSize: '13px',
                      fontWeight: 600,
                      textAlign: 'right',
                    }}
                  />
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#141414' }}>USD</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#707070' }}>Recipient gets</span>
                <span className="mono-num" style={{ fontSize: '14px', fontWeight: 700, color: '#12a150' }}>
                  {calculatedEur} EUR
                </span>
              </div>
            </div>
          </div>

          {/* Card 5: Treasury */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span
                  style={{
                    padding: '8px',
                    borderRadius: '8px',
                    backgroundColor: '#f3e8ff',
                    color: '#7e22ce',
                    display: 'flex',
                  }}
                >
                  <TrendingUp size={18} />
                </span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Treasury</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#141414', marginBottom: '10px', lineHeight: 1.3 }}>
                Earn up to 4.2% on idle cash.
              </h3>
              <p style={{ fontSize: '14px', color: '#707070', lineHeight: 1.5, marginBottom: '20px' }}>
                Put cash reserves to work automatically with daily liquidity and full SIPC protection.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#141414',
                color: '#ffffff',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: '12px', color: '#adadad' }}>Treasury Balance</div>
                <div className="mono-num" style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>$4.81M</div>
              </div>
              <div
                style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(0, 214, 79, 0.15)',
                  color: '#00d64f',
                  fontWeight: 700,
                  fontSize: '14px',
                }}
              >
                4.2% APY
              </div>
            </div>
          </div>

          {/* Card 6: Saro AI */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--color-border)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span
                  style={{
                    padding: '8px',
                    borderRadius: '8px',
                    backgroundColor: '#e0f2fe',
                    color: '#0369a1',
                    display: 'flex',
                  }}
                >
                  <Sparkles size={18} />
                </span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Saro AI</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#141414', marginBottom: '10px', lineHeight: 1.3 }}>
                Ask your money anything and get answers with sources.
              </h3>
              <p style={{ fontSize: '14px', color: '#707070', lineHeight: 1.5, marginBottom: '20px' }}>
                Natural language queries against your actual ledger with audit-ready sources.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: '12px',
                padding: '14px',
                border: '1px solid #ebebeb',
                fontSize: '12px',
              }}
            >
              <div style={{ color: '#0066ff', fontWeight: 600, marginBottom: '6px' }}>
                &ldquo;Which vendors grew fastest this quarter?&rdquo;
              </div>
              <div style={{ color: '#404040', display: 'flex', gap: '8px' }}>
                <span style={{ color: '#12a150', fontWeight: 600 }}>Hexa +142%</span>
                <span>•</span>
                <span style={{ color: '#12a150', fontWeight: 600 }}>Sparkhost +88%</span>
                <span>•</span>
                <span style={{ color: '#12a150', fontWeight: 600 }}>Stackpad +61%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
