(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{283:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git日常使用笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git日常使用笔记"}},[t._v("#")]),t._v(" Git日常使用笔记")]),t._v(" "),a("h2",{attrs:{id:"个人常用配置-gitconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#个人常用配置-gitconfig"}},[t._v("#")]),t._v(" 个人常用配置 .gitconfig")]),t._v(" "),a("div",{staticClass:"language-config extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[user]\n\tname = cpp #用户名\n\temail = cpp@cpp.com #邮箱\n[http]\n\tSSLVerify = false\n[alias] #缩写\n\tmg = merge\n\tst = status\n\tsw = show\n\tci = commit\n\tco = checkout\n\tbr = branch\n\tss = status -s\n\tmg = merge\n\tmt = mergetool\n\tcf = config\n\tline= log --oneline\n\tlst = log --stat\n\tcdf = clean -df\n\tresf = reset --soft\n\trst = reset\n\trehead = reset HEAD\n\tpr = pull -r\n\tunstage = reset HEAD\n\n[credential]\n\thelper = store\n[core]\n\teditor = vim\n\tquotepath = false\n[merge]\n\ttool = meld\n[diff]\n\trenames = true\n\ttool = meld\n\n")])])]),a("h2",{attrs:{id:"branch-分支操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#branch-分支操作"}},[t._v("#")]),t._v(" branch 分支操作")]),t._v(" "),a("h3",{attrs:{id:"基础操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础操作"}},[t._v("#")]),t._v(" 基础操作")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看当前的分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看当前的分支与远程分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-vv")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看当前的分支与远程分支，可以看到对应的上游分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rv")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 即--remote查看远程分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("local_branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote_branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#推送local_branch本地分支到远程仓库remote_repo的分支remote_branch")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--delete")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote_branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除远程仓库remote_repo的分支remote_branch")]),t._v("\n")])])]),a("h3",{attrs:{id:"查看分支从何处打出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看分支从何处打出"}},[t._v("#")]),t._v(" 查看分支从何处打出")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git reflog show <分支名>")]),t._v("\nboys@VM-20-6-ubuntu:~/opensource/menu$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog show master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看master出处")]),t._v("\n3580d3c "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" master, tag: V3.1.0_R, origin/master, origin/HEAD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" master@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": clone: from https://gitee.com/const-zpc/menu.git\n")])])]),a("h2",{attrs:{id:"commit-提交操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-提交操作"}},[t._v("#")]),t._v(" commit 提交操作")]),t._v(" "),a("p",[t._v("提交遗漏时，使用 "),a("code",[t._v("git commit --amend")]),t._v("追加提交到上次的commit")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" xx "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#要追加提交的内容")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--amend")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#追加提交.")]),t._v("\n")])])]),a("h2",{attrs:{id:"clean-清除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clean-清除"}},[t._v("#")]),t._v(" clean 清除")])])}),[],!1,null,null,null);a.default=e.exports}}]);