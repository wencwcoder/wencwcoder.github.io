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
        name: '春娇与志明',
        artist: '街道办GDC,欧阳耀莹',
        url: 'https://sharefs.ali.kugou.com/202107091117/10a8ff36266b6bd00675e25f6ae3939d/G103/M04/17/09/pw0DAFmHMvaAYEGUADKtDpsRafg450.mp3',
        cover: 'http://d.musicapp.migu.cn/prod/file-service/file-down/b1899d500dda5db2da11df3efc89cba6/7228be0347a2cf256ecbe9a677d0f583/0ba655390593f2e6df9328b3b7c42786'
      }
    ],
    position: { left: '10px', bottom: '10px', 'z-index': '999999', borderRadius: '20px'},
    autoShrink: true,
    shrinkMode: "float",
    floatPosition: "left"
  }]
]