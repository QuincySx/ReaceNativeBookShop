import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerPageView from '../view/customDrawer/CustomDrawerPageView';
import CustomDrawerHomeView from '../view/customDrawer/CustomDrawerHomeView';

const Drawer = createDrawerNavigator();

export default class CustomHomeDrawerNavigate extends React.Component {
  render() {
    return (
      <Drawer.Navigator
        drawerContent={props => {
          return <CustomDrawerPageView />;
        }}>
        <Drawer.Screen name="custom" component={CustomDrawerHomeView} />
      </Drawer.Navigator>
    );
  }
}

//yarn add @react-navigation/drawer
