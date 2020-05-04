import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import AppStackManager from '../../navigate/AppStackManager';

export default class CustomDrawerHomeView extends Component {
  constructor(props) {
    super(props);
  }
  _openAlonePage() {
    AppStackManager.goAbout(this.props.navigation);
  }
  _openDrawer() {
    this.props.navigation.openDrawer();
  }
  _closeDrawer() {
    this.props.navigation.closeDrawer();
  }
  _toggleDrawer() {
    this.props.navigation.toggleDrawer();
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.launchImage}
          source={require('../../img/launch.png')}
        />
        <Text>CustomDrawerHomeView</Text>
        <Text />
        <Button onPress={() => this._openDrawer()} title={'打开'} />
        <Text />
        <Button onPress={() => this._closeDrawer()} title={'关闭'} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  launchImage: {
    resizeMode: 'contain',
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'nowrap',
  },
});
