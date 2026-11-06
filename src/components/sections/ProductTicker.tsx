import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftRight, CreditCard, Vault, Send } from 'lucide-react';

interface FolderCardItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  dotColor: string;
  iconColor: string;
  icon: React.ReactNode;
  photos: string[];
}

const folderCards: FolderCardItem[] = [
  {
    id: 'payments',
    title: 'Payments',
    subtitle: '128 payment methods',
    href: '/#suite',
    dotColor: '#0066ff',
    iconColor: '#0066ff',
    icon: <ArrowLeftRight size={17} strokeWidth={2.1} />,
    photos: [
      '/assets/images/gt2aUlrRRtoMHz1hg0sZSaWEZU.jpg',
      '/assets/images/IqCCdnyU2Y5vqHT6K4ZsIuESU7g.jpg',
      '/assets/images/Nsloe8fQkugKqkfTDw8W0bPU6Qo.jpg',
    ],
  },
  {
    id: 'cards',
    title: 'Cards',
    subtitle: 'Virtual and physical cards',
    href: '/#cards',
    dotColor: '#635bff',
    iconColor: '#635bff',
    icon: <CreditCard size={17} strokeWidth={2.1} />,
    photos: [
      '/assets/images/NJHbBSeoFYKJOtzVaCrxUJBJbQ.jpg',
      '/assets/images/QHRXbSdED42EEH4RUdcWsDep1PE.jpg',
      '/assets/images/gpXVrXq1Di2jPAxneNjmdAhpsg.jpg',
    ],
  },
  {
    id: 'treasury',
    title: 'Treasury',
    subtitle: 'Up to 4.2% yield',
    href: '/#platform',
    dotColor: '#ff6b1a',
    iconColor: '#ff6b1a',
    icon: <Vault size={17} strokeWidth={2.1} />,
    photos: [
      '/assets/images/weu32hsvrSGT96yQHiCce65FM.jpg',
      '/assets/images/Cezm8i3DwIAcbkWcErOoR8pjO0.jpg',
      '/assets/images/0hDztAiG8Ue98nBaC5oxbE34fI.jpg',
    ],
  },
  {
    id: 'payouts',
    title: 'Payouts',
    subtitle: 'Sent to 190 countries',
    href: '/#payouts',
    dotColor: '#00d64f',
    iconColor: '#12a150',
    icon: <Send size={17} strokeWidth={2.1} />,
    photos: [
      '/assets/images/XH8bbnbXcxq1CwjQ5gUoHacT8.jpg',
      '/assets/images/Nq5te4959xsAsnL5wZvvfdFy9Vc.jpg',
      '/assets/images/HpnLDnOVXBSZKAWj5Cex0A6eOq8.jpg',
    ],
  },
];

