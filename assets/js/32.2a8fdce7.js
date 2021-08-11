(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{563:function(v,_,a){"use strict";a.r(_);var t=a(2),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"_1-数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据类型"}},[v._v("#")]),v._v(" 1. 数据类型")]),v._v(" "),a("blockquote",[a("p",[v._v("JavaScript 中基本数据类型和引用数据类型是如何存储的")]),v._v(" "),a("p",[v._v("在刚开始学习程序设计的时候没有在意内存这些基础知识，导致后来在提到“什么什么是存在栈中的，栈中只是存了一个引用”这样的话时总是一脸懵逼。后来渐渐的了解了一些内存的知识，这部分还是非常有必要了解的。")])]),v._v(" "),a("h3",{attrs:{id:"基本数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据结构"}},[v._v("#")]),v._v(" 基本数据结构")]),v._v(" "),a("ul",[a("li",[v._v("栈：只允许在一段进行插入或者删除操作的线性表，是一种先进后出的数据结构。")]),v._v(" "),a("li",[v._v("堆：是基于散列算法的数据结构。")]),v._v(" "),a("li",[v._v("队列：是一种先进先出（FIFO）的数据结构。")])]),v._v(" "),a("h3",{attrs:{id:"javascript-中数据类型的存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-中数据类型的存储"}},[v._v("#")]),v._v(" JavaScript 中数据类型的存储")]),v._v(" "),a("p",[v._v("JavaScript 中将数据类型分为基本数据类型和引用数据类型，它们其中有一个区别就是存储的位置不同。")]),v._v(" "),a("h4",{attrs:{id:"基本数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[v._v("#")]),v._v(" 基本数据类型")]),v._v(" "),a("p",[v._v("我们都知道 JavaScript 中的基本数据类型有：")]),v._v(" "),a("ul",[a("li",[v._v("String")]),v._v(" "),a("li",[v._v("Number")]),v._v(" "),a("li",[v._v("Boolean")]),v._v(" "),a("li",[v._v("Undefined")]),v._v(" "),a("li",[v._v("Null")]),v._v(" "),a("li",[v._v("Symbol（暂时不管）")])]),v._v(" "),a("p",[v._v("基本数据类型都是一些简单的数据段，它们是存储在栈内存中。")]),v._v(" "),a("h4",{attrs:{id:"引用数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用数据类型"}},[v._v("#")]),v._v(" 引用数据类型")]),v._v(" "),a("p",[v._v("JavaScript 中的引用数据类型有：")]),v._v(" "),a("ul",[a("li",[v._v("Array")]),v._v(" "),a("li",[v._v("object")])]),v._v(" "),a("p",[v._v("引用数据类型是保存在堆内存中的，然后再栈内存中保存一个对堆内存中实际对象的引用。所以，JavaScript中对引用数据类型的操作都是操作对象的引用而不是实际的对象。")]),v._v(" "),a("p",[v._v("可以理解为，栈内存中保存了一个地址，这个地址和堆内存中的实际值是相关的。")]),v._v(" "),a("h4",{attrs:{id:"复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[v._v("#")]),v._v(" 复制")]),v._v(" "),a("p",[v._v("基本数据类型：对于基本数据类型，如果进行复制，系统会自动为新的变量在栈内存中分配一个新值，很容易理解。")]),v._v(" "),a("p",[v._v("引用数据类型：如果对于数组、对象这样的引用数据类型而言，复制的时候就会有所区别了。系统也会自动为新的变量在栈内存中分配一个值，但这个值仅仅是一个地址。也就是说，复制出来的变量和原有的变量具有相同的地址值，指向堆内存中的同一个对象。")]),v._v(" "),a("h4",{attrs:{id:"为什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么"}},[v._v("#")]),v._v(" 为什么？")]),v._v(" "),a("p",[v._v("为什么基本数据类型存在栈中，而引用数据类型存在堆中呢？")]),v._v(" "),a("ol",[a("li",[v._v("堆比栈大，栈比对速度快。")]),v._v(" "),a("li",[v._v("基本数据类型比较稳定，而且相对来说占用的内存小。")]),v._v(" "),a("li",[v._v("引用数据类型大小是动态的，而且是无限的。")]),v._v(" "),a("li",[v._v("堆内存是无序存储，可以根据引用直接获取。")])]),v._v(" "),a("h2",{attrs:{id:"_2-es6变量命名方式以及块级作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-es6变量命名方式以及块级作用域"}},[v._v("#")]),v._v(" 2. ES6变量命名方式以及块级作用域")]),v._v(" "),a("h3",{attrs:{id:"var-声明及变量提升机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-声明及变量提升机制"}},[v._v("#")]),v._v(" var 声明及变量提升机制")]),v._v(" "),a("p",[v._v("在ES6之前，在函数作用域中或者全局作用域中通过"),a("code",[v._v("var")]),v._v("关键字来声明变量，无论是在代码的哪个位置，这条声明语句都会提到最顶部来执行，这就是变量声明提升。")]),v._v(" "),a("p",[v._v("注意："),a("strong",[v._v("只是声明提升，初始化并没有提升。")])]),v._v(" "),a("h3",{attrs:{id:"块级声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块级声明"}},[v._v("#")]),v._v(" 块级声明")]),v._v(" "),a("p",[v._v("ES6前是没有块级作用域的，比如"),a("code",[v._v("{}")]),v._v("外可以访问内部的变量。")]),v._v(" "),a("h4",{attrs:{id:"let声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let声明"}},[v._v("#")]),v._v(" let声明")]),v._v(" "),a("ul",[a("li",[v._v("声明变量")]),v._v(" "),a("li",[v._v("作用域限制在当前代码块")]),v._v(" "),a("li",[v._v("声明不会提升")]),v._v(" "),a("li",[v._v("禁止重声明（同一作用域不行，可以覆盖外部同名变量）")])]),v._v(" "),a("h4",{attrs:{id:"const声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#const声明"}},[v._v("#")]),v._v(" const声明")]),v._v(" "),a("ul",[a("li",[v._v("声明常量")]),v._v(" "),a("li",[v._v("必须初始化")]),v._v(" "),a("li",[v._v("不可更改")]),v._v(" "),a("li",[v._v("作用域限制在当前代码块")]),v._v(" "),a("li",[v._v("声明不会提升")]),v._v(" "),a("li",[v._v("禁止重声明（同一作用域不行，可以覆盖外部同名变量）")])]),v._v(" "),a("p",[v._v("如果用"),a("code",[v._v("const")]),v._v("来声明对象，则"),a("strong",[v._v("对象中")]),v._v("的值可以修改。")]),v._v(" "),a("h4",{attrs:{id:"临时死区-temporal-dead-zone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#临时死区-temporal-dead-zone"}},[v._v("#")]),v._v(" 临时死区（Temporal Dead Zone）")]),v._v(" "),a("p",[v._v("JavaScript 引擎在扫描代码发现声明变量时，遇到"),a("code",[v._v("var")]),v._v("则提升到作用域顶部，遇到"),a("code",[v._v("let")]),v._v("和"),a("code",[v._v("const")]),v._v("则放到 TDZ 中。当执行了变量声明语句后，TDZ 中的变量才能正常访问。")]),v._v(" "),a("h4",{attrs:{id:"全局块作用域绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局块作用域绑定"}},[v._v("#")]),v._v(" 全局块作用域绑定")]),v._v(" "),a("p",[v._v("在全局作用域下声明的时")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("var")]),v._v("会覆盖window对象中的属性")]),v._v(" "),a("li",[a("code",[v._v("let")]),v._v("和"),a("code",[v._v("const")]),v._v("会屏蔽，而不是覆盖，用"),a("code",[v._v("window.")]),v._v("还能访问到")])])])}),[],!1,null,null,null);_.default=r.exports}}]);