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
      content: "Copy Successfully!"
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
  // ['@vuepress-reco/vuepress-plugin-bgm-player', {
  //   audios: [
  //     // 本地文件示例
  //     {
  //       name: '彩虹',
  //       artist: '周杰伦',
  //       url: '/bgm-player/彩虹.mp3',
  //       cover: '/bgm-player/彩虹.png'
  //     },
  //     // 网络文件示例
  //     {
  //       name: '这世界那么多人',
  //       artist: '莫文蔚',
  //       url: 'https://github.com/wencwcoder/learning-library/raw/master/musics/%E8%BF%99%E4%B8%96%E7%95%8C%E9%82%A3%E4%B9%88%E5%A4%9A%E4%BA%BA%20-%20%E8%8E%AB%E6%96%87%E8%94%9A.mp3',
  //       cover: 'https://raw.githubusercontent.com/wencwcoder/learning-library/master/musics/%E8%BF%99%E4%B8%96%E7%95%8C%E9%82%A3%E4%B9%88%E5%A4%9A%E4%BA%BA%20-%20%E8%8E%AB%E6%96%87%E8%94%9A.png'
  //     }
  //   ],
  //   position: { left: '10px', bottom: '10px', 'z-index': '999999', borderRadius: '20px'},
  //   autoShrink: true,
  //   shrinkMode: "float",
  //   floatPosition: "left"
  // }],
  ['meting', {
    meting: {
      // server -- 音乐平台："netease" | "tencent" | "kuwo" | "kugou" | "baidu"
      // type -- 资源类型："song" | "album" | "artist" | "playlist"
      // mid -- 资源 id
      // server: "netease",
      // type: "artist",
      // mid: "5771",
      // 自动解析：server type mid
      auto: "https://music.163.com/#/artist?id=5771",
    },
    // 不配置该项的话不会出现全局播放器
    aplayer: {
      fixed: true,
      mini: true,
      autoplay: true,
      theme: "#b7daff",
      loop: "all", // 初始循环模式："all" | "one" | "none"
      order: "list", // 初始顺序模式："list" | "random"
      preloa: "auto", // 音频预加载模式: "auto" | "metadata" | "none"
      volume: 1, // 初始音量：0~1
      mutex: true, // 是否开启互斥模式，即是否只允许一个音乐播放，默认为 true
      lrcType: 3, // 歌词解析模式：3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）
      listFolded: true, // 是否折叠播放列表
      listMaxHeight: 250 // 播放列表的最大高度
    },
    // 移动设备上的一些特殊选项
    mobile: {
      cover: false,
      lrc: true
    },
    // 加载音乐封面时所显示的默认封面图
    // defaultCover: 'https://nyakku.moe/avatar.jpg'
  }]
  // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
  //   width: '260px',
  //   title: '公告',
  //   body: [
  //     {
  //       type: 'title',
  //       content: '新增加一个插件来玩玩👻',
  //       style: 'text-aligin: center;'
  //     },
  //     // {
  //     //   type: 'image',
  //     //   src: '/img/common/avatar.png'
  //     // },
  //     // {
  //     //   type: 'text',
  //     //   content: '可以有简单的文本'
  //     // }
  //   ],
  //   footer: [
  //     {
  //       type: 'button',
  //       text: '打赏',
  //       link: '/blogs/blog/Donate.md'
  //     }
  //   ]
  // }]
]