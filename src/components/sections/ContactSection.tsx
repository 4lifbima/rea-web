import React, { useState } from 'react';
import { Badge } from '../ui/Badge';

const CONTACT_AVATARS = [
  '/assets/images/JhVhX5NpWx66mAyFjKStvFaZbAo.jpg',
  '/assets/images/2Cu3OpYSPTUbz6Wo3O4EaekV8.jpg',
  '/assets/images/VNwCUIPSCB4yi1usyzTj13lw4EE.jpg',
];

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [teamSize, setTeamSize] = useState('1 to 10');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '48px 0 96px',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="container">
        <div
          className="contact-dark-card"
          style={{
            backgroundColor: '#141414',
            borderRadius: '32px',
            padding: '64px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'stretch',
            color: '#ffffff',
          }}
        >
          {/* Left Column */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '36px',
            }}
          >
            <div>
              <div style={{ marginBottom: '20px' }}>
                <Badge number="11" iconType="chat" label="Contact" variant="dark" />
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.05,
                  color: '#ffffff',
                  marginBottom: '16px',
                }}
              >
                Talk to a real person.
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.65)',
                  maxWidth: '410px',
                  marginBottom: '28px',
                }}
              >
                Questions about pricing, a custom setup or moving over from another tool? Send a note and a product specialist will reply today.
              </p>

              {/* 3 Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Average reply under 2 hours',
                  'Talk to finance specialists, not a bot',
                  'Live walkthrough tailored to your team',
                ].map((bullet) => (
                  <div
                    key={bullet}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.88)',
                    }}
                  >
                    <span
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        color: '#ccff00',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {bullet}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Avatars + Online now pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {CONTACT_AVATARS.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '999px',
                      objectFit: 'cover',
                      border: '2px solid #141414',
                      marginLeft: i === 0 ? 0 : '-8px',
                    }}
                  />
                ))}
              </div>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '6px 12px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '999px',
                    backgroundColor: '#00d64f',
                  }}
                />
                Online now
              </span>
            </div>
          </div>

          {/* Right Column: White Form Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '32px',
              color: '#141414',
            }}
          >
            {submitted ? (
              <div
                style={{
                  minHeight: '320px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '999px',
                    backgroundColor: '#dffae8',
                    color: '#0a8537',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    fontWeight: 700,
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#141414' }}>
                  Message received
                </h3>
                <p style={{ fontSize: '14px', color: '#6b6b6b', maxWidth: '300px' }}>
                  Thanks, {name}! A finance specialist will get back to you at {email} within two hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  style={{
                    marginTop: '8px',
                    padding: '8px 16px',
                    borderRadius: '999px',
                    backgroundColor: '#f5f5f5',
                    border: 'none',
                    fontSize: '12.5px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                    gap: '14px',
                  }}
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: 'block',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: '#525252',
                        marginBottom: '6px',
                      }}
                    >
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Ada Lovelace"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '12px',
                        border: 'none',
                        backgroundColor: '#f7f7f7',
                        fontSize: '13.5px',
                        color: '#141414',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: 'block',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: '#525252',
                        marginBottom: '6px',
                      }}
                    >
                      Work email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="ada@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '12px',
                        border: 'none',
                        backgroundColor: '#f7f7f7',
                        fontSize: '13.5px',
                        color: '#141414',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-team"
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#525252',
                      marginBottom: '6px',
                    }}
                  >
                    Team size
                  </label>
                  <select
                    id="contact-team"
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '12px',
                      border: 'none',
                      backgroundColor: '#f7f7f7',
                      fontSize: '13.5px',
                      color: '#141414',
                      outline: 'none',
                    }}
                  >
                    <option value="1 to 10">1 to 10</option>
                    <option value="11 to 50">11 to 50</option>
                    <option value="51 to 200">51 to 200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-help"
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#525252',
                      marginBottom: '6px',
                    }}
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="contact-help"
                    rows={4}
                    placeholder="Tell us about your team and what you want to set up..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: 'none',
                      backgroundColor: '#f7f7f7',
                      fontSize: '13.5px',
                      color: '#141414',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: '999px',
                    backgroundColor: '#141414',
                    color: '#ffffff',
                    fontSize: '13.5px',
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    marginTop: '4px',
                  }}
                >
                  Send message <span style={{ opacity: 0.8 }}>›</span>
                </button>

                <div
                  style={{
                    textAlign: 'center',
                    fontSize: '12px',
                    color: '#8a8a8a',
                    marginTop: '2px',
                  }}
                >
                  Prefer email?{' '}
                  <a
                    href="mailto:viyako.designs@gmail.com"
                    style={{
                      color: '#141414',
                      textDecoration: 'underline',
                      fontWeight: 500,
                    }}
                  >
                    viyako.designs@gmail.com
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-dark-card {
            padding: 36px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};
