import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Item from './Item';
import {items} from './../model/data';
import {ListItem} from 'react-native-elements/dist/list/ListItem';
import {db} from './../firebase/firebase-config';
import {collection, getDocs, doc, setDoc, Timestamp} from 'firebase/firestore';
import {windowWidth, windowHeight} from '../utils/Dimensions';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {getLocation} from '../utils/getLocation';

function ItemList({navigation}) {
  const [itemList, setItemList] = useState({});
  const [update, setUpdate] = useState(false);

  // FROM https://geodatasource.com/developers/javascript
  function getDistance(lat1, lon1, lat2, lon2) {
    if (lat1 === lat2 && lon1 === lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      const distInFeet = dist * 60 * 1.1515 * 1.609344 * 3280.84;
      return Math.floor(distInFeet);
    }
  }

  useEffect(() => {
    let didCancel = false;
    const getData = async () => {
      const location = await getLocation();
      if (!didCancel) {
        const itemsCollection = collection(db, 'items');
        const itemSnapshot = await getDocs(itemsCollection);
        const newItemList = itemSnapshot.docs.map(d => d.data());
        newItemList.map(item => {
          item.distance = getDistance(
            location.latitude,
            location.longitude,
            item.coordinate.latitude,
            item.coordinate.longitude,
          );
        });
        console.log(newItemList);
        setItemList(newItemList);
        const date = new Date();
        console.log(date);
      }
    };
    getData();
    return () => {
      didCancel = true;
    };
  }, [update]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <View style={{height: windowHeight - 180}}>
        <FlatList
          data={itemList}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ItemDetail', {item})}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: 'solid black 1px',
                paddingBottom: 7,
                paddingTop: 7,
                margin: 1,
                paddingLeft: 5,
                backgroundColor: '#9dc6dd',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Image
                  // source={item.image_path}
                  source={require('./../assets/placeholder_image.png')}
                  style={{
                    width: 65,
                    height: 65,
                    borderRadius: 5,
                    marginRight: 8,
                  }}
                />
                <View style={{width: windowWidth - 180}}>
                  <Text
                    style={{
                      color: '#254952',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{color: '#254952', fontSize: 16}}>
                    {item.description}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={{marginRight: 5}}>
                  {item.distance < 1001
                    ? `${item.distance} feet away`
                    : `${(item.distance / 5280).toFixed(1)} miles away`}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 30,
            backroundColor: '#529aff',
          }}>
          <Icon
            name="map"
            size={40}
            color="#254952"
            onPress={() => navigation.navigate('Map', {itemList})}
          />
          <Icon
            name="plus"
            size={40}
            color="#254952"
            onPress={() => navigation.navigate('AddItem')}
          />
          <Icon
            name="refresh"
            size={40}
            color="#254952"
            onPress={() => setUpdate(prevState => !prevState)}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ItemList;
