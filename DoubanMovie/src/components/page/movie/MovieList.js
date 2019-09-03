//电影列表
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import api from '../../../config/api';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      list: [],
    };
  }

  //加载电影列表数据，url使用配置对象的属性即可
  componentDidMount() {
    fetch(api.movie.hot)
      .then(res => res.json())
      .then(data => {
        //数据拿到后，修改loading状态，存储数据列表
        this.setState({
          isLoaded: true,
          list: data.subjects,
        });
      });
  }

  _getLoading() {
    return <ActivityIndicator size="large" color="hotpink" />;
  }

  //获取电影列表
  _getList() {
    return (
      //懒加载列表组件，用它有两个原因，1、不用的话超出屏幕的内容看不到  2、性能高
      <FlatList
        showVerticalScrollIndicator={false}
        data={this.state.list}
        renderItem={
          //e.index为下标，e.item为数组中的单个元素
          e => {
            return (
              //路由导航是可以传递参数，但是传参要调用方法，
              //为了防止页面一上来就被调用，造成页面自动跳转，所以我们这里需要把调用函数包裹一层
              <TouchableWithoutFeedback
                key={`key${e.index}`}
                onPress={() => Actions.movieDetail({id: e.item.id})}>
                <View style={styles.item}>
                  <Image
                    source={{uri: e.item.images.large}}
                    style={styles.itemImg}
                  />
                  <View style={styles.itemContent}>
                    <Text style={styles.itemContentT}>
                      名称：{e.item.original_title}
                    </Text>
                    <Text style={styles.itemContentT}>年份：{e.item.year}</Text>
                    <Text style={styles.itemContentT}>
                      类型：{e.item.genres[0]}
                    </Text>
                    <Text style={styles.itemContentT}>
                      口碑：{e.item.rating.average}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            );
          }
        }
      />
    );
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.state.isLoaded ? this._getList() : this._getLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  itemImg: {
    width: 130,
    height: 180,
  },
  itemContent: {
    marginLeft: 20,
    justifyContent: 'space-around',
  },
  itemContentT: {
    color: 'hotpink',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
