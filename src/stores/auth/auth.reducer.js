import * as TYPES from './auth.types'

const INITIAL_STATE = {
  user: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.STORE_USER_DATA:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};

export default authReducer;
