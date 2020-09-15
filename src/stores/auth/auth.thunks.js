import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { storeUserData } from './auth.actions';

export const login = (email, password, navigation) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      navigation.navigate('Main');
    })
    .catch(error => {
      alert('Log in failed');

      console.error(error);
    });
}

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

export const getUserData = () => {
  function onError(error) {
    console.error(error);
  }

  return dispatch => {
    firestore()
      .collection('Users')
      .doc('j3bwrcWKdaOVxZ1iN36MHngzTCj2')
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot.data());
        console.log(querySnapshot.id)
        // dispatch(storeUserData(querySnapshot.data()))
      }).catch(onError);
  }
}