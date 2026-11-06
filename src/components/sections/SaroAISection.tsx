import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Sparkles } from 'lucide-react';

export const SaroAISection: React.FC = () => {
  const [activeQuery, setActiveQuery] = useState(
    'Which vendors grew fastest this quarter, and why?'
  );

  const sampleQueries = [
    'Which vendors grew fastest this quarter, and why?',
    'What is our runway if we hire 4 engineers in Q4?',
    'Show all card transactions over $1,000 without receipts',
  ];

  return (
    <section
      id="ai"
      data-framer-name="Split AI"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px, 100%), 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Text & Pitch */}
          <div>
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <Badge number="3" label="Saro AI" />
            </div>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              Give your finance team an AI copilot.
            </h2>
            <p className="section-description" style={{ marginBottom: '32px' }}>
              Ask questions in plain English and get answers from every transaction, invoice and card in seconds. No exports, no formulas, no waiting on reports.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <Button to="/pricing" variant="primary" size="lg" icon={<Sparkles size={16} />}>
                Try Saro AI
              </Button>
              <span style={{ fontSize: '13px', color: '#707070' }}>
                Included on Growth and Scale plans
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '16px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#adadad', textTransform: 'uppercase' }}>
                Suggested inquiries
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {sampleQueries.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveQuery(q)}
                    style={{
                      textAlign: 'left',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      backgroundColor: activeQuery === q ? 'var(--color-primary-subtle)' : '#f0f0f0',
                      color: activeQuery === q ? 'var(--color-primary)' : '#404040',
                      fontSize: '13px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      border: activeQuery === q ? '1px solid var(--color-primary-light)' : '1px solid transparent',
                      transition: 'all 0.2s',
                    }}
                  >
                    &ldquo;{q}&rdquo;
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: AI Chat Preview */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid var(--color-border)',
              padding: '28px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {/* Top Prompt Box */}
            <div
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: '16px',
                padding: '16px',
                border: '1px solid #ebebeb',
                marginBottom: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    backgroundColor: '#141414',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 700,
                  }}
                >
                  U
                </span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#141414' }}>Maya Chen (Controller)</span>
              </div>
              <div style={{ fontSize: '15px', color: '#141414', fontWeight: 500 }}>
                {activeQuery}
              </div>
            </div>

            {/* Saro AI Answer */}
            <div
              style={{
                borderRadius: '16px',
                padding: '20px',
                border: '1px solid #e0edff',
                backgroundColor: '#fafcff',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Sparkles size={13} />
                </div>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#141414' }}>Saro Copilot</span>
                <span style={{ fontSize: '11px', color: '#12a150', backgroundColor: '#e7f6ee', padding: '1px 6px', borderRadius: '4px' }}>
                  Live Ledger Verified
                </span>
              </div>

              <div style={{ fontSize: '14px', color: '#404040', marginBottom: '16px', lineHeight: 1.5 }}>
                Found 3 vendors that grew more than 50% quarter-over-quarter:
              </div>

              {/* Breakdown Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'Hexa', role: 'Project management & seat expansion', growth: '+142%', total: '$48,200 this quarter' },
                  { name: 'Sparkhost', role: 'Auto-scaling production GPU cluster', growth: '+88%', total: '$31,740 this quarter' },
                  { name: 'Stackpad', role: 'New enterprise security add-on', growth: '+61%', total: '$12,960 this quarter' },
                ].map((v, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      backgroundColor: '#ffffff',
                      borderRadius: '10px',
                      border: '1px solid #eef2f6',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#141414' }}>{v.name}</div>
                      <div style={{ fontSize: '12px', color: '#707070' }}>{v.role}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="mono-num" style={{ fontSize: '14px', fontWeight: 700, color: '#12a150' }}>{v.growth}</div>
                      <div style={{ fontSize: '11px', color: '#707070' }}>{v.total}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
