import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  CreditCard,
  Send,
  Building2,
  Sparkles,
  TrendingUp,
  Wallet,
  BookOpen,
  HelpCircle,
  PlayCircle,
  MessageSquare,
} from 'lucide-react';
import { SaroLogo } from '../brand/SaroLogo';

export const SiteHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'product' | 'resources' | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  const productItems = [
    {
      title: 'Payments',
      desc: '128 payment methods, same-day settlement',
      href: '/#suite',
      color: '#0066ff',
      icon: <Wallet size={16} color="#ffffff" />,
    },
    {
      title: 'Cards',
      desc: 'Virtual & physical cards with spend limits',
      href: '/#cards',
      color: '#ccff00',
      icon: <CreditCard size={16} color="#141414" />,
    },
    {
      title: 'Accounts',
      desc: 'Local bank details in 40 currencies',
      href: '/#tour',
      color: '#141414',
      icon: <Building2 size={16} color="#ffffff" />,
    },
    {
      title: 'Payouts',
      desc: 'Send money to 190 countries in seconds',
      href: '/#payouts',
      color: '#00d64f',
      icon: <Send size={16} color="#ffffff" />,
    },
    {
      title: 'Treasury',
      desc: 'Earn up to 4.2% yield on idle cash',
      href: '/#platform',
      color: '#ff6b1a',
      icon: <TrendingUp size={16} color="#ffffff" />,
    },
    {
      title: 'Saro AI',
      desc: 'Ask your money anything with sources',
      href: '/#ai',
      color: '#635bff',
      icon: <Sparkles size={16} color="#ffffff" />,
    },
  ];

  return (
    <header
      ref={navRef}
      style={{
        position: 'fixed',
        top: '16px',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 16px',
        pointerEvents: 'none',
      }}
    >
      <div style={{ position: 'relative', pointerEvents: 'auto' }}>
        {/* Floating Pill Navbar */}
        <nav
          aria-label="Primary Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 6px 6px 8px',
            backgroundColor: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid #ebebeb',
            borderRadius: '9999px',
            boxShadow: 'var(--shadow-nav)',
          }}
        >
          {/* Circle Logo Mark */}
          <div onClick={closeAll}>
            <SaroLogo size="md" showText={false} />
          </div>

          {/* Desktop Navigation Links */}
          <div
            className="saro-desktop-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              padding: '0 6px',
            }}
          >
            {/* Product Dropdown Trigger */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setOpenDropdown('product')}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'product' ? null : 'product')}
                aria-expanded={openDropdown === 'product'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '8px 13px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#141414',
                  backgroundColor: openDropdown === 'product' ? '#f5f5f5' : 'transparent',
                  transition: 'background-color 0.18s ease',
                }}
                className="saro-nav-item"
              >
                <span className="roll-text" data-text="Product">
                  <span>Product</span>
                </span>
                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  style={{
                    color: '#707070',
                    transform: openDropdown === 'product' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </button>
            </div>

            {[
              { label: 'Solutions', to: '/solutions' },
              { label: 'About', to: '/about' },
              { label: 'Pricing', to: '/pricing' },
              { label: 'Customers', to: '/customers' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeAll}
                onMouseEnter={() => setOpenDropdown(null)}
                style={{
                  padding: '8px 13px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#141414',
                  transition: 'background-color 0.18s ease',
                }}
                className="saro-nav-item"
              >
                <span className="roll-text" data-text={item.label}>
                  <span>{item.label}</span>
                </span>
              </Link>
            ))}

            {/* Resources Dropdown Trigger */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setOpenDropdown('resources')}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'resources' ? null : 'resources')}
                aria-expanded={openDropdown === 'resources'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '8px 13px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#141414',
                  backgroundColor: openDropdown === 'resources' ? '#f5f5f5' : 'transparent',
                  transition: 'background-color 0.18s ease',
                }}
                className="saro-nav-item"
              >
                <span className="roll-text" data-text="Resources">
                  <span>Resources</span>
                </span>
                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  style={{
                    color: '#707070',
                    transform: openDropdown === 'resources' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </button>
            </div>
          </div>

          {/* Vertical Divider */}
          <span
            className="saro-desktop-links"
            style={{
              width: '1px',
              height: '20px',
              backgroundColor: '#ebebeb',
              margin: '0 4px',
            }}
          />

          {/* Black Pill CTA: Get started > */}
          <Link
            to="/pricing"
            onClick={closeAll}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 16px',
              borderRadius: '9999px',
              backgroundColor: '#141414',
              color: '#ffffff',
              fontSize: '13.5px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            <span className="roll-text" data-text="Get started">
              <span>Get started</span>
            </span>
            <ChevronRight size={14} strokeWidth={2.2} />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="saro-mobile-toggle"
            style={{
              display: 'none',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#f5f5f5',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#141414',
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Product Mega Menu Popover */}
        {openDropdown === 'product' && (
          <div
            onMouseLeave={() => setOpenDropdown(null)}
            style={{
              position: 'absolute',
              top: 'calc(100% + 10px)',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'min(560px, 92vw)',
              backgroundColor: '#ffffff',
              border: '1px solid #ebebeb',
              borderRadius: '22px',
              boxShadow: 'var(--shadow-float)',
              padding: '14px',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '6px',
              animation: 'fadeInFast 0.18s ease-out',
            }}
          >
            {productItems.map((p) => (
              <Link
                key={p.title}
                to={p.href}
                onClick={closeAll}
                className="saro-dropdown-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '11px 12px',
                  borderRadius: '14px',
                  transition: 'background-color 0.15s ease',
                }}
              >
                <span
                  className="saro-squircle"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: p.color,
                  }}
                >
                  {p.icon}
                </span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#141414' }}>{p.title}</div>
                  <div style={{ fontSize: '12px', color: '#707070', lineHeight: 1.35 }}>{p.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Resources Popover */}
        {openDropdown === 'resources' && (
          <div
            onMouseLeave={() => setOpenDropdown(null)}
            style={{
              position: 'absolute',
              top: 'calc(100% + 10px)',
              right: '40px',
              width: '260px',
              backgroundColor: '#ffffff',
              border: '1px solid #ebebeb',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-float)',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              animation: 'fadeInFast 0.18s ease-out',
            }}
          >
            {[
              { label: 'Blog & Playbooks', desc: 'Guides from finance teams', to: '/blog', icon: <BookOpen size={15} /> },
              { label: 'Interactive Tour', desc: 'Every money move mapped', to: '/#tour', icon: <PlayCircle size={15} /> },
              { label: 'Questions & FAQ', desc: 'Setup, safety & pricing', to: '/#faq', icon: <HelpCircle size={15} /> },
              { label: 'Contact Sales', desc: 'Reply in under two hours', to: '/contact', icon: <MessageSquare size={15} /> },
            ].map((r) => (
              <Link
                key={r.label}
                to={r.to}
                onClick={closeAll}
                className="saro-dropdown-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '11px',
                  padding: '10px 12px',
                  borderRadius: '12px',
                }}
              >
                <span
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: '#f5f5f5',
                    color: '#141414',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {r.icon}
                </span>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#141414' }}>{r.label}</div>
                  <div style={{ fontSize: '11.5px', color: '#707070' }}>{r.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Mobile Menu Sheet */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 10px)',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'min(360px, 92vw)',
              backgroundColor: '#ffffff',
              border: '1px solid #ebebeb',
              borderRadius: '24px',
              boxShadow: 'var(--shadow-float)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              animation: 'fadeInFast 0.2s ease-out',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#adadad', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Products
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {productItems.map((p) => (
                <Link
                  key={p.title}
                  to={p.href}
                  onClick={closeAll}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '12px',
                    backgroundColor: '#f7f7f7',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: '#141414',
                  }}
                >
                  {p.title}
                </Link>
              ))}
            </div>
            <div style={{ height: '1px', backgroundColor: '#f0f0f0', margin: '4px 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { label: 'Solutions', to: '/solutions' },
                { label: 'About', to: '/about' },
                { label: 'Pricing', to: '/pricing' },
                { label: 'Customers', to: '/customers' },
                { label: 'Blog', to: '/blog' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={closeAll}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '10px',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#141414',
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .saro-nav-item:hover {
          background-color: #f5f5f5 !important;
        }
        .saro-dropdown-card:hover {
          background-color: #f7f7f7;
        }
        @media (max-width: 860px) {
          .saro-desktop-links {
            display: none !important;
          }
          .saro-mobile-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
};
