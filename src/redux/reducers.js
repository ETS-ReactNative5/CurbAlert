import {SET_SELECTED_ITEM, ADD_ITEM} from './actions';

// I'm not sure if this is right but if I do want
// it, change to `state = intitialState` below
let initialState = {
  is_taken: false,
  is_damaged: false,
  thumbs_up: 0,
  flag: false,
  image_path: require('../assets/logo-notext.png'),
  id: 0,
  title: '',
  coordinate: {},
  description: '',
  timestamp: '',
};

function itemReducer(state = initialState, action) {
  const {
    id,
    title,
    coordinate,
    description,
    image_path,
    timestamp,
    is_taken,
    is_damaged,
    thumbs_up,
    flag,
  } = action;
  switch (action.type) {
    case c.ADD_ITEM:
      return Object.assign({}, state, {
        [id]: {
          title: title,
          coordinate: coordinate,
          description: description,
          timestamp: timestamp,
          image_path: image_path,
        },
      });
    case c.TAKE_ITEM:
      return Object.assign({}, state, {
        [id]: {
          is_taken: true,
          // would this work?
          // is_taken: !is_taken,
        },
      });
    case c.DELETE_ITEM:
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
}

export default itemReducer;
