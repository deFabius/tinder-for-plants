import * as React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import styles from '../../shared/styles';

function MyPropagationScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>My propagation page</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default MyPropagationScreen;
