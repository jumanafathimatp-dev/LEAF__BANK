import penCapImage from '../assets/images/market/pen-cap.jpg';
import candyWrapperImage from '../assets/images/market/candy-wrapper.jpg';
import bottleCapImage from '../assets/images/market/bottle-cap.jpg';
import tinyStickImage from '../assets/images/market/tiny-stick.jpg';
import interestingStoneImage from '../assets/images/market/interesting-stone.jpg';

import brokenPencilImage from '../assets/images/market/broken-pencil.jpg';
import randomButtonImage from '../assets/images/market/random-button.jpg';

export const PRODUCTS = [
  {
    id: 'pen-cap',
    name: 'Pen Cap',
    price: 5,
    description: 'One (1) protective cap. What it protects and why is unclear.',
    tint: '#dfeaf6',
    image: penCapImage,
  },
  {
    id: 'candy-wrapper',
    name: 'Candy Wrapper',
    price: 10,
    description: 'A wrapper. The candy is long gone. The hope remains.',
    tint: '#f7e3e9',
    image: candyWrapperImage,
  },
  {
    id: 'bottle-cap',
    name: 'Bottle Cap',
    price: 15,
    description: 'Proof that a bottle was finished. Or failed to be opened.',
    tint: '#dcede3',
    image: bottleCapImage,
  },
  {
    id: 'tiny-stick',
    name: 'Tiny Stick',
    price: 20,
    description: 'A very small stick. Not recommended for construction.',
    tint: '#f7ecd6',
    image: tinyStickImage,
  },
  {
    id: 'interesting-stone',
    name: 'Interesting Stone',
    price: 25,
    description: 'Certified interesting. Found fully surrounded by ground.',
    tint: '#e2e6f2',
    image: interestingStoneImage,
  },
  {
    id: 'feather',
    name: 'Feather',
    price: 30,
    description: 'Shed by a bird of sufficient wealth status.',
    tint: '#fbe7ec',
    image: "../assets/images/market/feather.jpg",
  },
  {
    id: 'broken-pencil',
    name: 'Broken Pencil',
    price: 35,
    description: 'A pencil. The lead is fine. The will to write is not.',
    tint: '#f3ead9',
    image: brokenPencilImage,
  },
  {
    id: 'random-button',
    name: 'Random Button',
    price: 40,
    description: 'It fell off something, once. Nobody knows what.',
    tint: '#e3efe9',
    image: randomButtonImage,
  },
];