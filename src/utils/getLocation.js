import RNLocation from 'react-native-location';

RNLocation.configure({
  distanceFilter: 0,
});

export const getLocation = async () => {
  let permission = await RNLocation.checkPermission({
    ios: 'whenInUse', // or 'always'
    android: {
      detail: 'fine', // or 'coarse'
    },
  });

  if (!permission) {
    permission = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'fine',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    });
    // setCurrentLocation(await RNLocation.getLatestLocation({timeout: 100000}));
    const date = new Date();
    console.log('location updated: ' + date);
    return await RNLocation.getLatestLocation({timeout: 100000});
  } else {
    // setCurrentLocation(await RNLocation.getLatestLocation({timeout: 100000}));
    const date = new Date();
    console.log('location updated: ' + date);
    return await RNLocation.getLatestLocation({timeout: 100000});
  }
};
