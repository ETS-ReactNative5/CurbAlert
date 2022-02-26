import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';
import {v4 as uuid} from 'uuid';
import ItemDetail from './ItemDetail';

const ItemControl = () => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      text: 'sofa',
      distance: 1.5,
      description: 'in good shape! come get it before it rains',
      timestamp: 'Feb 25, 2022, 11:59:11 PM',
      is_taken: false,
      is_damaged: false,
      thumbs_up: 0,
      flag: false,
      image_path: "https://picsum.photos/200",
    },
    {
      id: uuid(),
      text: 'books',
      distance: 0.2,
      description: "just some old books my kids outgrew",
      timestamp: 'Feb 25, 2022, 11:59:11 PM',
      is_taken: false,
      is_damaged: false,
      thumbs_up: 0,
      flag: false,
      image_path: "https://picsum.photos/200",
    },
    {
      id: uuid(),
      text: 'lamp',
      distance: 0.5,
      description: 'missing bulb but it works',
      timestamp: 'Feb 25, 2022, 11:59:11 PM',
      is_taken: false,
      is_damaged: false,
      thumbs_up: 0,
      flag: false,
      image_path: "https://picsum.photos/200",
    },
    {
      id: uuid(),
      text: 'long and tall mirror',
      distance: 0.9,
      description: 'i am a vampire, cant see myself in it! OK?!',
      timestamp: 'Feb 25, 2022, 11:59:11 PM',
      is_taken: false,
      is_damaged: false,
      thumbs_up: 0,
      flag: false,
      image_path: "https://picsum.photos/200",
    },
  ]);

  const [selectedItem, setSelectedItem] = useState({});
  const handleSelectingItem = id => {
    const changeSelectedItem = items.filter(item => item.id === id)[0];
    setSelectedItem(changeSelectedItem);
  };

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
      <ItemDetail item={selectedItem} deleteItem={deleteItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} handleSelectingItem={handleSelectingItem} />
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
