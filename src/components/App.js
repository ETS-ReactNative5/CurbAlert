import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  View,
  StyleSheet,
  Image,
  Button,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import reducer from '../redux/reducers'; // need?
import {Provider} from 'react-redux';
import 'react-native-get-random-values';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HomeScreen from './HomeScreen';
import ItemList from './ItemList';
import AddItem from './AddItem';
import {v4 as uuid} from 'uuid';
import ItemDetail from './ItemDetail';
import {items} from './../model/data';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Logo from './../assets/logo-notext.png';
import Map from './Map';
import {Store} from './../redux/store';
import {db} from './../firebase/firebase-config';
import {collection, getDocs, doc, setDoc, Timestamp} from 'firebase/firestore';

const Stack = createNativeStackNavigator();

const App = () => {
  // function AddItemFunc({navigation}) {
  //   return (
  //     // <View>
  //     //   <AddItem
  //     //     // addItem={addItem}
  //     //     calculateDistance={calculateDistance}
  //     //   />
  //     //   <Button
  //     //     title="Submit"
  //     //     onPress={() => navigation.navigate('ItemList')}
  //     //   />
  //     //   <Button title="Set data" onPress={SetData} />
  //     // </View>
  //   );
  // }

  function ItemDetailFunc({navigation}) {
    return (
      <View>
        <ItemDetail item={selectedItem} deleteItem={deleteItem} />
      </View>
    );
  }

  function HomeScreenFunc({navigation}) {
    return (
      <View>
        <HomeScreen />
      </View>
    );
  }

  const [selectedItem, setSelectedItem] = useState({});
  const handleSelectingItem = id => {
    const changeSelectedItem = items.filter(item => item.id === id)[0];
    setSelectedItem(changeSelectedItem);
  };

  // const deleteItem = id => {
  //   setItems(prevItems => {
  //     return prevItems.filter(item => item.id !== id);
  //   });
  // };

  // const addItem = (text, description, distance) => {
  //   setItems(prevItems => {
  //     return [{id: uuid(), text, description, distance}, ...prevItems];
  //   });
  // };

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#254952',
            },
            headerTintColor: '#d2e6ef',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddItem"
            component={AddItem}
            options={{
              // headerTitle: props => <LogoTitle {...props} />,
              headerRight: () => (
                <Icon
                  name="bars"
                  size={20}
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#d2e6ef"
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
        {props => <AddItemFunc {...props} calculateDistance={calculateDistance} addItem={addItem} />} */}
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
    </Provider>
  );
};

export default App;
