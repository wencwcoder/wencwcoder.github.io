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

- cnpm i -D @vuepress-reco/vuepress-plugin-bulletin-popover

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

- cnpm i -D @vuepress-reco/vuepress-plugin-bgm-player

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



### 看板娘

- cnpm i -D @vuepress-reco/vuepress-plugin-kan-ban-niang

```javascript
['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
  theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'], // wanko
  clean: true
}]
```



### 可爱的光标效果

- cnpm i -D vuepress-plugin-cursor-effects

```javascript
['cursor-effects', {
    size: 2, // size of the particle, default: 2
    shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
    zIndex: 999999999, // z-index property of the canvas, default: 999999999
}]
```



### 动态标题

- cnpm i -D vuepress-plugin-dynamic-title

```javascript
['dynamic-title', {
   showIcon: '/img/favicon.ico',
   showText: '(/≧▽≦/)咦！又好了！',
   hideIcon: '/img/favicon.ico',
   hideText: '(●—●)喔哟，崩溃啦！',
   recoverTime: 2000,
}]
```



### 代码复制

- cnpm i -D vuepress-plugin-nuggets-style-copy

```javascript
["vuepress-plugin-nuggets-style-copy", {
    copyText: "复制代码",
    tip: {
      content: "复制成功!"
    }
}]
```

