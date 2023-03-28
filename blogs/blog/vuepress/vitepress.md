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

---
layout: home
hero: 
features: 
aside: true
outline: 2
---
```

```yaml
Common Config
---
title: VitePress
---
```

