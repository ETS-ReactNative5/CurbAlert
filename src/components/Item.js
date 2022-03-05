import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import PropTypes from 'prop-types';
import {windowWidth} from '../utils/Dimensions';

const Item = ({item, deleteItem, handleSelectingItem}) => {
  const {text, description, distance, image_path, thumbs_up, id} = item;
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: 'solid black 1px',
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 5,
        // backgroundColor: '#9dc6dd',
      }}
      onPress={() => handleSelectingItem(id)}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}>
        <Image
          source={image_path}
          style={{width: 65, height: 65, borderRadius: 5, marginRight: 8}}
        />
        <View style={{width: windowWidth - 180}}>
          <Text style={{color: '#254952', fontSize: 18, fontWeight: 'bold'}}>
            {text}
          </Text>
          <Text numberOfLines={1} style={{color: '#254952', fontSize: 16}}>
            {description}
          </Text>
          {/* <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(id)}
        /> */}
        </View>
      </View>
      <View>
        <Text style={{marginRight: 5}}>{distance} miles away</Text>
      </View>
    </TouchableOpacity>
  );
};

Item.propTypes = {
  item: PropTypes.object,
  deleteItem: PropTypes.func,
  handleSelectingItem: PropTypes.func,
};

export default Item;

const styles = StyleSheet.create({
  listItem: {},
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});
