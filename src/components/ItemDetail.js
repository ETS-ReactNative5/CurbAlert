import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import PropTypes from 'prop-types';
import {windowWidth} from '../utils/Dimensions';

const ItemDetail = ({route, navigation}) => {
  const {item} = route.params;

  const getTimeSince = time => {
    const secondsSince = new Date().getTime() / 1000 - time.seconds;
    if (secondsSince < 60) {
      return `${Math.floor(secondsSince)} seconds ago`;
    } else if (secondsSince / 60 < 60) {
      return `${Math.floor(secondsSince / 60)} minutes ago`;
    } else if (secondsSince / 3600 < 7) {
      return `${Math.floor(secondsSince / 3600)} hours ${Math.floor(
        secondsSince % 60,
      )} minutes ago`;
    } else if (secondsSince / 3600 < 24) {
      return `${Math.floor(secondsSince / 3600)} hours ago`;
    } else {
      return `${Math.floor(secondsSince / 3600)} days ago`;
    }
  };

  return (
    <View style={styles.listItem}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={{fontSize: 18}}>{item.distance} miles away</Text>
        <Text>{getTimeSince(item.timestamp)}</Text>
        <Text style={{fontSize: 16}}>{item.description}</Text>
        <Text>{item.is_taken ? 'Item is taken' : 'Item is available'}</Text>
        <Text>
          {item.is_damaged
            ? 'Item is damaged'
            : 'Item has not been marked as damaged'}
        </Text>
        <Text>
          {item.thumbs_up > 0
            ? `This item has recieved ${item.thumbs_up} thumbs ups.`
            : ''}
        </Text>
      </View>
      <View>
        <Image
          // source={item.image_path}
          source={require('./../assets/placeholder_image.png')}
          style={{
            width: 360,
            height: 476,
            // marginLeft: (windowWidth - 350) / 2,
            // marginRight: (windowWidth - 350) / 2,
            alignItems: 'center',
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 30,
        }}>
        <Icon
          name="thumbs-up"
          size={40}
          color="#254952"
          // onPress={() => thumbUpItem(item.id)}
        />
        <Icon
          name="thumbs-down"
          size={40}
          color="#254952"
          // onPress={() => damageItem(item.id)}
        />
        <Icon
          name="check"
          size={40}
          color="#254952"
          // onPress={() => takeItem(item.id)}
        />
        <Icon
          name="flag"
          size={40}
          color="#254952"
          // onPress={() => flagItem(item.id)}
        />
      </TouchableOpacity>
    </View>
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
    backgroundColor: '#d2e6ef',
    borderBottomWidth: 1,
    borderColor: '#eee',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
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
