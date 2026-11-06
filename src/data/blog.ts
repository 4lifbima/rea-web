export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverImage: string;
  coverTheme: 'blue' | 'violet' | 'lime';
  author: {
    name: string;
    role: string;
  };
  content: string[];
}

export const blogPostsData: BlogPost[] = [
  {
    slug: 'how-to-close-the-month-in-two-days',
    category: 'Guides',
    title: 'How to close the month in two days',
    excerpt: 'A practical playbook for finance teams that want to stop living in spreadsheets at the end of every month.',
    date: 'Oct 14, 2026',
    readTime: '2 min read',
    coverImage: '/assets/images/xWFOOKK1lbLehcxHTuR8WG9ScIo.jpg',
    coverTheme: 'blue',
    author: {
      name: 'Elena Rossi',
      role: 'Finance Operations Lead',
    },
    content: [
      'The traditional month-end close is an ordeal of broken CSV exports, missing receipts, and endless manual reconciliations between stripe, bank portals, and your accounting ledger.',
      'By consolidating cards, multi-currency accounts, and payments into a single real-time ledger, finance teams eliminate 90% of the manual tracking steps.',
      'Rule #1: Continuous reconciliation. Categorize transactions as they settle rather than waiting until the 30th.',
      'Rule #2: Autonomous receipt fetching. Connect your corporate cards directly to merchant email receipts and team chat.',
      'With Saro, teams regularly cut closing times from 9 business days down to less than 48 hours.',
    ],
  },
  {
    slug: 'saro-ai-now-answers-questions-in-team-chat',
    category: 'Product updates',
    title: 'Saro AI now answers questions in your team chat',
    excerpt: 'Ask about spend, runway or late invoices without leaving the conversation your team is already in.',
    date: 'Oct 9, 2026',
    readTime: '2 min read',
    coverImage: '/assets/images/U7M7yGetl6yutis4osZ3q7GwQ.jpg',
    coverTheme: 'violet',
    author: {
      name: 'Julian Vance',
      role: 'Head of Product',
    },
    content: [
      'Finance questions happen where your team works: in Slack, Teams, and email. When an executive asks "What is our current runway at Q3 burn rate?", waiting for a manual report is frustrating.',
      'Saro AI brings real-time financial intelligence directly to your messaging channels with strict role-based access control.',
      'Every answer is cited with clickable links to the exact ledger transactions, invoices, or card swipes backing it up.',
    ],
  },
  {
    slug: 'the-real-cost-of-a-cross-border-wire',
    category: 'Finance 101',
    title: 'The real cost of a cross-border wire',
    excerpt: 'Fees are only part of it. Here is how exchange-rate markups quietly take 3% of every international payment.',
    date: 'Oct 2, 2026',
    readTime: '2 min read',
    coverImage: '/assets/images/wxIzmtTF9zIq1tnpqlkHFCk1MU.jpg',
    coverTheme: 'lime',
    author: {
      name: 'Maya Chen',
      role: 'Head of Finance',
    },
    content: [
      'Most legacy banks advertise "flat $25 wire fees" while quietly taking 2.5% to 4% through hidden FX spread markups.',
      'For a $50,000 contractor or vendor payment, that hidden spread amounts to $1,500 vanishing into bank margins.',
      'Saro provides transparent, mid-market interbank exchange rates with zero hidden markups and same-day local settlement in 190 countries.',
    ],
  },
  {
    slug: 'building-a-modern-treasury-stack',
    category: 'Guides',
    title: 'Building a modern treasury stack for venture-backed startups',
    excerpt: 'How to safeguard operational runway across multiple custodian banks while earning competitive yields on idle cash.',
    date: 'Sep 24, 2026',
    readTime: '4 min read',
    coverImage: '/assets/images/xWFOOKK1lbLehcxHTuR8WG9ScIo.jpg',
    coverTheme: 'blue',
    author: {
      name: 'Daniel Okafor',
      role: 'CFO',
    },
    content: [
      'Concentration risk is real. Modern startup CFOs must diversify operating deposits across multiple tier-1 banking institutions without complicating day-to-day accounts payable.',
      'Learn how automated treasury sweeps can maintain FDIC insurance limits while delivering up to 4.2% annualized yield.',
    ],
  },
];
