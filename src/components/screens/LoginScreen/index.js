import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

import { SafeAreaView, ScrollView, View, Text, Button, TextInput } from 'react-native';
import styles from '../../shared/styles';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const Login = e => {
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

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Log in</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={styles.textInput}
                placeholder="Enter your email" />
              <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.textInput}
                secureTextEntry={true}
                placeholder="Enter your password" />
              <Button
                title="Log in"
                onPress={Login} />

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
