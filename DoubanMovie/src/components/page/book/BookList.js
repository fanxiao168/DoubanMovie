//书籍列表
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Image,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
const Dimensions = require('Dimensions');
const screenSize = Dimensions.get('window');
import api from '../../../config/api';

export default class BookList extends Component {
  pubdate;
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      text: '',
      list: [],
    };
  }

  _getLoading() {
    return <ActivityIndicator size="large" color="hotpink" />;
  }
  //获取图书列表
  _getList() {
    return (
      <FlatList
        showVerticalScrollIndicator={false}
        data={this.state.list}
        renderItem={e => {
          return (
            <View style={styles.item}>
              <Image source={{uri: e.item.image}} style={styles.itemImg} />
              <View style={styles.itemContent}>
                <Text style={styles.itemContentT}>名称：{e.item.title}</Text>
                <Text style={styles.itemContentT}>
                  出版社：{e.item.publisher}
                </Text>
                <Text style={styles.itemContentT}>价格：{e.item.price}</Text>
                <Text style={styles.itemContentT}>
                  发行日期：{e.item.pubdate}
                </Text>
              </View>
            </View>
          );
        }}
      />
    );
  }

  //搜索按钮点击
  search() {
    this.setState({
      isLoaded: false,
    });
    console.log(api.book.bookSearch + '&q=' + `${this.state.text}`);
    fetch(api.book.bookSearch + '&q=' + `${this.state.text}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.books);
        this.setState({
          list: data.books,
          isLoaded: true,
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            returnKeyType="search"
            placeholder="请输入您要查找的书名"
            onChangeText={text => this.setState({text})}
          />
          <View style={styles.search}>
            <Text onPress={this.search.bind(this)}>搜索</Text>
          </View>
        </View>

        {this.state.isLoaded ? this._getList() : this._getLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    marginRight: 10,
    width: screenSize.width - 100,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingLeft: 10,
  },
  searchBar: {
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  search: {
    backgroundColor: 'skyblue',
    borderWidth: 1,
    borderColor: 'yellow',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  itemImg: {
    marginHorizontal: 5,
    width: 130,
    height: 180,
    backgroundColor: 'skyblue',
  },
  itemContent: {
    justifyContent: 'space-around',
    width: screenSize.width - 145,
  },
  itemContentT: {
    color: 'hotpink',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
