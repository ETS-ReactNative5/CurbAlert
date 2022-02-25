import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import React, {useState} from 'react';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
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
        onPress={() => addItem(text, description)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
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
