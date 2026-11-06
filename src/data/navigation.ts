export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
  children?: {
    title: string;
    description: string;
    href: string;
    icon?: string;
    badge?: string;
  }[];
}

export const navigationData: {
  mainNav: NavItem[];
  footerNav: {
    title: string;
    links: { label: string; href: string; badge?: string }[];
  }[];
} = {
  mainNav: [
    {
      label: 'Products',
      href: '/#suite',
      children: [
        {
          title: 'Payments',
          description: 'Accept 128 payment methods & settle same day',
          href: '/#suite',
          badge: '128 methods',
        },
        {
          title: 'Cards',
          description: 'Virtual & metal cards with limits built in',
          href: '/#cards',
          badge: 'Instant issue',
        },
        {
          title: 'Accounts',
          description: 'Local details in 40 currencies',
          href: '/#tour',
          badge: '40 currencies',
        },
        {
          title: 'Payouts',
          description: 'Send money to 190 countries in seconds',
          href: '/#payouts',
          badge: 'Global',
        },
        {
          title: 'Treasury',
          description: 'Earn up to 4.2% on idle cash balances',
          href: '/#platform',
          badge: '4.2% APY',
        },
        {
          title: 'Saro AI',
          description: 'Ask your money anything and get sources',
          href: '/#ai',
          badge: 'Copilot',
        },
      ],
    },
    {
      label: 'Solutions',
      href: '/solutions',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
    {
      label: 'Customers',
      href: '/customers',
    },
    {
      label: 'Resources',
      href: '/blog',
      children: [
        {
          title: 'Blog & Playbooks',
          description: 'Tactical guides for modern finance teams',
          href: '/blog',
        },
        {
          title: 'Interactive Tour',
          description: 'See every money flow in action',
          href: '/#tour',
        },
        {
          title: 'FAQ',
          description: 'Clear answers on security, setup and fees',
          href: '/#faq',
        },
      ],
    },
  ],
  footerNav: [
    {
      title: 'Products',
      links: [
        { label: 'Payments', href: '/#suite' },
        { label: 'Cards', href: '/#cards' },
        { label: 'Accounts', href: '/#tour' },
        { label: 'Payouts', href: '/#payouts' },
        { label: 'Treasury', href: '/#platform' },
        { label: 'Saro AI', href: '/#ai' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'For Startups', href: '/solutions#startups' },
        { label: 'For Scaleups', href: '/solutions#scaleups' },
        { label: 'Global Teams', href: '/solutions#global' },
        { label: 'Enterprise', href: '/solutions#enterprise' },
        { label: 'Case Studies', href: '/customers' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Product Tour', href: '/#tour' },
        { label: 'FAQ', href: '/#faq' },
        { label: 'Support', href: '/contact' },
        { label: 'API Reference', href: '/pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Customers', href: '/customers' },
        { label: 'Careers', href: '/about#careers', badge: 'Hiring' },
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ],
};

