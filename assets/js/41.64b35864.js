(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{449:function(a,t,v){"use strict";v.r(t);var s=v(0),_=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据类型"}},[a._v("#")]),a._v(" 1. 数据类型")]),a._v(" "),t("blockquote",[t("p",[a._v("JavaScript 中基本数据类型和引用数据类型是如何存储的")]),a._v(" "),t("p",[a._v("在刚开始学习程序设计的时候没有在意内存这些基础知识，导致后来在提到“什么什么是存在栈中的，栈中只是存了一个引用”这样的话时总是一脸懵逼。后来渐渐的了解了一些内存的知识，这部分还是非常有必要了解的。")])]),a._v(" "),t("h3",{attrs:{id:"基本数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本数据结构"}},[a._v("#")]),a._v(" 基本数据结构")]),a._v(" "),t("ul",[t("li",[a._v("栈：只允许在一段进行插入或者删除操作的线性表，是一种先进后出的数据结构。")]),a._v(" "),t("li",[a._v("堆：是基于散列算法的数据结构。")]),a._v(" "),t("li",[a._v("队列：是一种先进先出（FIFO）的数据结构。")])]),a._v(" "),t("h3",{attrs:{id:"javascript-中数据类型的存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript-中数据类型的存储"}},[a._v("#")]),a._v(" JavaScript 中数据类型的存储")]),a._v(" "),t("p",[a._v("JavaScript 中将数据类型分为基本数据类型和引用数据类型，它们其中有一个区别就是存储的位置不同。")]),a._v(" "),t("h4",{attrs:{id:"基本数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[a._v("#")]),a._v(" 基本数据类型")]),a._v(" "),t("p",[a._v("我们都知道 JavaScript 中的基本数据类型有：")]),a._v(" "),t("ul",[t("li",[a._v("String")]),a._v(" "),t("li",[a._v("Number")]),a._v(" "),t("li",[a._v("Boolean")]),a._v(" "),t("li",[a._v("Undefined")]),a._v(" "),t("li",[a._v("Null")]),a._v(" "),t("li",[a._v("Symbol（暂时不管）")])]),a._v(" "),t("p",[a._v("基本数据类型都是一些简单的数据段，它们是存储在栈内存中。")]),a._v(" "),t("h4",{attrs:{id:"引用数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用数据类型"}},[a._v("#")]),a._v(" 引用数据类型")]),a._v(" "),t("p",[a._v("JavaScript 中的引用数据类型有：")]),a._v(" "),t("ul",[t("li",[a._v("Array")]),a._v(" "),t("li",[a._v("object")])]),a._v(" "),t("p",[a._v("引用数据类型是保存在堆内存中的，然后再栈内存中保存一个对堆内存中实际对象的引用。所以，JavaScript中对引用数据类型的操作都是操作对象的引用而不是实际的对象。")]),a._v(" "),t("p",[a._v("可以理解为，栈内存中保存了一个地址，这个地址和堆内存中的实际值是相关的。")]),a._v(" "),t("h4",{attrs:{id:"复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[a._v("#")]),a._v(" 复制")]),a._v(" "),t("p",[a._v("基本数据类型：对于基本数据类型，如果进行复制，系统会自动为新的变量在栈内存中分配一个新值，很容易理解。")]),a._v(" "),t("p",[a._v("引用数据类型：如果对于数组、对象这样的引用数据类型而言，复制的时候就会有所区别了。系统也会自动为新的变量在栈内存中分配一个值，但这个值仅仅是一个地址。也就是说，复制出来的变量和原有的变量具有相同的地址值，指向堆内存中的同一个对象。")]),a._v(" "),t("h4",{attrs:{id:"为什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么"}},[a._v("#")]),a._v(" 为什么？")]),a._v(" "),t("p",[a._v("为什么基本数据类型存在栈中，而引用数据类型存在堆中呢？")]),a._v(" "),t("ol",[t("li",[a._v("堆比栈大，栈比对速度快。")]),a._v(" "),t("li",[a._v("基本数据类型比较稳定，而且相对来说占用的内存小。")]),a._v(" "),t("li",[a._v("引用数据类型大小是动态的，而且是无限的。")]),a._v(" "),t("li",[a._v("堆内存是无序存储，可以根据引用直接获取。")])]),a._v(" "),t("h2",{attrs:{id:"_2-es6变量命名方式以及块级作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-es6变量命名方式以及块级作用域"}},[a._v("#")]),a._v(" 2. ES6变量命名方式以及块级作用域")]),a._v(" "),t("h3",{attrs:{id:"var-声明及变量提升机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#var-声明及变量提升机制"}},[a._v("#")]),a._v(" var 声明及变量提升机制")]),a._v(" "),t("ul",[t("li",[a._v("在ES6之前，在函数作用域中或者全局作用域中通过 "),t("code",[a._v("var")]),a._v(" 关键字来声明变量，无论是在代码的哪个位置，这条声明语句都会提到最顶部来执行，这就是变量声明提升。")]),a._v(" "),t("li",[a._v("注意："),t("strong",[a._v("只是声明提升，初始化并没有提升。")])])]),a._v(" "),t("h3",{attrs:{id:"块级声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#块级声明"}},[a._v("#")]),a._v(" 块级声明")]),a._v(" "),t("p",[a._v("ES6前是没有块级作用域的，比如 "),t("code",[a._v("{}")]),a._v(" 外可以访问内部的变量。")]),a._v(" "),t("ul",[t("li",[a._v("let 声明：声明变量、作用域限制在当前代码块、声明不会提升、禁止重声明（同一作用域不行，可以覆盖外部同名变量）。")])]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("123")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'abc'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ReferenceError: Cannot access 'a' before initialization")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("ul",[t("li",[a._v("const 声明：声明常量、必须初始化、不可更改、作用域限制在当前代码块、声明不会提升、禁止重声明（同一作用域不行，可以覆盖外部同名变量）。如果用 "),t("code",[a._v("const")]),a._v(" 来声明对象，则"),t("strong",[a._v("对象中")]),a._v("的值可以修改。")]),a._v(" "),t("li",[a._v("临时死区（Temporal Dead Zone）：JavaScript 引擎在扫描代码发现声明变量时，遇到 "),t("code",[a._v("var")]),a._v(" 则提升到作用域顶部，遇到 "),t("code",[a._v("let")]),a._v(" 和 "),t("code",[a._v("const")]),a._v(" 则放到 TDZ 中。当执行了变量声明语句后，TDZ 中的变量才能正常访问。")]),a._v(" "),t("li",[a._v("全局块作用域绑定：在全局作用域下声明的时候，"),t("code",[a._v("var")]),a._v(" 会覆盖window对象中的属性、"),t("code",[a._v("let")]),a._v(" 和 "),t("code",[a._v("const")]),a._v(" 会屏蔽，而不是覆盖，用 "),t("code",[a._v("window.")]),a._v(" 还能访问到。")])])])}),[],!1,null,null,null);t.default=_.exports}}]);