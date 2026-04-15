export interface LoreQuote {
  id: string;
  quote: string;
  attribution: string;
  date: string;
  context?: string;
}

export const loreQuotes: LoreQuote[] = [
  {
    id: "the-discovery",
    quote:
      "after attempting to outline 10+ songs, i think the extent to which Kenny Chesney songs fit the outline format so well is pretty amazing. i didnt fully appreciate until i started trying to outline other songs.",
    attribution: "DMM",
    date: "July 17, 2010",
    context: "The Discovery",
  },
  {
    id: "the-validation",
    quote: "I feel like this is validation for what I've been saying all along.",
    attribution: "MJM",
    date: "July 17, 2010",
    context: "The Validation",
  },
  {
    id: "the-tagline",
    quote:
      "It's really true that nothing works quite like a Chesney song (or runs like a Deere)",
    attribution: "MJM",
    date: "July 17, 2010",
    context: "The Tagline",
  },
  {
    id: "the-website-idea",
    quote:
      "noice. we should create a song-diagraming website. maybe a tumblr or sumpin.",
    attribution: "BDM",
    date: "March 25, 2013",
    context: "The Website Idea",
  },
  {
    id: "the-domain-brainstorm",
    quote:
      "www.OutliningChesney.com www.DiagrammingChesney.com www.Chezney.com all available. could do www.ChezKnee.com or www.ChezKneeLand.com, in the spirit of Dada. or maybe www.Chezney.TV or even www.Dave.TV",
    attribution: "DMM",
    date: "March 25, 2013",
    context: "The Domain Brainstorm",
  },
  {
    id: "dave-tv",
    quote: "I vote for www.dave.tv",
    attribution: "MJM",
    date: "March 25, 2013",
    context: "The Domain Vote",
  },
  {
    id: "the-listeous-one",
    quote:
      "this may be the listeous of all cheznwazzle songs, which is saying a lot. Also, it should be noted that the way the vocals in the song are done, the song sounds like a laundry list of ideas. Very listevious.",
    attribution: "DMM",
    date: "May 23, 2013",
    context: "The Listeous One",
  },
  {
    id: "the-duplicate",
    quote: "Did BDM outline the Stones song not realizing I had already outlined that same song?",
    attribution: "DMM",
    date: "February 26, 2012",
    context: "The Duplicate Outline Incident",
  },
  {
    id: "the-duplicate-response",
    quote: "ww appurrently i did.",
    attribution: "BDM",
    date: "February 27, 2012",
    context: "The Duplicate Response",
  },
  {
    id: "the-sheila-forward",
    quote:
      "MJM and I were discussing how Kenny Chesney songs are always lists.. so we started keeping track of them (via outline), and that turned into outlining others.. feel free to peruse the thread",
    attribution: "DMM",
    date: "July 17, 2010",
    context: "The Origin Pitch",
  },
  {
    id: "the-yahoo-answers",
    quote: "I think Todd MOMN have been the person who aksed this question",
    attribution: "MJM",
    date: "June 16, 2013",
    context: "The Yahoo Answers Link",
  },
  {
    id: "the-last-request",
    quote: "Chesneys American Kids needs to be added here.",
    attribution: "DMM",
    date: "August 14, 2014",
    context: "The Last Known Request",
  },
];

export const timeline = [
  { year: "Jul 2010", event: "First outlines exchanged via email between friends" },
  { year: "Jul 2010", event: "The Discovery: Chesney songs are uniquely outlineable" },
  { year: "Sep 2010", event: "The Duplicate Incident: BDM outlines Paint It Black without realizing DMM already did" },
  { year: "Feb 2012", event: "DMM discovers the duplicate, 18 months later" },
  { year: "Mar 2013", event: 'BDM suggests "we should create a song-diagraming website"' },
  { year: "Mar 2013", event: "DMM checks domain availability for OutliningChesney.com" },
  { year: "May 2013", event: 'DMM outlines "Live a Little" — the listeous of all cheznwazzle songs' },
  { year: "Jun 2013", event: "MJM finds a Yahoo Answers link about Chesney songs being lists" },
  { year: "Aug 2014", event: 'Last thread message: "American Kids needs to be added here"' },
  { year: "2026", event: "The site finally launches. It was worth the wait." },
];

export const songSuggestions = [
  {
    songTitle: "American Kids",
    artist: "Kenny Chesney",
    suggestedBy: "DMM",
    date: "August 14, 2014",
    note: '"Chesneys American Kids needs to be added here." — The last message in the original thread. Unfulfilled for 12 years.',
  },
];

export const beachLoadingMessages = [
  "Removing shoes...",
  "Cracking open a cold one...",
  "Consulting the sunset...",
  "Counting bullet points...",
  "Applying sunscreen...",
  "Tuning the guitar...",
  "Checking the tide chart...",
  "Outlining the outline...",
  "Searching for flip flops...",
  "Very listevious...",
];
