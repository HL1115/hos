(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"2UfX":function(e,t,a){"use strict";a.r(t);a("mw1O");var n=a("nJCp"),c=a("q1tI"),l=a.n(c),i=a("9kvl");t["default"]=e=>{var t,a,c=e.data,o=e.icon;return l.a.createElement("div",{className:"newList"},l.a.createElement("h3",{className:"title"},l.a.createElement("span",null,l.a.createElement("i",{style:{color:"#09b1d8",marginRight:10},className:"iconfont icon-"+o}),"\u77f3\u5bb6\u5e84\u5e02\u7701\u3001\u5e02\u7ea7\u540d\u4e2d\u533b",l.a.createElement("span",null,"(",c.mzycount,"\u540d)"))),l.a.createElement(n["a"],null,l.a.createElement("div",{style:{paddingLeft:"2.5%",fontSize:16}},"\u7701\u7ea7\u540d\u4e2d\u533b(",c.shengji&&c.shengji.shengjiCount,"\u540d)"),l.a.createElement("div",{className:"wrap"},null===(t=c.shengji)||void 0===t?void 0:t.shengjiList.map(e=>l.a.createElement("div",{key:e.id,onClick:()=>i["b"].push("/doctorDetail?id=".concat(e.id)),className:"item"},l.a.createElement("p",null,e.docname)))),l.a.createElement("div",{style:{paddingLeft:"2.5%",fontSize:16}},"\u5e02\u7ea7\u540d\u4e2d\u533b(",c.shiji&&c.shiji.shijiCount,"\u540d)"),l.a.createElement("div",{className:"wrap"},null===(a=c.shiji)||void 0===a?void 0:a.shijiList.map(e=>l.a.createElement("div",{key:e.id,onClick:()=>i["b"].push("/doctorDetail?id=".concat(e.id)),className:"item"},l.a.createElement("p",null,e.docname))))))}},GV2H:function(e,t,a){"use strict";a.r(t);a("XGli");var n=a("NHyu"),c=(a("D2jH"),a("2ROE")),l=(a("1Cgs"),a("zvbH")),i=a("ODXe"),o=(a("e3Tq"),a("n+tp")),s=a("q1tI"),r=a.n(s),m=a("9kvl"),p=(a("Q3Uu"),a("yFKA")),d=a("2UfX"),u=a("gK+C"),E=o["a"].Item;t["default"]=Object(m["a"])(e=>({city:e.app.city,pos:e.app.pos,disease:e.app.disease,hosList:e.app.hosList,nearDocs:e.app.nearDocs,totalDoc:e.app.totalDoc,jbHotTop5:e.app.jbHotTop5,docHotTop5:e.app.docHotTop5,zDocHotTop5:e.app.zDocHotTop5,helpList:e.app.helpList,page:e.app.page}))(e=>{var t,h=e.page,g=e.helpList,y=e.city,v=e.totalDoc,b=e.disease,f=e.pos,k=e.dispatch,j=e.nearDocs,N=e.jbHotTop5,C=e.docHotTop5,D=e.zDocHotTop5,w=()=>{h>=g.totalPage||k({type:"app/getHelpList",payload:h+1})};Object(s["useEffect"])(()=>{k({type:"app/clearSearch"}),0==y.length&&k({type:"app/getCityList"}),!f.addressComponent&&k({type:"app/getPosi"})},[]),Object(s["useEffect"])(()=>{f.addressComponent&&k({type:"app/getNearDocs",payload:f.addressComponent.district})},[f]);var H=["\u600e\u6837\u67e5\u627e\u533b\u751f","\u600e\u6837\u786e\u5b9a\u75c5\u540d","\u5e38\u89c1\u75c5\u540d\uff0c\u76f4\u63a5\u67e5\u627e","\u5982\u4f55\u8054\u7cfb\u533b\u751f"],L=Object(s["useState"])(H),z=Object(i["a"])(L,2),T=(z[0],z[1],Object(s["useState"])(!1)),O=Object(i["a"])(T,2);O[0],O[1];return r.a.createElement("div",{className:"container",style:{paddingTop:45}},r.a.createElement(l["a"],{leftContent:"\u77f3\u5bb6\u5e84\u7279\u8272\u4e2d\u533b\u67e5\u8be2"}),r.a.createElement("header",null,r.a.createElement("div",{className:"search",onClick:()=>m["b"].push("/search")},r.a.createElement("input",{type:"text",placeholder:"\u8f93\u5165\u75be\u75c5\u3001\u533b\u9662\u6216\u533b\u751f"}),r.a.createElement(c["a"],{type:"search",color:"#09b1d8"}))),r.a.createElement("div",{className:"content"},r.a.createElement("img",{src:a("gKg5"),style:{width:"100%"}}),r.a.createElement(d["default"],{icon:"good",data:D}),r.a.createElement(p["default"],{reco:C,params:"csmc",icon:"good",data:y.slice(0,9),url:"doctors",text:"\u4f4d\u7f6e",total:v}),r.a.createElement(p["default"],{reco:N,params:"jbmc",icon:"jibingguanli",data:b.slice(0,9),url:"diseaseDetail",text:"\u75be\u75c5",total:v}),r.a.createElement("h3",{className:"title"},r.a.createElement("span",null,r.a.createElement("i",{style:{color:"#09b1d8",marginRight:10},className:"iconfont icon-tuijian"}),"\u9644\u8fd1\u533b\u751f(",j.length,"\u540d)"),r.a.createElement("span",{onClick:()=>{m["b"].push("/doctors/".concat(f.addressComponent.district))}},"\u66f4\u591a>>")),r.a.createElement(u["default"],{doctors:j.slice(0,3)}),r.a.createElement("h3",{className:"title"},r.a.createElement("span",null,r.a.createElement("i",{style:{color:"#09b1d8",marginRight:10},className:"iconfont icon-help-copy"}),"\u5e2e\u52a9")),r.a.createElement(o["a"],null,null===(t=g.list)||void 0===t?void 0:t.map((e,t)=>r.a.createElement(E,{key:t,onClick:()=>m["b"].push("/questionDetail?que=".concat(e.title,"&id=").concat(e.id)),arrow:"horizontal"},t+1,"\u3001",e.title)),h>=g.totalPage?null:r.a.createElement(n["a"],{className:"btn",onClick:w},"\u67e5\u770b\u66f4\u591a ",r.a.createElement("i",{className:"iconfont icon-zhankai"}))),r.a.createElement("div",{style:{textAlign:"center",margin:"3px 0"}},"\u4e3b\u529e\u5355\u4f4d\uff1a\u77f3\u5bb6\u5e84\u5e02\u536b\u751f\u548c\u5065\u5eb7\u59d4\u5458\u4f1a"),r.a.createElement("div",{style:{textAlign:"center",fontSize:12}},"\u6280\u672f\u652f\u6301\uff1a\u77f3\u5bb6\u5e84\u5929\u5eb7\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8")))})},Q3Uu:function(e,t,a){},"RR/5":function(e,t,a){},"gK+C":function(e,t,a){"use strict";a.r(t);a("e3Tq");var n=a("n+tp"),c=a("q1tI"),l=a.n(c),i=(a("RR/5"),a("9kvl")),o=n["a"].Item,s=e=>l.a.createElement("div",{className:"doctors"},e.doctors.map(e=>l.a.createElement(n["a"],{key:e.id},l.a.createElement(o,{thumb:e.imgurl?"http://47.92.142.154:8097/zyydt".concat(e.imgurl):"https://static.cnkang.com/images/cnkang/hosexp/man.jpg",multipleLine:!0,arrow:"horizontal",onClick:()=>{i["b"].push("/doctorDetail?id=".concat(e.id))}},l.a.createElement("h3",null,l.a.createElement("span",{className:"name"},e.docname)," ",e.title),l.a.createElement("span",{className:"good"},l.a.createElement("span",null,"\u64c5\u957f\uff1a"),e.diseases)))));t["default"]=s},gKg5:function(e,t,a){e.exports=a.p+"static/banner.20d133d4.jpg"},yFKA:function(e,t,a){"use strict";a.r(t);a("mw1O");var n=a("nJCp"),c=a("q1tI"),l=a.n(c),i=a("9kvl");t["default"]=e=>{var t=e.reco,a=e.data,c=e.url,o=e.text,s=e.icon,r=e.params,m=e.total;return l.a.createElement("div",{className:"newList"},l.a.createElement("h3",{className:"title"},l.a.createElement("span",null,l.a.createElement("i",{style:{color:"#09b1d8",marginRight:10},className:"iconfont icon-"+s}),"\u6309",o,"\u627e\u533b\u751f",m?"(".concat(m.total,"\u540d)"):null),l.a.createElement("span",{onClick:()=>{i["b"].push("/more?type=".concat(o))}},"\u66f4\u591a>>")),l.a.createElement(n["a"],null,l.a.createElement("div",{className:"listWrap"},l.a.createElement("div",{className:"reco"},l.a.createElement("h3",null,"\u70ed\u641c\u6392\u884c"),"doctors"==c?l.a.createElement("ul",null,t.map(e=>l.a.createElement("li",{onClick:()=>i["b"].push("/doctorDetail?id=".concat(e.id)),key:e.id},e.docname,"(99)"))):"diseaseDetail"==c?l.a.createElement("ul",null,t.map(e=>l.a.createElement("li",{onClick:()=>i["b"].push("/diseaseDetail/".concat(e.jbmc,"?id=").concat(e.id)),key:e.id},e.jbmc,"(99)"))):l.a.createElement("ul",null,t.map(e=>l.a.createElement("li",{onClick:()=>i["b"].push("/hosDetail/".concat(e.id)),key:e.id},e.hospname,"(99)")))),l.a.createElement("div",{className:"wrap"},a.map((e,t)=>l.a.createElement("div",{key:e.id,onClick:()=>i["b"].push("/".concat(c,"/").concat(e[r],"?id=").concat(e.id)),className:"item"},l.a.createElement("p",null,e[r])))))))}}}]);