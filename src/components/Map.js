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
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import {items} from './../model/data';

RNLocation.configure({
  distanceFilter: 10,
});

function Map({navigation, route}) {
  const {itemList} = route.params;
  const [update, setUpdate] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
    // latitude: 45.519958,
    // longitude: -122.677899,
  });

  const getLocation = async () => {
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'fine', // or 'coarse'
      },
    });

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
      setCurrentLocation(await RNLocation.getLatestLocation({timeout: 5000}));
      const date = new Date();
      console.log('location updated: ' + date);
    } else {
      setCurrentLocation(await RNLocation.getLatestLocation({timeout: 5000}));
      const date = new Date();
      console.log('location updated: ' + date);
    }
  };

  // I'm sure this is a little hacky.
  // and it seems to exponentially make more calls.
  // setInterval(getLocation, 10000);

  // This should make the call once
  useEffect(() => {
    let didCancel = false;
    if (!didCancel) {
      getLocation();
    }
    return () => {
      didCancel = true;
    };
  }, [update]);

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
          {itemList.map(item => {
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
      <TouchableOpacity>
        <Icon
          style={{position: 'absolute', bottom: 30, right: 30}}
          name="refresh"
          size={40}
          color="#254952"
          onPress={() => setUpdate(prevState => !prevState)} //getLocation()}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
  name: {
    fontSize: 18,
    marginBottom: 5,
    width: 135,
    fontWeight: 'bold',
  },
  image: {
    width: 132,
    height: 110,
    alignSelf: 'center',
    marginBottom: 5,
  },
});
