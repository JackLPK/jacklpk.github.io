(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(6717)}])},6717:function(i,c,a){"use strict";a.r(c),a.d(c,{default:function(){return aP}});var j,k,l,m,n,b=a(5893),d=a(9008),o=a.n(d),e=a(7294),f=a.t(e,2);function p(){return(p=Object.assign?Object.assign.bind():function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}var q=function(a){return e.createElement("svg",p({viewBox:"0 0 92.869 92.869",xmlns:"http://www.w3.org/2000/svg"},a),j||(j=e.createElement("path",{d:"M0 0v18.785h18.521v18.256H0v37.306h18.521v18.521h18.785V74.347h18.256v18.521h18.785V74.347h18.521V37.041H74.347V18.785h18.521V0H55.562v18.521H37.306V0H0m55.562 37.306v18.256H37.306V37.306h18.256M37.041 55.827v18.256H18.785V55.827h18.256m37.042 0v18.256H55.827V55.827z",fill:"#d16baf"})))};function r(){var a=(0,b.jsxs)("div",{className:"aboutme__body",children:[(0,b.jsxs)("p",{children:["I am a Computer Science student from University of Nottingham. I love"," ",(0,b.jsx)("strong",{children:"learning"})," new tech, ",(0,b.jsx)("strong",{children:"building"})," projects, and ",(0,b.jsx)("strong",{children:"sharing"})," my experience."]}),(0,b.jsx)("p",{children:"I have experience in full stack web development, Python, JavaScript, R, Java, Linux..."})]});return(0,b.jsxs)("section",{className:"aboutme",children:[(0,b.jsx)(q,{className:"aboutme__img"}),(0,b.jsxs)("div",{className:"aboutme__right",children:[(0,b.jsx)("h1",{className:"aboutme__title",children:"Hi, I'm Jack"}),a]})]})}var s=Object.defineProperty,t=Object.defineProperties,u=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,y=(a,b,c)=>b in a?s(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,z=(c,a)=>{for(var b in a||(a={}))w.call(a,b)&&y(c,b,a[b]);if(v)for(var b of v(a))x.call(a,b)&&y(c,b,a[b]);return c},A=(a,b)=>t(a,u(b)),B=(b,d)=>{var c={};for(var a in b)w.call(b,a)&&0>d.indexOf(a)&&(c[a]=b[a]);if(null!=b&&v)for(var a of v(b))0>d.indexOf(a)&&x.call(b,a)&&(c[a]=b[a]);return c},C=a=>Array.isArray(a),D=a=>C(a)?a:[a];let E=function(b){let a=function(a){return D(a).forEach(a=>{var b;return e.set(Symbol(null==(b=a.char)?void 0:b.innerText),c(z({},a)))}),this},c=a=>(a.shouldPauseCursor=function(){return Boolean(this.typeable||this.cursorable||this.deletable)},a),d=()=>Array.from(e.values()),e=new Map;return a(b),{add:a,set:function(a,b){let d=[...e.keys()];e.set(d[a],c(b))},wipe:function(){e=new Map,a(b)},reset:function(){e.forEach(a=>delete a.done)},destroy:a=>e.delete(a),done:(a,b=!1)=>b?e.delete(a):e.get(a).done=!0,getItems:(a=!1)=>a?d():d().filter(a=>!a.done),getQueue:()=>e,getTypeable:()=>d().filter(a=>a.typeable)}};var F=a=>Array.from(a),G=a=>document.createTextNode(a);let H=a=>([...a.childNodes].forEach(a=>{if(a.nodeValue){[...a.nodeValue].forEach(b=>{a.parentNode.insertBefore(G(b),a)}),a.remove();return}H(a)}),a);var I=b=>{let a=document.implementation.createHTMLDocument();return a.body.innerHTML=b,H(a.body)};let g="data-typeit-id",J="ti-cursor",K={started:!1,completed:!1,frozen:!1,destroyed:!1},L={breakLines:!0,cursor:!0,cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString(){},afterString(){},beforeStep(){},afterStep(){},afterComplete(){}},M=`[${g}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;function N(c,d=!1,f=!1){let g=c.querySelector(`.${J}`),e=document.createTreeWalker(c,NodeFilter.SHOW_ALL,{acceptNode(a){var b,c;if(g&&f){if(null==(b=a.classList)?void 0:b.contains(J))return NodeFilter.FILTER_ACCEPT;if(g.contains(a))return NodeFilter.FILTER_REJECT}return(null==(c=a.classList)?void 0:c.contains(J))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),a,b=[];for(;a=e.nextNode();)a.originalParent||(a.originalParent=a.parentNode),b.push(a);return d?b.reverse():b}var O=a=>document.createElement(a),P=(b,c="")=>{let a=O("style");a.id=c,a.appendChild(G(b)),document.head.appendChild(a)},Q=a=>(C(a)||(a=[a/2,a/2]),a),R=(a,b)=>Math.abs(Math.random()*(a+b-(a-b))+(a-b));let S=a=>a/2;var T=a=>(a.forEach(clearTimeout),[]),U=()=>Math.random().toString().substring(2,9),V=a=>"value"in a;let W=a=>V(a)?F(a.value):N(a,!0).filter(a=>!(a.childNodes.length>0));var X=(a,b)=>{new IntersectionObserver((c,d)=>{c.forEach(c=>{c.isIntersecting&&(b(),d.unobserve(a))})},{threshold:1}).observe(a)};let Y=a=>"function"==typeof a?a():a;var Z=a=>Number.isInteger(a);let $=(a,b=document,c=!1)=>b[`querySelector${c?"All":""}`](a),_=a=>/body/i.test(null==a?void 0:a.tagName),aa=(a,b)=>{if(V(a)){a.value=`${a.value}${b.textContent}`;return}b.innerHTML="";let c=_(b.originalParent)?a:b.originalParent||a;c.insertBefore(b,$("."+J,c)||null)},ab=(a,b,c)=>Math.min(Math.max(b+a,0),c.length);var ac=(a,b)=>Object.assign({},a,b),ad=a=>{if(!a)return;let b=a.parentNode;(b.childNodes.length>1?a:b).remove()},ae=(a,c,d)=>{let b=c[d-1],e=$(`.${J}`,a);(a=(null==b?void 0:b.parentNode)||a).insertBefore(e,b||null)},af=a=>/<(.+)>(.*?)<\/(.+)>/.test(a.outerHTML);let ag=(a,b,c)=>new Promise(e=>{let d=async()=>{await a(),e()};c.push(setTimeout(d,b||0))}),ah={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},ai=(a,b)=>{let c=`[${g}='${a}'] .${J}`,e=getComputedStyle(b),d=Object.entries(ah).reduce((b,[a,c])=>`${b} ${a}: var(--ti-cursor-${a}, ${c||e[a]});`,"");P(`${c} { display: inline-block; width: 0; ${d} }`,a)};var aj=(a,b)=>Array(b).fill(a);let ak=({queueItems:c,selector:a,cursorPosition:e,to:f})=>{if(Z(a))return -1*a;let d=/END/i.test(f),b=a?[...c].reverse().findIndex(({char:b})=>{let c=b.parentElement,e=c.matches(a);return!!d&&!!e||e&&c.firstChild.isSameNode(b)}):-1;return b<0&&(b=d?0:c.length-1),b-e+(d?0:1)},al=a=>new Promise(b=>{requestAnimationFrame(async()=>{b(await a())})}),am=a=>null==a?void 0:a.getAnimations().find(b=>b.id===a.dataset.tiAnimationId),an={iterations:1/0,easing:"steps(2, start)",fill:"forwards"},ao=[{opacity:0},{opacity:0},{opacity:1}],ap=({cursor:a,frames:c=null,timingOptions:d={}})=>{let b=a.animate(c||ao,z(z({},an),d));return b.id=a.dataset.tiAnimationId,b},aq=({cursor:b,frames:f,timingOptions:d})=>{if(!b)return;let a=am(b),c;a&&"idle"!==a.playState&&(d.delay=a.effect.getComputedTiming().delay,c=a.currentTime,a.cancel());let e=ap({cursor:b,frames:f,timingOptions:d});return c&&(e.currentTime=c),e},ar=b=>{var a;return null==(a=b.func)?void 0:a.call(globalThis)},as=async({index:c,queueItems:d,wait:k,cursor:f})=>{let g=d[c][1],e=[],b=c,a=g;for(;a&&!a.delay;)e.push(a),a&&!a.delay&&b++,a=d[b]?d[b][1]:null;if(e.length)return await al(async()=>{for(let a of e)await ar(a)}),b-1;let{animation:h,frames:i,timingOptions:j}=await (async()=>{let a=am(f),b,c;return a&&(b=f?A(z({},a.effect.getComputedTiming()),{delay:g.shouldPauseCursor()?500:0}):{},c=f?a.effect.getKeyframes():[]),await k(async()=>{a&&g.shouldPauseCursor()&&a.cancel(),await al(()=>{ar(g)})},g.delay),{animation:a,frames:c,timingOptions:b}})();return h&&aq({cursor:f,frames:i,timingOptions:j}),c},at=function(d,e={}){var b;let k=async(c,d,b=!1)=>{ah.frozen&&await new Promise(a=>{this.unfreeze=()=>{ah.frozen=!1,a()}}),b||await a.beforeStep(this),await ag(c,d,B),b||await a.afterStep(this)},l=(a,b)=>as({index:a,queueItems:b,wait:k,cursor:an}),c=()=>V(i),m=(b=0)=>(function(c){let{speed:b,deleteSpeed:a,lifeLike:d}=c;return a=null!==a?a:b/3,d?[R(b,S(b)),R(a,S(a))]:[b,a]})(a)[b],n=()=>W(i),o=(b={})=>{let a=b.delay;a&&al.add({delay:a})},p=(a,b)=>(al.add(a),o(b),this),q=()=>null!=_?_:C,r=(b={})=>[{func:()=>y(b)},{func:()=>y(a)}],s=c=>{let b=a.nextStringDelay;al.add([{delay:b[0]},...c,{delay:b[1]}])},f=()=>{if(c())return;let b=O("span");return(b.className=J,am)?(b.innerHTML=I(a.cursorChar).innerHTML,b):(b.style.visibility="hidden",b)},t=async()=>{!c()&&an&&i.appendChild(an),am&&(ai(j,i),an.dataset.tiAnimationId=j,ap({cursor:an,timingOptions:{duration:a.cursorSpeed}}))},g=()=>{let b=a.strings.filter(a=>!!a);b.forEach((c,d)=>{if(this.type(c),d+1===b.length)return;let e=a.breakLines?[{func:()=>x(O("BR")),typeable:!0}]:aj({func:A,delay:m(1)},al.getTypeable().length);s(e)})},u=async d=>{let b=q();b&&await w({value:b});let c=n().map(a=>[Symbol(),{func:A,delay:m(1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let a=0;a<c.length;a++)await l(a,c);al.reset(),al.set(0,{delay:d})},h=b=>{let c=i.innerHTML;return c?(i.innerHTML="",a.startDelete)?(i.innerHTML=c,H(i),s(aj({func:A,delay:m(1),deletable:!0},n().length)),b):c.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/).concat(b):b},v=async(f=!0)=>{ah.started=!0;let g=a=>{al.done(a,!f)};try{let c=[...al.getQueue()];for(let b=0;b<c.length;b++){let[h,d]=c[b];if(!d.done){if(!d.deletable||d.deletable&&n().length){let e=await l(b,c);Array(e-b).fill(b+1).map((a,b)=>a+b).forEach(a=>{let[b]=c[a];g(b)}),b=e}g(h)}}if(!f)return this;if(ah.completed=!0,await a.afterComplete(this),!a.loop)throw"";let i=a.loopDelay;k(async()=>{await u(i[0]),v()},i[1])}catch(j){}return this},w=async a=>{C=ab(a,C,n()),ae(i,n(),C)},x=a=>aa(i,a),y=async b=>a=ac(a,b),z=async()=>{if(c()){i.value="";return}n().forEach(ad)},A=()=>{let a=n();a.length&&(c()?i.value=i.value.slice(0,-1):ad(a[C]))};this.break=function(a){return p({func:()=>x(O("BR")),typeable:!0},a)},this.delete=function(b=null,c={}){b=Y(b);let d=r(c),a=b,{instant:f,to:g}=c,e=al.getTypeable(),h=null===a?e.length:Z(a)?a:ak({queueItems:e,selector:a,cursorPosition:q(),to:g});return p([d[0],...aj({func:A,delay:f?0:m(1),deletable:!0},h),d[1]],c)},this.empty=function(a={}){return p({func:z},a)},this.exec=function(c,a={}){let b=r(a);return p([b[0],{func:()=>c(this)},b[1]],a)},this.move=function(a,b={}){a=Y(a);let d=r(b),{instant:e,to:f}=b,c=ak({queueItems:al.getTypeable(),selector:null===a?"":a,to:f,cursorPosition:q()}),g=c<0?-1:1;return _=q()+c,p([d[0],...aj({func:()=>w(g),delay:e?0:m(),cursorable:!0},Math.abs(c)),d[1]],b)},this.options=function(a,b={}){return a=Y(a),y(a),p({},b)},this.pause=function(a,b={}){return p({delay:Y(a)},b)},this.type=function(b,c={}){b=Y(b);let{instant:g}=c,d=r(c),e=(function(a,b=!0){var c;return b?N(I(c=a)):F(a).map(G)})(b,a.html).map(a=>({func:()=>x(a),char:a,delay:g||af(a)?0:m(),typeable:a.nodeType===Node.TEXT_NODE})),f=[d[0],{func:async()=>await a.beforeString(b,this)},...e,{func:async()=>await a.afterString(b,this)},d[1]];return p(f,c)},this.is=function(a){return ah[a]},this.destroy=function(a=!0){B=T(B),Y(a)&&an&&ad(an),ah.destroyed=!0},this.freeze=function(){ah.frozen=!0},this.unfreeze=()=>{},this.reset=function(a){for(let b in this.is("destroyed")||this.destroy(),a?(al.wipe(),a(this)):al.reset(),C=0,ah)ah[b]=!1;return i[c()?"value":"innerHTML"]="",this},this.go=function(){return ah.started?this:(t(),a.waitUntilVisible)?(X(i,v.bind(this)),this):(v(),this)},this.flush=function(a=()=>{}){return t(),v(!1).then(a),this},this.getQueue=()=>al,this.getOptions=()=>a,this.updateOptions=a=>y(a),this.getElement=()=>i;let i="string"==typeof(b=d)?$(b):b,B=[],C=0,_=null,ah=ac({},K),a=ac(L,e);a=ac(a,{html:!c()&&a.html,nextStringDelay:Q(a.nextStringDelay),loopDelay:Q(a.loopDelay)});let j=U(),al=E([{func(){},delay:a.startDelay}]);i.dataset.typeitId=j,P(M);let am=a.cursor&&!c(),an=f();a.strings=h(D(a.strings)),a.strings.length&&g()},{useRef:au,useEffect:av,useState:aw}=f,h=c=>{let d=au(null),k=au(null),a=c,{options:f,as:g,children:h,getBeforeInit:l,getAfterInit:m}=a,i=B(a,["options","as","children","getBeforeInit","getAfterInit"]),[b,n]=aw(!0),[j,o]=aw(null);return av(()=>{(function(){let a=Object.assign({},f);h&&d.current&&(a.strings=d.current.innerHTML),o(a)})(),n(!1)},[f]),av(()=>{var a;j&&((null==(a=k.current)?void 0:a.updateOptions(j))||(k.current=new at(d.current,j),k.current=l(k.current),k.current.go(),k.current=m(k.current)))},[j]),av(()=>()=>{var a;return null==(a=k.current)?void 0:a.destroy()},[]),e.createElement(g,z({ref:d,children:b?h:null,style:{opacity:b?0:1}},i))};function ax(){return(0,b.jsxs)("div",{className:"hero",children:[(0,b.jsx)("span",{className:"hero__text",children:"Hello!"}),(0,b.jsx)(h,{className:"hero__text",getBeforeInit:function(a){return a.options({speed:100,lifeLike:!0}).pause(1e3).type("Welcome to my Website!!!").pause(1e3).delete(1).pause(100).delete(1),a}})]})}h.defaultProps={as:"span",options:{},getBeforeInit:a=>a,getAfterInit:a=>a};var ay=[{title:"Async pipx package update checker",image:"/images/crop/aiocpxo-1.png",alt:"alt of image",description:(0,b.jsxs)("p",{children:["Since there is no simple way to know which packages installed under"," ",(0,b.jsx)("code",{children:"pipx"})," are outdated, I create this installable script. Also a fun litte experiment with threading and asynchronous programming in Python."]}),sourceUrl:"https://github.com/JackLPK/check-pipx-outdates",siteUrl:null,tags:["Python","async"]},{title:"Rock Paper Scissors Game",image:"/images/crop/rock-paper-scissors-1.png",alt:"rock-paper-scissors",description:(0,b.jsxs)("p",{children:["A game of rock-paper-scissors. ",(0,b.jsx)("br",{}),"Written in React."]}),sourceUrl:"https://github.com/PKLJack/react-rock-paper-scissors",siteUrl:"https://pkljack-rockpaperscissors-react.netlify.app/",tags:["ReactJS","JavaScript"]},{title:"Memory Game",image:"/images/crop/memory-game-1.png",alt:"alt of image",description:(0,b.jsxs)("p",{children:["A Game where you flip cards and remember where they are.",(0,b.jsx)("br",{}),"Written in React."]}),sourceUrl:"https://github.com/PKLJack/react-memory-game",siteUrl:"https://pkljack-memorygame-react.netlify.app/",tags:["ReactJS","JavaScript"]},];function az(){return ay}function aA(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function aB(a){return function(a){if(Array.isArray(a))return aA(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||function(a,c){if(a){if("string"==typeof a)return aA(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return aA(a,c)}}(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function aC(){return(aC=Object.assign?Object.assign.bind():function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}var aD=function(a){return e.createElement("svg",aC({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"github_svg__bi github_svg__bi-github"},a),k||(k=e.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})))};function aE(){return(aE=Object.assign?Object.assign.bind():function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}var aF=function(a){return e.createElement("svg",aE({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"twitter_svg__bi twitter_svg__bi-twitter"},a),l||(l=e.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})))};function aG(){return(aG=Object.assign?Object.assign.bind():function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}var aH=function(a){return e.createElement("svg",aG({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"linkedin_svg__bi linkedin_svg__bi-linkedin"},a),m||(m=e.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})))};function aI(){return(aI=Object.assign?Object.assign.bind():function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}var aJ=function(a){return e.createElement("svg",aI({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"arrow-right_svg__bi arrow-right_svg__bi-arrow-right"},a),n||(n=e.createElement("path",{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})))};function aK(c){var a=c.project,d=(0,b.jsx)("img",{src:a.image,className:"card__img",alt:a.alt}),e=(0,b.jsxs)("a",{href:a.sourceUrl,className:"card__url",children:[(0,b.jsx)(aD,{className:"bi bi-github"}),"View Source"]}),f=(0,b.jsxs)("a",{href:a.siteUrl,className:"card__url",children:[(0,b.jsx)(aJ,{className:"bi"}),"View Site"]}),g=a.tags.map(function(a,c){return(0,b.jsx)("span",{className:"tag",children:"# ".concat(a)},c)});return(0,b.jsxs)("div",{className:"card",children:[d,(0,b.jsx)("h3",{className:"card__title",children:a.title}),(0,b.jsx)("div",{className:"card__body",children:a.description}),(0,b.jsxs)("div",{className:"card__urls",children:[a.siteUrl&&f,a.sourceUrl&&e]}),(0,b.jsx)("div",{className:"card__tags",children:g})]})}function aL(a){return(0,b.jsx)("button",{onClick:a.handleClick,style:{visibility:a.isEmpty?"hidden":"visible"},className:"clear-btn",children:"All"})}function aM(){var j=function(b,a){k(a)},a=(0,e.useState)(az),c=a[0];a[1];var d,f=(0,e.useState)(""),g=f[0],k=f[1],h=(function(j){var d=["ReactJS","JavaScript","Python","R"];d.reverse();var a=Array.from(j),b=!0,e=!1,f=void 0;try{for(var g,c=d[Symbol.iterator]();!(b=(g=c.next()).done);b=!0){var h=g.value,i=a.indexOf(h);-1!==i&&(a.splice(i,1),a.unshift(h))}}catch(k){e=!0,f=k}finally{try{b||null==c.return||c.return()}finally{if(e)throw f}}return a})((d=c,Array.from(new Set(d.reduce(function(a,b){return aB(a).concat(aB(b.tags))},[]))))).map(function(a,c){return(0,b.jsx)("span",{className:"tag",onClick:function(b){return j(b,a)},children:a},c)}),i=c.filter(function(a){return""===g||a.tags.includes(g)}).map(function(a,c){return(0,b.jsx)(aK,{project:a},c)});return(0,b.jsxs)("section",{className:"projects",children:[(0,b.jsx)("h1",{className:"projects__title",children:"Projects"}),(0,b.jsxs)("div",{className:"projects__tags",children:["Filter:",(0,b.jsx)(aL,{isEmpty:""===g,handleClick:function(){k("")}}),h]}),(0,b.jsx)("div",{className:"projects__cards",children:i})]})}function aN(){return(0,b.jsxs)("div",{className:"social-links",children:[(0,b.jsxs)("a",{href:"https://github.com/PKLJack",className:"social-links__btn",children:[(0,b.jsx)(aD,{className:"bi bi-github"}),(0,b.jsx)("span",{children:"Github"})]}),(0,b.jsxs)("a",{href:"https://twitter.com/PKL_Jack",className:"social-links__btn",children:[(0,b.jsx)(aF,{className:"bi bi-twitter"}),(0,b.jsx)("span",{children:"Twitter"})]}),(0,b.jsxs)("a",{href:"https://www.linkedin.com/in/pui-kit-li-793555177/",className:"btn social-links__btn",children:[(0,b.jsx)(aH,{className:"bi bi-linkedin"}),(0,b.jsx)("span",{children:"LinkedIn"})]})]})}function aO(){return(0,b.jsxs)("footer",{className:"footer",children:[(0,b.jsx)("div",{className:"footer__text",children:"Made by Pui Kit Li"}),(0,b.jsx)("div",{className:"footer__text",children:"Build with React"})]})}function aP(){return(0,b.jsxs)("div",{className:"App",children:[(0,b.jsx)(o(),{}),(0,b.jsx)(ax,{}),(0,b.jsx)(r,{}),(0,b.jsx)(aN,{}),(0,b.jsx)(aM,{}),(0,b.jsx)(aO,{})]})}},9008:function(a,c,b){a.exports=b(5443)}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])