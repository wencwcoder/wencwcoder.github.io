---
title: 面试&资源
date: 2021-04-10
---

<!-- more -->

#### JavaScript

- 讲讲`js数据类型`？基本和引用的区别？`symbol`和`bigint`讲一讲应用场景？
- 判断数据类型的方法？`instanceof`原理?判断`空对象`？ `typof null`？`typeof NaN`？
- var/let/const 区别？`暂时性死区`？`块级作用域`？const a = {}; a.x = 1 能不能修改？
- 说说你对`函数式编程`的理解？`函数柯里化`的理解？平时的使用场景？
- `防抖、节流`的含义，使用场景？`手写一下`？
- call、apply、bind区别？`bind实现`？bind之后还能修改this指向吗？为什么？
- 闭包概念，最主要的还是问`闭包的场景`？
- 用`es5实现es6`类的继承？各种继承问的挺多的。
- 深拷贝与浅拷贝？常用方法？手写一个`深拷贝函数`？
- 说说你知道的JavaScript`设计模式`？观察者和发布订阅的区别？`手写`一个发布订阅？
- 说说对你对JavaScript`异步编程`的理解？
- `ES Module`与 `CommonJS` 模块的差异？两者互相加载的方式？一般会扯到AMD
- `Promise`.all、race、allSettled 概念、手写？很多手写题都会用到，比如用promise实现请求`并发个数`限制？



#### CSS

- 水平垂直`居中`？兼容性？`不知道宽高`情况下？
- BFC概念？作用？`常用场景`？
- Flex？注意`flex：1`的含义，一般会给你个场景题
- `盒模型`概念，如何`切换`盒模型？
- 实现`1px`边框？1px线条？
- `伪类`和`伪元素`区别？使用场景？



#### Http && 浏览器

- 浏览器`缓存`？http缓存？ 主要要`讲一讲`强缓存、协商缓存、preload、prefetch、Service Worker等，`304`的含义？协商缓存`e-tag`是怎么生成的？`Last-Modified`是基于什么生成的？两者对比一下？`优先级`哪个高？

- 什么是`跨域`？什么情况下会跨域？浏览器根据什么`字段`判断是否允许跨域？跨域的`解决方案`有哪些？`options`请求了解过吗？说说CORS中的`简单请求`和`复杂请求`？`form表单提交`会跨域吗？

- 讲一讲浏览器事件循环`Event Loop`？node `事件循环`描述一下？

- `http2`有哪些新特性？`http2`还有哪些缺陷？`http3`的一些了解？

- `从输入 URL 到页面加载完成的过程`，一般要很详细的描述：包括`DNS查询`，`缓存`查询，`3次握手`，`4次挥手`，浏览器`渲染进`程等，面试官会从里面再挑几个问题深入问，比如为什么是3次握手4次挥手？渲染进程中的GUI渲染线程、JS引擎线程、事件触发线程等等？可能会问到进程线程的区别？浏览器为什么是多进程？js为什么是单线程？怎么支持多线程？等等

- https`加密原理`？主要是讲`对称加密`和`非对此加密`结合使用的一个过程。什么是`中间人攻击`？和http区别？



#### Vue

- 生命周期？那个生命周期可以获取到`真实DOM`？`修改data`里面的数据，会触发什么生命周期？
- 组件data为什么是一个`函数`？
- vue 组件通信？一般说了`vuex`，就会问vuex用法？`action`和`mutations`区别？实现原理等？
- vue `导航守卫`，分全局和组件的，一般用于权限控制，这个就可能扯到项目中的一些`鉴权问题`。
- `$nextTick` 作用？实现原理？微任务向宏任务的`降级处理`，经常被问到说出几种宏任务，微任务。
- `vue响应式原理`？基本都会问
- vue `scoped`属性作用？实现原理？
- vue `router`有几种模式？实现方式？
- `key`的作用？没有key的情况，vue会怎么做？会引出diff的问题
- vue `diff过程`，和react diff区别？
- vue 2.x `defineProperty缺陷`？业务代码里面怎么处理？`$set`原理？vue是怎么`重写数组方法`的？考察你是不是真的看过源码
- vue 3.0 `proxy`优缺点？怎么处理vue3不支持IE？
- `computed` 和 `watch` 的区别和运用的场景？除了基本的，看你能不能说出`三种watcher`的区别



#### React

- `生命周期`详细描述一下？官方为什么`改变`？
- 说说你对`虚拟DOM`的理解？直接全量更新和diff哪个快（这个问题要`分情况`）？
- 什么是`HOC`？React里面用过哪些？可能让你实现一个`add(1)(2)(3)`的函数
- `Fiber`干了什么事情？`requestIdleCallback`了解多少？
- `react`性能优化？
- `hooks`出现的意义？`类组件`和`函数组件`之间的区别是什么？
- 为什么`不要在`循环、条件语句或者嵌套函数中`调用hooks`？记住官网的一句话，`Not Magic, just Arrays`
- setState `同步`还是`异步`？比较常问，问的可能也比较深入
- 如何避免组件的`重新渲染`？memo/useMemo、PureComponent？useMemo和useCallback区别？



