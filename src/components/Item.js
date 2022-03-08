import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import PropTypes from 'prop-types';
import {windowWidth} from '../utils/Dimensions';

const Item = ({item, navigation}) => {
  const {title, description, distance, image_path, thumbs_up, id} = item;
  return (
    <TouchableOpacity
      // onPress={navigation.navigate('Map')}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: 'solid black 1px',
        paddingBottom: 7,
        paddingTop: 7,
        margin: 1,
        paddingLeft: 5,
        backgroundColor: '#9dc6dd',
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
