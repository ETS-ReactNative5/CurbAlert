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
import items from './../model/data';

function ItemList({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, marginBottom: 100}}>
      <View>
        <FlatList
          data={items}
          renderItem={({item}) => (
            <Item item={item} handleSelectingItem={handleSelectingItem} />
          )}
        />
      </View>
      <View>
        <Button
          title="Add an item"
          onPress={() => navigation.navigate('AddItem')}
        />
        <Button
          title="SEE DETAIL"
          onPress={() => navigation.navigate('ItemDetail')}
        />
      </View>
    </SafeAreaView>
  );
}

export default ItemList;
