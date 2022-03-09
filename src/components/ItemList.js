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

function ItemList({navigation, route}) {
  console.log(route.params);
  const messageDisplay = () => {
    if (route.params !== undefined) {
      // setShowMessage(true);
      // if (route.params.message && showMessage) {
      // setTimeout(function () {
      // setShowMessage(false);
      // }, 5000);
      return <Text>{route.params.message}</Text>;
      // }
    }
  };

  const [itemList, setItemList] = useState({});
  // const [showMessage, setShowMessage] = useState(false);
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
        console.log('location updated: ' + date);
      }
    };
    getData();
    return () => {
      didCancel = true;
    };
  }, [update]);

  const itemDisplayBlock = item => {
    if (item.flagged > 0) {
      if (route.params) {
        return <View style={styles.item}>{messageDisplay()}</View>;
      }
    // } else if () {
    } else {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('ItemDetail', {item})}
          style={styles.item}>
          <View style={styles.itemDisplay}>
            <Image
              // source={item.image_path}
              source={require('./../assets/placeholder_image.png')}
              style={styles.img}
            />
            <View style={styles.itemWords}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text numberOfLines={1} style={styles.description}>
                {item.description}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.distance}>
              {item.distance < 1001
                ? `${item.distance} feet away`
                : `${(item.distance / 5280).toFixed(1)} miles away`}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.pageDisplay}>
      <View style={{height: windowHeight - 200}}>
        <FlatList
          data={itemList}
          renderItem={({item}) => <>{itemDisplayBlock(item)}</>}
        />
      </View>
      <TouchableOpacity>
        <View style={styles.btnText}>
          <Icon
            style={styles.icon}
            name="map"
            onPress={() => navigation.navigate('Map', {itemList})}
          />
          <Icon
            style={styles.icon}
            name="plus"
            onPress={() => navigation.navigate('AddItem')}
          />
          <Icon
            style={styles.icon}
            name="refresh"
            onPress={() => setUpdate(prevState => !prevState)}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ItemList;

const styles = StyleSheet.create({
  pageDisplay: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 3,
    backgroundColor: '#d2e6ef',
  },
  itemDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: 'solid black 1px',
    paddingBottom: 7,
    paddingTop: 7,
    margin: 1,
    paddingLeft: 5,
    backgroundColor: '#9dc6dd',
  },
  distance: {marginRight: 5},
  description: {color: '#254952', fontSize: 16},
  itemWords: {width: windowWidth - 180},
  img: {
    width: 65,
    height: 65,
    borderRadius: 5,
    marginRight: 8,
  },
  titleText: {
    color: '#254952',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    marginLeft: 50,
    marginRight: 50,
    backroundColor: '#529aff',
  },
  icon: {color: '#254952', fontSize: 40, textAlign: 'center'},
});
