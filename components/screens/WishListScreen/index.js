import * as React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import styles from '../../shared/styles';

function WishListScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Wish List page</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default WishListScreen;
