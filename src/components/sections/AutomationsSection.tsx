import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const RESET_CYCLES = ['Every week', 'Every month', 'Every quarter'];

export const AutomationsSection: React.FC = () => {
  const [limitVal, setLimitVal] = useState(78);
  const [notifyChannel, setNotifyChannel] = useState<'Chat' | 'Email' | 'None'>('Chat');
  const [resetIdx, setResetIdx] = useState(0);

  return (
    <section
      id="automations"
      style={{
        padding: '96px 0',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Dark Radial Glow Card */}
          <div
            style={{
              background: 'radial-gradient(circle at 26% 52%, #003b95 0%, #0d0f14 68%)',
              borderRadius: '28px',
              padding: '32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px',
              alignItems: 'center',
              color: '#ffffff',
              boxShadow: '0 20px 44px rgba(0, 0, 0, 0.14)',
            }}
          >
            {/* Left Inside: Giant 3D Glossy Blue Lightning Squircle */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px 0',
              }}
            >
              <div
                className="saro-squircle"
                style={{
                  width: '124px',
                  height: '124px',
                  borderRadius: '30px',
                  backgroundColor: '#0066ff',
                  boxShadow:
                    '0 24px 60px rgba(0, 102, 255, 0.55), inset 0 2px 3px rgba(255, 255, 255, 0.45), inset 0 -4px 8px rgba(0, 0, 0, 0.25)',
                }}
              >
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  style={{ position: 'relative', zIndex: 2 }}
                >
                  <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                </svg>
              </div>
            </div>

            {/* Right Inside: 5 Glass Rule Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* 1. RULE */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '12px 14px',
                }}
              >
                <div
                  style={{
                    fontSize: '9px',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                    color: 'rgba(255,255,255,0.45)',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  RULE
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: 500, color: '#ffffff' }}>
                  Payments over $10,000
                </div>
              </div>

              {/* 2. AUTO-APPROVE LIMIT */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '12px 14px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '9px',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.08em',
                      color: 'rgba(255,255,255,0.45)',
                      textTransform: 'uppercase',
                    }}
                  >
                    AUTO-APPROVE LIMIT
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      color: '#ffffff',
                      fontWeight: 600,
                    }}
                  >
                    {limitVal}/100
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={100}
                  value={limitVal}
                  onChange={(e) => setLimitVal(Number(e.target.value))}
                  aria-label="Auto-approve limit"
                  style={{
                    width: '100%',
                    accentColor: '#0066ff',
                    height: '5px',
                    cursor: 'pointer',
                  }}
                />
              </div>

              {/* 3. APPROVERS */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontSize: '9px',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                    color: 'rgba(255,255,255,0.45)',
                    textTransform: 'uppercase',
                  }}
                >
                  APPROVERS
                </span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {[
                    { initials: 'LM', bg: '#ccff00', color: '#141414' },
                    { initials: 'JK', bg: '#2ee6c5', color: '#141414' },
                    { initials: 'AR', bg: '#ff6b1a', color: '#ffffff' },
                    { initials: '+2', bg: '#2b2e36', color: '#ffffff' },
                  ].map((av, i) => (
                    <span
                      key={av.initials}
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '999px',
                        backgroundColor: av.bg,
                        color: av.color,
                        fontSize: '9.5px',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: i === 0 ? 0 : '-6px',
                        border: '2px solid #14171f',
                      }}
                    >
                      {av.initials}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4. NOTIFY */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontSize: '9px',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                    color: 'rgba(255,255,255,0.45)',
                    textTransform: 'uppercase',
                  }}
                >
                  NOTIFY
                </span>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {(['Chat', 'Email', 'None'] as const).map((ch) => {
                    const active = notifyChannel === ch;
                    return (
                      <button
                        key={ch}
                        type="button"
                        onClick={() => setNotifyChannel(ch)}
                        style={{
                          padding: '4px 9px',
                          borderRadius: '999px',
                          backgroundColor: active ? '#ffffff' : 'rgba(255,255,255,0.08)',
                          color: active ? '#141414' : 'rgba(255,255,255,0.75)',
                          fontSize: '10.5px',
                          fontWeight: 600,
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        {ch}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5. RESET LIMIT */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontSize: '9px',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                    color: 'rgba(255,255,255,0.45)',
                    textTransform: 'uppercase',
                  }}
                >
                  RESET LIMIT
                </span>
                <button
                  type="button"
                  onClick={() => setResetIdx((prev) => (prev + 1) % RESET_CYCLES.length)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {RESET_CYCLES[resetIdx]} ⌄
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Copy + Stats */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <Badge number="4" iconType="clover-mint" label="Automations" />
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                fontWeight: 500,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: '#141414',
                marginBottom: '18px',
                maxWidth: '420px',
              }}
            >
              Approvals that run themselves.
            </h2>

            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#525252',
                maxWidth: '420px',
                marginBottom: '32px',
              }}
            >
              Set rules once by amount, vendor or team. Small spend goes through instantly and big spend routes to the right person.
            </p>

            {/* 2 Stats with vertical divider */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                marginBottom: '32px',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '38px',
                    fontWeight: 500,
                    letterSpacing: '-0.04em',
                    color: '#141414',
                    lineHeight: 1.05,
                  }}
                >
                  4x
                </div>
                <div style={{ fontSize: '13px', color: '#7a7a7a', marginTop: '4px' }}>
                  faster approvals
                </div>
              </div>

              <div style={{ width: '1px', height: '48px', backgroundColor: '#e5e5e5' }} />

              <div>
                <div
                  style={{
                    fontSize: '38px',
                    fontWeight: 500,
                    letterSpacing: '-0.04em',
                    color: '#141414',
                    lineHeight: 1.05,
                  }}
                >
                  92%
                </div>
                <div style={{ fontSize: '13px', color: '#7a7a7a', marginTop: '4px' }}>
                  less manual review
                </div>
              </div>
            </div>

            <Button variant="secondary" href="/contact" showChevron>
              Explore automations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
