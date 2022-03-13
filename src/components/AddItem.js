import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
// uncomment to use Redux:
// import {useSelector, useDispatch} from 'react-redux';
// import {addItem} from './../redux/actions';
import {db} from './../firebase/firebase-config';
import {collection, getDocs, doc, setDoc, Timestamp} from 'firebase/firestore';
import {v4 as uuid} from 'uuid';
import ImagePicker from 'react-native-image-crop-picker';
import {windowWidth, windowHeight} from '../utils/Dimensions';
import {getLocation} from '../utils/getLocation';
import {CheckBox} from 'react-native-elements';

const AddItem = ({navigation}) => {
  // uncomment to use Redux:
  // const state = useSelector(s => s.itemReducer);
  // const {title, description} = state;
  // const dispatch = useDispatch();

  // const onChangeTitle = titleValue => dispatch(setTitle(titleValue));
  // const onChangeDescription = descriptionValue =>
  //   dispatch(setDescription(descriptionValue));
  // const onPressAddItem = item => dispatch(addItem(item));

  const [imageState, setImage] = useState('');
  const [titleInput, setTitle] = useState('');
  const [descriptionInput, setDescription] = useState('');
  const onChangeTitle = titleValue => setTitle(titleValue);
  const onChangeDescription = descriptionValue =>
    setDescription(descriptionValue);
  const [cannotTakeBox, setCannotTakeBox] = useState(false);

  function takePicture() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  }

  function openGallery() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  }

  const onPressAddItem = async () => {
    if (imageState !== '') {
      const location = await getLocation(); // I think location is updating in time now
      const id = uuid();
      await setDoc(doc(db, 'items', id), {
        id: id,
        title: titleInput,
        distance: 0, // do i need this in the database?
        coordinate: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        description: descriptionInput,
        timestamp: Timestamp.fromDate(new Date()),
        cannot_take: cannotTakeBox,
        is_taken: false,
        is_damaged: false,
        thumbs_up: 0,
        flagged: 0,
        image_path: imageState,
      });
      navigation.navigate('ItemList', {updated: true});
    } else {
      alert('Please add a photo');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 3,
        backgroundColor: '#d2e6ef',
      }}>
      <View>
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <CheckBox
            center
            checkedIcon={
              <Icon
                name="remove"
                type="material"
                color="#254952"
                size={30}
                iconStyle={{marginRight: 10}}
              />
            }
            uncheckedIcon={
              <Icon
                name="check"
                type="material"
                color="#254952"
                size={30}
                iconStyle={{marginRight: 10}}
              />
            }
            checked={cannotTakeBox}
            onPress={() => setCannotTakeBox(!cannotTakeBox)}
          />
          <Text style={{fontSize: 18, width: windowWidth - 90, marginTop: 20}}>
            {cannotTakeBox
              ? "Item can't be taken (for things like fruit trees and tiny libraries)"
              : 'Item can be taken (for most things)'}
          </Text>
        </View>
      </View>
      <View>
        <Image
          source={{uri: imageState}}
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
            marginBottom: 35,
            marginLeft: 50,
            marginRight: 50,
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
