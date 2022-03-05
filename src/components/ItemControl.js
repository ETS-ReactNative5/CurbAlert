// WRITTEN AS FUNCTION WITH USESTATE HOOK

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


// WRITTEN AS CLASS

// import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
// import React from 'react';
// import ListItem from './ListItem';
// import AddItem from './AddItem';
// import {v4 as uuid} from 'uuid';
// import ItemDetail from './ItemDetail';
// import RNLocation from 'react-native-location';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// RNLocation.configure({
//   distanceFilter: 10,
// });

// class ItemControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [
//         {
//           id: uuid(),
//           text: 'sofa',
//           distance: 1.5,
//           description: 'in good shape! come get it before it rains',
//           timestamp: 'Feb 25, 2022, 11:59:11 PM',
//           is_taken: false,
//           is_damaged: false,
//           thumbs_up: 0,
//           flag: false,
//           image_path: 'https://picsum.photos/200',
//         },
//         {
//           id: uuid(),
//           text: 'books',
//           distance: 0.2,
//           description: 'just some old books my kids outgrew',
//           timestamp: 'Feb 25, 2022, 11:59:11 PM',
//           is_taken: false,
//           is_damaged: false,
//           thumbs_up: 0,
//           flag: false,
//           image_path: 'https://picsum.photos/200',
//         },
//         {
//           id: uuid(),
//           text: 'lamp',
//           distance: 0.5,
//           description: 'missing bulb but it works',
//           timestamp: 'Feb 25, 2022, 11:59:11 PM',
//           is_taken: false,
//           is_damaged: false,
//           thumbs_up: 0,
//           flag: false,
//           image_path: 'https://picsum.photos/200',
//         },
//         {
//           id: uuid(),
//           text: 'long and tall mirror',
//           distance: 0.9,
//           description: 'i am a vampire, cant see myself in it! OK?!',
//           timestamp: 'Feb 25, 2022, 11:59:11 PM',
//           is_taken: false,
//           is_damaged: false,
//           thumbs_up: 0,
//           flag: false,
//           image_path: 'https://picsum.photos/200',
//         },
//       ],
//       selectedItem: {
//         id: uuid(),
//         text: 'long and tall mirror',
//         distance: 0.9,
//         description: 'i am a vampire, cant see myself in it! OK?!',
//         timestamp: 'Feb 25, 2022, 11:59:11 PM',
//         is_taken: false,
//         is_damaged: false,
//         thumbs_up: 0,
//         flag: false,
//         image_path: 'https://picsum.photos/200',
//       },
//       lat: null,
//       lon: null,
//       spaceTime: null,
//     };
//   }

//   permissionHandle = async () => {
//     let permission = await RNLocation.checkPermission({
//       ios: 'whenInUse', // or 'always'
//       android: {
//         detail: 'coarse', // or 'fine'
//       },
//     });
//     let location;

//     if (!permission) {
//       permission = await RNLocation.requestPermission({
//         ios: 'whenInUse',
//         android: {
//           detail: 'coarse',
//           rationale: {
//             title: 'We need to access your location',
//             message: 'We use your location to show where you are on the map',
//             buttonPositive: 'OK',
//             buttonNegative: 'Cancel',
//           },
//         },
//       });
//       console.log(permission);
//       location = await RNLocation.getLatestLocation({timeout: 100});
//       console.log(
//         location,
//         location.longitude,
//         location.latitude,
//         location.timestamp,
//       );
//     } else {
//       console.log('Here 7');
//       location = await RNLocation.getLatestLocation({timeout: 100});
//       this.setState({
//         lat: location.latitude,
//         lon: location.longitude,
//         spaceTime: location.timestamp,
//       });
//       console.log(
//         location,
//         location.longitude,
//         location.latitude,
//         location.timestamp,
//       );
//     }
//   };

//   handleSelectingItem = id => {
//     const newItem = this.state.items.filter(item => item.id === id)[0];
//     this.setState({selectedItem: newItem});
//   };

//   calculateDistance = () => {
//     return (Math.random() * 3).toFixed(1);
//   };

//   deleteItem = id => {
//     const deletedItems = this.state.items.filter(item => item.id !== id);
//     this.setState({items: deletedItems});
//   };

//   // This still needs refactoring
//   addItem = (text, description, distance) => {
//     this.setState(prevItems => {
//       return [{id: uuid(), text, description, distance}, ...prevItems];
//     });
//   };

//   render() {
//     return (
//       <View style={styles.list}>
//         <View
//           style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
//           <Button title="Get Location" onPress={this.permissionHandle} />
//         </View>
//         <Text>Latitude: {this.state.lat}</Text>
//         <Text>Longitude: {this.state.lon}</Text>
//         <AddItem
//           addItem={this.addItem}
//           calculateDistance={this.calculateDistance}
//         />
//         <ItemDetail
//           item={this.state.selectedItem}
//           deleteItem={this.deleteItem}
//         />
//         <FlatList
//           data={this.state.items}
//           renderItem={({item}) => (
//             <ListItem
//               item={item}
//               handleSelectingItem={this.handleSelectingItem}
//             />
//           )}
//         />
//       </View>
//     );
//   }
// }

// export default ItemControl;

// const styles = StyleSheet.create({
//   list: {
//     flex: 1,
//   },
// });
