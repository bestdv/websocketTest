(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(78)},48:function(e,t,n){},52:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),i=(n(48),n(50),n(52),n(9)),l=n(10),u=n(12),s=n(11),m=n(13),h=n(81),d=n(36),b=n(17),p=n(35),f=n.n(p),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).getApi=function(){f.a.get("http://192.168.120.6:8080/monitoring/view").then(function(e){console.log(e),n.setState({message:e.data.message})}).catch(function(e){return console.log(e)})},n.state={message:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getApi()}},{key:"render",value:function(){return r.a.createElement("div",null,"Main \ud398\uc774\uc9c0",r.a.createElement("br",null),this.state.message)}}]),t}(a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Dashboard \ud398\uc774\uc9c0")}}]),t}(a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h.a,{bg:"dark",variant:"dark",className:"mb-4"},r.a.createElement(h.a.Brand,{href:"/"},"Home"),r.a.createElement(h.a.Brand,{href:"/main"},"Main"),r.a.createElement(h.a.Brand,{href:"/dashboard"},"Dashboard")),r.a.createElement(b.a,{path:"/main",component:v}),r.a.createElement(b.a,{path:"/dashboard",component:g}))}}]),t}(a.Component);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.ac4c4c39.chunk.js.map