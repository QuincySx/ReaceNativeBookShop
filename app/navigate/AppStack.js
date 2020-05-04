import * as React from 'react';
import SplashView from '../view/launch/SplashView';
import LoginView from '../view/login/LoginView';
import RegisterView from '../view/login/RegisterView';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AboutView from '../view/about/AboutView';
import HomeDrawerNavigate from './HomeDrawerNavigate';
import CustomHomeDrawerNavigate from './CustomHomeDrawerNavigate';
import ArticleInfoView from '../view/articleInfo/ArticleInfoView';

const Stack = createStackNavigator();

class RootNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Splash"
            component={SplashView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginView}
            options={{headerBackTitleVisible: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterView}
            options={{headerBackTitleVisible: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeDrawerNavigate}
            options={{headerShown: false}}
          />
          <Stack.Screen name="About" component={AboutView} />
          <Stack.Screen name="ArticleInfo" component={ArticleInfoView} />
          <Stack.Screen
            name="CustomDrawerHome"
            component={CustomHomeDrawerNavigate}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default RootNavigator;

// yarn add @react-navigation/native
// yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
