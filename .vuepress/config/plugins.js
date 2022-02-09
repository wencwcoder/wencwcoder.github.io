module.exports = [
  ["@vuepress/last-updated", {
    transformer: (timestamp, lang) => {
      const moment = require('moment');
      moment.locale(lang)
      return moment(timestamp).format('YYYY/MM/DD, HH:mm:ss');
    }
  }],
  ["vuepress-plugin-nuggets-style-copy", {
    copyText: "复制代码",
    tip: {
      content: "Copy success!"
    }
  }],
  ["vuepress-plugin-reading-progress"],
  ["vuepress-plugin-dynamic-title", {
    showIcon: "/img/common/favicon.ico",
    showText: "(/≧▽≦/)咦！又好了！",
    hideIcon: "/img/common/favicon.ico",
    hideText: "(●—●)喔哟，崩溃啦！",
    recoverTime: 2000
  }],
  ["cursor-effects", {
    size: 2,
    shape: "star", // ['star' | 'circle']
    zIndex: 999999999
  }],
  ["@vuepress-reco/vuepress-plugin-kan-ban-niang", {
    theme: ["wanko"], // ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
    clean: true
  }],
  ['@vuepress-reco/vuepress-plugin-bgm-player', {
    audios: [
      // 本地文件示例
      {
        name: '彩虹',
        artist: '周杰伦',
        url: '/bgm-player/彩虹.mp3',
        cover: '/bgm-player/彩虹.png'
      },
      // 网络文件示例
      {
        name: '这世界那么多人',
        artist: '莫文蔚',
        url: 'http://m801.music.126.net/20220209104517/666d5230413433218f718bb12f95717b/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8769185057/af96/4500/b786/7fa49f0c842b6009f36b99400a9fb596.mp3',
        cover: 'http://p1.music.126.net/LOTxqRjFm03VJEOHJbUqMw==/109951165944804127.jpg?param=300x300'
      }
    ],
    position: { left: '10px', bottom: '10px', 'z-index': '999999', borderRadius: '20px'},
    autoShrink: true,
    shrinkMode: "float",
    floatPosition: "left"
  }]
]