import React, {useState} from 'react';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import RNLocation from 'react-native-location';

RNLocation.configure({
  distanceFilter: 0,
});

function Map() {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 45.519958,
    longitude: -122.677899,
  });

  const getLocation = async () => {
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'fine', // or 'coarse'
      },
    });

    console.log(permission);

    let location;
    if (!permission) {
      permission = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'fine',
          rationale: {
            title: 'We need to access your location',
            message: 'We use your location to show where you are on the map',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        },
      });
      console.log(permission);
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(location);
      setCurrentLocation(location);
    } else {
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(location);
      setCurrentLocation(location);
    }
  };

  // HERE TRYING TO CALL GETLOCATION TO UPDATE MAP COORDINATES... NOT SURE HOW TO MAKE THAT WORK
  // componentWillUpdate() {
  //   getLocation();
  // }

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      <Marker
        coordinate={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
        }}
        image={require('./../assets/map_marker.png')}
        title={'Test Title'}
        description={'Test Description'}>
        <Callout>
          <View>
            <View>
              <Text style={styles.name}>My Favorite Restaurant</Text>
              <Image
                style={styles.image}
                source={require('./../assets/IMG_1769.jpeg')}
              />
            </View>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
    width: 100,
  },
  image: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginBottom: 5,
  },
});
