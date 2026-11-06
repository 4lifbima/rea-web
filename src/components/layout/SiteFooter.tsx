import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SaroLogo } from '../brand/SaroLogo';
import { navigationData } from '../../data/navigation';

export const SiteFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid work email.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <footer
      style={{
        backgroundColor: '#141414',
        color: '#ffffff',
        paddingTop: '80px',
        paddingBottom: '40px',
        marginTop: '100px',
        borderTop: '1px solid #262626',
      }}
    >
      <div className="container">
        {/* Top Grid: Brand & Newsletter + Link Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Brand & Newsletter Column */}
          <div style={{ gridColumn: 'span 2', minWidth: '280px' }} className="footer-brand-col">
            <div style={{ marginBottom: '20px' }}>
              <SaroLogo variant="light" size="md" />
            </div>
            <p
              style={{
                fontSize: '14px',
                color: '#adadad',
                lineHeight: 1.6,
                maxWidth: '340px',
                marginBottom: '24px',
              }}
            >
              The finance dashboard for modern teams. Payments, cards, and payouts in one live panel, synced every second.
            </p>

            {/* Newsletter Form */}
            <div style={{ maxWidth: '360px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                Subscribe to finance playbooks
              </div>
              {subscribed ? (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(18, 161, 80, 0.15)',
                    border: '1px solid rgba(18, 161, 80, 0.3)',
                    color: '#00d64f',
                    fontSize: '13px',
                  }}
                >
                  <CheckCircle2 size={16} />
                  <span>You are subscribed. Check your inbox!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ position: 'relative' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                      }}
                      placeholder="you@company.com"
                      style={{
                        flex: 1,
                        padding: '10px 14px',
                        borderRadius: '8px',
                        backgroundColor: '#1f1f1f',
                        border: error ? '1px solid #e5484d' : '1px solid #333333',
                        color: '#ffffff',
                        fontSize: '13px',
                      }}
                      aria-label="Work email for newsletter"
                    />
                    <button
                      type="submit"
                      style={{
                        padding: '10px 16px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--color-primary)',
                        color: '#ffffff',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                  {error && (
                    <div style={{ color: '#e5484d', fontSize: '12px', marginTop: '6px' }}>{error}</div>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Navigation Columns */}
          {navigationData.footerNav.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '18px',
                }}
              >
                {col.title}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      style={{
                        fontSize: '14px',
                        color: '#adadad',
                        transition: 'color var(--transition-fast)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                      className="footer-link"
                    >
                      <span>{link.label}</span>
                      {link.badge && (
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            padding: '1px 6px',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(0, 102, 255, 0.2)',
                            color: '#0066ff',
                          }}
                        >
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid #262626',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '13px',
            color: '#707070',
          }}
        >
          <div>
            Â© 2026 Saro Finance UI. Re-engineered modern frontend demo. Not affiliated with Framer.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#adadad', transition: 'color var(--transition-fast)' }}
              className="footer-link"
            >
              X (Twitter)
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#adadad', transition: 'color var(--transition-fast)' }}
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#adadad', transition: 'color var(--transition-fast)' }}
              className="footer-link"
            >
              Instagram
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#adadad', transition: 'color var(--transition-fast)' }}
              className="footer-link"
            >
              Dribbble
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: #ffffff !important;
        }
        @media (max-width: 768px) {
          .footer-brand-col {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </footer>
  );
};

