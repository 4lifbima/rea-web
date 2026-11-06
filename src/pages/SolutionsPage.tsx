import React from 'react';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Rocket, TrendingUp, Globe2, Building, CheckCircle2, ArrowRight } from 'lucide-react';

export const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      id: 'startups',
      icon: <Rocket size={24} color="#0066ff" />,
      badge: 'For Startups',
      title: 'Extend runway and automate closing.',
      description: 'Seed to Series A companies need velocity, not finance bureaucracy. Set up in 15 minutes and eliminate monthly close chaos.',
      points: [
        'Live cash burn rate and runway projections updated automatically',
        'Corporate cards with instant limits for employee SaaS tools',
        'Automatic receipt fetch from Google Workspace and Slack',
      ],
      stat: '90%',
      statLabel: 'reduction in bookkeeping hours',
    },
    {
      id: 'scaleups',
      icon: <TrendingUp size={24} color="#12a150" />,
      badge: 'For Scaleups',
      title: 'Scale operations without ballooning headcount.',
      description: 'Manage departmental budgets, high-volume vendor AP, and multi-tier approval policies across expanding teams.',
      points: [
        'Automated routing rules for approvals above any set limit',
        'Multi-entity consolidation with real-time currency revaluation',
        'Two-way sync with NetSuite, QuickBooks Online, and Xero',
      ],
      stat: '4x',
      statLabel: 'faster approval turnarounds',
    },
    {
      id: 'global',
      icon: <Globe2 size={24} color="#ff6b1a" />,
      badge: 'For Global Teams',
      title: 'Pay global contractors and teams without FX gouging.',
      description: 'Local receiving accounts in 40 currencies and direct local clearing rails into 190 countries.',
      points: [
        'Mid-market interbank exchange rates with zero markup spreads',
        'Local payment rails (ACH, SEPA, Faster Payments, PIX)',
        'Automated local tax compliance and invoice matching',
      ],
      stat: '3%',
      statLabel: 'average savings on international wires',
    },
    {
      id: 'enterprise',
      icon: <Building size={24} color="#7e22ce" />,
      badge: 'For Enterprises',
      title: 'Institutional controls with consumer simplicity.',
      description: 'Dedicated payment rails, tailored card embossing programs, and custom SLA response times.',
      points: [
        'Role-based granular access controls with SAML SSO & Okta',
        'SOC2 Type II, ISO 27001, and PCI-DSS Level 1 compliance',
        'Dedicated finance systems engineer & 24/7 Slack bridge',
      ],
      stat: '99.99%',
      statLabel: 'guaranteed platform SLA',
    },
  ];

  return (
    <div style={{ paddingTop: '64px', paddingBottom: '96px' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
          <Badge label="Tailored Solutions" />
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
          Built for how finance teams scale.
        </h1>
        <p className="section-description" style={{ margin: '0 auto' }}>
          Whether you are two founders closing seed funding or an international company moving tens of millions monthly.
        </p>
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {solutions.map((sol) => (
          <div
            key={sol.id}
            id={sol.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid var(--color-border)',
              padding: '48px',
              boxShadow: 'var(--shadow-card)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ padding: '8px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}>
                  {sol.icon}
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#707070' }}>
                  {sol.badge}
                </span>
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#141414', marginBottom: '14px', lineHeight: 1.25 }}>
                {sol.title}
              </h2>
              <p style={{ fontSize: '15px', color: '#707070', lineHeight: 1.6, marginBottom: '24px' }}>
                {sol.description}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {sol.points.map((p, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#141414' }}>
                    <CheckCircle2 size={16} color="#12a150" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <Button to="/contact" variant="primary" size="md" iconRight={<ArrowRight size={16} />}>
                Talk with solutions team
              </Button>
            </div>

            <div
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid #ebebeb',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div className="mono-num" style={{ fontSize: '64px', fontWeight: 800, color: '#141414', lineHeight: 1, marginBottom: '12px' }}>
                {sol.stat}
              </div>
              <div style={{ fontSize: '16px', fontWeight: 500, color: '#707070', maxWidth: '240px' }}>
                {sol.statLabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
