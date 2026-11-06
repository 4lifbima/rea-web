import React, { useState } from 'react';
import { Badge } from '../ui/Badge';

const SIDEBAR_ITEMS = [
  { label: 'Overview', icon: '○' },
  { label: 'Payments', icon: '⇄' },
  { label: 'Spaces', icon: '⊞' },
  { label: 'Accounts', icon: '🏦' },
  { label: 'Cards', icon: '▭' },
  { label: 'Members', icon: '☺' },
  { label: 'Approvals', icon: '✓', badge: 'New' },
];

const SPACES = [
  {
    name: 'Operations',
    stat: '$1.2M',
    image: '/assets/images/kuXh3488tQVxrtoQDCfvOpDwF8.jpg',
  },
  {
    name: 'Treasury',
    stat: '$4.8M',
    image: '/assets/images/OomzvRN6BSbeBP3tR8upG6krwxA.jpg',
  },
  {
    name: 'Cards',
    stat: '312 active',
    image: '/assets/images/8LFomEpfsMeDLIm17nCGhzBYZQ.jpg',
  },
];

export const WorkspaceSection: React.FC = () => {
  const [activeNav, setActiveNav] = useState('Spaces');

  return (
    <section
      id="workspace"
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
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <Badge number="7" iconType="burst" label="Workspace" />
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                fontWeight: 500,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: '#141414',
                marginBottom: '18px',
                maxWidth: '460px',
              }}
            >
              Bring every account, card and payout into one calm workspace.
            </h2>

            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#525252',
                maxWidth: '420px',
              }}
            >
              Spaces keep each team’s money, cards and approvals together, so finance stays organized without a single spreadsheet.
            </p>
          </div>

          {/* Right Column: Dark App Window */}
          <div
            className="workspace-window"
            style={{
              backgroundColor: '#141414',
              borderRadius: '28px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.18)',
              display: 'grid',
              gridTemplateColumns: '165px 1fr',
              overflow: 'hidden',
              color: '#ffffff',
              minHeight: '420px',
            }}
          >
            {/* Left Sidebar */}
            <div
              className="workspace-sidebar"
              style={{
                padding: '20px 12px',
                borderRight: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '24px',
              }}
            >
              <div>
                {/* Window Brand */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '4px 8px 16px',
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '999px',
                      backgroundColor: '#ffffff',
                      color: '#141414',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 800,
                    }}
                  >
                    ✳
                  </span>
                  <span style={{ fontSize: '13.5px', fontWeight: 600, letterSpacing: '-0.02em' }}>
                    Saro
                  </span>
                </div>

                {/* Nav List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {SIDEBAR_ITEMS.map((item) => {
                    const active = activeNav === item.label;
                    return (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setActiveNav(item.label)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '7px 10px',
                          borderRadius: '9px',
                          border: 'none',
                          backgroundColor: active ? 'rgba(255, 255, 255, 0.09)' : 'transparent',
                          color: active ? '#ffffff' : 'rgba(255, 255, 255, 0.55)',
                          fontSize: '12px',
                          fontWeight: active ? 500 : 400,
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: active ? '#0066ff' : 'inherit', fontSize: '11px' }}>
                            {item.icon}
                          </span>
                          {item.label}
                        </span>
                        {item.badge && (
                          <span
                            style={{
                              padding: '1px 6px',
                              borderRadius: '999px',
                              backgroundColor: '#ccff00',
                              color: '#141414',
                              fontSize: '9.5px',
                              fontWeight: 700,
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom User Profile */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  padding: '8px 8px 0',
                  borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                }}
              >
                <span
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '999px',
                    backgroundColor: '#ccff00',
                    color: '#141414',
                    fontSize: '10px',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  LP
                </span>
                <div style={{ lineHeight: 1.2 }}>
                  <div style={{ fontSize: '11.5px', fontWeight: 600, color: '#ffffff' }}>
                    Lena Park
                  </div>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)' }}>Admin</div>
                </div>
              </div>
            </div>

            {/* Right Main Content */}
            <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'hidden' }}>
              {/* Balances Row */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                  }}
                >
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#ffffff' }}>
                    Balances
                  </span>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)' }}>
                    Across 6 currencies
                  </span>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(110px, 1fr))',
                    gap: '10px',
                  }}
                >
                  {[
                    { symbol: '$', code: 'USD', amount: '$1.24M', bg: '#0066ff' },
                    { symbol: '€', code: 'EUR', amount: '€382K', bg: '#00d64f' },
                    { symbol: '£', code: 'GBP', amount: '£96.8K', bg: '#635bff' },
                  ].map((b) => (
                    <div
                      key={b.code}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.07)',
                        borderRadius: '14px',
                        padding: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '12px',
                      }}
                    >
                      <span
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '7px',
                          backgroundColor: b.bg,
                          color: '#ffffff',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '11px',
                          fontWeight: 700,
                        }}
                      >
                        {b.symbol}
                      </span>
                      <div>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)' }}>
                          {b.code}
                        </div>
                        <div
                          style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            color: '#ffffff',
                            letterSpacing: '-0.02em',
                            fontVariantNumeric: 'tabular-nums',
                          }}
                        >
                          {b.amount}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Spaces Row */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                  }}
                >
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#ffffff' }}>
                    Team spaces
                  </span>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)' }}>
                    Grouped by team
                  </span>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(110px, 1fr))',
                    gap: '10px',
                  }}
                >
                  {SPACES.map((space) => (
                    <div
                      key={space.name}
                      style={{
                        position: 'relative',
                        height: '175px',
                        borderRadius: '14px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <img
                        src={space.image}
                        alt={space.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.82) 100%)',
                          display: 'flex',
                          alignItems: 'flex-end',
                          justifyContent: 'space-between',
                          padding: '10px 12px',
                        }}
                      >
                        <span style={{ fontSize: '11.5px', fontWeight: 600, color: '#ffffff' }}>
                          {space.name}
                        </span>
                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                          {space.stat}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .workspace-window {
            grid-template-columns: 1fr !important;
          }
          .workspace-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
