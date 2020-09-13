import auth from '@react-native-firebase/auth';
import { storeUserData } from './auth.actions';

export const logout = navigation => {
  return dispatch => {
    auth()
      .signOut()
      .then(() => {
        dispatch(storeUserData(null));
        navigation.navigate('Home');
      })
      .catch(e => {
        console.log(e);
        dispatch(storeUserData(null))
        navigation.navigate('Home');
      });
  }
}
