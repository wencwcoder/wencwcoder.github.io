module.exports = [
  ["@vuepress/last-updated", {
    transformer: (timestamp, lang) => {
      const moment = require('moment');
      moment.locale(lang)
      return moment(timestamp).utcOffset(480).format('YYYY/MM/DD, HH:mm:ss');
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
        name: '给我一首歌的时间',
        artist: '周杰伦',
        url: 'http://cf.sycdn.kuwo.cn/849bac419841951508cca93ddf8953df/6107a887/resource/n2/58/67/746838450.mp3',
        cover: 'http://d.musicapp.migu.cn/prod/file-service/file-down/8121e8df41a5c12f48b69aea89b71dab/a74c911aea1ad2584c294b0b70e45455/5145c5ce8c4f080a95bd4e6f99c707ea'
      }
    ],
    position: { left: '10px', bottom: '10px', 'z-index': '999999', borderRadius: '20px'},
    autoShrink: true,
    shrinkMode: "float",
    floatPosition: "left"
  }]
]