(function(){"use strict";
/**
   * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 2.0.0
   */const url="https://luke-zhang-04.github.io/DeStagnate/error-codes",bindProps=(t,e,n=!1)=>{if(e)for(const[a,i]of Object.entries(e))"string"==typeof i||"number"==typeof i?"innerHTML"===a?t.innerHTML=i.toString():n?t.setAttributeNS(null,a,i.toString()):t.setAttribute(a,i.toString()):"on"===a.slice(0,2)?"function"==typeof i&&t.addEventListener(a.slice(2).toLowerCase(),i):"ref"===a&&"object"==typeof i&&"current"in i?i.current=t:void 0!==i&&console.warn(`WARN: Code 7. See ${url}. Params: ${typeof i}, ${a}`)},bindChildren=(t,e)=>{if(null!=e)if(e instanceof Array)e.forEach((e=>bindChildren(t,e)));else if("string"==typeof e||"number"==typeof e)t.appendChild(document.createTextNode(e.toString()));else if(e instanceof Component){if(!e.didMount&&t instanceof window.HTMLElement)return void e.mount(t);if(!(t instanceof window.HTMLElement))throw new Error(`ERROR: code 4. See ${url}`);e.parent!==t&&(e.parent=t),e.forceUpdate()}else t.appendChild(e)};function createElement(t,e,...n){if("string"==typeof t){const a=document.createElement(t);return bindProps(a,e),bindChildren(a,n),a}return"function"==typeof t?t(e,n):Error("tagNameOrComponent is of invalid type.")}const createElementNS=(t,e,n,...a)=>{const i=document.createElementNS(t,e);return bindProps(i,n,!0),bindChildren(i,a),i},createRef=()=>({current:null});class Preset{constructor(){this.createElement=createElement,this.createElementNS=createElementNS,this.createRef=createRef,this.componentDidCatch=t=>console.error(t),this.componentDidWarn=t=>console.warn(t),this.shouldComponentUpdate=()=>!0,this.render=()=>null}}Preset.createElement=createElement,Preset.createElementNS=createElementNS,Preset.createRef=createRef;const eventNames=["onFocus","onBlur","onFocusIn","onFocusOut","onAnimationStart","onAnimationCancel","onAnimationEnd","onAnimationIteration","onTransitionStart","onTransitionCancel","onTransitionEnd","onTransitionRun","onAuxClick","onClick","onDblClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOver","onMouseOut","onMouseUp"];class Events extends Preset{constructor(){super(...arguments),this.bindEventListeners=t=>{this._eventListener(t.addEventListener)},this.unbindEventListeners=t=>{this._eventListener(t.removeEventListener)},this._eventListener=t=>{for(const e of eventNames){const n=e.slice(2).toLowerCase(),a=this[e];void 0!==a&&a instanceof Function&&t(n,a)}}}}class Component extends Events{constructor(t,e){super(),this.props=e,this._state={},this._didSetInitialState=!1,this._didMount=!1,this.getSnapshotBeforeUpdate=(t,e)=>[t,e],this.forceUpdate=()=>{var t;try{if(null===(t=this.componentDidUpdate)||void 0===t||t.call(this),void 0===this._parent)throw new Error(`ERROR: code 2. See ${url}.`);this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),this._update(this._execRender())}catch(t){return this._handleError(t)}},this.setState=t=>{var e;try{if(null===(e=this.componentWillUpdate)||void 0===e||e.call(this),void 0===this._parent)throw new Error(`ERROR: code 2. See ${url}.`);this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),Object.assign(this._state,t);const n=this.shouldComponentUpdate()?this._execRender():void 0;this._update(n)}catch(t){return this._handleError(t)}},this.mountComponent=t=>{var e,n;try{if(void 0!==t&&(this.parent=t),void 0===this._parent)throw new Error(`ERROR: code 2. See ${url}.`);const a=this.render();if(this._didSetInitialState=!0,null===(e=this.componentWillMount)||void 0===e||e.call(this),null===a)throw new Error(`ERROR: code 3. See ${url}.`);if(this.bindEventListeners(this._parent),this._didMount=!0,null===(n=this.componentDidMount)||void 0===n||n.call(this),a instanceof Array){const t=document.createDocumentFragment();return a.forEach((e=>t.appendChild(e))),this._parent.appendChild(t)}return this._parent.appendChild(a)}catch(t){return this._handleError(t)}},this.mount=this.mountComponent,this.unmountComponent=()=>{var t;try{if(void 0===this._parent)return this.componentDidWarn(`WARN: code 4. See ${url}.`);null===(t=this.componentWillUnmount)||void 0===t||t.call(this),this.unbindEventListeners(this._parent),this._removeChildren(),this._didMount=!1}catch(t){this._handleError(t)}},this.unmount=this.unmountComponent,this._removeChildren=()=>{if(void 0===this._parent)throw new Error(`ERROR: code 2. See ${url}.`);for(;this._parent.firstChild;)this._parent.lastChild&&this._parent.removeChild(this._parent.lastChild)},this._execRender=()=>(this._removeChildren(),this.render()),this._update=t=>{var e,n,a;if(t instanceof Array)for(const n of t)null===(e=this._parent)||void 0===e||e.appendChild(n);else t&&(null===(n=this._parent)||void 0===n||n.appendChild(t));t&&(null===(a=this.componentDidUpdate)||void 0===a||a.call(this))},this._handleError=t=>{if(t instanceof Error)return this.componentDidCatch(t),t;const e=new Error(String(t));return this.componentDidCatch(e),e},this._parent=t}get getState(){return this.state}get state(){return this._state}set state(t){this._didSetInitialState?(this.componentDidCatch(new Error(`ERROR: code 1. See ${url}.`)),this.setState(t)):(this._state=t,this._didSetInitialState=!0)}get getProps(){return this.props}set parent(t){this._parent=t}get parent(){return this._parent}get didMount(){return this._didMount}}const fragment=(t,...e)=>{const n=document.createDocumentFragment();return bindChildren(n,e),n};var DeStagnate;!function(t){t.Component=Component,t.createRef=createRef,t.createElement=createElement,t.createElementNS=createElementNS,t.fragment=fragment}(DeStagnate||(DeStagnate={}));var DeStagnate$1=DeStagnate;class Calculator extends DeStagnate$1.Component{constructor(parent){super(parent),this._appendState=(t,e)=>({calculation:this.state.calculation+(e||t)}),this._calcButton=({text:t,append:e})=>DeStagnate$1.createElement("div",{class:"col-3 calc-btn",onClick:()=>this.setState(this._appendState(t,e))},t),this._evalCalc=()=>eval(this.state.calculation),this._numBtns=[DeStagnate$1.createElement("div",{class:"calc-btns row"},["7","8","9",["x","*"]].map((t=>DeStagnate$1.createElement(this._calcButton,{text:t instanceof Array?t[0]:t,append:t instanceof Array?t[1]:t})))),DeStagnate$1.createElement("div",{class:"calc-btns row"},["4","5","6","-"].map((t=>DeStagnate$1.createElement(this._calcButton,{text:t instanceof Array?t[0]:t,append:t instanceof Array?t[1]:t})))),DeStagnate$1.createElement("div",{class:"calc-btns row"},["1","2","3","+"].map((t=>DeStagnate$1.createElement(this._calcButton,{text:t instanceof Array?t[0]:t,append:t instanceof Array?t[1]:t}))))],this._calcDisplay=()=>DeStagnate$1.createElement("div",{class:"calc-display"},this.state.calculation),this.render=()=>DeStagnate$1.createElement("div",null,DeStagnate$1.createElement(this._calcDisplay,null),DeStagnate$1.createElement("div",{class:"calc-btns row"},DeStagnate$1.createElement("div",{class:"col-3 calc-btn clear",onClick:()=>this.setState({calculation:""})},"C"),DeStagnate$1.createElement("div",{class:"col-3 calc-btn",onClick:()=>this.setState({calculation:this.state.calculation.slice(0,this.state.calculation.length-1)})},"←"),DeStagnate$1.createElement(this._calcButton,{text:"%"}),DeStagnate$1.createElement(this._calcButton,{text:"÷",append:"/"})),this._numBtns.map((t=>t)),DeStagnate$1.createElement("div",{class:"calc-btns row"},DeStagnate$1.createElement(this._calcButton,{text:"0"}),DeStagnate$1.createElement(this._calcButton,{text:"."}),DeStagnate$1.createElement("div",{class:"col-6 calc-btn equals",onClick:()=>this.setState({calculation:this._evalCalc()})}))),this.state={calculation:""}}}const calculator=new Calculator(document.querySelector("#calculator"));calculator.mount()})();
