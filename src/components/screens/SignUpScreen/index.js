import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

import { SafeAreaView, ScrollView, View, Text, Button, TextInput, TouchableHighlight } from 'react-native';
import styles from '../../shared/styles';
import SignUpWithGoogleIcon from '../../shared/icons/btn_google_light_normal_ios.svg'

function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const SignUp = e => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }

        console.error(error);
      });
  }

  const SignUpWithGoogle = e => { };

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Sign up</Text>
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
                title="Sign up"
                onPress={SignUp} />
            </View>

            <View style={{ ...styles.sectionContainer, flex: 1, alignItems: 'center' }}>
              <Text style={{ textAlign: 'center', marginVertical: 40 }}>OR</Text>

              <TouchableHighlight onPress={() => alert('Pressed')} style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,.54)', width: 200 }}>
                <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', padding: 0 }}>
                  <SignUpWithGoogleIcon width="50" />
                  <Text style={{ fontSize: 14, color: 'rgba(0,0,0,.54)', marginLeft: 4 }}>Sign in with Google</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default SignUpScreen;
