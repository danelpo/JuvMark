(this.webpackJsonpjuvmark=this.webpackJsonpjuvmark||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),l=a.n(s),o=(a(13),a(14),a(1)),i=a(2),u=a(5),c=a(4),m=a(3),d=(a(15),a(16),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={classCode:e.classCode,startYear:e.startYear,endYear:e.endYear,semester:e.semester,iframeWindow:0},n}return Object(i.a)(a,[{key:"apdateHomeValues",value:function(){var e=document.getElementById("classCodeBox").value;""===e?this.props.changeProps("classCode",null):this.props.changeProps("classCode",e);var t=document.getElementById("startYearBox").value;""===t?this.props.changeProps("startYear",null):this.props.changeProps("startYear",t);var a=document.getElementById("endYearBox").value;""===a?this.props.changeProps("endYear",null):this.props.changeProps("endYear",a);var n=document.getElementById("semesterBox").value;""===n?this.props.changeProps("semester",null):this.props.changeProps("semester",n)}},{key:"render",value:function(){var e,t,a,n,s=this;this.state.classCode&&(e=this.state.classCode,this.setState({classCode:null})),this.state.startYear&&(t=this.state.startYear,this.setState({startYear:null})),this.state.endYear&&(a=this.state.endYear,this.setState({endYear:null})),this.state.semester&&(n=this.state.semester,this.setState({semester:null}));var l=r.a.createElement("div",{className:"iframeContent"},r.a.createElement("h1",null,"Create Class"),r.a.createElement("h4",null,"Please enter class code in the following format:"),r.a.createElement("div",{className:"textBoxDiv",id:"classCodeDiv"},r.a.createElement("input",{type:"text",className:"textBox",id:"classCodeBox",placeholder:"ICS4U-01",value:e,onChange:function(){return s.apdateHomeValues()}})),r.a.createElement("br",null),r.a.createElement("h4",null,"Please enter school year in the designated textboxes:"),r.a.createElement("div",{className:"textBoxDiv",id:"yearDateDiv"},r.a.createElement("input",{type:"text",className:"textBox yearDateTextBox",id:"startYearBox",placeholder:"Start Year (2019)",value:t,onChange:function(){return s.apdateHomeValues()}}),r.a.createElement("input",{type:"text",className:"textBox yearDateTextBox",id:"endYearBox",placeholder:"End Year (2020)",value:a,onChange:function(){return s.apdateHomeValues()}}),r.a.createElement("input",{type:"text",className:"textBox yearDateTextBox",id:"semesterBox",placeholder:"Semester (1 or 2)",value:n,onChange:function(){return s.apdateHomeValues()}})),r.a.createElement("br",null),r.a.createElement("h4",null,"Please select a curriculum option:"),r.a.createElement("div",{className:"buttonDiv",id:"curriculumButtonDiv"},r.a.createElement("button",{className:"textBox curriculumButton",id:"CreateCurriculumButton",onClick:function(){return s.CreateCurriculum()}},"Create Curriculum"),r.a.createElement("button",{className:"textBox curriculumButton",id:"OldCurriculumButton",onClick:function(){return s.LoadOldCurriculum()}},"Use Old Curriculum"))),o=r.a.createElement("div",{className:"iframeContent"},r.a.createElement("h1",null,"Create Curriculum")),i=r.a.createElement("div",{className:"iframeContent"},r.a.createElement("h1",null,"Load Old Curriculum")),u=l;return 1===this.state.iframeWindow?u=o:2===this.state.iframeWindow&&(u=i),u}},{key:"CreateCurriculum",value:function(){this.setState({iframeWindow:1})}},{key:"LoadOldCurriculum",value:function(){this.setState({iframeWindow:2})}}]),a}(r.a.Component)),h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Current Classes"),r.a.createElement("h2",null,"Feature not yet installed"))}}]),a}(r.a.Component),C=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Past Classes"),r.a.createElement("h2",null,"Feature not yet installed"))}}]),a}(r.a.Component),p=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={iframeButtonControl:null,createClass_ClassCode:null,createClass_startYear:null,createClass_endYear:null,createClass_semester:null,home:Object(u.a)(n)},n}return Object(i.a)(a,[{key:"buttonClicked",value:function(e){var t=this,a=document.body.getElementsByClassName("homeButton"),n=window.innerWidth/10,r=setInterval((function(){for(var e=document.body.getElementsByClassName("mainIframe")[0],s=0;s<a.length;s++){var l=a[s];l.getBoundingClientRect().x<n?clearInterval(r):l.style.left=(l.getBoundingClientRect().x-3).toString()+"px";var o=t.getAlpha(getComputedStyle(document.body.getElementsByClassName("mainIframe")[0]).backgroundColor);o<1&&(e.style.backgroundColor="rgba(245,245,245,"+(parseFloat(o)+.005).toString()+")",e.style.color="rgba(0,0,0,"+(parseFloat(o)+.005).toString()+")")}}),5);this.loadIframe(e)}},{key:"changeProps",value:function(e,t){"classCode"===e?this.setState({createClass_ClassCode:t}):"startYear"===e?this.setState({createClass_startYear:t}):"endYear"===e?this.setState({createClass_endYear:t}):"semester"===e&&this.setState({createClass_semester:t})}},{key:"getAlpha",value:function(e){for(var t=null,a=null,n=null,r=0;r<e.length;r++)if(","===e.substring(r,r+1))if(null===t)t=r;else{if(null!==a){n=r;break}a=r}if(null===n)return 1;for(var s=null,l=n;l<e.length;l++)if(")"===e.substring(l,l+1)){s=e.substring(n+2,l);break}return parseFloat(s)}},{key:"loadIframe",value:function(e){this.setState({iframeButtonControl:e})}},{key:"render",value:function(){var e,t=this;return 0===this.state.iframeButtonControl?e=r.a.createElement(h,null):1===this.state.iframeButtonControl?e=r.a.createElement(d,{classCode:this.state.createClass_ClassCode,startYear:this.state.createClass_startYear,endYear:this.state.createClass_endYear,semester:this.state.createClass_semester,changeProps:this.changeProps.bind(this)}):this.state.iframeButtonControl&&(e=r.a.createElement(C,null)),r.a.createElement("div",null,r.a.createElement("div",{className:"mainIframe"},e),r.a.createElement("input",{type:"button",className:"homeButton",value:"Current Classes",style:{top:(window.innerHeight/4-window.innerHeight/20).toString()+"px"},onClick:function(){return t.buttonClicked(0)}}),r.a.createElement("input",{type:"button",className:"homeButton",value:"Create Class",style:{top:(window.innerHeight/2-window.innerHeight/20).toString()+"px"},onClick:function(){return t.buttonClicked(1)}}),r.a.createElement("input",{type:"button",className:"homeButton",value:"Past Classes",style:{top:(3*window.innerHeight/4-window.innerHeight/20).toString()+"px"},onClick:function(){return t.buttonClicked(2)}}))}}]),a}(r.a.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.898e9402.chunk.js.map