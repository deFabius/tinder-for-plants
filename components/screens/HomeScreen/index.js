import * as React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import styles from '../../shared/styles';

import DemoPage from '../DemoPage';

function HomeScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Home page</Text>
            </View>
          </View>
          <DemoPage />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default HomeScreen;
