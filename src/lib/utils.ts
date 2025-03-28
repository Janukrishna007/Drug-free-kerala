import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Generate a unique certificate ID with a specified prefix
export function generateCertificateId(prefix: string = 'DFK'): string {
  // Get current timestamp
  const timestamp = Date.now().toString().slice(-8);
  
  // Generate a random 4-character alphanumeric string
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let randomStr = '';
  
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomStr += characters.charAt(randomIndex);
  }
  
  // Combine prefix, timestamp, and random string with hyphens
  return `${prefix}-${timestamp}-${randomStr}`;
}
