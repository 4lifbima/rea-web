import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SaroCardGraphic } from '../ui/SaroCardGraphic';

export const CardsSection: React.FC = () => {
  return (
    <section
      id="saro-cards"
      style={{
        padding: '48px 0 96px',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="container">
        <div
          style={{
            backgroundColor: '#f7f7f7',
            borderRadius: '32px',
            padding: '72px 24px 0',
            textAlign: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Top Centered Copy */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '580px',
              margin: '0 auto 48px',
            }}
          >
            <div style={{ marginBottom: '20px' }}>
              <Badge isNew iconType="clover-lime" label="Saro Cards" />
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.35rem, 4.5vw, 3.5rem)',
                fontWeight: 500,
                letterSpacing: '-0.04em',
                lineHeight: 1.04,
                color: '#141414',
                marginBottom: '16px',
              }}
            >
              Cards as unique as your team
            </h2>

            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                color: '#525252',
                maxWidth: '470px',
                marginBottom: '10px',
              }}
            >
              Pick a finish, add your logo and set the rules before the card even ships. Virtual cards are ready the second you click create.
            </p>

            <p
              style={{
                fontSize: '11.5px',
                color: '#8a8a8a',
                marginBottom: '26px',
              }}
            >
              Custom designs and delivery fees may apply on some plans.
            </p>

            <Button variant="primary" href="/contact" showChevron={false}>
              Order your cards
            </Button>
          </div>

          {/* Bottom Visual: Center Phone Bezel + 3 Floating Tilted Saro Cards */}
          <div
            style={{
              position: 'relative',
              maxWidth: '820px',
              height: '390px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            {/* Left Floating Lime Card */}
            <motion.div
              className="floating-card-left"
              initial={{ opacity: 0, x: -30, rotate: -14 }}
              whileInView={{ opacity: 1, x: 0, rotate: -10 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: -12 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              style={{
                position: 'absolute',
                left: '7%',
                bottom: '44px',
                zIndex: 3,
              }}
            >
              <SaroCardGraphic variant="lime" last4="0219" size="md" />
            </motion.div>

            {/* Center iPhone Bezel */}
            <div
              style={{
                width: '300px',
                height: '380px',
                backgroundColor: '#141414',
                borderRadius: '44px 44px 0 0',
                padding: '12px 12px 0',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.16)',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* Dynamic Island */}
              <div
                style={{
                  width: '84px',
                  height: '22px',
                  borderRadius: '999px',
                  backgroundColor: '#0a0a0a',
                  position: 'absolute',
                  top: '22px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 4,
                }}
              />
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '34px 34px 0 0',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                }}
              >
                <img
                  src="/assets/images/nmf9TvYTdb9HZvcDVQmn2tMVy94.jpg"
                  alt="Saro mobile app"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                />
              </div>
            </div>

            {/* Top-Right Floating Blue Card */}
            <motion.div
              className="floating-card-right-top"
              initial={{ opacity: 0, x: 30, rotate: 14 }}
              whileInView={{ opacity: 1, x: 0, rotate: 10 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: 12 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.08 }}
              style={{
                position: 'absolute',
                right: '8%',
                bottom: '148px',
                zIndex: 1,
              }}
            >
              <SaroCardGraphic variant="blue" last4="5530" size="md" />
            </motion.div>

            {/* Bottom-Right Floating Black Card */}
            <motion.div
              className="floating-card-right-bottom"
              initial={{ opacity: 0, x: 30, rotate: 8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, rotate: 7 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.14 }}
              style={{
                position: 'absolute',
                right: '6%',
                bottom: '22px',
                zIndex: 3,
              }}
            >
              <SaroCardGraphic variant="black" last4="8812" size="md" />
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .floating-card-left,
          .floating-card-right-top,
          .floating-card-right-bottom {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
