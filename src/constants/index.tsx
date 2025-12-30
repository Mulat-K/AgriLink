import { Testimonial, UserRole, Region, ImpactStat, Founder } from '@/types';
import AbebeImg from '@/assets/abebe.png';
import SelamawitImg from '@/assets/selamawit.png';
import KassaImg from '@/assets/kassa.png';
import MartaImg from '@/assets/marta.png';

import DawitImg from '@/assets/Mulatie.png';
import LiyaImg from '@/assets/Desta.png';


export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Abebe Bikila',
    role: UserRole.FARMER,
    region: Region.OROMIA,
    quote: 'Since joining AgriLink, I no longer worry about finding buyers for my teff. The prices are fair and transparent, aligned with what the government suggests.',
    image: AbebeImg,
    date: '2024-03-15',
  },
  {
    id: '2',
    name: 'Selamawit Tadesse',
    role: UserRole.CONSUMER,
    region: Region.ADDIS_ABABA,
    quote: 'The quality of vegetables I get for my family has improved significantly. It feels good knowing that my money goes directly to the hardworking farmers.',
    image: SelamawitImg,
    date: '2024-03-10',
  },
  {
    id: '3',
    name: 'Kassa Hunegnaw',
    role: UserRole.AGENT,
    region: Region.AMHARA,
    quote: 'AgriLink has streamlined our logistics. We now have a predictable schedule for pickups, which has reduced post-harvest waste by nearly 30%.',
    image: KassaImg,
    date: '2024-02-28',
  },
  {
    id: '4',
    name: 'Marta Hailu',
    role: UserRole.FARMER,
    region: Region.SIDAMA,
    quote: 'Being able to track the market price through the AgriLink agent has changed how I plan my harvests. I feel empowered as a female farmer.',
    image: MartaImg,
    date: '2024-03-20',
  },
];


export const IMPACT_STATS: ImpactStat[] = [
  {
    label: 'Farmers Empowered',
    value: '5,000+',
    description: 'Smallholders directly connected to urban markets.',
    icon: 'users'
  },
  {
    label: 'Waste Reduction',
    value: '35%',
    description: 'Decrease in post-harvest losses across our supply chain.',
    icon: 'leaf'
  },
  {
    label: 'Income Growth',
    value: '22%',
    description: 'Average increase in net income for participating farmers.',
    icon: 'trending-up'
  },
  {
    label: 'Cities Served',
    value: '1',
    description: 'Addis Ababa first, expanding to more urban centers soon.',
    icon: 'map-pin'
  }
];

export const FOUNDERS: Founder[] = [
  {
    name: 'Mulatie Kindie',
    role: 'CEO & Co-Founder',
    bio: 'Software Engineer and entrepreneur leading AgriLink’s strategic vision and business growth. Mulatie oversees product direction, partnerships, and market expansion, ensuring that AgriLink’s technology-driven platform effectively connects smallholder farmers directly with urban consumers, promotes fair pricing, and strengthens Ethiopia’s agricultural value chain.',
    image: DawitImg,
  },
  {
    name: 'Desta Equar',
    role: 'CTO & Co-Founder',
    bio: 'Software Engineer and entrepreneur responsible for AgriLink’s technology architecture and digital infrastructure. Desta leads platform development, data systems, and scalability, building secure and reliable solutions that enable transparent farm-to-consumer commerce and support AgriLink’s mission to modernize agricultural trade in Ethiopia.',
    image: LiyaImg,
  },
];


