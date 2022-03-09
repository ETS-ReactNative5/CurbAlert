import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import 'react-native-get-random-values';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Logo from './../assets/logo.png';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d2e6ef',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ItemList')}
        style={{
          width: '90%',
          padding: 20,
          color: '#d2e6ef',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 50,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={Logo}
            // width doesn't seem to be working here
            // width={300}
            style={{width: 350, height: 350}}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;
