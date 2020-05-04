import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import AppStackManager from '../../navigate/AppStackManager';

export default class ArticleInfoView extends Component {
  constructor(props) {
    super(props);
  }
  _openAlonePage() {
    AppStackManager.goAbout(this.props.navigation);
  }
  render() {
    console.log(this.props.route.params.link);
    return (
      <WebView
        source={{uri: this.props.route.params.link}}
        style={styles.container}
      />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// yarn add react-native-community/react-native-webview
// yarn add react-native-webview
