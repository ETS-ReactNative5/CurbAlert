import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, StyleSheet, Image} from 'react-native';
import 'react-native-get-random-values';
import Header from './Header';
import ItemControl from './ItemControl';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ItemControl />
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 40,
  },
  img: {
    width: 200,
    height: 200,
  },
});

export default App;
