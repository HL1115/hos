(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{IV3V:function(e,a,t){"use strict";t.r(a);t("e3Tq");var n=t("n+tp"),l=t("q1tI"),c=t.n(l),i=(t("RR/5"),t("9kvl")),o=n["a"].Item,r=e=>{var a,t=e.topDocs;e.dispatch;return console.log(t),c.a.createElement("div",{className:"doctors"},null===(a=t.data)||void 0===a?void 0:a.map(e=>c.a.createElement("div",{key:e.dep},c.a.createElement("h3",{style:{padding:"3px 15px"}},e.dep),e.doctors.map(e=>c.a.createElement(n["a"],{key:e.id},c.a.createElement(o,{thumb:e.imgurl?"http://47.92.142.154:8097/zyydt".concat(e.imgurl):"https://static.cnkang.com/images/cnkang/hosexp/man.jpg",multipleLine:!0,arrow:"horizontal",onClick:()=>{i["b"].push("/doctorDetail?id=".concat(e.id))}},c.a.createElement("h3",null,c.a.createElement("span",{className:"name"},e.docname)," ",e.title),c.a.createElement("span",{className:"good"},c.a.createElement("span",null,"\u64c5\u957f\uff1a"),e.speciality)))))))},m=e=>({topDocs:e.app.topDocs});a["default"]=Object(i["a"])(m)(r)},"RR/5":function(e,a,t){},gYOk:function(e,a,t){"use strict";t.r(a);t("1Cgs");var n=t("zvbH"),l=(t("D2jH"),t("2ROE")),c=t("q1tI"),i=t.n(c),o=t("9kvl"),r=(t("mw1O"),t("nJCp")),m=e=>{var a=e.data,t=e.url,n=e.text,l=e.icon,c=e.params,m=e.hideTitle;return i.a.createElement("div",null,m?null:i.a.createElement("h3",{className:"title"},i.a.createElement("span",null,i.a.createElement("i",{style:{color:"#09b1d8",marginRight:10},className:"iconfont icon-"+l}),"\u6309",n,"\u627e","yiyuan"==l?"\u533b\u9662":"\u533b\u751f"),i.a.createElement("span",{onClick:()=>{"yiyuan"==l?o["b"].push("/more?type=".concat(n,"&icon=yiyuan")):o["b"].push("/more?type=".concat(n))}},"\u66f4\u591a>>")),i.a.createElement(r["a"],null,i.a.createElement("div",{className:"wrap"},a.map((e,a)=>i.a.createElement("div",{key:e.id,onClick:()=>o["b"].push("/".concat(t,"/").concat(e[c])),className:"item"},i.a.createElement("p",null,e[c]))))))},s=t("al2S"),p=t("IV3V");a["default"]=Object(o["a"])(e=>({city:e.app.city}))(e=>{var a=e.city,t=e.location.query.type;return i.a.createElement("div",{style:{paddingTop:45}},i.a.createElement(n["a"],{icon:i.a.createElement(l["a"],{size:"lg",type:"left"}),onLeftClick:()=>o["b"].replace("/")},"\u66f4\u591a",t),i.a.createElement("div",null,"\u540d\u533b"==t?i.a.createElement(p["default"],null):"\u75c5\u540d"==t?i.a.createElement(s["default"],null):i.a.createElement(m,{hideTitle:!0,params:"csmc",icon:"good",data:a,url:"doctors",text:"\u533b\u751f"})))})}}]);