import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, LineChart, CreditCard, TrendingUp } from 'lucide-react';

const InlineSquircle: React.FC<{
  bg: string;
  children: React.ReactNode;
}> = ({ bg, children }) => (
  <motion.span
    whileHover={{ scale: 1.12, rotate: -6 }}
    transition={{ type: 'spring', stiffness: 320, damping: 14 }}
    className="saro-squircle"
    style={{
      width: '46px',
      height: '46px',
      borderRadius: '13px',
      backgroundColor: bg,
      verticalAlign: 'middle',
      margin: '0 6px',
      transform: 'translateY(-4px)',
      cursor: 'pointer',
    }}
  >
    {children}
  </motion.span>
);

export const StatementSection: React.FC = () => {
  return (
    <section
      id="statement"
      data-framer-name="Statement"
      style={{
        paddingTop: '140px',
        paddingBottom: '140px',
        textAlign: 'center',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          style={{
            fontSize: 'clamp(1.85rem, 3.6vw, 2.85rem)',
            fontWeight: 500,
            lineHeight: 1.32,
            letterSpacing: '-0.035em',
            color: '#141414',
          }}
        >
          Saro{' '}
          <InlineSquircle bg="#0066ff">
            <Wallet size={21} color="#ffffff" strokeWidth={2} />
          </InlineSquircle>{' '}
          is the first finance panel{' '}
          <InlineSquircle bg="#141414">
            <LineChart size={21} color="#ffffff" strokeWidth={2} />
          </InlineSquircle>
          <br />
          where teams can track, move{' '}
          <InlineSquircle bg="#ccff00">
            <CreditCard size={21} color="#141414" strokeWidth={2} />
          </InlineSquircle>{' '}
          and
          <br />
          grow money{' '}
          <InlineSquircle bg="#00d64f">
            <TrendingUp size={21} color="#ffffff" strokeWidth={2.2} />
          </InlineSquircle>{' '}
          in one calm place.
        </motion.p>
      </div>
    </section>
  );
};
