import * as TYPES from './auth.types';

export const storeUserData = (userData) => ({
  type: TYPES.STORE_USER_DATA,
  payload: userData,
});
