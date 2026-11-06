import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Landmark, Plus } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { SaroCardGraphic } from '../ui/SaroCardGraphic';

export const PlatformSection: React.FC = () => {
  const spendingRows = [
    { name: 'Pairboard', amount: '-$45.00', positive: false, opacity: 1 },
    { name: 'Stackpad', amount: '-$96.00', positive: false, opacity: 1 },
    { name: 'Orbit payout', amount: '+$12,480.00', positive: true, opacity: 1 },
    { name: 'Ridely', amount: '-$23.40', positive: false, opacity: 0.72 },
    { name: 'Cloudhaus', amount: '-$3,210.44', positive: false, opacity: 0.45 },
    { name: 'Lumen Studio', amount: '+$9,800.00', positive: true, opacity: 0.25 },
  ];

  const forecastBars = [
    { h: 42, color: '#0066ff' },
    { h: 52, color: '#0066ff' },
    { h: 47, color: '#0066ff' },
    { h: 62, color: '#0066ff' },
    { h: 56, color: '#0066ff' },
    { h: 70, color: '#0066ff' },
    { h: 77, color: '#b3d1ff' },
    { h: 84, color: '#b3d1ff' },
    { h: 94, color: '#b3d1ff' },
  ];

  return (
    <section
      id="platform"
      data-framer-name="Features"
      style={{
        paddingTop: '88px',
        paddingBottom: '104px',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="container">
        {/* Centered Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '18px' }}>
            <Badge number="1" iconType="grid-blue" label="Platform" />
          </div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Every Flow, One Calm Panel
          </h2>
          <p className="section-description" style={{ margin: '0 auto', maxWidth: '460px' }}>
            Track spending, connect your banks, issue cards and see what’s next, all from one place.
          </p>
        </div>

        {/* 4 Equal Vertical Cards */}
        <div
          className="saro-platform-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '18px',
          }}
        >
          {/* Card 1: Spending */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            style={{
              backgroundColor: '#f7f7f7',
              borderRadius: '24px',
              padding: '28px 24px',
              height: '416px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '12.5px', color: '#707070', marginBottom: '4px' }}>
                Track your daily
              </div>
              <h3 style={{ fontSize: '23px', fontWeight: 500, letterSpacing: '-0.03em', color: '#141414' }}>
                Spending
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
              {spendingRows.map((row, idx) => (
                <div
                  key={row.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '11px 0',
                    borderBottom: idx < spendingRows.length - 1 ? '1px solid #ececec' : 'none',
                    opacity: row.opacity,
                  }}
                >
                  <span style={{ fontSize: '13.5px', fontWeight: 500, color: '#141414' }}>
                    {row.name}
                  </span>
                  <span
                    className="mono-num"
                    style={{
                      fontSize: '12.5px',
                      fontWeight: 500,
                      color: row.positive ? '#12a150' : '#707070',
                    }}
                  >
                    {row.amount}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/#suite"
              aria-label="Learn more about Spending"
              style={{
                position: 'absolute',
                right: '16px',
                bottom: '16px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid #ebebeb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#141414',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              }}
            >
              <Plus size={15} />
            </Link>
          </motion.div>

          {/* Card 2: Bank Accounts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            style={{
              backgroundColor: '#f7f7f7',
              borderRadius: '24px',
              padding: '28px 24px',
              height: '416px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ marginBottom: '44px' }}>
              <div style={{ fontSize: '12.5px', color: '#707070', marginBottom: '4px' }}>
                Connect all your
              </div>
              <h3 style={{ fontSize: '23px', fontWeight: 500, letterSpacing: '-0.03em', color: '#141414' }}>
                Bank Accounts
              </h3>
            </div>

            {/* Stacked Bank Account Cards */}
            <div style={{ position: 'relative', width: '100%' }}>
              {/* Bottom Stack Shadow 2 */}
              <div
                style={{
                  position: 'absolute',
                  left: '22px',
                  right: '22px',
                  bottom: '-22px',
                  height: '40px',
                  backgroundColor: '#ececec',
                  borderRadius: '16px',
                }}
              />
              {/* Bottom Stack Shadow 1 */}
              <div
                style={{
                  position: 'absolute',
                  left: '11px',
                  right: '11px',
                  bottom: '-11px',
                  height: '40px',
                  backgroundColor: '#f2f2f2',
                  borderRadius: '16px',
                  border: '1px solid #e9e9e9',
                }}
              />

              {/* Front White Card */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#ffffff',
                  borderRadius: '18px',
                  padding: '20px',
                  border: '1px solid #ededed',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#141414',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Landmark size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 500, color: '#141414', lineHeight: 1.2 }}>
                      Main Checking
                    </div>
                    <div className="mono-num" style={{ fontSize: '11px', color: '#adadad' }}>
                      •••• 4021
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '21px',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    color: '#141414',
                    marginBottom: '16px',
                  }}
                >
                  $842,120.00
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: '#707070' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#00d64f',
                    }}
                  />
                  <span>Synced just now</span>
                </div>
              </div>
            </div>

            <Link
              to="/#tour"
              aria-label="Learn more about Bank Accounts"
              style={{
                position: 'absolute',
                right: '16px',
                bottom: '16px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid #ebebeb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#141414',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              }}
            >
              <Plus size={15} />
            </Link>
          </motion.div>

          {/* Card 3: Smart Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            style={{
              backgroundColor: '#f7f7f7',
              borderRadius: '24px',
              padding: '28px 24px',
              height: '416px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div>
              <div style={{ fontSize: '12.5px', color: '#707070', marginBottom: '4px' }}>
                Issue your team’s
              </div>
              <h3 style={{ fontSize: '23px', fontWeight: 500, letterSpacing: '-0.03em', color: '#141414' }}>
                Smart Cards
              </h3>
            </div>

            {/* 3 Fanned Physical Saro Cards */}
            <div style={{ position: 'relative', flex: 1, marginTop: '24px' }}>
              <SaroCardGraphic
                color="lime"
                last4="0219"
                width={175}
                height={110}
                style={{
                  position: 'absolute',
                  top: '6px',
                  right: '4px',
                  transform: 'rotate(16deg)',
                }}
              />
              <SaroCardGraphic
                color="blue"
                last4="5530"
                width={175}
                height={110}
                style={{
                  position: 'absolute',
                  top: '38px',
                  left: '4px',
                  transform: 'rotate(-6deg)',
                  zIndex: 2,
                }}
              />
              <SaroCardGraphic
                color="black"
                last4="8812"
                width={182}
                height={114}
                style={{
                  position: 'absolute',
                  top: '76px',
                  left: '18px',
                  transform: 'rotate(3deg)',
                  zIndex: 3,
                }}
              />
            </div>

            <Link
              to="/#cards"
              aria-label="Learn more about Smart Cards"
              style={{
                position: 'absolute',
                right: '16px',
                bottom: '16px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid #ebebeb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#141414',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                zIndex: 4,
              }}
            >
              <Plus size={15} />
            </Link>
          </motion.div>

          {/* Card 4: Cash Forecasts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            style={{
              backgroundColor: '#f7f7f7',
              borderRadius: '24px',
              padding: '28px 0 28px 24px',
              height: '416px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ paddingRight: '24px', marginBottom: '44px' }}>
              <div style={{ fontSize: '12.5px', color: '#707070', marginBottom: '4px' }}>
                Plan ahead with
              </div>
              <h3 style={{ fontSize: '23px', fontWeight: 500, letterSpacing: '-0.03em', color: '#141414' }}>
                Cash Forecasts
              </h3>
            </div>

            {/* White Forecast Chart Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '18px 0 0 18px',
                padding: '18px 16px 16px 18px',
                border: '1px solid #ededed',
                borderRight: 'none',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div style={{ fontSize: '11.5px', color: '#707070', marginBottom: '4px' }}>
                Cash forecast · 90 days
              </div>
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  color: '#141414',
                  marginBottom: '18px',
                }}
              >
                +$1.24M
              </div>

              {/* 9 Vertical Bars */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '6px',
                  height: '96px',
                }}
              >
                {forecastBars.map((bar, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${bar.h}px`,
                      backgroundColor: bar.color,
                      borderRadius: '5px',
                    }}
                  />
                ))}
              </div>
            </div>

            <Link
              to="/#platform"
              aria-label="Learn more about Cash Forecasts"
              style={{
                position: 'absolute',
                right: '16px',
                bottom: '16px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid #ebebeb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#141414',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                zIndex: 4,
              }}
            >
              <Plus size={15} />
            </Link>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .saro-platform-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .saro-platform-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
