import * as React from 'react';
import { SafeAreaView, ScrollView, View, Text, Button, TextInput, TouchableHighlight } from 'react-native';
import styles from '../../shared/styles';
import SignUpWithGoogleIcon from '../../shared/icons/btn_google_light_normal_ios.svg'

function SignUpScreen({ navigation }) {
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
                style={styles.textInput}
                placeholder="Enter your email" />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password" />
              <Button
                title="Log in"
                onPress={() => navigation.navigate('Log in')} />
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
