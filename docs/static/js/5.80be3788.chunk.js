/*! For license information please see 5.80be3788.chunk.js.LICENSE.txt */
(this.webpackJsonpagirar=this.webpackJsonpagirar||[]).push([[5],{119:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"f",(function(){return v}));var r=n(122),a=n.n(r),o=n(123),i=n(124),s=n(45),c=n(46),l=function(){var e=s.Container.get(c.a);return Object(i.b)({queryKey:["main_cards"],queryFn:function(){var t=Object(o.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getMainCards();case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),config:{refetchOnWindowFocus:!1,refetchInterval:!1,refetchIntervalInBackground:!1,onSuccess:function(e){e.forEach((function(e,t){i.a.setQueryData(["mainCards",t],e)}))}}})},u=function(){var e=s.Container.get(c.a);return Object(i.b)({queryKey:["slider_cards"],queryFn:function(){var t=Object(o.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getSliderCards();case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),config:{refetchOnWindowFocus:!1,refetchInterval:!1,refetchIntervalInBackground:!1,onSuccess:function(e){e.forEach((function(e,t){i.a.setQueryData(["sliderCards",t],e)}))}}})},f=function(){var e=s.Container.get(c.a);return Object(i.b)({queryKey:["history_cards"],queryFn:function(){var t=Object(o.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getHistory();case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),config:{refetchOnWindowFocus:!1,refetchInterval:!1,refetchIntervalInBackground:!1,onSuccess:function(e){e.forEach((function(e,t){i.a.setQueryData(["historyCards",t],e)}))}}})},d=function(){var e=s.Container.get(c.a);return Object(i.b)({queryKey:["ateliers_cards"],queryFn:function(){var t=Object(o.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getAteliers();case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),config:{refetchOnWindowFocus:!1,refetchInterval:!1,refetchIntervalInBackground:!1,onSuccess:function(e){e.forEach((function(e,t){i.a.setQueryData(["ateliersCards",t],e)}))}}})},p=function(){var e=s.Container.get(c.a);return Object(i.b)({queryKey:["orgaos_sociais"],queryFn:function(){var t=Object(o.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getOrgaosSociais();case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),config:{refetchOnWindowFocus:!1,refetchInterval:!1,refetchIntervalInBackground:!1,onSuccess:function(e){e.forEach((function(e,t){i.a.setQueryData(["orgaosSociais",t],e)}))}}})},v=function(e){var t=s.Container.get(c.a);return Object(i.b)({queryKey:["submit_associate"],queryFn:function(){var n=Object(o.a)(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.submitAssociateData(e);case 2:return r=n.sent,console.log(r),n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),config:{refetchOnWindowFocus:!1,refetchInterval:!1,refetchIntervalInBackground:!1}})}},126:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},127:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(142),i=n(113);t.a=function(){return a.a.createElement("div",{className:"loadingContainer"},a.a.createElement(o.a,{size:100,color:"secondary"}),a.a.createElement(i.a,{className:"loadingText"},"A carregar..."))}},140:function(e,t,n){e.exports=n.p+"static/media/donate.aa3c3a01.png"},142:function(e,t,n){"use strict";var r=n(1),a=n(2),o=n(0),i=(n(4),n(3)),s=n(5),c=n(9);function l(e){var t,n,r;return t=e,n=0,r=1,e=(Math.min(Math.max(n,t),r)-n)/(r-n),e=(e-=1)*e*e+1}var u=o.forwardRef((function(e,t){var n,s=e.classes,u=e.className,f=e.color,d=void 0===f?"primary":f,p=e.disableShrink,v=void 0!==p&&p,h=e.size,m=void 0===h?40:h,g=e.style,b=e.thickness,y=void 0===b?3.6:b,E=e.value,w=void 0===E?0:E,k=e.variant,S=void 0===k?"indeterminate":k,x=Object(a.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),C={},O={},M={};if("determinate"===S||"static"===S){var j=2*Math.PI*((44-y)/2);C.strokeDasharray=j.toFixed(3),M["aria-valuenow"]=Math.round(w),"static"===S?(C.strokeDashoffset="".concat(((100-w)/100*j).toFixed(3),"px"),O.transform="rotate(-90deg)"):(C.strokeDashoffset="".concat((n=(100-w)/100,n*n*j).toFixed(3),"px"),O.transform="rotate(".concat((270*l(w/70)).toFixed(3),"deg)"))}return o.createElement("div",Object(r.a)({className:Object(i.a)(s.root,u,"inherit"!==d&&s["color".concat(Object(c.a)(d))],{indeterminate:s.indeterminate,static:s.static}[S]),style:Object(r.a)({width:m,height:m},O,g),ref:t,role:"progressbar"},M,x),o.createElement("svg",{className:s.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},o.createElement("circle",{className:Object(i.a)(s.circle,v&&s.circleDisableShrink,{indeterminate:s.circleIndeterminate,static:s.circleStatic}[S]),style:C,cx:44,cy:44,r:(44-y)/2,fill:"none",strokeWidth:y})))}));t.a=Object(s.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(u)},143:function(e,t,n){"use strict";var r=n(26);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=(0,r(n(30)).default)(a.default.createElement("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");t.default=o},144:function(e,t,n){"use strict";var r=n(26);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=(0,r(n(30)).default)(a.default.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");t.default=o},190:function(e,t,n){"use strict";n.r(t);var r=n(126),a=n(0),o=n.n(a),i=n(140),s=n.n(i),c=n(113),l=n(116),u=n(91),f=n(6),d=n(119),p=n(4),v=n.n(p);var h=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=n.apply(null,a);i&&e.push(i)}else if("object"===o)for(var s in a)t.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}));function m(e,t,n){var r,a,o,i,s;function c(){var l=Date.now()-i;l<t&&l>=0?r=setTimeout(c,t-l):(r=null,n||(s=e.apply(o,a),o=a=null))}null==t&&(t=100);var l=function(){o=this,a=arguments,i=Date.now();var l=n&&!r;return r||(r=setTimeout(c,t)),l&&(s=e.apply(o,a),o=a=null),s};return l.clear=function(){r&&(clearTimeout(r),r=null)},l.flush=function(){r&&(s=e.apply(o,a),o=a=null,clearTimeout(r),r=null)},l}m.debounce=m;var g=m;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".indiana-scroll-container {\n  overflow: auto;\n}\n  .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab;\n    }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n  .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important;\n    }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto;\n  }\n\n.indiana-dragging {\n  cursor: -webkit-grab !important;\n  cursor: grab !important;\n}\n");var b,y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E=(b="indiana-scroll-container",function(e,t){if(!e)return b;var n;"string"===typeof e?n=e:t=e;var r=b;return n&&(r+="__"+n),r+(t?Object.keys(t).reduce((function(e,n){var a=t[n];return a&&(e+=" "+("boolean"===typeof a?r+"--"+n:r+"--"+n+"_"+a)),e}),""):"")}),w=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onEndScroll=function(){n.scrolling=!1,!n.pressed&&n.started&&n.processEnd()},n.onScroll=function(e){var t=n.container.current;t.scrollLeft===n.scrollLeft&&t.scrollTop===n.scrollTop||(n.scrolling=!0,n.processScroll(e),n.onEndScroll())},n.onTouchStart=function(e){var t=n.props.nativeMobileScroll;if(n.isDraggable(e.target))if(t&&n.scrolling)n.pressed=!0;else{var r=e.touches[0];n.processClick(e,r.clientX,r.clientY),!t&&n.props.stopPropagation&&e.stopPropagation()}},n.onTouchEnd=function(e){var t=n.props.nativeMobileScroll;n.pressed&&(!n.started||n.scrolling&&t?n.pressed=!1:n.processEnd(),n.forceUpdate())},n.onTouchMove=function(e){var t=n.props.nativeMobileScroll;if(n.pressed&&(!t||!n.isMobile)){var r=e.touches[0];r&&n.processMove(e,r.clientX,r.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation()}},n.onMouseDown=function(e){n.isDraggable(e.target)&&(n.processClick(e,e.clientX,e.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation())},n.onMouseMove=function(e){n.pressed&&(n.processMove(e,e.clientX,e.clientY),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation())},n.onMouseUp=function(e){n.pressed&&(n.started?n.processEnd():(n.pressed=!1,n.forceUpdate(),n.props.onClick&&n.props.onClick(e)),e.preventDefault(),n.props.stopPropagation&&e.stopPropagation())},n.container=o.a.createRef(),n.onEndScroll=g(n.onEndScroll,300),n.scrolling=!1,n.started=!1,n.pressed=!1,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),y(t,[{key:"componentDidMount",value:function(){var e=this.props.nativeMobileScroll,t=this.container.current;window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd),t.addEventListener("touchstart",this.onTouchStart,{passive:!1}),t.addEventListener("mousedown",this.onMouseDown,{passive:!1}),e&&(this.isMobile=this.isMobileDevice(),this.isMobile&&this.forceUpdate())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)}},{key:"getElement",value:function(){return this.container.current}},{key:"isMobileDevice",value:function(){return"undefined"!==typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}},{key:"isDraggable",value:function(e){var t=this.props.ignoreElements;if(t){var n=e.closest(t);return null===n||n.contains(this.getElement())}return!0}},{key:"processClick",value:function(e,t,n){var r=this.container.current;this.scrollLeft=r.scrollLeft,this.scrollTop=r.scrollTop,this.clientX=t,this.clientY=n,this.pressed=!0}},{key:"processStart",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.props.onStartScroll,r=this.container.current;this.started=!0,t&&document.body.classList.add("indiana-dragging"),n&&n(r.scrollLeft,r.scrollTop,r.scrollWidth,r.scrollHeight),this.forceUpdate()}},{key:"processScroll",value:function(e){if(this.started){var t=this.props.onScroll,n=this.container.current;t&&t(n.scrollLeft,n.scrollTop,n.scrollWidth,n.scrollHeight)}else this.processStart(e,!1)}},{key:"processMove",value:function(e,t,n){var r=this.props,a=r.horizontal,o=r.vertical,i=r.activationDistance,s=r.onScroll,c=this.container.current;this.started?(a&&(c.scrollLeft-=t-this.clientX),o&&(c.scrollTop-=n-this.clientY),s&&s(c.scrollLeft,c.scrollTop,c.scrollWidth,c.scrollHeight),this.clientX=t,this.clientY=n,this.scrollLeft=c.scrollLeft,this.scrollTop=c.scrollTop):(a&&Math.abs(t-this.clientX)>i||o&&Math.abs(n-this.clientY)>i)&&(this.clientX=t,this.clientY=n,this.processStart())}},{key:"processEnd",value:function(e){var t=this.props.onEndScroll,n=this.container.current;this.pressed=!1,this.started=!1,this.scrolling=!1,n&&t&&t(n.scrollLeft,n.scrollTop,n.scrollWidth,n.scrollHeight),document.body.classList.remove("indiana-dragging"),this.forceUpdate()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=e.hideScrollbars;return o.a.createElement("div",{className:h(n,E({dragging:this.pressed,"hide-scrollbars":a,"native-scroll":this.isMobile})),style:r,ref:this.container,onScroll:this.onScroll},t)}}]),t}(a.PureComponent);w.propTypes={vertical:v.a.bool,horizontal:v.a.bool,hideScrollbars:v.a.bool,activationDistance:v.a.number,children:v.a.node,onStartScroll:v.a.func,onScroll:v.a.func,onEndScroll:v.a.func,onClick:v.a.func,className:v.a.string,style:v.a.object,ignoreElements:v.a.string,nativeMobileScroll:v.a.bool,stopPropagation:v.a.bool},w.defaultProps={nativeMobileScroll:!0,hideScrollbars:!0,activationDistance:10,vertical:!0,horizontal:!0,stopPropagation:!1,style:{}};var k=w,S=n(144),x=n.n(S),C=function(e){return o.a.createElement(o.a.Fragment,null,e.images.map((function(t,n){return o.a.createElement("div",{style:{background:"url(".concat(t.url,")"),backgroundSize:"cover",backgroundPosition:"center"},className:"imageContainer"},o.a.createElement("div",{className:(n+1)%2===0?"shapeContainer even":"shapeContainer odd"}),o.a.createElement("div",{ref:e.textContainerRef,className:(n+1)%2===0?"imgTextContainer evenText":"imgTextContainer oddText"},o.a.createElement(c.a,{variant:"h4"}," ",t.title),o.a.createElement(c.a,{variant:"subtitle1"}," ",t.description)))})))},O=n(143),M=n.n(O),j=n(127);t.default=function(){var e=Object(d.b)(),t=e.data,n=e.status,a=Object(d.e)(),i=a.data,p=a.status,v=o.a.useState(0),h=Object(r.a)(v,2),m=h[0],g=h[1],b=o.a.useRef(),y=window.innerWidth-17,E=o.a.useRef(),w=o.a.useState(!0),S=Object(r.a)(w,2),O=S[0],N=S[1],D=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];g(e),t&&N(!1),b.current.scrollLeft=y*e};o.a.useEffect((function(){var e=null;return O?e=setInterval((function(){m<i.length-1?D(m+1):D(0)}),5e3):clearInterval(e),function(){return clearInterval(e)}}),[O,m,i]);var I=o.a.useMemo((function(){return"loading"===n||"loading"===p}),[n,p]);return o.a.createElement(o.a.Fragment,null,I&&o.a.createElement(j.a,null),!I&&o.a.createElement("div",{className:"sliderContainer"},o.a.createElement("div",{className:"imageNavigationContainer"},o.a.createElement("div",{className:"arrowsContainer"},o.a.createElement(M.a,{onClick:function(){return D(m-1,!0)},className:0===m?"hide":""}),o.a.createElement(M.a,{onClick:function(){return D(m+1,!0)},className:m===i.length-1?"hide":"",style:{transform:"rotate(180deg)"}})),o.a.createElement("div",{className:"navBulletContainer"},i.map((function(e,t){return o.a.createElement("div",{onClick:function(){return D(t,!0)},className:m===t?"navBullet acitveBullet":"navBullet"})})))),o.a.createElement("div",{id:"imagesContainer",ref:b,className:"imagesContainer"},o.a.createElement(C,{textRef:E,images:i}))),o.a.createElement("div",{className:"callForActionContainer"},o.a.createElement(c.a,{className:"objectives",variant:"h5"},"Os principais objetivos da AGIRAR s\xe3o promover a reabilita\xe7\xe3o e integra\xe7\xe3o social de pessoas com doen\xe7a mental grave e dar apoio \xe0s suas fam\xedlias, assim como promover o apoio, forma\xe7\xe3o e investiga\xe7\xe3o no dom\xednio da sa\xfade mental e reabilita\xe7\xe3o psicossocial"),o.a.createElement("div",{className:"buttonsContainer"},o.a.createElement(l.a,{variant:"contained",color:"primary"},o.a.createElement(f.b,{to:"/info"}," Saber Mais ")),o.a.createElement(l.a,{variant:"contained",color:"secondary"},o.a.createElement(f.b,{to:"/associado"},"TORNAR-SE ASSOCIADO ")))),!I&&o.a.createElement(k,{className:"newsContainer"},t.map((function(e){return o.a.createElement(u.a,{className:"newsCardContainer",elevation:3},o.a.createElement("div",{className:"newsInfoContainer"},o.a.createElement(c.a,{style:{fontWeight:"bold"},color:"primary",variant:"h6"},e.title," "),o.a.createElement(c.a,{style:{margin:"10px 0"},variant:"caption"},e.description," "),o.a.createElement(l.a,{className:"share"}," ",o.a.createElement(x.a,null)," partilhar ")),o.a.createElement("div",{style:{backgroundImage:"url(".concat(e.img,")"),backgroundSize:"cover",backgroundPosition:"center"},className:"newsInfoContainer"}))}))),o.a.createElement("div",{className:"donateContainer"},o.a.createElement("img",{src:s.a,alt:""}),o.a.createElement("div",{className:"donateInfoContainer"},o.a.createElement(c.a,{variant:"h3"},"Pretende efetuar um donativo?"),o.a.createElement(c.a,{style:{margin:"10px 0 25px 0",maxWidth:"600px"},variant:"subtitle1"},"Precisamos de si para continuar a desenvolver os nossos Atelieres e as atividades junto das fam\xedlias! Basta fazer uma tranfer\xeancia banc\xe1ria para:"),o.a.createElement(c.a,{variant:"subtitle1"},"NIB: 0036 0051 99100351967 81"),o.a.createElement(c.a,{variant:"subtitle1"},"IBAN: PT50 0036 0051 99100351967 81"),o.a.createElement(c.a,{style:{margin:"10px 0",fontWeight:"bold"},variant:"h5"},"O seu donativo faz a diferan\xe7a!"))))}}}]);
//# sourceMappingURL=5.80be3788.chunk.js.map