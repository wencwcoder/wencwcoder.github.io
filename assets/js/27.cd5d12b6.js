(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{557:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("原链接：https://juejin.cn/post/6954902440915238920")])]),s._v(" "),t("blockquote",[t("p",[s._v("ECMAScript 发展进程中，会有很多功能的更新，比如销毁，箭头功能，模块，它们极大的改变 JavaScript 编写方式，可能有些人喜欢，有些人不喜欢，但像每个新功能一样，我们最终会习惯它们。新版本的 ECMAScript 引入了三个新的逻辑赋值运算符：空运算符，AND和OR运算符，这些运算符的出现，也是希望让我们的代码更干净简洁，下面分享几个优雅的 JavaScript 运算符使用技巧。")])]),s._v(" "),t("h2",{attrs:{id:"_1-可选链接运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-可选链接运算符"}},[s._v("#")]),s._v(" 1. 可选链接运算符（？.）")]),s._v(" "),t("p",[t("strong",[s._v("可选链接运算符（Optional Chaining Operator）")]),s._v(" 处于 ES2020 提案的第4阶段，因此应将其添加到规范中。它改变了访问对象内部属性的方式，尤其是深层嵌套的属性。它也可以作为 TypeScript 3.7+ 中的功能使用。")]),s._v(" "),t("p",[s._v("相信大部分开发前端的的小伙伴们都会遇到null和未定义的属性。JS语言的动态特性使其无法不碰到它们。特别是在处理嵌套对象时，以下代码很常见")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("children "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("children"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("children"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// I have a title!")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 简化")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" title "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("children"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("上面的代码用于API响应，我必须解析JSON以确保名称存在。但是，当对象具有可选属性或某些配置对象具有某些值的动态映射时，可能会遇到类似情况，需要检查很多边界条件。")]),s._v(" "),t("p",[s._v("这时候，如果我们使用可选链接运算符，一切就变得更加轻松了。它为我们检查嵌套属性，而不必显式搜索梯形图。我们所要做的就是使用“？” 要检查空值的属性之后的运算符。我们可以随意在表达式中多次使用该运算符，并且如果未定义任何项，它将尽早返回。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对于静态属性用法是：")]),s._v("\nobject"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("property\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对于动态属性将其更改为：")]),s._v("\nobject"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("expression"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("由于操作符一旦为空值就会终止，因此也可以使用它来有条件地调用方法或应用条件逻辑。")]),s._v(" "),t("p",[s._v("对于方法的调用你可以这样写：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("runsOnlyIfMethodExists"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("与无效合并一起使用：")]),s._v(" "),t("p",[s._v("提供了一种方法来处理未定义或为空值和表达提供默认值。我们可以使用"),t("code",[s._v("??")]),s._v("运算符，为表达式提供默认值。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'codercao'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// codercao")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("因此，如果属性不存在，则可以将无效的合并运算符与可选链接运算符结合使用以提供默认值。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" title "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("children"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("title "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'codercao'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// codercao")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_2-逻辑空分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-逻辑空分配"}},[s._v("#")]),s._v(" 2. 逻辑空分配（?? =）")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("expr1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??=")]),s._v(" expr2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("逻辑空值运算符仅在 nullish 值（"),t("code",[s._v("null")]),s._v(" 或者 "),t("code",[s._v("undefined")]),s._v("）时才将值分配给 expr1，表达方式：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??=")]),s._v(" y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此逻辑赋值运算符等效于")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"_3-逻辑或分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-逻辑或分配"}},[s._v("#")]),s._v(" 3. 逻辑或分配（|| =）")]),s._v(" "),t("p",[s._v("此逻辑赋值运算符仅在左侧表达式为 "),t("strong",[s._v("falsy值（虚值）")]),s._v(' 时才赋值。Falsy值（虚值）与null有所不同，因为falsy值（虚值）可以是任何一种值：undefined，null，空字符串(双引号""、单引号’’、反引号``)，NaN，0。IE浏览器中的 document.all，也算是一个。')]),s._v(" "),t("p",[s._v("语法：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||=")]),s._v(" y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("在我们想要保留现有值（如果不存在）的情况下，这很有用，否则我们想为其分配默认值。例如，如果搜索请求中没有数据，我们希望将元素的内部HTML设置为默认值。否则，我们要显示现有列表。这样，我们避免了不必要的更新和任何副作用，例如解析，重新渲染，失去焦点等。我们可以简单地使用此运算符来使用 JavaScript 更新 HTML：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'search'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("innerHTML "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<i>No posts found matching this search.</i>'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_4-逻辑与分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-逻辑与分配"}},[s._v("#")]),s._v(" 4. 逻辑与分配（&& =）")]),s._v(" "),t("p",[s._v("此逻辑赋值运算符仅在左侧为真时才赋值。因此：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&=")]),s._v(" y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于")]),s._v("\nx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"_5-bitwise-or-运算符可以把浮点数转换为32位整数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-bitwise-or-运算符可以把浮点数转换为32位整数"}},[s._v("#")]),s._v(" 5. Bitwise OR (|)运算符可以把浮点数转换为32位整数")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[s._v("#")]),s._v(" 最后")]),s._v(" "),t("p",[s._v("让我们不需要再编写大量我们例子中代码即可轻松访问嵌套属性。但是 IE 不支持它，因此，如果需要支持该版本或更旧版本的浏览器，则可能需要添加 Babel 插件。对于 Node.js，需要为此升级到 Node 14 LTS 版本，因为 12.x 不支持该版本。")])])}),[],!1,null,null,null);a.default=e.exports}}]);