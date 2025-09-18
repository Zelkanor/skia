import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const combinedSlug = (name: string, maxlen = 80): string => {
  const base = name;
  if (!base) return "untitled";
  let slug = base
    .normalize("NFKD")
    .replace(/\p{M}+/gu, "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");
  if (!slug) slug = "untitled";
  if (slug.length > maxlen) slug = slug.slice(0, maxlen);
  return slug;
};
