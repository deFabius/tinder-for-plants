import {combineReducers} from 'redux';

const INITIAL_STATE = {
  user: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({auth: authReducer});
