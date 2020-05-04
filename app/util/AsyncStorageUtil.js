import {AsyncStorage} from 'react-native';

var AsyncStorageUtil = {
  setValue: function(key, value, callBcak) {
    if (value) {
      return AsyncStorage.setItem(key, value, error => callBcak(error));
    }
  },
  setValues: function(multiParis, callBcak) {
    if (multiParis) {
      return AsyncStorage.setItem(multiParis, error => callBcak(error));
    }
  },
  getValue: function(key, callBcak) {
    AsyncStorage.getItem(key, (error, result) => callBcak(error, result));
  },
  removeValue: function(key, callBcak) {
    AsyncStorage.removeItem(key, error => callBcak(error));
  },
};

export default AsyncStorageUtil;

// yarn add @react-native-community/async-storage
