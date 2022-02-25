import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import React, {useState} from 'react';
import PropTypes from 'prop-types'

const AddItem = ({addItem, calculateDistance}) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [distance, setDistance] = useState('');
  const onChange = textValue => setText(textValue);
  const onChangeDescription = textValue => setDescription(textValue);
  return (
    <View>
      <TextInput
        placeholder="Item Title"
        style={styles.input}
        onChangeText={onChange}
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
        onPress={() => addItem(text, description, calculateDistance())}>
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
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});
