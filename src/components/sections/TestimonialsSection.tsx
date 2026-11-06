import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { testimonialsData } from '../../data/testimonials';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonialsData.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonialsData.length - 1 ? 0 : prevIdx + 1));
  };

  const displayedTestimonials = Array.from(
    { length: Math.min(6, testimonialsData.length) },
    (_, i) => testimonialsData[(currentIndex + i) % testimonialsData.length]
  );

  return (
    <section
      id="testimonials"
      data-framer-name="Testimonials"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <Badge number="8" label="Testimonials" />
          </div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Loved by finance teams that move fast.
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', color: '#ff6b1a' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#ff6b1a" stroke="none" />
              ))}
            </div>
            <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-text)' }}>
              4.9 out of 5 from 2,400+ finance teams
            </span>
          </div>
        </div>

        {/* Carousel Grid Layout */}
        <div style={{ position: 'relative', maxWidth: '1060px', margin: '0 auto' }}>
          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginBottom: '16px' }}>
            <button
              type="button"
              onClick={prev}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-subtle)',
              }}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-subtle)',
              }}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Testimonial Cards Grid (Showing a responsive cluster) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '24px',
            }}
          >
            {displayedTestimonials.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid var(--color-border)',
                  padding: '28px',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform var(--transition-fast), border-color var(--transition-fast)',
                }}
                className="testimonial-card"
              >
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', color: '#ff6b1a', marginBottom: '14px' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#ff6b1a" stroke="none" />
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: '15px',
                      color: '#141414',
                      lineHeight: 1.6,
                      fontWeight: 500,
                    }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: item.avatarBg,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '14px',
                    }}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#141414' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#707070' }}>
                      {item.title} · {item.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-card:hover {
          border-color: #0066ff !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};
