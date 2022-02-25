import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import 'react-native-get-random-values';
import Header from './Header';
import ItemControl from './ItemControl';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ItemControl />
    </View>
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
