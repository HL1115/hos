(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{GV2H:function(e,a,t){"use strict";t.r(a);t("mw1O");var l=t("nJCp"),n=(t("D2jH"),t("2ROE")),c=(t("e3Tq"),t("n+tp")),i=t("q1tI"),s=t.n(i),r=t("9kvl"),m=(t("Q3Uu"),t("yFKA")),o=t("dAmh"),d=c["a"].Item;a["default"]=Object(r["a"])(e=>({city:e.home.city,pos:e.app.pos,disease:e.home.disease,department:e.home.department,hosList:e.app.hosList}))(e=>{var a=e.city,p=e.disease,u=(e.department,e.pos),h=e.dispatch,E=e.hosList;Object(i["useEffect"])(()=>{h({type:"app/clearSearch"}),0==a.length&&h({type:"home/getCityList"}),!u.addressComponent&&h({type:"app/getPosi"})},[]),Object(i["useEffect"])(()=>{u.addressComponent&&h({type:"app/getHosList",payload:u.addressComponent.district})},[u]);var y=[{id:22,title:"\u4e3b\u4efb\u4e2d\u533b\u5e08",docname:"\u674e\u5efa\u6865",diseases:"\u4e3b\u6cbb\uff1a\u4e2d\u98ce\u75c5\u3001\u813e\u80c3\u75c5\u3001\u6025\u6162\u6027\u6c14\u7ba1\u708e\u3001\u9f3b\u7aa6\u708e\u3001\u51a0\u5fc3\u75c5\u3001\u5fc3\u8870\u3001\u7cd6\u5c3f\u75c5\u3001\u9888\u690e\u75c5\u3001\u5404\u79cd\u7c7b\u578b\u5934\u75db\u3001\u5934\u6655\u3001\u9762\u762b\u3001\u504f\u762b\u53ca\u5185\u79d1\u7591\u96be\u6742\u75c7\u3002\u81ea\u5236\u65b9\u6709\u80ba\u708e\u6c64\u3001\u6b62\u54b3\u6548\u65b9\u3001\u964d\u8102\u65b9\u3001\u4e2d\u98ceIII\u53f7\u65b9\u7b49\u3002\u5bf9\u80bf\u7624\u3001\u7c7b\u98ce\u6e7f\u75c5\u6709\u7814\u7a76\u21b5",imgurl:"/upload/images/doctor/141130100300087.jpg"},{id:23,title:"\u526f\u4e3b\u4efb\u4e2d\u533b\u5e08",docname:"\u9648\u5fd7\u658c",diseases:"\u4e2d\u533b\u836f\u6cbb\u7597\u8fc7\u654f\u6027\u7d2b\u765c\u3001\u9f3b\u708e\u3001\u54ee\u5598\u3001\u6162\u6027\u80c3\u708e\u3001\u75e4\u75ae\u3001\u7cd6\u5c3f\u75c5\u3001\u9ad8\u8840\u538b\u75c5\u3001\u51a0\u5fc3\u75c5\u9762\u795e\u7ecf\u9ebb\u75f9\u3001\u8111\u8840\u7ba1\u540e\u9057\u75c7",imgurl:"/upload/images/doctor/141130100300080.jpg"},{id:24,title:"\u526f\u4e3b\u4efb\u4e2d\u533b\u5e08\u21b5",docname:"\u9ad8\u7fe0\u73b2",diseases:"\u4e2d\u533b\u836f\u6cbb\u7597\u8f93\u5375\u7ba1\u4e0d\u901a\u3001\u6392\u5375\u529f\u80fd\u969c\u788d\u3001\u514d\u75ab\u56e0\u7d20\u5f15\u8d77\u7684\u4e0d\u5b55\u75c7\u21b5",imgurl:"/upload/images/doctor/141130100300081.jpg"},{id:25,title:"\u4e2d\u897f\u533b\u7ed3\u5408\u4e3b\u4efb\u533b\u5e08\u21b5",docname:"\u8d3e\u8fdb\u8f89",diseases:"\u4e2d\u533b\u836f\u6cbb"},{id:39,title:"\u526f\u4e3b\u4efb\u533b\u5e08\u21b5",docname:"\u5218\u96ea\u51b0"}],b=[{id:95,jbmc:"\u51a0\u5fc3\u75c5"},{id:647,jbmc:"\u54b3\u5598"},{id:698,jbmc:"\u5173\u8282\u708e"},{id:803,jbmc:"\u4f4e\u8840\u538b"},{id:45,jbmc:"\u4e45\u54b3"}],g=[{id:7,hospname:"\u77f3\u5bb6\u5e84\u5e02\u4eba\u6c11\u533b\u9662"},{id:19,hospname:"\u77f3\u5bb6\u5e84\u5e02\u7b2c\u4e09\u533b\u9662"},{id:2,hospname:"\u9e7f\u6cc9\u533a\u4e2d\u533b\u9662"},{id:3,hospname:"\u9e7f\u6cc9\u4eba\u6c11\u533b\u9662"},{id:1,hospname:"\u664b\u5dde\u5e02\u4e2d\u533b\u9662"}];return s.a.createElement("div",{className:"container"},s.a.createElement("header",null,s.a.createElement("div",{className:"search",onClick:()=>r["b"].push("/search")},s.a.createElement("input",{type:"text",placeholder:"\u8f93\u5165\u75be\u75c5\u3001\u533b\u9662\u6216\u533b\u751f"}),s.a.createElement(n["a"],{type:"search",color:"#09b1d8"}))),s.a.createElement("div",{className:"content"},s.a.createElement("img",{src:t("gKg5"),style:{width:"100%"}}),s.a.createElement(m["default"],{reco:y,params:"csmc",icon:"good",data:a.slice(0,9),url:"doctors",text:"\u533a\u53bf"}),s.a.createElement(m["default"],{reco:b,params:"jbmc",icon:"jibingguanli",data:p.slice(0,9),url:"diseaseDetail",text:"\u75c5\u540d"}),s.a.createElement(m["default"],{reco:g,params:"csmc",icon:"yiyuan",data:a.slice(0,9),url:"hospitalList",text:"\u533a\u53bf"}),s.a.createElement("h3",{className:"title"},s.a.createElement("span",null,s.a.createElement("i",{style:{color:"#09b1d8",marginRight:10},className:"iconfont icon-tuijian"}),"\u9644\u8fd1\u533b\u9662/\u8bca\u6240")),s.a.createElement(l["a"],null,s.a.createElement(o["default"],{hosList:E.slice(0,5)})),s.a.createElement("h3",{className:"title",style:{borderBottom:"none"}},s.a.createElement("span",null,s.a.createElement("i",{style:{color:"#09b1d8",marginRight:10},className:"iconfont icon-help-copy"}),"\u5e2e\u52a9")),s.a.createElement(c["a"],null,s.a.createElement(d,{arrow:"horizontal"},"1\u3001\u600e\u6837\u67e5\u627e\u533b\u751f"),s.a.createElement(d,{arrow:"horizontal"},"2\u3001\u600e\u6837\u786e\u5b9a\u75c5\u540d"),s.a.createElement(d,{arrow:"horizontal"},"3\u3001\u5e38\u89c1\u75c5\u540d\uff0c\u76f4\u63a5\u67e5\u627e"),s.a.createElement(d,{arrow:"horizontal"},"4\u3001\u5982\u4f55\u8054\u7cfb\u533b\u751f")),s.a.createElement(l["a"],null)))})},Q3Uu:function(e,a,t){},Q5nG:function(e,a,t){},dAmh:function(e,a,t){"use strict";t.r(a);t("e3Tq");var l=t("n+tp"),n=t("q1tI"),c=t.n(n),i=t("9kvl"),s=(t("Q5nG"),l["a"].Item),r=s.Brief;a["default"]=e=>c.a.createElement("div",{className:"hoslist"},e.hosList.map(e=>c.a.createElement(l["a"],{className:"my-list",key:e.id},c.a.createElement(s,{thumb:t("gKg5"),multipleLine:!0,onClick:()=>{i["b"].push("/hosDetail/".concat(e.id))}},c.a.createElement("h3",null,e.hospname),c.a.createElement(r,null,"\u5730\u5740\uff1a",e.address),c.a.createElement(r,null,e.level?c.a.createElement("span",null,e.level):c.a.createElement("span",null,"\u7ea7\u522b"),e.type?c.a.createElement("span",null,e.type):c.a.createElement("span",null,"\u7c7b\u578b"))))))},gKg5:function(e,a,t){e.exports=t.p+"static/banner.4bdea798.jpg"},yFKA:function(e,a,t){"use strict";t.r(a);t("mw1O");var l=t("nJCp"),n=(t("e3Tq"),t("n+tp")),c=t("q1tI"),i=t.n(c),s=t("9kvl");n["a"].Item;a["default"]=e=>{var a=e.reco,t=e.data,n=e.url,c=e.text,r=e.icon,m=e.params,o=e.hideTitle;return i.a.createElement("div",{className:"newList"},o?null:i.a.createElement("h3",{className:"title"},i.a.createElement("span",null,i.a.createElement("i",{style:{color:"#09b1d8",marginRight:10},className:"iconfont icon-"+r}),"\u6309",c,"\u627e","yiyuan"==r?"\u533b\u9662":"\u533b\u751f"),i.a.createElement("span",{onClick:()=>{"yiyuan"==r?s["b"].push("/more?type=".concat(c,"&icon=yiyuan")):s["b"].push("/more?type=".concat(c))}},"\u66f4\u591a>>")),i.a.createElement(l["a"],null,i.a.createElement("div",{className:"listWrap"},i.a.createElement("div",{className:"reco"},i.a.createElement("h3",null,"\u70ed\u641c\u6392\u884c"),"doctors"==n?i.a.createElement("ul",null,a.map(e=>i.a.createElement("li",{onClick:()=>s["b"].push("/doctorDetail?id=".concat(e.id)),key:e.id},e.docname,"(99)"))):"diseaseDetail"==n?i.a.createElement("ul",null,a.map(e=>i.a.createElement("li",{onClick:()=>s["b"].push("/diseaseDetail/".concat(e.jbmc)),key:e.id},e.jbmc,"(99)"))):i.a.createElement("ul",null,a.map(e=>i.a.createElement("li",{onClick:()=>s["b"].push("/hosDetail/".concat(e.id)),key:e.id},e.hospname,"(99)")))),i.a.createElement("div",{className:"wrap"},t.map((e,a)=>i.a.createElement("div",{key:e.id,onClick:()=>s["b"].push("/".concat(n,"/").concat(e[m])),className:"item"},i.a.createElement("p",null,e[m])))))))}}}]);