!function(){"use strict";
/**
   * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 - 2021 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 2.1.0
   */const t=["onFocus","onBlur","onFocusIn","onFocusOut","onAnimationStart","onAnimationCancel","onAnimationEnd","onAnimationIteration","onTransitionStart","onTransitionCancel","onTransitionEnd","onTransitionRun","onAuxClick","onClick","onDblClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOver","onMouseOut","onMouseUp","onWheel"],e=["onLoad","onOnline","onOffline","onResize","onScroll","onKeyDown","onKeyPress","onKeyUp"],n="https://luke-zhang-04.github.io/DeStagnate/error-codes",r=(t,e,n=!1)=>{if(e)for(const[r,i]of Object.entries(e))"string"==typeof i||"number"==typeof i?"innerHTML"===r?t.innerHTML=i.toString():n?t.setAttributeNS(null,r,i.toString()):t.setAttribute(r,i.toString()):"on"===r.slice(0,2)?"function"==typeof i&&t.addEventListener(r.slice(2).toLowerCase(),i):"ref"===r&&"object"==typeof i&&"current"in i?i.current=t:void 0!==i&&console.warn(typeof i+" is not a valid DeStagnate child")},i=(t,e)=>{if(null!=e)if(e instanceof Array)e.forEach((e=>i(t,e)));else if("string"==typeof e||"number"==typeof e)t.appendChild(document.createTextNode(e.toString()));else if(e instanceof u){if(!e.didMount&&t instanceof window.HTMLElement)return void e.mount(t);if(!(t instanceof window.HTMLElement))throw new Error(`ERROR: code 3. See ${n}`);e.parent!==t&&(e.parent=t),e.forceUpdate()}else t.appendChild(e)};function o(t,e,...n){if("string"==typeof t){const o=document.createElement(t);return r(o,e),i(o,n),o}return"function"==typeof t?t(e,n):Error("tagNameOrComponent is of invalid type.")}const s=(t,e,n,...o)=>{const s=document.createElementNS(t,e);return r(s,n,!0),i(s,o),s},a=()=>({current:null}),c=(t,e,n=3,r=10)=>{if(0===n)return t===e;if(typeof t!=typeof e)return!1;if(t instanceof Array&&e instanceof Array){if(t.length!==e.length)return!1;if(t.length>r||e.length>r)return t===e;for(let i=0;i<t.length;i++)if(!c(t[i],e[i],n-1,r))return!1;return!0}if(t instanceof Object&&e instanceof Object){if(!c(Object.keys(t),Object.keys(e),n-1,r))return!1;for(const i of Object.keys(t))if(!c(t[i],e[i],n-1,r))return!1;return!0}return t===e};var l={isEqual:c};const h="Refusing to update unmounted component";class u{constructor(t,e){if(this.props=e,this.createElement=o,this.createElementNS=s,this.createRef=a,this._state={},this._didSetInitialState=!1,this._didMount=!1,this.mount=this.mountComponent,this.unmount=this.unmountComponent,null===t)throw new Error("Parent is null, expected HTMLElement | undefined.");this._parent=t}get getState(){return this.state}get state(){return this._state}set state(t){this._didSetInitialState?(this.componentDidCatch(new Error(`ERROR: code 1. See ${n}.`)),this.setState(t)):(this._state=t,this._didSetInitialState=!0)}get getProps(){return this.props}set parent(t){this._parent=t}get parent(){return this._parent}get didMount(){return this._didMount}get prevState(){return this._prevState}forceUpdate(){var t,e;try{if(!this._didMount)throw new Error(h);if(null===(t=this.componentDidUpdate)||void 0===t||t.call(this),void 0===this._parent)throw new Error(`ERROR: code 2. See ${n}.`);null===(e=this.getSnapshotBeforeUpdate)||void 0===e||e.call(this,Object.assign({},this.props),Object.assign({},this.state)),this._update(this._execRender())}catch(t){return this._handleError(t)}}stateDidChange(t,e=3,n=15){var r;if(void 0===t)return!l.isEqual(this._state,this._prevState,e,n);const i={},o={};for(const e of t)i[e]=this._state[e],o[e]=null===(r=this._prevState)||void 0===r?void 0:r[e];return!l.isEqual(i,o,e,n)}setState(t,e=!0){var r,i;try{if(!this._didMount)throw new Error(h);if(null===(r=this.componentWillUpdate)||void 0===r||r.call(this),void 0===this._parent)throw new Error(`ERROR: code 2. See ${n}.`);this._prevState=Object.assign({},this._state),null===(i=this.getSnapshotBeforeUpdate)||void 0===i||i.call(this,Object.assign({},this.props),Object.assign({},this.state)),Object.assign(this._state,t);const o=e&&this.shouldComponentUpdate()?this._execRender():void 0;this._update(o)}catch(t){return this._handleError(t)}}mountComponent(t){var e,r;try{if(void 0!==t&&(this.parent=t),void 0===this._parent)throw new Error(`ERROR: code 2. See ${n}.`);const i=this.render();if(this._didSetInitialState=!0,null===(e=this.componentWillMount)||void 0===e||e.call(this),null===i)throw new Error(`ERROR: code 3. See ${n}.`);if(this._bindEventListeners(this._parent),this._didMount=!0,null===(r=this.componentDidMount)||void 0===r||r.call(this),i instanceof Array){const t=document.createDocumentFragment();return i.forEach((e=>t.appendChild(e))),this._parent.appendChild(t)}return this._parent.appendChild(i)}catch(t){return this._handleError(t)}}unmountComponent(){var t;try{if(void 0===this._parent)return;null===(t=this.componentWillUnmount)||void 0===t||t.call(this),this._unbindEventListeners(this._parent),this._removeChildren(),this._didMount=!1}catch(t){this._handleError(t)}}componentDidCatch(t){console.error(t)}shouldComponentUpdate(){return!0}_removeChildren(){if(void 0===this._parent)throw new Error(`ERROR: code 2. See ${n}.`);for(;this._parent.firstChild;)this._parent.lastChild&&this._parent.removeChild(this._parent.lastChild)}_execRender(){return this._removeChildren(),this.render()}_update(t){var e,n,r;if(t instanceof Array)for(const n of t)null===(e=this._parent)||void 0===e||e.appendChild(n);else t&&(null===(n=this._parent)||void 0===n||n.appendChild(t));t&&(null===(r=this.componentDidUpdate)||void 0===r||r.call(this))}_handleError(t){if(t instanceof Error)return this.componentDidCatch(t),t;const e=new Error(String(t));return this.componentDidCatch(e),e}_bindEventListeners(t){this._eventListener(t.addEventListener),this._eventListener(window.addEventListener,e)}_unbindEventListeners(t){this._eventListener(t.removeEventListener),this._eventListener(window.removeEventListener,e)}_eventListener(e,n=t){for(const t of n){const n=t.slice(2).toLowerCase(),r=this[t];void 0!==r&&r instanceof Function&&e(n,r)}}}u.createElement=o,u.createElementNS=s,u.createRef=a;const d=(t,...e)=>{const n=document.createDocumentFragment();return i(n,e),n};var p;!function(t){t.Component=u,t.createRef=a,t.createElement=o,t.createElementNS=s,t.Fragment=d}(p||(p={}));var f=p;class m extends f.Component{constructor(t){super(t),this._formRef={current:null},this.render=()=>f.createElement(f.Fragment,null,f.createElement("div",{class:"input-group"},f.createElement(m._inputGroupPrepend,null),f.createElement("input",{type:"text",class:"form-control mb-3",placeholder:"Insert text here",ref:this._formRef})),f.createElement("button",{class:"btn btn-light mb-3",onClick:this._getInputValues},"See Input Value")),this._getInputValues=()=>{var t;const e=null===(t=this._formRef.current)||void 0===t?void 0:t.value;alert(`INPUT VALUE: "${e}"`)}}}m._inputGroupPrepend=()=>f.createElement("div",{class:"input-group-prepend"},f.createElement("span",{class:"input-group-text"},"Input"));const _=document.getElementById("ref");if(_){new m(_).mount()}}();
