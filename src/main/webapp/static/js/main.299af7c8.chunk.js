(this.webpackJsonpjuvmark=this.webpackJsonpjuvmark||[]).push([[0],{25:function(e,t,a){e.exports=a(53)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),l=a.n(r),i=(a(30),a(31),a(1)),o=a(2),u=a(10),c=a(4),m=a(3),d=(a(32),a(9),a(22)),h=a.n(d),p=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).courseCodeFromClassCode=function(e){if(e){for(var t=0;t<e.length;t++)if("-"===e.substring(t,t+1))return e.substring(0,t);return e}},n.validateCurriculumName=function(e){if(n.state.allCurriculumsArray)n.state.allCurriculumsArray;return e},n.state={allCurriculumsArray:null},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8080/api/data/curriculum").then((function(e){return e.json()})).then((function(t){e.setState({allCurriculumsArray:t})}))}},{key:"render",value:function(){h.a.post("http://localhost:8080/api/data/curriculum/newName/".concat("IT FUCKING WORKS BABY WOOOOOOOOOOOO FUCK YEA")).then((function(e){console.log(e)}));var e=this.courseCodeFromClassCode(this.props.classDetails.code)+"_"+this.props.classDetails.start+"-"+this.props.classDetails.end,t=this.validateCurriculumName(e);return s.a.createElement("div",{className:"iframeContent"},s.a.createElement("h1",null,"Create Curriculum for: ",this.props.classCode),s.a.createElement("h2",null,"Creating Curriculum: ",t))}}]),a}(s.a.Component),C=a(11),f=a(55),v=(a(50),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({openOption:e}),fetch("http://localhost:8080/api/data/curriculum/"+n.state.curriculumName+"/tasks/"+e.label).then((function(e){return e.json()})).then((function(e){n.setState({curriculumTaskListTasks:e})}))},n.options=function(){var e=[];return n.state.curriculumTaskList.map((function(t){return e.push({value:t,label:t})})),e},n.getRowsForTask=function(){var e=[];if(n.state.curriculumTaskListTasks){var t=[];for(var a in n.state.curriculumTaskListTasks)t.push([a,n.state.curriculumTaskListTasks[a]]);var s=t[0][1],r=[];for(var l in s)r.push(s[l]);r.map((function(t){return e.push({taskNumber:t.TaskNumber,expectations:n.arrayToString(t.Curriculums),taskDesc:t.Description})}))}return e},n.arrayToString=function(e){var t="";for(var a in e)t+=e[a],parseInt(a)+1!==e.length&&(t+=", ");return t},n.cancelTaskView=function(){n.setState({openOption:null})},n.bringToConfirmHomeScreen=function(){var e=n.props.classDetails;e.taskList=n.state.openOption.label,n.props.changeToConfirm(e)},n.state={forceToCreate:!1,curriculumName:n.props.currentCurriculum,curriculumObject:null,curriculumTaskList:[],openOption:null,curriculumTaskListTasks:null,selectOldTaskListState:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8080/api/data/curriculum/"+this.state.curriculumName).then((function(e){return e.json()})).then((function(t){e.setState({curriculumObject:t})})),fetch("http://localhost:8080/api/data/curriculum/"+this.state.curriculumName+"/tasks").then((function(e){return e.json()})).then((function(t){e.setState({curriculumTaskList:t})}))}},{key:"selectOldTaskListFunction",value:function(){this.setState({selectOldTaskListState:!0})}},{key:"render",value:function(){var e,t,a=this,n=null;if(this.state.selectOldTaskListState)if(e=s.a.createElement(C.a,{className:"loadCurriculumDropDownMenu",value:this.state.openOption,onChange:this.handleChange,options:this.options()}),this.state.openOption){var r=this.getRowsForTask();t=s.a.createElement("div",{className:"selectOldTasksDiv"},s.a.createElement(f.a,{columns:[{key:"taskNumber",name:"Task Number"},{key:"expectations",name:"Expectations in Curriculum"},{key:"taskDesc",name:"Task Description"}],rows:r})),n=s.a.createElement("div",{className:"taskOptionsButtonDiv"},s.a.createElement("button",{className:"taskOptionButton",id:"saveTaskButton",onClick:function(){a.bringToConfirmHomeScreen(a)}},"Save"),s.a.createElement("button",{className:"taskOptionButton",id:"cancelTaskButton",onClick:function(){a.cancelTaskView(a)}},"Cancel")),document.getElementById("selectOldTaskButton").disabled=!0,document.getElementById("createNewTaskButton").disabled=!0}else document.getElementById("selectOldTaskButton").disabled=!1,document.getElementById("createNewTaskButton").disabled=!1;return s.a.createElement("div",{className:"taskListMainScreen"},s.a.createElement("h2",null,"Please select an option for your tasks"),s.a.createElement("h4",null,"Tasks include all tests, quizzes, asignments and evaluations"),s.a.createElement("br",null),s.a.createElement("div",{className:"taskOptionsButtonDiv"},s.a.createElement("button",{className:"taskOptionButton",id:"selectOldTaskButton",onClick:function(){a.selectOldTaskListFunction(a)}},"Select Old Task List"),s.a.createElement("button",{className:"taskOptionButton",id:"createNewTaskButton"},"Create New Task List")),s.a.createElement("br",null),e,s.a.createElement("br",null),t,s.a.createElement("br",null),n)}}]),a}(s.a.Component)),k=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({openOption:e,viewMode:!1})},n.options=function(){var e=[];return n.state.allCurriculums.map((function(t){return e.push({value:t,label:t})})),e},n.viewCurriculum=function(){fetch("http://localhost:8080/api/data/curriculum/"+n.state.openOption.label).then((function(e){return e.json()})).then((function(e){n.setState({curriculumExpectations:e.Curriculums})})),n.setState({viewMode:!0})},n.saveCurriculum=function(){var e=n.state.classDetails;e.curriculum=n.state.openOption.label,n.setState({taskWindow:!0,classDetails:e})},n.state={allCurriculums:null,openOption:null,viewMode:!1,curriculumExpectations:null,taskWindow:!1,classDetails:e.classDetails},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8080/api/data/curriculum").then((function(e){return e.json()})).then((function(t){e.setState({allCurriculums:t})}))}},{key:"render",value:function(){var e,t,a=null;if(this.state.allCurriculums&&(e=s.a.createElement(C.a,{className:"loadCurriculumDropDownMenu",value:this.state.openOption,onChange:this.handleChange,options:this.options()}),this.state.openOption&&(t=s.a.createElement("div",{className:"textBoxDiv",id:"optionDropMenuDiv"},s.a.createElement("button",{className:"textBox oldCurriculumSelectOptionButton",id:"oldCurriculumSaveOption",onClick:this.saveCurriculum},"Save"),s.a.createElement("button",{className:"textBox oldCurriculumSelectOptionButton",id:"oldCurriculumViewOption",onClick:this.viewCurriculum},"View")))),this.state.viewMode){var n=(document.getElementById("optionDropMenuDiv").getBoundingClientRect().bottom+20).toString()+"px",r=[];if(this.state.curriculumExpectations){var l=[];for(var i in this.state.curriculumExpectations)l.push([i,this.state.curriculumExpectations[i]]);l.map((function(e){return r.push({expectation:e[1].CurriculumNumber,description:e[1].Description})}))}a=s.a.createElement("div",{id:"viewOldCurriculumIframe",style:{top:n}},s.a.createElement(f.a,{columns:[{key:"expectation",name:"Expectation"},{key:"description",name:"Description"}],rows:r}))}var o=s.a.createElement("div",{className:"iframeContent"},s.a.createElement("h1",{style:{fontSize:"3vmin"}},"Load Curriculum for: ",this.props.classCode),s.a.createElement("div",{style:{width:"100%",alignContent:"center"}},e),t,a);return this.state.taskWindow&&(o=s.a.createElement(v,{loadOld:!0,currentCurriculum:this.state.openOption.label,changeToConfirm:this.props.changeToConfirm,classDetails:this.state.classDetails})),o}}]),a}(s.a.Component),b=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={classCode:e.classCode,startYear:e.startYear,endYear:e.endYear,semester:e.semester,iframeWindow:0,confirmScreen:!1,classDetails:null},n}return Object(o.a)(a,[{key:"apdateHomeValues",value:function(){var e=document.getElementById("classCodeBox").value;""===e?this.props.changeProps("classCode",null):this.props.changeProps("classCode",e);var t=document.getElementById("startYearBox").value;""===t?this.props.changeProps("startYear",null):this.props.changeProps("startYear",t);var a=document.getElementById("endYearBox").value;""===a?this.props.changeProps("endYear",null):this.props.changeProps("endYear",a);var n=document.getElementById("semesterBox").value;""===n?this.props.changeProps("semester",null):this.props.changeProps("semester",n)}},{key:"render",value:function(){var e,t,a,n=this,r=null;this.state.classCode&&(e=this.state.classCode,this.setState({classCode:null})),this.state.startYear&&(t=this.state.startYear,this.setState({startYear:null})),this.state.endYear&&(a=this.state.endYear,this.setState({endYear:null})),this.state.semester&&(r=this.state.semester,this.setState({semester:null}));var l=null,i=s.a.createElement("h4",null,"Please select a curriculum option:");this.state.confirmScreen?(i=s.a.createElement("div",null,s.a.createElement("h2",null,"Curriculum Selected: ",this.state.classDetails.curriculum),s.a.createElement("h2",null,"Task List Selected: ",this.state.classDetails.taskList)),l=s.a.createElement("div",{className:"buttonDiv",id:"curriculumButtonDiv"},s.a.createElement("br",null),s.a.createElement("button",{className:"textBox curriculumButton",id:"saveClassSettings",onClick:function(){n.saveConfirm(n)}},"Save"),s.a.createElement("button",{className:"textBox curriculumButton",id:"cancelClassSettings",onClick:function(){n.cancelConfirm(n)}},"Cancel"))):l=s.a.createElement("div",{className:"buttonDiv",id:"curriculumButtonDiv"},s.a.createElement("button",{className:"textBox curriculumButton",id:"CreateCurriculumButton",onClick:function(){return n.CreateCurriculum()}},"Create Curriculum"),s.a.createElement("button",{className:"textBox curriculumButton",id:"OldCurriculumButton",onClick:function(){return n.LoadOldCurriculum()}},"Use Old Curriculum"));var o=s.a.createElement("div",{className:"iframeContent"},s.a.createElement("h1",null,"Create Class"),s.a.createElement("h4",null,"Please enter class code in the following format:"),s.a.createElement("div",{className:"textBoxDiv",id:"classCodeDiv"},s.a.createElement("input",{type:"text",className:"textBox",id:"classCodeBox",placeholder:"ICS4U-01",value:e,onChange:function(){return n.apdateHomeValues()}})),s.a.createElement("br",null),s.a.createElement("h4",null,"Please enter school year in the designated textboxes:"),s.a.createElement("div",{className:"textBoxDiv",id:"yearDateDiv"},s.a.createElement("input",{type:"text",className:"textBox yearDateTextBox",id:"startYearBox",placeholder:"Start Year (2019)",value:t,onChange:function(){return n.apdateHomeValues()}}),s.a.createElement("input",{type:"text",className:"textBox yearDateTextBox",id:"endYearBox",placeholder:"End Year (2020)",value:a,onChange:function(){return n.apdateHomeValues()}}),s.a.createElement("input",{type:"text",className:"textBox yearDateTextBox",id:"semesterBox",placeholder:"Semester (1 or 2)",value:r,onChange:function(){return n.apdateHomeValues()}})),s.a.createElement("br",null),s.a.createElement("br",null),i,l),u={code:this.props.classCode,start:this.props.startYear,end:this.props.endYear,semester:this.props.semester},c=s.a.createElement(p,{classCode:this.props.classCode?this.props.classCode:"Class Code Not Given",changeToConfirm:this.changeToConfirm.bind(this),classDetails:u}),m=s.a.createElement("div",{className:"iframeContent"},s.a.createElement(k,{classCode:this.props.classCode?this.props.classCode:"Class Code Not Given",changeToConfirm:this.changeToConfirm.bind(this),classDetails:u})),d=o;return 1===this.state.iframeWindow?d=c:2===this.state.iframeWindow&&(d=m),d}},{key:"CreateCurriculum",value:function(){this.setState({iframeWindow:1})}},{key:"LoadOldCurriculum",value:function(){this.setState({iframeWindow:2})}},{key:"changeToConfirm",value:function(e){this.setState({iframeWindow:0,confirmScreen:!0,classDetails:e,classCode:e.code,startYear:e.start,endYear:e.end,semester:e.semester})}},{key:"cancelConfirm",value:function(){this.setState({confirmScreen:!1})}},{key:"saveConfirm",value:function(){alert("SAVE NOT IMPLEMENTED YET")}}]),a}(s.a.Component),E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Current Classes"),s.a.createElement("h2",null,"Feature not yet installed"))}}]),a}(s.a.Component),g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Past Classes"),s.a.createElement("h2",null,"Feature not yet installed"))}}]),a}(s.a.Component),B=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={iframeButtonControl:null,createClass_ClassCode:null,createClass_startYear:null,createClass_endYear:null,createClass_semester:null,createClass_curriculum:null,createClass_taskList:null,home:Object(u.a)(n)},n}return Object(o.a)(a,[{key:"buttonClicked",value:function(e){var t=this,a=document.body.getElementsByClassName("homeButton"),n=window.innerWidth/10,s=setInterval((function(){for(var e=document.body.getElementsByClassName("mainIframe")[0],r=0;r<a.length;r++){var l=a[r];l.getBoundingClientRect().x<n?clearInterval(s):l.style.left=(l.getBoundingClientRect().x-3).toString()+"px";var i=t.getAlpha(getComputedStyle(document.body.getElementsByClassName("mainIframe")[0]).backgroundColor);i<1&&(e.style.backgroundColor="rgba(245,245,245,"+(parseFloat(i)+.005).toString()+")",e.style.color="rgba(0,0,0,"+(parseFloat(i)+.005).toString()+")")}}),5);this.loadIframe(e)}},{key:"changeProps",value:function(e,t){"classCode"===e?this.setState({createClass_ClassCode:t}):"startYear"===e?this.setState({createClass_startYear:t}):"endYear"===e?this.setState({createClass_endYear:t}):"semester"===e&&this.setState({createClass_semester:t})}},{key:"getAlpha",value:function(e){for(var t=null,a=null,n=null,s=0;s<e.length;s++)if(","===e.substring(s,s+1))if(null===t)t=s;else{if(null!==a){n=s;break}a=s}if(null===n)return 1;for(var r=null,l=n;l<e.length;l++)if(")"===e.substring(l,l+1)){r=e.substring(n+2,l);break}return parseFloat(r)}},{key:"loadIframe",value:function(e){this.setState({iframeButtonControl:e})}},{key:"render",value:function(){var e,t=this,a=0===this.state.iframeButtonControl?"homeButton boldButton":"homeButton unboldenButton",n=1===this.state.iframeButtonControl?"homeButton boldButton":"homeButton unboldenButton",r=2===this.state.iframeButtonControl?"homeButton boldButton":"homeButton unboldenButton";return 0===this.state.iframeButtonControl?e=s.a.createElement(E,null):1===this.state.iframeButtonControl?e=s.a.createElement(b,{classCode:this.state.createClass_ClassCode,startYear:this.state.createClass_startYear,endYear:this.state.createClass_endYear,semester:this.state.createClass_semester,changeProps:this.changeProps.bind(this)}):2===this.state.iframeButtonControl&&(e=s.a.createElement(g,null)),s.a.createElement("div",null,s.a.createElement("div",{className:"mainIframe"},e),s.a.createElement("input",{type:"button",className:a,value:"Current Classes",style:{top:(window.innerHeight/4-window.innerHeight/20).toString()+"px"},onClick:function(){return t.buttonClicked(0)}}),s.a.createElement("input",{type:"button",className:n,value:"Create Class",style:{top:(window.innerHeight/2-window.innerHeight/20).toString()+"px"},onClick:function(){return t.buttonClicked(1)}}),s.a.createElement("input",{type:"button",className:r,value:"Past Classes",style:{top:(3*window.innerHeight/4-window.innerHeight/20).toString()+"px"},onClick:function(){return t.buttonClicked(2)}}))}}]),a}(s.a.Component);var O=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){}},[[25,1,2]]]);
//# sourceMappingURL=main.299af7c8.chunk.js.map