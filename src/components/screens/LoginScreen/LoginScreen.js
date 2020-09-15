import React, { useState } from 'react';

import { SafeAreaView, ScrollView, View, Text, Button, TextInput } from 'react-native';
import styles from '../../shared/styles';

function LoginScreen({ navigation, login }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
                onPress={() => login(email, password)} />
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
