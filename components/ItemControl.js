import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';
import {v4 as uuid} from 'uuid';

const ItemControl = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'sofa', distance: 1.5},
    {id: uuid(), text: 'books', distance: 0.2},
    {id: uuid(), text: 'lamp', distance: 0.5},
    {id: uuid(), text: 'mirror', distance: 0.9},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    setItems(prevItems => {
      return [{id: uuid(), text}, ...prevItems];
    });
  };

  return (
    <View>
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

export default ItemControl;

const styles = StyleSheet.create({});