export const ProductTicker: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="ticker"
      data-framer-name="Products"
      style={{
        paddingTop: '48px',
        paddingBottom: '72px',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
          className="saro-folders-grid"
        >
          {folderCards.map((card, idx) => {
            const isHovered = hoveredId === card.id;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
              >
                <Link
                  to={card.href}
                  onMouseEnter={() => setHoveredId(card.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textDecoration: 'none',
                  }}
                >
                  {/* Tactile White Folder / Wallet Container */}
                  <div
                    style={{
                      width: '100%',
                      height: '198px',
                      position: 'relative',
                      paddingTop: '24px',
                      marginBottom: '18px',
                    }}
                  >
                    {/* Back Folder Tab */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '14px',
                        width: '92px',
                        height: '28px',
                        backgroundColor: '#efefef',
                        borderRadius: '12px 12px 0 0',
                        border: '1px solid #e4e4e4',
                      }}
                    />

                    {/* Back Folder Body */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: '22px 6px 6px 6px',
                        backgroundColor: '#f2f2f2',
                        borderRadius: '20px',
                        border: '1px solid #e6e6e6',
                      }}
                    />

                    {/* 3 Fan-Out Photos Inside Folder Pocket */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '210px',
                        height: '90px',
                        pointerEvents: 'none',
                      }}
                    >
                      {/* Photo 1 (Left) */}
                      <motion.img
                        src={card.photos[0]}
                        alt=""
                        animate={{
                          y: isHovered ? -22 : 0,
                          rotate: isHovered ? -14 : -8,
                          x: isHovered ? -44 : -34,
                        }}
                        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: '4px',
                          marginLeft: '-38px',
                          width: '76px',
                          height: '92px',
                          objectFit: 'cover',
                          borderRadius: '10px',
                          border: '2.5px solid #ffffff',
                          boxShadow: '0 6px 14px rgba(0,0,0,0.12)',
                        }}
                      />

                      {/* Photo 2 (Center) */}
                      <motion.img
                        src={card.photos[1]}
                        alt=""
                        animate={{
                          y: isHovered ? -30 : -6,
                          rotate: isHovered ? 2 : 3,
                          x: 0,
                        }}
                        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: '2px',
                          marginLeft: '-40px',
                          width: '80px',
                          height: '96px',
                          objectFit: 'cover',
                          borderRadius: '10px',
                          border: '2.5px solid #ffffff',
                          boxShadow: '0 8px 18px rgba(0,0,0,0.15)',
                          zIndex: 2,
                        }}
                      />

                      {/* Photo 3 (Right) */}
                      <motion.img
                        src={card.photos[2]}
                        alt=""
                        animate={{
                          y: isHovered ? -20 : 2,
                          rotate: isHovered ? 15 : 9,
                          x: isHovered ? 44 : 34,
                        }}
                        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: '6px',
                          marginLeft: '-38px',
                          width: '76px',
                          height: '92px',
                          objectFit: 'cover',
                          borderRadius: '10px',
                          border: '2.5px solid #ffffff',
                          boxShadow: '0 6px 14px rgba(0,0,0,0.12)',
                          zIndex: 3,
                        }}
                      />
                    </div>

                    {/* Front Folder Pocket Flap */}
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: '138px',
                        borderRadius: '22px',
                        background: 'linear-gradient(180deg, #fbfbfb 0%, #f4f4f4 100%)',
                        border: '1px solid #e9e9e9',
                        boxShadow:
                          '0 10px 24px rgba(20, 20, 20, 0.06), inset 0 2px 0 rgba(255, 255, 255, 0.9)',
                        padding: '18px 20px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        zIndex: 4,
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* Postage Stamp Sticker */}
                        <div
                          style={{
                            width: '36px',
                            height: '42px',
                            borderRadius: '6px',
                            backgroundColor: '#ffffff',
                            border: '1.5px dashed #dcdcdc',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: 'rotate(-8deg)',
                          }}
                        >
                          <span
                            style={{
                              width: '14px',
                              height: '14px',
                              borderRadius: '50%',
                              backgroundColor: card.dotColor,
                            }}
                          />
                        </div>

                        {/* Right Tilted Icon Badge */}
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            backgroundColor: '#ffffff',
                            border: '1px solid #ececec',
                            boxShadow: '0 6px 14px rgba(0,0,0,0.06)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: card.iconColor,
                            transform: 'rotate(7deg)',
                          }}
                        >
                          {card.icon}
                        </div>
                      </div>

                      {/* Subtle Bottom Pocket Grooves */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <div style={{ height: '1px', backgroundColor: '#eaeaea', width: '100%' }} />
                        <div style={{ height: '1px', backgroundColor: '#eaeaea', width: '100%' }} />
                      </div>
                    </div>
                  </div>

                  {/* Folder Title & Pill Subtitle */}
                  <h4
                    style={{
                      fontSize: '17px',
                      fontWeight: 500,
                      color: '#141414',
                      letterSpacing: '-0.02em',
                      marginBottom: '8px',
                    }}
                  >
                    {card.title}
                  </h4>
                  <span
                    style={{
                      padding: '5px 14px',
                      borderRadius: '9999px',
                      backgroundColor: '#efefef',
                      color: '#555555',
                      fontSize: '12.5px',
                      fontWeight: 500,
                    }}
                  >
                    {card.subtitle}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .saro-folders-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .saro-folders-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
