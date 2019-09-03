//书籍列表
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Navbar from '../../common/Navbar';

export default class BookList extends Component {
  render() {
    return (
      //为了让底部导航定位而relative
      <View style={{flex: 1, position: 'relative'}}>
        <Text>书籍列表</Text>
        <Text>书籍列表</Text>
        <Navbar />
      </View>
    );
  }
}
