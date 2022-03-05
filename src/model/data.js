import {v4 as uuid} from 'uuid';

// const [items, setItems] = useState([
// Will
export const items = [
  {
    id: uuid(),
    text: 'sofa',
    distance: 1.5,
    description: 'in good shape! come get it before it rains',
    timestamp: 'Feb 25, 2022, 11:59:11 PM',
    is_taken: false,
    is_damaged: false,
    thumbs_up: 0,
    flag: false,
    image_path: 'https://picsum.photos/200',
  },
  {
    id: uuid(),
    text: 'books',
    distance: 0.2,
    description: 'just some old books my kids outgrew',
    timestamp: 'Feb 25, 2022, 11:59:11 PM',
    is_taken: false,
    is_damaged: false,
    thumbs_up: 0,
    flag: false,
    image_path: 'https://picsum.photos/200',
  },
  {
    id: uuid(),
    text: 'lamp',
    distance: 0.5,
    description: 'missing bulb but it works',
    timestamp: 'Feb 25, 2022, 11:59:11 PM',
    is_taken: false,
    is_damaged: false,
    thumbs_up: 0,
    flag: false,
    image_path: 'https://picsum.photos/200',
  },
  {
    id: uuid(),
    text: 'long and tall mirror',
    distance: 0.9,
    description: 'i am a vampire, cant see myself in it! OK?!',
    timestamp: 'Feb 25, 2022, 11:59:11 PM',
    is_taken: false,
    is_damaged: false,
    thumbs_up: 0,
    flag: false,
    image_path: 'https://picsum.photos/200',
  },
];
