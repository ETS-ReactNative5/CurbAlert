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
import {addItem, setTitle, setDescription} from './../redux/actions';

const AddItem = ({calculateDistance, navigation}) => {
  const {title, description} = useSelector(state => state.itemReducer);
  const dispatch = useDispatch();
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [distance, setDistance] = useState('');

  const onChangeTitle = titleValue => dispatch(setTitle(titleValue));
  const onChangeDescription = descriptionValue =>
    dispatch(setDescription(descriptionValue));
  // const onChange = titleValue => setTitle(titleValue);
  // const onChangeDescription = descriptionValue =>
  //   setDescription(descriptionValue);

  return (
    <View>
      <TextInput
        placeholder="Item Title"
        style={styles.input}
        onChangeText={onChangeTitle}
        maxLength={40}
      />
      <TextInput
        placeholder="Description"
        style={styles.input}
        onChangeText={onChangeDescription}
        maxLength={140}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => addItem(title, description, calculateDistance())}>
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
