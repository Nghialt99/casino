(this.webpackJsonpcasino=this.webpackJsonpcasino||[]).push([[0],{17:function(e,a,t){e.exports=t(30)},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(9),r=t(8),s=t(15),l=t(16);function o(e,a){switch(a.type){case"ADD_TODO":return{id:a.id,text:a.text};default:return e}}var m=Object(r.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_TODO":return[].concat(Object(l.a)(e),[o(void 0,a)]);default:return e}}}),d=t(2),u=t(3),h=t(5),E=t(4),g=t(6),v=(t(27),function(e){function a(){return Object(d.a)(this,a),Object(h.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-4"},i.a.createElement("i",{className:"fa fa-gift","aria-hidden":"true"}),i.a.createElement("span",null,"\u01afu \u0110\xe3i")),i.a.createElement("div",{className:"col-4"},i.a.createElement("i",{className:"fa fa-money","aria-hidden":"true"}),i.a.createElement("span",null,"Thanh To\xe1n")),i.a.createElement("div",{className:"col-4"},i.a.createElement("i",{className:"fa fa-phone-square","aria-hidden":"true"}),i.a.createElement("span",null,"H\u1ed7 Tr\u1ee3"))),i.a.createElement("div",{className:"text_cp"},"Copyright \xa9 2020 NghiaLT"))}}]),a}(n.Component)),p=(t(28),function(e){function a(){return Object(d.a)(this,a),Object(h.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"mb_header"},i.a.createElement("h1",{className:"bg_header_name"},"S\xf3c \u0110\u0129a"),i.a.createElement("div",{className:"header_R"},i.a.createElement("a",{href:"/",className:"btn_homeRegister fa fa-registered"}," \u0110\u0103ng k\xfd"),i.a.createElement("a",{href:"/",className:"btn_homeLogin fa fa-sign-in"}," \u0110\u0103ng nh\u1eadp"))),i.a.createElement("div",{className:"dt_header"}))}}]),a}(n.Component)),f=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(i)))).state={isBoxVisible:!1},t.updateDimensions=function(){t.stick()},t}return Object(g.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"stick",value:function(){window.innerWidth<769?this.setState({isBoxVisible:!0}):this.setState({isBoxVisible:!1}),console.log(this.state.isBoxVisible)}},{key:"render",value:function(){var e;return window.innerWidth<769&&(e="hidden"),i.a.createElement("div",{className:"widget ".concat((this.state.isBoxVisible,"")," ").concat(e)},i.a.createElement("img",{src:"https://stc.sp.zdn.vn/zaloid/client/images/favicon.png",alt:"Zalo",width:"40%"}))}}]),a}(n.Component),b=function(e){function a(){return Object(d.a)(this,a),Object(h.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"container body"},i.a.createElement(f,null),i.a.createElement("div",{id:"demo",className:"carousel slide","data-ride":"carousel"},i.a.createElement("ul",{className:"carousel-indicators"},i.a.createElement("li",{"data-target":"#demo","data-slide-to":"0",className:"active"}),i.a.createElement("li",{"data-target":"#demo","data-slide-to":"1"}),i.a.createElement("li",{"data-target":"#demo","data-slide-to":"2"}),i.a.createElement("li",{"data-target":"#demo","data-slide-to":"3"}),i.a.createElement("li",{"data-target":"#demo","data-slide-to":"4"}),i.a.createElement("li",{"data-target":"#demo","data-slide-to":"5"})),i.a.createElement("div",{className:"carousel-inner"},i.a.createElement("div",{className:"carousel-item active"},i.a.createElement("img",{src:"/casino/image/slide/0.jpg",alt:"Los Angeles",width:"100%",height:"20%"})),i.a.createElement("div",{className:"carousel-item"},i.a.createElement("img",{src:"/casino/image/slide/1.jpg",alt:"Chicago",width:"100%",height:"20%"})),i.a.createElement("div",{className:"carousel-item"},i.a.createElement("img",{src:"/casino/image/slide/2.jpg",alt:"New York",width:"100%",height:"20%"})),i.a.createElement("div",{className:"carousel-item"},i.a.createElement("img",{src:"/casino/image/slide/3.jpg",alt:"New York",width:"100%",height:"20%"})),i.a.createElement("div",{className:"carousel-item"},i.a.createElement("img",{src:"/casino/image/slide/4.jpg",alt:"New York",width:"100%",height:"20%"})),i.a.createElement("div",{className:"carousel-item"},i.a.createElement("img",{src:"/casino/image/slide/5.jpg",alt:"New York",width:"100%",height:"20%"}))),i.a.createElement("a",{className:"carousel-control-prev",href:"#demo","data-slide":"prev"},i.a.createElement("span",{className:"carousel-control-prev-icon"})),i.a.createElement("a",{className:"carousel-control-next",href:"#demo","data-slide":"next"},i.a.createElement("span",{className:"carousel-control-next-icon"}))))}}]),a}(n.Component);t(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=Object(r.c)(m),w=document.getElementById("root");Object(c.render)(i.a.createElement(s.a,{store:N},i.a.createElement(p,null),i.a.createElement(b,null),i.a.createElement(v,null)),w),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.29470fe3.chunk.js.map