(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{280:function(t,a,s){t.exports=s.p+"assets/img/spi1.7f7cf5ad.png"},281:function(t,a,s){t.exports=s.p+"assets/img/spi2.591a8fe1.png"},295:function(t,a,s){"use strict";s.r(a);var v=s(14),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spi协议复习总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spi协议复习总结"}},[t._v("#")]),t._v(" SPI协议复习总结")]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("下面回答由ChatGPT给出，简单过一下：")]),t._v(" "),a("p",[t._v("SPI（Serial Peripheral Interface）协议是一种同步的串行通信协议，用于在微控制器、存储器、传感器和其他外设之间进行通信。它最初由Motorola公司开发，现在已经成为业界标准，被广泛应用于各种嵌入式系统中。")]),t._v(" "),a("p",[t._v("SPI协议定义了一组规则，用于控制数据在设备之间的传输。它使用四个信号线来实现数据传输：SCLK（时钟线）、MOSI（主机输出从机输入线）、MISO（主机输入从机输出线）和SS（片选线）。其中，SCLK是由主机生成的时钟信号，用于同步数据传输；MOSI是主机向从机发送数据的线路；MISO是从机向主机发送数据的线路；SS是用于选择从机的信号线。")]),t._v(" "),a("p",[t._v("在SPI协议中，主机负责发起数据传输，并控制通信过程。每个从机都有一个唯一的片选信号，当主机需要与某个从机通信时，会先将对应的片选信号拉低，然后开始数据传输。传输过程中，主机通过时钟信号控制数据的传输速率，同时在MOSI线上发送数据，在MISO线上接收数据。传输完成后，主机会将对应的片选信号拉高，释放该从机，然后开始与其他从机进行通信。")]),t._v(" "),a("p",[t._v("SPI协议具有简单、快速和灵活的特点，可以支持高速数据传输，且在硬件上实现简单，适用于各种嵌入式系统中。不过，SPI协议并没有提供错误检测和纠正机制，也不能在多主机环境下使用。因此，在实际应用中，需要根据具体情况选择合适的通信协议。")]),t._v(" "),a("h2",{attrs:{id:"硬件组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件组成"}},[t._v("#")]),t._v(" 硬件组成")]),t._v(" "),a("p",[t._v("上面介绍也说了，四根线组成：")]),t._v(" "),a("ul",[a("li",[t._v("SCLK时钟线")]),t._v(" "),a("li",[t._v("MOSI主机输出从机输入")]),t._v(" "),a("li",[t._v("MISO主机输入从机输出")]),t._v(" "),a("li",[t._v("SS/CS片选线")])]),t._v(" "),a("p",[t._v("一对多通信时会有多个SS片选。")]),t._v(" "),a("h2",{attrs:{id:"spi时序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spi时序"}},[t._v("#")]),t._v(" SPI时序")]),t._v(" "),a("h3",{attrs:{id:"起始-终止条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起始-终止条件"}},[t._v("#")]),t._v(" 起始/终止条件")]),t._v(" "),a("p",[t._v("很简单，片选SS由高到低表示开始，由低到高表示终止。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(280),alt:"spi1"}})]),t._v(" "),a("h3",{attrs:{id:"时钟极性和相位极性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时钟极性和相位极性"}},[t._v("#")]),t._v(" 时钟极性和相位极性")]),t._v(" "),a("ul",[a("li",[t._v("CPOL 时钟极性（Clock Polarity）指的是：时钟信号在一个时钟周期内的电平变化方式。SPI中有两种常见的时钟极性：CPOL=0和CPOL=1。当CPOL=0时，时钟信号在空闲状态下为低电平，每个时钟周期开始时会出现上升沿；当CPOL=1时，时钟信号在空闲状态下为高电平，每个时钟周期开始时会出现下降沿。")]),t._v(" "),a("li",[t._v("CPHA 相位极性（Clock Phase）指的是数据信号采样的时间点。SPI中也有两种常见的相位极性：CPHA=0和CPHA=1。当CPHA=0时，数据信号在时钟信号的上升沿之前改变，即在第一个时钟沿之前采样；当CPHA=1时，数据信号在时钟信号的上升沿之后改变，即在第二个时钟沿之前采样。")])]),t._v(" "),a("p",[t._v("SPI的时钟极性和相位极性的不同组合可以实现不同的数据传输模式。")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("p",[t._v("CPOL=0、CPHA=0时钟极性和相位极性的组合是SPI的标准模式；")]),t._v(" "),a("p",[t._v("CPOL=1、CPHA=0时钟极性和相位极性的组合是SPI的CPHA=0模式；")]),t._v(" "),a("p",[t._v("而CPOL=0、CPHA=1时钟极性和相位极性的组合是SPI的CPHA=1模式。")]),t._v(" "),a("p",[t._v("通过CPOL和CPHA的4种不同组合，可以兼容更多的硬件设备。")]),t._v(" "),a("h3",{attrs:{id:"单位字节数据交换时序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单位字节数据交换时序"}},[t._v("#")]),t._v(" 单位字节数据交换时序")]),t._v(" "),a("p",[t._v("先上一张SPI单字节通信时序图，简单了解一些东西：")]),t._v(" "),a("ul",[a("li",[t._v("MOSI和MISO数据线交叉部分表示此时线上的数据可以改变，可以为0/1；")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(281),alt:"spi2"}})])])}),[],!1,null,null,null);a.default=_.exports}}]);