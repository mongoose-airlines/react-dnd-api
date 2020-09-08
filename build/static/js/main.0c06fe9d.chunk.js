(this["webpackJsonpreact-dnd-api"]=this["webpackJsonpreact-dnd-api"]||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),s=(a(29),a(1)),o=(a(30),a(3)),i=a.n(o),u=a(10),m=a(4),h=a(5),p=a(7),f=a(6),d="https://www.dnd5eapi.co/api";function E(e){return fetch("".concat(d,"/spells/?name=").concat(e.query)).then((function(e){return e.json()}))}var v=a(12),y=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={results:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/classes")).then((function(e){return e.json()}));case 2:t=e.sent,this.setState({results:t.results}),console.log(this.state.results);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"DERP, I'M THE CLASS DATA COMPONENT"),r.a.createElement("div",{className:"icon-container"},this.state.results.map((function(e){return r.a.createElement(v.b,{to:{pathname:"/class/".concat(e.index),state:{classTitle:e}}},r.a.createElement("div",{id:"classDiv",key:e.index},r.a.createElement("img",{style:{width:"100px",height:"100px"},src:"/images/".concat(e.name,".svg"),alt:""}),e.name))}))))}}]),a}(n.Component),g=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={classTitle:e.props.location.state.classTitle.index,classDetails:{}},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a=this.props.location.state.classTitle.index,fetch("".concat(d,"/classes/").concat(a)).then((function(e){return e.json()}));case 2:t=e.sent,this.setState({classDetails:t});case 4:case"end":return e.stop()}var a}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.classDetails;return r.a.createElement("div",null,e.name?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"http://theoldreader.com/kittens/320/240/",alt:""}),r.a.createElement("h2",null,e.name),r.a.createElement("div",null,"Hit die: d",e.hit_die),r.a.createElement("h3",null,"Proficiencies:"),e.proficiencies.map((function(e){return r.a.createElement("div",{key:e.index},e.name)}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Loading class details...")))}}]),a}(n.Component),b=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={monsterList:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/monsters")).then((function(e){return e.json()}));case 2:t=e.sent,this.setState({monsterList:t.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Monster List (OMG SCARY)"),this.state.monsterList.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.b,{key:e.index,to:{pathname:"monster/".concat(e.index),state:{monster:e}}},e.name),r.a.createElement("br",null))})))}}]),a}(n.Component),j=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:e.props.location.state.monster.index,monsterDetails:{}},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a=this.state.name,fetch("".concat(d,"/monsters/").concat(a)).then((function(e){return e.json()}));case 2:t=e.sent,console.log(t),this.setState({monsterDetails:t}),console.log(this.props.location);case 6:case"end":return e.stop()}var a}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.monsterDetails;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Monster Deets"),r.a.createElement("img",{src:"http://theoldreader.com/kittens/320/240/",alt:""}),r.a.createElement("h2",null,e.name),r.a.createElement("h4",null,"Size: ",e.size),r.a.createElement("h4",null,"Type: ",e.type),r.a.createElement("h4",null,"AC: ",e.armor_class),r.a.createElement("h4",null,"Actions:"),e.actions?r.a.createElement(r.a.Fragment,null,e.actions.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("h4",null,e.name),r.a.createElement("h5",null,e.desc))}))):r.a.createElement("p",null,"This poor monster has no actions. Womp womp."))}}]),a}(n.Component),O=a(15),x=a(19),w=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={formData:{query:""}},e.formRef=r.a.createRef(),e.handleSubmit=function(t){t.preventDefault(),e.props.handleSpellSearch(e.state.formData)},e.handleChange=function(t){var a=Object(x.a)(Object(x.a)({},e.state.formData),{},Object(O.a)({},t.target.name,t.target.value));e.setState({formData:a})},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{ref:this.formRef,onSubmit:this.handleSubmit},r.a.createElement("input",{name:"query",type:"text",value:this.state.formData.query,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Search")))}}]),a}(n.Component),k=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.b,{to:{pathname:"/spell/".concat(e.spell.index)}},r.a.createElement("h2",null,e.spell.name)))},S=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={spells:[]},e.handleSpellSearch=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(a);case 2:n=t.sent,console.log(n.results),e.setState({spells:n.results});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Such Spellz"),r.a.createElement(w,{handleSpellSearch:this.handleSpellSearch}),this.state.spells.length?r.a.createElement(r.a.Fragment,null,this.state.spells.map((function(e){return r.a.createElement(k,{key:e.index,spell:e})}))):r.a.createElement("h3",null,"Please search for a spell!"))}}]),a}(n.Component),D=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={spellDetails:{}},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a=this.props.match.params.name,fetch("".concat(d,"/spells/").concat(a)).then((function(e){return e.json()}));case 2:t=e.sent,console.log(t),this.setState({spellDetails:t}),console.log(this.state.spellDetails);case 6:case"end":return e.stop()}var a}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.spellDetails;return r.a.createElement(r.a.Fragment,null,e.name?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,e.name),r.a.createElement("img",{src:"http://theoldreader.com/kittens/320/240/",alt:""}),r.a.createElement("p",null,e.desc[0]),r.a.createElement("h2",null,"Spell Player Classes"),e.classes.length?r.a.createElement(r.a.Fragment,null,e.classes.map((function(e){return r.a.createElement("div",{key:e.index},r.a.createElement("p",null,e.name))}))):r.a.createElement("p",null,"No player classes may use this spell")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Loading spell details...")))}}]),a}(n.Component),C=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:"/logo.svg",style:{width:"100px",height:"100px"},className:"App-logo",alt:"logo"}),r.a.createElement("a",{href:"/classlist"},"Class List, Bitches"),r.a.createElement("a",{href:"/monsterlist"},"Scary Monsters HURR"),r.a.createElement("a",{href:"/spellSearch"},"Search for Spellz"))};var A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(s.a,{exact:!0,path:"/classlist",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(s.a,{exact:!0,path:"/monsterlist",render:function(){return r.a.createElement(b,null)}}),r.a.createElement(s.a,{exact:!0,path:"/monster/:name",render:function(e){var t=e.location;return r.a.createElement(j,{location:t})}}),r.a.createElement(s.a,{exact:!0,path:"/spell/:name",render:function(e){var t=e.location,a=e.match;return r.a.createElement(D,{location:t,match:a})}}),r.a.createElement(s.a,{exact:!0,path:"/class/:name",render:function(e){var t=e.location;return r.a.createElement(g,{location:t})}}),r.a.createElement(s.a,{exact:!0,path:"/spellsearch",render:function(){return r.a.createElement(S,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v.a,null,r.a.createElement(s.a,{render:function(e){var t=e.history;return r.a.createElement(A,{history:t})}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.0c06fe9d.chunk.js.map