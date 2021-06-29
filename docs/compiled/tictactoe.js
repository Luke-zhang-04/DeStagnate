!function(){"use strict";
/**
   * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 - 2021 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 2.1.0
   */const t=(e,n,r=3,i=10)=>{if(0===r)return e===n;if(typeof e!=typeof n)return!1;if(e instanceof Array&&n instanceof Array){if(e.length!==n.length)return!1;if(e.length>i||n.length>i)return e===n;for(let o=0;o<e.length;o++)if(!t(e[o],n[o],r-1,i))return!1;return!0}if(e instanceof Object&&n instanceof Object){if(!t(Object.keys(e),Object.keys(n),r-1,i))return!1;for(const o of Object.keys(e))if(!t(e[o],n[o],r-1,i))return!1;return!0}return e===n},e=["onFocus","onBlur","onFocusIn","onFocusOut","onAnimationStart","onAnimationCancel","onAnimationEnd","onAnimationIteration","onTransitionStart","onTransitionCancel","onTransitionEnd","onTransitionRun","onAuxClick","onClick","onDblClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOver","onMouseOut","onMouseUp","onWheel"],n=["onLoad","onOnline","onOffline","onResize","onScroll","onKeyDown","onKeyPress","onKeyUp"],r="https://luke-zhang-04.github.io/DeStagnate/error-codes",i=(t,e,n=!1)=>{if(e)for(const[r,i]of Object.entries(e))"string"==typeof i||"number"==typeof i?"innerHTML"===r?t.innerHTML=i.toString():n?t.setAttributeNS(null,r,i.toString()):t.setAttribute(r,i.toString()):"on"===r.slice(0,2)?"function"==typeof i&&t.addEventListener(r.slice(2).toLowerCase(),i):"ref"===r&&"object"==typeof i&&"current"in i?i.current=t:void 0!==i&&console.warn(typeof i+" is not a valid DeStagnate child")},o=(t,e)=>{null!=e&&(e instanceof Array?e.forEach((e=>o(t,e))):"string"==typeof e||"number"==typeof e?t.appendChild(document.createTextNode(e.toString())):e instanceof Node?t.appendChild(e):((t,e)=>{if(!(t instanceof HTMLElement))throw new Error(`ERROR: code 3. See ${r}`);e.didMount?(e.parent!==t&&(e.parent=t),e.forceUpdate()):e.mount(t)})(t,e))};function s(t,e,...n){if("string"==typeof t){const r=document.createElement(t);return i(r,e),o(r,n),r}return"function"==typeof t?t(e,n):Error("tagNameOrComponent is of invalid type.")}const a=(t,e,n,...r)=>{const s=document.createElementNS(t,e);return i(s,n,!0),o(s,r),s},c=()=>({current:null}),h="Refusing to update unmounted component";var d=Object.freeze({__proto__:null,Component:class{constructor(t,e){if(this.props=e,this.createElement=s,this.createElementNS=a,this.createRef=c,this._state={},this._didSetInitialState=!1,this._didMount=!1,this.mount=this.mountComponent,this.unmount=this.unmountComponent,null===t)throw new Error("Parent is null, expected HTMLElement | undefined.");this._parent=t}get getState(){return this.state}get state(){return this._state}set state(t){this._didSetInitialState?(this.componentDidCatch(new Error(`ERROR: code 1. See ${r}.`)),this.setState(t)):(this._state=t,this._didSetInitialState=!0)}get getProps(){return this.props}set parent(t){this._parent=t}get parent(){return this._parent}get didMount(){return this._didMount}get prevState(){return this._prevState}forceUpdate(){var t,e;try{if(!this._didMount)throw new Error(h);if(null===(t=this.componentDidUpdate)||void 0===t||t.call(this),void 0===this._parent)throw new Error(`ERROR: code 2. See ${r}.`);null===(e=this.getSnapshotBeforeUpdate)||void 0===e||e.call(this,Object.assign({},this.props),Object.assign({},this.state)),this._update(this._execRender())}catch(t){return this._handleError(t)}}stateDidChange(e,n=3,r=15){var i;if(void 0===e)return!t(this._state,this._prevState,n,r);const o={},s={};for(const t of e)o[t]=this._state[t],s[t]=null===(i=this._prevState)||void 0===i?void 0:i[t];return!t(o,s,n,r)}setState(t,e=!0){var n,i;try{if(!this._didMount)throw new Error(h);if(null===(n=this.componentWillUpdate)||void 0===n||n.call(this),void 0===this._parent)throw new Error(`ERROR: code 2. See ${r}.`);this._prevState=Object.assign({},this._state),null===(i=this.getSnapshotBeforeUpdate)||void 0===i||i.call(this,Object.assign({},this.props),Object.assign({},this.state)),Object.assign(this._state,t);const o=e&&this.shouldComponentUpdate()?this._execRender():void 0;this._update(o)}catch(t){return this._handleError(t)}}mountComponent(t){var e,n;try{if(void 0!==t&&(this.parent=t),void 0===this._parent)throw new Error(`ERROR: code 2. See ${r}.`);const i=this.render();if(this._didSetInitialState=!0,null===(e=this.componentWillMount)||void 0===e||e.call(this),null===i)throw new Error(`ERROR: code 3. See ${r}.`);if(this._bindEventListeners(this._parent),this._didMount=!0,null===(n=this.componentDidMount)||void 0===n||n.call(this),i instanceof Array){const t=document.createDocumentFragment();return i.forEach((e=>t.appendChild(e))),this._parent.appendChild(t)}return this._parent.appendChild(i)}catch(t){return this._handleError(t)}}unmountComponent(){var t;try{if(void 0===this._parent)return;null===(t=this.componentWillUnmount)||void 0===t||t.call(this),this._unbindEventListeners(this._parent),this._removeChildren(),this._didMount=!1}catch(t){this._handleError(t)}}componentDidCatch(t){console.error(t)}shouldComponentUpdate(){return!0}_removeChildren(){if(void 0===this._parent)throw new Error(`ERROR: code 2. See ${r}.`);for(;this._parent.firstChild;)this._parent.lastChild&&this._parent.removeChild(this._parent.lastChild)}_execRender(){return this._removeChildren(),this.render()}_update(t){var e,n,r;if(t instanceof Array)for(const n of t)null===(e=this._parent)||void 0===e||e.appendChild(n);else t&&(null===(n=this._parent)||void 0===n||n.appendChild(t));t&&(null===(r=this.componentDidUpdate)||void 0===r||r.call(this))}_handleError(t){if(t instanceof Error)return this.componentDidCatch(t),t;const e=new Error(String(t));return this.componentDidCatch(e),e}_bindEventListeners(t){this._eventListener(t.addEventListener),this._eventListener(window.addEventListener,n)}_unbindEventListeners(t){this._eventListener(t.removeEventListener),this._eventListener(window.removeEventListener,n)}_eventListener(t,n=e){for(const e of n){const n=e.slice(2).toLowerCase(),r=this[e];void 0!==r&&r instanceof Function&&t(n,r)}}},createRef:c,createElement:s,createElementNS:a,Fragment:(t,...e)=>{const n=document.createDocumentFragment();return o(n,e),n}});let l="x";class u extends d.Component{constructor(){super(...arguments),this._squares=[[new p,new p,new p],[new p,new p,new p],[new p,new p,new p]],this._checkForWinner=()=>{for(let t=0;t<3;t++){const e=[0,1,2].map((e=>this._squares[t][e].getState.clicked)),n=[0,1,2].map((e=>this._squares[e][t].getState.clicked));if(e[0]===e[1]&&e[1]===e[2]&&e[0])return e[0];if(n[0]===n[1]&&n[1]===n[2]&&n[0])return n[0]}const t=[[this._squares[0][0].getState.clicked,this._squares[1][1].getState.clicked,this._squares[2][2].getState.clicked],[this._squares[0][2].getState.clicked,this._squares[1][1].getState.clicked,this._squares[2][0].getState.clicked]];for(const e of t)if(e[0]===e[1]&&e[1]===e[2]&&e[0])return e[0];return""},this.render=()=>[0,1,2].map((t=>s("div",{class:"row"},[0,1,2].map((e=>s("div",{class:"col-4",onClick:()=>{const n=this._squares[t][e];""===(null==n?void 0:n.getState.clicked)&&(null==n||n.setState({clicked:l})),l="x"===l?"o":"x",this._checkForWinner()&&alert(`Player ${this._checkForWinner()} has won the game!`)}},this._squares[t][e]))))))}}class p extends d.Component{constructor(){super(),this.render=()=>s("div",{class:"tictactoe-square"},this.state.clicked),this.state={clicked:""}}}const f=document.getElementById("nested"),_=()=>{if(f){const t=new u(f),e=document.getElementById("nested-reset-btn");e&&e.addEventListener("click",(()=>{t.unmount(),_()})),t.mount()}};_()}();
