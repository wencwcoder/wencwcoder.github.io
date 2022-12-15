(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{489:function(t,e,r){"use strict";r.r(e);var a=r(1),i=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("源链接："),e("a",{attrs:{href:"https://coding.imooc.com/class/523.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://coding.imooc.com/class/523.html"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("行业抢先推出的系统实战课，尽早掌握下一代前端核心工具"),e("br")]),t._v(" "),e("p",[e("strong",[t._v("Jokcy")]),t._v("：Vite 因为其跨前端框架的能力和极其优越的性能，被称为下一代前端构建工具。如果你想在未来几年有更好的发展空间，那么最好尽早学会 Vite。 我们将从如何配置使用入手，深入到 Vite 的场景、插件以及源码，帮助大家系统掌握 Vite，全面提升对前端构建的认知，更能自行构建项目，为进阶前端架构师打下坚实的基础。")])]),e("h2",{attrs:{id:"_1-vite-的概要介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-vite-的概要介绍"}},[t._v("#")]),t._v(" 1. Vite 的概要介绍")]),t._v(" "),e("ul",[e("li",[t._v("Vite 特点：开发时效率极高、开箱即用功能完备、社区丰富兼容 rollup、超高速热重载、预设应用和类库打包模式、前端类库无关。")]),t._v(" "),e("li",[t._v("课程目标：掌握 Vite 使用、理解 Vite 原理、对于前端构建的认知。构建是现在前端逃不开的话题，前端框架时代、前端应用越来越复杂、学习构建就是提升自己的重要过程。")]),t._v(" "),e("li",[t._v("课程内容：Vite 的使用、Vite 插件开发和实战、Vite 源码解析。")])]),t._v(" "),e("h3",{attrs:{id:"什么是-vite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-vite"}},[t._v("#")]),t._v(" 什么是 Vite")]),t._v(" "),e("ul",[e("li",[t._v("构建工具的高阶封装，内部使用的是其它构建工具（rollup、esbuild），最核心的是 rollup。")]),t._v(" "),e("li",[t._v("框架无关。")]),t._v(" "),e("li",[t._v("目标：使用简单、快、便于扩展。")]),t._v(" "),e("li",[t._v("类似产品：Snowpack、WMR、@web/dev-server。")])]),t._v(" "),e("h3",{attrs:{id:"vite-对比其他构建工具的优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite-对比其他构建工具的优势"}},[t._v("#")]),t._v(" Vite 对比其他构建工具的优势")]),t._v(" "),e("ul",[e("li",[t._v("区别：High Level API、不包含自己编译能力、完全基于 ESM 加载方式的开发。")]),t._v(" "),e("li",[t._v("Webpack 更全面、rollup 更专一、Vite 更好用 -- "),e("strong",[t._v("Vite 是为项目而生的，而不是为构建而生的，减少了很多配置量")]),t._v("。")]),t._v(" "),e("li",[t._v("减少的工作：dev server、各类 loader、build 命令。")])]),t._v(" "),e("h3",{attrs:{id:"【拓展知识】前端构建工具发展史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【拓展知识】前端构建工具发展史"}},[t._v("#")]),t._v(" 【拓展知识】前端构建工具发展史")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.cn/search?query=%E5%89%8D%E7%AB%AF%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金搜索"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://baijiahao.baidu.com/s?id=1711602874992002736&wfr=spider&for=pc",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端构建这十年"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"【讨论题】谈谈你对于构建工具的认识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【讨论题】谈谈你对于构建工具的认识"}},[t._v("#")]),t._v(" 【讨论题】谈谈你对于构建工具的认识")]),t._v(" "),e("ul",[e("li",[t._v("用过哪些构建工具，觉得哪个更好用：自己配置过的构建工具，直接用 vue-cli / create-react-app 不算，需要知道底层工具，并且进行过配置，搭配命令启动或者脚本启动。")])]),t._v(" "),e("h2",{attrs:{id:"_2-vite-的基础应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-vite-的基础应用"}},[t._v("#")]),t._v(" 2. Vite 的基础应用")]),t._v(" "),e("h3",{attrs:{id:"vite-的优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite-的优势"}},[t._v("#")]),t._v(" Vite 的优势")]),t._v(" "),e("ul",[e("li",[t._v("优势：上手非常简单、开发效率极高（esbuild）、社区成本低（兼容 rollup 插件）、没有复杂晦涩的配置。")]),t._v(" "),e("li",[t._v("更合理的类比：vue-cli / create-react-app（修改配置时还是要碰 webpack）。【1】vue-cli：configureWebpack 和 chainWebpack；【2】create-react-app：eject。")]),t._v(" "),e("li",[t._v("Vite 有自身的插件系统。")]),t._v(" "),e("li",[t._v("生态：兼容 rollup 插件。")])]),t._v(" "),e("h3",{attrs:{id:"vite-创建-vue3-项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite-创建-vue3-项目"}},[t._v("#")]),t._v(" Vite 创建 Vue3 项目")]),t._v(" "),e("ul",[e("li")])])}),[],!1,null,null,null);e.default=i.exports}}]);