import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(price);
}

export function getTimeToDeliveryCutoff(cutoffHour = 15): {
  hours: number; minutes: number; seconds: number; expired: boolean;
} {
  const now = new Date();
  const cutoff = new Date();
  cutoff.setHours(cutoffHour, 0, 0, 0);

  if (now >= cutoff) {
    cutoff.setDate(cutoff.getDate() + 1);
  }

  const diff = cutoff.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { hours, minutes, seconds, expired: now.getHours() >= cutoffHour };
}

export function truncate(str: string, length: number): string {
  return str.length > length ? str.slice(0, length) + '…' : str;
}

export function getWhatsAppLink(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
