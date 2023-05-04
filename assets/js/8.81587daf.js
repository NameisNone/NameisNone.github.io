(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{282:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"c-c-关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-c-关键字"}},[t._v("#")]),t._v(" C/C++关键字")]),t._v(" "),s("h2",{attrs:{id:"static"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#static"}},[t._v("#")]),t._v(" static")]),t._v(" "),s("ul",[s("li",[t._v("标识修饰变量为静态变量，存储在静态区，存储在静态区的数据生命周期与程序相同，在main函数之前初始化，在程序退出时销毁。")]),t._v(" "),s("li",[t._v("限制作用域，static声明的变量、函数只能作用范围限制在当前文件(C语言)；")]),t._v(" "),s("li",[t._v("对于C++，static修饰类方法，表明该方法是静态方法，不需要创建类实例也可以条用；")])]),t._v(" "),s("h2",{attrs:{id:"const"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#const"}},[t._v("#")]),t._v(" const")]),t._v(" "),s("ul",[s("li",[t._v("声明常量，修饰的变量初始化后值无法改变(C语言)；")]),t._v(" "),s("li",[t._v("修饰函数参数的引用，C++将创建临时变量，让引用指向临时变量。")])]),t._v(" "),s("h2",{attrs:{id:"volatile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile"}},[t._v("#")]),t._v(" volatile")]),t._v(" "),s("p",[t._v("关键字本意是：“易变的”。个人认为主要有两个作用：")]),t._v(" "),s("p",[t._v("1、防止编译器优化，有些编译器会对变量赋值进行优化，加上volatile可以防止这种优化；")]),t._v(" "),s("p",[t._v("典型的例子，是用于对硬件寄存器的操作：")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("XBYTE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x55")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nXBYTE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x56")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nXBYTE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x57")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nXBYTE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x58")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("对外部硬件而言，上述四条语句分别表示不同的操作，会产生四种不同的动作，但编译器可能会对程序进行优化，只认为XBYTE[2]=0x58（即忽略前三条语句，只产生一条机器代码）。加上volatile可以防止这种优化。")]),t._v(" "),s("p",[t._v("2、提醒编译器变量随时都有可能改变，每次都要从内存地址中读取变量值，而不是缓存中读取。")]),t._v(" "),s("p",[t._v("这种作用更常用于中断、多线程场景，当中断或多个线程中对某个变量都进行读/写操作时，每次访问该变量时都需要从内存中读取最新的值，而不是从缓存中读取旧值。")])])}),[],!1,null,null,null);s.default=r.exports}}]);