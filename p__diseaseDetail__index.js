(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9,13],{HPOg:function(e,a,t){"use strict";t.r(a);t("wpjs");var l=t("KKYb"),c=(t("1Cgs"),t("zvbH")),n=(t("D2jH"),t("2ROE")),s=(t("e3Tq"),t("n+tp")),o=t("q1tI"),i=t.n(o),r=(t("RR/5"),t("9kvl")),m=s["a"].Item,p=e=>{var a,t,p=e.hideNavBar,d=e.doctors,u=e.area,E=e.dis,y=e.search,g=e.doctors2;return Object(o["useEffect"])(()=>{if(!y)if(e.match&&"a"!=e.match.params.index)e.dispatch({type:"app/getDoctors1",payload:e.match.params.index});else if(u)e.dispatch({type:"app/getDoctors2",payload:{area:u,dis:E}});else{if(e.location.query.ks)return void e.dispatch({type:"app/zyDocs",payload:e.location.query.ks});e.dispatch({type:"app/getDocsByksyy",payload:e.location.query})}},[u]),u||e.match&&"a"==e.match.params.index||y?i.a.createElement("div",{className:"doctors",style:{paddingTop:p?0:45}},p?null:i.a.createElement(c["a"],{icon:i.a.createElement(n["a"],{size:"lg",type:"left"}),onLeftClick:()=>r["b"].goBack()},"\u533b\u751f(",d.count,"\u540d)"),y&&d.count>0?i.a.createElement("div",{style:{fontSize:16}},"\u641c\u7d22\u7ed3\u679c\uff1a\u5171",i.a.createElement("span",{style:{color:"red"}},d.count),"\u540d\u533b\u751f"):null,null===(t=d.data)||void 0===t?void 0:t.map(e=>i.a.createElement(s["a"],{key:e.id},i.a.createElement(m,{thumb:e.imgurl?"http://47.92.142.154:8097/zyydt".concat(e.imgurl):"https://static.cnkang.com/images/cnkang/hosexp/man.jpg",multipleLine:!0,arrow:"horizontal",onClick:()=>{r["b"].push("/doctorDetail?id=".concat(e.id))}},i.a.createElement("h3",null,i.a.createElement("span",{className:"name"},e.docname)," ",e.title),i.a.createElement("span",{className:"good"},i.a.createElement("span",null,"\u64c5\u957f\uff1a"),e.diseases))))):i.a.createElement("div",{className:"doctors",style:{paddingTop:p?0:45}},p?null:i.a.createElement(c["a"],{icon:i.a.createElement(n["a"],{size:"lg",type:"left"}),onLeftClick:()=>r["b"].goBack()},"\u533b\u751f",i.a.createElement("span",null,"(",g.count,"\u540d)")),e.match.params.index?i.a.createElement("div",{style:{padding:"5px 15px"}},"\u5f53\u524d\u5730\u533a\uff1a",e.match.params.index):null,i.a.createElement(l["a"],{accordion:!0,defaultActiveKey:"0",className:"my-accordion",onChange:e=>{}},null===(a=g.data)||void 0===a?void 0:a.map((e,a)=>i.a.createElement(l["a"].Panel,{key:""+a,header:e.dep},e.doctors.map(e=>i.a.createElement(s["a"],{key:e.id},i.a.createElement(m,{thumb:e.imgurl?"http://47.92.142.154:8097/zyydt".concat(e.imgurl):"https://static.cnkang.com/images/cnkang/hosexp/man.jpg",multipleLine:!0,arrow:"horizontal",onClick:()=>{r["b"].push("/doctorDetail?id=".concat(e.id))}},i.a.createElement("h3",null,i.a.createElement("span",{className:"name"},e.docname)," ",e.title),i.a.createElement("span",{className:"good"},i.a.createElement("span",null,"\u64c5\u957f\uff1a"),e.speciality))))))))},d=e=>({doctors:e.app.doctors1,doctors2:e.app.doctors2});a["default"]=Object(r["a"])(d)(p)},"RR/5":function(e,a,t){},wlQY:function(e,a,t){},"yng/":function(e,a,t){"use strict";t.r(a);t("vWQn");var l=t("1vAp"),c=(t("e3Tq"),t("n+tp")),n=(t("mw1O"),t("nJCp")),s=(t("ufv1"),t("QYgq")),o=(t("1Cgs"),t("zvbH")),i=(t("D2jH"),t("2ROE")),r=t("ODXe"),m=t("q1tI"),p=t.n(m),d=t("9kvl"),u=(t("wlQY"),t("HPOg")),E=e=>({pos:e.app.pos,citys:e.app.city,disDetail:e.app.disDetail,doctors1:e.app.doctors1});a["default"]=Object(d["a"])(E)(e=>{var a,t,E=e.pos,y=e.citys,g=e.match,h=e.doctors1,v=e.dispatch,b=e.disDetail;console.log(b);var f=g.params.index,j=e.location.query.id,k=y.map(e=>({value:e.id-1,label:e.csmc})),N=E.addressComponent?E.addressComponent.district:"\u6865\u897f\u533a",D=k.filter(e=>e.label==N)[0].value,O=Object(m["useState"])([D]),w=Object(r["a"])(O,2),z=w[0],C=w[1],x=Object(m["useState"])(!1),q=Object(r["a"])(x,2),R=q[0],B=q[1];return Object(m["useEffect"])(()=>{C([D])},[E]),Object(m["useEffect"])(()=>{v({type:"app/getDisDetail",payload:j}),v({type:"app/getDoctors2",payload:{area:z,dis:f}})},[E]),p.a.createElement("div",{className:"diseaseDetail"},p.a.createElement(o["a"],{icon:p.a.createElement(i["a"],{size:"lg",type:"left"}),onLeftClick:()=>d["b"].goBack()},"\u75be\u75c5\u8be6\u60c5"),p.a.createElement(s["a"],{size:"md"}),p.a.createElement(n["a"],null,p.a.createElement("h2",null,b.jbmc),p.a.createElement("div",{className:"intro"},p.a.createElement("span",{className:"jian"},"\u7b80\u4ecb\uff1a"),(null===(a=b.jbjj)||void 0===a?void 0:a.length)>100&&!R?b.jbjj.slice(0,100)+"...":b.jbjj,(null===(t=b.jbjj)||void 0===t?void 0:t.length)>100?p.a.createElement("span",{className:"more",onClick:()=>{B(!R)}},p.a.createElement("i",{className:"iconfont icon-pointerup"}),R?"\u6536\u8d77":"\u67e5\u770b\u8be6\u60c5"):null)),p.a.createElement("h3",{className:"title"},p.a.createElement("span",null,p.a.createElement("i",{style:{color:"#09b1d8",marginRight:10},className:"iconfont icon-tuijian"}),"\u533b\u751f\u63a8\u8350",p.a.createElement("span",null,"(",h.count,"\u540d)"))),p.a.createElement("div",{className:"area"},p.a.createElement(l["a"],{onChange:e=>{C(e)},data:k,cols:1,value:z,className:"forss"},p.a.createElement(c["a"].Item,{arrow:"horizontal"},"\u5f53\u524d\u5730\u533a\uff1a"))),p.a.createElement(u["default"],{dis:f,hideNavBar:!0,area:k[z[0]-1].label}))})}}]);