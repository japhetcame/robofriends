(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(6),i=t.n(a),c=(t(12),t(1)),s=t(2),l=t(4),u=t(3),h=function(e){e.robots;throw new Error("Noooooo!")},f=function(e){e.searchfield;var n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},d=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},v=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(e){var o;return Object(c.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(s.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setSate({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooooops That is not good"):this.props.children}}]),t}(o.Component),g=(t(13),function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchfield,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(v,null,r.a.createElement(h,{robots:o})))):r.a.createElement("h1",null,"Loading")}}]),t}(o.Component)),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(14);i.a.render(r.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends","/service-worker.js");m?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):p(e)}))}}()},7:function(e,n,t){e.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.20bfa2e0.chunk.js.map