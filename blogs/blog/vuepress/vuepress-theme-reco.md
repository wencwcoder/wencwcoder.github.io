---
title: vuepress-theme-reco
date: 2021-04-10
sticky: 2
---

<!-- more -->

## 文档

### 基础

#### 快速开始

```bash
npx @vuepress-reco/theme-cli init demo-name
```



#### 分类和标签

- 添加博客配置

```javascript
themeConfig: {
    // 博客配置
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      }
    }
}
```

- 写文章时添加分类和标签：请注意， `categories` 和 `tags` 要以数组的方式填写。

```markdown
---
title: 【vue】跨域解决方案之proxyTable
date: 2017-12-28
categories:
 - frontEnd
tags:
 - vue
---
```



#### Front Matter

- 一个完整的 `Front Matter` 案例：

```markdown
---
title: 烤鸭的做法
date: '2019-08-08 08:00:00'
sidebar: 'auto'
categories:
 - 烹饪
 - 爱好
tags:
 - 烤
 - 鸭子
keys:
 - '123456'
publish: false
---
```

title：文章标题，放弃通过一级目录定义标题的方式，改在 `Front Matter` 中定义。

date：文章创建日期，格式 `2019-08-08` 或 `2019-08-08 08:08:08`。

sidebar：是否开启侧边栏。

categories：所属分类。

tags：所属标签。

keys：文章加密密码。

publish：文章是否发布。

**sticky** ：文章置顶。type -- number。



### 进阶

#### 添加时间轴

添加导航按钮：

```javascript
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
    ]
  }
}
```

写文章时添加日期，日期是可以填写 `时分秒` 的，格式为 `2019-10-20 00:00:00`。



#### 评论

