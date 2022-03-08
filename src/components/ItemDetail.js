import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import PropTypes from 'prop-types';
import {windowWidth, windowHeight} from '../utils/Dimensions';

const ItemDetail = ({route, navigation}) => {
  const {title, description, distance, image_path, thumbs_up, id} =
    route.params.item;
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>
          <Text style={styles.title}>{item.text}</Text>
        </Text>
        <Text style={styles.listItemText}>{item.distance} miles away</Text>
      </View>
      <View style={styles.description}>
        <Text>{item.timestamp}</Text>
        <Text>{item.description}</Text>
        {/* <Text>{item.is_taken}</Text>
        <Text>{item.is_damaged}</Text> */}
        <Text>This item has recieved {item.thumbs_up} thumbs ups.</Text>
      </View>
      <View>
        <Image
          source={item.image_path}
          style={{
            width: windowWidth - 20,
            height: windowHeight - 300,
            alignItems: 'center',
          }}
        />
      </View>
      <View style={styles.listItemView}>
        <Icon
          name="thumbs-up"
          size={40}
          color="green"
          // onPress={() => deleteItem(item.id)}
        />
        <Icon
          name="thumbs-down"
          size={40}
          color="orange"
          // onPress={() => deleteItem(item.id)}
        />
        <Icon
          name="check"
          size={40}
          color="blue"
          // onPress={() => deleteItem(item.id)}
        />
        <Icon
          name="flag"
          size={40}
          color="firebrick"
          // onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  deleteItem: PropTypes.func,
};

export default ItemDetail;

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
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  distance: {
    fontStyle: 'italic',
  },
  description: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});
