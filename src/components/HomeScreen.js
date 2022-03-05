import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
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
import Logo from './../assets/logo350.png';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#d2e6ef',
    //   }}>
    //   <View style={{marginTop: 20}}>
    //     <Text style={{fontWeight: 'bold', fontSize: 30, color: '#254952'}}>
    //       Curb Alert
    //     </Text>
    //   </View>
    //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //     <Image
    //       source={Logo}
    //       // width doesn't seem to be working here
    //       width={300}
    //     />
    //   </View>
    //   <TouchableOpacity
    //     onPress={() => navigation.navigate('ItemList')}
    //     style={{
    //       backgroundColor: '#014351',
    //       width: '90%',
    //       padding: 20,
    //       color: '#d2e6ef',
    //       borderRadius: 5,
    //       flexDirection: 'row',
    //       justifyContent: 'space-between',
    //       marginBottom: 50,
    //     }}>
    //     <Text style={{fontWeight: 'bold', fontSize: 18, color: '#d2e6ef'}}>
    //       Get Started
    //     </Text>
    //     <Icon name="arrow-right" size={22} color="#d2e6ef" />
    //   </TouchableOpacity>
    // </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
