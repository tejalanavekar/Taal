export type WorkshopStatus = 'live' | 'upcoming';

export type WorkshopLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export type WorkshopStyle =
  | 'Bollywood'
  | 'Kathak'
  | 'Fusion'
  | 'Contemporary'
  | 'Hip Hop'
  | 'Salsa';

export type Workshop = {
  id: string;
  title: string;
  instructorName: string;
  instructorInitials: string;
  avatarColor: string;
  style: WorkshopStyle;
  level: WorkshopLevel;
  status: WorkshopStatus;
  isVirtual: boolean;
  venue: string;
  city: string;
  dateLabel: string;
  priceInRupees: number;
  rating: number;
  attendingCount: number;
  attendingLabel: string;
  songs: string[];
  latitude: number;
  longitude: number;
};
