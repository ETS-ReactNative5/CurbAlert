// SORT OF WORKING CODE

// import React, {useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {View, Text, StyleSheet, Image} from 'react-native';
// import 'react-native-get-random-values';
// import Header from './Header';
// import ItemControl from './ItemControl';
// import SignIn from './SignIn';
// import SignUp from './SignUp';

// const Stack = createNativeStackNavigator();

// function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Header />
//       <ItemControl />
//     </View>
//   );
// }

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 60,
//   },
//   text: {
//     color: 'darkslateblue',
//     fontSize: 40,
//   },
//   img: {
//     width: 200,
//     height: 200,
//   },
// });

// export default App;

// ******** WITH STUFF FROM ITEM CONTROL ******
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import 'react-native-get-random-values';
import Header from './Header';
import ListItem from './ListItem';
import AddItem from './AddItem';
import {v4 as uuid} from 'uuid';
import ItemDetail from './ItemDetail';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Stack = createNativeStackNavigator();

const App = () => {
  // I DON'T THINK I NEED THESE FUNCTIONS ANY MORE... BUT MAYBE I DO TO PASS IN PROPS?
  // function Header() {
  //   return (
  //     <View style={styles.container}>
  //       <Header />
  //     </View>
  //   );
  // }

  function ItemForm() {
    return (
      <View style={styles.list}>
        <AddItem addItem={addItem} calculateDistance={calculateDistance} />
      </View>
    );
  }

  // function ItemDetail() {
  //   return (
  //     <View style={styles.list}>
  //       <ItemDetail item={selectedItem} deleteItem={deleteItem} />
  //     </View>
  //   );
  // }

  function ItemList() {
    <View style={styles.list}>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} handleSelectingItem={handleSelectingItem} />
        )}
      />
    </View>;
  }

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
      image_path: 'https://picsum.photos/200',
    },
    {
      id: uuid(),
      text: 'books',
      distance: 0.2,
      description: 'just some old books my kids outgrew',
      timestamp: 'Feb 25, 2022, 11:59:11 PM',
      is_taken: false,
      is_damaged: false,
      thumbs_up: 0,
      flag: false,
      image_path: 'https://picsum.photos/200',
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
      image_path: 'https://picsum.photos/200',
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
      image_path: 'https://picsum.photos/200',
    },
  ]);

  const [selectedItem, setSelectedItem] = useState({});
  const handleSelectingItem = id => {
    const changeSelectedItem = items.filter(item => item.id === id)[0];
    setSelectedItem(changeSelectedItem);
  };

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Add an item!" component={ItemForm} />
        <Stack.Screen name="Items" component={ItemList} />
        <Stack.Screen name="Item Detail" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 40,
  },
  img: {
    width: 200,
    height: 200,
  },
  list: {
    flex: 2,
  },
});

export default App;
