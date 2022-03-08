import {v4 as uuid} from 'uuid';

// const [items, setItems] = useState([
// Will
export const items = [
  {
    id: uuid(),
    title: 'sofa',
    distance: 1.5,
    coordinate: {
      latitude: 45.5219778825814,
      longitude: -122.67533488152338,
    },
    description: 'in good shape! come get it before it rains',
    timestamp: 'Feb 25, 2022, 11:59:11 PM',
    is_taken: false,
    is_damaged: false,
    thumbs_up: 0,
    flagged: false,
    image_path: require('../assets/IMG_1188.jpeg'),
  },
  {
    id: uuid(),
    title: 'books',
    distance: 0.2,
    coordinate: {
      latitude: 45.52489457375122,
      longitude: -122.68312663355545,
    },
    description: 'just some old books my kids outgrew',
    timestamp: 'Feb 25, 2022, 11:59:11 PM',
    is_taken: false,
    is_damaged: false,
    thumbs_up: 0,
    flagged: false,
    image_path: require('../assets/IMG_0534.jpeg'),
  },
  {
    id: uuid(),
    title: 'lamp',
    distance: 0.5,
    coordinate: {
      latitude: 45.51691858536279,
      longitude: -122.68199644916393,
    },
    description: 'missing bulb but it works',
    timestamp: 'Feb 25, 2022, 11:59:11 PM',
    is_taken: false,
    is_damaged: false,
    thumbs_up: 0,
    flagged: false,
    image_path: require('../assets/IMG_9670.jpeg'),
  },
  {
    id: uuid(),
    title: 'long and tall mirror',
    distance: 0.9,
    coordinate: {
      latitude: 45.51914781524331,
      longitude: -122.67691560139582,
    },
    description: 'i am a vampire, cant see myself in it! OK?!',
    timestamp: 'Feb 25, 2022, 11:59:11 PM',
    is_taken: false,
    is_damaged: false,
    thumbs_up: 0,
    flagged: false,
    image_path: require('../assets/IMG_9892.jpeg'),
  },
  {
    id: uuid(),
    title: 'bed, for a dog, gently used',
    distance: 0.3,
    coordinate: {
      latitude: 45.5146389622131,
      longitude: -122.67787992625898,
    },
    description:
      "I got this bed for my dog Gina but she doesn't like it. What are you going to do? She's odd like that. She is sleeping on the floor instead.",
    timestamp: 'Feb 25, 2022, 11:59:11 PM',
    is_taken: false,
    is_damaged: false,
    thumbs_up: 0,
    flagged: false,
    image_path: require('../assets/IMG_1762.jpeg'),
  },
];
