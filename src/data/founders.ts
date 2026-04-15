export interface Founder {
  id: string;
  username: string;
  displayName: string;
  note: string;
}

export const founders: Founder[] = [
  {
    id: "DMM",
    username: "DMM",
    displayName: "DMM",
    note: "Most prolific outliner. Founder.",
  },
  {
    id: "MJM",
    username: "MJM",
    displayName: "MJM",
    note: 'Co-founder. Coined "nothing works quite like a Chesney song."',
  },
  {
    id: "BDM",
    username: "BDM",
    displayName: "BDM",
    note: "Proposed creating the website. Duplicate outliner.",
  },
  {
    id: "EDS",
    username: "EDS",
    displayName: "EDS",
    note: "Original thread member. Silent contributor.",
  },
  {
    id: "TDH",
    username: "TDH",
    displayName: "TDH",
    note: "Original thread member. Suspected Yahoo Answers poster.",
  },
];

export function getFounder(id: string): Founder | undefined {
  return founders.find((f) => f.id === id);
}
