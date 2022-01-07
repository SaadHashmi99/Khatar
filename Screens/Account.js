import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const bgImage = require('../src/assets/images/background.png');

const userImage = require('../src/assets/images/userimage.png');

const Account = ({ navigation }) => {
  return (
    <>
      <Image source={bgImage} style={styles.backgroundImage} />
      <ScrollView>
        <View>
          {/* <View style={styles.titleContainer}>
            <Text style={styles.title}>User Account</Text>
          </View> */}

          <View style={{
            width: '100%',
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 0,
            marginBottom: 5,
          }}>
            <Text style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
            }}> User Account </Text>
          </View>

          <View style={styles.userImagecontainer}>
            <Image style={styles.userImage} source={userImage} />
          </View>

          <View>
            <View style={styles.inputMaincontainer}>
              <View style={styles.inputLabelcontainer}>
                <Text style={styles.inputLabeltext}> Name: </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType="default"
                  style={styles.inputStyles}
                  placeholder="Name"
                />
              </View>
            </View>

            <View style={styles.inputMaincontainer}>
              <View style={styles.inputLabelcontainer}>
                <Text style={styles.inputLabeltext}> Company: </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType="default"
                  style={styles.inputStyles}
                  placeholder="Company"
                />
              </View>
            </View>

            <View style={styles.inputMaincontainer}>
              <View style={styles.inputLabelcontainer}>
                <Text style={styles.inputLabeltext}> Site: </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType="default"
                  style={styles.inputStyles}
                  placeholder="Site"
                />
              </View>
            </View>

            <View style={styles.inputMaincontainer}>
              <View style={styles.inputLabelcontainer}>
                <Text style={styles.inputLabeltext}> User Name: </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType="default"
                  style={styles.inputStyles}
                  placeholder="User Name"
                />
              </View>
            </View>

            <View style={styles.inputMaincontainer}>
              <View style={styles.inputLabelcontainer}>
                <Text style={styles.inputLabeltext}> Password: </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType="default"
                  secureTextEntry={true}
                  style={styles.inputStyles}
                  placeholder="Password"
                />
              </View>
            </View>

            <View style={styles.inputMaincontainer}>
              <View style={styles.inputLabelcontainer}>
                <Text style={styles.inputLabeltext}> Email: </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType="email-address"
                  style={styles.inputStyles}
                  placeholder="Email"
                />
              </View>
            </View>
          </View>

          <View style={styles.loginButtoncontainer}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate('AdminPanel')}>
              <Text style={styles.loginButtontext}> Save </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  inputMaincontainer: {
    width: '100%',
    marginTop: 12,
  },

  inputLabelcontainer: {
    marginLeft: 14,
    marginBottom: 7,
  },

  inputLabeltext: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputStyles: {
    width: '90%',
    height: 35,
    padding: 9,
    fontSize: 13,
    borderColor: '#CCC',
    backgroundColor: '#FaFaFa',
    borderWidth: 1,
    borderRadius: 3,
  },

  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  userImagecontainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  userImage: {
    width: 130,
    height: 120,
  },

  loginButton: {
    width: '90%',
    borderRadius: 3,
    alignItems: 'center',
    backgroundColor: '#5cb85c',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,

    elevation: 2,
  },

  loginButtontext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
  },

  loginButtoncontainer: {
    marginTop: 25,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0.5,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});

export default Account;
