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

const Signup = ({navigation}) => {
  return (
      <>
    <Image source={bgImage} style={styles.backgroundImage} />
    <ScrollView>
      <View style={styles.myContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
        </View>

        <View style={styles.loginHeadingContainer}>
          <Text style={styles.loginHeading}> Create An Account </Text>
        </View>

        <View style={styles.nameContainer}>
          <TextInput style={styles.fName} placeholder="Company ID" />

          <TextInput style={styles.lName} placeholder="Passcode" />
        </View>

        <View style={styles.signUpemailInputcontainer}>
          <TextInput
            style={styles.signUpemailInput}
            placeholder="Full Name"
            keyboardType="default"
          />
        </View>

        <View style={styles.signUpemailInputcontainer}>
          <TextInput
            keyboardType="email-address"
            style={styles.signUpemailInput}
            placeholder="Email"
          />
        </View>

        <View style={styles.signUpemailInputcontainer}>
          <TextInput
            keyboardType="default"
            style={styles.signUpemailInput}
            placeholder="User Name"
          />
        </View>

        <View style={styles.signUpemailInputcontainer}>
          <TextInput
            keyboardType="default"
            style={styles.signUpemailInput}
            placeholder="Site"
          />
        </View>

        <View style={styles.signUppasswordInputcontainer}>
          <TextInput
            secureTextEntry={true}
            style={styles.signUppasswordInput}
            placeholder="Password"
          />
        </View>

        <View style={styles.signUppasswordInputcontainer}>
          <TextInput
            secureTextEntry={true}
            style={styles.signUppasswordInput}
            placeholder="Confirm Password"
          />
        </View>

        <View style={styles.loginButtoncontainer}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.loginButtontext}> Create Account </Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.forgotPasswordcontainer}>
          <TouchableOpacity style={styles.forgotPasswordlink}>
            <Text style={styles.forgotPasswordtext}>
              Already have an Account ?
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </ScrollView>
    </>
  );
};

export default Signup;
