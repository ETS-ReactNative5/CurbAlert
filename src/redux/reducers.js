import {
  SET_SELECTED_ITEM,
  ADD_ITEM,
  SET_TITLE,
  SET_DESCRIPTION,
} from './actions';

let initialState = {
  title: 'TEST TITLE',
  description: '',
  is_taken: false,
  is_damaged: false,
  thumbs_up: 0,
  flagged: false,
  image_path: require('../assets/logo-notext.png'),
  id: 0,
  coordinate: {},
  timestamp: '',
  distance: 0,
};

function itemReducer(state = initialState, action) {
  const {
    id,
    title,
    coordinate,
    description,
    image_path,
    distance,
    // timestamp,
    // is_taken,
    // is_damaged,
    // thumbs_up,
    // flag,
  } = action;
  switch (action.type) {
    // case SET_TITLE:
    //   return {...state, title: action.payload};
    // case SET_DESCRIPTION:
    //   return {...state, description: action.payload};
    case ADD_ITEM:
      return Object.assign({}, state, {
        title: title,
        coordinate: coordinate,
        description: description,
        image_path: image_path,
        id: id,
        distance: distance,
      });
    // case TAKE_ITEM:
    //   return Object.assign({}, state, {
    //     [id]: {
    //       is_taken: true,
    //       // would this work?
    //       // is_taken: !state.is_taken,
    //     },
    //   });
    // case DELETE_ITEM:
    //   let newState = {...state};
    //   delete newState[id];
    //   return newState;
    default:
      return state;
  }
}

export default itemReducer;
