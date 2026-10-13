import { Workshop } from '@/types/workshop';

export function getActionLabel(workshop: Workshop): string {
  if (workshop.status === 'live') {
    return workshop.isVirtual ? 'Join Free' : 'Join Now';
  }
  return 'Book';
}

export function getStatusLabel(workshop: Workshop): string {
  return workshop.status === 'live' ? 'LIVE' : 'UPCOMING';
}

export function getSongsLine(workshop: Workshop): string {
  const [first, second, ...rest] = workshop.songs;
  const shown = [first, second].filter(Boolean).join(' · ');
  return rest.length > 0 ? `${shown} +${rest.length} more` : shown;
}
