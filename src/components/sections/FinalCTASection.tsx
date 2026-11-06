import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  return (
    <section
      id="cta"
      data-framer-name="Final CTA"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div className="container" style={{ maxWidth: '820px' }}>
        <h2
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.75rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            color: 'var(--color-text)',
            marginBottom: '20px',
          }}
        >
          Run your money from one calm panel.
        </h2>

        <p
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            maxWidth: '560px',
            margin: '0 auto 40px auto',
          }}
        >
          Join thousands of finance teams who run their business on Saro. Start in 15 minutes with no setup fees.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
          }}
        >
          <Button to="/pricing" variant="primary" size="lg" iconRight={<ArrowRight size={16} />}>
            Start for free
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
};
