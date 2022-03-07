export const ADD_ITEM = 'ADD_ITEM';
export const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';
export const FLAG_ITEM = 'FLAG_ITEM';
export const THUMB_UP_ITEM = 'THUMB_UP_ITEM';
export const TAKE_ITEM = 'TAKE_ITEM';
export const DAMAGE_ITEM = 'DAMAGE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = item => dispatch => {
  dispatch({
    type: ADD_ITEM,
    item,
  });
};

export const setSelectedItem = item => dispatch => {
  dispatch({
    type: SET_SELECTED_ITEM,
    item,
  });
};

export const flagItem = () => ({
  type: FLAG_ITEM,
});

export const thumbUpItem = () => ({
  type: THUMB_UP_ITEM,
});

export const takeItem = (item.is_taken) => dispatch => {
  type: TAKE_ITEM,
  item.is_taken,

};

export const damageItem = () => ({
  type: DAMAGE_ITEM,
});

export const deleteItem = () => ({
  type: DELETE_ITEM,
});
