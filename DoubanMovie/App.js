/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Home from './src/components/page/Home';
import Find from './src/components/page/find/Find';
import Profile from './src/components/page/profile/Profile';

import BookList from './src/components/page/book/BookList';
import BookDetail from './src/components/page/book/BookDetail';
import MusicList from './src/components/page/music/MusicList';
import MusicDetail from './src/components/page/music/MusicDetail';
import MovieList from './src/components/page/movie/MovieList';
import MovieDetail from './src/components/page/movie/MovieDetail';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        {/*stack可以对scene进行分组，stack可以包含子stack*/}
        <Stack key="root">
          {/*scene用来配置页面路由信息，key与component属性是必须的，其中key值而且必须唯一，通过key进行页面的切换*/}
          <Scene hideNavBar key="home" component={Home} />
          <Scene hideNavBar key="find" component={Find} />
          <Scene hideNavBar key="profile" component={Profile} />

          {/*书籍路由配置*/}
          <Stack key="book" title="书籍">
            {/*scene有一个initial属性，用户指定stack下de组件入口，入口组件可以通过Stack的key进入*/}
            {/*将来组件的入口变化了，修改initial属性就可*/}
            <Scene initial hideNavBar key="bookList" component={BookList} />
            <Scene hideNavBar key="bookDetail" component={BookDetail} />
          </Stack>

          {/*音乐路由配置*/}
          <Stack key="music" title="音乐">
            {/*scene有一个initial属性，用户指定stack下de组件入口，入口组件可以通过Stack的key进入*/}
            {/*将来组件的入口变化了，修改initial属性就可*/}
            <Scene initial hideNavBar key="musicList" component={MusicList} />
            <Scene hideNavBar key="musicDetail" component={MusicDetail} />
          </Stack>

          {/*电影路由配置*/}
          <Stack
            key="movie"
            hideNavBar
            backButtonTintColor={'skyblue'}
            navigationBarStyle={styles.navigationBarStyle}
            titleStyle={styles.navigationBarTitleStyle}>
            {/*scene拥有一个所有子组件的公共title,每个scene还拥有自己独立的子title */}
            {/* 你可以根据需要统一使用stack-title, 或者隐藏stacktitle,使用独立title */}
            {/*或者都使用，或者都不使用*/}
            <Scene
              title="电影"
              hideTabBar={true}
              hideNavBar={false}
              key="movieList"
              component={MovieList}
            />
            <Scene
              title="电影详情"
              hideNavBar={false}
              leftButtonIconStyle={{color: 'blue'}}
              key="movieDetail"
              component={MovieDetail}
            />
          </Stack>
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationBarStyle: {
    backgroundColor: 'skyblue',
    height: 30,
  },
  navigationBarTitleStyle: {
    color: 'hotpink',
  },
});
