import React from 'react';
import { Badge } from '../ui/Badge';
import { Plus, Download } from 'lucide-react';

export const WorkspaceSection: React.FC = () => {
  return (
    <section
      id="workspace"
      data-framer-name="Workspace Scroll"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <Badge number="7" label="Workspace" />
          </div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Bring every account, card and payout into one calm workspace.
          </h2>
          <p className="section-description" style={{ margin: '0 auto' }}>
            Group your balances, configure team spaces, and run entire corporate treasuries without ever leaving one unified screen.
          </p>
        </div>

        {/* High-Fidelity Workspace Mockup */}
        <div
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            borderRadius: '24px',
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-card)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '240px 1fr',
          }}
          className="workspace-container"
        >
          {/* Workspace Sidebar */}
          <div
            style={{
              backgroundColor: '#f9f9f9',
              borderRight: '1px solid #ebebeb',
              padding: '24px 16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            className="workspace-sidebar"
          >
            <div>
              {/* User profile */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #ebebeb' }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: '#141414',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 700,
                  }}
                >
                  LP
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#141414' }}>Lena Park</div>
                  <div style={{ fontSize: '11px', color: '#707070' }}>Workspace Admin</div>
                </div>
              </div>

              {/* Nav Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {[
                  { label: 'Overview', active: false },
                  { label: 'Payments', active: false },
                  { label: 'Spaces', active: true },
                  { label: 'Accounts', active: false },
                  { label: 'Cards', active: false },
                  { label: 'Team Members', active: false },
                  { label: 'Approvals', active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: item.active ? 600 : 500,
                      color: item.active ? 'var(--color-primary)' : '#404040',
                      backgroundColor: item.active ? 'var(--color-primary-subtle)' : 'transparent',
                      cursor: 'pointer',
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '8px',
                borderRadius: '8px',
                border: '1px dashed #d0d0d0',
                fontSize: '12px',
                fontWeight: 600,
                color: '#555555',
                cursor: 'pointer',
              }}
            >
              <Plus size={14} />
              <span>New space</span>
            </button>
          </div>

          {/* Workspace Main Area */}
          <div style={{ padding: '32px' }}>
            {/* Top Workspace Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#141414' }}>Spaces Overview</h3>
                <div style={{ fontSize: '13px', color: '#707070' }}>Multi-entity treasury rollup</div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    fontSize: '12px',
                    fontWeight: 500,
                    backgroundColor: '#ffffff',
                    cursor: 'pointer',
                  }}
                >
                  <Download size={13} />
                  <span>Export</span>
                </button>
                <button
                  type="button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-primary)',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  <Plus size={13} />
                  <span>New space</span>
                </button>
              </div>
            </div>

            {/* Currency Balances Pill Grid */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#707070', marginBottom: '10px', textTransform: 'uppercase' }}>
                Balances Across 6 Currencies
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(130px, 100%), 1fr))', gap: '10px' }}>
                {[
                  { curr: 'USD', amount: '$1.24M' },
                  { curr: 'EUR', amount: 'â‚¬382K' },
                  { curr: 'GBP', amount: 'Â£96.8K' },
                  { curr: 'JPY', amount: 'Â¥14.2M' },
                ].map((b) => (
                  <div
                    key={b.curr}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      backgroundColor: '#f7f7f7',
                      border: '1px solid #ebebeb',
                    }}
                  >
                    <div style={{ fontSize: '11px', color: '#707070', fontWeight: 600 }}>{b.curr}</div>
                    <div className="mono-num" style={{ fontSize: '16px', fontWeight: 700, color: '#141414' }}>{b.amount}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Spaces Breakdown */}
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#707070', marginBottom: '10px', textTransform: 'uppercase' }}>
                Grouped by Team
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '16px' }}>
                <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#f9f9f9', border: '1px solid #ebebeb' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#141414', marginBottom: '4px' }}>Operations</div>
                  <div className="mono-num" style={{ fontSize: '20px', fontWeight: 700, color: '#141414' }}>$1.2M</div>
                  <div style={{ fontSize: '12px', color: '#707070', marginTop: '4px' }}>3 subsidiaries connected</div>
                </div>

                <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#f9f9f9', border: '1px solid #ebebeb' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#141414', marginBottom: '4px' }}>Treasury</div>
                  <div className="mono-num" style={{ fontSize: '20px', fontWeight: 700, color: '#12a150' }}>$4.8M</div>
                  <div style={{ fontSize: '12px', color: '#707070', marginTop: '4px' }}>Yielding 4.2% APY</div>
                </div>

                <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#f9f9f9', border: '1px solid #ebebeb' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#141414', marginBottom: '4px' }}>Cards</div>
                  <div className="mono-num" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-primary)' }}>312 active</div>
                  <div style={{ fontSize: '12px', color: '#707070', marginTop: '4px' }}>Realtime limit rules</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .workspace-container {
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
