export enum UserRole {
  FARMER = 'Farmer',
  CONSUMER = 'Consumer',
  AGENT = 'Agent/Partner'
}

export enum Region {
  OROMIA = 'Oromia',
  AMHARA = 'Amhara',
  SNNPR = 'SNNPR',
  SIDAMA = 'Sidama',
  ADDIS_ABABA = 'Addis Ababa',
  TIGRAY = 'Tigray',
  GAMBELA = 'Gambela',
  HARARI = 'Harari',
  AFAR = 'Afar',
  DIRE_DAWA = 'Dire Dawa'
}

export interface Testimonial {
  id: string;
  name: string;
  role: UserRole;
  region: Region;
  quote: string;
  image?: string;
  date: string;
}

export interface ImpactStat {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
}
