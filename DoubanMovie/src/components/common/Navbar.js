//底部导航
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default function(props) {
  return (
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={Actions.home}>
        <View style={styles.item}>
          <Text style={styles.itemText}>首页</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={Actions.find}>
        <View style={styles.item}>
          <Text style={styles.itemText}>发现</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={Actions.profile}>
        <View style={styles.item}>
          <Text style={styles.itemText}>我</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 40,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
