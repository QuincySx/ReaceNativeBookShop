import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

export default class ArticleListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      curPage: 0,
      dataArray: [],
    };
  }
  _itemClick(url) {
    this.props.navigation.navigate('ArticleInfo', {
      link: url,
    });
  }
  _getFooter() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{alignItems: 'center'}}>
        <ActivityIndicator
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginTop: 10}}
          size={'large'}
          color={'red'}
          animating={true}
        />
        <Text>正在加载...</Text>
      </View>
    );
  }
  _renderItem(item) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => this._itemClick(item.link)}>
        <Text style={styles.itemText}>{item.title}</Text>
        <View style={styles.itemOption}>
          <Text>{item.niceDate}</Text>
          <Text style={styles.itemUserName}>{item.shareUser}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  _onRefresh(isRefreshing) {
    if (isRefreshing) {
      this.setState({
        isRefreshing: true,
      });
    }
    let url;
    if (isRefreshing) {
      url = 'https://www.wanandroid.com/article/list/0/json';
    } else {
      url =
        'https://www.wanandroid.com/article/list/' +
        this.state.curPage +
        '/json';
    }
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        let array = [];
        if (isRefreshing) {
          array = responseData.data.datas;
        } else {
          array = this.state.dataArray.concat(responseData.data.datas);
        }
        this.setState({
          dataArray: array,
          curPage: responseData.data.curPage,
          isRefreshing: false,
        });
      })
      .catch(error => {
        this.setState({
          isRefreshing: false,
        });
      });
  }
  componentDidMount() {
    this._onRefresh(true);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataArray}
          renderItem={({item}) => {
            // 注意此处的 return
            return this._renderItem(item);
          }}
          refreshControl={
            <RefreshControl
              title={'loading'}
              titleColor={'red'}
              tintColor={'red'}
              refreshing={this.state.isRefreshing}
              onRefresh={() => this._onRefresh(true)}
              colors={['gray', 'yellow', 'orange']}
            />
          }
          ListFooterComponent={() => this._getFooter()}
          onEndReachedThreshold={1}
          onEndReached={() => {
            this._onRefresh();
          }}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flatList: {
    backgroundColor: '#cccccc',
    flex: 1,
  },
  item: {
    margin: 6,
    padding: 6,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column',
  },
  itemOption: {
    flex: 1,
    flexDirection: 'row',
    padding: 4,
  },
  itemText: {
    flex: 1,
    padding: 4,
  },
  itemUserName: {
    marginStart: 20,
  },
});
