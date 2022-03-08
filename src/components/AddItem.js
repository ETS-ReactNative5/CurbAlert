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
import {useSelector, useDispatch} from 'react-redux';
import {addItem} from './../redux/actions';

const AddItem = ({calculateDistance, navigation}) => {
  const state = useSelector(s => s.itemReducer);
  console.log(state);
  const {title, description} = state;
  const dispatch = useDispatch();
  const [titleInput, setTitle] = useState('');
  const [descriptionInput, setDescription] = useState('');
  // const [distance, setDistance] = useState('');

  // const onChangeTitle = titleValue => dispatch(setTitle(titleValue));
  // const onChangeDescription = descriptionValue =>
  //   dispatch(setDescription(descriptionValue));

  const onPressAddItem = item => dispatch(addItem(item));
  const onChangeTitle = titleValue => setTitle(titleValue);
  const onChangeDescription = descriptionValue =>
    setDescription(descriptionValue);

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
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          onPressAddItem({
            title: titleInput,
            description: descriptionInput,
            distance: 1.2,
            image_path: require('../assets/IMG_9670.jpeg'),
            id: Math.floor(Math.random() * 1000),
            coordinate: {
              latitude: 45.501666,
              longitude: -122.677439,
            },
            timestamp: '2300',
          })
        }>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
      <View>
        <Text>New Title: {title}</Text>
        <Text>Description: {description}</Text>
      </View>
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
