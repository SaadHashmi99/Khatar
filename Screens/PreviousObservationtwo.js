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
import { Col, Row, Grid } from 'react-native-easy-grid';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

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

const PreviousObservationtwo = ({ navigation }) => {

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const [choosenDate, setChoosenDate] = useState('');
  const [choosenDate2, setChoosenDate2] = useState('');

  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Area 1', value: 'Area 1' },
    { label: 'Area 2', value: 'Area 2' },
  ]);

  const [locationOpen, setLocationopen] = useState(false);
  const [locationValue, setLocationvalue] = useState(null);
  const [locationItems, setLocationitems] = useState([
    { label: 'Location 1', value: 'Location 1' },
    { label: 'Location 2', value: 'Location 2' },
  ]);

  const [userOpen, setUseropen] = useState(false);
  const [userValue, setUservalue] = useState(null);
  const [userItems, setUseritems] = useState([
    { label: 'User 1', value: 'User 1' },
    { label: 'User 2', value: 'User 2' },
  ]);

  const [radioButtons1, setRadioButtons1] = useState(radioButtonsData1);
  function onPressRadioButton1(radioButtonsArray) {
    setRadioButtons1(radioButtonsArray);
  }

  const handlePicker = (date) => {
    setIsVisible(false)
    setChoosenDate(date);
    setFromDate(moment(choosenDate).format('DD-MM-YYYY'));
  }

  const hidePicker = (date) => {
    setIsVisible(false)
  }

  const showDatePicker = () => {
    setIsVisible(true)
  }

  const handlePicker2 = (date) => {
    setIsVisible2(false)
    setChoosenDate2(date);
    setToDate(moment(choosenDate2).format('DD-MM-YYYY'));
  }

  const hidePicker2 = (date) => {
    setIsVisible2(false)
  }

  const showDatePicker2 = () => {
    setIsVisible2(true)
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
          }}> Previous Observation </Text>
        </View>

        <View>

          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>

            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              maxWidth={60}
              maxHeight={300}
              autoScroll={true}
              textStyle={{
                fontSize: 11
              }}
              style={{ backgroundColor: '#fff', borderColor: '#ccc', borderRadius: 3 }}
              placeholder="Select a Area"
              containerStyle={{ width: '30%' }}
              dropDownContainerStyle={{
                borderRadius: 4,
                borderColor: '#CCC',
              }}
            />

            <DropDownPicker
              open={locationOpen}
              value={locationValue}
              items={locationItems}
              setOpen={setLocationopen}
              setValue={setLocationvalue}
              setItems={setLocationitems}
              maxWidth={60}
              textStyle={{
                fontSize: 11
              }}
              style={{ backgroundColor: '#fff', borderColor: '#ccc', borderRadius: 3 }}
              placeholder="Select a Location"
              containerStyle={{ width: '30%' }}
              dropDownContainerStyle={{
                borderRadius: 4,
                borderColor: '#CCC',
              }}
            />

            <DropDownPicker
              open={userOpen}
              value={userValue}
              items={userItems}
              setOpen={setUseropen}
              setValue={setUservalue}
              setItems={setUseritems}
              maxWidth={60}
              textStyle={{
                fontSize: 11
              }}
              style={{ backgroundColor: '#fff', borderColor: '#CCC', borderRadius: 3 }}
              placeholder="Select a User"
              containerStyle={{ width: '30%' }}
              dropDownContainerStyle={{
                borderRadius: 3,
                borderColor: '#CCC',
              }}
            />

          </View>

          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>

            <TouchableOpacity style={{ width: '46%', height: 60 }} onPress={showDatePicker}>

              <TextInput placeholder='Pick Start Date' editable={false} value={(choosenDate != '') ? moment(choosenDate).format('DD-MM-YYYY') : null}
                style={{
                  borderWidth: 1,
                  borderColor: '#ccc',
                  backgroundColor: '#fff',
                  color: '#000',
                  padding: 10,
                  fontSize: 11,
                  borderRadius: 3,
                }} onChange={(e) => e.target.value} />

            </TouchableOpacity>

            <TouchableOpacity style={{ width: '46%', height: 60 }} onPress={showDatePicker2}>

              <TextInput placeholder='Pick End Date' editable={false} value={(choosenDate2 != '') ? moment(choosenDate2).format('DD-MM-YYYY') : null}
                style={{
                  borderWidth: 1,
                  borderColor: '#ccc',
                  backgroundColor: '#fff',
                  color: '#000',
                  padding: 10,
                  fontSize: 11,
                  borderRadius: 3,
                }} onChange={(e) => e.target.value} />

            </TouchableOpacity>

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

          <View style={{ marginTop: 20 }}>

            <Grid
              style={{
                borderWidth: 1,
                width: '90%',
                borderColor: '#CCC',
                margin: 20,
              }}>

              <Col style={{ backgroundColor: '#FFF' }}>

                <Row style={styles.alignSelfstyle}>

                  <Text style={styles.tableHeading}>User</Text>

                </Row>

                <Row style={styles.alignSelfstyle}>

                  <TouchableOpacity onPress={() => navigation.navigate('PreviousObservation')}>

                    <Text style={styles.tableText}>User 1</Text>

                  </TouchableOpacity>

                </Row>

                <Row style={styles.alignSelfstyle}>

                  <Text style={styles.tableText}>User 2</Text>

                </Row>

                <Row style={styles.alignSelfstyle}>

                  <Text style={styles.tableText}>User 3</Text>

                </Row>

                <Row style={styles.alignSelfstyle}>

                  <Text style={styles.tableText}>User 4</Text>

                </Row>

              </Col>

              <Col style={{ backgroundColor: '#Fafafa' }}>

                <Row style={styles.alignSelfstyle}>

                  <Text style={styles.tableHeading}>Date</Text>

                </Row>

                <Row style={styles.alignSelfstyle}>

                  <Text style={styles.tableText}>10/Dec/2021</Text>

                </Row>

                <Row style={styles.alignSelfstyle}>

                  <Text style={styles.tableText}>10/Dec/2021</Text>

                </Row>

                <Row style={styles.alignSelfstyle}>

                  <Text style={styles.tableText}>10/Dec/2021</Text>

                </Row>

                <Row style={styles.alignSelfstyle}>

                  <Text style={styles.tableText}>10/Dec/2021</Text>

                </Row>

              </Col>

              <Col style={{ backgroundColor: '#fff' }}>

                <Row style={styles.alignSelfstyle}>

                  <Text style={styles.tableHeading}>Description</Text>

                </Row>

                <Row style={styles.alignSelfstyle}>

                  <Text style={styles.tableText}>Description 1</Text>

                </Row>

                <Row style={styles.alignSelfstyle}>

                  <Text style={styles.tableText}>Description 2</Text>

                </Row>

                <Row style={styles.alignSelfstyle}>

                  <Text style={styles.tableText}>Description 3</Text>

                </Row>

                <Row style={styles.alignSelfstyle}>

                  <Text style={styles.tableText}>Description 4</Text>

                </Row>

              </Col>

            </Grid>

          </View>

          <View style={styles.loginButtoncontainer}>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('AdminPanel')}>
              <Text style={styles.loginButtontext}>Back</Text>
            </TouchableOpacity>

          </View>

          <DatePickerModal
            isVisible={isVisible}
            onConfirm={handlePicker}
            onCancel={hidePicker}
            mode={'date'}
          />

          <DatePickerModal
            isVisible={isVisible2}
            onConfirm={handlePicker2}
            onCancel={hidePicker2}
            mode={'date'}
          />

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
    backgroundColor: '#d9534a',
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

  alignSelfstyle: {
    paddingVertical: 6,
    paddingHorizontal: 6,
    alignSelf: 'center',
  },

  tableInnerstyle: {
    paddingVertical: 6,
    paddingHorizontal: 6,
    alignSelf: 'center',
  },

  tableText: {
    fontSize: 15,
    alignSelf: 'center',
  },

  tableHeading: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
});

export default PreviousObservationtwo;
