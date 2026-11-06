import React from 'react';
import { Badge } from '../ui/Badge';
import { Accordion } from '../ui/Accordion';
import { faqData } from '../../data/faq';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FAQSection: React.FC = () => {
  return (
    <section
      id="faq"
      data-framer-name="FAQ"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <Badge number="10" label="FAQ" />
          </div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Questions, answered.
          </h2>
          <p className="section-description" style={{ margin: '0 auto 24px auto' }}>
            Everything you need to know about Saro, from setup to security. Still curious? Our team is one message away.
          </p>

          {/* Quick Help Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-subtle)',
              fontSize: '13px',
              color: 'var(--color-text)',
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                backgroundColor: '#12a150',
              }}
              className="animate-pulse-dot"
            />
            <span style={{ fontWeight: 500 }}>Still have questions?</span>
            <Link
              to="/#contact"
              style={{
                color: 'var(--color-primary)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span>Talk to us</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* 8 Accordion Questions */}
        <Accordion items={faqData} defaultOpenIndex={0} allowMultiple={false} />
      </div>
    </section>
  );
};
