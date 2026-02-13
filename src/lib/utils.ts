import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Merges Tailwind class strings while keeping conditional logic readable.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function safeParseInt(value: string | number, defaultValue: number = 0): number {
  const parsed = parseInt(value as string, 10);
  return isNaN(parsed) ? defaultValue : parsed;
}

export const fmt = (ms: number) => ms > 0 ? `${Math.floor(ms / 60000)}:${String(Math.floor((ms % 60000) / 1000)).padStart(2, "0")}` : "—";
export const fmtN = (n: number) => n >= 1e9 ? `${(n / 1e9).toFixed(1)}B` : n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(1)}K` : n > 0 ? n.toLocaleString() : "—";