#### Node

- 常用的一些模块，`fs/path/http`等等
- `EventEmitter` 概念，使用场景，错误捕获
- `Stream` 概念？使用场景？常见的Stream？



#### Webpack

- webpack `构建流程`？`打包原理`？
- 项目中做的一些`优化`？
- `loader`和`plugin`的区别？有没有写过？常用哪些loader和plugin
- webpack`热跟新`原理？
- `tree-shaking`？对于 CommonJS，tree shaking怎么办？
- webpack loader的`执行顺序`？从左到右？从上到下？



#### 开源项目

- [深入浅出 Webpack](https://webpack.wuhaolin.cn/) 真 `深入浅出`

- [Promise 小书](http://liubin.org/promises-book/#introduction) 面试都被`promise`锤过吧？这里有很全面的讲解

- [大厂面试题每日一题](https://q.shanyue.tech/) 没事就来刷一刷

- [大前端面试宝典 - 图解前端](https://lucifer.ren/fe-interview/#/) `图解`，懂吧

- [前端面试每日 3+1](https://github.com/haizlin/fe-interview) 以面试题来驱动学习，提倡每日学习与思考，每天进步一点。`有点卷`，但是没办法😂

- [前端面试](https://lgwebdream.github.io/FE-Interview/) 里面也有每日一题，可以持续打卡，`还是卷~`😂

- [七天学会NodeJS](https://nqdeng.github.io/7-days-nodejs/#1) 算个入门教程吧，挺全面的

- [若依后台管理框架](http://vue.ruoyi.vip/index) [若依官网](http://ruoyi.vip/) `vue后台系统`，感兴趣的可以了解下

- [TypeScript 中文手册](https://typescript.bootcss.com/) 学习`TypeScript`必备

  

- react

- [React高频面试题梳理，看看面试怎么答？（上）](https://mp.weixin.qq.com/s/W7CNGn-Qc8o0EQ3bIKAJBQ)

- [React 生命周期图](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) `大神之作`，画的很清楚

- [35 道咱们必须要清楚的 React 面试题](https://juejin.cn/post/6844903988073070606) 问题和答案都有

- [这可能是最通俗的 React Fiber(时间分片) 打开方式](https://juejin.cn/post/6844903975112671239)

- [React 入门儿](https://juejin.cn/post/6899243806214848519) 京东凹凸实验室出品，非入门

- [成都房协网数据分析](https://github.com/mengsixing/cdfang-spider) `React + TS` 可以学习一波

- [React 中文风格组件库](https://github.com/zhui-team/zhui) 很`有意思`的开源项目



- vue
- [Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/) `ustbhuangyi`大佬的课，讲的很清楚
- [vue 源码分析](https://www.bilibili.com/video/BV1LE411e7HE) `视频`，带你从头实现一个vue
- [一次关于Vue的自我模拟面试](https://juejin.cn/post/6870374238760894472#heading-5) 百度大佬的梦，学习一波，也去做个梦
- [vue2.x高阶问题，你能答多少](https://juejin.cn/post/6921911974611664903) `我写的`，掺个水
- [图解 Vue 响应式原理](https://juejin.cn/post/6857669921166491662) `图解`，懂了吧，思路很清晰



- 其它文章
- [前端常见跨域解决方案（全)](https://segmentfault.com/a/1190000011145364) 跨域的问题，就一篇`搞定`吧
- [2021年，我是如何从一名Vueer转岗到React阵营！](https://mp.weixin.qq.com/s/_U6MtxJ9_UWJYN3mPx9heg)  目前个人也在`vue转react`，后续也会出一篇个人的感受
- [拯救你的年底KPI：前端性能优化](https://juejin.cn/post/6911472693405548557) 个人对前端性能优化相关的总结，有兴趣的可以看看，文章里有`在线PPT`可以看
- [可视化拖拽组件库一些技术要点原理分析](https://juejin.cn/post/6908502083075325959) 加深自己对`可视化`的一些认识
- [10 个 GitHub 上超火的前端面试项目](https://juejin.cn/post/6895752757534261256) 面试相关的，`收藏`搞起来
- [前端面试常见的手写功能](https://juejin.cn/post/6873513007037546510) 准备面试，至少`来写一遍`
- [无头浏览器 Puppeteer 初探](https://juejin.cn/post/6844903504276881422) `Puppeteer`可以帮我们做很多服务端的事情，不知道的同学去了解下。也可以看看我用Puppeteer做的产出：[Egg + Puppeteer 实现Html转PDF](https://juejin.cn/post/6907500437134376974) 在线预览：[html转pdf](http://118.25.49.69/)
- [2021年前端面试必读文章](https://juejin.cn/post/6844904116339261447) 梳理的很全面，每个知识点对应的都有`文章链接`，有些`基础`的知识点建议看`MDN`，对某些东西，每个人都有自己的理解。
- [图解 HTTP 缓存](https://www.zoo.team/article/http-cache) `政采云`前端出品，讲的挺清楚的
- [浏览器渲染机制](https://segmentfault.com/a/1190000014018604) 讲的`很全`










