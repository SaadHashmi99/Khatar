import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const bgImage = require('../src/assets/images/background.png');

const AddcorrectiveAction = ({ navigation }) => {

  const [cameraImage, setCameraimage] = useState('https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png');

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

  return (
    <View>
      <Image source={bgImage} style={styles.backgroundImage} />

      <View style={{
        width: '100%',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 25,
      }}>
        <Text style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
        }}> Add Corrective Action </Text>
      </View>

      <View style={styles.inputMaincontainer}>
        <View style={styles.inputLabelcontainer}>
          <Text style={styles.inputLabeltext}> Description: </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="default"
            style={styles.inputStyles}
            placeholder="Description"
            multiline={true}
          />
        </View>
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
            width: '40%',
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
            width: '40%',
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

      <View style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 90,
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

      <View style={styles.loginButtoncontainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('AdminPanel')}>
          <Text style={styles.loginButtontext}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    height: 65,
    padding: 9,
    fontSize: 13,
    borderColor: '#CCC',
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderRadius: 3,
  },

  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0.4,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
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
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddcorrectiveAction;