- 主题内置评论插件 [@vuepress-reco/vuepress-plugin-comments](https://vuepress-theme-reco.recoluan.com/views/plugins/)，可以根据自己的喜好选择 `Valine` 或者 `Vssue`。
- 如果你想默认不加载评论，而只在某些页面显示评论功能，可以在 `valineConfig` 或 `vssueConfig` 中设置 `showComment: false`，并在需要展示评论的页面 设置 `isShowComments: true`。
- 如果仅是某篇文章不想设置开启评论功能，可以在 `front-matter` 设置 `isShowComments: false`。
- Valine：参数参考 [Valine 官网](https://valine.js.org/configuration.html)。【如果 valine 的获取评论的接口报 `404` 错误的话，不用担心，这是因为你还没有添加评论，只要存在1条评论，就不会报错了，这是 `leanCloud` 的请求处理操作而已】
- Vssue：参数参考 [Vssue 官网 ](https://vssue.js.org/zh/options/)。



#### 加密功能

- 加密介绍：如果项目具有私密性，不希望被公开，只有填入密钥登录后（关闭标签后登录失效），才能进入内容页面。以数组的格式设置 `keys`，可以设置多个密码，数组的值必须是字符串。
- 项目加密：

```javascript
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    // 密钥
    keyPage: {
      keys: ['32位的 md5 加密密文'], // 1.3.0 版本后需要设置为密文
      color: '#42b983', // 登录页动画球的颜色
      lineColor: '#42b983' // 登录页动画线的颜色
    }
  }
}
```

设置密文：如果你的密码是 `123456`，需要将密码字符串设置为32位的 md5 加密密。

- 文章加密：如果项目是公开的，而某些文章可能需要加密，需要在 `frontmatter` 以数组的格式设置 `keys`，可以设置多个密码，数组的值必须是字符串。

```markdown
---
title: vuepress-theme-reco
date: 2019-04-09
author: reco_luan
keys:
 - '32位的 md5 加密密文'
---
```



#### Config.js 配置

- 移动端优化：在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。

```javascript
// .vuepress/config.js
module.exports = {
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ]
} 
```

- 图标：可以在导航菜单中使用主题的内置图标，如下所示：[内置图标](https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html#%E5%9B%BE%E6%A0%87)

```javascript
{ text: 'Tags', link: '/tags/', icon: 'reco-tag' }
```

- 备案信息和项目开始时间：

```javascript
themeConfig: {
    // 备案
    record: 'ICP 备案文案',
    recordLink: 'ICP 备案指向链接',
    cyberSecurityRecord: '公安部备案文案',
    cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2017'
}
```

- 设置作者姓名：

设置全局作者姓名：

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // author
    author: 'reco_luan'
  }
}
```

为单篇文章设置作者姓名：

```markdown
---
title: 你还没真的努力过，就轻易输给了懒惰
date: 2015-04-23
categories: article
author: 渡渡
---
```

- logo：导航栏左侧可以显示logo, 需要以下配置。

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/head.png'
  }
}
```

- 头像：使用 `themeConfig.authorAvatar` 替换首页的 `faceImage` 来设置头像。

```javascript
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    authorAvatar: '/avatar.png'
  }  
}  
```



#### 首页配置

- Home：

如果您的heroImage具有您的网站标题，则可能需要设置 `heroText: null` 以使标题不显示。

```markdown
---
home: true
heroImage: /hero.png
heroText: null
---
```

如果你想改变heroImage的风格，你可以设置值 `heroImageStyle` 来实现你想要的效果。

```markdown
---
home: true
heroImage: /hero.png
heroImageStyle: {
  maxHeight: '200px',
  display: block,
  margin: '6rem auto 1.5rem',
  borderRadius: '50%',
  boxShadow: '0 5px 18px rgba(0,0,0,0.2)'
}
---
```

- Home-Blog：`heroImage` 在此模式下仍然有效。

指定 `type: 'blog'`：

```javascript
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'blog'
  }
}
```

设置首页的背景图片，如果你想改变 bgImage 的风格，你可以设置值 `bgImageStyle` 来实现你想要的效果：

```markdown
---
home: true
bgImage: '/bg.png'
bgImageStyle: {
  height: '350px'
}
---
```

设置首页右侧信息栏头像：

```javascript
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    authorAvatar: '/avatar.png'
  }
}
```

添加友链：

```js
module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      },
      // ...
    ]
  }
}
```

title 友链标题；

desc 友链描述；

logo 友链 LOGO（本地图片或网络图片）；

email 如果没有设置 `logo`，将通过 Email获取到的 `Gravatar` 头像来设置 LOGO；

link 友链地址。



#### 404 腾讯公益

如果你真的想关闭，可以这样来处理：

```js
module.exports = {
  theme: 'reco',
  themeConfig: {
    noFoundPageByTencent: false
  }  
}
```



#### 暗色模式适配

- 初始化：暗色模式默认开启，为 `auto` 模式，显示模式调节按钮，你也可以自定义初始化配置：

```js
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: false // 默认 true，false 不显示模式调节按钮，true 则显示
  }
} 
```

- 颜色变量：这里是主题提供的颜色变量，请根据自己的需求选择相应的颜色变量，替换你的组件里的颜色值：[Link](https://vuepress-theme-reco.recoluan.com/views/1.x/mode.html#%E9%A2%9C%E8%89%B2%E5%8F%98%E9%87%8F)。
- 适配方法：

```stylus
.title {
  color: var(--text-color)
}
```



#### 多语言配置

- [Link](https://vuepress-theme-reco.recoluan.com/views/1.x/local.html)



#### 多款代码主题

- 主题样式：请移步 [prismjs ](https://prismjs.com/)官网。
- 设置主题：

```js
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    /**
     * support for
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     */
    codeTheme: 'tomorrow' // default 'tomorrow'
  }
}
```



#### 侧边栏

- 说明：从 `1.5.6` 之后，主题将原有的侧边栏的中的多级标题移出，生成子侧边栏，放在页面的右侧。左边的侧边栏只有在自定义的侧边栏时才会出现，用于展示多篇文章的集合，而子侧边栏专注于当前文章的多级标题。
- 子侧边栏是否打开：建议全局打开自动子侧边栏功能。

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    subSidebar: 'auto'//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
  }
}
```

然后通过 `YAML front matter` 来禁用指定页面的侧边栏：

```markdown
---
subSidebar: false
---
```



### 默认主题配置

#### 添加摘要

- markdown：

```markdown
---
...
---

:::tip
demo
:::

<!-- more -->
```

在markdown代码中，您将看到注释，注释前面的代码将显示在列表页面上的文章摘要中。

文档中 `<!-- more -->` 以上部分会被当作摘要。



#### Markdown 中支持的语法

- 原生的 Markdown 语法
- VuePress 默认的扩展语法：[VuePress Markdown 扩展语法](https://v1.vuepress.vuejs.org/zh/guide/markdown.html)。
- 使用 `markdown-it` 插件扩展语法
- 使用插件扩展语法：下面简单介绍两个比较实用的插件；

容器：[vuepress-plugin-container ](https://vuepress.github.io/zh/plugins/container/)允许你可以使用来自定义一个容器，主题利用该插件内置了三个简单易用的块容器，你可以通过以下方式来启用。

```markdown
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::


::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::


::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```

流程图：[vuepress-plugin-flowchart ](https://flowchart.vuepress.ulivz.com/)可以让你在 Markdown 中直接绘制流程图，就像这样：

```markdown
@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend
```



#### 定制样式与脚本

- 如果你不满足于主题提供的默认样式，VuePress 提供了一些简单的接口文件，可以让你能够很方便地定制你自己想要的效果。
- 修改主题颜色：你可以通过配置 `.vuepress/styles/palette.styl` 来快速修改主题的一些颜色属性。

```stylus
// 默认值
$accentColor = #3eaf7c                      // 主题颜色
$textColor = #2c3e50                        // 文本颜色
$borderColor = #eaecef                      // 边框线颜色
$codeBgColor = #282c34                      // 代码块背景色
$backgroundColor = #ffffff                  // 悬浮块背景色
```

- 添加或修改主题样式：你可以创建一个 `.vuepress/styles/index.styl` 文件以方便地添加额外样式。这是一个 Stylus 文件，但你也可以使用正常的 CSS 语法。

```stylus
.content {
  font-size 30px
}
```

- 在 Head 中引用脚本与样式：

```js
module.exports = {
  head: [
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" }],
    ["script", { src: "scripts/demo.js" }]
  ]
}
```

上面的配置就会被解析为：

```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css">
  <script src="scripts/demo.js"></script>
</head>
```



## 插件

- 插件的使用：

Babel 式：

```javascript
module.exports = {
  plugins: [
    [
      "vuepress-plugin-xxx",
      {
        /* options */
      }
    ]
  ]
};
```

对象式：

```javascript
module.exports = {
  plugins: {
    xxx: {
      /* options */
    }
  }
};
```

### 官方插件

- @vuepress-reco/vuepress-plugin-back-to-top

```text
Option API
icon: type: String / accepted values: 主题内置的其他图标
visibilityHeight: type: Number / default: 400
customStyle: type: Object
```

- @vuepress-reco/vuepress-plugin-pagation

- @vuepress-reco/vuepress-plugin-screenfull
- @vuepress-reco/vuepress-plugin-loading-page
- @vuepress-reco/vuepress-plugin-kan-ban-niang

```text
[theme]: type: Array / default: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
[clean]: 是否开启clean模式(隐藏所有按钮)； type: Boolean
[messages]: 按钮提示语； type: Object 
{
    welcome: '欢迎来到 ' + 您的站点名称（$site.title）,
    home: '心里的花，我想要带你回家。',
    message: 'message',
    theme: '好吧，希望你能喜欢我的其他小伙伴。',
    close: '你知道我喜欢吃什么吗？痴痴地望着你。',
    info: '想知道关于我的更多信息吗？'  // 跳转插件github	
}
[messageStyle]: 自定义消息框样式； type: Object
default:
{
    right: '68px',
    bottom: '190px'
}
[modelStyle]: 自定义模型样式； type: Object
{
    right: '90px',
    bottom: '-20px',
    opacity: '0.9'
}
[btnStyle]: 自定义按钮样式; type: Object
{
    right: '90px',
    bottom: '40px',
}
[width]: type: Number
```

- @vuepress-reco/vuepress-plugin-comments

```javascript
module.exports = {
  theme: 'reco',
  themeConfig: {
    valineConfig: {
      appId: '...',// your appId
      appKey: '...', // your appKey
    }
  }  
}
```

or 

```javascript
module.exports = {
  theme: 'reco',
  plugins: [['@vuepress-reco/comments', {
    solution: 'valine',
    options: {
      appId: '...',// your appId
      appKey: '...', // your appKey
    }
  }]] 
}
```

- @vuepress-reco/vuepress-plugin-extract-code：[Link](https://vuepress-theme-reco.recoluan.com/views/plugins/extractCode.html)
- @vuepress-reco/vuepress-plugin-rss：[Link](https://vuepress-theme-reco.recoluan.com/views/plugins/rss.html)
- @vuepress-reco/vuepress-plugin-bgm-player：[Link](https://vuepress-theme-reco.recoluan.com/views/plugins/bgmPlayer.html)
- @vuepress-reco/vuepress-plugin-bulletin-popover：[打赏插件](https://vuepress-theme-reco.recoluan.com/views/plugins/bulletinPopover.html)



### 插件广场

- vuepress-plugin-boxx：[Link](https://github.com/zpj80231/vuepress-plugin-boxx)
- vuepress-plugin-cursor-effects：[Link](https://github.com/moefyit/vuepress-plugin-cursor-effects)
- vuepress-plugin-dynamic-title：[Link](https://github.com/moefyit/vuepress-plugin-dynamic-title)



## 案例

[Link](https://vuepress-theme-reco.recoluan.com/views/other/theme-example.html)