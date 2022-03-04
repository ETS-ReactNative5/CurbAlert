// ******** WITH STUFF FROM ITEM CONTROL ******
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import 'react-native-get-random-values';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Header from './Header';
import ListItem from './ListItem';
import AddItem from './AddItem';
import {v4 as uuid} from 'uuid';
import ItemDetail from './ItemDetail';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Logo from './../assets/logo.jpeg';

const Stack = createNativeStackNavigator();

const App = () => {
  function LogoTitle() {
    // return <Icon name="exclamation-circle" size={40} color="#E4F1F1" />;
    // Need to get the logo import to work for this:
    return <Image style={{width: 50, height: 50}} source={Logo} />;
  }

  // function Header() {
  //   return (
  //     <View style={styles.container}>
  //       <Header />
  //     </View>
  //   );
  // }

  function HomeScreen({navigation}) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E4F1F1',
        }}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 30, color: '#001F29'}}>
            Curb Alert
          </Text>
        </View>
        <Image
          source={require('./../assets/logo.jpeg')}
          style={{width: '100%'}}
        />
        {/* <Logo width={300} /> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ItemList')}
          style={{
            backgroundColor: '#014351',
            width: '90%',
            padding: 20,
            color: '#E4F1F1',
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#E4F1F1'}}>
            Get Started
          </Text>
          <Icon name="arrow-right" size={22} color="#E4F1F1" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  function ItemForm({navigation}) {
    return (
      <View style={styles.list}>
        <AddItem addItem={addItem} calculateDistance={calculateDistance} />
        <Button
          title="Submit"
          onPress={() => navigation.navigate('ItemList')}
        />
      </View>
    );
  }

  function ItemDetailFunc({navigation}) {
    return (
      <View style={styles.list}>
        <ItemDetail item={selectedItem} deleteItem={deleteItem} />
      </View>
    );
  }

  function ItemList({navigation}) {
    return (
      <View style={styles.list}>
        <View>
          <FlatList
            data={items}
            renderItem={({item}) => (
              <ListItem item={item} handleSelectingItem={handleSelectingItem} />
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
      </View>
    );
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
    // STILL NOT SURE HOW TO MAKE THIS WORK. THIS IS THE FORMAT FOR PASSING PROPS
    // I think i should be passing just the item ID instead of the whole item
    // should store the whole item in a global store instead
    // navigation.navigate('ItemDetail', {item: changeSelectedItem});
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
    // const {navigation} = NavigationContainer;
    setItems(prevItems => {
      return [{id: uuid(), text, description, distance}, ...prevItems];
    });
    // I was trying to add navigation to the button here
    // navigation.goBack();
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#014351',
          },
          headerTintColor: '#E4F1F1',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        {/* <Stack.Screen name="Header" component={Header} /> */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddItem"
          component={ItemForm}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
              <Icon
                name="bars"
                size={20}
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#E4F1F1"
              />
            ),
            // title: 'Add an item!',
            // headerStyle: {
            //   backgroundColor: '#f4511e',
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
          }}
        />
        {/* PASSING IN PROPS THIS WAY NOT WORKING
        {props => <ItemForm {...props} calculateDistance={calculateDistance} addItem={addItem} />} */}
        <Stack.Screen
          name="ItemList"
          component={ItemList}
          options={{title: 'Items'}}
        />
        <Stack.Screen
          name="ItemDetail"
          component={ItemDetailFunc}
          // Pass in the item name as a param to display that as a title
          // options={({route}) => ({title: route.params.name})}
        />
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
