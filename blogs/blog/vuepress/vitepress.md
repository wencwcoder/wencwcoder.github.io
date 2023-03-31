---
title: vitepress
date: 2021-04-23
categories:
 - 博客
tags:
 - vitepress
---

<!-- more -->



> 源链接：[https://vitepress.dev/](https://vitepress.dev/)



## 1. Guide

### Markdown Extensions

#### Emoji

```markdown
:tada: :100:
```

A [list of all emojis](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) is available.



#### Table of Contents

```markdown
[[toc]]
```



#### Custom Containers

```markdown
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

~~~markdown
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::
~~~

```markdown
::: raw
Wraps in a <div class="vp-raw">
:::
```

```markdown
::: v-pre
{{ This will be displayed as-is }}`
:::
```



#### Line Highlighting in Code Blocks

~~~markdown
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
Line ranges: for example {5-8}, {3-10}, {10-17}
Multiple single lines: for example {4,7,9}
Line ranges and single lines: for example {4,7-13,16,23-27,40}
~~~



#### Focus in Code Blocks

~~~markdown
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code  focus]
    }
  }
}
```
~~~



#### Code Groups

~~~markdown
::: code-group

```js [config.js]
const config = {
  // ...
}
export default config
```

```ts [config.ts]
const config: Config = {
  // ...
}
export default config
```
:::
~~~



### Asset Handling

```markdown
Referencing Static Assets
./docs/src/public/imgs/avatar.png  --> ![An image](/imgs/avatar.png)
```



### Frontmatter

[https://vitepress.dev/guide/frontmatter](https://vitepress.dev/guide/frontmatter)



### Using Vue in Markdown

[https://vitepress.dev/guide/using-vue](https://vitepress.dev/guide/using-vue)



### Using a Custom Theme

[https://vitepress.dev/guide/custom-theme](https://vitepress.dev/guide/custom-theme)



## 2. Reference

### Site Config

```javascript
// .vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Blog",
  // titleTemplate: 'Custom Suffix',
  description: "A VitePress Siteee",
  head: [
    [
      'link',
      {
        rel: "icon",
        href: "/imgs/favicon.ico"
      }
    ]
  ],
  // base: '/repo/', // https://foo.github.io/repo/
  cleanUrls: true,
  srcDir: './src',
  outDir: './.vitepress/dist',  // '../dist'
  // cacheDir: './.vitepress/cache',
  lastUpdated: true,
  // Markdown
  markdown: {
    theme: 'material-theme-palenight', // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
    lineNumbers: true
  },
  // Vite
  // vite: {
  //   // Vite config options
  // },
  // Vue
  // vue: {
  //   // @vitejs/plugin-vue options
  // }
})
```



### Frontmatter Config

[https://vitepress.dev/reference/frontmatter-config](https://vitepress.dev/reference/frontmatter-config)

[https://jekyllrb.com/docs/front-matter/](https://jekyllrb.com/docs/front-matter/)

```yaml
---
title: VitePress
titleTemplate: Vite & Vue powered static site generator
description: VitePress
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---
```

```yaml
仅在使用默认主题时适用
layout: doc | home | page
aside: boolean | 'left'
outline: number | [number, number] | 'deep' | false
lastUpdated: boolean
editLink: boolean

---
layout: home
hero: 
features: 
aside: true
outline: 2
lastUpdated: true
editLink: true
---

---
hero:
  name: My Blog
  text: "A VitePress Site"
  tagline: My great project tagline
  # image:
  #   src: /imgs/avatar.png
  #   alt: avatar
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress

features:
  - icon: 🛠️
    title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon:
      src: /imgs/avatar.png
    title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon:
      dark: /imgs/avatar.png
      light: /imgs/avatar.png
    title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    link: https://github.com/vuejs/vitepress
    linkText: GitHub
---
```

```yaml
Common Config
---
title: VitePress
---
```



### Default Theme Config

```javascript
// .vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  // Theme related configurations.
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/imgs/favicon.ico', // in nav bar
    siteTitle: 'Hello World', // in nav bar, Type: string | false
    nav: NavItem[],
    sidebar: Sidebar[],
    aside: true,
    outline: [2,4],
    outlineTitle: 'On this page',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: { svg: 'svg' }, link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // }
    lastUpdatedText: 'Last updated',
    // algolia: AlgoliaSearch,
    // carbonAds: CarbonAdsOptions,
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    darkModeSwitchLabel: 'Appearance', // only displayed in the mobile view
    sidebarMenuLabel: 'Menu', // only displayed in the mobile view
    returnToTopLabel: 'Return to top', // only displayed in the mobile view
    // langMenuLabel: 'Change language'
  }
})
```

```javascript
// nav
nav: [
  { text: 'Home', link: '/' },
  { text: 'Example', link: '/markdown' },
  {
    text: 'Dropdown Menu',
    items: [
      { text: 'Item A', link: '/markdown' },
      { text: 'Item B', link: '/markdown' },
      { text: 'Github A', link: 'https://github.com/vuejs/vitepress' },
      { text: 'Github B', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  {
    text: 'Dropdown Menu Group',
    items: [
      {
        items: [
          { text: 'Item A', link: '/markdown' },
          { text: 'Item B', link: '/markdown' }
        ]
      },
      {
        text: 'Github',
        items: [
          { text: 'Github A', link: 'https://github.com/vuejs/vitepress' },
          { text: 'Github B', link: 'https://github.com/vuejs/vitepress' }
        ]
      }
    ]
  }
]
```

```javascript
// sidebar -- array
sidebar: [
  {
    text: 'Guide',
    link: '/markdown'
  },
  {
    text: 'Examples',
    collapsed: true,
    items: [
      { text: 'Markdown A', link: '/markdown' },
      { text: 'Markdown B', link: '/markdown' }
    ]
  },
  {
    text: 'Github',
    collapsed: true,
    items: [
      { text: 'Github A', link: 'https://github.com/vuejs/vitepress' },
      { text: 'Github B', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
]

// sidebar -- object
sidebar: {
  '/guide/': [
    {
      text: 'Guide',
      items: [
        { text: 'Index', link: '/guide/' },
        { text: 'One', link: '/guide/one' },
        { text: 'Two', link: '/guide/two' },
        { 
          text: 'Examples',
          collapsed: true,
          items: [
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ]
    }
  ],
  '/config/': [
    {
      text: 'Config',
      items: [
        { text: 'Index', link: '/config/' },
        { text: 'Three', link: '/config/three' },
        { text: 'Four', link: '/config/four' }
      ]
    }
  ]
}
```



### Badge

徽章可让您为标题添加状态。例如，指定部分的类型或支持的版本可能很有用。您可以使用全局可用的 `Badge` 组件。

```html
### Title <Badge type="info" text="default" />
### Title <Badge type="tip" text="^1.9.0" />
### Title <Badge type="warning" text="beta" />
### Title <Badge type="danger" text="caution" />

### Title <Badge type="info">custom element</Badge>
```



### Team Page

[https://vitepress.dev/reference/default-theme-team-page](https://vitepress.dev/reference/default-theme-team-page)



### Search

[https://vitepress.dev/reference/default-theme-search](https://vitepress.dev/reference/default-theme-search)



### Carbon Ads

[https://vitepress.dev/reference/default-theme-carbon-ads](https://vitepress.dev/reference/default-theme-carbon-ads)

