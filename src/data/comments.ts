export interface Comment {
  id: number;
  outlineSlug?: string; // which outline it's about (optional — could be general)
  songTitle?: string;
  author: string;
  date: string; // MM/DD/YY
  type: "comment" | "edit-suggestion";
  content: string;
}

// Add approved comments here. When a submission comes in via Netlify Forms,
// review it and add it to this array to make it public.
export const comments: Comment[] = [
  // Example:
  // {
  //   id: 1,
  //   outlineSlug: "keg-in-the-closet-kenny-chesney",
  //   songTitle: "Keg in the Closet",
  //   author: "MJM",
  //   date: "04/15/26",
  //   type: "comment",
  //   content: "The dog section is the most outlineable part of any Chesney song ever.",
  // },
];
