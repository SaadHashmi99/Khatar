import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

import styles from '../src/assets/styles/Styles';

const logo = require('../src/assets/images/logo.png');

const bgImage = require('../src/assets/images/background.png');

function SignIn({ navigation }) {
  return (
    <>
      <Image source={bgImage} style={styles.backgroundImage} />
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
          </View>

          <View style={styles.emailInputcontainer}>
            <TextInput
              keyboardType="email-address"
              placeholder="Email"
              style={styles.emailInput}
            />
          </View>

          <View style={styles.passwordInputcontainer}>
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={styles.passwordInput}
            />
          </View>

          <View style={styles.loginButtoncontainer}>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('AdminPanel')}>
              <Text style={styles.loginButtontext}> Sign In </Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>

            <Text style={{ fontSize: 14, color: '#000' }}> Don't Have an Account ? </Text>

          </View>

          <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>

            <TouchableOpacity style={{
              width: '90%',
              borderRadius: 3,
              alignItems: 'center',
              backgroundColor: 'black',
              padding: 15,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.3,
              shadowRadius: 1.41,
              elevation: 2,
            }} onPress={() => navigation.navigate('Signup')}>

              <Text style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 15,
                textTransform: 'uppercase',
              }}> Sign Up </Text>

            </TouchableOpacity>

          </View>

          <View
            style={{
              marginTop: 50,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <View>
              <TouchableOpacity>
                <Text style={{ color: 'blue', fontWeight: 'bold' }}> English </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={{ fontSize: 30, padding: 8 }}> | </Text>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={{ color: 'blue', fontWeight: 'bold' }}> Arabic </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default SignIn;