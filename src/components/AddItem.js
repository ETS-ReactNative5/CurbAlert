import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
// import {useSelector, useDispatch} from 'react-redux';
// import {addItem} from './../redux/actions';
import {db} from './../firebase/firebase-config';
import {collection, getDocs, doc, setDoc, Timestamp} from 'firebase/firestore';
import {v4 as uuid} from 'uuid';
import RNLocation from 'react-native-location';
import ImagePicker from 'react-native-image-crop-picker';
import {windowWidth, windowHeight} from '../utils/Dimensions';

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

  RNLocation.configure({
    distanceFilter: 0,
  });

  // const [currentLocation, setCurrentLocation] = useState({
  //   latitude: 46.519958,
  //   longitude: -123.677899,
  // });
  const [imageState, setImage] = useState(
    // "require('./../assets/placeholder_image.png')",
    { uri: 'https://reactjs.org/logo-og.png' },
  );

  const [titleInput, setTitle] = useState('');
  const [descriptionInput, setDescription] = useState('');
  const [distance, setDistance] = useState(0);
  const onChangeTitle = titleValue => setTitle(titleValue);
  const onChangeDescription = descriptionValue =>
    setDescription(descriptionValue);

  useEffect(() => {
    console.log(imageState);
  }, [imageState]);

  function takePicture() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(`require("${image.path}")`);
    });
  }

  function openGallery() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(`require('${image.path}')`);
    });
  }

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
      // setCurrentLocation(await RNLocation.getLatestLocation({timeout: 100000}));
      const date = new Date();
      console.log('location updated: ' + date);
      return await RNLocation.getLatestLocation({timeout: 100000});
    } else {
      // setCurrentLocation(await RNLocation.getLatestLocation({timeout: 100000}));
      const date = new Date();
      console.log('location updated: ' + date);
      return await RNLocation.getLatestLocation({timeout: 100000});
    }
  };

  const onPressAddItem = async () => {
    const location = await getLocation(); // location is not updating in time. Need to make sure this runs first
    await setDoc(doc(db, 'items', uuid()), {
      title: titleInput,
      distance: distance,
      coordinate: {
        latitude: location.latitude,
        longitude: location.longitude,
      },
      description: descriptionInput,
      timestamp: Timestamp.fromDate(new Date()),
      is_taken: false,
      is_damaged: false,
      thumbs_up: 0,
      flagged: false,
      image_path: imageState,
    });
    navigation.navigate('ItemList');
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
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
      </View>
      <View>
        <ImageBackground
          // THIS ISN'T WORKING BUT IT DOESN'T MAKE SENSE WHY!!
          source={imageState}
          // source={{uri: 'https://reactjs.org/logo-og.png'}}
          // source={require('./../assets/placeholder_image.png')}
          // source={{
          // uri: imageState,
          // uri: 'https://data.whicdn.com/images/51328563/original.png',
          // }}
          style={{
            alignItems: 'center',
            marginLeft: (windowWidth - 300) / 2,
            marginRight: (windowWidth - 300) / 2,
          }}
        />
      </View>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 30,
            backroundColor: '#529aff',
          }}>
          <Icon name="camera" size={40} color="#254952" onPress={takePicture} />
          <Icon
            name="plus"
            size={40}
            color="#254952"
            onPress={() => onPressAddItem()}
          />
          <Icon name="photo" size={40} color="#254952" onPress={openGallery} />
        </View>
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
