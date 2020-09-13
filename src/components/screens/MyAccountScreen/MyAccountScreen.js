import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import styles from '../../shared/styles';

import auth from '@react-native-firebase/auth';

function MyAccountScreen({navigation, auth}) {
  //   // Set an initializing state whilst Firebase connects
  //   const [initializing, setInitializing] = useState(true);
  //   const [user, setUser] = useState();

  //   // Handle user state changes
  //   function onAuthStateChanged(user) {
  //     setUser(user);
  //     if (initializing) setInitializing(false);
  //   }

  //   useEffect(() => {
  //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //     return subscriber; // unsubscribe on unmount
  //   }, []);

  //   if (initializing) return null;
  if (auth.user == null) {
    navigation.navigate('LoginModal');
    return null;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>My account page</Text>
              <Button
                onPress={() => navigation.navigate('LoginModal')}
                title="Login"
              />
              <Text>{auth.user}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default MyAccountScreen;
