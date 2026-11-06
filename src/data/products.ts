export interface ProductSuiteItem {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  linkText: string;
  linkHref: string;
  features: string[];
}

export const productTickerItems = [
  {
    category: 'Payments',
    title: '128 payment methods',
    description: 'Settle same day globally',
    metric: '128 methods',
  },
  {
    category: 'Cards',
    title: 'Virtual and physical cards',
    description: 'Real-time spend limits',
    metric: 'Instant issue',
  },
  {
    category: 'Treasury',
    title: 'Up to 4.2% yield',
    description: 'Automated yield on cash',
    metric: '4.2% APY',
  },
  {
    category: 'Payouts',
    title: 'Sent to 190 countries',
    description: 'Zero hidden FX fees',
    metric: '190 countries',
  },
  {
    category: 'Saro AI',
    title: 'Instant finance copilot',
    description: 'Answers directly from ledger',
    metric: '< 2s answers',
  },
  {
    category: 'Accounts',
    title: 'Multi-currency banking',
    description: 'Local details in 40 currencies',
    metric: '40 currencies',
  },
];

export const productSuiteData: ProductSuiteItem[] = [
  {
    id: 'payments',
    badge: 'Payments',
    title: 'Accept 128 payment methods and settle the same day.',
    tagline: 'Global checkout infrastructure',
    description: 'Annual plan $4,200.00. Support card, Apple Pay, Google Pay, Wire, SEPA, ACH, instant pay, and QR codes.',
    linkText: 'Explore Payments',
    linkHref: '/#suite',
    features: ['128 payment methods', 'Same-day settlement', 'Smart fraud defense', 'Unified ledger'],
  },
  {
    id: 'cards',
    badge: 'Cards',
    title: 'Virtual and metal cards with limits built in.',
    tagline: 'Modern spend controls',
    description: 'Set rules per employee, merchant, or department. Monthly limit $4,960 of $8,000 tracked in real time.',
    linkText: 'Explore Cards',
    linkHref: '/#cards',
    features: ['Physical & virtual cards', 'Merchant categories lock', 'Automated receipt fetch', 'Instant freeze'],
  },
  {
    id: 'accounts',
    badge: 'Accounts',
    title: 'Local details in 40 currencies.',
    tagline: 'Multi-currency treasury',
    description: 'Hold USD $1.24M, EUR €382K, GBP £96.8K without paying excessive conversion or foreign transaction penalties.',
    linkText: 'Explore Accounts',
    linkHref: '/#tour',
    features: ['40 Local IBANs & Account #s', 'Zero conversion fees', 'Direct debit collection', 'FDIC-eligible partner banks'],
  },
  {
    id: 'payouts',
    badge: 'Payouts',
    title: 'Pay anyone in 190 countries in seconds.',
    tagline: 'Global rails mapped',
    description: 'You send exactly 10,000.00 USD, recipient gets 9,184.20 EUR. Live exchange rates locked in during payout.',
    linkText: 'Explore Payouts',
    linkHref: '/#payouts',
    features: ['190 countries reached', 'Arrival in < 5 seconds', 'Automated tax reports', 'Batch CSV transfers'],
  },
  {
    id: 'treasury',
    badge: 'Treasury',
    title: 'Earn up to 4.2% on idle cash.',
    tagline: 'Automated yield engine',
    description: 'Keep operating liquidity safe in institutional government bond funds and high-yield insured accounts.',
    linkText: 'Explore Treasury',
    linkHref: '/#platform',
    features: ['Up to 4.2% APY', 'Daily liquidity & sweep', 'SIPC protection', 'No lockup period'],
  },
  {
    id: 'ai',
    badge: 'Saro AI',
    title: 'Ask your money anything and get answers with sources.',
    tagline: 'Autonomous AI Copilot',
    description: '"Which vendors grew fastest this quarter?" -> Hexa (+142%), Sparkhost (+88%), Stackpad (+61%).',
    linkText: 'Explore Saro AI',
    linkHref: '/#ai',
    features: ['Natural language Q&A', 'Line-item source links', 'Proactive runway alerts', 'Slack & Teams integration'],
  },
];

export const productTourTabs = [
  {
    id: 'analytics',
    label: 'Analytics',
    title: 'See every dollar move in real time.',
    description: 'Live cash visibility with automated transaction categorization and burn tracking.',
    metric: '$2,481,920',
    delta: '+4.2% today',
  },
  {
    id: 'accounts',
    label: 'Multi-currency accounts',
    title: 'Hold, receive and send in 40 currencies.',
    description: 'Local account details so your global clients pay you like a domestic vendor.',
    metric: '40 Local Currencies',
    delta: 'USD, EUR, GBP, JPY & more',
  },
  {
    id: 'cards',
    label: 'Cards and spend',
    title: 'Smart cards with limits that follow the rules.',
    description: 'Issue disposable cards for online subscriptions or physical metal cards for executives.',
    metric: '312 Cards Active',
    delta: '100% receipt capture',
  },
  {
    id: 'budgeting',
    label: 'Budgeting',
    title: 'Budgets that update themselves.',
    description: 'Departments get live budgets that sync with actual spend rather than stale monthly spreadsheets.',
    metric: '$840,000 allocated',
    delta: '76% on target',
  },
  {
    id: 'fx',
    label: 'FX and payouts',
    title: 'Convert at the real rate, then pay out instantly.',
    description: 'Zero hidden spreads. Send vendor payouts directly to local clearing systems in 190 countries.',
    metric: 'Mid-market rate',
    delta: 'Arrival in seconds',
  },
];

