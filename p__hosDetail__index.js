(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"+zyp":function(e,a,t){"use strict";t.r(a);t("mw1O");var l=t("nJCp"),n=(t("wpjs"),t("KKYb")),c=t("q1tI"),s=t.n(c),i=t("9kvl"),r=t("KCKJ"),m=(t("t7is"),e=>{var a=e.depList1,t=e.depList2,i=e.dispatch,m=e.hos;return Object(c["useEffect"])(()=>{m&&i({type:"app/getDepList1ByHos",payload:m})},[m]),s.a.createElement("div",{className:"department"},s.a.createElement(l["a"],null,s.a.createElement(n["a"],{accordion:!0,defaultActiveKey:"dep0",className:"my-accordion",onChange:e=>{void 0!=e&&i({type:"app/getDepList2",payload:{key:a[e.slice(-1)].title,hos:m}})}},a.map((e,a)=>s.a.createElement(n["a"].Panel,{key:"dep"+a,header:e.title},s.a.createElement(r["default"],{data:t,hos:m}))))))}),p=e=>({depList1:e.app.depList1,depList2:e.app.depList2});a["default"]=Object(i["a"])(p)(m)},"Cn+8":function(e,a,t){"use strict";t.r(a);t("wpjs");var l=t("KKYb"),n=(t("1Cgs"),t("zvbH")),c=(t("D2jH"),t("2ROE")),s=(t("mw1O"),t("nJCp")),i=t("q1tI"),r=t.n(i),m=t("9kvl"),p=(t("t7is"),e=>{var a=e.data;return r.a.createElement("div",null,r.a.createElement(s["a"],null,r.a.createElement("div",{className:"wrap"},a.map((e,a)=>r.a.createElement("div",{key:e,onClick:()=>m["b"].push("/doctors/docs?ks=".concat(e)),className:"item"},r.a.createElement("p",null,e))))))}),o=e=>{var a=e.allKs,t=e.dispatch,o=e.hideNav;return Object(i["useEffect"])(()=>{t({type:"app/zyAllKs"})},[]),r.a.createElement("div",{className:"department"},o?null:r.a.createElement(n["a"],{icon:r.a.createElement(c["a"],{size:"lg",type:"left"}),onLeftClick:()=>m["b"].goBack()},"\u66f4\u591a\u79d1\u5ba4"),r.a.createElement(s["a"],null,r.a.createElement(l["a"],{accordion:!0,defaultActiveKey:"dep0",className:"my-accordion",onChange:e=>{}},a.map((e,a)=>r.a.createElement(l["a"].Panel,{key:"dep"+a,header:e.dept1},r.a.createElement(p,{data:e.dept2}))))))},d=e=>({allKs:e.app.allKs});a["default"]=Object(m["a"])(d)(o)},Inyy:function(e,a,t){},KCKJ:function(e,a,t){"use strict";t.r(a);t("mw1O");var l=t("nJCp"),n=t("q1tI"),c=t.n(n),s=t("9kvl");a["default"]=e=>{var a=e.data,t=e.hos;return c.a.createElement("div",null,c.a.createElement(l["a"],null,c.a.createElement("div",{className:"wrap"},a.map((e,a)=>c.a.createElement("div",{key:e.dept2,onClick:()=>s["b"].push("/doctors/a?dep=".concat(e.dept2,"&hos=").concat(t)),className:"item"},c.a.createElement("p",null,e.dept2))))))}},gKg5:function(e,a,t){e.exports=t.p+"static/banner.20d133d4.jpg"},kNkG:function(e,a,t){"use strict";t.r(a);t("1Cgs");var l=t("zvbH"),n=(t("D2jH"),t("2ROE")),c=(t("e3Tq"),t("n+tp")),s=t("q1tI"),i=t.n(s),r=t("9kvl"),m=t("+zyp"),p=t("Cn+8"),o=(t("Inyy"),c["a"].Item),d=e=>{var a=e.hos,d=e.dispatch;return Object(s["useEffect"])(()=>{d({type:"app/getHosDetail",payload:e.match.params.index})},[]),i.a.createElement("div",{className:"hosDetail"},i.a.createElement(l["a"],{icon:i.a.createElement(n["a"],{size:"lg",type:"left"}),onLeftClick:()=>r["b"].goBack()},"\u533b\u9662\u8be6\u60c5"),i.a.createElement("div",{className:"img"},i.a.createElement("img",{src:t("gKg5"),alt:""}),i.a.createElement("div",null,a.hospname)),i.a.createElement(c["a"],{className:"my-list"},i.a.createElement(o,{thumb:i.a.createElement("i",{style:{color:"#09b1d8"},className:"iconfont icon-icon-test1"}),multipleLine:!0,wrap:!0,onClick:()=>{}},a.address)),i.a.createElement(c["a"],{className:"my-list"},i.a.createElement(o,{thumb:i.a.createElement("i",{style:{color:"#09b1d8"},className:"iconfont icon-tubiaozhizuomoban-"}),wrap:!0,onClick:()=>{}},a.contact)),i.a.createElement("h3",{className:"title"},i.a.createElement("span",null,i.a.createElement("i",{style:{color:"#09b1d8",marginRight:10},className:"iconfont icon-keshi"}),"\u79d1\u5ba4\u5217\u8868")),"\u77f3\u5bb6\u5e84\u5e02\u4e2d\u533b\u9662"==a.hospname?i.a.createElement(p["default"],{hideNav:!0}):i.a.createElement(m["default"],{hos:a.hospname}))};a["default"]=Object(r["a"])(e=>({hos:e.app.hosDetail}))(d)},t7is:function(e,a,t){}}]);