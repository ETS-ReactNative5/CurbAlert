import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  SafeAreaView,
} from 'react-native';
import Item from './Item';
import {items} from './../model/data';
import {ListItem} from 'react-native-elements/dist/list/ListItem';
import {db} from './../firebase/firebase-config';
import {collection, getDocs, doc, setDoc, Timestamp} from 'firebase/firestore';

function ItemList({navigation}) {
  // This is set up to take the hard coded data and update it with the data from
  // firestore, but it doesn't do that yet.
  let itemList = items;
  const GetData = async () => {
    const itemsCollection = collection(db, 'items');
    const itemSnapshot = await getDocs(itemsCollection);
    const newItemList = itemSnapshot.docs.map(doc => doc.data());
    console.log(itemList);
    itemList = newItemList;
  };

  const onItemPress = item => {
    navigation.navigate('ItemDetail', {
      greeting: 'hello',
    });
  };

  return (
    <SafeAreaView style={{flex: 1, marginBottom: 100}}>
      <View>
        <FlatList
          data={itemList}
          renderItem={({item}) => <Item onPress={() => onItemPress(item)} />}
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
