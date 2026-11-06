import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Zap, ArrowRight } from 'lucide-react';

export const AutomationsSection: React.FC = () => {
  const [notifyMethod, setNotifyMethod] = useState<'Chat' | 'Email' | 'None'>('Chat');
  const [threshold, setThreshold] = useState(10000);

  return (
    <section
      id="automations"
      data-framer-name="Split Automations"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        backgroundColor: '#fafafa',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
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
          {/* Left Column: Interactive Automation Rule Builder */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid var(--color-border)',
              padding: '32px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    padding: '6px',
                    borderRadius: '8px',
                    backgroundColor: '#e7f6ee',
                    color: '#12a150',
                    display: 'flex',
                  }}
                >
                  <Zap size={16} />
                </span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#141414' }}>Active Workflow Rule</span>
              </div>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#12a150',
                  backgroundColor: '#e7f6ee',
                  padding: '2px 8px',
                  borderRadius: '4px',
                }}
              >
                Auto-enforced
              </span>
            </div>

            {/* Threshold Slider / Input */}
            <div
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: '14px',
                padding: '16px',
                marginBottom: '16px',
                border: '1px solid #ebebeb',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#707070', marginBottom: '8px' }}>
                <span>Trigger: Payments over amount</span>
                <span className="mono-num" style={{ fontWeight: 700, color: '#141414', fontSize: '15px' }}>
                  ${threshold.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={threshold}
                onChange={(e) => setThreshold(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-primary)', cursor: 'pointer' }}
              />
            </div>

            {/* Approvers List */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                backgroundColor: '#f7f7f7',
                borderRadius: '12px',
                marginBottom: '16px',
                border: '1px solid #ebebeb',
              }}
            >
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#141414' }}>Designated Approvers</div>
                <div style={{ fontSize: '11px', color: '#707070' }}>Requires 2 of 4 authorizations</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {['LM', 'JK', 'AR', '+2'].map((initials, idx) => (
                  <span
                    key={idx}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      backgroundColor: idx === 3 ? '#141414' : '#0066ff',
                      color: '#ffffff',
                      fontSize: '10px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: idx > 0 ? '-6px' : '0',
                      border: '2px solid #ffffff',
                    }}
                  >
                    {initials}
                  </span>
                ))}
              </div>
            </div>

            {/* Notification Channel Picker */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                backgroundColor: '#f7f7f7',
                borderRadius: '12px',
                border: '1px solid #ebebeb',
              }}
            >
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#141414' }}>Notification Channel</div>
              <div style={{ display: 'flex', gap: '6px' }}>
                {(['Chat', 'Email', 'None'] as const).map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setNotifyMethod(method)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 500,
                      backgroundColor: notifyMethod === method ? '#141414' : '#ffffff',
                      color: notifyMethod === method ? '#ffffff' : '#707070',
                      border: '1px solid #dcdcdc',
                      cursor: 'pointer',
                    }}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Text & Metrics */}
          <div>
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <Badge number="4" label="Automations" />
            </div>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              Approvals that run themselves.
            </h2>
            <p className="section-description" style={{ marginBottom: '32px' }}>
              Set rules once and let Saro route every payment. Spend limits, approvers and alerts update in real time, with no code and no follow-up emails.
            </p>

            {/* Quantifiable Proof Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '24px',
                marginBottom: '36px',
              }}
            >
              <div style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: '16px' }}>
                <div className="mono-num" style={{ fontSize: '36px', fontWeight: 700, color: '#141414', lineHeight: 1 }}>
                  4x
                </div>
                <div style={{ fontSize: '14px', color: '#707070', marginTop: '6px' }}>
                  faster approval cycles
                </div>
              </div>

              <div style={{ borderLeft: '3px solid #12a150', paddingLeft: '16px' }}>
                <div className="mono-num" style={{ fontSize: '36px', fontWeight: 700, color: '#141414', lineHeight: 1 }}>
                  92%
                </div>
                <div style={{ fontSize: '14px', color: '#707070', marginTop: '6px' }}>
                  less manual finance review
                </div>
              </div>
            </div>

            <Button to="/solutions#automations" variant="secondary" size="md" iconRight={<ArrowRight size={16} />}>
              Explore automations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
