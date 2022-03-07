import {v4 as uuid} from 'uuid';

// const [items, setItems] = useState([
// Will
export const items = [
  {
    id: uuid(),
    text: 'sofa',
    distance: 1.5,
    coordinate: {
      latitude: 45.501666,
      longitude: -122.677439,
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
    text: 'books',
    distance: 0.2,
    coordinate: {
      latitude: 45.54299,
      longitude: -122.640494,
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
    text: 'lamp',
    distance: 0.5,
    coordinate: {
      latitude: 45.58669,
      longitude: -122.640904,
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
    text: 'long and tall mirror',
    distance: 0.9,
    coordinate: {
      latitude: 45.501114,
      longitude: -122.681506,
    },
    description: 'i am a vampire, cant see myself in it! OK?!',
    timestamp: 'Feb 25, 2022, 11:59:11 PM',
    is_taken: false,
    is_damaged: false,
    thumbs_up: 0,
    flagged: false,
    image_path: require('../assets/IMG_9892.jpeg'),
  },
];
