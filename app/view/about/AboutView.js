import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import AppStackManager from '../../navigate/AppStackManager';

export default class AboutView extends Component {
  constructor(props) {
    super(props);
  }
  _openAlonePage() {
    AppStackManager.goAbout(this.props.navigation);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.launchImage}
          source={require('../../img/launch.png')}
        />
        <Text>Book Shop v1.1</Text>
        <Text>Create By React Native</Text>
        <Text />
        <Button onPress={() => this._openAlonePage()} title={'独立页面'} />
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
