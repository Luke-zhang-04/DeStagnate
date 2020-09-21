!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createRef=void 0,t.createRef=()=>({current:null}),t.default=t.createRef},function(e,t,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports createElement function for DOM manipulation
 */Object.defineProperty(t,"__esModule",{value:!0}),t.createElement=void 0;const i=n(5);function o(e,t,n,...o){let r=n;if(n&&o&&(r=n instanceof Array?[...i.unpackChildren(n),...i.unpackChildren(o)]:[n,...i.unpackChildren(o)]),"string"==typeof e){const n=document.createElement(e);return i.bindProps(n,t),i.bindChildren(n,r),n}return"function"==typeof e?e(t,r):Error("tagNameOrComponent is of invalid type.")}t.createElement=o,t.default=o},function(e,t,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports createElementNS createElement for namespaced elements
 */Object.defineProperty(t,"__esModule",{value:!0}),t.createElementNS=void 0;const i=n(5);t.createElementNS=(e,t,n,o,...r)=>{const s=document.createElementNS(e,t);i.bindProps(s,n,!0);let a=o;return o&&r&&(a="object"==typeof o&&o instanceof Array?[...i.unpackChildren(o),...i.unpackChildren(r)]:[o,...i.unpackChildren(r)]),i.bindChildren(s,a),s},t.default=t.createElementNS},function(e,t,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports DeStagnate main destagnate class
 * @file main file for destagnate
 * @preserve
 */Object.defineProperty(t,"__esModule",{value:!0}),t.Component=t.createRef=t.createElementNS=t.createElement=void 0;const i=n(0),o=n(4),r=n(1),s=n(2);var a=n(1);Object.defineProperty(t,"createElement",{enumerable:!0,get:function(){return a.createElement}});var c=n(2);Object.defineProperty(t,"createElementNS",{enumerable:!0,get:function(){return c.createElementNS}});var u=n(0);Object.defineProperty(t,"createRef",{enumerable:!0,get:function(){return u.createRef}});var d=n(4);Object.defineProperty(t,"Component",{enumerable:!0,get:function(){return d.Component}}),t.default={createElement:r.createElement,createElementNS:s.createElementNS,createRef:i.createRef,Component:o.Component}},function(e,t,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports DeStagnate main destagnate class
 * @file DeStagnate component class
 * @preserve
 */var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;const o=i(n(8)),r=i(n(6));class s extends o.default{constructor(e,t,n=!1){super(),this.props=t,this._strict=!0,this._state={},this._didSetInitialState=!1,this._didMount=!1,this.getSnapshotBeforeUpdate=(e,t)=>[e,t],this.useStrict=()=>{this._strict=!0},this.disableStrict=()=>{this._strict=!1},this.forceUpdate=()=>{try{if(this.componentDidUpdate(),void 0===this._parent)throw new Error(`ERROR: code 3. See ${r.default}.`);this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),this._update(this._execRender())}catch(e){return this.componentDidCatch(e),e}},this.setState=e=>{try{if(this.componentWillUpdate(),void 0===this._parent)throw new Error(`ERROR: code 3. See ${r.default}.`);this._strict&&this._checkKeys(e),this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),Object.assign(this._state,e);const t=this.shouldComponentUpdate()?this._execRender():void 0;this._update(t)}catch(e){return this.componentDidCatch(e),e}},this.mountComponent=e=>{try{if(void 0!==e&&(this.parent=e),void 0===this._parent)throw new Error(`ERROR: code 3. See ${r.default}.`);const t=this.render();if(this._didSetInitialState=!0,this.componentWillMount(),null===t)throw new Error(`ERROR: code 5. See ${r.default}.`);return this.bindEventListeners(this._parent),this._didMount=!0,this.componentDidMount(),"object"==typeof t&&t instanceof Array?t.map(e=>this._parent.appendChild(e)):this._parent.appendChild(t)}catch(e){return this.componentDidCatch(e),e}},this.mount=this.mountComponent,this.unmountComponent=()=>{try{if(void 0===this._parent)return void this.componentDidWarn(`WARN: code 4. See ${r.default}.`);this.componentWillUnmount(),this.unbindEventListeners(this._parent),this._removeChildren(),this._didMount=!1}catch(e){this.componentDidCatch(e)}},this.unmount=this.unmountComponent,this._removeChildren=()=>{if(void 0===this._parent)throw new Error(`ERROR: code 3. See ${r.default}.`);for(;this._parent.firstChild;)this._parent.lastChild&&this._parent.removeChild(this._parent.lastChild)},this._execRender=()=>(this._removeChildren(),this.render()),this._checkKeys=e=>{for(const t of Object.keys(e))Object.keys(this.state).includes(t)||this.componentDidWarn(`WARN: code 6. See ${r.default}. Params: ${t}, ${JSON.stringify(Object.keys(this.state))}.`)},this._update=e=>{if("object"==typeof e&&e instanceof Array)for(const t of e)this._parent.appendChild(t);else e&&this._parent.appendChild(e);e&&this.componentDidUpdate()},e&&e.childElementCount>0&&!n&&this._strict&&this.componentDidCatch(new Error(`ERROR: code 1. See ${r.default}. Params: ${e.tagName.toLowerCase()}`)),this._parent=e}get getState(){return this.state}get state(){return this._state}set state(e){this._didSetInitialState&&this._strict?(this.componentDidCatch(new Error(`ERROR: code 2. See ${r.default}.`)),this.componentDidWarn(`ERROR: code 2. See ${r.default}.`),this.setState(e)):(this._state=e,this._didSetInitialState=!0)}get getProps(){return this.props}set parent(e){e&&e.childElementCount>0&&this._strict&&this.componentDidCatch(new Error(`ERROR: code 1. See ${r.default}. Params: ${e.tagName.toLowerCase()}`)),this._parent=e}get parent(){return this._parent}get didMount(){return this._didMount}}t.default=s;t.Component=class extends s{}},function(e,t,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @file share functions and types for createElement and it's variants
 */var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.bindChildren=t.unpackChildren=t.bindProps=void 0;const o=n(3),r=i(n(6));t.bindProps=(e,t,n=!1)=>{if(t)for(const[i,o]of Object.entries(t))"string"==typeof o||"number"==typeof o?"innerHTML"===i?e.innerHTML=o.toString():n?e.setAttributeNS(null,i,o.toString()):e.setAttribute(i,o.toString()):"on"===i.slice(0,2)?"function"==typeof o&&e.addEventListener(i.slice(2).toLowerCase(),o):"ref"===i&&"object"==typeof o&&"current"in o?o.current=e:void 0!==o&&console.warn(`WARN: Code 7. See ${r.default}. Params: ${typeof o}, ${i}`)},t.unpackChildren=e=>{const n=[];for(const i of e)"object"==typeof i&&i instanceof Array?n.push(...t.unpackChildren(i)):n.push(i);return n},t.bindChildren=(e,n)=>{if(null!=n)if(n instanceof Array)for(const i of n)t.bindChildren(e,i);else if("string"==typeof n||"number"==typeof n)e.innerText=n.toString();else if(n instanceof o.Component){if(!n.didMount&&e instanceof window.HTMLElement)return void n.mount(e);if(!(e instanceof window.HTMLElement))throw new Error("ERROR: code 8. See "+r.default);n.parent!==e&&(n.parent=e),n.forceUpdate()}else e.appendChild(n)}},function(e,t,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @file share functions and types for createElement and it's variants
 */Object.defineProperty(t,"__esModule",{value:!0}),t.url=void 0,t.url="https://luke-zhang-04.github.io/DeStagnate/error-codes",t.default=t.url},function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(3));let a="x";class c extends s.default.Component{constructor(){super(...arguments),this._squares=[[new u,new u,new u],[new u,new u,new u],[new u,new u,new u]],this._checkForWinner=()=>{for(let e=0;e<3;e++){const t=[0,1,2].map(t=>this._squares[e][t].getState.clicked),n=[0,1,2].map(t=>this._squares[t][e].getState.clicked);if(t[0]===t[1]&&t[1]===t[2]&&t[0])return t[0];if(n[0]===n[1]&&n[1]===n[2]&&n[0])return n[0]}const e=[[this._squares[0][0].getState.clicked,this._squares[1][1].getState.clicked,this._squares[2][2].getState.clicked],[this._squares[0][2].getState.clicked,this._squares[1][1].getState.clicked,this._squares[2][0].getState.clicked]];for(const t of e)if(t[0]===t[1]&&t[1]===t[2]&&t[0])return t[0];return""},this.render=()=>[0,1,2].map(e=>s.createElement("div",{class:"row"},[0,1,2].map(t=>s.createElement("div",{class:"col-4",onClick:()=>{const n=this._squares[e][t];""===(null==n?void 0:n.getState.clicked)&&(null==n||n.setState({clicked:a})),a="x"===a?"o":"x",this._checkForWinner()&&alert(`Player ${this._checkForWinner()} has won the game!`)}},this._squares[e][t]))))}}class u extends s.default.Component{constructor(){super(),this.render=()=>s.createElement("div",{class:"tictactoe-square"},this.state.clicked),this.state={clicked:""}}}const d=document.getElementById("nested"),l=()=>{if(d){const e=new c(d),t=document.getElementById("nested-reset-btn");t&&t.addEventListener("click",()=>{e.unmount(),l()}),e.mount()}};l()},function(e,t,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports Events
 * @package
 */var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(9)),r=i(n(10));class s extends r.default{constructor(){super(...arguments),this.onFocus=void 0,this.onBlur=void 0,this.onFocusIn=void 0,this.onFocusOut=void 0,this.onAnimationStart=void 0,this.onAnimationCancel=void 0,this.onAnimationEnd=void 0,this.onAnimationIteration=void 0,this.onTransitionStart=void 0,this.onTransitionCancel=void 0,this.onTransitionEnd=void 0,this.onTransitionRun=void 0,this.onAuxClick=void 0,this.onClick=void 0,this.onDblClick=void 0,this.onMouseDown=void 0,this.onMouseEnter=void 0,this.onMouseLeave=void 0,this.onMouseMove=void 0,this.onMouseOver=void 0,this.onMouseOut=void 0,this.onMouseUp=void 0,this.bindEventListeners=e=>{this._eventListener(e.addEventListener)},this.unbindEventListeners=e=>{this._eventListener(e.removeEventListener)},this._eventListener=e=>{for(const[t,n]of o.default(this._events()))void 0!==n&&e(t,n)},this._events=()=>({focus:this.onFocus,blur:this.onBlur,focusin:this.onFocusIn,focusout:this.onFocusOut,animationstart:this.onAnimationStart,animationcancel:this.onAnimationCancel,animationend:this.onAnimationEnd,animationiteration:this.onAnimationIteration,transitionstart:this.onTransitionStart,transitioncancel:this.onTransitionCancel,transitionend:this.onTransitionEnd,transitionrun:this.onTransitionRun,auxclick:this.onAuxClick,click:this.onClick,dblclick:this.onDblClick,mousedown:this.onMouseDown,mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave,mousemove:this.onMouseMove,mouseover:this.onMouseOver,mouseout:this.onMouseOut,mouseup:this.onMouseUp})}}t.default=s},function(e,t,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @package
 */Object.defineProperty(t,"__esModule",{value:!0}),t.eventsList=void 0,t.eventsList=e=>{const t=[];for(const n of Object.keys(e))t.push([n,e[n]]);return t},t.default=t.eventsList},function(e,t,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports Preset - base for a component
 * @package
 */var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(n(1)),r=i(n(2)),s=i(n(0));class a{constructor(){this.createElement=o.default,this.createElementNS=r.default,this.createRef=s.default,this.componentDidCatch=e=>console.error(e),this.componentDidMount=()=>{},this.componentDidUpdate=()=>{},this.componentDidWarn=e=>console.warn(e),this.componentWillMount=()=>{},this.componentWillUnmount=()=>{},this.componentWillUpdate=()=>{},this.shouldComponentUpdate=()=>!0,this.render=()=>null}}t.default=a,a.createElement=o.default,a.createElementNS=r.default,a.createRef=s.default}])}));