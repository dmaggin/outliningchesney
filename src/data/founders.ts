export interface Founder {
  id: string;
  username: string;
  displayName: string;
  email: string;
  note: string;
}

export const founders: Founder[] = [
  {
    id: "DMM",
    username: "DMM",
    displayName: "Dan Maggin",
    email: "danielmmaggin@gmail.com",
    note: "Most prolific outliner. Founder.",
  },
  {
    id: "MJM",
    username: "MJM",
    displayName: "Matt Malament",
    email: "malament@gmail.com",
    note: 'Co-founder. Coined "nothing works quite like a Chesney song."',
  },
  {
    id: "BDM",
    username: "BDM",
    displayName: "Ben Maggin",
    email: "benmaggin@gmail.com",
    note: "Proposed creating the website. Duplicate outliner.",
  },
  {
    id: "EDS",
    username: "EDS",
    displayName: "Edward Silva",
    email: "edwardsilva@gmail.com",
    note: "Original thread member. Silent contributor.",
  },
  {
    id: "TDH",
    username: "TDH",
    displayName: "Todd Hutner",
    email: "toddhutner@gmail.com",
    note: "Original thread member. Suspected Yahoo Answers poster.",
  },
];

export function getFounder(id: string): Founder | undefined {
  return founders.find((f) => f.id === id);
}
