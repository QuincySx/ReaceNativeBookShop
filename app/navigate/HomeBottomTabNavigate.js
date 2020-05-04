import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeArticleCursorNavigate from './HomeArticleCursorNavigate';
import AboutView from '../view/about/AboutView';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default class HomeBottomTabNavigate extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === '首页') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === '关于') {
              iconName = focused
                ? 'information-circle'
                : 'information-circle-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="首页" component={HomeArticleCursorNavigate} />
        <Tab.Screen name="关于" component={AboutView} />
      </Tab.Navigator>
    );
  }
}

//yarn add @react-navigation/bottom-tabs
