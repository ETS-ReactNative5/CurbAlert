import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import {useSelector, useDispatch} from 'react-redux';
// import {addItem} from './../redux/actions';
import {db} from './../firebase/firebase-config';
import {collection, getDocs, doc, setDoc, Timestamp} from 'firebase/firestore';
import {v4 as uuid} from 'uuid';
import RNLocation from 'react-native-location';

const AddItem = ({navigation}) => {
  // REDUX STUFF I'M NOT USING
  // const state = useSelector(s => s.itemReducer);
  // console.log(state);
  // const {title, description} = state;
  // const dispatch = useDispatch();

  // const onChangeTitle = titleValue => dispatch(setTitle(titleValue));
  // const onChangeDescription = descriptionValue =>
  //   dispatch(setDescription(descriptionValue));
  // const onPressAddItem = item => dispatch(addItem(item));

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 46.519958,
    longitude: -123.677899,
  });

  const getLocation = async () => {
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'fine', // or 'coarse'
      },
    });

    if (!permission) {
      permission = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'fine',
          rationale: {
            title: 'We need to access your location',
            message: 'We use your location to show where you are on the map',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        },
      });
      setCurrentLocation(await RNLocation.getLatestLocation({timeout: 100000}));
      const date = new Date();
      console.log('location updated: ' + date);
    } else {
      setCurrentLocation(await RNLocation.getLatestLocation({timeout: 100000}));
      const date = new Date();
      console.log('location updated: ' + date);
    }
  };

  const [titleInput, setTitle] = useState('');
  const [descriptionInput, setDescription] = useState('');
  const [distance, setDistance] = useState('');
  const onChangeTitle = titleValue => setTitle(titleValue);
  const onChangeDescription = descriptionValue =>
    setDescription(descriptionValue);

  // const SetData = async () => {
  const onPressAddItem = async () => {
    await getLocation();
    await setDoc(doc(db, 'items', uuid()), {
      title: titleInput,
      distance: distance,
      coordinate: {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
      },
      description: descriptionInput,
      timestamp: Timestamp.fromDate(new Date()),
      is_taken: false,
      is_damaged: false,
      thumbs_up: 0,
      flagged: false,
      image_path: "require('../assets/IMG_0534.jpeg')",
    });
    navigation.navigate('ItemList');
  };
  return (
    <View>
      <TextInput
        placeholder="Item Title"
        style={styles.input}
        onChangeText={onChangeTitle}
        maxLength={40}
        autoCapitalize="words"
      />
      <TextInput
        placeholder="Description"
        style={styles.input}
        onChangeText={onChangeDescription}
        maxLength={140}
        autoCapitalize="sentences"
      />
      <TouchableOpacity style={styles.btn} onPress={() => onPressAddItem()}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

AddItem.propTypes = {
  addItem: PropTypes.func,
  calculateDistance: PropTypes.func,
};

export default AddItem;

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#9dc6dd',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: '#254952',
    fontSize: 20,
    textAlign: 'center',
  },
});
