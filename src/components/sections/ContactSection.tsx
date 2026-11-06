import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { CheckCircle2, Clock, Headphones, Send, Loader2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamSize: '11 to 50',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      errs.email = 'Please provide a valid work email.';
    }
    if (!formData.message.trim()) errs.message = 'Please tell us how we can help.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 700);
  };

  return (
    <section
      id="contact"
      data-framer-name="Contact"
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Context & Guarantees */}
          <div>
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <Badge number="11" label="Contact" />
            </div>
            <h2 className="section-title" style={{ marginBottom: '18px' }}>
              Talk to a real person.
            </h2>
            <p className="section-description" style={{ marginBottom: '32px' }}>
              Tell us how your team moves money today and we’ll show you what Saro would change. No pushy sales, just answers.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 36, height: 36, borderRadius: '8px', backgroundColor: '#e7f6ee', color: '#12a150', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Clock size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#141414' }}>Replies in under two hours</div>
                  <div style={{ fontSize: '12px', color: '#707070' }}>Real finance engineers on standby</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 36, height: 36, borderRadius: '8px', backgroundColor: 'var(--color-primary-subtle)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Headphones size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#141414' }}>Free setup and migration help</div>
                  <div style={{ fontSize: '12px', color: '#707070' }}>We import charts of accounts and bank connections</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 36, height: 36, borderRadius: '8px', backgroundColor: '#fff2ea', color: '#ff6b1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#141414' }}>A finance partner, not a ticket number</div>
                  <div style={{ fontSize: '12px', color: '#707070' }}>Dedicated Slack war room on Growth & Scale</div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '14px', color: '#707070' }}>
              Prefer direct email?{' '}
              <a href="mailto:contact@saro.finance" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                viyako.designs@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid var(--color-border)',
              padding: '36px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {success ? (
              <div style={{ textAlign: 'center', padding: '36px 16px' }} className="animate-fade-in">
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    backgroundColor: '#e7f6ee',
                    color: '#12a150',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto',
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#141414', marginBottom: '8px' }}>
                  Message received!
                </h3>
                <p style={{ fontSize: '14px', color: '#707070', lineHeight: 1.6, maxWidth: '320px', margin: '0 auto 24px auto' }}>
                  Thank you, {formData.name}. Our fintech specialist will review your team requirements and reply to {formData.email} in under 2 hours.
                </p>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => {
                    setSuccess(false);
                    setFormData({ name: '', email: '', teamSize: '11 to 50', message: '' });
                  }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#141414', marginBottom: '6px' }}>
                    Your name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Maya Chen"
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: errors.name ? '1px solid #e5484d' : '1px solid var(--color-border)',
                      fontSize: '14px',
                      backgroundColor: '#fbfbfb',
                    }}
                  />
                  {errors.name && <span style={{ color: '#e5484d', fontSize: '12px' }}>{errors.name}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#141414', marginBottom: '6px' }}>
                    Work email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maya@company.com"
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: errors.email ? '1px solid #e5484d' : '1px solid var(--color-border)',
                      fontSize: '14px',
                      backgroundColor: '#fbfbfb',
                    }}
                  />
                  {errors.email && <span style={{ color: '#e5484d', fontSize: '12px' }}>{errors.email}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#141414', marginBottom: '6px' }}>
                    Team size
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid var(--color-border)',
                      fontSize: '14px',
                      backgroundColor: '#fbfbfb',
                      color: '#141414',
                    }}
                  >
                    <option value="1 to 10">1 to 10 employees</option>
                    <option value="11 to 50">11 to 50 employees</option>
                    <option value="51 to 200">51 to 200 employees</option>
                    <option value="201 to 1,000">201 to 1,000 employees</option>
                    <option value="1,000+">1,000+ employees</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#141414', marginBottom: '6px' }}>
                    How can we help?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your payment rails, currencies, or team card requirements..."
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: errors.message ? '1px solid #e5484d' : '1px solid var(--color-border)',
                      fontSize: '14px',
                      backgroundColor: '#fbfbfb',
                      resize: 'vertical',
                    }}
                  />
                  {errors.message && <span style={{ color: '#e5484d', fontSize: '12px' }}>{errors.message}</span>}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={loading}
                  style={{ width: '100%', marginTop: '8px' }}
                  icon={loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                >
                  {loading ? 'Sending message...' : 'Send message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
