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

function ItemList({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, marginBottom: 100}}>
      <View>
        <FlatList
          data={items}
          renderItem={({item}) => (
            <Item
              item={item}
              // need to figure out passing props or configure redux
              // or move back to App for the time being...?
              // handleSelectingItem={handleSelectingItem}
            />
          )}
        />
      </View>
      <View>
        <Button
          title="Add an Item"
          onPress={() => navigation.navigate('AddItem')}
        />
        <Button
          title="See Item Detail"
          onPress={() => navigation.navigate('ItemDetail')}
        />
      </View>
    </SafeAreaView>
  );
}

export default ItemList;
