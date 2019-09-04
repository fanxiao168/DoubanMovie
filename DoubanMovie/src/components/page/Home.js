//首页
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Banner from '../common/Banner';
import Navbar from '../common/Navbar';

const screenSize = Dimensions.get('window');

export default class Home extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Banner />
        <View style={styles.apps}>
          <View style={styles.appsRow}>
            <TouchableWithoutFeedback
              activeOpacity={0.5}
              onPress={Actions.book}>
              <View style={[styles.appsRowItem, {backgroundColor: 'blue'}]}>
                <Text style={styles.appsRowItemText}>书籍</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              activeOpacity={0.5}
              onPress={Actions.music}>
              <View style={[styles.appsRowItem, {backgroundColor: 'yellow'}]}>
                <Text style={styles.appsRowItemText}>音乐</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              activeOpacity={0.5}
              onPress={Actions.movie}>
              <View style={[styles.appsRowItem, {backgroundColor: 'green'}]}>
                <Text style={styles.appsRowItemText}>电影</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.appsRow}>
            <View style={[styles.appsRowItem, {backgroundColor: 'pink'}]}>
              <Text style={styles.appsRowItemText}>同城</Text>
            </View>
            <View style={[styles.appsRowItem, {backgroundColor: 'skyblue'}]}>
              <Text style={styles.appsRowItemText}>广播</Text>
            </View>
            <TouchableWithoutFeedback
              activeOpacity={0.5}
              onPress={Actions.choosePic}>
              <View style={[styles.appsRowItem, {backgroundColor: 'orange'}]}>
                <Text style={styles.appsRowItemText}>相册</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.appsRow}>
            <View style={[styles.appsRowItem, {backgroundColor: 'cyan'}]}>
              <Text style={styles.appsRowItemText}>论坛</Text>
            </View>
            <View style={[styles.appsRowItem, {backgroundColor: 'purple'}]}>
              <Text style={styles.appsRowItemText}>线上活动</Text>
            </View>
            <View style={[styles.appsRowItem, {backgroundColor: 'hotpink'}]}>
              <Text style={styles.appsRowItemText}>线下活动</Text>
            </View>
          </View>
        </View>
        <Navbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  apps: {
    height: 450,
  },
  appsRow: {
    flex: 1,
    flexDirection: 'row',
  },
  appsRowItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appsRowItemText: {
    fontSize: 26,
  },
});
