import React from 'react';
import firestore from '@react-native-firebase/firestore';


import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import styles from '../../shared/styles';


function MyAccountScreen({ logout, getUserData }) {
  const userDocument = firestore()
    .collection('Users')

  getUserData();

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
                onPress={logout}
                title="Log out"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default MyAccountScreen;
