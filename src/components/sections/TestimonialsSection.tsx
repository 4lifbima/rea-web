import React from 'react';
import { Badge } from '../ui/Badge';
import { testimonialsData, type Testimonial } from '../../data/testimonials';

const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => (
  <div
    style={{
      width: '360px',
      flexShrink: 0,
      backgroundColor: '#f7f7f7',
      borderRadius: '24px',
      padding: '26px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '20px',
    }}
  >
    <div>
      {/* Top Quote mark + 5 black stars */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <svg width="22" height="18" viewBox="0 0 24 20" fill="#0066ff">
          <path d="M9.6 11.2c0 3-2.1 5.3-5.2 5.3-2.5 0-4.4-1.8-4.4-4.5 0-4.8 3.6-8.9 8.7-10l.9 1.8C6 5 4.2 7.2 4 9.5c.4-.1.9-.2 1.4-.2 2.4 0 4.2 1.6 4.2 3.9zm14.4 0c0 3-2.1 5.3-5.2 5.3-2.5 0-4.4-1.8-4.4-4.5 0-4.8 3.6-8.9 8.7-10l.9 1.8c-3.6 1.2-5.4 3.4-5.6 5.7.4-.1.9-.2 1.4-.2 2.4 0 4.2 1.6 4.2 3.9z" />
        </svg>

        <div style={{ display: 'flex', gap: '2px', color: '#141414' }}>
          {Array.from({ length: item.rating }).map((_, idx) => (
            <svg key={idx} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Quote Text */}
      <p
        style={{
          fontSize: '14.5px',
          lineHeight: 1.55,
          color: '#141414',
          letterSpacing: '-0.01em',
        }}
      >
        {item.quote}
      </p>
    </div>

    {/* Author Row with Downloaded Photo */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img
        src={item.avatarImage}
        alt={item.name}
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '999px',
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#141414' }}>
          {item.name}
        </div>
        <div style={{ fontSize: '12px', color: '#7a7a7a' }}>
          {item.title}, {item.company}
        </div>
      </div>
    </div>
  </div>
);

export const TestimonialsSection: React.FC = () => {
  const row1 = testimonialsData.slice(0, 5);
  const row2 = testimonialsData.slice(5, 10);

  return (
    <section
      id="testimonials"
      style={{
        padding: '96px 0',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Centered Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '52px',
          }}
        >
          <div style={{ marginBottom: '18px' }}>
            <Badge number="8" iconType="butterfly" label="Testimonials" />
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.25rem, 4.2vw, 3.35rem)',
              fontWeight: 500,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: '#141414',
              maxWidth: '480px',
              marginBottom: '16px',
            }}
          >
            Loved by finance teams that move fast.
          </h2>

          {/* Orange Stars + Rating Text */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '2px', color: '#ff9f1c' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span style={{ fontSize: '13px', color: '#525252', fontWeight: 500 }}>
              4.9 out of 5 from 2,400+ finance teams
            </span>
          </div>
        </div>
      </div>

      {/* Marquee Rows Container */}
      <div
        className="marquee-pause"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          maxWidth: '1400px',
          margin: '0 auto',
          maskImage: 'linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)',
        }}
      >
        {/* Row 1: Left */}
        <div
          style={{
            display: 'flex',
            gap: '18px',
            width: 'max-content',
            animation: 'marqueeLeft 42s linear infinite',
          }}
        >
          {[...row1, ...row1].map((item, i) => (
            <TestimonialCard key={`${item.id}-r1-${i}`} item={item} />
          ))}
        </div>

        {/* Row 2: Right */}
        <div
          style={{
            display: 'flex',
            gap: '18px',
            width: 'max-content',
            animation: 'marqueeRight 45s linear infinite',
          }}
        >
          {[...row2, ...row2].map((item, i) => (
            <TestimonialCard key={`${item.id}-r2-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
