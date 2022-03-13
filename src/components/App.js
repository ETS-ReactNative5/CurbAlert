import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  View,
  StyleSheet,
  Image,
  Button,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import reducer from '../redux/reducers'; // need?
import {Provider} from 'react-redux';
import 'react-native-get-random-values';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HomeScreen from './HomeScreen';
import ItemList from './ItemList';
import AddItem from './AddItem';
import {v4 as uuid} from 'uuid';
import ItemDetail from './ItemDetail';
import {items} from './../model/data';
import SignIn from './SignIn';
import SignUp from './SignUp';
import LogoTitle from './../assets/logo-notext.png';
import Map from './Map';
import {Store} from './../redux/store';
import {db} from './../firebase/firebase-config';
import {collection, getDocs, doc, setDoc, Timestamp} from 'firebase/firestore';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // uncomment to use Redux:
    // <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#254952',
          },
          headerTintColor: '#d2e6ef',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={
            {
              // headerShown: false
            }
          }
        />
        <Stack.Screen
          name="AddItem"
          component={AddItem}
          options={{
            // headerRight: () => (
            //   <Icon
            //     name="bars"
            //     size={20}
            //     onPress={() => alert('This is a button!')}
            //     title="Info"
            //     color="#d2e6ef"
            //   />
            // ),
            title: 'Add an item!',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ItemList"
          component={ItemList}
          options={{title: 'Items'}}
        />
        <Stack.Screen
          name="ItemDetail"
          component={ItemDetail}
          // Pass in the item name as a param to display that as a title
          // options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
