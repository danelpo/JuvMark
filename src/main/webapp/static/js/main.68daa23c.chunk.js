(this.webpackJsonpjuvmark=this.webpackJsonpjuvmark||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),l=a.n(s),o=(a(20),a(21),a(1)),u=a(2),i=a(9),c=a(4),m=a(3),h=(a(22),a(8),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"iframeContent"},r.a.createElement("h1",null,"Create Curriculum for: ",this.props.classCode))}}]),a}(r.a.Component)),d=a(10),p=a(28),C=(a(23),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({openOption:e}),fetch("http://localhost:8080/api/data/curriculum/"+n.state.curriculumName+"/tasks/"+e.label).then((function(e){return e.json()})).then((function(e){n.setState({curriculumTaskListTasks:e})}))},n.options=function(){var e=[];return n.state.curriculumTaskList.map((function(t){return e.push({value:t,label:t})})),e},n.getRowsForTask=function(){var e=[];if(n.state.curriculumTaskListTasks){var t=[];for(var a in n.state.curriculumTaskListTasks)t.push([a,n.state.curriculumTaskListTasks[a]]);var r=t[0][1],s=[];for(var a in r)s.push(r[a]);s.map((function(t){return e.push({taskNumber:t.TaskNumber,expectations:n.arrayToString(t.Curriculums),taskDesc:t.Description})}))}return e},n.arrayToString=function(e){var t="";for(var a in e)t+=e[a],parseInt(a)+1!==e.length&&(t+=", ");return console.log(t),t},n.state={forceToCreate:!1,curriculumName:n.props.currentCurriculum,curriculumObject:null,curriculumTaskList:[],openOption:null,curriculumTaskListTasks:null,selectOldTaskList:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8080/api/data/curriculum/"+this.state.curriculumName).then((function(e){return e.json()})).then((function(t){e.setState({curriculumObject:t})})),fetch("http://localhost:8080/api/data/curriculum/"+this.state.curriculumName+"/tasks").then((function(e){return e.json()})).then((function(t){e.setState({curriculumTaskList:t})}))}},{key:"selectOldTaskList",value:function(){this.setState({selectOldTaskList:!0})}},{key:"render",value:function(){var e,t=this,a=null;if(this.state.selectOldTaskList&&(e=r.a.createElement(d.a,{className:"loadCurriculumDropDownMenu",value:this.state.openOption,onChange:this.handleChange,options:this.options()}),this.state.openOption)){var n=this.getRowsForTask();a=r.a.createElement("div",{className:"selectOldTasksDiv"},r.a.createElement(p.a,{columns:[{key:"taskNumber",name:"Task Number"},{key:"expectations",name:"Expectations in Curriculum"},{key:"taskDesc",name:"Task Description"}],rows:n}))}return r.a.createElement("div",{className:"taskListMainScreen"},r.a.createElement("h2",null,"Please select an option for your tasks"),r.a.createElement("h4",null,"Tasks include all tests, quizzes, asignments and evaluations"),r.a.createElement("br",null),r.a.createElement("div",{className:"taskOptionsButtonDiv"},r.a.createElement("button",{className:"taskOptionButton",id:"selectOldTaskButton",onClick:function(){t.selectOldTaskList(t)}},"Select Old Task List"),r.a.createElement("button",{className:"taskOptionButton",id:"createNewTaskButton"},"Create New Task List")),r.a.createElement("br",null),e,r.a.createElement("br",null),a)}}]),a}(r.a.Component)),v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({openOption:e,viewMode:!1})},n.options=function(){var e=[];return n.state.allCurriculums.map((function(t){return e.push({value:t,label:t})})),e},n.viewCurriculum=function(){fetch("http://localhost:8080/api/data/curriculum/"+n.state.openOption.label).then((function(e){return e.json()})).then((function(e){n.setState({curriculumExpectations:e.Curriculums})})),n.setState({viewMode:!0})},n.saveCurriculum=function(){n.setState({taskWindow:!0})},n.state={allCurriculums:null,openOption:null,viewMode:!1,curriculumExpectations:null,taskWindow:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8080/api/data/curriculum").then((function(e){return e.json()})).then((function(t){e.setState({allCurriculums:t})}))}},{key:"render",value:function(){var e,t,a=null;if(this.state.allCurriculums&&(e=r.a.createElement(d.a,{className:"loadCurriculumDropDownMenu",value:this.state.openOption,onChange:this.handleChange,options:this.options()}),this.state.openOption&&(t=r.a.createElement("div",{className:"textBoxDiv",id:"optionDropMenuDiv"},r.a.createElement("button",{className:"textBox oldCurriculumSelectOptionButton",id:"oldCurriculumSaveOption",onClick:this.saveCurriculum},"Save"),r.a.createElement("button",{className:"textBox oldCurriculumSelectOptionButton",id:"oldCurriculumViewOption",onClick:this.viewCurriculum},"View")))),this.state.viewMode){var n=(document.getElementById("optionDropMenuDiv").getBoundingClientRect().bottom+20).toString()+"px",s=[];if(this.state.curriculumExpectations){var l=[];for(var o in this.state.curriculumExpectations)l.push([o,this.state.curriculumExpectations[o]]);l.map((function(e){return s.push({expectation:e[1].CurriculumNumber,description:e[1].Description})}))}a=r.a.createElement("div",{id:"viewOldCurriculumIframe",style:{top:n}},r.a.createElement(p.a,{columns:[{key:"expectation",name:"Expectation"},{key:"description",name:"Description"}],rows:s}))}var u=r.a.createElement("div",{className:"iframeContent"},r.a.createElement("h1",{style:{fontSize:"3vmin"}},"Load Curriculum for: ",this.props.classCode),r.a.createElement("div",{style:{width:"100%",alignContent:"center"}},e),t,a);return this.state.taskWindow&&(u=r.a.createElement(C,{loadOld:!0,currentCurriculum:this.state.openOption.label})),u}}]),a}(r.a.Component),f=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={classCode:e.classCode,startYear:e.startYear,endYear:e.endYear,semester:e.semester,iframeWindow:0},n}return Object(u.a)(a,[{key:"apdateHomeValues",value:function(){var e=document.getElementById("classCodeBox").value;""===e?this.props.changeProps("classCode",null):this.props.changeProps("classCode",e);var t=document.getElementById("startYearBox").value;""===t?this.props.changeProps("startYear",null):this.props.changeProps("startYear",t);var a=document.getElementById("endYearBox").value;""===a?this.props.changeProps("endYear",null):this.props.changeProps("endYear",a);var n=document.getElementById("semesterBox").value;""===n?this.props.changeProps("semester",null):this.props.changeProps("semester",n)}},{key:"render",value:function(){var e,t,a,n,s=this;this.state.classCode&&(e=this.state.classCode,this.setState({classCode:null})),this.state.startYear&&(t=this.state.startYear,this.setState({startYear:null})),this.state.endYear&&(a=this.state.endYear,this.setState({endYear:null})),this.state.semester&&(n=this.state.semester,this.setState({semester:null}));var l=r.a.createElement("div",{className:"iframeContent"},r.a.createElement("h1",null,"Create Class"),r.a.createElement("h4",null,"Please enter class code in the following format:"),r.a.createElement("div",{className:"textBoxDiv",id:"classCodeDiv"},r.a.createElement("input",{type:"text",className:"textBox",id:"classCodeBox",placeholder:"ICS4U-01",value:e,onChange:function(){return s.apdateHomeValues()}})),r.a.createElement("br",null),r.a.createElement("h4",null,"Please enter school year in the designated textboxes:"),r.a.createElement("div",{className:"textBoxDiv",id:"yearDateDiv"},r.a.createElement("input",{type:"text",className:"textBox yearDateTextBox",id:"startYearBox",placeholder:"Start Year (2019)",value:t,onChange:function(){return s.apdateHomeValues()}}),r.a.createElement("input",{type:"text",className:"textBox yearDateTextBox",id:"endYearBox",placeholder:"End Year (2020)",value:a,onChange:function(){return s.apdateHomeValues()}}),r.a.createElement("input",{type:"text",className:"textBox yearDateTextBox",id:"semesterBox",placeholder:"Semester (1 or 2)",value:n,onChange:function(){return s.apdateHomeValues()}})),r.a.createElement("br",null),r.a.createElement("h4",null,"Please select a curriculum option:"),r.a.createElement("div",{className:"buttonDiv",id:"curriculumButtonDiv"},r.a.createElement("button",{className:"textBox curriculumButton",id:"CreateCurriculumButton",onClick:function(){return s.CreateCurriculum()}},"Create Curriculum"),r.a.createElement("button",{className:"textBox curriculumButton",id:"OldCurriculumButton",onClick:function(){return s.LoadOldCurriculum()}},"Use Old Curriculum"))),o=r.a.createElement(h,{classCode:this.props.classCode?this.props.classCode:"Class Code Not Given"}),u=r.a.createElement("div",{className:"iframeContent"},r.a.createElement(v,{classCode:this.props.classCode?this.props.classCode:"Class Code Not Given"})),i=l;return 1===this.state.iframeWindow?i=o:2===this.state.iframeWindow&&(i=u),i}},{key:"CreateCurriculum",value:function(){this.setState({iframeWindow:1})}},{key:"LoadOldCurriculum",value:function(){this.setState({iframeWindow:2})}}]),a}(r.a.Component),k=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Current Classes"),r.a.createElement("h2",null,"Feature not yet installed"))}}]),a}(r.a.Component),b=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Past Classes"),r.a.createElement("h2",null,"Feature not yet installed"))}}]),a}(r.a.Component),E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={iframeButtonControl:null,createClass_ClassCode:null,createClass_startYear:null,createClass_endYear:null,createClass_semester:null,home:Object(i.a)(n)},n}return Object(u.a)(a,[{key:"buttonClicked",value:function(e){var t=this,a=document.body.getElementsByClassName("homeButton"),n=window.innerWidth/10,r=setInterval((function(){for(var e=document.body.getElementsByClassName("mainIframe")[0],s=0;s<a.length;s++){var l=a[s];l.getBoundingClientRect().x<n?clearInterval(r):l.style.left=(l.getBoundingClientRect().x-3).toString()+"px";var o=t.getAlpha(getComputedStyle(document.body.getElementsByClassName("mainIframe")[0]).backgroundColor);o<1&&(e.style.backgroundColor="rgba(245,245,245,"+(parseFloat(o)+.005).toString()+")",e.style.color="rgba(0,0,0,"+(parseFloat(o)+.005).toString()+")")}}),5);this.loadIframe(e)}},{key:"changeProps",value:function(e,t){"classCode"===e?this.setState({createClass_ClassCode:t}):"startYear"===e?this.setState({createClass_startYear:t}):"endYear"===e?this.setState({createClass_endYear:t}):"semester"===e&&this.setState({createClass_semester:t})}},{key:"getAlpha",value:function(e){for(var t=null,a=null,n=null,r=0;r<e.length;r++)if(","===e.substring(r,r+1))if(null===t)t=r;else{if(null!==a){n=r;break}a=r}if(null===n)return 1;for(var s=null,l=n;l<e.length;l++)if(")"===e.substring(l,l+1)){s=e.substring(n+2,l);break}return parseFloat(s)}},{key:"loadIframe",value:function(e){this.setState({iframeButtonControl:e})}},{key:"render",value:function(){var e,t=this,a=0===this.state.iframeButtonControl?"homeButton boldButton":"homeButton unboldenButton",n=1===this.state.iframeButtonControl?"homeButton boldButton":"homeButton unboldenButton",s=2===this.state.iframeButtonControl?"homeButton boldButton":"homeButton unboldenButton";return 0===this.state.iframeButtonControl?e=r.a.createElement(k,null):1===this.state.iframeButtonControl?e=r.a.createElement(f,{classCode:this.state.createClass_ClassCode,startYear:this.state.createClass_startYear,endYear:this.state.createClass_endYear,semester:this.state.createClass_semester,changeProps:this.changeProps.bind(this)}):2===this.state.iframeButtonControl&&(e=r.a.createElement(b,null)),r.a.createElement("div",null,r.a.createElement("div",{className:"mainIframe"},e),r.a.createElement("input",{type:"button",className:a,value:"Current Classes",style:{top:(window.innerHeight/4-window.innerHeight/20).toString()+"px"},onClick:function(){return t.buttonClicked(0)}}),r.a.createElement("input",{type:"button",className:n,value:"Create Class",style:{top:(window.innerHeight/2-window.innerHeight/20).toString()+"px"},onClick:function(){return t.buttonClicked(1)}}),r.a.createElement("input",{type:"button",className:s,value:"Past Classes",style:{top:(3*window.innerHeight/4-window.innerHeight/20).toString()+"px"},onClick:function(){return t.buttonClicked(2)}}))}}]),a}(r.a.Component);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){}},[[15,1,2]]]);
//# sourceMappingURL=main.68daa23c.chunk.js.map