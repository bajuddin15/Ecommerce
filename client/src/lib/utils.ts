import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAvatarText = (name: string) => {
  // Bajuddin Khan => BK
  let names = name.split(" ");
  let avatarText;
  if (names.length >= 2) {
    avatarText = `${names[0][0]}${names[1][0]}`;
  } else if (names.length === 1) {
    avatarText = names[0][0];
  } else avatarText = "";

  return avatarText;
};
