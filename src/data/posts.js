export const posts = [
  {
    id: 1,
    category: "Slow living",
    date: "October 24, 2026",
    readTime: "6 min read",
    title: "The quiet architecture of a good morning",
    excerpt: "On small rituals, open windows, and making room for the day before it begins.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A warm, sunlit studio with a desk and green plants",
    featured: true,
    body: [
      "Before the messages arrive and the day starts asking things of us, there is a small pocket of possibility. Morning has always felt less like a time of day and more like a room we can choose how to enter.",
      "Mine begins with the kettle. While the water warms, I open the window, even in winter. The air changes the room; the room changes the way I feel inside it. Nothing remarkable happens. That is, I think, the point.",
      "A good morning doesn't need a perfect routine. It needs one or two things that bring you back to yourself: a page in a notebook, a walk around the block, breakfast at the table instead of over a screen. Small things, repeated with care, make a kind of architecture. They give the day somewhere gentle to begin.",
    ],
  },
  {
    id: 2,
    category: "Places",
    date: "October 16, 2026",
    readTime: "4 min read",
    title: "A field guide to wandering",
    excerpt: "The best way to get to know a place might be to leave the map in your pocket.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A narrow path winding through a quiet green forest",
    body: [
      "I used to think a good trip was one where I saw everything I had planned to see. Then, on an afternoon with a dead phone and nowhere urgent to be, I took the wrong turn.",
      "The street got quieter. I found a secondhand bookshop, a bakery with three tables, and a little square where the neighbours seemed to know the hour by the church bells. None of it was on my list. All of it is what I remember.",
      "Now I leave space between destinations. Sometimes I pick a direction just because the light looks good there. The detour isn't a break from the journey. It is often the part that makes a place feel like somewhere, rather than a collection of pins.",
    ],
  },
  {
    id: 3,
    category: "Objects",
    date: "October 8, 2026",
    readTime: "5 min read",
    title: "Objects with a past",
    excerpt: "A chipped bowl, a borrowed book, and the beauty of things that have been kept.",
    image:
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Quietly collected ceramics and books in a lived-in home",
    body: [
      "The bowl has a hairline crack near the base and a glaze that changes from grey to blue depending on the weather. It came from a market years ago, and I don't remember what I paid for it.",
      "I do remember the person who sold it telling me it had belonged to her grandmother. Maybe that story is true. Maybe it has become truer with time. Either way, I reach for that bowl most mornings.",
      "We make homes from the things we decide to keep close. Not because they match, but because they hold a little evidence of living: a thumbprint in the clay, a faded spine, a repair made carefully instead of hidden. The older I get, the more I like objects with a past I can imagine.",
    ],
  },
  {
    id: 4,
    category: "Creativity",
    date: "September 29, 2026",
    readTime: "7 min read",
    title: "Making things before you're ready",
    excerpt: "A note on imperfect beginnings, unfinished pages, and showing up anyway.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A notebook and pen on a writer's desk",
    body: [
      "There is a particular kind of waiting that looks a lot like preparation. One more book, one more clean notebook, one more week until the idea feels fully formed.",
      "But ideas rarely arrive complete. They turn up as a sentence, a sketch in the margin, a question you can't quite leave alone. The work is how you find out what they mean.",
      "So I have been trying to begin before the beginning feels impressive. To make the rough draft, take the first photograph, write the sentence that might lead to another one. Readiness, it turns out, often follows the doing.",
    ],
  },
];

export const categories = ["All stories", ...new Set(posts.map((post) => post.category))];
