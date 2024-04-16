(()=>{"use strict";var t,e={63:(t,e,n)=>{function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=a(t);if(e){var r=a(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return function(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},l.apply(this,arguments)}var f={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function d(t){console.error("[Glide warn]: ".concat(t))}function h(t){return parseInt(t)}function v(t){return"string"==typeof t}function p(t){var e=i(t);return"function"===e||"object"===e&&!!t}function m(t){return"function"==typeof t}function g(t){return void 0===t}function y(t){return t.constructor===Array}function b(t,e,n){Object.defineProperty(t,e,n)}function w(t,e){var n=Object.assign({},t,e);return e.hasOwnProperty("classes")&&(n.classes=Object.assign({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=Object.assign({},t.classes.direction,e.classes.direction)),e.classes.hasOwnProperty("type")&&(n.classes.type=Object.assign({},t.classes.type,e.classes.type)),e.classes.hasOwnProperty("slide")&&(n.classes.slide=Object.assign({},t.classes.slide,e.classes.slide)),e.classes.hasOwnProperty("arrow")&&(n.classes.arrow=Object.assign({},t.classes.arrow,e.classes.arrow)),e.classes.hasOwnProperty("nav")&&(n.classes.nav=Object.assign({},t.classes.nav,e.classes.nav))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=Object.assign({},t.breakpoints,e.breakpoints)),n}var _=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this.events=e,this.hop=e.hasOwnProperty}return o(t,[{key:"on",value:function(t,e){if(!y(t)){this.hop.call(this.events,t)||(this.events[t]=[]);var n=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][n]}}}for(var i=0;i<t.length;i++)this.on(t[i],e)}},{key:"emit",value:function(t,e){if(y(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);else this.hop.call(this.events,t)&&this.events[t].forEach((function(t){t(e||{})}))}}]),t}(),k=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,t),this._c={},this._t=[],this._e=new _,this.disabled=!1,this.selector=e,this.settings=w(f,n),this.index=this.settings.startAt}return o(t,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),p(t)?this._c=function(t,e,n){var i={};for(var r in e)m(e[r])?i[r]=e[r](t,i,n):d("Extension must be a function");for(var s in i)m(i[s].mount)&&i[s].mount();return i}(this,t,this._e):d("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return y(t)?this._t=t:d("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=w(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){p(t)?this._o=t:d("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=h(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),t}();function S(){return(new Date).getTime()}function O(t,e,n){var i,r,s,o,a=0;n||(n={});var u=function(){a=!1===n.leading?0:S(),i=null,o=t.apply(r,s),i||(r=s=null)},c=function(){var c=S();a||!1!==n.leading||(a=c);var l=e-(c-a);return r=this,s=arguments,l<=0||l>e?(i&&(clearTimeout(i),i=null),a=c,o=t.apply(r,s),i||(r=s=null)):i||!1===n.trailing||(i=setTimeout(u,l)),o};return c.cancel=function(){clearTimeout(i),a=0,i=r=s=null},c}var T={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function H(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function x(t){return!!(t&&t instanceof window.HTMLElement)}function j(t){return Array.prototype.slice.call(t)}var A='[data-glide-el="track"]',R=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this.listeners=e}return o(t,[{key:"on",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];v(t)&&(t=[t]);for(var r=0;r<t.length;r++)this.listeners[t[r]]=n,e.addEventListener(t[r],this.listeners[t[r]],i)}},{key:"off",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];v(t)&&(t=[t]);for(var i=0;i<t.length;i++)e.removeEventListener(t[i],this.listeners[t[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),t}(),C=["ltr","rtl"],L={">":"<","<":">","=":"="};function P(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function M(t,e){return{modify:function(t){var n=Math.floor(t/e.Sizes.slideWidth);return t+e.Gaps.value*n}}}function D(t,e){return{modify:function(t){return t+e.Clones.grow/2}}}function E(t,e){return{modify:function(n){if(t.settings.focusAt>=0){var i=e.Peek.value;return p(i)?n-i.before:n-i}return n}}}function z(t,e){return{modify:function(n){var i=e.Gaps.value,r=e.Sizes.width,s=t.settings.focusAt,o=e.Sizes.slideWidth;return"center"===s?n-(r/2-o/2):n-o*s-i*s}}}var B=!1;try{var V=Object.defineProperty({},"passive",{get:function(){B=!0}});window.addEventListener("testPassive",null,V),window.removeEventListener("testPassive",null,V)}catch(t){}var q=B,W=["touchstart","mousedown"],F=["touchmove","mousemove"],I=["touchend","touchcancel","mouseup","mouseleave"],G=["mousedown","mousemove","mouseup","mouseleave"],N='[data-glide-el^="controls"]',Y="".concat(N,' [data-glide-dir*="<"]'),X="".concat(N,' [data-glide-dir*=">"]');function K(t){return p(t)?(e=t,Object.keys(e).sort().reduce((function(t,n){return t[n]=e[n],t[n],t}),{})):(d("Breakpoints option must be an object"),{});var e}var Q={Html:function(t,e,n){var i={mount:function(){this.root=t.selector,this.track=this.root.querySelector(A),this.collectSlides()},collectSlides:function(){this.slides=j(this.wrapper.children).filter((function(e){return!e.classList.contains(t.settings.classes.slide.clone)}))}};return b(i,"root",{get:function(){return i._r},set:function(t){v(t)&&(t=document.querySelector(t)),x(t)?i._r=t:d("Root element must be a existing Html node")}}),b(i,"track",{get:function(){return i._t},set:function(t){x(t)?i._t=t:d("Could not find track element. Please use ".concat(A," attribute."))}}),b(i,"wrapper",{get:function(){return i.track.children[0]}}),n.on("update",(function(){i.collectSlides()})),i},Translate:function(t,e,n){var i={set:function(n){var i=function(t,e,n){var i=[M,D,E,z].concat(t._t,[P]);return{mutate:function(n){for(var r=0;r<i.length;r++){var s=i[r];m(s)&&m(s().modify)?n=s(t,e,undefined).modify(n):d("Transformer should be a function that returns an object with `modify()` method")}return n}}}(t,e).mutate(n),r="translate3d(".concat(-1*i,"px, 0px, 0px)");e.Html.wrapper.style.mozTransform=r,e.Html.wrapper.style.webkitTransform=r,e.Html.wrapper.style.transform=r},remove:function(){e.Html.wrapper.style.transform=""},getStartIndex:function(){var n=e.Sizes.length,i=t.index,r=t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?n+(i-r):(i+r)%n},getTravelDistance:function(){var n=e.Sizes.slideWidth*t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?-1*n:n}};return n.on("move",(function(r){if(!t.isType("carousel")||!e.Run.isOffset())return i.set(r.movement);e.Transition.after((function(){n.emit("translate.jump"),i.set(e.Sizes.slideWidth*t.index)}));var s=e.Sizes.slideWidth*e.Translate.getStartIndex();return i.set(s-e.Translate.getTravelDistance())})),n.on("destroy",(function(){i.remove()})),i},Transition:function(t,e,n){var i=!1,r={compose:function(e){var n=t.settings;return i?"".concat(e," 0ms ").concat(n.animationTimingFunc):"".concat(e," ").concat(this.duration,"ms ").concat(n.animationTimingFunc)},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout((function(){t()}),this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return b(r,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){r.set()})),n.on(["build.before","resize","translate.jump"],(function(){r.disable()})),n.on("run",(function(){r.enable()})),n.on("destroy",(function(){r.remove()})),r},Direction:function(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(L[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return b(i,"value",{get:function(){return i._v},set:function(t){C.indexOf(t)>-1?i._v=t:d("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],(function(){i.removeClass()})),n.on("update",(function(){i.mount()})),n.on(["build.before","update"],(function(){i.addClass()})),i},Peek:function(t,e,n){var i={mount:function(){this.value=t.settings.peek}};return b(i,"value",{get:function(){return i._v},set:function(t){p(t)?(t.before=h(t.before),t.after=h(t.after)):t=h(t),i._v=t}}),b(i,"reductor",{get:function(){var e=i.value,n=t.settings.perView;return p(e)?e.before/n+e.after/n:2*e/n}}),n.on(["resize","update"],(function(){i.mount()})),i},Sizes:function(t,e,n){var i={setupSlides:function(){for(var t="".concat(this.slideWidth,"px"),n=e.Html.slides,i=0;i<n.length;i++)n[i].style.width=t},setupWrapper:function(){e.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return b(i,"length",{get:function(){return e.Html.slides.length}}),b(i,"width",{get:function(){return e.Html.track.offsetWidth}}),b(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}}),b(i,"slideWidth",{get:function(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){i.setupSlides(),i.setupWrapper()})),n.on("destroy",(function(){i.remove()})),i},Gaps:function(t,e,n){var i={apply:function(t){for(var n=0,i=t.length;n<i;n++){var r=t[n].style,s=e.Direction.value;r[T[s][0]]=0!==n?"".concat(this.value/2,"px"):"",n!==t.length-1?r[T[s][1]]="".concat(this.value/2,"px"):r[T[s][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return b(i,"value",{get:function(){return h(t.settings.gap)}}),b(i,"grow",{get:function(){return i.value*e.Sizes.length}}),b(i,"reductor",{get:function(){var e=t.settings.perView;return i.value*(e-1)/e}}),n.on(["build.after","update"],O((function(){i.apply(e.Html.wrapper.children)}),30)),n.on("destroy",(function(){i.remove(e.Html.wrapper.children)})),i},Move:function(t,e,n){var i={mount:function(){this._o=0},make:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=i,n.emit("move",{movement:this.value}),e.Transition.after((function(){n.emit("move.after",{movement:t.value})}))}};return b(i,"offset",{get:function(){return i._o},set:function(t){i._o=g(t)?0:h(t)}}),b(i,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),b(i,"value",{get:function(){var t=this.offset,n=this.translate;return e.Direction.is("rtl")?n+t:n-t}}),n.on(["build.before","run"],(function(){i.make()})),i},Clones:function(t,e,n){var i={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=e.Html.slides,r=t.settings,s=r.perView,o=r.classes,a=r.cloningRatio;if(0!==i.length)for(var u=s+ +!!t.settings.peek+Math.round(s/2),c=i.slice(0,u).reverse(),l=i.slice(-1*u),f=0;f<Math.max(a,Math.floor(s/i.length));f++){for(var d=0;d<c.length;d++){var h=c[d].cloneNode(!0);h.classList.add(o.slide.clone),n.push(h)}for(var v=0;v<l.length;v++){var p=l[v].cloneNode(!0);p.classList.add(o.slide.clone),n.unshift(p)}}return n},append:function(){for(var t=this.items,n=e.Html,i=n.wrapper,r=n.slides,s=Math.floor(t.length/2),o=t.slice(0,s).reverse(),a=t.slice(-1*s).reverse(),u="".concat(e.Sizes.slideWidth,"px"),c=0;c<a.length;c++)i.appendChild(a[c]);for(var l=0;l<o.length;l++)i.insertBefore(o[l],r[0]);for(var f=0;f<t.length;f++)t[f].style.width=u},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return b(i,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}}),n.on("update",(function(){i.remove(),i.mount(),i.append()})),n.on("build.before",(function(){t.isType("carousel")&&i.append()})),n.on("destroy",(function(){i.remove()})),i},Resize:function(t,e,n){var i=new R,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,O((function(){n.emit("resize")}),t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Build:function(t,e,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes.type[t.settings.type])},activeClass:function(){var n=t.settings.classes,i=e.Html.slides[t.index];i&&(i.classList.add(n.slide.active),H(i).forEach((function(t){t.classList.remove(n.slide.active)})))},removeClasses:function(){var n=t.settings.classes,i=n.type,r=n.slide;e.Html.root.classList.remove(i[t.settings.type]),e.Html.slides.forEach((function(t){t.classList.remove(r.active)}))}};return n.on(["destroy","update"],(function(){i.removeClasses()})),n.on(["resize","update"],(function(){i.mount()})),n.on("move.after",(function(){i.activeClass()})),i},Run:function(t,e,n){var i={mount:function(){this._o=!1},make:function(i){var r=this;t.disabled||(!t.settings.waitForTransition||t.disable(),this.move=i,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),e.Transition.after((function(){r.isStart()&&n.emit("run.start",r.move),r.isEnd()&&n.emit("run.end",r.move),r.isOffset()&&(r._o=!1,n.emit("run.offset",r.move)),n.emit("run.after",r.move),t.enable()})))},calculate:function(){var e=this.move,n=this.length,r=e.steps,s=e.direction,o=1;if("="===s)return t.settings.bound&&h(r)>n?void(t.index=n):void(t.index=r);if(">"!==s||">"!==r)if("<"!==s||"<"!==r){if("|"===s&&(o=t.settings.perView||1),">"===s||"|"===s&&">"===r){var a=function(e){var n=t.index;return t.isType("carousel")?n+e:n+(e-n%e)}(o);return a>n&&(this._o=!0),void(t.index=function(e,n){var r=i.length;return e<=r?e:t.isType("carousel")?e-(r+1):t.settings.rewind?i.isBound()&&!i.isEnd()?r:0:i.isBound()?r:Math.floor(r/n)*n}(a,o))}if("<"===s||"|"===s&&"<"===r){var u=function(e){var n=t.index;return t.isType("carousel")?n-e:(Math.ceil(n/e)-1)*e}(o);return u<0&&(this._o=!0),void(t.index=function(e,n){var r=i.length;return e>=0?e:t.isType("carousel")?e+(r+1):t.settings.rewind?i.isBound()&&i.isStart()?r:Math.floor(r/n)*n:0}(u,o))}d("Invalid direction pattern [".concat(s).concat(r,"] has been used"))}else t.index=0;else t.index=n},isStart:function(){return t.index<=0},isEnd:function(){return t.index>=this.length},isOffset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return t?!!this._o&&("|>"===t?"|"===this.move.direction&&">"===this.move.steps:"|<"===t?"|"===this.move.direction&&"<"===this.move.steps:this.move.direction===t):this._o},isBound:function(){return t.isType("slider")&&"center"!==t.settings.focusAt&&t.settings.bound}};return b(i,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?h(e)?h(e):e:0}}}),b(i,"length",{get:function(){var n=t.settings,i=e.Html.slides.length;return this.isBound()?i-1-(h(n.perView)-1)+h(n.focusAt):i-1}}),b(i,"offset",{get:function(){return this._o}}),i},Swipe:function(t,e,n){var i=new R,r=0,s=0,o=0,a=!1,u=!!q&&{passive:!0},c={mount:function(){this.bindSwipeStart()},start:function(e){if(!a&&!t.disabled){this.disable();var i=this.touches(e);r=null,s=h(i.pageX),o=h(i.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(i){if(!t.disabled){var a=t.settings,u=a.touchAngle,c=a.touchRatio,l=a.classes,f=this.touches(i),d=h(f.pageX)-s,v=h(f.pageY)-o,p=Math.abs(d<<2),m=Math.abs(v<<2),g=Math.sqrt(p+m),y=Math.sqrt(m);if(!(180*(r=Math.asin(y/g))/Math.PI<u))return!1;i.stopPropagation(),e.Move.make(d*parseFloat(c)),e.Html.root.classList.add(l.dragging),n.emit("swipe.move")}},end:function(i){if(!t.disabled){var o=t.settings,a=o.perSwipe,u=o.touchAngle,c=o.classes,l=this.touches(i),f=this.threshold(i),d=l.pageX-s,h=180*r/Math.PI;this.enable(),d>f&&h<u?e.Run.make(e.Direction.resolve("".concat(a,"<"))):d<-f&&h<u?e.Run.make(e.Direction.resolve("".concat(a,">"))):e.Move.make(),e.Html.root.classList.remove(c.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,r=t.settings,s=r.swipeThreshold,o=r.dragThreshold;s&&i.on(W[0],e.Html.wrapper,(function(t){n.start(t)}),u),o&&i.on(W[1],e.Html.wrapper,(function(t){n.start(t)}),u)},unbindSwipeStart:function(){i.off(W[0],e.Html.wrapper,u),i.off(W[1],e.Html.wrapper,u)},bindSwipeMove:function(){var n=this;i.on(F,e.Html.wrapper,O((function(t){n.move(t)}),t.settings.throttle),u)},unbindSwipeMove:function(){i.off(F,e.Html.wrapper,u)},bindSwipeEnd:function(){var t=this;i.on(I,e.Html.wrapper,(function(e){t.end(e)}))},unbindSwipeEnd:function(){i.off(I,e.Html.wrapper)},touches:function(t){return G.indexOf(t.type)>-1?t:t.touches[0]||t.changedTouches[0]},threshold:function(e){var n=t.settings;return G.indexOf(e.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,e.Transition.enable(),this},disable:function(){return a=!0,e.Transition.disable(),this}};return n.on("build.after",(function(){e.Html.root.classList.add(t.settings.classes.swipeable)})),n.on("destroy",(function(){c.unbindSwipeStart(),c.unbindSwipeMove(),c.unbindSwipeEnd(),i.destroy()})),c},Images:function(t,e,n){var i=new R,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Anchors:function(t,e,n){var i=new R,r=!1,s=!1,o={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){s&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(s=!0,!r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1;r=!0}return this},attach:function(){if(s=!1,r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0;r=!1}return this}};return b(o,"items",{get:function(){return o._a}}),n.on("swipe.move",(function(){o.detach()})),n.on("swipe.end",(function(){e.Transition.after((function(){o.attach()}))})),n.on("destroy",(function(){o.attach(),o.unbind(),i.destroy()})),o},Controls:function(t,e,n){var i=new R,r=!!q&&{passive:!0},s={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=e.Html.root.querySelectorAll(N),this._arrowControls={previous:e.Html.root.querySelectorAll(Y),next:e.Html.root.querySelectorAll(X)},this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,i=e[t.index];i&&i&&(i.classList.add(n.classes.nav.active),H(i).forEach((function(t){t.classList.remove(n.classes.nav.active)})))},removeClass:function(e){var n=e[t.index];n&&n.classList.remove(t.settings.classes.nav.active)},setArrowState:function(){if(!t.settings.rewind){var n=s._arrowControls.next,i=s._arrowControls.previous;this.resetArrowState(n,i),0===t.index&&this.disableArrow(i),t.index===e.Run.length&&this.disableArrow(n)}},resetArrowState:function(){for(var e=t.settings,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(t){j(t).forEach((function(t){t.classList.remove(e.classes.arrow.disabled)}))}))},disableArrow:function(){for(var e=t.settings,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(t){j(t).forEach((function(t){t.classList.add(e.classes.arrow.disabled)}))}))},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on("click",t[e],this.click),i.on("touchstart",t[e],this.click,r)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){q||"touchstart"!==t.type||t.preventDefault();var n=t.currentTarget.getAttribute("data-glide-dir");e.Run.make(e.Direction.resolve(n))}};return b(s,"items",{get:function(){return s._c}}),n.on(["mount.after","move.after"],(function(){s.setActive()})),n.on(["mount.after","run"],(function(){s.setArrowState()})),n.on("destroy",(function(){s.removeBindings(),s.removeActive(),i.destroy()})),s},Keyboard:function(t,e,n){var i=new R,r={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(n){var i=t.settings.perSwipe;"ArrowRight"===n.code&&e.Run.make(e.Direction.resolve("".concat(i,">"))),"ArrowLeft"===n.code&&e.Run.make(e.Direction.resolve("".concat(i,"<")))}};return n.on(["destroy","update"],(function(){r.unbind()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Autoplay:function(t,e,n){var i=new R,r={mount:function(){this.enable(),this.start(),t.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var i=this;this._e&&(this.enable(),t.settings.autoplay&&g(this._i)&&(this._i=setInterval((function(){i.stop(),e.Run.make(">"),i.start(),n.emit("autoplay")}),this.time)))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;i.on("mouseover",e.Html.root,(function(){t._e&&t.stop()})),i.on("mouseout",e.Html.root,(function(){t._e&&t.start()}))},unbind:function(){i.off(["mouseover","mouseout"],e.Html.root)}};return b(r,"time",{get:function(){return h(e.Html.slides[t.index].getAttribute("data-glide-autoplay")||t.settings.autoplay)}}),n.on(["destroy","update"],(function(){r.unbind()})),n.on(["run.before","swipe.start","update"],(function(){r.stop()})),n.on(["pause","destroy"],(function(){r.disable(),r.stop()})),n.on(["run.after","swipe.end"],(function(){r.start()})),n.on(["play"],(function(){r.enable(),r.start()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Breakpoints:function(t,e,n){var i=new R,r=t.settings,s=K(r.breakpoints),o=Object.assign({},r),a={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: ".concat(e,"px)")).matches)return t[e];return o}};return Object.assign(r,a.match(s)),i.on("resize",window,O((function(){t.settings=w(r,a.match(s))}),t.settings.throttle)),n.on("update",(function(){s=K(s),o=Object.assign({},r)})),n.on("destroy",(function(){i.off("resize",window)})),a}},$=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(n,t);var e=c(n);function n(){return r(this,n),e.apply(this,arguments)}return o(n,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l(a(n.prototype),"mount",this).call(this,Object.assign({},Q,t))}}]),n}(k);const J=window.jQuery;var U=n.n(J);new class{constructor(){this.menu=document.querySelector(".site-header__menu"),this.openButton=document.querySelector(".site-header__menu-trigger"),this.events()}events(){this.openButton.addEventListener("click",(()=>this.openMenu()))}openMenu(){this.openButton.classList.toggle("fa-bars"),this.openButton.classList.toggle("fa-window-close"),this.menu.classList.toggle("site-header__menu--active")}},new class{constructor(){if(document.querySelector(".hero-slider")){const t=document.querySelectorAll(".hero-slider__slide").length;let e="";for(let n=0;n<t;n++)e+=`<button class="slider__bullet glide__bullet" data-glide-dir="=${n}"></button>`;document.querySelector(".glide__bullets").insertAdjacentHTML("beforeend",e),new $(".hero-slider",{type:"carousel",perView:1,autoplay:3e3}).mount()}}},new class{constructor(){this.resultsDiv=U()("#search-overlay__results"),this.openButton=U()(".js-search-trigger"),this.closeButton=U()(".search-overlay__close"),this.searchOverlay=U()(".search-overlay"),this.events(),this.isOverlayOpen=!1,this.isSpinnerVisible=!1,this.previousValue,this.typingTimer}events(){this.openButton.on("click",this.openOverlay.bind(this)),this.closeButton.on("click",this.closeOverlay.bind(this)),U()(document).on("keyup",this.keyPressDispatcher.bind(this)),this.searchField.on("keydown",this.typingLogic.bind(this))}typingLogic(){this.searchField.val()!=this.previousValue?(clearTimeout(this.typingTimer),this.searchField.val()&&(this.isSpinnerVisible||(this.resultsDiv.html('<div class="spinner-loader"></div>'),this.isSpinnerVisible=!0),this.typingTimer=setTimeout(this.getResults.bind(this),2e3))):(this.resultsDiv.html(""),this.isSpinnerVisible=!1),this.previousValue=this.searchField.val()}getResults(){this.resultsDiv.html("Imagine real serach results here..."),this.isSpinnerVisible=!1}keyPressDispatcher(t){27==t.keyCode&&this.closeOverlay()}openOverlay(){this.searchOverlay.addClass("search-overlay--active"),U()("body").addClass("body-no-scroll")}closeOverlay(){this.searchOverlay.removeClass("search-overlay--active"),U()("body").removeClass("body-no-scroll")}}}},n={};function i(t){var r=n[t];if(void 0!==r)return r.exports;var s=n[t]={exports:{}};return e[t](s,s.exports,i),s.exports}i.m=e,t=[],i.O=(e,n,r,s)=>{if(!n){var o=1/0;for(l=0;l<t.length;l++){for(var[n,r,s]=t[l],a=!0,u=0;u<n.length;u++)(!1&s||o>=s)&&Object.keys(i.O).every((t=>i.O[t](n[u])))?n.splice(u--,1):(a=!1,s<o&&(o=s));if(a){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[n,r,s]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={57:0,350:0};i.O.j=e=>0===t[e];var e=(e,n)=>{var r,s,[o,a,u]=n,c=0;if(o.some((e=>0!==t[e]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(u)var l=u(i)}for(e&&e(n);c<o.length;c++)s=o[c],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(l)},n=globalThis.webpackChunkfictional_university_theme=globalThis.webpackChunkfictional_university_theme||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var r=i.O(void 0,[350],(()=>i(63)));r=i.O(r)})();