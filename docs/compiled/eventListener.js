!function(){"use strict";
/**
   * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 2.0.0
   */const t="https://luke-zhang-04.github.io/DeStagnate/error-codes",e=(t,e,n=!1)=>{if(e)for(const[r,i]of Object.entries(e))"string"==typeof i||"number"==typeof i?"innerHTML"===r?t.innerHTML=i.toString():n?t.setAttributeNS(null,r,i.toString()):t.setAttribute(r,i.toString()):"on"===r.slice(0,2)?"function"==typeof i&&t.addEventListener(r.slice(2).toLowerCase(),i):"ref"===r&&"object"==typeof i&&"current"in i?i.current=t:void 0!==i&&console.warn(typeof i+" is not a valid DeStagnate child")},n=(e,r)=>{if(null!=r)if(r instanceof Array)r.forEach((t=>n(e,t)));else if("string"==typeof r||"number"==typeof r)e.appendChild(document.createTextNode(r.toString()));else if(r instanceof l){if(!r.didMount&&e instanceof window.HTMLElement)return void r.mount(e);if(!(e instanceof window.HTMLElement))throw new Error(`ERROR: code 3. See ${t}`);r.parent!==e&&(r.parent=e),r.forceUpdate()}else e.appendChild(r)};function r(t,r,...i){if("string"==typeof t){const o=document.createElement(t);return e(o,r),n(o,i),o}return"function"==typeof t?t(r,i):Error("tagNameOrComponent is of invalid type.")}const i=(t,r,i,...o)=>{const s=document.createElementNS(t,r);return e(s,i,!0),n(s,o),s},o=()=>({current:null});class s{constructor(){this.createElement=r,this.createElementNS=i,this.createRef=o,this.componentDidCatch=t=>console.error(t),this.shouldComponentUpdate=()=>!0,this.render=()=>null}}s.createElement=r,s.createElementNS=i,s.createRef=o;const a=["onFocus","onBlur","onFocusIn","onFocusOut","onAnimationStart","onAnimationCancel","onAnimationEnd","onAnimationIteration","onTransitionStart","onTransitionCancel","onTransitionEnd","onTransitionRun","onAuxClick","onClick","onDblClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOver","onMouseOut","onMouseUp"];class h extends s{constructor(){super(...arguments),this.bindEventListeners=t=>{this._eventListener(t.addEventListener)},this.unbindEventListeners=t=>{this._eventListener(t.removeEventListener)},this._eventListener=t=>{for(const e of a){const n=e.slice(2).toLowerCase(),r=this[e];void 0!==r&&r instanceof Function&&t(n,r)}}}}const c=(t,e,n=3,r=10)=>{if(0===n)return t===e;if(typeof t!=typeof e)return!1;if(t instanceof Array&&e instanceof Array){if(t.length!==e.length)return!1;if(t.length>r||e.length>r)return t===e;for(let i=0;i<t.length;i++)if(!c(t[i],e[i],n-1,r))return!1;return!0}if(t instanceof Object&&e instanceof Object){if(!c(Object.keys(t),Object.keys(e),n-1,r))return!1;for(const i of Object.keys(t))if(!c(t[i],e[i],n-1,r))return!1;return!0}return t===e};var d={isEqual:c};class l extends h{constructor(e,n){if(super(),this.props=n,this._state={},this._didSetInitialState=!1,this._didMount=!1,this.forceUpdate=()=>{var e;try{if(null===(e=this.componentDidUpdate)||void 0===e||e.call(this),void 0===this._parent)throw new Error(`ERROR: code 2. See ${t}.`);this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),this._update(this._execRender())}catch(t){return this._handleError(t)}},this.stateDidChange=(t,e=3,n=15)=>{var r;if(void 0===t)return!d.isEqual(this._state,this._prevState,e,n);const i={},o={};for(const e of t)i[e]=this._state[e],o[e]=null===(r=this._prevState)||void 0===r?void 0:r[e];return!d.isEqual(i,o,e,n)},this.setState=e=>{var n;try{if(null===(n=this.componentWillUpdate)||void 0===n||n.call(this),void 0===this._parent)throw new Error(`ERROR: code 2. See ${t}.`);this._prevState=Object.assign({},this._state),this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),Object.assign(this._state,e);const r=this.shouldComponentUpdate()?this._execRender():void 0;this._update(r)}catch(t){return this._handleError(t)}},this.mountComponent=e=>{var n,r;try{if(void 0!==e&&(this.parent=e),void 0===this._parent)throw new Error(`ERROR: code 2. See ${t}.`);const i=this.render();if(this._didSetInitialState=!0,null===(n=this.componentWillMount)||void 0===n||n.call(this),null===i)throw new Error(`ERROR: code 3. See ${t}.`);if(this.bindEventListeners(this._parent),this._didMount=!0,null===(r=this.componentDidMount)||void 0===r||r.call(this),i instanceof Array){const t=document.createDocumentFragment();return i.forEach((e=>t.appendChild(e))),this._parent.appendChild(t)}return this._parent.appendChild(i)}catch(t){return this._handleError(t)}},this.mount=this.mountComponent,this.unmountComponent=()=>{var t;try{if(void 0===this._parent)return;null===(t=this.componentWillUnmount)||void 0===t||t.call(this),this.unbindEventListeners(this._parent),this._removeChildren(),this._didMount=!1}catch(t){this._handleError(t)}},this.unmount=this.unmountComponent,this._removeChildren=()=>{if(void 0===this._parent)throw new Error(`ERROR: code 2. See ${t}.`);for(;this._parent.firstChild;)this._parent.lastChild&&this._parent.removeChild(this._parent.lastChild)},this._execRender=()=>(this._removeChildren(),this.render()),this._update=t=>{var e,n,r;if(t instanceof Array)for(const n of t)null===(e=this._parent)||void 0===e||e.appendChild(n);else t&&(null===(n=this._parent)||void 0===n||n.appendChild(t));t&&(null===(r=this.componentDidUpdate)||void 0===r||r.call(this))},this._handleError=t=>{if(t instanceof Error)return this.componentDidCatch(t),t;const e=new Error(String(t));return this.componentDidCatch(e),e},null===e)throw new Error("Parent is null, expected HTMLElement | undefined.");this._parent=e}get getState(){return this.state}get state(){return this._state}set state(e){this._didSetInitialState?(this.componentDidCatch(new Error(`ERROR: code 1. See ${t}.`)),this.setState(e)):(this._state=e,this._didSetInitialState=!0)}get getProps(){return this.props}set parent(t){this._parent=t}get parent(){return this._parent}get didMount(){return this._didMount}get prevState(){return this._prevState}}const u=(t,...e)=>{const r=document.createDocumentFragment();return n(r,e),r};var p;!function(t){t.Component=l,t.createRef=o,t.createElement=r,t.createElementNS=i,t.fragment=u}(p||(p={}));var f=p;class m extends f.Component{constructor(t){super(t),this.onClick=()=>{const t=["primary","secondary","success","info","warning","danger","light","dark"].filter((t=>this.state.color!==t));this.setState({color:t[Math.floor(Math.random()*t.length)]})},this.render=()=>r("button",{class:`btn btn-${this.state.color}`,onClick:()=>alert("Clicked!")},"Click Me!"),this.state={color:"primary"}}}new m(document.querySelector("#elistener")).mount()}();
