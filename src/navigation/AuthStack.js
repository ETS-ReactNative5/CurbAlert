import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#014351',
        },
        headerTintColor: '#d2e6ef',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* <Stack.Screen name="Header" component={Header} /> */}
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddItem"
        component={ItemForm}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <Icon
              name="bars"
              size={20}
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#d2e6ef"
            />
          ),
          // title: 'Add an item!',
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        }}
      />
      {/* PASSING IN PROPS THIS WAY NOT WORKING
        {props => <ItemForm {...props} calculateDistance={calculateDistance} addItem={addItem} />} */}
      <Stack.Screen
        name="ItemList"
        component={ItemList}
        options={{title: 'Items'}}
      />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetailFunc}
        // Pass in the item name as a param to display that as a title
        // options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
