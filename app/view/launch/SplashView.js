import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppStackManager from '../../navigate/AppStackManager';

export default class SplashView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.launchImage}
          source={require('../../img/launch.png')}
        />
        <Text>Book Shop</Text>
      </View>
    );
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      AppStackManager.goMain(this.props.navigation);
    }, 1500);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
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
