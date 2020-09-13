import * as React from 'react';
import {SafeAreaView, ScrollView, View, Text, Button} from 'react-native';
import styles from '../../shared/styles';

function LoginScreen({navigation}) {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Log in</Text>
              <Button
                title="Sign up"
                onPress={() => navigation.navigate('Sign up')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default LoginScreen;
