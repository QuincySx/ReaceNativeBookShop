import AsyncStorageUtil from '../util/AsyncStorageUtil';

var AppStackManager = {
  goMainCheck: function(navigation) {
    var routeName;
    AsyncStorageUtil.getValue('userName', (error, result) => {
      if (result) {
        routeName = 'Login';
      } else {
        routeName = 'Home';
      }
      navigation.replace(routeName);
    });
  },
  goMain: function(navigation) {
    navigation.replace('Home');
  },
  goRegisterAccount: function(navigation) {
    navigation.navigate('Register');
  },
  goAbout: function(navigation) {
    navigation.navigate('About');
  },
  goCustomDrawerHome: function(navigation) {
    navigation.navigate('CustomDrawerHome');
  },
};
export default AppStackManager;
