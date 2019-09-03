//书籍详情
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Navbar from '../../common/Navbar';

export default class BookDetail extends Component {
  render() {
    return (
      //为了让底部导航定位而relative
      <View style={{flex: 1, position: 'relative'}}>
        <Text>书籍详情</Text>
        <Text>书籍详情</Text>
        <Navbar />
      </View>
    );
  }
}
