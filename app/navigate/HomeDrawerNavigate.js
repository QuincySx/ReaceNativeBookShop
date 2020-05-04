import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutView from '../view/about/AboutView';
import CustomDrawerJustView from '../view/customDrawer/CustomDrawerJustView';
import HomeBottomTabNavigate from './HomeBottomTabNavigate';

const Drawer = createDrawerNavigator();

export default class HomeDrawerNavigate extends React.Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeBottomTabNavigate} />
        <Drawer.Screen name="Drawer" component={AboutView} />
        <Drawer.Screen name="CustomDrawer" component={CustomDrawerJustView} />
      </Drawer.Navigator>
    );
  }
}

//yarn add @react-navigation/drawer
