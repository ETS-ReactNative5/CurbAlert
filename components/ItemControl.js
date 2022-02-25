import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';
import {v4 as uuid} from 'uuid';
import ItemDetail from './ItemDetail';

const ItemControl = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'sofa', distance: 1.5, description: 'good shape'},
    {id: uuid(), text: 'books', distance: 0.2, description: "i can't read"},
    {id: uuid(), text: 'lamp', distance: 0.5, description: 'missing bulb'},
    {
      id: uuid(),
      text: 'long and tall mirror',
      distance: 0.9,
      description: 'am a vampire, cant see myself in it! OK?!',
    },
  ]);

  const [selectedItem, setSelectedItem] = useState({text: 'test'});

  const handleSelectingItem = id => {
    const changeSelectedItem = items.filter(item => item.id === id)[0];
    console.log(changeSelectedItem);
    setSelectedItem({changeSelectedItem});
  };

  // NOT SURE HOW TO SET THIS UP TO SAVE ID IN CURRENT STATE??
  // const handleItemPress = (id) => {
  //   setState({
  //     currentItemInDetail: id,
  //   });
  // };

  // handleChangingSelectedTicket = (id) => {
  //   // const selectedTicket = this.props.mainTicketList[id];
  //   this.props.firestore
  //     .get({ collection: "tickets", doc: id })
  //     .then((ticket) => {
  //       const firestoreTicket = {
  //         names: ticket.get("names"),
  //         location: ticket.get("location"),
  //         issue: ticket.get("issue"),
  //         id: ticket.id,
  //       };
  //       this.setState({ selectedTicket: firestoreTicket });
  //     });
  // };

  const calculateDistance = () => {
    return (Math.random() * 3).toFixed(1);
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
      <Text>{selectedItem.text}</Text>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem
            item={item}
            deleteItem={deleteItem}
            handleSelectingItem={handleSelectingItem}
            // itemPress={handleItemPress}
          />
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
