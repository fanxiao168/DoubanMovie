//电影详情
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import api from '../../../config/api';

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {},
    };
  }

  //请求详情数据
  componentDidMount() {
    //调用接口，别忘le穿参
    fetch(
      api.movie.detail +
        this.props.id +
        '?apikey=0df993c66c0c636e29ecbb5344252a4a',
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          data: data,
        });
      });
  }

  //获取loading
  _getLoading() {
    return <ActivityIndicator size="large" color="hotpink" />;
  }

  //获取电影详情
  _getData() {
    return (
      <View style={styles.wrapper}>
        <Image
          source={{uri: this.state.data.images.large}}
          style={styles.img}
        />
        <Text>电影名称:{this.state.data.title}</Text>
        <Text>上映时间:{this.state.data.year}</Text>
        <Text>用户口碑:{this.state.data.rating.average}</Text>
        <Text>所属国家:{this.state.data.countries[0]}</Text>
        <Text>
          <Text>所属类型：</Text>
          {this.state.data.genres.map((v, i) => {
            return <Text key={`key${i}`}>{v}</Text>;
          })}
        </Text>

        <Text>
          <Text>演员列表：</Text>
          {this.state.data.casts.map((v, i) => {
            return (
              //最后一个数值没有、号
              this.state.data.casts.length - 1 == i ? (
                <Text key={`key${i}`}>{v.name}</Text>
              ) : (
                <Text key={`key${i}`}>{v.name + '、'}</Text>
              )
            );
          })}
        </Text>
        <Text>
          <Text>导演列表：</Text>
          {this.state.data.directors.map((v, i) => {
            return (
              //最后一个数值没有、号
              this.state.data.directors.length - 1 == i ? (
                <Text key={`key${i}`}>{v.name}</Text>
              ) : (
                <Text key={`key${i}`}>{v.name + '、'}</Text>
              )
            );
          })}
        </Text>

        <Text>故事摘要：{this.state.data.summary}</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        {this.state.isLoaded ? this._getData() : this._getLoading()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    alignItems: 'center',
  },
  img: {
    width: 285,
    height: 400,
  },
});
