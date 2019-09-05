//音乐列表
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';


export default class MusicList extends Component {
  render() {
    return (
      //为了让底部导航定位而relative
      <View style={{flex: 1, position: 'relative'}}>
        <Text>音乐列表</Text>
        <Text>音乐列表</Text>
      </View>
    );
  }
}
