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
import {windowWidth} from '../utils/Dimensions';

function ItemList({navigation}) {
  // This is set up to take the hard coded data and update it with the data from
  // firestore, but it doesn't do that yet.
  // let itemList = items;
  const [itemList, setItemList] = useState({});
  const GetData = async () => {
    const itemsCollection = collection(db, 'items');
    const itemSnapshot = await getDocs(itemsCollection);
    const newItemList = itemSnapshot.docs.map(doc => doc.data());
    setItemList(newItemList);
  };

  useEffect(() => {
    GetData();
  });

  return (
    <SafeAreaView style={{flex: 1, marginBottom: 100}}>
      <View>
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
                  source={item.image_path}
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
                  {/* <Icon
              name="remove"
              size={20}
              color="firebrick"
              onPress={() => deleteItem(id)}
            /> */}
                </View>
              </View>
              <View>
                <Text style={{marginRight: 5}}>{item.distance} miles away</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <Button
          title="Add an Item"
          onPress={() => navigation.navigate('AddItem')}
        />
        <Button title="See Map" onPress={() => navigation.navigate('Map')} />
        <Button title="Get data" onPress={GetData} />
      </View>
    </SafeAreaView>
  );
}

export default ItemList;
