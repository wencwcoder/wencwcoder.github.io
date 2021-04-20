const CARD_LIST = "cardList";
const CARD_IMG_LIST = "cardImgList";
const renderCardList = require('./utils');

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
  ["container", {
    // 卡片列表
    type: CARD_LIST,
    render: (tokens, idx) => {
      // tokens 是整个 md 文件的虚拟 dom 结构数组
      // idx 是 tokens 中':::' 所在的索引，而且是当前指定type的 ':::'，分别有开始和结束两次的 idx
      // if (tokens[idx].nesting === 1) { // 开头的 ':::' 标记
      // } else { // 结束的 ':::' 标记
      // }
      // 注意：修改这里面的代码后需要在 md 文件保存一下才会重新执行渲染
      return renderCardList(tokens, idx, CARD_LIST);
    }
  }],
  ["container", {
    // 图文卡片列表
    type: CARD_IMG_LIST,
    render: (tokens, idx) => {
      return renderCardList(tokens, idx, CARD_IMG_LIST);
    }
  }]
]