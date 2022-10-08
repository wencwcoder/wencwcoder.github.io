(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{460:function(e,s,t){"use strict";t.r(s);var a=t(0),r=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"_1-杂记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-杂记"}},[e._v("#")]),e._v(" 1. 杂记")]),e._v(" "),s("h3",{attrs:{id:"vue-3-的设计目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-3-的设计目标"}},[e._v("#")]),e._v(" Vue 3 的设计目标")]),e._v(" "),s("ul",[s("li",[e._v("设计目标：更小、更快、TypeScript 支持、API 设计一致性、提高自身可维护性、开放更多底层功能。")]),e._v(" "),s("li",[e._v("优化方案："),s("code",[e._v("vue3")]),e._v(" 从很多层面都做了优化，源码、性能、语法 API。【1】源码管理："),s("code",[e._v("vue3")]),e._v(" 整个源码是通过  "),s("code",[e._v("monorepo")]),e._v(" 的方式维护的，根据功能将不同的模块拆分到 "),s("code",[e._v("packages")]),e._v(" 目录下面不同的子目录中；【2】TypeScript："),s("code",[e._v("Vue3")]),e._v(" 是基于 "),s("code",[e._v("typeScript")]),e._v(" 编写的，提供了更好的类型检查，能支持复杂的类型推导；【3】性能："),s("strong",[e._v("体积优化")]),e._v(" -- Tree shanking，"),s("strong",[e._v("编译优化")]),e._v(" -- diff 算法优化 / 静态提升 / 事件监听缓存 / SSR优化，"),s("strong",[e._v("响应式系统优化")]),e._v("：Proxy；【4】语法 API："),s("code",[e._v("composition API")]),e._v("，两大显著的优化 -- 优化逻辑组织 / 优化逻辑复用。")]),e._v(" "),s("li",[e._v("在 "),s("code",[e._v("vue2")]),e._v(" 中，数据劫持是通过 "),s("code",[e._v("Object.defineProperty")]),e._v("，这个 API 有一些缺陷，并不能检测对象属性的添加和删除。"),s("code",[e._v("Vue")]),e._v(" 为了解决这个问题提供了 "),s("code",[e._v("set")]),e._v(" 和 "),s("code",[e._v("delete")]),e._v(" 实例方法，但在面对嵌套层级比较深的情况下，就存在性能问题。数组 "),s("code",[e._v("API")]),e._v(" 方法也无法监听到。")])]),e._v(" "),s("h3",{attrs:{id:"vue-3-中-tree-shaking-特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-3-中-tree-shaking-特性"}},[e._v("#")]),e._v(" Vue 3 中 Tree-shaking 特性")]),e._v(" "),s("ul",[s("li",[e._v("Tree shaking 是一种通过"),s("strong",[e._v("清除多余代码")]),e._v("方式来优化项目打包体积的技术，专业术语叫 "),s("code",[e._v("Dead code elimination")]),e._v("。简单来讲，就是在保持代码运行结果不变的前提下，去除无用的代码。")]),e._v(" "),s("li",[e._v("Tree shaking 是基于 "),s("code",[e._v("ES6")]),e._v(" 模板语法（"),s("code",[e._v("import")]),e._v(" 与 "),s("code",[e._v("export")]),e._v("），主要是借助 "),s("code",[e._v("ES6")]),e._v(" 模块的静态编译思想，在编译时就能确定模块的依赖关系，以及输入和输出的变量。")]),e._v(" "),s("li",[e._v("带来的好处是：减少程序体积（更小）、减少程序执行时间（更快）、便于将来对程序架构进行优化（更友好）。")])]),e._v(" "),s("h3",{attrs:{id:"proxy-与-object-defineproperty-相比优劣如何"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy-与-object-defineproperty-相比优劣如何"}},[e._v("#")]),e._v(" Proxy 与 Object.defineProperty 相比优劣如何")]),e._v(" "),s("ul",[s("li",[e._v("Object.defineProperty 的作用是劫持一个对象的属性，劫持属性的 getter 和 setter 方法，在对象的属性发生变化时进行特定的操作。而 Proxy 劫持的是整个对象。")]),e._v(" "),s("li",[e._v("Proxy 会返回一个代理对象，我们只需要操作新对象即可，而 Object.defineProperty 只能遍历对象属性直接修改。")]),e._v(" "),s("li",[e._v("Object.defineProperty 不支持数组，更准确的说是不支持数组的各种 API，因为如果仅仅考虑 arry[i] = value 这种情况，是可以劫持的，但是这种劫持意义不大。而 Proxy 可以支持数组的各种 API。")]),e._v(" "),s("li",[e._v("尽管 Object.defineProperty 有诸多缺陷，但是其兼容性要好于 Proxy。")])]),e._v(" "),s("h2",{attrs:{id:"_2-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装"}},[e._v("#")]),e._v(" 2. 安装")]),e._v(" "),s("h3",{attrs:{id:"vue-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli"}},[e._v("#")]),e._v(" Vue CLI")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @vue/cli\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" update -g @vue/cli\nvue create vue-cli-demo\n\nVue CLI v5.0.8\n? Please pick a preset: Manually "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" features\n? Check the features needed "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter, Unit\n? Choose a version of Vue.js that you want to start the project with "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(".x\n? Use class-style component syntax? No\n? Use Babel alongside TypeScript "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("required "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" modern mode, auto-detected polyfills, transpiling JSX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("? Yes\n? Use "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("history")]),e._v(" mode "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" router? "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Requires proper server setup "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" index fallback "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" production"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" Yes\n? Pick a CSS pre-processor "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("PostCSS, Autoprefixer and CSS Modules are supported by default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(": Less\n? Pick a linter / formatter config: Prettier\n? Pick additional lint features: Lint on save   \n? Pick a unit testing solution: Jest\n? Where "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" you prefer placing config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" Babel, ESLint, etc.? In dedicated config files\n? Save this as a preset "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" future projects? No\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br")])]),s("h3",{attrs:{id:"vue-官方"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-官方"}},[e._v("#")]),e._v(" Vue 官方")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" init vue@latest\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"vite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vite"}},[e._v("#")]),e._v(" Vite")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" create vite@latest\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);