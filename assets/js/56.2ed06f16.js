(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{475:function(t,v,i){"use strict";i.r(v);var _=i(1),a=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"_1-关于-vue-3-新特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-关于-vue-3-新特性"}},[t._v("#")]),t._v(" 1. 关于 Vue 3 新特性")]),t._v(" "),v("ul",[v("li",[t._v("源码使用 TypeScript 构建；")]),t._v(" "),v("li",[t._v("使用静态标记优化了虚拟 DOM 的性能；")]),t._v(" "),v("li",[t._v("响应式系统基于 Proxy 实现，性能进一步提升。")])]),t._v(" "),v("h2",{attrs:{id:"_2-关于-vue-中组件共享数据机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-关于-vue-中组件共享数据机制"}},[t._v("#")]),t._v(" 2. 关于 Vue 中组件共享数据机制")]),t._v(" "),v("ul",[v("li",[t._v("父组件给子组件传递数据通过属性 props 传递；")]),t._v(" "),v("li",[t._v("嵌套多层的组件传递数据可以通过 provide/inject 实现；")]),t._v(" "),v("li",[t._v("全局数据可以通过 app.config.globalProp 设置；")]),t._v(" "),v("li",[t._v("provide/inject 传递的数据没有内置响应式功能，需要自己封装。")])]),t._v(" "),v("h2",{attrs:{id:"_3-关于-option-和-composition-两种语法的优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-关于-option-和-composition-两种语法的优缺点"}},[t._v("#")]),t._v(" 3. 关于 option 和 composition 两种语法的优缺点")]),t._v(" "),v("ul",[v("li",[t._v("option 中的 this 写法不利于 TypeScript 类型推导；")]),t._v(" "),v("li",[t._v("composition 语法更有利于 Tree Shaking，有利于优化代码的体积；")]),t._v(" "),v("li",[t._v("一个组件内部 option 和 composition 语法可以混用；")]),t._v(" "),v("li",[t._v("script setup 提高了 composition 写法的开发效率。")])]),t._v(" "),v("h2",{attrs:{id:"_4-关于虚拟-dom-的说法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-关于虚拟-dom-的说法"}},[t._v("#")]),t._v(" 4. 关于虚拟 DOM 的说法")]),t._v(" "),v("ul",[v("li",[t._v("虚拟 DOM 本质就是一个 JavaScript 对象，通过这个对象描述项目组件和标签的继承关系；")]),t._v(" "),v("li",[t._v("虚拟 DOM 是 React 首创；")]),t._v(" "),v("li",[t._v("虚拟 DOM 的核心逻辑就是通过计算两个树的差异去减少 DOM 操作；")]),t._v(" "),v("li",[t._v("虚拟 DOM 可以很方便的支持跨端框架。")])]),t._v(" "),v("h2",{attrs:{id:"_5-关于-vuex"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-关于-vuex"}},[t._v("#")]),t._v(" 5. 关于 Vuex")]),t._v(" "),v("ul",[v("li",[t._v("vuex 是 Vue 官网推荐的数据管理框架，和 Vue 框架强绑定。vuex 不可以和 React、Angular 框架配合；")]),t._v(" "),v("li",[t._v("项目中组件之间共享的数据可以通过 vuex 实现；")]),t._v(" "),v("li",[t._v("vuex 是 Vue 的一个插件，内部通过 install 方法在 Vue 上注册了全局变量用来存储数据；")]),t._v(" "),v("li",[t._v("vuex 中的数据本质上就是响应式数据。")])]),t._v(" "),v("h2",{attrs:{id:"_6-关于-vue-中的弹窗组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-关于-vue-中的弹窗组件"}},[t._v("#")]),t._v(" 6. 关于 Vue 中的弹窗组件")]),t._v(" "),v("ul",[v("li",[t._v("弹窗组件的特点之一就是要脱离当前组件，渲染到 body 标签内部；")]),t._v(" "),v("li",[t._v("弹窗类组件由很多类型，有全屏显示内容的 Dialog、Modal，也有只通知部分消息的 Notification；")]),t._v(" "),v("li",[t._v("弹窗类组件 Notification 可以通过 JavaScript 动态创建去使用，实现的难点就是我们动态创建弹窗的虚拟 DOM，手动进行挂载；")]),t._v(" "),v("li",[t._v("Vue 的弹窗组件可以使用 slot 进行渲染内容的扩展。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);