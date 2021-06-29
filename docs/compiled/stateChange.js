!function(){"use strict";
/**
   * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 - 2021 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 2.1.0
   */const t=(e,n,r=3,o=10)=>{if(0===r)return e===n;if(typeof e!=typeof n)return!1;if(e instanceof Array&&n instanceof Array){if(e.length!==n.length)return!1;if(e.length>o||n.length>o)return e===n;for(let i=0;i<e.length;i++)if(!t(e[i],n[i],r-1,o))return!1;return!0}if(e instanceof Object&&n instanceof Object){if(!t(Object.keys(e),Object.keys(n),r-1,o))return!1;for(const i of Object.keys(e))if(!t(e[i],n[i],r-1,o))return!1;return!0}return e===n},e=["onFocus","onBlur","onFocusIn","onFocusOut","onAnimationStart","onAnimationCancel","onAnimationEnd","onAnimationIteration","onTransitionStart","onTransitionCancel","onTransitionEnd","onTransitionRun","onAuxClick","onClick","onDblClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOver","onMouseOut","onMouseUp","onWheel"],n=["onLoad","onOnline","onOffline","onResize","onScroll","onKeyDown","onKeyPress","onKeyUp"],r="https://luke-zhang-04.github.io/DeStagnate/error-codes",o=(t,e,n=!1)=>{if(e)for(const[r,o]of Object.entries(e))"string"==typeof o||"number"==typeof o?"innerHTML"===r?t.innerHTML=o.toString():n?t.setAttributeNS(null,r,o.toString()):t.setAttribute(r,o.toString()):"on"===r.slice(0,2)?"function"==typeof o&&t.addEventListener(r.slice(2).toLowerCase(),o):"ref"===r&&"object"==typeof o&&"current"in o?o.current=t:void 0!==o&&console.warn(typeof o+" is not a valid DeStagnate child")},i=(t,e)=>{if(null!=e)if(e instanceof Array)e.forEach((e=>i(t,e)));else if("string"==typeof e||"number"==typeof e)t.appendChild(document.createTextNode(e.toString()));else if(e instanceof Node)t.appendChild(e);else{if(!e.didMount&&t instanceof window.HTMLElement)return void e.mount(t);if(!(t instanceof window.HTMLElement))throw new Error(`ERROR: code 3. See ${r}`);e.parent!==t&&(e.parent=t),e.forceUpdate()}};function s(t,e,...n){if("string"==typeof t){const r=document.createElement(t);return o(r,e),i(r,n),r}return"function"==typeof t?t(e,n):Error("tagNameOrComponent is of invalid type.")}const a=(t,e,n,...r)=>{const s=document.createElementNS(t,e);return o(s,n,!0),i(s,r),s},h=()=>({current:null}),c="Refusing to update unmounted component";class d{constructor(t,e){if(this.props=e,this.createElement=s,this.createElementNS=a,this.createRef=h,this._state={},this._didSetInitialState=!1,this._didMount=!1,this.mount=this.mountComponent,this.unmount=this.unmountComponent,null===t)throw new Error("Parent is null, expected HTMLElement | undefined.");this._parent=t}get getState(){return this.state}get state(){return this._state}set state(t){this._didSetInitialState?(this.componentDidCatch(new Error(`ERROR: code 1. See ${r}.`)),this.setState(t)):(this._state=t,this._didSetInitialState=!0)}get getProps(){return this.props}set parent(t){this._parent=t}get parent(){return this._parent}get didMount(){return this._didMount}get prevState(){return this._prevState}forceUpdate(){var t,e;try{if(!this._didMount)throw new Error(c);if(null===(t=this.componentDidUpdate)||void 0===t||t.call(this),void 0===this._parent)throw new Error(`ERROR: code 2. See ${r}.`);null===(e=this.getSnapshotBeforeUpdate)||void 0===e||e.call(this,Object.assign({},this.props),Object.assign({},this.state)),this._update(this._execRender())}catch(t){return this._handleError(t)}}stateDidChange(e,n=3,r=15){var o;if(void 0===e)return!t(this._state,this._prevState,n,r);const i={},s={};for(const t of e)i[t]=this._state[t],s[t]=null===(o=this._prevState)||void 0===o?void 0:o[t];return!t(i,s,n,r)}setState(t,e=!0){var n,o;try{if(!this._didMount)throw new Error(c);if(null===(n=this.componentWillUpdate)||void 0===n||n.call(this),void 0===this._parent)throw new Error(`ERROR: code 2. See ${r}.`);this._prevState=Object.assign({},this._state),null===(o=this.getSnapshotBeforeUpdate)||void 0===o||o.call(this,Object.assign({},this.props),Object.assign({},this.state)),Object.assign(this._state,t);const i=e&&this.shouldComponentUpdate()?this._execRender():void 0;this._update(i)}catch(t){return this._handleError(t)}}mountComponent(t){var e,n;try{if(void 0!==t&&(this.parent=t),void 0===this._parent)throw new Error(`ERROR: code 2. See ${r}.`);const o=this.render();if(this._didSetInitialState=!0,null===(e=this.componentWillMount)||void 0===e||e.call(this),null===o)throw new Error(`ERROR: code 3. See ${r}.`);if(this._bindEventListeners(this._parent),this._didMount=!0,null===(n=this.componentDidMount)||void 0===n||n.call(this),o instanceof Array){const t=document.createDocumentFragment();return o.forEach((e=>t.appendChild(e))),this._parent.appendChild(t)}return this._parent.appendChild(o)}catch(t){return this._handleError(t)}}unmountComponent(){var t;try{if(void 0===this._parent)return;null===(t=this.componentWillUnmount)||void 0===t||t.call(this),this._unbindEventListeners(this._parent),this._removeChildren(),this._didMount=!1}catch(t){this._handleError(t)}}componentDidCatch(t){console.error(t)}shouldComponentUpdate(){return!0}_removeChildren(){if(void 0===this._parent)throw new Error(`ERROR: code 2. See ${r}.`);for(;this._parent.firstChild;)this._parent.lastChild&&this._parent.removeChild(this._parent.lastChild)}_execRender(){return this._removeChildren(),this.render()}_update(t){var e,n,r;if(t instanceof Array)for(const n of t)null===(e=this._parent)||void 0===e||e.appendChild(n);else t&&(null===(n=this._parent)||void 0===n||n.appendChild(t));t&&(null===(r=this.componentDidUpdate)||void 0===r||r.call(this))}_handleError(t){if(t instanceof Error)return this.componentDidCatch(t),t;const e=new Error(String(t));return this.componentDidCatch(e),e}_bindEventListeners(t){this._eventListener(t.addEventListener),this._eventListener(window.addEventListener,n)}_unbindEventListeners(t){this._eventListener(t.removeEventListener),this._eventListener(window.removeEventListener,n)}_eventListener(t,n=e){for(const e of n){const n=e.slice(2).toLowerCase(),r=this[e];void 0!==r&&r instanceof Function&&t(n,r)}}}d.createElement=s,d.createElementNS=a,d.createRef=h;var l=Object.freeze({__proto__:null,Component:d,createRef:h,createElement:s,createElementNS:a,Fragment:(t,...e)=>{const n=document.createDocumentFragment();return i(n,e),n}});const u=[0,0,0,1,1,1,2,2,2,3,3,3];class p extends l.Component{constructor(t){super(t),this.shouldComponentUpdate=()=>{const t=this.stateDidChange(["number"]);return console.table({shouldUpdate:t}),t},this.componentDidMount=()=>{setInterval((()=>{this.setState({count:this.state.count+1,number:u[(this.state.count+1)%u.length]})}),1e3)},this.render=()=>l.createElement("div",null,l.createElement("p",null,"Number:"),l.createElement("p",null,this.state.number)),this.state={number:0,count:0}}}new p(document.querySelector("#state-change")).mount()}();
