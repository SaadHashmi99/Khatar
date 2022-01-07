import React, {useState} from 'react';
import styles from '../src/assets/styles/Styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';

const bgImage = require('../src/assets/images/background.png');

const AdminPanel = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Item 1', value: 'Item 1'},
    {label: 'Item 2', value: 'Item 2'},
  ]);
  return (
    <View>
      <Image source={bgImage} style={styles.backgroundImage} />
      <View style={styles.adminHeadingContainer}>
        <Text style={styles.adminHeading}> Admin Panel </Text>
      </View>

      <View style={styles.dropdownContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          maxWidth={60}
          style={styles.dropDown}
          placeholder="Select a Site"
          containerStyle={{width: '90%'}}
          dropDownContainerStyle={{
            borderRadius: 4,
            borderColor: '#CCC',
          }}
        />
      </View>

      <View style={styles.buttonMainContainer}>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Newobservation')}>
            <Text style={styles.buttonText}> New Observation </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('PreviousObservationtwo')}>
            <Text style={styles.buttonText}> Previous Observation </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Account')}>
            <Text style={styles.buttonText}> My Account </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};

export default AdminPanel;
