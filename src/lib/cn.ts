export type ClassValue = string | false | null | undefined;

/** Join conditional class names. Components never emit two classes that set the
 *  same CSS property — state variants are resolved in JS before they reach the
 *  class list — so a merge step (tailwind-merge) is not needed here. */
export function cn(...parts: ClassValue[]): string {
  return parts.filter(Boolean).join(" ");
}
