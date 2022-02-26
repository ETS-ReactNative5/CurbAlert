import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import PropTypes from 'prop-types';

const ListItem = ({item, deleteItem, handleSelectingItem}) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleSelectingItem(item.id)}>
      <View style={styles.listItemView}>
        <Text numberOfLines={1} style={styles.listItemText}>
          {item.text} - {item.description}: {item.distance} miles away
        </Text>
        {/* <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        /> */}
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  item: PropTypes.object,
  deleteItem: PropTypes.func,
  handleSelectingItem: PropTypes.func,
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});
