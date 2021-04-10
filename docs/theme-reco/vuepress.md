---
title: vuepress
date: 2021-04-10
sticky: 1
---

<!-- more -->

## 指南

### 快速上手

- 创建目录文件夹
- 初始化：`npm init`
- 安装本地依赖，不推荐全局安装：`cnpm install vuepress -D`
- 创建文档：`docs/readme.md`
- 修改package.json中的scripts：`{ "dev": "vuepress dev docs", "build": "vuepress build docs" }`
- 启动本地服务器：`npm run dev`



### 博客主题

- 博客主题显得更加的精简，只是做简单的文章展示，略去了很多非必要的元素。

- 安装：`cnpm install vuepress @vuepress/theme-blog -D`

- 目录结构与默认模板结构有所不一样：[folder structure](https://vuepress-theme-blog.ulivz.com/#folder-structure)

- front matter：markdown 前置内容规范

  ```markdown
  ---
  title: Hello World
  tags: 
    - JavaScript
    - DOM
  date: 2016-10-20
  author: wen
  location: ChengDu
  summary: Here's a quick post on what I found.
  ---
  ```



### 目录结构

- VuePress 遵循 **“约定优于配置”** 的原则，拥有其推荐的目录结构。

  ```markdown
  ├── docs
  │   ├── .vuepress (可选的)
  │   │   ├── components (可选的)
  │   │   ├── theme (可选的)
  │   │   │   └── Layout.vue
  │   │   ├── public (可选的)
  │   │   ├── styles (可选的)
  │   │   │   ├── index.styl
  │   │   │   └── palette.styl
  │   │   ├── templates (可选的, 谨慎配置)
  │   │   │   ├── dev.html
  │   │   │   └── ssr.html
  │   │   ├── config.js (可选的)
  │   │   └── enhanceApp.js (可选的)
  │   │ 
  │   ├── README.md
  │   ├── guide
  │   │   └── README.md
  │   └── config.md
  │ 
  └── package.json
  ```

- 默认的页面路由：把 docs 目录作为 targetDir。



### 基本配置

- 配置文件：在文档目录下创建一个 `.vuepress` 目录，所有的 VuePress 相关文件都会被放在这里。

  ```markdown
  ├─ docs
  │  ├─ README.md
  │  └─ .vuepress
  │     └─ config.js
  └─ package.json
  ```

- 一个 VuePress 网站必要的配置文件是 `.vuepress/config.js`，它应该导出一个 JavaScript 对象：`module.exports = { //... }`
- VuePress 内置了基于 headers 的搜索 —— 它会自动为所有页面的标题、`h2` 和 `h3` 构建起一个简单的搜索索引。
- 主题配置：一个 VuePress 主题应该负责整个网站的布局和交互细节。目前自带了一个默认的主题，它是为技术文档而设计的。



### 静态资源

- 相对路径：所有的 Markdown 文件、`*.vue` 文件的模板，并且**应该更倾向于**使用相对路径来引用所有的静态资源。
- 公共文件：可以将它们放在 `.vuepress/public` 中， 它们最终会被复制到生成的静态文件夹中。
- 基础路径：如果你的网站会被部署到一个**非根路径**，你将需要在 `.vuepress/config.js` 中设置 `base`。VuePress 提供了内置的一个 helper `$withBase`（它被注入到了 Vue 的原型上），可以帮助你生成正确的路径。在 vue 文件和 markdown 文件中都可以使用。



### MarkDown 拓展

- Header Anchors：所有的标题将会自动地应用 anchor 链接，anchor 的渲染可以通过 `markdown.anchor`来配置。

- 链接：站内的每一个文件夹下的 `README.md` 或者 `index.md` 文件都会被自动编译为 `index.html`，对应的链接将被视为 `/`。

- **Front Matter**：VuePress 提供了对 YAML front matter 开箱即用的支持，这些数据可以在当前 markdown 的正文，或者是任意的自定义或主题组件中使用。front matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。

  如果一个 markdown 文件中有一个 `<!-- more -->` 注释，则该注释之前的内容会被抓取并暴露。

  ```markdown
  ---
  title: string,  // 当前页面的标题
  lang: string,  // 当前页面的语言
  description: string,  // 当前页面的描述
  layout: string,  // 设置当前页面的布局组件
  permalink: string,  // 永久链接
  metaTitle: string，  // 重写默认的 meta title
  meta: array,  // 指定额外的要注入的 meta 标签
  ---
  在这些三条虚线之间，可以设置预定义变量,甚至可以创建自己的自定义变量。 然后，可以使用 $frontmatter 在页面的其余部分、以及所有的自定义和主题组件访问这些变量。
  默认主题的预定义变量: navbar: boolean / sidebar: boolean / prev: boolean / next: boolean /  search: boolean / tags: - 配置 - 主题 - 索引
  ```

- 目录：输入  --  [[toc]]。

- 自定义容器：输入 （参考插件：vuepress-plugin-container ）

  ~~~markdown
  ::: tip
  这是一个提示
  :::
  
  ::: warning
  这是一个警告
  :::
  
  ::: danger
  这是一个危险警告
  :::
  
  ::: details
  这是一个详情块，在 IE / Edge 中不生效
  :::
  
  自定义块中的标题：
  ::: danger STOP
  危险区域，禁止通行
  :::
  
  ::: details 点击查看代码
  ```js
  console.log('你好，VuePress！')
  ```
  :::
  ~~~

- 代码块中的语法高亮：VuePress 使用了 [Prism ](https://prismjs.com/)来为 markdown 中的代码块实现语法高亮。

- 代码块中的行高亮：

  ~~~markdown
  ``` js {4}
  export default {
    data () {
      return {
        msg: 'Highlighted!'
      }
    }
  }
  ```
  行数区间: 例如 {5-8}, {3-10}, {10-17}
  多个单行: 例如 {4,7,9}
  行数区间与多个单行: 例如 {4,7-13,16,23-27,40}
  ~~~



### 在 Markdown 中 使用 Vue

- 每一个 Markdown 文件将首先被编译成 HTML，接着作为一个 Vue 组件传入 `vue-loader`。

- 所有在 `.vuepress/components` 中找到的 `*.vue` 文件将会自动地被注册为全局的异步组件，可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）。

- 使用预处理器：VuePress 对以下预处理器已经内置相关的 webpack 配置：`sass`、`scss`、`less`、`stylus` 和 `pug`。要使用它们你只需要在项目中安装对应的依赖即可。

  ```javascript
  // 例如，要使用 sass，需要安装：
  yarn add -D sass-loader node-sass
  // 在 Markdown 或是组件中使用如下代码:
  <style lang="sass">
    .title {
        font-size: 20px;
    }
  </style>
  ```

- 脚本和样式提升：有时，你可以只想在当前页面应用一些 JavaScript 或者 CSS，在这种情况下，你可以直接在 Markdown 文件中使用原生的 `<script>` 或者 `<style>` 标签，它们将会从编译后的 HTML 文件中提取出来，并作为生成的 Vue 单文件组件的 `<script>` 和 `<style>` 标签。

- [Markdown 插槽](https://vuepress.vuejs.org/zh/guide/markdown-slot.html)



### 全局计算属性

- $site
- $page
- $frontmatter
- $lang
- $localePath
- $title
- $description
- $themeConfig



## 配置

### 基本配置

- base: string
- title: string
- description: string
- head: array
- host: string
- port: string
- temp: string
- dest: string
- locales: string
- shouldPrefetch: Function
- cache: boolean | string
- extraWatchFile: Array
- patterns: Array



### Styling

- palette.styl：如果要对默认预设的样式进行简单的替换，或者定义一些变量供以后使用，你可以创建一个 `.vuepress/styles/palette.styl` 文件。可以调整的一些变量：颜色，布局，响应式变化点。
-  index.styl：VuePress 提供了一种添加额外样式的简便方法。你可以创建一个 `.vuepress/styles/index.styl` 文件。这是一个 Stylus 文件，但你也可以使用正常的 CSS 语法。



### 主题、插件

- theme：string
- themeConfig：object
- plugins：Object | Array



### Markdown

- ```javascript
  module.exports = {
    markdown: {
      lineNumbers: true
    }
  }
  ```

- lineNumbers: boolean

- slugify: Function

- anchor: Object

- pageSuffix: string

- externalLinks: Object

- toc: Object

- plugins

- extendMarkdown: Function

- extractHeaders: Array  // 修改提取出的标题级别 [ 'h2', 'h3', 'h4' ]



### 构建流程

- configureWebpack：Object | Function
- chainWebpack：Function



## 插件

### 介绍

- 插件通常会为 VuePress 添加全局功能。插件的范围没有限制。可以在 [Awesome VuePress ](https://github.com/vuepressjs/awesome-vuepress#plugins)中找到更多的插件。

- 可以通过在 `.vuepress/config.js` 中做一些配置来使用插件。

  ```javascript
  module.exports = {
    plugins: [ 'vuepress-plugin-xx' ]
  }
  ```

- Babel 式：

  ```javascript
  module.exports = {
    plugins: [
      [
        'vuepress-plugin-xxx',
        { /* options */ }
      ]
    ]
  }
  ```

- 对象式：

  ```javascript
  module.exports = {
    plugins: {
      'xxx': { /* options */ }
    }
  }
  ```

- 可以通过显示地将选项设置成 `false` 来禁用一个插件：`[ 'xxx', false ] // disabled.   /    'xxx': false // disabled.`

- 一个 VuePress 插件应该是一个 `CommonJS 模块`，因为 VuePress 插件运行在 Node 端。



### 官方插件

- @vuepress/plugin-active-header-links：页面滚动时自动激活侧边栏链接的插件。

安装：cnpm install -D @vuepress/plugin-active-header-links

```javascript
// 使用
['@vuepress/active-header-links', {
    sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor'
}]
```

- @vuepress/plugin-back-to-top：back-to-top 插件。

安装：cnpm install -D @vuepress/plugin-back-to-top

```javascript
// 使用
['@vuepress/back-to-top']
```

- @vuepress/plugin-blog：[插件文档](https://vuepress-plugin-blog.ulivz.com/)、[主题文档](https://vuepress-theme-blog.ulivz.com/)。
- @vuepress/plugin-google-analytics：Google analytics 插件。

安装：cnpm install -D @vuepress/plugin-google-analytics

```javascript
// 使用
['@vuepress/google-analytics',{
	'ga': '' // UA-00000000-0
}]
```

- @vuepress/plugin-last-updated：last-updated 插件。

安装：cnpm install -D @vuepress/plugin-last-updated

```js
// 使用
['@vuepress/last-updated']
```

- @vuepress/plugin-medium-zoom：点击元素的放大缩小，一般用于图片。

安装：cnpm install -D @vuepress/plugin-medium-zoom

```javascript
// 使用
// ['@vuepress/medium-zoom']
plugins: {
    '@vuepress/medium-zoom': {
        selector: 'img.zoom-custom-imgs',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
            margin: 16
        }
    }
}
```

- @vuepress/plugin-nprogress：一个基于 nprogress 的进度条插件。

安装：cnpm install -D @vuepress/plugin-nprogress

```javascript
// 使用
['@vuepress/nprogress']

// 自定义颜色
// .vuepress/styles/palette.styl
// 或者
// .vuepress/theme/styles/palette.styl
$nprogressColor = red
```

- @vuepress/plugin-pwa：PWA 插件。

安装：cnpm install -D @vuepress/plugin-pwa

```javascript
// 使用
['@vuepress/pwa']
```

想要完全兼容 PWA，需要看[Link](https://vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html#%E4%BD%BF%E7%94%A8)。

- @vuepress/plugin-register-components：注册组件的插件。

安装：cnpm install -D @vuepress/plugin-register-components

```javascript
['@vuepress/register-components']
```

- @vuepress/plugin-search：基于 Header 的搜索插件。

安装：cnpm install -D @vuepress/plugin-search

```js
['@vuepress/search', {
    searchMaxSuggestions: 10
}]
```



## 主题

### 默认主题配置

#### 首页

默认的主题提供了一个首页（Homepage）的布局，想要使用它，需要在你的根级 `README.md` 的 [YAML front matter](https://vuepress.vuejs.org/zh/guide/markdown.html#front-matter) 指定 `home: true`。以下是一个如何使用的例子：

```markdown
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

你可以将相应的内容设置为 `null` 来禁用标题和副标题。

任何 `YAML front matter` 之后额外的内容将会以普通的 markdown 被渲染，并插入到 `features` 的后面。



#### 导航栏

导航栏 Logo：你可以通过 `themeConfig.logo` 增加导航栏 Logo ，Logo 可以被放置在公共文件目录。

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
  }
}
```

导航栏链接：可以通过 `themeConfig.nav` 增加一些导航栏链接。

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
      { 
           text: 'Link',
           items: [
               { text: 'Github', link: 'https://github.com/wencwcoder' },
               // { text: 'Github', link: 'https://github.com/wencwcoder' }
           ]
      }
    ]
  }
}
```

 

#### 侧边栏

想要使 侧边栏（Sidebar）生效，需要配置 `themeConfig.sidebar`，基本的配置，需要一个包含了多个链接的数组。

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}

sidebar: {
    '/views/': [
        {
            title: 'G1',
            collapsable: true,
            children: [
                'one',
                'two'
            ]
        }
    ]
},
```

自动生成侧栏：如果你希望自动生成一个仅仅包含了当前页面标题（headers）链接的侧边栏，你可以通过 `YAML front matter` 来实现。

```markdown
---
sidebar: auto
---
```

也可以通过配置来在所有页面中启用它。

```js
themeConfig: {
    sidebar: 'auto'
}
```



#### 搜索框

内置搜索：可以通过设置 `themeConfig.search: false` 来禁用默认的搜索框，或是通过 `themeConfig.searchMaxSuggestions` 来调整默认搜索框显示的搜索结果数量：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    search: false,
    searchMaxSuggestions: 10
  }
}
```

可以通过在页面的 frontmatter 中设置 `tags` 来优化搜索结果：

```markdown
---
tags:
  - 配置
  - 主题
  - 索引
---
```



#### 最后更新时间

可以通过 `themeConfig.lastUpdated` 选项来获取每个文件最后一次 `git` 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部：( 可以拓展相关插件 )

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
  }
}
```



#### 上 / 下一篇链接

上一篇和下一篇文章的链接将会自动地根据当前页面的侧边栏的顺序来获取。

可以通过 `themeConfig.nextLinks` 和 `themeConfig.prevLinks` 来全局禁用它们：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false
  }
}
```



#### Git 仓库和编辑链接

当你提供了 `themeConfig.repo` 选项，将会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 `"Edit this page"` 链接。

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'vuejs/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}
```



#### 页面滚动

可以通过 `themeConfig.smoothScroll` 选项来启用页面滚动效果。

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    smoothScroll: true
  }
}
```



#### 自定义页面类

有时候你可能需要为特定页面添加一个 CSS 类名，以方便针对该页面添加一些专门的 CSS。这种情况下你可以在该页面的 YAML front matter 中声明一个 `pageClass`：

```markdown
---
pageClass: custom-page-class
---
```

只能在 `.vuepress/styles/index.styl` 中编写针对该页面的 CSS ：

```css
/* .vuepress/styles/index.styl */

.theme-container.custom-page-class {
  /* 特定页面的 CSS */
}
```



#### 特定页面的自定义布局

默认情况下，每个 `*.md` 文件将会被渲染在一个 `<div class="page">` 容器中，同时还有侧边栏、自动生成的编辑链接，以及上 / 下一篇文章的链接。如果你想要使用一个完全自定义的组件来代替当前的页面（而只保留导航栏），你可以再次使用 `YAML front matter` 来指定这个组件。

```markdown
---
layout: SpecialLayout
---
```

这将会为当前的页面渲染 `.vuepress/components/SpecialLayout.vue` 布局。

