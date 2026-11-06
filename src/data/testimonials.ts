export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarBg: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'We closed the month in two days instead of nine. Saro made every number feel obvious.',
    name: 'Maya Chen',
    title: 'Head of Finance',
    company: 'Lumen Studio',
    avatarBg: '#0066ff',
    rating: 5,
  },
  {
    id: 'test-2',
    quote: 'The live cash view replaced three spreadsheets and a weekly meeting nobody enjoyed.',
    name: 'Daniel Okafor',
    title: 'CFO',
    company: 'Halcyon Labs',
    avatarBg: '#12a150',
    rating: 5,
  },
  {
    id: 'test-3',
    quote: 'Paying contractors in 14 countries used to take a day. Now it takes a coffee break.',
    name: 'Sofia Marquez',
    title: 'Finance Lead',
    company: 'Orbit Freight',
    avatarBg: '#ff6b1a',
    rating: 5,
  },
  {
    id: 'test-4',
    quote: 'Approval rules alone saved our team hours every week. It just runs in the background.',
    name: 'James Whitfield',
    title: 'COO',
    company: 'Kiln',
    avatarBg: '#635bff',
    rating: 5,
  },
  {
    id: 'test-5',
    quote: 'Saro AI answers questions I used to dig for. It feels like a finance analyst on call.',
    name: 'Priya Raman',
    title: 'Controller',
    company: 'Mosaic AI',
    avatarBg: '#20808d',
    rating: 5,
  },
  {
    id: 'test-6',
    quote: 'Cards with built-in limits gave us control without slowing anyone down.',
    name: 'Lucas Berg',
    title: 'Founder',
    company: 'Parallel Goods',
    avatarBg: '#3f63f4',
    rating: 5,
  },
  {
    id: 'test-7',
    quote: 'The cleanest finance tool we have used. Our board reports basically build themselves.',
    name: 'Amara Osei',
    title: 'VP Finance',
    company: 'Fable Health',
    avatarBg: '#d97757',
    rating: 5,
  },
  {
    id: 'test-8',
    quote: 'FX at the real rate and instant payouts. Our vendors noticed the difference first.',
    name: 'Noah Fischer',
    title: 'Head of Ops',
    company: 'Tidewater',
    avatarBg: '#141414',
    rating: 5,
  },
  {
    id: 'test-9',
    quote: 'Budgets update as we spend, so there are no surprises at the end of the quarter.',
    name: 'Elena Rossi',
    title: 'Finance Manager',
    company: 'Brightwave',
    avatarBg: '#0052d9',
    rating: 5,
  },
  {
    id: 'test-10',
    quote: 'We switched in an afternoon. A week later nobody wanted to go back.',
    name: 'Omar Haddad',
    title: 'CEO',
    company: 'Quarry',
    avatarBg: '#262626',
    rating: 5,
  },
];

