(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5,7],{"RR/5":function(e,a,t){},uja3:function(e,a,t){"use strict";t.r(a);t("1Cgs");var n=t("zvbH"),l=(t("D2jH"),t("2ROE")),c=(t("e3Tq"),t("n+tp")),s=t("q1tI"),o=t.n(s),r=(t("RR/5"),t("9kvl")),i=c["a"].Item,m=(i.Brief,e=>{var a=e.hideNavBar,t=e.doctors;return console.log(e),Object(s["useEffect"])(()=>{e.location?e.dispatch({type:"app/getDoctors1",payload:{area:e.location.query.area,dep:e.location.query.dep}}):e.dispatch({type:"app/getDoctors2",payload:{area:e.area,dis:e.dis}})},[e.area]),o.a.createElement("div",{className:"doctors",style:{paddingTop:a?0:45}},a?null:o.a.createElement(n["a"],{icon:o.a.createElement(l["a"],{size:"lg",type:"left"}),onLeftClick:()=>r["b"].goBack()},"\u533b\u751f"),t.map(e=>o.a.createElement(c["a"],{key:e.id},o.a.createElement(i,{thumb:"https://static.cnkang.com/images/cnkang/hosexp/man.jpg",multipleLine:!0,arrow:"horizontal",wrap:!0,onClick:()=>{r["b"].push("/doctorDetail?id=".concat(e.id))}},o.a.createElement("h3",null,o.a.createElement("span",{className:"name"},e.docname)," ",e.title),o.a.createElement("span",{className:"good"},o.a.createElement("span",null,"\u64c5\u957f\uff1a"),e.diseases)))))}),p=e=>({doctors:e.app.doctors1});a["default"]=Object(r["a"])(p)(m)},wlQY:function(e,a,t){},"yng/":function(e,a,t){"use strict";t.r(a);t("vWQn");var n=t("1vAp"),l=(t("e3Tq"),t("n+tp")),c=(t("mw1O"),t("nJCp")),s=(t("ufv1"),t("QYgq")),o=(t("1Cgs"),t("zvbH")),r=(t("D2jH"),t("2ROE")),i=t("ODXe"),m=t("q1tI"),p=t.n(m),d=t("9kvl"),u=(t("wlQY"),t("uja3")),E=e=>({pos:e.app.pos,citys:e.home.city});a["default"]=Object(d["a"])(E)(e=>{var a=e.pos,t=e.citys,E=e.match,g=E.params.index,f=t.map(e=>({value:e.id-1,label:e.csmc})),v=a.addressComponent?a.addressComponent.district:"\u6865\u897f\u533a",b=f.filter(e=>e.label==v)[0].value,h=Object(m["useState"])([b]),y=Object(i["a"])(h,2),j=y[0],k=y[1];return Object(m["useEffect"])(()=>{k([b])},[a]),p.a.createElement("div",{className:"diseaseDetail"},p.a.createElement(o["a"],{icon:p.a.createElement(r["a"],{size:"lg",type:"left"}),onLeftClick:()=>d["b"].goBack()},"\u75be\u75c5\u8be6\u60c5"),p.a.createElement(s["a"],{size:"md"}),p.a.createElement(c["a"],null,p.a.createElement("h2",null,g),p.a.createElement("div",{className:"intro"},p.a.createElement("span",{className:"jian"},"\u7b80\u4ecb\uff1a"),"\u767d\u765c\u98ce\u662f\u4e00\u79cd\u6bd4\u8f83\u5e38\u89c1\u7684\u540e\u5929\u8272\u7d20\u6027\u76ae\u80a4\u75c5\uff0c\u8868\u73b0\u4e3a\u5c40\u9650\u6027\u6216\u6cdb\u53d1\u6027\u76ae\u80a4\u9ecf\u819c\u8272\u7d20\u5b8c\u5168\u8131\u5931\u3002\u7531\u4e8e\u76ae\u80a4\u7684\u9ed1\u7d20\u7ec6\u80de\u529f\u80fd\u6d88\u5931\u5f15\u8d77\uff0c\u4f46\u673a\u5236\u8fd8\u4e0d\u6e05\u695a\u3002\u5168\u8eab\u5404\u90e8\u4f4d\u53ef\u53d1\u751f\uff0c\u5e38\u89c1\u4e8e\u6307\u80cc\u3001\u8155\u3001\u524d\u81c2\u3001\u989c\u9762\u3001\u9888\u9879\u53ca\u751f\u6b96\u5668\u5468\u56f4\u7b49\u3002\u5973\u6027\u5916\u9634\u90e8\u4ea6\u53ef\u53d1\u751f\uff0c\u9752\u5e74\u5987\u5973\u5c45\u591a\u3002")),p.a.createElement("h3",{className:"title"},p.a.createElement("span",null,p.a.createElement("i",{style:{color:"#09b1d8",marginRight:10},className:"iconfont icon-tuijian"}),"\u540d\u533b\u63a8\u8350"),p.a.createElement("span",null,"\u66f4\u591a>>")),p.a.createElement("div",{className:"area"},p.a.createElement(n["a"],{onChange:e=>{k(e),console.log(e)},data:f,cols:1,value:j,className:"forss"},p.a.createElement(l["a"].Item,{arrow:"horizontal"},"\u5f53\u524d\u5730\u533a\uff1a"))),p.a.createElement(u["default"],{dis:g,hideNavBar:!0,area:f[j[0]-1].label}))})}}]);