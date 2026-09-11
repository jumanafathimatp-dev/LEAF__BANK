const img = (id, base = 'https://images.unsplash.com/photo') =>
  `${base}-${id}?fm=jpg&q=80&w=1200&auto=format&fit=crop`;

export const PRODUCTS = [
  {
    id: 'pen-cap',
    name: 'Pen Cap',
    price: 5,
    description: 'One (1) protective cap. What it protects and why is unclear.',
    image: img(1619354923603),
  },
  {
    id: 'candy-wrapper',
    name: 'Candy Wrapper',
    price: 10,
    description: 'A wrapper. The candy is long gone. The hope remains.',
    image: img(1612800011567),
  },
  {
    id: 'bottle-cap',
    name: 'Bottle Cap',
    price: 15,
    description: 'Proof that a bottle was finished. Or failed to be opened.',
    image: img(1623081499469),
  },
  {
    id: 'tiny-stick',
    name: 'Tiny Stick',
    price: 20,
    description: 'A very small stick. Not recommended for construction.',
    image: img(1513966379816),
  },
  {
    id: 'interesting-stone',
    name: 'Interesting Stone',
    price: 25,
    description: 'Certified interesting. Found fully surrounded by ground.',
    image: img(
      1760719377767,
      'https://plus.unsplash.com/premium_photo'
    ),
  },
  {
    id: 'feather',
    name: 'Feather',
    price: 30,
    description: 'Shed by a bird of sufficient wealth status.',
    image: img(1748340361078),
  },
  {
    id: 'broken-pencil',
    name: 'Broken Pencil',
    price: 35,
    description: 'A pencil. The lead is fine. The will to write is not.',
    image: img(1512279931422),
  },
  {
    id: 'random-button',
    name: 'Random Button',
    price: 40,
    description: 'It fell off something, once. Nobody knows what.',
    image: img(1642693252381),
  },
];