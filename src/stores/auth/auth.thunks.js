import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {storeUserData} from './auth.actions';

export const subscribeAuthChange = (initializing, setInitializing) => {
  return (dispatch) =>
    auth().onAuthStateChanged((user) => {
      if (user) {
        const {email, uid, photoURL} = user;
        dispatch(storeUserData({email, uid, photoURL}));
      }
      if (initializing) {
        setInitializing(false);
      }
    });
};

export const login = (email, password, navigation) => {
  return () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Main');
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const logout = (navigation) => {
  return (dispatch) => {
    auth()
      .signOut()
      .then(() => {
        dispatch(storeUserData(null));
        navigation.navigate('Home');
      })
      .catch((e) => {
        console.log(e);
        dispatch(storeUserData(null));
        navigation.navigate('Home');
      });
  };
};

export const getUserData = () => {
  function onError(error) {
    console.error(error);
  }

  return (dispatch, getState) => {
    const user = getState()?.authData?.user;
    const uid = user?.uid;
    if (uid) {
      firestore()
        .collection('Users')
        .doc(uid)
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot.data());
          console.log(querySnapshot.id);
          dispatch(storeUserData({...user, ...querySnapshot.data()}));
        })
        .catch(onError);
    }
  };
};
