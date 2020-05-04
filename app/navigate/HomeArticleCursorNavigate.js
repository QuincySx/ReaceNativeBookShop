import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ArticleListView from '../view/article/ArticleListView';

const Tab = createMaterialTopTabNavigator();

export default class HomeArticleCursorNavigate extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Tab1" component={ArticleListView} />
        <Tab.Screen name="Tab2" component={ArticleListView} />
        <Tab.Screen name="Tab3" component={ArticleListView} />
      </Tab.Navigator>
    );
  }
}

//yarn add @react-navigation/material-top-tabs react-native-tab-view
