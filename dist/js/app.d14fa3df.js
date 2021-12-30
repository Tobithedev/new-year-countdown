(function(t){function e(e){for(var i,r,a=e[0],u=e[1],c=e[2],l=0,h=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},s=[];function r(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e0afb2a2"}[t]+".js"}function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=o[t]=[e,i]}));e.push(n[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=r(t);var c=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",c.name="ChunkLoadError",c.type=i,c.request=s,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"Dext",(function(){return a})),n.d(i,"Link",(function(){return u}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),s=n("5530"),r=(n("ac1f"),n("5319"),n("6c02")),a=Object(o["g"])({name:"Dext",setup:function(){return function(){return Object(o["i"])(r["b"])}}}),u=Object(o["g"])({name:"Link",setup:function(t,e){var n=e.slots;return function(){return Object(o["i"])(r["a"],Object(s["a"])({to:t.to,replace:t.replace},t),n.default)}}}),c={class:"pb-20 text-3xl space-x-4 text-gray-800 underline relative top-0"},l=Object(o["e"])("Home"),d=Object(o["e"])("About"),h={setup:function(t){return function(t,e){return Object(o["o"])(),Object(o["c"])("div",c,[Object(o["f"])(Object(o["v"])(i).Link,{to:"/"},{default:Object(o["x"])((function(){return[l]})),_:1}),Object(o["f"])(Object(o["v"])(i).Link,{to:"/about"},{default:Object(o["x"])((function(){return[d]})),_:1})])}}};const f=h;var p=f,b={class:"text-center"},m={class:""},v={setup:function(t){return function(t,e){return Object(o["o"])(),Object(o["c"])("div",b,[Object(o["f"])(p),Object(o["d"])("div",m,[Object(o["f"])(Object(o["v"])(a))])])}}};n("ee63");const y=v;var j=y,O=(n("d3b7"),n("3ca3"),n("ddb0"),{class:"text-gray-500"}),g=Object(o["d"])("h1",{class:"text-8xl font-bold mb-5 bg-gradient-to-t bg-clip-text text-transparent from-red-400 to-yellow-500"}," New Year CountDown ",-1),M={class:"text-3xl"};function w(t,e,n,i,s,r){var a=Object(o["s"])("Counter");return Object(o["o"])(),Object(o["c"])("div",O,[g,Object(o["f"])(a,{time:s.time,interval:100},{default:Object(o["x"])((function(t){var e=t.days,n=t.hours,i=t.minutes,s=t.seconds;return[Object(o["d"])("p",M,Object(o["u"])(e)+" days, "+Object(o["u"])(n)+" hours, "+Object(o["u"])(i)+" minutes, "+Object(o["u"])(s)+" seconds. ",1)]})),_:1},8,["time"])])}n("a9e3");var x=1e3,S=60*x,D=60*S,k=24*D,E="abort",H="end",P="progress",_="start",q="visibilitychange",A=Object(o["g"])({name:"CountDown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:function(t){return t>=0}},now:{type:Function,default:function(){return Date.now()}},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:function(t){return t>=0}},transform:{type:Function,default:function(t){return t}}},emits:[E,H,P,_],data:function(){return{counting:!1,endTime:0,totalMilliseconds:0,requestid:0}},computed:{days:function(){return Math.floor(this.totalMilliseconds/k)},hours:function(){return Math.floor(this.totalMilliseconds%k/D)},minutes:function(){return Math.floor(this.totalMilliseconds%D/S)},seconds:function(){return Math.floor(this.totalMilliseconds%S/x)},milliseconds:function(){return Math.floor(this.totalMilliseconds%x)},totalDays:function(){return this.days},totalHours:function(){return Math.floor(this.totalMilliseconds/D)},totalMinutes:function(){return Math.floor(this.totalMilliseconds/S)},totalSeconds:function(){return Math.floor(this.totalMilliseconds/x)}},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted:function(){var t=this;0===this.days&&alert("Happy New Year"),setInterval((function(){t.update(),t.continue()}),1e3)},beforeUnmount:function(){document.removeEventListener(q,this.handleVisible),this.pause()},methods:{start:function(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit(_),"visible"===document.visibilityState&&this.continue())},continue:function(){var t=this;if(!this.counting){var e=Math.min(this.totalMilliseconds,this.interval);if(e>0){var n,i,o=function o(s){n||(n=s),i||(i=s);var r=s-n;r>=e||r+(s-i)/2>=e?t.progress():t.requestid=requestAnimationFrame(o),i=s};this.requestid=requestAnimationFrame(o)}else this.end()}},pause:function(){cancelAnimationFrame(this.requestid)},progress:function(){this.counting||(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit(P,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort:function(){this.counting||(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(E))},end:function(){this.counting||(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(H))},update:function(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisible:function(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break;default:}}},render:function(){return Object(o["i"])(this.tag,this.$slots.default?this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds})):void 0)}}),L={data:function(){var t=new Date,e=new Date(t.getFullYear()+1,0,1),n=e-t;return{time:n}},components:{Counter:A}},T=n("d959"),$=n.n(T);const C=$()(L,[["render",w]]);var F=C,N=[{path:"/",name:"Home",component:F,meta:{title:"Home"}},{path:"/about",name:"About",meta:{title:"About"},component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Y=Object(r["c"])({history:Object(r["d"])(),routes:N}),B=Y,J=(n("def6"),Object(o["b"])(j));J.use(B),J.mount("#app")},8922:function(t,e,n){},def6:function(t,e,n){},ee63:function(t,e,n){"use strict";n("8922")}});
//# sourceMappingURL=app.d14fa3df.js.map