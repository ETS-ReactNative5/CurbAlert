import React, {useState, useEffect} from 'react';
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
import {mapStyle} from './../utils/mapStyle';
import {items} from './../model/data';

RNLocation.configure({
  distanceFilter: 0,
});

function Map() {
  const [mapState, setMapState] = React.useState(items);
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
      // setCurrentLocation(location);
    }
  };

  // HERE TRYING TO CALL GETLOCATION TO UPDATE MAP COORDINATES
  // gives `Possible Unhandled Promise Rejection` error
  useEffect(() => {
    getLocation();
  });

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={mapStyle}
        region={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <View>
          {items.map(item => {
            return (
              <Marker
                key={item.id}
                coordinate={item.coordinate}
                image={require('./../assets/map_marker.png')}
                title={item.title}
                description={item.description}>
                <Callout>
                  <View>
                    <View>
                      <Text style={styles.name}>{item.title}</Text>
                      <Image style={styles.image} source={item.image_path} />
                    </View>
                  </View>
                </Callout>
              </Marker>
            );
          })}
        </View>
      </MapView>
    </View>
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
