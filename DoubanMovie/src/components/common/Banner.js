import React, {Component} from 'react';
const Dimensions = require('Dimensions');
const screenSize = Dimensions.get('window');
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableHighlight,
} from 'react-native';

import Swiper from 'react-native-swiper';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          uri:
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3881180885,2846362066&fm=26&gp=0.jpg',
        },
        {
          id: 2,
          uri:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3707128041,2169987362&fm=26&gp=0.jpg',
        },
        {
          id: 3,
          uri:
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2270318161,2341415751&fm=26&gp=0.jpg',
        },
      ],
    };
  }

  // 进入详情页
  _pushDetail(id) {
    console.log(`进入${id}详情页`);
  }

  // 列表渲染
  _getList() {
    return this.state.list.map((item, i) => {
      return (
        <View style={styles.item} key={`key${i}`}>
          <TouchableHighlight
            activeOpacity={0.75}
            underlayColor="#c1c1c1"
            onPress={this._pushDetail.bind(this, item.id)}>
            <Image style={styles.itemImg} source={{uri: item.uri}} />
          </TouchableHighlight>
        </View>
      );
    });
  }

  // Banner高度
  _getHeight() {
    return this.props.height || 200;
  }

  render() {
    return (
      <View style={[styles.wrapper, {height: this._getHeight()}]}>
        <Swiper showsButtons={true} autoplay={true}>
          {/* 列表渲染 */}
          {this._getList()}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImg: {
    width: screenSize.width,
    height: '100%',
  },
});
