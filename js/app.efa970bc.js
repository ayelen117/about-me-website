(function(e){function t(t){for(var n,i,s=t[0],l=t[1],c=t[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3b17fd52"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var c=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/about-me-website/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"9c0c":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-container",{attrs:{fluid:""}},[a("router-view")],1)],1)},o=[],i=a("1157"),s=a.n(i),l=s.a,c={};l(document).ready((function(){document.addEventListener("touchstart",(function(){}),!0);var e=document.getElementById("navbar"),t=e.offsetTop;function a(){window.pageYOffset>t?e.classList.add("sticky"):e.classList.remove("sticky")}window.onscroll=function(){a()}}));var u=c,d=(a("5c0b"),a("2877")),f=Object(d["a"])(u,r,o,!1,null,null,null),p=f.exports,m=a("9483");Object(m["a"])("".concat("/about-me-website/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7");var g=a("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Main"),a("Navbar"),a("About"),a("Portfolio"),a("Footer")],1)},v=[],h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row",attrs:{id:"main"}},[a("div",{staticClass:"col align-self-center"},[a("h1",{staticClass:"title"},[e._v(" Hi! I am "),a("span",{staticClass:"font-weight-bold secondary-color name"},[a("br",{staticClass:"mobile-only-br"}),e._v("Ayelen Guerra ")]),a("br"),e._v("I'm software engineer ")])])])}],w={name:"Main",mounted:function(){var e=this;this.$nextTick((function(){e.initParticlesJS()}))},methods:{initParticlesJS:function(){window.particlesJS("main",{particles:{number:{value:150,density:{enable:!0,value_area:1250}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:6},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:125,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:5,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:150,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},(function(){console.log("callback - particles.js config loaded")}))}}},_=w,C=Object(d["a"])(_,h,y,!1,null,"1648b3ce",null),k=C.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row",attrs:{id:"navbar"}},[a("b-nav",[a("b-nav-item",{attrs:{href:"#main",active:""}},[e._v("Home")]),a("b-nav-item",{attrs:{href:"#about"}},[e._v("About")]),a("b-nav-item",{attrs:{href:"#portfolio"}},[e._v("Portfolio")]),a("b-nav-item",{attrs:{href:"#footer"}},[e._v("Contact")])],1)],1)},S=[],j={name:"Navbar"},L=j,x=Object(d["a"])(L,P,S,!1,null,"4d84bacb",null),A=x.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row section",attrs:{id:"about"}},[a("div",{staticClass:"container flex"},[a("h1",{staticClass:"title text-uppercase"},[e._v("About me")]),a("div",{staticClass:"row main"},[a("Summary"),a("Languages")],1),a("div",{staticClass:"row",attrs:{id:"skills"}},e._l(e.skills,(function(e){return a("Skill",{key:e.subtitle,attrs:{subtitle:e.subtitle,body:e.body,icon:e.icon}})})),1)])])},E=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md skill"},[a("div",{staticClass:"shape-wrap"},[a("div",{staticClass:"shape"},[a("font-awesome-icon",{attrs:{icon:e.icon}})],1)]),a("div",{staticClass:"text"},[a("h3",{staticClass:"subtitle bold"},[e._v(e._s(e.subtitle))]),a("p",{staticClass:"body"},[e._v(e._s(e.body))])])])},H=[],T={name:"Skill",props:{subtitle:String,body:String,icon:String}},I=T,J=Object(d["a"])(I,O,H,!1,null,"2696105f",null),F=J.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md",attrs:{id:"summary"}},[a("div",{staticClass:"row image"},[a("div",{staticClass:"col"},[a("img",{staticClass:"img-fluid mx-auto d-block",attrs:{src:e.imgPath,alt:"Ayelen Guerra"}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"text"},[a("h3",{staticClass:"subtitle bold"},[e._v(e._s(e.subtitle))]),a("p",{staticClass:"body",domProps:{innerHTML:e._s(e.body)}})])])])},z=[],N={name:"Summary",props:{},data:function(){return{imgPath:"/img/profile.png",subtitle:"A bit about me",body:"Argentine software engineer. I am passionate about software, hiking and photography. Throughout my career, I have been organizing various software-related events, such as hackathons (including <a href='http://hackatec.github.io/'>Hackatec</a>) and different versions of Startup Weekend. I like to get out of my comfort zone and face challenges. I love to travel and know different cultures. Currently I'm working remotely on software projects and leading the development team on  <a href='https://openventi.org/'>OpenVenti</a>, an open-source project focus on creating low-cost artificial respirators."}}},B=N,Q=Object(d["a"])(B,$,z,!1,null,"3363cffc",null),D=Q.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md",attrs:{id:"languages"}},e._l(e.languages,(function(t){return a("div",{key:t.name,staticClass:"language"},[a("div",{staticClass:"name"},[a("span",[e._v(e._s(t.name))])]),a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar",style:"width: "+t.progress+"%;",attrs:{role:"progressbar","aria-valuenow":t.progress,"aria-valuemin":"0","aria-valuemax":"100"}},[e._v(" "+e._s(t.label)+" ")])])])})),0)},W=[],Y={name:"Languages",props:{},data:function(){return{languages:[{name:"PHP",progress:85,label:"Advanced"},{name:"VueJs",progress:80,label:"Advanced"},{name:"MySQL",progress:80,label:"Advanced"},{name:"MongoDB",progress:80,label:"Advanced"},{name:"C#",progress:70,label:"Intermediate"},{name:"Javascript",progress:65,label:"Intermediate"},{name:"NodeJs",progress:60,label:"Intermediate"}]}}},G=Y,R=Object(d["a"])(G,V,W,!1,null,"247d1024",null),q=R.exports,K={name:"About",components:{Skill:F,Summary:D,Languages:q},data:function(){return{skills:[{subtitle:"Problem solver",body:"My job is not only to code, is to face challenges and analyse how to solve them as optimal as possible.",icon:"puzzle-piece"},{subtitle:"Teamworker",body:"Collaboration, coordination and good communication are factors that I consider essential when I  work in a team..",icon:"users"},{subtitle:"Clean coder",body:"I am always focused on create clean code that allow making the project understandable and scalable.",icon:"broom"}]}}},U=K,X=Object(d["a"])(U,M,E,!1,null,"7561b8cc",null),Z=X.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",{staticClass:"section",attrs:{id:"portfolio"}},[a("div",{staticClass:"container flex"},[a("h1",{staticClass:"title text-uppercase"},[e._v("Portfolio")]),a("div",{staticClass:"title-container"},[a("div",{staticClass:"filters d-flex justify-content-center row"},e._l(e.filters,(function(t){return a("div",{key:t,staticClass:"filter col",class:{active:e.currentFilter===t},on:{click:function(a){return e.setFilter(t)}}},[e._v(e._s(t))])})),0)]),a("transition-group",{staticClass:"projects",attrs:{name:"projects"}},e._l(e.filteredList,(function(t){return a("div",{key:t.title,staticClass:"project",style:{"background-image":"url("+e.imgPath+t.image+")"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"body"},[a("h4",{staticClass:"subtitle"},[a("strong",[e._v(e._s(t.title))])]),a("div",{staticClass:"languages"},e._l(t.languages,(function(t){return a("span",{key:t,staticClass:"badge badge-pill badge-light"},[e._v(e._s(t))])})),0),a("a",{staticClass:"btn",attrs:{target:"_blank",href:t.url}},[e._v("Enter")])])])])})),0)],1)])},te=[],ae=(a("4de4"),a("caad"),a("2532"),{name:"Portfolio",data:function(){return{imgPath:"/about-me-website/img/portfolio/",filters:["ALL","PHP","C#","ElectronJS","VueJS","HTML5","CSS","Wordpress"],currentFilter:"ALL",projects:[{title:"Multinexo",image:"multinexo.png",languages:["PHP","Laravel","MySQL"],url:"https://multinexo.com/"},{title:"Saldo",image:"saldo.png",languages:["Javascript","HTML5","CSS","PHP"],url:"https://saldo.com.ar/"},{title:"Health Care For You Car",image:"HealthCareForYourCar.png",languages:["Wordpress","Javascript","HTML5","CSS"],url:"https://healthcareforyourcar.com"},{title:"Prestonwood Media Volunteers",image:"prestonwood.png",languages:["PHP","Laravel","MySQL","VueJS","Typescript","AWS","MongoDB"],url:"#"},{title:"AARP",image:"hc4yc.png",languages:["PHP","Laravel","MySQL"],url:"https://aarp.livetech.events"},{title:"AARP Smart Driver TEK ",image:"smart-drivertek.png",languages:["ElectronJS","Javascript","HTML5","CSS"],url:"#"},{title:"Bitmovil",image:"bitmovil.png",languages:["Javascript","HTML5","CSS"],url:"http://www.bitmovil.cl/"},{title:"Control documentario",image:"control-documentario.png",languages:["C#","Microsoft SQL Server"],url:"https://controldocumentario.com"},{title:"PHP library for AFIP Web Services (Argentina)",image:"php-afip-ws.jpg",languages:["PHP"],url:"https://github.com/multinexo/php-afip-ws/graphs/contributors"},{title:"Drivers for invoice/tickets fiscal printers",image:"pyfiscalprinter.jpg",languages:["Python"],url:"https://github.com/multinexo/pyfiscalprinter"},{title:"MongoDB vs. MySQL",image:"tesis.png",languages:["PHP","MySQL","MongoDB"],url:"https://github.com/ayelen117/mysql_vs_mongodb"}],filteredProjects:[]}},methods:{setFilter:function(e){this.currentFilter=e}},computed:{filteredList:function(){var e=this;return"ALL"==this.currentFilter?this.projects:this.projects.filter((function(t){return t.languages.includes(e.currentFilter)}))}}}),ne=ae,re=Object(d["a"])(ne,ee,te,!1,null,"30817522",null),oe=re.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",{staticClass:"section",attrs:{id:"footer"}},[a("div",{staticClass:"container flex"},[a("div",{staticClass:"row socials"},e._l(e.socials,(function(e){return a("div",{key:e.name,staticClass:"col social"},[a("div",{staticClass:"shape"},[a("a",{attrs:{href:e.link}},[a("font-awesome-icon",{attrs:{icon:e.icon}})],1)])])})),0),a("div",{staticClass:"row"},[a("div",{staticClass:"col copyright"},[e._v(" AYELEN GUERRA "),a("span",{staticClass:"bold"},[e._v("©2020")])])])])])},se=[],le={name:"Footer",data:function(){return{socials:[{name:"LinkedIn",link:"https://www.linkedin.com/in/ayelen-guerra/",icon:["fab","linkedin-in"]},{name:"Hackerrank",link:"https://www.hackerrank.com/ayelen_guerra117",icon:["fab","hackerrank"]},{name:"Github",link:"https://github.com/ayelen117",icon:["fab","github"]},{name:"Twitter",link:"https://twitter.com/ayelen_guerra",icon:["fab","twitter"]},{name:"Instagram",link:"https://www.instagram.com/ayelen_guerra/",icon:["fab","instagram"]},{name:"Email",link:"mailto:ayelen.guerra117@gmail.com",icon:["fas","envelope"]}]}}},ce=le,ue=Object(d["a"])(ce,ie,se,!1,null,"0d4f02d6",null),de=ue.exports,fe={name:"Home",components:{Main:k,Navbar:A,About:Z,Portfolio:oe,Footer:de}},pe=fe,me=Object(d["a"])(pe,b,v,!1,null,null,null),ge=me.exports;n["default"].use(g["a"]);var be=[{path:"/",name:"Home",component:ge},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],ve=new g["a"]({mode:"history",base:"/about-me-website/",routes:be}),he=ve,ye=a("2f62");n["default"].use(ye["a"]);var we=new ye["a"].Store({state:{},mutations:{},actions:{},modules:{}}),_e=a("5f5b"),Ce=a("b1e0"),ke=(a("f9e3"),a("2dd8"),a("ecee")),Pe=a("c074"),Se=a("ad3d"),je=a("f2d1");ke["c"].add(je["b"]),ke["c"].add(je["a"]),ke["c"].add(Pe["a"]),n["default"].component("font-awesome-icon",Se["a"]),n["default"].config.productionTip=!1,n["default"].use(_e["a"]),n["default"].use(Ce["a"]),new n["default"]({router:he,store:we,render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.efa970bc.js.map