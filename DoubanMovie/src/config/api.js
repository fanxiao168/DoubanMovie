const dbDomain = 'https://api.douban.com/v2';
const apiKey = '0df993c66c0c636e29ecbb5344252a4a';

export default {
  //书籍
  book: {},

  //音乐
  music: {},

  //电影
  movie: {
    //正在热播
    hot: `${dbDomain}/movie/in_theaters?apikey=${apiKey}`,
    //即将上映
    soon: `${dbDomain}/movie/coming_soon?apikey=${apiKey}`,
    //top250
    top: `${dbDomain}/movie/top250?apikey=${apiKey}`,
    //详情
    detail: `${dbDomain}/movie/subject/`, //后面需要加电影：id路径参数
  },
};
