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
        name: '莫问归期',
        artist: '蒋雪儿',
        url: '/bgm-player/莫问归期.mp3',
        cover: '/bgm-player/莫问归期.png'
      },
      {
        name: 'I-Wont-Let-You-Go',
        artist: '王帝',
        url: '/bgm-player/I-Wont-Let-You-Go.mp3',
        cover: '/bgm-player/I-Wont-Let-You-Go.png'
      },
      {
        name: '彩虹',
        artist: '周杰伦',
        url: '/bgm-player/彩虹.mp3',
        cover: '/bgm-player/彩虹.png'
      }
      // 网络文件示例
      // {
      //   name: 'xxx',
      //   artist: 'xxx',
      //   url: 'https://xxx/xxx.mp3',
      //   cover: 'https://xxx/xxx.jpg'
      // }
    ],
    position: { left: '10px', bottom: '10px', 'z-index': '999999', borderRadius: '20px'},
    autoShrink: true,
    shrinkMode: "float",
    floatPosition: "left"
  }]
]