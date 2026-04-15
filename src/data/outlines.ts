export interface OutlineNode {
  text: string;
  children?: OutlineNode[];
}

export interface Outline {
  slug: string;
  songTitle: string;
  artist: string;
  contributorId: string;
  date: string; // ISO date from original email
  isChesney: boolean;
  editorialNote?: string;
  isDuplicate?: boolean;
  duplicateOf?: string;
  lyricWordCount: number; // approximate word count of the full song lyrics
  content: OutlineNode[];
}

export const outlines: Outline[] = [
  {
    slug: "back-where-i-come-from-kenny-chesney",
    songTitle: "Back Where I Come From",
    artist: "Kenny Chesney",
    contributorId: "MJM",
    date: "2010-07-15",
    isChesney: true,
    lyricWordCount: 270,
    content: [
      {
        text: "In the town where I was raised...",
        children: [
          { text: "Clock ticks" },
          { text: "Cattle graze" },
          { text: "Time passed with amazing grace" },
          {
            text: "You can...",
            children: [
              { text: "Lie on a riverbank" },
              { text: "Paint your name on a water tank" },
              { text: "Miscount all the beers you drank" },
            ],
          },
          {
            text: "We learned...",
            children: [
              { text: "[In Sunday school] Who made the sun shine through" },
              { text: "Who made the moonshine" },
            ],
          },
          {
            text: "[Thing you could find there]",
            children: [
              { text: "Blue eyes on a Saturday night" },
              { text: "Tan legs in broad daylight" },
              { text: "Black and white TVs" },
            ],
          },
        ],
      },
      {
        text: "Some say...",
        children: [
          { text: "It's a backwards place" },
          {
            text: "Narrow",
            children: [{ text: "Minds" }, { text: "Way" }],
          },
        ],
      },
    ],
  },
  {
    slug: "boys-of-fall-kenny-chesney",
    songTitle: "Boys of Fall",
    artist: "Kenny Chesney",
    contributorId: "DMM",
    date: "2010-07-15",
    isChesney: true,
    lyricWordCount: 350,
    content: [
      {
        text: "I",
        children: [
          { text: "Feel that chill" },
          { text: "Smell that grass" },
          {
            text: "Am",
            children: [
              {
                text: "In my",
                children: [
                  { text: "Helmet" },
                  { text: "Cleats" },
                  { text: "Shoulder pads" },
                ],
              },
              { text: "Standing in the huddle" },
            ],
          },
        ],
      },
      {
        text: "Took every ounce of",
        children: [
          { text: "Heart" },
          { text: "Sweat" },
          { text: "Blood" },
        ],
      },
      {
        text: "[Chorus] It's",
        children: [
          { text: "Turn and face the flag" },
          { text: "Fighting back butterflies" },
          { text: "Call it in the air" },
          { text: "Knocking heads" },
          { text: "Talking trash" },
          {
            text: "Slinging",
            children: [
              { text: "Mud" },
              { text: "Dirt" },
              { text: "Grass" },
            ],
          },
          {
            text: "I got your",
            children: [{ text: "number" }, { text: "back" }],
          },
        ],
      },
    ],
  },
  {
    slug: "keg-in-the-closet-kenny-chesney",
    songTitle: "Keg in the Closet",
    artist: "Kenny Chesney",
    contributorId: "MJM",
    date: "2010-07-15",
    isChesney: true,
    lyricWordCount: 300,
    content: [
      {
        text: "We had a...",
        children: [
          {
            text: "Dog",
            children: [
              { text: "Named Bocephus" },
              { text: "Lived in front yard" },
              { text: "Liked sleeping on top of car" },
              { text: "Drank beer from mason jar" },
              { text: "Would climb up into beds" },
            ],
          },
          {
            text: "House",
            children: [
              { text: "White frame" },
              { text: "Located in college town" },
              { text: "No real problems we needed to drown" },
            ],
          },
        ],
      },
      {
        text: "[Chorus] We also had...",
        children: [
          { text: "Keg in closet" },
          {
            text: "Pizza",
            children: [
              { text: "On floor" },
              { text: "Left over from night before" },
            ],
          },
        ],
      },
      {
        text: "I was taught about",
        children: [
          { text: "How to score" },
          { text: "By this old guitar" },
          { text: "On Lambda Chi porch" },
          { text: "Wanting what you can't have" },
        ],
      },
      {
        text: "Activities we engaged in",
        children: [
          { text: "Wearing sweatshirts" },
          { text: "Playing flag football" },
          { text: "Spring break in Panama" },
        ],
      },
    ],
  },
  {
    slug: "living-in-fast-forward-kenny-chesney",
    songTitle: "Living In Fast Forward",
    artist: "Kenny Chesney",
    contributorId: "DMM",
    date: "2010-07-15",
    isChesney: true,
    lyricWordCount: 280,
    content: [
      {
        text: "My body",
        children: [
          { text: "is a temple, we are told" },
          {
            text: "has been treated like/to",
            children: [
              { text: "an old honky tonk" },
              { text: "greasy cheeseburgers" },
              { text: "cheap cigarettes" },
            ],
          },
        ],
      },
      {
        text: "[Chorus] I'm living",
        children: [
          { text: "in fast forward" },
          { text: "(like) a hillbilly rock star" },
          { text: "out of control" },
        ],
      },
      {
        text: "My friends all",
        children: [
          { text: "grew up" },
          { text: "settled down" },
          { text: "bought houses" },
          { text: "work in their office" },
          { text: "drive SUVs" },
          { text: "pray for their babies" },
          { text: "worry about me" },
        ],
      },
      { text: "[Chorus]" },
      {
        text: "I'm always",
        children: [{ text: "runnin'" }, { text: "son of a gunnin'" }],
      },
      {
        text: "I've had a good time but it's time that I toned it down",
        children: [{ text: "a notch" }, { text: "or two" }],
      },
      { text: "[Chorus]" },
      { text: "[Chorus]" },
      {
        text: "Yeah, I",
        children: [
          { text: "need to rewind real slow" },
          { text: "still got some miles to go" },
        ],
      },
    ],
  },
  {
    slug: "no-shoes-no-shirt-no-problems-kenny-chesney",
    songTitle: "No Shoes, No Shirt, No Problems",
    artist: "Kenny Chesney",
    contributorId: "MJM",
    date: "2010-07-15",
    isChesney: true,
    lyricWordCount: 250,
    content: [
      {
        text: "I've been",
        children: [
          { text: "Up to my neck" },
          { text: "Working 6 days a week" },
          { text: "Wearin holes in the soles of the shoes of my feet" },
          { text: "Been dreamin of gettin away" },
        ],
      },
      {
        text: "[Chorus] No",
        children: [
          { text: "shoes" },
          { text: "shirt" },
          { text: "problems" },
        ],
      },
      {
        text: "[Things I imagine having]",
        children: [
          { text: "sun" },
          { text: "sand" },
          {
            text: "drink",
            children: [
              { text: "in my hand" },
              { text: "with no bottom" },
            ],
          },
        ],
      },
      {
        text: "I want",
        children: [
          { text: "towel on a chair" },
          { text: "sand by the sea" },
          { text: "see you here with me" },
          { text: "soak up life for a while" },
        ],
      },
      {
        text: "No",
        children: [
          { text: "boss" },
          { text: "clock" },
          { text: "stress" },
          { text: "dress code" },
        ],
      },
      {
        text: "Packing list",
        children: [
          { text: "tops" },
          { text: "flip flops (if you got em)" },
        ],
      },
    ],
  },
  {
    slug: "i-go-back-kenny-chesney",
    songTitle: "I Go Back",
    artist: "Kenny Chesney",
    contributorId: "DMM",
    date: "2010-07-17",
    isChesney: true,
    lyricWordCount: 320,
    content: [
      {
        text: '"Jack and Diane"',
        children: [
          {
            text: "painted a picture of",
            children: [{ text: "my life" }, { text: "my dreams" }],
          },
          { text: "enabled me to make sense of this crazy world" },
          {
            text: "is the song I couldn't help but sing along to today",
          },
          {
            text: "and, in fact, every time I hear that song I go back to (a)",
            children: [
              {
                text: "Chevy",
                children: [
                  { text: "two-toned" },
                  { text: "short bed" },
                  { text: "that drove my first love to the levy" },
                ],
              },
              { text: "livin life with no sense of time" },
              { text: "the feel of the fifty yard line" },
              {
                text: "a blanket",
                children: [
                  { text: "a girl" },
                  { text: "some raspberry wine" },
                ],
              },
              { text: "wishin time would stop right in its tracks" },
            ],
          },
        ],
      },
      {
        text: "I used to",
        children: [
          {
            text: 'Rock all night long to "Keep on Rockin Me Baby"',
          },
          { text: "Frat parties" },
          { text: "college bars" },
          { text: "tryin to impress the ladies" },
          {
            text: "every time I hear that song I go back to",
            children: [
              { text: "the smell of an old gym floor" },
              {
                text: "the taste of salt on the Carolina shore after graduation",
              },
              { text: "drinking goodbye to friends" },
              { text: "watchin summer fade to fall" },
              { text: "growing up too fast" },
              { text: "wishin time would stop right in its tracks" },
            ],
          },
        ],
      },
      {
        text: "We all have a song that somehow stamped our lives and takes us to",
        children: [
          { text: "another place" },
          {
            text: "another time",
          },
          {
            text: "so I go back to a",
            children: [
              { text: "pew" },
              { text: "preacher" },
              {
                text: "choir singing about",
                children: [
                  { text: "god" },
                  { text: "brimstone" },
                  { text: "fire" },
                ],
              },
              { text: "smell of sunday chicken after church" },
              {
                text: "loss of a real good friend",
                children: [
                  { text: "sixteen years I shared with him" },
                ],
              },
            ],
          },
        ],
      },
      {
        text: 'Now "Only the Good Die Young" stops me in my tracks',
      },
      {
        text: "Every time I hear that song, I go back to (stuff previously mentioned)",
      },
    ],
  },
  {
    slug: "live-a-little-kenny-chesney",
    songTitle: "Live a Little",
    artist: "Kenny Chesney",
    contributorId: "DMM",
    date: "2013-05-23",
    isChesney: true,
    lyricWordCount: 290,
    editorialNote:
      'Dan called this "the listeous of all cheznwazzle songs, which is saying a lot. Also, it should be noted that the way the vocals in the song are done, the song sounds like a laundry list of ideas. Very listevious."',
    content: [
      {
        text: "[I am]",
        children: [
          { text: "Stressed Out" },
          { text: "Running Late" },
          { text: "Racing down the interstate" },
          { text: "Spilled Hot coffee" },
        ],
      },
      {
        text: "It's",
        children: [
          { text: "Work" },
          { text: "Work" },
          { text: "Pay the rent" },
          { text: "Spend money" },
          { text: "Spend time" },
        ],
      },
      { text: "Been going like nothing can wait" },
      { text: "I gotta get my priorities straight" },
      {
        text: "I need to (CHORUS)",
        children: [
          { text: "Live a little" },
          { text: "Have some fun" },
          { text: "Take some time" },
          { text: "Waste it on number one" },
          { text: "Find a girl" },
          { text: "Live a little" },
          { text: "Love a lot" },
        ],
      },
      {
        text: "[On] Friday night",
        children: [
          { text: "Here we go" },
          { text: "Do a little do-si-do" },
          { text: "Kick back" },
          { text: "Have a laugh" },
          { text: "Catch my breath" },
          { text: "Tell the band slow it down" },
        ],
      },
      { text: "CHORUS" },
      {
        text: "[I need to]",
        children: [
          { text: "Step back" },
          { text: "Smell the rose" },
          { text: "Feel the sand between your toes" },
          { text: "Unplug" },
          { text: "Unwind" },
          { text: "Step out in the sunshine" },
        ],
      },
      { text: "CHORUS" },
    ],
  },
  {
    slug: "paint-it-black-rolling-stones-dmm",
    songTitle: "Paint It Black",
    artist: "The Rolling Stones",
    contributorId: "DMM",
    date: "2010-07-17",
    isChesney: false,
    lyricWordCount: 160,
    editorialNote:
      'Dan acknowledged "that last one didn\'t work as well as I thought it might." Then Ben ALSO outlined Paint It Black months later without realizing Dan had already done it. Dan noticed 18 months later: "Did BDM outline the Stones song not realizing I had already outlined that same song?" Ben replied: "ww appurrently i did."',
    isDuplicate: true,
    duplicateOf: "paint-it-black-rolling-stones-bdm",
    content: [
      {
        text: "I see",
        children: [
          { text: "a red door" },
          { text: "girls walk by dressed in their summer clothes" },
          { text: "a line of cars and they're all painted black" },
          { text: "people turn their heads and quickly look away" },
          {
            text: "inside myself",
            children: [
              { text: "my heart is black" },
              { text: "my red door" },
            ],
          },
        ],
      },
      {
        text: "I want",
        children: [
          { text: "paint non-black stuff black" },
          { text: "no colors" },
          { text: "colors to turn black" },
        ],
      },
      {
        text: "to see (it)",
        children: [
          { text: "painted black" },
          { text: "painted black" },
          {
            text: "(painted) black as",
            children: [
              { text: "night" },
              { text: "coal" },
              { text: "the sun blotted out from the sky" },
            ],
          },
        ],
      },
      {
        text: "painted",
        children: [
          { text: "painted" },
          { text: "painted" },
          { text: "painted black" },
        ],
      },
      {
        text: "I have",
        children: [
          { text: "to turn my head until my darkness goes" },
        ],
      },
    ],
  },
  {
    slug: "paint-it-black-rolling-stones-bdm",
    songTitle: "Paint It Black",
    artist: "The Rolling Stones",
    contributorId: "BDM",
    date: "2010-09-04",
    isChesney: false,
    lyricWordCount: 160,
    editorialNote:
      "The duplicate! Ben independently outlined the same song two months later without realizing Dan had already done it. Great minds think alike.",
    isDuplicate: true,
    duplicateOf: "paint-it-black-rolling-stones-dmm",
    content: [
      {
        text: "I see",
        children: [
          { text: "A red door" },
          { text: "The girls walk by dressed in their summer clothes" },
        ],
      },
      {
        text: "I want",
        children: [
          { text: "It painted black" },
          { text: "No colors anymore" },
          { text: "Them to turn black" },
        ],
      },
      {
        text: "I see",
        children: [
          { text: "A line of cars" },
          { text: "Painted black" },
          {
            text: "With",
            children: [
              { text: "flowers" },
              { text: "my love" },
              { text: "(both never to come back)" },
            ],
          },
        ],
      },
      { text: "People turn their heads and quickly look away" },
      {
        text: "I",
        children: [
          { text: "Look inside myself" },
          {
            text: "See",
            children: [
              { text: "My heart is black" },
              { text: "My red door and it has been painted black" },
            ],
          },
          { text: "A red door" },
          { text: "The girls walk by dressed in their summer clothes" },
        ],
      },
      {
        text: "I want",
        children: [
          { text: "It painted black" },
          { text: "No colors anymore" },
          { text: "Them to turn black" },
        ],
      },
      {
        text: "To see",
        children: [
          {
            text: "It painted black as",
            children: [
              { text: "Night" },
              { text: "Coal" },
              { text: "The sun blotted out from the sky" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "eat-it-weird-al-yankovic",
    songTitle: "Eat It",
    artist: "Weird Al Yankovic",
    contributorId: "DMM",
    date: "2010-07-17",
    isChesney: false,
    lyricWordCount: 220,
    editorialNote:
      'Dan prefaced this with "I also looked into doing some weird al songs and they didn\'t seem to work either for the most part. I think this one might be ok." The outline is long and repetitive (lots of "eat it" lines) — which itself is the joke.',
    content: [
      {
        text: "How come you",
        children: [
          { text: "are always such a fussy young man" },
          { text: "don't want no captain crunch" },
          { text: "don't want no raisin bran" },
          { text: "don't know that kids are starving in Japan" },
        ],
      },
      {
        text: "So",
        children: [{ text: "eat it" }, { text: "just eat it" }],
      },
      {
        text: "I don't want to",
        children: [
          { text: "argue" },
          { text: "debate" },
          { text: "hear about what kind of food you hate" },
          {
            text: "give you dessert until you clean off your plate",
          },
        ],
      },
      {
        text: "So",
        children: [
          { text: "eat it" },
          { text: "don't tell me you're full" },
          { text: "just eat it" },
          { text: "eat it" },
          { text: "eat it" },
          { text: "get yourself an egg and beat it" },
        ],
      },
      {
        text: "Have some more",
        children: [
          { text: "chicken" },
          {
            text: "pie (that is either)",
            children: [{ text: "broiled" }, { text: "fried" }],
          },
          { text: "just eat it (x12)" },
        ],
      },
      {
        text: "You're",
        children: [
          { text: "table manners are a cryin shame" },
          { text: "playin with your food like it's some kind of game" },
        ],
      },
      {
        text: "If you starve to death you will only have yourself to blame",
      },
      {
        text: "So",
        children: [
          { text: "eat it" },
          { text: "just eat it" },
          { text: "(burp)" },
        ],
      },
      {
        text: "You",
        children: [
          {
            text: "better",
            children: [
              { text: "listen" },
              { text: "do what you're told" },
            ],
          },
          { text: "haven't even touched your tuna casserole" },
          { text: "better chow down or it's gonna get cold" },
        ],
      },
      {
        text: "So eat it, I don't care if you're full just",
        children: [
          { text: "eat it (x4)" },
        ],
      },
      {
        text: "Your mouth",
        children: [{ text: "open it" }, { text: "feed it" }],
      },
      {
        text: "Have some more",
        children: [
          { text: "yogurt" },
          {
            text: "spam (whether it is)",
            children: [{ text: "fresh" }, { text: "canned" }],
          },
        ],
      },
      { text: "Just eat it (x12)" },
      { text: "If it's gettin cold reheat it" },
      {
        text: "Have",
        children: [
          { text: "a big dinner" },
          { text: "a light snack" },
          { text: "you must eat it even if you do not like it" },
        ],
      },
      {
        text: "Just eat it (x4, woohoo)",
        children: [{ text: "get yourself an egg and beat it" }],
      },
    ],
  },
  {
    slug: "its-my-life-bon-jovi",
    songTitle: "It's My Life",
    artist: "Bon Jovi",
    contributorId: "MJM",
    date: "2010-07-17",
    isChesney: false,
    lyricWordCount: 230,
    editorialNote:
      'Matt\'s attempt at a non-Chesney outline. He commented afterward: "It\'s really true that nothing works quite like a Chesney song (or runs like a Deere)."',
    content: [
      {
        text: "This ain't",
        children: [
          { text: "A song for the broken-hearted" },
          { text: "A silent prayer for faith departed" },
        ],
      },
      {
        text: "[Things about to happen]",
        children: [
          { text: "I ain't gonna be just a face in the crowd" },
          { text: "You're gonna hear my voice" },
        ],
      },
      {
        text: "It's",
        children: [
          { text: "My life" },
          { text: "Now or never" },
        ],
      },
      {
        text: "I",
        children: [
          { text: "Ain't gonna live forever" },
          { text: "Just wanna live while I'm alive" },
        ],
      },
      {
        text: "This is for",
        children: [
          { text: "Those who stood their ground" },
          { text: "Tommy and Gina, who never backed down" },
        ],
      },
    ],
  },
  {
    slug: "world-leader-pretend-rem",
    songTitle: "World Leader Pretend",
    artist: "R.E.M.",
    contributorId: "DMM",
    date: "2010-07-17",
    isChesney: false,
    lyricWordCount: 200,
    editorialNote:
      'Dan called this "probably one of the more outlinable REM songs" and noted it would be "interesting to note the average length of various outlines."',
    content: [
      {
        text: "I",
        children: [
          { text: "sit at my table" },
          { text: "wage war on myself" },
          { text: "It seems like it's all for nothing" },
        ],
      },
      {
        text: "I know",
        children: [
          { text: "the barricades" },
          { text: "the mortar in the wall breaks" },
        ],
      },
      {
        text: "Weapons",
        children: [
          { text: "I recognize them" },
          { text: "used them well" },
        ],
      },
      {
        text: "Regarding my mistake",
        children: [
          { text: "it is mine" },
          { text: "let me make it good" },
        ],
      },
      {
        text: "I",
        children: [
          {
            text: "have a rich understanding of my finest defenses",
          },
          { text: "proclaim that claims are left unstated" },
          { text: "demand a rematch" },
          { text: "decree a stalemate" },
          { text: "divine my deeper motives" },
          {
            text: "recognize the weapons",
            children: [
              { text: "have practiced them well" },
              { text: "fitted them myself" },
            ],
          },
        ],
      },
      {
        text: "It's amazing what devices you can",
        children: [{ text: "sympathize" }, { text: "empathize" }],
      },
      {
        text: "Regarding my mistake",
        children: [
          { text: "it is mine" },
          { text: "let me make it good" },
        ],
      },
      {
        text: "(What you should do)",
        children: [
          { text: "Reach out to me" },
          { text: "Hold me tight" },
          { text: "Hold that memory" },
          { text: "let my machine talk to me (x2)" },
        ],
      },
      {
        text: "This is/I am",
        children: [
          { text: "my world" },
          { text: "world leader pretend" },
          { text: "my life" },
          { text: "my time" },
        ],
      },
      {
        text: "I have been given the freedom to do as I see fit",
      },
      {
        text: "It's high time I've razed the walls that I've constructed",
      },
      {
        text: "You fill in",
        children: [
          { text: "the mortar" },
          { text: "the harmony" },
          { text: "the mortar" },
        ],
      },
      {
        text: "I raised the wall; I'm the only one; I will be the one to knock it down",
      },
    ],
  },
  {
    slug: "a-little-more-country-than-that-easton-corbin",
    songTitle: "A Little More Country Than That",
    artist: "Easton Corbin",
    contributorId: "DMM",
    date: "2010-07-17",
    isChesney: false,
    lyricWordCount: 290,
    content: [
      {
        text: "I am more country than",
        children: [
          {
            text: "a dirt road",
            children: [
              { text: "full of pot holes" },
              { text: "with a creek bank" },
              { text: "and some cane poles catching channel cat" },
            ],
          },
          {
            text: "a small town",
            children: [
              { text: "with a courthouse" },
              { text: "with an old hound laying out front" },
              { text: "with old men chewing fat" },
            ],
          },
        ],
      },
      {
        text: "[Chorus] I just want to make sure you know just who you're getting under this old hat, cause girl I'm not the kind to",
        children: [
          { text: "two time" },
          {
            text: "play games behind your back (as I am more country than that)",
          },
        ],
      },
      {
        text: "I am more country than",
        children: [
          {
            text: "a hank song",
            children: [
              { text: "from days done" },
              {
                text: "with a steel ride",
                children: [
                  { text: "that is strong" },
                  { text: "that sends chills up your back" },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "You are way off track if you want",
        children: [
          {
            text: "a brick home",
            children: [
              { text: "in a school zone" },
              { text: "with doors locked" },
              { text: "and alarms on" },
            ],
          },
        ],
      },
      {
        text: "I'm sure you have heard those three words",
        children: [
          { text: "from others before" },
          { text: "but they fell flat" },
        ],
      },
      {
        text: "This ring isn't something that I mean to",
        children: [
          { text: "give you" },
          {
            text: "and then take back (as I am a little more country than that)",
          },
        ],
      },
    ],
  },
];

// Helper to count total bullet points in an outline
function countNodes(nodes: OutlineNode[]): number {
  let count = 0;
  for (const node of nodes) {
    count += 1;
    if (node.children) {
      count += countNodes(node.children);
    }
  }
  return count;
}

// Helper to get max depth of an outline
function maxDepth(nodes: OutlineNode[], depth = 1): number {
  let max = depth;
  for (const node of nodes) {
    if (node.children) {
      const childDepth = maxDepth(node.children, depth + 1);
      if (childDepth > max) max = childDepth;
    }
  }
  return max;
}

// Count total words across all bullets
function countOutlineWords(nodes: OutlineNode[]): number {
  let count = 0;
  for (const node of nodes) {
    count += node.text.split(/\s+/).filter(Boolean).length;
    if (node.children) {
      count += countOutlineWords(node.children);
    }
  }
  return count;
}

// Average words per bullet
function avgWordsPerBullet(nodes: OutlineNode[]): number {
  const total = countNodes(nodes);
  const words = countOutlineWords(nodes);
  return total > 0 ? words / total : 0;
}

// Get children counts for top-level nodes (regularity check)
function getChildCounts(nodes: OutlineNode[]): number[] {
  return nodes.map((n) => (n.children ? n.children.length : 0));
}

/**
 * Listevious Rating — how outlineable is this song?
 *
 * The thesis: the most outlineable song is SIMPLE and FORMULAIC.
 * It compresses into few bullets, has shallow clean structure
 * (a few top-level items, each with a handful of sub-items),
 * and uses short punchy bullet text.
 *
 * Three components (each scored 0-10, weighted average):
 *
 * 1. BREVITY (30%) — how punchy are the bullets?
 *    Fewer avg words per bullet = higher score.
 *
 * 2. SIMPLICITY (35%) — how clean and flat is the structure?
 *    Ideal: depth 2 (top items + sub-items), evenly distributed.
 *    Deeper nesting = more complex = LESS outlineable.
 *    The perfect Chesney outline: A(4 subs), B(4 subs), Chorus, repeat.
 *
 * 3. COMPRESSION (35%) — how efficiently does the outline capture the song?
 *    FEWER bullets per lyric word = better. The song compresses into less.
 *    If you need tons of bullets, the song isn't really that outlineable.
 */
export function getListeviousRating(outline: Outline): {
  score: number;
  brevity: number;
  simplicity: number;
  compression: number;
  label: string;
} {
  const bullets = countNodes(outline.content);
  const depth = maxDepth(outline.content);
  const avgWpb = avgWordsPerBullet(outline.content);
  const topLevel = outline.content.length;
  const childCounts = getChildCounts(outline.content);

  // BREVITY: avg words per bullet. 1-2 words = 10, 8+ words = 1
  const brevity = Math.max(1, Math.min(10,
    10 - ((avgWpb - 1.5) * 1.3)
  ));

  // SIMPLICITY: shallow + regular structure scores highest
  // Depth scoring: 2 is ideal (10), 3 is ok (6), 1 is flat (4), 4+ is complex (2)
  let depthScore: number;
  if (depth === 2) depthScore = 10;
  else if (depth === 3) depthScore = 6;
  else if (depth === 1) depthScore = 4;
  else depthScore = Math.max(1, 4 - (depth - 3) * 2);

  // Regularity bonus: how evenly are children distributed?
  // Low std deviation of children per top-level node = formulaic
  const avgChildren = childCounts.length > 0
    ? childCounts.reduce((a, b) => a + b, 0) / childCounts.length
    : 0;
  const variance = childCounts.length > 0
    ? childCounts.reduce((sum, c) => sum + (c - avgChildren) ** 2, 0) / childCounts.length
    : 0;
  const stdDev = Math.sqrt(variance);
  // stdDev 0-1 = very regular (+2), stdDev 3+ = irregular (+0)
  const regularityBonus = Math.max(0, Math.min(2, 2 - stdDev * 0.7));

  // Top-level count bonus: 3-8 top-level items is ideal (clean sections)
  const topBonus = (topLevel >= 3 && topLevel <= 8) ? 1 : 0;

  const simplicity = Math.max(1, Math.min(10, depthScore + regularityBonus + topBonus));

  // COMPRESSION: lyric words per bullet. MORE words per bullet = better compression.
  // The song captures more meaning per bullet point.
  const wordsPerBullet = outline.lyricWordCount > 0
    ? outline.lyricWordCount / bullets
    : 0;
  // 15+ words/bullet = 10 (amazing compression)
  // 10 words/bullet = 7
  // 5 words/bullet = 4
  // 3 words/bullet = 2
  const compression = Math.max(1, Math.min(10,
    wordsPerBullet * 0.65
  ));

  // Apply Chesney multiplier: Chesney songs get a 1.2x boost,
  // non-Chesney songs get a 1/1.2 penalty. The thesis is that
  // Chesney songs are inherently more outlineable.
  const multiplier = outline.isChesney ? 1.2 : 1;

  const adjBrevity = Math.min(10, brevity > 0 ? brevity * multiplier : 0);
  const adjSimplicity = Math.min(10, simplicity > 0 ? simplicity * multiplier : 0);
  const adjCompression = Math.min(10, compression > 0 ? compression * multiplier : 0);

  const score = (adjBrevity * 0.30 + adjSimplicity * 0.35 + adjCompression * 0.35);

  let label: string;
  if (score >= 8) label = "Way Too Many Listevious";
  else if (score >= 6.5) label = "Very Listevious";
  else if (score >= 5) label = "Listevious";
  else if (score >= 3.5) label = "Somewhat Listevious";
  else if (score >= 2) label = "Barely Listevious";
  else label = "Un-Listevious";

  return {
    score: Math.round(Math.min(10, score) * 10) / 10,
    brevity: Math.round(adjBrevity * 10) / 10,
    simplicity: Math.round(adjSimplicity * 10) / 10,
    compression: Math.round(adjCompression * 10) / 10,
    label,
  };
}

export function getOutlineStats(outline: Outline) {
  return {
    bulletCount: countNodes(outline.content),
    maxDepth: maxDepth(outline.content),
  };
}

export function getOutlineBySlug(slug: string): Outline | undefined {
  return outlines.find((o) => o.slug === slug);
}

export function getChesneyOutlines(): Outline[] {
  return outlines.filter((o) => o.isChesney);
}

export function getNonChesneyOutlines(): Outline[] {
  return outlines.filter((o) => !o.isChesney);
}

export function getOutlinesByContributor(id: string): Outline[] {
  return outlines.filter((o) => o.contributorId === id);
}

export function getUniqueArtists(): { name: string; count: number; isChesney: boolean }[] {
  const artistMap = new Map<string, number>();
  for (const o of outlines) {
    artistMap.set(o.artist, (artistMap.get(o.artist) || 0) + 1);
  }
  return Array.from(artistMap.entries())
    .map(([name, count]) => ({
      name,
      count,
      isChesney: name === "Kenny Chesney",
    }))
    .sort((a, b) => b.count - a.count);
}
