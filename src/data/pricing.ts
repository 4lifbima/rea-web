export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  ctaText: string;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For seed-stage founders and small boutique agencies getting off spreadsheets.',
    monthlyPrice: 0,
    annualPrice: 0,
    ctaText: 'Start for free',
    features: [
      'Up to 3 team members',
      '2 Bank accounts connected',
      'Virtual employee cards (1% cashback)',
      '10 Domestic payouts per month',
      'Basic expense categorisation',
      'Standard email support',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Most Popular',
    popular: true,
    tagline: 'For fast-moving scaleups scaling across borders and managing multiple currencies.',
    monthlyPrice: 49,
    annualPrice: 39,
    ctaText: 'Start 14-day free trial',
    features: [
      'Up to 15 team members',
      'Unlimited bank connections worldwide',
      'Physical matte metal & virtual cards',
      'Local accounts in 40 currencies',
      'Unlimited domestic & fast international payouts',
      'Full Saro AI copilot access',
      'Custom approval workflows',
      '2-hour priority customer support',
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    tagline: 'For high-volume companies requiring automated treasury, ERP sync, and audit trails.',
    monthlyPrice: 199,
    annualPrice: 159,
    ctaText: 'Upgrade to Scale',
    features: [
      'Unlimited team members & spaces',
      'Treasury yield engine up to 4.2% APY',
      'Real-time NetSuite, QuickBooks & Xero 2-way sync',
      'Multi-entity & multi-subsidiary rollup',
      'Custom roles, permissions & SSO (SAML/Okta)',
      'Dedicated finance operations manager',
      'Custom SLA & 99.99% uptime guarantee',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Tailored rails, custom card programs, and bespoke payment orchestration.',
    monthlyPrice: 499,
    annualPrice: 399,
    ctaText: 'Contact enterprise sales',
    features: [
      'Custom pricing & dedicated payment rails',
      'Bespoke branded metal card embossing',
      'Direct central bank settlement routing',
      'SOC2 Type II, ISO 27001 & custom security review',
      'Dedicated solutions architect & onboarding team',
      '24/7 dedicated Slack war-room channel',
    ],
  },
];

