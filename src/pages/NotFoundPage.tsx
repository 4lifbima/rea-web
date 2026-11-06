import React from 'react';
import { Button } from '../components/ui/Button';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        paddingTop: '96px',
        paddingBottom: '120px',
        textAlign: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: '600px' }}>
        <div
          className="mono-num"
          style={{
            fontSize: '96px',
            fontWeight: 800,
            color: 'var(--color-primary)',
            lineHeight: 1,
            marginBottom: '16px',
          }}
        >
          404
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#141414', marginBottom: '16px' }}>
          Page not found
        </h1>
        <p style={{ fontSize: '16px', color: '#707070', lineHeight: 1.6, marginBottom: '36px' }}>
          The page or product feature you are looking for doesn’t exist or has moved. Return to the calm finance workspace below.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
          <Button to="/" variant="primary" size="lg" icon={<Home size={16} />}>
            Return to homepage
          </Button>
          <Button to="/pricing" variant="secondary" size="lg">
            View pricing plans
          </Button>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '32px' }}>
          <div style={{ fontSize: '13px', color: '#707070', marginBottom: '12px' }}>
            Popular destinations:
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', fontSize: '14px', fontWeight: 500 }}>
            <Link to="/#suite" style={{ color: 'var(--color-primary)' }}>Product Suite</Link>
            <Link to="/#cards" style={{ color: 'var(--color-primary)' }}>Cards</Link>
            <Link to="/solutions" style={{ color: 'var(--color-primary)' }}>Solutions</Link>
            <Link to="/blog" style={{ color: 'var(--color-primary)' }}>Blog Playbooks</Link>
            <Link to="/contact" style={{ color: 'var(--color-primary)' }}>Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
