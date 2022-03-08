import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import PropTypes from 'prop-types';
import {windowWidth} from '../utils/Dimensions';

const Item = ({route, navigation}) => {
  item = {
    id: 1,
    title: 'Sofa',
    distance: 1.5,
    coordinate: {
      latitude: 45.5219778825814,
      longitude: -122.67533488152338,
    },
    description: 'In good shape! Come get it before it rains',
    timestamp: 'Feb 25, 2022, 11:59:11 PM',
    is_taken: false,
    is_damaged: false,
    thumbs_up: 0,
    flagged: false,
    image_path: require('../assets/IMG_1188.jpeg'),
  };
  const {title, description, distance, image_path, thumbs_up, id} = item;
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
      }}>
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
            {title}
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
