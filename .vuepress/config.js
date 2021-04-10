const nav = require('./config/nav');
const sidebar = require('./config/sidebar');
const friendLink = require('./config/friendLink');
const plugins = require('./config/plugins');

module.exports = {
  title: "wen",
  description: "Near, Far, Wherever You Are",
  dest: "public",
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
    ["script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
      }
    ],
    ["script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "/js/BaiduStatistics.js"
      }
    ]
  ],
  theme: "reco",
  themeConfig: {
    nav,
    sidebar,
    subSidebar: "auto",
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Category"
      },
      tag: {
        location: 3,
        text: "Tag"
      }
    },
    friendLink,
    logo: "/img/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "wen",
    authorAvatar: "/img/avatar.png",
    record: "xxxx",
    startYear: "2021"
  },
  plugins,
  markdown: {
    lineNumbers: true
  }
}