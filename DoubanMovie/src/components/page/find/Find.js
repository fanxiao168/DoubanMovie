//发现
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Navbar from '../../common/Navbar';

export default class Find extends Component {
  render() {
    return (
      //为了让底部导航定位而relative
      <View style={{flex: 1, position: 'relative'}}>
        <Text>发现</Text>
        <Text>发现</Text>
        <Text>发现</Text>
        <Text>发现</Text>
        <Text>发现</Text>
        <Text>发现</Text>
        <Navbar />
      </View>
    );
  }
}
