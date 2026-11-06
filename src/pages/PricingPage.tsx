import React, { useState } from 'react';
import { pricingPlans } from '../data/pricing';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Check } from 'lucide-react';
import { FAQSection } from '../components/sections/FAQSection';

export const PricingPage: React.FC = () => {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <div style={{ paddingTop: '64px', paddingBottom: '80px' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
          <Badge label="Transparent Pricing" />
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
          Simple, predictable plans.
        </h1>
        <p className="section-description" style={{ margin: '0 auto 36px auto' }}>
          Start for free on our Starter plan. Upgrade as your team, volumes, and international currencies grow.
        </p>

        {/* Billing Cycle Switcher */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#ebebeb',
            padding: '4px',
            borderRadius: 'var(--radius-full)',
            gap: '4px',
          }}
        >
          <button
            type="button"
            onClick={() => setAnnualBilling(false)}
            style={{
              padding: '8px 20px',
              borderRadius: 'var(--radius-full)',
              fontSize: '14px',
              fontWeight: 600,
              backgroundColor: !annualBilling ? '#ffffff' : 'transparent',
              color: !annualBilling ? '#141414' : '#707070',
              boxShadow: !annualBilling ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setAnnualBilling(true)}
            style={{
              padding: '8px 20px',
              borderRadius: 'var(--radius-full)',
              fontSize: '14px',
              fontWeight: 600,
              backgroundColor: annualBilling ? '#ffffff' : 'transparent',
              color: annualBilling ? '#141414' : '#707070',
              boxShadow: annualBilling ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>Annual</span>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#12a150',
                backgroundColor: '#e7f6ee',
                padding: '2px 6px',
                borderRadius: '4px',
              }}
            >
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
            gap: '24px',
            alignItems: 'stretch',
            marginBottom: '80px',
          }}
        >
          {pricingPlans.map((plan) => {
            const price = annualBilling ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: plan.popular ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: plan.popular ? 'var(--shadow-dropdown)' : 'var(--shadow-card)',
                  position: 'relative',
                }}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'var(--color-primary)',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '3px 12px',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#141414', marginBottom: '6px' }}>
                    {plan.name}
                  </div>
                  <p style={{ fontSize: '13px', color: '#707070', lineHeight: 1.5, minHeight: '40px', marginBottom: '20px' }}>
                    {plan.tagline}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '24px' }}>
                    <span className="mono-num" style={{ fontSize: '38px', fontWeight: 700, color: '#141414' }}>
                      ${price}
                    </span>
                    <span style={{ fontSize: '13px', color: '#707070' }}>
                      {price === 0 ? 'forever' : '/ seat / mo'}
                    </span>
                  </div>

                  <Button
                    to="/contact"
                    variant={plan.popular ? 'primary' : 'secondary'}
                    size="md"
                    style={{ width: '100%', marginBottom: '28px' }}
                  >
                    {plan.ctaText}
                  </Button>

                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#adadad', textTransform: 'uppercase', marginBottom: '14px' }}>
                    Whatâ€™s included
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#404040' }}>
                        <span style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0 }}>
                          <Check size={15} strokeWidth={2.5} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Integrate FAQ */}
      <FAQSection />
    </div>
  );
};
