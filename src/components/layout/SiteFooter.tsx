import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SaroLogo, SaroMark } from '../brand/SaroLogo';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const ORBIT_ICONS = [
  {
    top: '2%',
    left: '48%',
    bg: '#0066ff',
    color: '#ffffff',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
        <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    top: '24%',
    left: '84%',
    bg: '#00d64f',
    color: '#ffffff',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    top: '68%',
    left: '82%',
    bg: '#ccff00',
    color: '#141414',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    top: '86%',
    left: '48%',
    bg: '#635bff',
    color: '#ffffff',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
        <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    top: '46%',
    left: '8%',
    bg: '#ff6b1a',
    color: '#ffffff',
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M16 12.5h.01" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const SiteFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer
      style={{
        backgroundColor: '#ffffff',
        padding: '0 0 28px',
      }}
    >
      <div className="container">
        {/* Unified #f7f7f7 Outer Rounded Container */}
        <div
          style={{
            backgroundColor: '#f7f7f7',
            borderRadius: '32px',
            padding: '20px',
          }}
        >
          {/* Top White CTA Card (Section 12: Get started) */}
          <div
            id="cta"
            className="footer-cta-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '56px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            {/* Left CTA Copy */}
            <div>
              <div style={{ marginBottom: '20px' }}>
                <Badge number="12" iconType="burst" label="Get started" />
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.05,
                  color: '#141414',
                  marginBottom: '16px',
                  maxWidth: '430px',
                }}
              >
                Run your money from one calm panel.
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: '#525252',
                  maxWidth: '410px',
                  marginBottom: '28px',
                }}
              >
                Join 2,400+ teams using Saro to move, track and grow money. Free to start, no card required.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <Button variant="primary" href="/pricing" showChevron={false}>
                  Start for free
                </Button>
                <Button variant="secondary" href="/contact" showChevron>
                  Book a demo
                </Button>
              </div>
            </div>

            {/* Right Concentric Orbit Graphic */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '290px',
                  height: '290px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Ring 1 (Outer) */}
                <div
                  style={{
                    position: 'absolute',
                    width: '280px',
                    height: '280px',
                    borderRadius: '999px',
                    border: '1px solid #ebebeb',
                  }}
                />
                {/* Ring 2 (Middle) */}
                <div
                  style={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    borderRadius: '999px',
                    border: '1px solid #ebebeb',
                  }}
                />
                {/* Ring 3 (Inner) */}
                <div
                  style={{
                    position: 'absolute',
                    width: '120px',
                    height: '120px',
                    borderRadius: '999px',
                    border: '1px solid #ebebeb',
                  }}
                />

                {/* Center Black Saro Circle */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 3,
                    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.16)',
                    borderRadius: '999px',
                  }}
                >
                  <SaroMark size={64} bg="#141414" fg="#ffffff" />
                </div>

                {/* 5 Orbiting Squircle Icons */}
                {ORBIT_ICONS.map((item, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3.2 + idx * 0.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      position: 'absolute',
                      top: item.top,
                      left: item.left,
                      transform: 'translate(-50%, -50%)',
                      width: '38px',
                      height: '38px',
                      borderRadius: '11px',
                      backgroundColor: item.bg,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow:
                        '0 8px 18px rgba(0,0,0,0.12), inset 0 1.5px 2px rgba(255,255,255,0.4)',
                      zIndex: 2,
                    }}
                  >
                    {item.svg}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer Columns */}
          <div style={{ padding: '52px 32px 20px' }} className="footer-inner-pad">
            <div
              className="footer-cols-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.35fr 0.85fr 0.85fr 0.8fr 1.45fr',
                gap: '32px',
                marginBottom: '48px',
              }}
            >
              {/* Col 1: Brand */}
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <SaroLogo variant="dark" size="sm" />
                </div>
                <p
                  style={{
                    fontSize: '13.5px',
                    lineHeight: 1.55,
                    color: '#6b6b6b',
                    maxWidth: '240px',
                  }}
                >
                  The finance panel for modern teams. Payments, cards and payouts in one calm place.
                </p>
              </div>

              {/* Col 2: Product */}
              <div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#141414',
                    marginBottom: '14px',
                  }}
                >
                  Product
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { label: 'Features', to: '/#features' },
                    { label: 'Saro AI', to: '/#saro-ai' },
                    { label: 'Automations', to: '/#automations' },
                    { label: 'Global payouts', to: '/#global-payouts' },
                    { label: 'Product tour', to: '/#product-tour' },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        style={{
                          fontSize: '13.5px',
                          color: '#6b6b6b',
                          textDecoration: 'none',
                        }}
                        className="saro-footer-link"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Company */}
              <div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#141414',
                    marginBottom: '14px',
                  }}
                >
                  Company
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { label: 'About', to: '/about' },
                    { label: 'Customers', to: '/customers' },
                    { label: 'FAQ', to: '/#faq' },
                    { label: 'Pricing', to: '/pricing' },
                    { label: 'Contact', to: '/contact' },
                    { label: '404', to: '/404' },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        style={{
                          fontSize: '13.5px',
                          color: '#6b6b6b',
                          textDecoration: 'none',
                        }}
                        className="saro-footer-link"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 4: Socials */}
              <div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#141414',
                    marginBottom: '14px',
                  }}
                >
                  Socials
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { label: 'X', href: 'https://x.com' },
                    { label: 'LinkedIn', href: 'https://linkedin.com' },
                    { label: 'Instagram', href: 'https://instagram.com' },
                    { label: 'Dribbble', href: 'https://dribbble.com' },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '13.5px',
                          color: '#6b6b6b',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                        className="saro-footer-link"
                      >
                        {item.label} <span style={{ opacity: 0.6 }}>›</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 5: Newsletter */}
              <div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#141414',
                    marginBottom: '10px',
                  }}
                >
                  Newsletter
                </div>
                <p
                  style={{
                    fontSize: '13.5px',
                    lineHeight: 1.55,
                    color: '#6b6b6b',
                    marginBottom: '16px',
                  }}
                >
                  Product updates, finance tips and early access. One email a month.
                </p>

                {subscribed ? (
                  <div
                    style={{
                      padding: '10px 16px',
                      borderRadius: '999px',
                      backgroundColor: '#dffae8',
                      color: '#0a8537',
                      fontSize: '12.5px',
                      fontWeight: 600,
                    }}
                  >
                    ✓ Subscribed! Check your inbox.
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#ffffff',
                      borderRadius: '999px',
                      padding: '4px 4px 4px 14px',
                      border: '1px solid rgba(0,0,0,0.05)',
                    }}
                  >
                    <span style={{ color: '#8a8a8a', marginRight: '8px', display: 'inline-flex' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="4" width="20" height="16" rx="3" />
                        <path d="M22 7l-10 7L2 7" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-label="Newsletter email"
                      style={{
                        flex: 1,
                        minWidth: '0',
                        border: 'none',
                        backgroundColor: 'transparent',
                        fontSize: '12.5px',
                        color: '#141414',
                        outline: 'none',
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        padding: '8px 14px',
                        borderRadius: '999px',
                        backgroundColor: '#141414',
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: 500,
                        border: 'none',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                    >
                      Subscribe ›
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Bottom Legal & Credits Bar */}
            <div
              style={{
                paddingTop: '24px',
                borderTop: '1px solid #e6e6e6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                fontSize: '12.5px',
                color: '#7a7a7a',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <span>© 2026 Saro. All rights reserved.</span>
                <Link to="/about" style={{ color: '#7a7a7a', textDecoration: 'none' }} className="saro-footer-link">
                  Privacy
                </Link>
                <Link to="/about" style={{ color: '#7a7a7a', textDecoration: 'none' }} className="saro-footer-link">
                  Terms
                </Link>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                <span>
                  Built by <strong style={{ color: '#141414', fontWeight: 600 }}>Viyako</strong>
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#7a7a7a' }}>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" style={{ color: 'inherit' }}>
                    𝕏
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'inherit', fontWeight: 700 }}>
                    in
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'inherit' }}>
                    ◎
                  </a>
                  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" style={{ color: 'inherit' }}>
                    ◍
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .saro-footer-link:hover {
          color: #141414 !important;
        }
        @media (max-width: 960px) {
          .footer-cols-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .footer-cta-card {
            padding: 36px 24px !important;
          }
          .footer-inner-pad {
            padding: 36px 16px 16px !important;
          }
        }
        @media (max-width: 560px) {
          .footer-cols-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
