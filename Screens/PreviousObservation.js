import React, { useState } from 'react';
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

import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData1 = [
  {
    id: '0', // acts as primary key, should be unique and non-empty string
    label: 'Low',
    value: 'option1',
    borderColor: 'blue',
    color: 'blue',
  },

  {
    id: '1',
    label: 'Medium',
    value: 'option2',
    selected: true,
    borderColor: 'green',
    color: 'green',
  },

  {
    id: '2',
    label: 'High',
    value: 'option3',
    borderColor: 'red',
    color: 'red',
  },
];

const bgImage = require('../src/assets/images/background.png');

const imagePlaceholder = require('../src/assets/images/imageplaceholder.jpg');

const PreviousObservation = ({ navigation }) => {
  const [radioButtons1, setRadioButtons1] = useState(radioButtonsData1);
  function onPressRadioButton1(radioButtonsArray) {
    setRadioButtons1(radioButtonsArray);
  }
  return (
    <>
      <Image source={bgImage} style={styles.backgroundImage} />
      <ScrollView>

        <View style={{
          width: '100%',
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 0,
          marginBottom: 10,
        }}>
          <Text style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          }}> Previous Observation Two </Text>
        </View>

        <View>

          <View>
            <View style={styles.inputMaincontainer}>
              <View style={styles.inputLabelcontainer}>
                <Text style={styles.inputLabeltext}> Area: </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType="default"
                  style={styles.inputStyles}
                  placeholder="Area 1"
                  placeholderTextColor="#000"
                  editable={false}
                />
              </View>
            </View>

            <View style={styles.inputMaincontainer}>
              <View style={styles.inputLabelcontainer}>
                <Text style={styles.inputLabeltext}> Location: </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType="default"
                  style={styles.inputStyles}
                  placeholder="Location 1"
                  placeholderTextColor="#000"
                  editable={false}
                />
              </View>
            </View>

            <View style={styles.inputMaincontainer}>
              <View style={styles.inputLabelcontainer}>
                <Text style={styles.inputLabeltext}> User: </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType="default"
                  style={styles.inputStyles}
                  placeholder="User 1"
                  placeholderTextColor="#000"
                  editable={false}
                />
              </View>
            </View>
          </View>

          <View style={styles.checklistMaincontainer}>
            <View style={styles.checklistContainer}>
              <View style={styles.headingContainer}>
                <Text style={styles.headingText}> Risk Rating </Text>
              </View>
              <View style={styles.radioButtoncontainer}>
                <RadioGroup
                  radioButtons={radioButtons1}
                  onPress={onPressRadioButton1}
                  layout="row"
                />
              </View>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <TextInput
              style={{
                width: '95%',
                borderWidth: 1,
                borderRadius: 3,
                borderColor: '#ccc',
                height: 100,
                fontSize: 18,
                padding: 10,
                backgroundColor: '#fafafa',
              }}
              keyboardType="default"
              placeholder="Description"
              multiline={true}
            />
          </View>

          <View style={styles.userImagecontainer}>
            <Image style={styles.userImage} source={imagePlaceholder} />
          </View>

          <View style={styles.loginButtoncontainer}>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('AddcorrectiveAction')}>
              <Text style={styles.loginButtontext}>
                Add Corrective Action
              </Text>
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
    backgroundColor: '#fafafa',
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
    marginTop: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  userImage: {
    width: 160,
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

  checklistMaincontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '96%',
    marginLeft: 8,
    marginTop: 40,
  },

  checklistContainer: {
    width: '92%',
    marginBottom: 30,
  },

  headingContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  headingText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Estonia-Regular',
  },

  radioButtoncontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  tagText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default PreviousObservation;
