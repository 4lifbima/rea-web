import React from 'react';
import { Badge } from '../components/ui/Badge';
import { testimonialsData } from '../data/testimonials';
import { Star } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const CustomersPage: React.FC = () => {
  const caseStudies = [
    {
      company: 'Lumen Studio',
      lead: 'Maya Chen, Head of Finance',
      headline: 'How Lumen Studio cut month-end closing from 9 days to 48 hours.',
      result: '7 days saved every month',
      description: 'Lumen Studio operates a global distributed agency across 12 countries. Manual invoice matching and missing credit card receipts meant closing was a nightmare.',
      quote: 'Saro made every number feel obvious. We gave our team cards with built-in rules, and receipts now upload themselves.',
    },
    {
      company: 'Orbit Freight',
      lead: 'Sofia Marquez, Finance Lead',
      headline: 'Scaling contractor disbursements to 190 countries with zero manual wires.',
      result: '$120,000 saved on annual bank fees',
      description: 'Managing overseas freight drivers and logistics hubs required hundreds of weekly international wire transfers with heavy bank spreads.',
      quote: 'Paying contractors in 14 countries used to take an entire workday. With Saro, it happens during my morning coffee break.',
    },
    {
      company: 'Halcyon Labs',
      lead: 'Daniel Okafor, CFO',
      headline: 'Maximizing yield on $18M treasury cash while maintaining daily operating liquidity.',
      result: '4.2% annualized cash yield',
      description: 'Following a Series B raise, Halcyon Labs needed custodian-grade diversification across sweep accounts without losing real-time visibility.',
      quote: 'The live cash view replaced three spreadsheets and a weekly meeting nobody enjoyed. Automated sweeps earn us six figures annually in passive yield.',
    },
  ];

  return (
    <div style={{ paddingTop: '64px', paddingBottom: '96px' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
          <Badge label="Customer Stories" />
        </div>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            color: 'var(--color-text)',
            marginBottom: '16px',
          }}
        >
          Loved by modern finance leaders.
        </h1>
        <p className="section-description" style={{ margin: '0 auto' }}>
          Read how 2,400+ finance teams cut closing times, automate approvals, and manage global money on Saro.
        </p>
      </div>

      {/* Featured Deep-Dive Case Studies */}
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '80px' }}>
        {caseStudies.map((cs, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid var(--color-border)',
              padding: '40px',
              boxShadow: 'var(--shadow-card)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ fontSize: '18px', fontWeight: 700, color: '#141414' }}>{cs.company}</span>
                <span style={{ fontSize: '13px', color: '#707070' }}>· {cs.lead}</span>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#141414', marginBottom: '16px', lineHeight: 1.3 }}>
                {cs.headline}
              </h2>
              <p style={{ fontSize: '14px', color: '#707070', lineHeight: 1.6, marginBottom: '20px' }}>
                {cs.description}
              </p>
              <div
                style={{
                  backgroundColor: '#f7f7f7',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--color-primary)',
                  fontSize: '14px',
                  fontStyle: 'italic',
                  color: '#262626',
                  lineHeight: 1.5,
                }}
              >
                &ldquo;{cs.quote}&rdquo;
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#fbfbfb',
                borderRadius: '16px',
                padding: '36px',
                border: '1px solid #ebebeb',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#707070', textTransform: 'uppercase', marginBottom: '8px' }}>
                Key Impact Metric
              </div>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#12a150', marginBottom: '24px' }}>
                {cs.result}
              </div>
              <Button to="/contact" variant="secondary" size="md">
                Read full customer study
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Grid of All 10 Testimonials */}
      <div className="container">
        <h2 style={{ fontSize: '26px', fontWeight: 700, textAlign: 'center', marginBottom: '36px', color: '#141414' }}>
          More notes from teams moving on Saro
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid var(--color-border)',
                padding: '24px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', color: '#ff6b1a', marginBottom: '12px' }}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#ff6b1a" stroke="none" />
                ))}
              </div>
              <p style={{ fontSize: '14px', color: '#141414', lineHeight: 1.6, marginBottom: '16px', fontWeight: 500 }}>
                &ldquo;{item.quote}&rdquo;
              </p>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#141414' }}>{item.name}</div>
              <div style={{ fontSize: '11px', color: '#707070' }}>{item.title} · {item.company}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
