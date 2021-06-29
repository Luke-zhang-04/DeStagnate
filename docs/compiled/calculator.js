(function(){"use strict";
/**
   * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 - 2021 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 2.1.0
   */const eventNames=["onFocus","onBlur","onFocusIn","onFocusOut","onAnimationStart","onAnimationCancel","onAnimationEnd","onAnimationIteration","onTransitionStart","onTransitionCancel","onTransitionEnd","onTransitionRun","onAuxClick","onClick","onDblClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOver","onMouseOut","onMouseUp","onWheel"],windowEventNames=["onLoad","onOnline","onOffline","onResize","onScroll","onKeyDown","onKeyPress","onKeyUp"],url="https://luke-zhang-04.github.io/DeStagnate/error-codes",bindProps=(t,e,n=!1)=>{if(e)for(const[a,i]of Object.entries(e))"string"==typeof i||"number"==typeof i?"innerHTML"===a?t.innerHTML=i.toString():n?t.setAttributeNS(null,a,i.toString()):t.setAttribute(a,i.toString()):"on"===a.slice(0,2)?"function"==typeof i&&t.addEventListener(a.slice(2).toLowerCase(),i):"ref"===a&&"object"==typeof i&&"current"in i?i.current=t:void 0!==i&&console.warn(typeof i+" is not a valid DeStagnate child")},bindChildren=(t,e)=>{if(null!=e)if(e instanceof Array)e.forEach((e=>bindChildren(t,e)));else if("string"==typeof e||"number"==typeof e)t.appendChild(document.createTextNode(e.toString()));else if(e instanceof Component){if(!e.didMount&&t instanceof window.HTMLElement)return void e.mount(t);if(!(t instanceof window.HTMLElement))throw new Error(`ERROR: code 3. See ${url}`);e.parent!==t&&(e.parent=t),e.forceUpdate()}else t.appendChild(e)};function createElement(t,e,...n){if("string"==typeof t){const a=document.createElement(t);return bindProps(a,e),bindChildren(a,n),a}return"function"==typeof t?t(e,n):Error("tagNameOrComponent is of invalid type.")}const createElementNS=(t,e,n,...a)=>{const i=document.createElementNS(t,e);return bindProps(i,n,!0),bindChildren(i,a),i},createRef=()=>({current:null}),isEqual=(t,e,n=3,a=10)=>{if(0===n)return t===e;if(typeof t!=typeof e)return!1;if(t instanceof Array&&e instanceof Array){if(t.length!==e.length)return!1;if(t.length>a||e.length>a)return t===e;for(let i=0;i<t.length;i++)if(!isEqual(t[i],e[i],n-1,a))return!1;return!0}if(t instanceof Object&&e instanceof Object){if(!isEqual(Object.keys(t),Object.keys(e),n-1,a))return!1;for(const i of Object.keys(t))if(!isEqual(t[i],e[i],n-1,a))return!1;return!0}return t===e};var utils={isEqual:isEqual};const unmountedMsg="Refusing to update unmounted component";class Component{constructor(t,e){if(this.props=e,this.createElement=createElement,this.createElementNS=createElementNS,this.createRef=createRef,this._state={},this._didSetInitialState=!1,this._didMount=!1,this.mount=this.mountComponent,this.unmount=this.unmountComponent,null===t)throw new Error("Parent is null, expected HTMLElement | undefined.");this._parent=t}get getState(){return this.state}get state(){return this._state}set state(t){this._didSetInitialState?(this.componentDidCatch(new Error(`ERROR: code 1. See ${url}.`)),this.setState(t)):(this._state=t,this._didSetInitialState=!0)}get getProps(){return this.props}set parent(t){this._parent=t}get parent(){return this._parent}get didMount(){return this._didMount}get prevState(){return this._prevState}forceUpdate(){var t,e;try{if(!this._didMount)throw new Error(unmountedMsg);if(null===(t=this.componentDidUpdate)||void 0===t||t.call(this),void 0===this._parent)throw new Error(`ERROR: code 2. See ${url}.`);null===(e=this.getSnapshotBeforeUpdate)||void 0===e||e.call(this,Object.assign({},this.props),Object.assign({},this.state)),this._update(this._execRender())}catch(t){return this._handleError(t)}}stateDidChange(t,e=3,n=15){var a;if(void 0===t)return!utils.isEqual(this._state,this._prevState,e,n);const i={},r={};for(const e of t)i[e]=this._state[e],r[e]=null===(a=this._prevState)||void 0===a?void 0:a[e];return!utils.isEqual(i,r,e,n)}setState(t,e=!0){var n,a;try{if(!this._didMount)throw new Error(unmountedMsg);if(null===(n=this.componentWillUpdate)||void 0===n||n.call(this),void 0===this._parent)throw new Error(`ERROR: code 2. See ${url}.`);this._prevState=Object.assign({},this._state),null===(a=this.getSnapshotBeforeUpdate)||void 0===a||a.call(this,Object.assign({},this.props),Object.assign({},this.state)),Object.assign(this._state,t);const i=e&&this.shouldComponentUpdate()?this._execRender():void 0;this._update(i)}catch(t){return this._handleError(t)}}mountComponent(t){var e,n;try{if(void 0!==t&&(this.parent=t),void 0===this._parent)throw new Error(`ERROR: code 2. See ${url}.`);const a=this.render();if(this._didSetInitialState=!0,null===(e=this.componentWillMount)||void 0===e||e.call(this),null===a)throw new Error(`ERROR: code 3. See ${url}.`);if(this._bindEventListeners(this._parent),this._didMount=!0,null===(n=this.componentDidMount)||void 0===n||n.call(this),a instanceof Array){const t=document.createDocumentFragment();return a.forEach((e=>t.appendChild(e))),this._parent.appendChild(t)}return this._parent.appendChild(a)}catch(t){return this._handleError(t)}}unmountComponent(){var t;try{if(void 0===this._parent)return;null===(t=this.componentWillUnmount)||void 0===t||t.call(this),this._unbindEventListeners(this._parent),this._removeChildren(),this._didMount=!1}catch(t){this._handleError(t)}}componentDidCatch(t){console.error(t)}shouldComponentUpdate(){return!0}_removeChildren(){if(void 0===this._parent)throw new Error(`ERROR: code 2. See ${url}.`);for(;this._parent.firstChild;)this._parent.lastChild&&this._parent.removeChild(this._parent.lastChild)}_execRender(){return this._removeChildren(),this.render()}_update(t){var e,n,a;if(t instanceof Array)for(const n of t)null===(e=this._parent)||void 0===e||e.appendChild(n);else t&&(null===(n=this._parent)||void 0===n||n.appendChild(t));t&&(null===(a=this.componentDidUpdate)||void 0===a||a.call(this))}_handleError(t){if(t instanceof Error)return this.componentDidCatch(t),t;const e=new Error(String(t));return this.componentDidCatch(e),e}_bindEventListeners(t){this._eventListener(t.addEventListener),this._eventListener(window.addEventListener,windowEventNames)}_unbindEventListeners(t){this._eventListener(t.removeEventListener),this._eventListener(window.removeEventListener,windowEventNames)}_eventListener(t,e=eventNames){for(const n of e){const e=n.slice(2).toLowerCase(),a=this[n];void 0!==a&&a instanceof Function&&t(e,a)}}}Component.createElement=createElement,Component.createElementNS=createElementNS,Component.createRef=createRef;const Fragment=(t,...e)=>{const n=document.createDocumentFragment();return bindChildren(n,e),n};var DeStagnate;!function(t){t.Component=Component,t.createRef=createRef,t.createElement=createElement,t.createElementNS=createElementNS,t.Fragment=Fragment}(DeStagnate||(DeStagnate={}));var DeStagnate$1=DeStagnate;class Calculator extends DeStagnate$1.Component{constructor(parent){super(parent),this._appendState=(t,e)=>({calculation:this.state.calculation+(e||t)}),this._calcButton=({text:t,append:e})=>DeStagnate$1.createElement("div",{class:"col-3 calc-btn",onClick:()=>this.setState(this._appendState(t,e))},t),this._evalCalc=()=>eval(this.state.calculation),this._numBtns=[DeStagnate$1.createElement("div",{class:"calc-btns row"},["7","8","9",["x","*"]].map((t=>DeStagnate$1.createElement(this._calcButton,{text:t instanceof Array?t[0]:t,append:t instanceof Array?t[1]:t})))),DeStagnate$1.createElement("div",{class:"calc-btns row"},["4","5","6","-"].map((t=>DeStagnate$1.createElement(this._calcButton,{text:t instanceof Array?t[0]:t,append:t instanceof Array?t[1]:t})))),DeStagnate$1.createElement("div",{class:"calc-btns row"},["1","2","3","+"].map((t=>DeStagnate$1.createElement(this._calcButton,{text:t instanceof Array?t[0]:t,append:t instanceof Array?t[1]:t}))))],this._calcDisplay=()=>DeStagnate$1.createElement("div",{class:"calc-display"},this.state.calculation),this.render=()=>DeStagnate$1.createElement("div",null,DeStagnate$1.createElement(this._calcDisplay,null),DeStagnate$1.createElement("div",{class:"calc-btns row"},DeStagnate$1.createElement("div",{class:"col-3 calc-btn clear",onClick:()=>this.setState({calculation:""})},"C"),DeStagnate$1.createElement("div",{class:"col-3 calc-btn",onClick:()=>this.setState({calculation:this.state.calculation.slice(0,this.state.calculation.length-1)})},"←"),DeStagnate$1.createElement(this._calcButton,{text:"%"}),DeStagnate$1.createElement(this._calcButton,{text:"÷",append:"/"})),this._numBtns.map((t=>t)),DeStagnate$1.createElement("div",{class:"calc-btns row"},DeStagnate$1.createElement(this._calcButton,{text:"0"}),DeStagnate$1.createElement(this._calcButton,{text:"."}),DeStagnate$1.createElement("div",{class:"col-6 calc-btn equals",onClick:()=>this.setState({calculation:this._evalCalc()})}))),this.state={calculation:""}}}const calculator=new Calculator(document.querySelector("#calculator"));calculator.mount()})();
