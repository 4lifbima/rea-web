import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Accordion } from '../ui/Accordion';
import { faqData } from '../../data/faq';

const SUPPORT_AVATARS = [
  '/assets/images/JhVhX5NpWx66mAyFjKStvFaZbAo.jpg',
  '/assets/images/2Cu3OpYSPTUbz6Wo3O4EaekV8.jpg',
  '/assets/images/VNwCUIPSCB4yi1usyzTj13lw4EE.jpg',
];

export const FAQSection: React.FC = () => {
  return (
    <section
      id="faq"
      style={{
        padding: '96px 0',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="container">
        <div
          className="faq-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '380px 1fr',
            gap: '56px',
            alignItems: 'start',
          }}
        >
          {/* Left Column */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <Badge number="10" iconType="grid-orange" label="FAQ" />
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                fontWeight: 500,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: '#141414',
                marginBottom: '14px',
              }}
            >
              Questions, answered.
            </h2>

            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#525252',
                marginBottom: '32px',
              }}
            >
              Everything you need to know about getting started, security and billing.
            </p>

            {/* Gray Support Card */}
            <div
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: '24px',
                padding: '24px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {SUPPORT_AVATARS.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '999px',
                        objectFit: 'cover',
                        border: '2px solid #f7f7f7',
                        marginLeft: i === 0 ? 0 : '-8px',
                      }}
                    />
                  ))}
                </div>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: '#525252',
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '999px',
                      backgroundColor: '#00d64f',
                    }}
                  />
                  Online now
                </span>
              </div>

              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: '#141414',
                  marginBottom: '6px',
                }}
              >
                Still have questions?
              </h3>

              <p
                style={{
                  fontSize: '13.5px',
                  lineHeight: 1.5,
                  color: '#6b6b6b',
                  marginBottom: '18px',
                }}
              >
                Talk to a real person. We reply in under two hours.
              </p>

              <Button variant="primary" size="sm" href="#contact" showChevron>
                Talk to us
              </Button>
            </div>
          </div>

          {/* Right Column: 8 Accordion Items */}
          <div>
            <Accordion items={faqData} defaultOpenIndex={-1} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};
