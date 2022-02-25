import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btnLeft}>
        <Icon name="camera" size={20} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Curb Alert</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnRight}>
        <Icon name="bars" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
  // btnLeft: {
  //   textAlign: 'left',
  // },
  // btnRight: {
  //   textAlign: 'right',
  // },
});

export default Header;
