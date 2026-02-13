import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Merges Tailwind class strings while keeping conditional logic readable.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
