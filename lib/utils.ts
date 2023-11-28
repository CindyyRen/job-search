import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchLocation1 = async () => {
  try {
    const response = await fetch(
      'https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66'
    );
    const result = await response.json();
    console.log(result.country.name);
  } catch (error) {
    return 'error';
  }
};
