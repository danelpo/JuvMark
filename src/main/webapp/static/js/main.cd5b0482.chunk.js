(this.webpackJsonpjuvmark=this.webpackJsonpjuvmark||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),o=n.n(l),i=(n(12),n(13),n(1)),u=n(2),c=n(4),s=n(3),m=(n(14),function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Create Class"),r.a.createElement("h2",null,"Feature will soon be installed"))}}]),n}(r.a.Component)),h=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Current Classes"),r.a.createElement("h2",null,"Feature not yet installed"))}}]),n}(r.a.Component),d=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Past Classes"),r.a.createElement("h2",null,"Feature not yet installed"))}}]),n}(r.a.Component),f=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={iframeButtonControl:null},a}return Object(u.a)(n,[{key:"buttonClicked",value:function(e){var t=this,n=document.body.getElementsByClassName("homeButton"),a=window.innerWidth/10,r=setInterval((function(){for(var e=document.body.getElementsByClassName("mainIframe")[0],l=0;l<n.length;l++){var o=n[l];o.getBoundingClientRect().x<a?clearInterval(r):o.style.left=(o.getBoundingClientRect().x-3).toString()+"px";var i=t.getAlpha(getComputedStyle(document.body.getElementsByClassName("mainIframe")[0]).backgroundColor);i<1&&(e.style.backgroundColor="rgba(245,245,245,"+(parseFloat(i)+.005).toString()+")",e.style.color="rgba(0,0,0,"+(parseFloat(i)+.005).toString()+")")}}),5);this.loadIframe(e)}},{key:"getAlpha",value:function(e){for(var t=null,n=null,a=null,r=0;r<e.length;r++)if(","===e.substring(r,r+1))if(null===t)t=r;else{if(null!==n){a=r;break}n=r}if(null===a)return 1;for(var l=null,o=a;o<e.length;o++)if(")"===e.substring(o,o+1)){l=e.substring(a+2,o);break}return parseFloat(l)}},{key:"loadIframe",value:function(e){this.setState({iframeButtonControl:e})}},{key:"render",value:function(){var e,t=this;return 0===this.state.iframeButtonControl?e=r.a.createElement(h,null):1===this.state.iframeButtonControl?e=r.a.createElement(m,null):this.state.iframeButtonControl&&(e=r.a.createElement(d,null)),r.a.createElement("div",null,r.a.createElement("div",{className:"mainIframe"},e),r.a.createElement("input",{type:"button",className:"homeButton",value:"Current Classes",style:{top:(window.innerHeight/4-window.innerHeight/20).toString()+"px"},onClick:function(){return t.buttonClicked(0)}}),r.a.createElement("input",{type:"button",className:"homeButton",value:"Create Class",style:{top:(window.innerHeight/2-window.innerHeight/20).toString()+"px"},onClick:function(){return t.buttonClicked(1)}}),r.a.createElement("input",{type:"button",className:"homeButton",value:"Past Classes",style:{top:(3*window.innerHeight/4-window.innerHeight/20).toString()+"px"},onClick:function(){return t.buttonClicked(2)}}))}}]),n}(r.a.Component);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.cd5b0482.chunk.js.map