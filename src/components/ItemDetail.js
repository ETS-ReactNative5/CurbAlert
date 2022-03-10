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
import {collection, getDocs, doc, setDoc, Timestamp} from 'firebase/firestore';
import {db} from './../firebase/firebase-config';
import {getTimeSince} from './../utils/getTimeSince';

const ItemDetail = ({route, navigation}) => {
  const {item} = route.params;

  const iconPress = async button => {
    switch (button) {
      case 'flag':
        await setDoc(doc(db, 'items', item.id), {
          ...item,
          flagged: item.flagged + 1,
        });
        navigation.navigate('ItemList', {
          message: 'Thank you. The item has been flagged for removal.',
          // updated: true,
        });
        break;
      case 'thumb':
        await setDoc(doc(db, 'items', item.id), {
          ...item,
          thumbs_up: item.thumbs_up + 1,
        });
        navigation.navigate('ItemList', {
          message: 'Thanks for giving this item a thumbs up!',
          // updated: true,
        });
        break;
      case 'take':
        await setDoc(doc(db, 'items', item.id), {
          ...item,
          is_taken: true,
          taken_time: Timestamp.fromDate(new Date()),
        });
        navigation.navigate('ItemList', {
          message:
            'Thanks for taking this item! If there are other items still available, please make a new post for the next person.',
          // updated: true,
        });
        break;
      case 'damage':
        await setDoc(doc(db, 'items', item.id), {...item, is_damaged: true});
        navigation.navigate('ItemList', {
          message:
            'Thanks for marking this item as damaged or missing! If there are other, undamaged items still available, please make a new post.',
          // updated: true,
        });
        break;
      default:
        break;
    }
  };

  const closeEnough = () => {
    if (item.distance < 500) {
      return (
        <>
          <Icon
            name="thumbs-up"
            size={40}
            color="#254952"
            onPress={() => iconPress('thumb')}
          />
          <Icon
            name="thumbs-down"
            size={40}
            color="#254952"
            onPress={() => iconPress('damage')}
          />
          <Icon
            name="check"
            size={40}
            color="#254952"
            onPress={() => iconPress('take')}
          />
          <Icon
            name="flag"
            size={40}
            color="#254952"
            onPress={() => iconPress('flag')}
          />
        </>
      );
    } else {
      return (
        <>
          <Icon name="thumbs-up" size={40} color="#67A6CB" />
          <Icon name="thumbs-down" size={40} color="#67A6CB" />
          <Icon name="check" size={40} color="#67A6CB" />
          <Icon
            name="flag"
            size={40}
            color="#254952"
            onPress={() => iconPress('flag')}
          />
        </>
      );
    }
  };

  return (
    <View style={styles.listItem}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={{fontSize: 18}}>
          {item.distance < 501
            ? `${item.distance} feet away`
            : `${(item.distance / 5280).toFixed(
                1,
              )} miles away.    (Buttons work within 500ft)`}
        </Text>
        <Text>{getTimeSince(item.timestamp)}</Text>
        <Text style={{fontSize: 16}}>{item.description}</Text>
        <Text>
          {item.is_taken
            ? `Item was taken ${getTimeSince(item.taken_time)}`
            : 'Item is available'}
        </Text>
        <Text>
          {item.is_damaged
            ? 'This item may be damaged'
            : 'This item is in good condition'}
        </Text>
        <Text>
          {item.thumbs_up > 0
            ? `This item has recieved ${item.thumbs_up} thumbs ups.`
            : ''}
        </Text>
      </View>
      <View>
        <Image
          source={{uri: item.image_path}}
          // source={require('./../assets/placeholder_image.png')}
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
        {closeEnough()}
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
