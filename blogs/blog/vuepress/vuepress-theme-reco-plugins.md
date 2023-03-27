---
title: vuepress-theme-reco-plugins
date: 2021-04-10
categories:
 - 博客
tags:
 - vuepress
---

<!-- more -->



## 插件

### 打赏

- `cnpm i -D @vuepress-reco/vuepress-plugin-bulletin-popover`

```js
['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    width: '300px', // 默认 260px
    title: '公告',
    body: [
      {
        type: 'title',
        content: '欢迎加入QQ交流群 🎉🎉🎉',
        style: 'text-aligin: center;'
      },
      {
        type: 'image',
        src: '/rvcode_qq.png'
      }
    ],
    footer: [
      {
        type: 'button',
        text: '打赏',
        link: '/donate'
      }
    ]
}]
```



### 音乐播放器

- `cnpm i -D @vuepress-reco/vuepress-plugin-bgm-player`

```javascript
['@vuepress-reco/vuepress-plugin-bgm-player', {
    audios: [
      // 本地文件示例
      // {
      //   name: '장가갈 수 있을까',
      //   artist: '咖啡少年',
      //   url: '/bgm/1.mp3',
      //   cover: '/bgm/1.jpg'
      // },
      // 网络文件示例
      {
        name: '강남역 4번 출구',
        artist: 'Plastic / Fallin` Dild',
        url: 'https://assets.smallsunnyfox.com/music/2.mp3',
        cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
      },
      {
        name: '用胳膊当枕头',
        artist: '최낙타',
        url: 'https://assets.smallsunnyfox.com/music/3.mp3',
        cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
      }
    ],
    position: { left: '10px', bottom: '10px', 'z-index': '999999'},
    autoShrink: true,
    shrinkMode: "float",
    floatPosition: "left"
}]
```



### 音乐播放器2

- `cnpm i -D vuepress-plugin-meting`

```javascript
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
```



### 看板娘

- `cnpm i -D @vuepress-reco/vuepress-plugin-kan-ban-niang`

```javascript
['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
  theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'], // wanko
  clean: true
}]
```



### 可爱的光标效果

- `cnpm i -D vuepress-plugin-cursor-effects`

```javascript
['cursor-effects', {
    size: 2, // size of the particle, default: 2
    shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
    zIndex: 999999999, // z-index property of the canvas, default: 999999999
}]
```



### 动态标题

- `cnpm i -D vuepress-plugin-dynamic-title`

```javascript
['dynamic-title', {
   showIcon: '/img/favicon.ico',
   showText: '(/≧▽≦/)咦！又好了！',
   hideIcon: '/img/favicon.ico',
   hideText: '(●—●)喔哟，崩溃啦！',
   recoverTime: 2000,
}]
```



### 代码复制 [已弃用]

- `cnpm i -D vuepress-plugin-nuggets-style-copy`

```javascript
["vuepress-plugin-nuggets-style-copy", {
    copyText: "复制代码",
    tip: {
      content: "复制成功!"
    }
}]
```



### 代码复制2

- `cnpm i -D vuepress-plugin-code-copy`

```javascript
["vuepress-plugin-code-copy", true]
```

