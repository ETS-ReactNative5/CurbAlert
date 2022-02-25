import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';
import {v4 as uuid} from 'uuid';
import ItemDetail from './ItemDetail';

const ItemControl = () => {
  const [location, setLocation] = useState([

  ])
  const [items, setItems] = useState([
    {id: uuid(), text: 'sofa', distance: 1.5, description: 'good shape'},
    {id: uuid(), text: 'books', distance: 0.2, description: "i can't read"},
    {id: uuid(), text: 'lamp', distance: 0.5, description: 'missing bulb'},
    {id: uuid(), text: 'long and tall mirror', distance: 0.9, description: 'am a vampire, cant see myself in it! hi ?'},
  ]);

  const calculateDistance = () => {
    return (Math.random()*3).toFixed(1);
  };

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = (text, description, distance) => {
    setItems(prevItems => {
      return [{id: uuid(), text, description, distance}, ...prevItems];
    });
  };

  return (
      <View style={styles.list}>
      <AddItem addItem={addItem} calculateDistance={calculateDistance} />
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

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
