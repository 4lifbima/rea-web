import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const GlobalPayoutsSection: React.FC = () => {
  const payoutRows = [
    { destination: 'Lisbon studio', flag: '🇵🇹', status: 'Sent · arrived in 2s', amount: '€12,400.00' },
    { destination: 'London contractors', flag: '🇬🇧', status: 'Sent · arrived in 4s', amount: '£8,920.50' },
    { destination: 'Tokyo office', flag: '🇯🇵', status: 'Sent · arrived in 3s', amount: '¥1,240,000' },
    { destination: 'Bangalore team', flag: '🇮🇳', status: 'Sent · arrived in 6s', amount: '₹680,000' },
    { destination: 'Austin payroll', flag: '🇺🇸', status: 'Sent · arrived in 1s', amount: '$46,300.00' },
    { destination: 'Seoul partners', flag: '🇰🇷', status: 'Sent · arrived in 5s', amount: '₩9,800,000' },
    { destination: 'Lagos vendors', flag: '🇳🇬', status: 'Sent · arrived in 3s', amount: '₦4,200,000' },
  ];

  return (
    <section
      id="payouts"
      data-framer-name="Split Payouts"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Text & Bullets */}
          <div>
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <Badge number="5" label="Global payouts" />
            </div>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              Pay anyone, anywhere, in their currency.
            </h2>
            <p className="section-description" style={{ marginBottom: '28px' }}>
              Send payouts to 190 countries in 40 currencies. Saro picks the fastest route, locks the rate and keeps every transfer reconciled for you.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {[
                'Live FX rates with no hidden markup',
                'Same-day arrival on most international routes',
                'Every payout matched automatically to your books',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#141414' }}>
                  <CheckCircle2 size={18} color="#12a150" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button to="/solutions#payouts" variant="secondary" size="md" iconRight={<ArrowRight size={16} />}>
              See payout coverage
            </Button>
          </div>

          {/* Right Column: Live Payouts Ticker Feed */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid var(--color-border)',
              padding: '24px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#12a150',
                  }}
                  className="animate-pulse-dot"
                />
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Payouts Today</span>
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)' }}>
                190 countries connected
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {payoutRows.map((row, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    backgroundColor: '#f9f9f9',
                    border: '1px solid #f0f0f0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '18px' }}>{row.flag}</span>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#141414' }}>{row.destination}</div>
                      <div style={{ fontSize: '11px', color: '#12a150' }}>{row.status}</div>
                    </div>
                  </div>
                  <div className="mono-num" style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>
                    {row.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
