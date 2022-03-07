export const ADD_ITEM = 'ADD_ITEM';
export const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';
export const SET_TITLE = 'SET_TITLE';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
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

export const setTitle = title => dispatch => {
  dispatch({
    type: SET_TITLE,
    payload: title,
  });
};

export const setDescription = description => dispatch => {
  dispatch({
    type: SET_DESCRIPTION,
    payload: description,
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

export const takeItem = item => dispatch => {
  dispatch({
    type: TAKE_ITEM,
    item,
  });
};

export const damageItem = () => ({
  type: DAMAGE_ITEM,
});

export const deleteItem = () => ({
  type: DELETE_ITEM,
});
