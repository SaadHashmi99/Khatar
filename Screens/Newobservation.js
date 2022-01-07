import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import styles from '../src/assets/styles/Styles';
import RadioGroup from 'react-native-radio-buttons-group';
import ImagePicker from 'react-native-image-crop-picker';

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

const Newobservation = ({ navigation }) => {
  const [radioButtons1, setRadioButtons1] = useState(radioButtonsData1);

  const [cameraImage, setCameraimage] = useState('https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png');

  // const [galleryImage, setGalleryimage] = useState('https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png');

  const openGallery = () => {
    ImagePicker.openPicker({
      cropping: false,
    }).then(image => {
      console.log(image);
      setCameraimage(image.path);
    });
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      cropping: false,
    }).then(image => {
      console.log(image);
      setCameraimage(image.path);
    });
  };

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
            marginBottom: 5,
          }}>
            <Text style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
            }}> New Observation </Text>
          </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              width: '47%',
              borderRadius: 3,
              alignItems: 'center',
              backgroundColor: '#0275db',
              marginTop: 10,
              padding: 15,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              elevation: 2,
            }} onPress={openGallery}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 14,
                textTransform: 'uppercase',
              }}>
              {' '}
              Gallery{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '47%',
              borderRadius: 3,
              alignItems: 'center',
              backgroundColor: '#0275db',
              marginTop: 10,
              padding: 15,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              elevation: 2,
            }} onPress={openCamera}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 14,
                textTransform: 'uppercase',
              }}>
              {' '}
              Camera{' '}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            width: '96%',
            marginTop: 40,
            paddingVertical: 5,
            borderWidth: 1,
            borderColor: '#CCCC',
            borderRadius: 5,
          }}>
          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Area: </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 17,
                  color: '#000000',
                  alignSelf: 'center',
                  paddingHorizontal: 110,
                }}>
                Example Area
              </Text>
            </View>
          </View>

          <View style={styles.inputMaincontainer}>
            <View style={styles.inputLabelcontainer}>
              <Text style={styles.inputLabeltext}> Location: </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 17,
                  color: '#000000',
                  alignSelf: 'center',
                  paddingHorizontal: 80,
                }}>
                Example Location
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.checklistMaincontainer}>
          <View style={styles.checklistContainer}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}> Risk Rating </Text>
            </View>
            <View style={styles.radioButtoncontainer}>
              {/* <Text style={styles.tagText}>Tag 1</Text> */}
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
            marginTop: 40,
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
            }}
            keyboardType="default"
            placeholder="Description"
            multiline={true}
          />
        </View>

        <View style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
        }}>

          <Image
            source={{ uri: cameraImage }}
            style={{
              height: 200,
              width: '60%',
              borderColor: '#CCCC',
              borderWidth: 1,
            }}
          />

        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={{
              width: '95%',
              borderRadius: 3,
              backgroundColor: '#0275db',
              padding: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }} onPress={() => navigation.navigate('AdminPanel')}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Newobservation;
