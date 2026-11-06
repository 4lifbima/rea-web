import React from 'react';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Shield, Sparkles, Heart, Compass, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Compass size={22} color="#0066ff" />,
      title: 'Radical Calm',
      description: 'Finance software should bring quiet confidence, not blinking red alarms and impenetrable multi-tab chaos.',
    },
    {
      icon: <Shield size={22} color="#12a150" />,
      title: 'Zero Hidden Fees',
      description: 'We charge honest SaaS subscriptions. We never skim hidden FX spread markups or hold money hostage.',
    },
    {
      icon: <Sparkles size={22} color="#ff6b1a" />,
      title: 'Ledger-True Intelligence',
      description: 'Our AI reads the actual underlying bank ledger and tax codes so CFOs can stake their reputations on the numbers.',
    },
    {
      icon: <Heart size={22} color="#7e22ce" />,
      title: 'Human Partner First',
      description: 'Every customer talks to senior finance engineers who understand chart of accounts and multi-currency consolidation.',
    },
  ];

  const team = [
    { name: 'Sarah O’Connor', role: 'Co-Founder & CEO', prev: 'Ex-Stripe, Goldman Sachs' },
    { name: 'Liam Zhang', role: 'Co-Founder & CTO', prev: 'Ex-Brex, Robinhood Infrastructure' },
    { name: 'Elena Rossi', role: 'Head of Product', prev: 'Ex-Wise, Revolut Business' },
    { name: 'David Vance', role: 'Head of Treasury Rails', prev: 'Ex-JP Morgan, Barclays' },
  ];

  return (
    <div style={{ paddingTop: '116px', paddingBottom: '96px' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
          <Badge label="Our Mission" />
        </div>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            color: 'var(--color-text)',
            marginBottom: '20px',
          }}
        >
          Building the calm operating system for money.
        </h1>
        <p className="section-description" style={{ margin: '0 auto', fontSize: '18px' }}>
          We started Saro with a simple conviction: modern companies shouldn’t need six disconnected bank portals, fifteen spreadsheets, and three days of manual receipt chasing to know where their money is.
        </p>
      </div>

      {/* Core Values */}
      <div className="container" style={{ marginBottom: '80px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: 700, textAlign: 'center', marginBottom: '40px', color: '#141414' }}>
          Our Principles
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
            gap: '24px',
          }}
        >
          {values.map((v, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1px solid var(--color-border)',
                padding: '32px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ padding: '10px', borderRadius: '10px', backgroundColor: '#f7f7f7', width: 'fit-content', marginBottom: '16px' }}>
                {v.icon}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#141414', marginBottom: '8px' }}>
                {v.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#707070', lineHeight: 1.6 }}>
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div className="container" style={{ marginBottom: '80px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: 700, textAlign: 'center', marginBottom: '40px', color: '#141414' }}>
          Leadership
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
            gap: '24px',
          }}
        >
          {team.map((member, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid var(--color-border)',
                padding: '24px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  backgroundColor: '#141414',
                  color: '#ffffff',
                  fontSize: '22px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                }}
              >
                {member.name.charAt(0)}
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#141414' }}>{member.name}</div>
              <div style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '6px' }}>{member.role}</div>
              <div style={{ fontSize: '12px', color: '#707070' }}>{member.prev}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Careers Callout */}
      <div className="container" id="careers">
        <div
          style={{
            backgroundColor: '#141414',
            color: '#ffffff',
            borderRadius: '24px',
            padding: '56px 40px',
            textAlign: 'center',
          }}
        >
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <Badge variant="dark" label="We Are Hiring" />
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '14px' }}>
            Join our engineering and financial systems team.
          </h2>
          <p style={{ fontSize: '16px', color: '#adadad', maxWidth: '540px', margin: '0 auto 32px auto', lineHeight: 1.6 }}>
            We are remote-first across North America and Europe, backed by top fintech founders.
          </p>
          <Button to="/contact" variant="white" size="lg" iconRight={<ArrowRight size={16} />}>
            View open roles
          </Button>
        </div>
      </div>
    </div>
  );
};
