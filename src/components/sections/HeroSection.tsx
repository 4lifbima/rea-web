import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface HangingIcon {
  id: string;
  left: string;
  lineHeight: number;
  bg: string;
  svg: string;
  delay: number;
  invertIcon?: boolean;
}

const hangingIcons: HangingIcon[] = [
  {
    id: 'orange-chevron',
    left: '13.5%',
    lineHeight: 352,
    bg: '#ff6b1a',
    svg: '/assets/svgs/T1nWoszgnZpayyptljgqyxsq7s.svg',
    delay: 0.05,
  },
  {
    id: 'black-trefoil',
    left: '21.8%',
    lineHeight: 204,
    bg: '#141414',
    svg: '/assets/svgs/FuiFarr3QTYXqyqMVAc3sG5MNJA.svg',
    delay: 0.12,
  },
  {
    id: 'green-sparkle',
    left: '20.2%',
    lineHeight: 510,
    bg: '#00d64f',
    svg: '/assets/svgs/fiEkizV5UawQFZyvE8FXddATTw.svg',
    delay: 0.2,
  },
  {
    id: 'violet-pie',
    left: '50%',
    lineHeight: 128,
    bg: '#635bff',
    svg: '/assets/svgs/OhDeN9SIXDzgHpOWOe9Rha68dw.svg',
    delay: 0.08,
  },
  {
    id: 'green-arrow',
    left: '78.2%',
    lineHeight: 208,
    bg: '#00d64f',
    svg: '/assets/svgs/8cgSQoUv6rytsOmYz84HMF6z1I.svg',
    delay: 0.16,
  },
  {
    id: 'lime-leaf',
    left: '79.2%',
    lineHeight: 508,
    bg: '#ccff00',
    svg: '/assets/svgs/eFftZjC9bKjBLgkyt2id4qkAz9E.svg',
    delay: 0.24,
    invertIcon: true,
  },
  {
    id: 'blue-circles',
    left: '86.5%',
    lineHeight: 346,
    bg: '#0066ff',
    svg: '/assets/svgs/HnNvR3Gd5VRLbPfez4nCLr07HRI.svg',
    delay: 0.1,
  },
];

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      data-framer-name="Hero"
      style={{
        position: 'relative',
        paddingTop: '248px',
        paddingBottom: '56px',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Hanging Pendulum Squircles on Vertical Strings */}
      <div
        className="hero-hanging-layer"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        {hangingIcons.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: -90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 110,
              damping: 14,
              delay: item.delay,
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: item.left,
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pointerEvents: 'auto',
            }}
          >
            {/* Vertical Suspension String */}
            <div
              style={{
                width: '1px',
                height: `${item.lineHeight}px`,
                background: 'linear-gradient(180deg, rgba(200,200,200,0.35) 0%, #d4d4d4 100%)',
              }}
            />

            {/* 3D Glossy Squircle Badge */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: -6, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="saro-squircle"
              style={{
                width: '58px',
                height: '58px',
                borderRadius: '16px',
                backgroundColor: item.bg,
                cursor: 'grab',
              }}
            >
              <img
                src={item.svg}
                alt=""
                width={26}
                height={26}
                style={{
                  width: '26px',
                  height: '26px',
                  filter: item.invertIcon ? 'none' : 'brightness(0) invert(1)',
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Center Hero Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          style={{ marginBottom: '22px' }}
        >
          <Badge isNew iconType="burst" label="Realtime cash flow is live" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{
            fontSize: 'clamp(2.85rem, 6vw, 5.15rem)',
            fontWeight: 500,
            letterSpacing: '-0.045em',
            lineHeight: 1.03,
            color: '#141414',
            maxWidth: '760px',
            marginBottom: '22px',
          }}
        >
          Run Your Money
          <br />
          From <span style={{ color: '#0066ff' }}>One Panel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          style={{
            fontSize: 'clamp(1rem, 1.35vw, 1.125rem)',
            color: '#707070',
            lineHeight: 1.55,
            letterSpacing: '-0.01em',
            maxWidth: '470px',
            marginBottom: '32px',
          }}
        >
          The finance dashboard for modern teams. Payments, cards and payouts in one live panel, synced every second.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          <Button to="/pricing" variant="primary" size="lg">
            Start for free
          </Button>
          <Button
            to="/contact"
            variant="secondary"
            size="lg"
            iconRight={<ChevronRight size={15} strokeWidth={2.2} />}
          >
            Book a demo
          </Button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-hanging-layer {
            opacity: 0.22;
          }
          #hero {
            padding-top: 150px !important;
          }
        }
      `}</style>
    </section>
  );
};
