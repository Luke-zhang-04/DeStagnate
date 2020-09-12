!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports DeStagnate main destagnate class
 * @file main file for destagnate
 * @preserve
 */var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Component=e.createRef=e.createElementNS=e.createElement=e.createDSComponent=void 0;const o=i(n(1)),s=i(n(8)),r=i(n(2)),a=i(n(3)),d=i(n(6));e.createDSComponent=r.default,e.createElement=a.default,e.createElementNS=d.default,e.createRef=o.default,e.Component=s.default,e.default=s.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createRef=void 0,e.createRef=()=>({current:null}),e.default=e.createRef},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createDSComponent add nested component for DeStagnate components
 */Object.defineProperty(e,"__esModule",{value:!0});e.default=(t,e,n)=>{const i=document.createElement("div");i.classList.add("DeStagnate-component-parent");const o=new t(i,e);return o.mount(),n&&(n.current=o),i}},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createElement function for DOM manipulation
 */Object.defineProperty(e,"__esModule",{value:!0}),e.createElement=void 0;const i=n(4);function o(t,e,n,...o){let s=n;if(n&&o&&(s=n instanceof Array?[...i.unpackChildren(n),...i.unpackChildren(o)]:[n,...i.unpackChildren(o)]),"string"==typeof t){const n=document.createElement(t);return i.bindProps(n,e),i.bindChildren(n,s),n}return"function"==typeof t?t(e,s):Error("tagNameOrComponent is of invalid type.")}e.createElement=o,e.default=o},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @file share functions and types for createElement and it's variants
 */var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.bindChildren=e.unpackChildren=e.bindProps=void 0;const o=i(n(0)),s=i(n(5));e.bindProps=(t,e,n=!1)=>{if(e)for(const[i,o]of Object.entries(e))"string"==typeof o||"number"==typeof o?"innerHTML"===i?t.innerHTML=o.toString():n?t.setAttributeNS(null,i,o.toString()):t.setAttribute(i,o.toString()):"on"===i.slice(0,2)?"function"==typeof o&&t.addEventListener(i.slice(2).toLowerCase(),o):"ref"===i&&"object"==typeof o&&"current"in o?o.current=t:void 0!==o&&console.warn(`WARN: Code 7. See ${s.default}. Params: ${typeof o}, ${i}`)},e.unpackChildren=t=>{const n=[];for(const i of t)"object"==typeof i&&i instanceof Array?n.push(...e.unpackChildren(i)):n.push(i);return n},e.bindChildren=(t,n)=>{if(null!=n)if(n instanceof Array)for(const i of n)e.bindChildren(t,i);else if("string"==typeof n||"number"==typeof n)t.innerText=n.toString();else if(n instanceof o.default){if(!n.didMount&&t instanceof window.HTMLElement)return void n.mount(t);if(!(t instanceof window.HTMLElement))throw new Error("ERROR: code 8. See "+s.default);n.parent!==t&&(n.parent=t),n.forceUpdate()}else t.appendChild(n)}},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @file share functions and types for createElement and it's variants
 */Object.defineProperty(e,"__esModule",{value:!0}),e.url=void 0,e.url="https://luke-zhang-04.github.io/DeStagnate/error-codes",e.default=e.url},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createElementNS createElement for namespaced elements
 */Object.defineProperty(e,"__esModule",{value:!0}),e.createElementNS=void 0;const i=n(4);e.createElementNS=(t,e,n,o,...s)=>{const r=document.createElementNS(t,e);i.bindProps(r,n,!0);let a=o;return o&&s&&(a="object"==typeof o&&o instanceof Array?[...i.unpackChildren(o),...i.unpackChildren(s)]:[o,...i.unpackChildren(s)]),i.bindChildren(r,a),r},e.default=e.createElementNS},function(t,e,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0});const r=s(n(0));class a extends r.default{constructor(t,e){super(t,e),this.direction=2.5,this.componentDidMount=()=>this.componentDidUpdate(),this.componentDidUpdate=()=>{(this.state.xcord<0||this.state.xcord>this.props.width)&&(this.direction*=-1),setTimeout(()=>this.setState({xcord:this.state.xcord+this.direction}),10)},this.render=()=>r.createElementNS("http://www.w3.org/2000/svg","svg",{width:2*this.props.width,height:this.props.width,viewBox:`0 0 ${2*this.props.width} ${this.props.width}`},r.createElementNS("http://www.w3.org/2000/svg","rect",{width:this.props.width,height:this.props.width,fill:this.direction>0?"#0D6EFD":"#28A745",x:this.state.xcord})),this.state={xcord:0}}}new a(document.querySelector("#SVG"),{width:250}).mount()},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports DeStagnate main destagnate class
 * @file DeStagnate component class
 * @preserve
 */var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Component=void 0;const o=i(n(9)),s=i(n(5));class r extends o.default{constructor(t,e,n=!1){super(),this.props=e,this._strict=!0,this._state={},this._didSetInitialState=!1,this._didMount=!1,this.getSnapshotBeforeUpdate=(t,e)=>[t,e],this.useStrict=()=>{this._strict=!0},this.disableStrict=()=>{this._strict=!1},this.forceUpdate=()=>{try{if(this.componentDidUpdate(),void 0===this._parent)throw new Error(`ERROR: code 3. See ${s.default}.`);this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),this._update(this._execRender())}catch(t){return this.componentDidCatch(t),t}},this.setState=t=>{try{if(this.componentWillUpdate(),void 0===this._parent)throw new Error(`ERROR: code 3. See ${s.default}.`);this._strict&&this._checkKeys(t),this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),Object.assign(this._state,t);const e=this.shouldComponentUpdate()?this._execRender():void 0;this._update(e)}catch(t){return this.componentDidCatch(t),t}},this.mountComponent=t=>{try{if(void 0!==t&&(this.parent=t),void 0===this._parent)throw new Error(`ERROR: code 3. See ${s.default}.`);const e=this.render();if(this._didSetInitialState=!0,this.componentWillMount(),null===e)throw new Error(`ERROR: code 5. See ${s.default}.`);return this.bindEventListeners(this._parent),this._didMount=!0,this.componentDidMount(),"object"==typeof e&&e instanceof Array?e.map(t=>this._parent.appendChild(t)):this._parent.appendChild(e)}catch(t){return this.componentDidCatch(t),t}},this.mount=this.mountComponent,this.unmountComponent=()=>{try{if(void 0===this._parent)return void this.componentDidWarn(`WARN: code 4. See ${s.default}.`);this.componentWillUnmount(),this.unbindEventListeners(this._parent),this._removeChildren(),this._didMount=!1}catch(t){this.componentDidCatch(t)}},this.unmount=this.unmountComponent,this._removeChildren=()=>{if(void 0===this._parent)throw new Error(`ERROR: code 3. See ${s.default}.`);for(;this._parent.firstChild;)this._parent.lastChild&&this._parent.removeChild(this._parent.lastChild)},this._execRender=()=>(this._removeChildren(),this.render()),this._checkKeys=t=>{for(const e of Object.keys(t))Object.keys(this.state).includes(e)||this.componentDidWarn(`WARN: code 6. See ${s.default}. Params: ${e}, ${JSON.stringify(Object.keys(this.state))}.`)},this._update=t=>{if("object"==typeof t&&t instanceof Array)for(const e of t)this._parent.appendChild(e);else t&&this._parent.appendChild(t);t&&this.componentDidUpdate()},t&&t.childElementCount>0&&!n&&this._strict&&this.componentDidCatch(new Error(`ERROR: code 1. See ${s.default}. Params: ${t.tagName.toLowerCase()}`)),this._parent=t}get getState(){return this.state}get state(){return this._state}set state(t){this._didSetInitialState&&this._strict?(this.componentDidCatch(new Error(`ERROR: code 2. See ${s.default}.`)),this.componentDidWarn(`ERROR: code 2. See ${s.default}.`),this.setState(t)):(this._state=t,this._didSetInitialState=!0)}get getProps(){return this.props}set parent(t){t&&t.childElementCount>0&&this._strict&&this.componentDidCatch(new Error(`ERROR: code 1. See ${s.default}. Params: ${t.tagName.toLowerCase()}`)),this._parent=t}get parent(){return this._parent}get didMount(){return this._didMount}}e.default=r;e.Component=class extends r{}},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports Events
 * @package
 */var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=i(n(10)),s=i(n(11));class r extends s.default{constructor(){super(...arguments),this.onFocus=void 0,this.onBlur=void 0,this.onFocusIn=void 0,this.onFocusOut=void 0,this.onAnimationStart=void 0,this.onAnimationCancel=void 0,this.onAnimationEnd=void 0,this.onAnimationIteration=void 0,this.onTransitionStart=void 0,this.onTransitionCancel=void 0,this.onTransitionEnd=void 0,this.onTransitionRun=void 0,this.onAuxClick=void 0,this.onClick=void 0,this.onDblClick=void 0,this.onMouseDown=void 0,this.onMouseEnter=void 0,this.onMouseLeave=void 0,this.onMouseMove=void 0,this.onMouseOver=void 0,this.onMouseOut=void 0,this.onMouseUp=void 0,this.bindEventListeners=t=>{this._eventListener(t.addEventListener)},this.unbindEventListeners=t=>{this._eventListener(t.removeEventListener)},this._eventListener=t=>{for(const[e,n]of o.default(this._events()))void 0!==n&&t(e,n)},this._events=()=>({focus:this.onFocus,blur:this.onBlur,focusin:this.onFocusIn,focusout:this.onFocusOut,animationstart:this.onAnimationStart,animationcancel:this.onAnimationCancel,animationend:this.onAnimationEnd,animationiteration:this.onAnimationIteration,transitionstart:this.onTransitionStart,transitioncancel:this.onTransitionCancel,transitionend:this.onTransitionEnd,transitionrun:this.onTransitionRun,auxclick:this.onAuxClick,click:this.onClick,dblclick:this.onDblClick,mousedown:this.onMouseDown,mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave,mousemove:this.onMouseMove,mouseover:this.onMouseOver,mouseout:this.onMouseOut,mouseup:this.onMouseUp})}}e.default=r},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.1
 * @package
 */Object.defineProperty(e,"__esModule",{value:!0}),e.eventsList=void 0,e.eventsList=t=>{const e=[];for(const n of Object.keys(t))e.push([n,t[n]]);return e},e.default=e.eventsList},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports Preset - base for a component
 * @package
 */var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=i(n(2)),s=i(n(3)),r=i(n(6)),a=i(n(1));class d{constructor(){this.createDSComponent=o.default,this.createElement=s.default,this.createElementNS=r.default,this.createRef=a.default,this.componentDidCatch=t=>console.error(t),this.componentDidMount=()=>{},this.componentDidUpdate=()=>{},this.componentDidWarn=t=>console.warn(t),this.componentWillMount=()=>{},this.componentWillUnmount=()=>{},this.componentWillUpdate=()=>{},this.shouldComponentUpdate=()=>!0,this.render=()=>null}}e.default=d,d.createDSComponent=o.default,d.createElement=s.default,d.createElementNS=r.default,d.createRef=a.default}])}));