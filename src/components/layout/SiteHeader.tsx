import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
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
} from 'lucide-react';
import { SaroLogo } from '../brand/SaroLogo';
import { Button } from '../ui/Button';

interface SiteHeaderProps {
  onOpenMobileMenu?: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const productsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setResourcesDropdownOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsDropdownOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 900,
          width: '100%',
          backgroundColor: scrolled ? 'rgba(247, 247, 247, 0.88)' : 'rgba(247, 247, 247, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          transition: 'all var(--transition-normal)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '68px',
          }}
        >
          {/* Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <SaroLogo size="md" />

            {/* Desktop Navigation Links */}
            <nav
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '4px',
              }}
              className="desktop-nav"
            >
              {/* Products Dropdown */}
              <div
                ref={productsRef}
                style={{ position: 'relative' }}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 12px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: productsDropdownOpen ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'all var(--transition-fast)',
                  }}
                  aria-expanded={productsDropdownOpen}
                >
                  <span>Products</span>
                  <ChevronDown
                    size={14}
                    style={{
                      transform: productsDropdownOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform var(--transition-fast)',
                    }}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                {productsDropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '-20px',
                      paddingTop: '8px',
                      zIndex: 1000,
                    }}
                  >
                    <div
                      style={{
                        width: '540px',
                        backgroundColor: '#ffffff',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)',
                        boxShadow: 'var(--shadow-dropdown)',
                        padding: '16px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '8px',
                        animation: 'fadeInFast 0.2s ease-out',
                      }}
                    >
                      <Link
                        to="/#suite"
                        onClick={() => setProductsDropdownOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-md)',
                          transition: 'background-color var(--transition-fast)',
                        }}
                        className="dropdown-item"
                      >
                        <div
                          style={{
                            padding: '8px',
                            borderRadius: '8px',
                            backgroundColor: 'var(--color-primary-subtle)',
                            color: 'var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Wallet size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: '#141414' }}>Payments</div>
                          <div style={{ fontSize: '12px', color: '#707070', lineHeight: 1.4 }}>
                            128 payment methods with same-day settlement
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/#cards"
                        onClick={() => setProductsDropdownOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-md)',
                          transition: 'background-color var(--transition-fast)',
                        }}
                        className="dropdown-item"
                      >
                        <div
                          style={{
                            padding: '8px',
                            borderRadius: '8px',
                            backgroundColor: '#e7f6ee',
                            color: '#12a150',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <CreditCard size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: '#141414' }}>Cards</div>
                          <div style={{ fontSize: '12px', color: '#707070', lineHeight: 1.4 }}>
                            Virtual and metal cards with built-in limits
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/#tour"
                        onClick={() => setProductsDropdownOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-md)',
                          transition: 'background-color var(--transition-fast)',
                        }}
                        className="dropdown-item"
                      >
                        <div
                          style={{
                            padding: '8px',
                            borderRadius: '8px',
                            backgroundColor: '#fff2ea',
                            color: '#ff6b1a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Building2 size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: '#141414' }}>Accounts</div>
                          <div style={{ fontSize: '12px', color: '#707070', lineHeight: 1.4 }}>
                            Local banking details in 40 global currencies
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/#payouts"
                        onClick={() => setProductsDropdownOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-md)',
                          transition: 'background-color var(--transition-fast)',
                        }}
                        className="dropdown-item"
                      >
                        <div
                          style={{
                            padding: '8px',
                            borderRadius: '8px',
                            backgroundColor: '#ebf3ff',
                            color: '#0052d9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Send size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: '#141414' }}>Payouts</div>
                          <div style={{ fontSize: '12px', color: '#707070', lineHeight: 1.4 }}>
                            Send funds to 190 countries in seconds
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/#platform"
                        onClick={() => setProductsDropdownOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-md)',
                          transition: 'background-color var(--transition-fast)',
                        }}
                        className="dropdown-item"
                      >
                        <div
                          style={{
                            padding: '8px',
                            borderRadius: '8px',
                            backgroundColor: '#f3e8ff',
                            color: '#7e22ce',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <TrendingUp size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: '#141414' }}>Treasury</div>
                          <div style={{ fontSize: '12px', color: '#707070', lineHeight: 1.4 }}>
                            Earn up to 4.2% yield on idle cash deposits
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/#ai"
                        onClick={() => setProductsDropdownOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-md)',
                          transition: 'background-color var(--transition-fast)',
                        }}
                        className="dropdown-item"
                      >
                        <div
                          style={{
                            padding: '8px',
                            borderRadius: '8px',
                            backgroundColor: '#e0f2fe',
                            color: '#0369a1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Sparkles size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: '#141414' }}>Saro AI</div>
                          <div style={{ fontSize: '12px', color: '#707070', lineHeight: 1.4 }}>
                            Ask questions & get instant sourced financial answers
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/solutions"
                style={{
                  padding: '8px 12px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: location.pathname === '/solutions' ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                Solutions
              </Link>

              <Link
                to="/about"
                style={{
                  padding: '8px 12px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: location.pathname === '/about' ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                About
              </Link>

              <Link
                to="/pricing"
                style={{
                  padding: '8px 12px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: location.pathname === '/pricing' ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                Pricing
              </Link>

              <Link
                to="/customers"
                style={{
                  padding: '8px 12px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: location.pathname === '/customers' ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                Customers
              </Link>

              {/* Resources Dropdown */}
              <div
                ref={resourcesRef}
                style={{ position: 'relative' }}
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                onMouseLeave={() => setResourcesDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 12px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: resourcesDropdownOpen ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    borderRadius: 'var(--radius-sm)',
                  }}
                  aria-expanded={resourcesDropdownOpen}
                >
                  <span>Resources</span>
                  <ChevronDown
                    size={14}
                    style={{
                      transform: resourcesDropdownOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform var(--transition-fast)',
                    }}
                  />
                </button>

                {resourcesDropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '0',
                      paddingTop: '8px',
                      zIndex: 1000,
                    }}
                  >
                    <div
                      style={{
                        width: '260px',
                        backgroundColor: '#ffffff',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        boxShadow: 'var(--shadow-dropdown)',
                        padding: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px',
                        animation: 'fadeInFast 0.2s ease-out',
                      }}
                    >
                      <Link
                        to="/blog"
                        onClick={() => setResourcesDropdownOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '14px',
                          color: '#141414',
                          fontWeight: 500,
                        }}
                        className="dropdown-item"
                      >
                        <BookOpen size={16} color="#707070" />
                        <span>Blog & Playbooks</span>
                      </Link>
                      <Link
                        to="/#tour"
                        onClick={() => setResourcesDropdownOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '14px',
                          color: '#141414',
                          fontWeight: 500,
                        }}
                        className="dropdown-item"
                      >
                        <PlayCircle size={16} color="#707070" />
                        <span>Product Tour</span>
                      </Link>
                      <Link
                        to="/#faq"
                        onClick={() => setResourcesDropdownOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '14px',
                          color: '#141414',
                          fontWeight: 500,
                        }}
                        className="dropdown-item"
                      >
                        <HelpCircle size={16} color="#707070" />
                        <span>FAQ</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right Action Cluster */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              to="/contact"
              style={{
                display: 'none',
                padding: '8px 12px',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
              }}
              className="desktop-contact-btn"
            >
              Contact sales
            </Link>

            <Button to="/pricing" variant="primary" size="md">
              Get started
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                color: 'var(--color-text)',
                cursor: 'pointer',
              }}
              className="mobile-hamburger-btn"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#ffffff',
            zIndex: 899,
            padding: '24px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
          className="mobile-nav-panel animate-fade-in"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#adadad', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Products
            </div>
            <Link
              to="/#suite"
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', fontSize: '17px', fontWeight: 500, color: '#141414', borderBottom: '1px solid #f0f0f0' }}
            >
              Payments & Checkout
            </Link>
            <Link
              to="/#cards"
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', fontSize: '17px', fontWeight: 500, color: '#141414', borderBottom: '1px solid #f0f0f0' }}
            >
              Smart Cards
            </Link>
            <Link
              to="/#tour"
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', fontSize: '17px', fontWeight: 500, color: '#141414', borderBottom: '1px solid #f0f0f0' }}
            >
              Multi-Currency Accounts
            </Link>
            <Link
              to="/#payouts"
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', fontSize: '17px', fontWeight: 500, color: '#141414', borderBottom: '1px solid #f0f0f0' }}
            >
              Global Payouts
            </Link>
            <Link
              to="/#ai"
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', fontSize: '17px', fontWeight: 500, color: '#141414', borderBottom: '1px solid #f0f0f0' }}
            >
              Saro AI Copilot
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#adadad', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Company & Resources
            </div>
            <Link
              to="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', fontSize: '17px', fontWeight: 500, color: '#141414', borderBottom: '1px solid #f0f0f0' }}
            >
              Solutions
            </Link>
            <Link
              to="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', fontSize: '17px', fontWeight: 500, color: '#141414', borderBottom: '1px solid #f0f0f0' }}
            >
              Pricing
            </Link>
            <Link
              to="/customers"
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', fontSize: '17px', fontWeight: 500, color: '#141414', borderBottom: '1px solid #f0f0f0' }}
            >
              Customers
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', fontSize: '17px', fontWeight: 500, color: '#141414', borderBottom: '1px solid #f0f0f0' }}
            >
              About
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', fontSize: '17px', fontWeight: 500, color: '#141414', borderBottom: '1px solid #f0f0f0' }}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '10px 0', fontSize: '17px', fontWeight: 500, color: '#141414', borderBottom: '1px solid #f0f0f0' }}
            >
              Contact Sales
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
            <Button to="/pricing" variant="primary" size="lg" style={{ width: '100%' }}>
              Get started for free
            </Button>
            <Button to="/contact" variant="secondary" size="lg" style={{ width: '100%' }}>
              Book a live demo
            </Button>
          </div>
        </div>
      )}

      {/* Header Responsive CSS */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-contact-btn {
            display: inline-flex !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
        }
        .dropdown-item:hover {
          background-color: #f7f7f7;
        }
      `}</style>
    </>
  );
};
