const img = (id, base) => `${base}-${id}?fm=jpg&q=80&w=1200&auto=format&fit=crop`;

export const LEAVES = [
  {
    id: 'coriander',
    name: 'Coriander Leaf',
    value: 10,
    color: '#2f8f4f',
    image: img(1776089770931, 'https://images.unsplash.com/photo'),
  },
  {
    id: 'mint',
    name: 'Mint Leaf',
    value: 20,
    color: '#3ead63',
    image: img(1748792311906, 'https://images.unsplash.com/photo'),
  },
  {
    id: 'mango',
    name: 'Mango Leaf',
    value: 50,
    color: '#5a8f3c',
    image: img(1685429631345, 'https://images.unsplash.com/photo'),
  },
  {
    id: 'guava',
    name: 'Guava Leaf',
    value: 75,
    color: '#728c3a',
    image: img(1774017543056, 'https://images.unsplash.com/photo'),
  },
  {
    id: 'neem',
    name: 'Neem Leaf',
    value: 100,
    color: '#1f7a41',
    image: img(1748839635226, 'https://images.unsplash.com/photo'),
  },
];