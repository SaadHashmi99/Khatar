import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Account from '../Screens/Account';
import AdminPanel from '../Screens/AdminPanel';
import AddcorrectiveAction from '../Screens/AddcorrectiveAction';
import Newobservation from '../Screens/Newobservation';
import PreviousObservation from '../Screens/PreviousObservation';
import PreviousObservationtwo from '../Screens/PreviousObservationtwo';
import SignIn from '../Screens/SignIn';
import Signup from '../Screens/Signup';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="Account"
          component={Account}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AdminPanel"
          component={AdminPanel}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AddcorrectiveAction"
          component={AddcorrectiveAction}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Newobservation"
          component={Newobservation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="PreviousObservation"
          component={PreviousObservation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="PreviousObservationtwo"
          component={PreviousObservationtwo}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
