(function(e){function t(t){for(var o,a,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"mario-chat"}},[n("div",{attrs:{id:"chat-window"}},[n("div",{attrs:{id:"feedback"}},[""!=this.personTyping?n("p",[n("em",[e._v(e._s(this.personTyping)+" is typing a message")])]):e._e()]),n("div",{attrs:{id:"output"}},[n("ul",e._l(e.messageObj,(function(t){return n("li",{key:t.id},[n("div",[n("p",[n("strong",[e._v(e._s(t.handle)+" : ")]),e._v(e._s(t.message))])])])})),0)])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.handle,expression:"handle"}],attrs:{type:"text",placeholder:"Handle"},domProps:{value:e.handle},on:{input:function(t){t.target.composing||(e.handle=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text",placeholder:"Message"},domProps:{value:e.message},on:{keypress:e.broadcast,input:function(t){t.target.composing||(e.message=t.target.value)}}}),n("button",{on:{click:e.send}},[e._v("SEND")])])])},s=[],a=n("8e27"),i=n.n(a),u={name:"App",components:{},data:function(){return{handle:"",message:"",socket:null,messageObj:[],personTyping:""}},methods:{send:function(){this.socket.emit("chat",{message:this.message,handle:this.handle})},broadcast:function(){this.socket.emit("typing",{handle:this.handle})}},created:function(){this.socket=i.a.connect("http://localhost:3500")},mounted:function(){var e=this;this.socket.on("chat",(function(t){e.personTyping="",e.messageObj.push(t)})),this.socket.on("typing",(function(t){e.personTyping=t.handle,setTimeout((function(){e.personTyping=""}),1e3)}))}},c=u,p=(n("034f"),n("2877")),l=Object(p["a"])(c,r,s,!1,null,null,null),d=l.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.7141d396.js.map