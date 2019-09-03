const dbDomain = 'http://api.douban.com/v2';

export default {
  //书籍
  book: {},

  //音乐
  music: {},

  //电影
  movie: {
    //正在热播
    hot: '${dbDomain}/movie/in_theaters',
    //即将上映
    soon: '${dbDomain}/movie/coming_soon',
    //top250
    top: '${dbDomain}/movie/top250',
    //详情
    detail: '${dbDomain}/movie/subject', //后面需要加电影：id路径参数
  },
};
