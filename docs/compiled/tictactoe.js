!function(){"use strict";
/**
   * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 2.0.0
   */const t="https://luke-zhang-04.github.io/DeStagnate/error-codes",e=(t,e,n=!1)=>{if(e)for(const[i,r]of Object.entries(e))"string"==typeof r||"number"==typeof r?"innerHTML"===i?t.innerHTML=r.toString():n?t.setAttributeNS(null,i,r.toString()):t.setAttribute(i,r.toString()):"on"===i.slice(0,2)?"function"==typeof r&&t.addEventListener(i.slice(2).toLowerCase(),r):"ref"===i&&"object"==typeof r&&"current"in r?r.current=t:void 0!==r&&console.warn(typeof r+" is not a valid DeStagnate child")},n=(e,i)=>{if(null!=i)if(i instanceof Array)i.forEach((t=>n(e,t)));else if("string"==typeof i||"number"==typeof i)e.appendChild(document.createTextNode(i.toString()));else if(i instanceof l){if(!i.didMount&&e instanceof window.HTMLElement)return void i.mount(e);if(!(e instanceof window.HTMLElement))throw new Error(`ERROR: code 3. See ${t}`);i.parent!==e&&(i.parent=e),i.forceUpdate()}else e.appendChild(i)};function i(t,i,...r){if("string"==typeof t){const s=document.createElement(t);return e(s,i),n(s,r),s}return"function"==typeof t?t(i,r):Error("tagNameOrComponent is of invalid type.")}const r=(t,i,r,...s)=>{const o=document.createElementNS(t,i);return e(o,r,!0),n(o,s),o},s=()=>({current:null});class o{constructor(){this.createElement=i,this.createElementNS=r,this.createRef=s,this.componentDidCatch=t=>console.error(t),this.shouldComponentUpdate=()=>!0,this.render=()=>null}}o.createElement=i,o.createElementNS=r,o.createRef=s;const a=["onFocus","onBlur","onFocusIn","onFocusOut","onAnimationStart","onAnimationCancel","onAnimationEnd","onAnimationIteration","onTransitionStart","onTransitionCancel","onTransitionEnd","onTransitionRun","onAuxClick","onClick","onDblClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOver","onMouseOut","onMouseUp"];class c extends o{constructor(){super(...arguments),this.bindEventListeners=t=>{this._eventListener(t.addEventListener)},this.unbindEventListeners=t=>{this._eventListener(t.removeEventListener)},this._eventListener=t=>{for(const e of a){const n=e.slice(2).toLowerCase(),i=this[e];void 0!==i&&i instanceof Function&&t(n,i)}}}}const h=(t,e,n=3,i=10)=>{if(0===n)return t===e;if(typeof t!=typeof e)return!1;if(t instanceof Array&&e instanceof Array){if(t.length!==e.length)return!1;if(t.length>i||e.length>i)return t===e;for(let r=0;r<t.length;r++)if(!h(t[r],e[r],n-1,i))return!1;return!0}if(t instanceof Object&&e instanceof Object){if(!h(Object.keys(t),Object.keys(e),n-1,i))return!1;for(const r of Object.keys(t))if(!h(t[r],e[r],n-1,i))return!1;return!0}return t===e};var d={isEqual:h};class l extends c{constructor(e,n){if(super(),this.props=n,this._state={},this._didSetInitialState=!1,this._didMount=!1,this.forceUpdate=()=>{var e;try{if(null===(e=this.componentDidUpdate)||void 0===e||e.call(this),void 0===this._parent)throw new Error(`ERROR: code 2. See ${t}.`);this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),this._update(this._execRender())}catch(t){return this._handleError(t)}},this.stateDidChange=(t,e=3,n=15)=>{var i;if(void 0===t)return!d.isEqual(this._state,this._prevState,e,n);const r={},s={};for(const e of t)r[e]=this._state[e],s[e]=null===(i=this._prevState)||void 0===i?void 0:i[e];return!d.isEqual(r,s,e,n)},this.setState=e=>{var n;try{if(null===(n=this.componentWillUpdate)||void 0===n||n.call(this),void 0===this._parent)throw new Error(`ERROR: code 2. See ${t}.`);this._prevState=Object.assign({},this._state),this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),Object.assign(this._state,e);const i=this.shouldComponentUpdate()?this._execRender():void 0;this._update(i)}catch(t){return this._handleError(t)}},this.mountComponent=e=>{var n,i;try{if(void 0!==e&&(this.parent=e),void 0===this._parent)throw new Error(`ERROR: code 2. See ${t}.`);const r=this.render();if(this._didSetInitialState=!0,null===(n=this.componentWillMount)||void 0===n||n.call(this),null===r)throw new Error(`ERROR: code 3. See ${t}.`);if(this.bindEventListeners(this._parent),this._didMount=!0,null===(i=this.componentDidMount)||void 0===i||i.call(this),r instanceof Array){const t=document.createDocumentFragment();return r.forEach((e=>t.appendChild(e))),this._parent.appendChild(t)}return this._parent.appendChild(r)}catch(t){return this._handleError(t)}},this.mount=this.mountComponent,this.unmountComponent=()=>{var t;try{if(void 0===this._parent)return;null===(t=this.componentWillUnmount)||void 0===t||t.call(this),this.unbindEventListeners(this._parent),this._removeChildren(),this._didMount=!1}catch(t){this._handleError(t)}},this.unmount=this.unmountComponent,this._removeChildren=()=>{if(void 0===this._parent)throw new Error(`ERROR: code 2. See ${t}.`);for(;this._parent.firstChild;)this._parent.lastChild&&this._parent.removeChild(this._parent.lastChild)},this._execRender=()=>(this._removeChildren(),this.render()),this._update=t=>{var e,n,i;if(t instanceof Array)for(const n of t)null===(e=this._parent)||void 0===e||e.appendChild(n);else t&&(null===(n=this._parent)||void 0===n||n.appendChild(t));t&&(null===(i=this.componentDidUpdate)||void 0===i||i.call(this))},this._handleError=t=>{if(t instanceof Error)return this.componentDidCatch(t),t;const e=new Error(String(t));return this.componentDidCatch(e),e},null===e)throw new Error("Parent is null, expected HTMLElement | undefined.");this._parent=e}get getState(){return this.state}get state(){return this._state}set state(e){this._didSetInitialState?(this.componentDidCatch(new Error(`ERROR: code 1. See ${t}.`)),this.setState(e)):(this._state=e,this._didSetInitialState=!0)}get getProps(){return this.props}set parent(t){this._parent=t}get parent(){return this._parent}get didMount(){return this._didMount}get prevState(){return this._prevState}}const u=(t,...e)=>{const i=document.createDocumentFragment();return n(i,e),i};var p;!function(t){t.Component=l,t.createRef=s,t.createElement=i,t.createElementNS=r,t.fragment=u}(p||(p={}));var f=p;let m="x";class _ extends f.Component{constructor(){super(...arguments),this._squares=[[new v,new v,new v],[new v,new v,new v],[new v,new v,new v]],this._checkForWinner=()=>{for(let t=0;t<3;t++){const e=[0,1,2].map((e=>this._squares[t][e].getState.clicked)),n=[0,1,2].map((e=>this._squares[e][t].getState.clicked));if(e[0]===e[1]&&e[1]===e[2]&&e[0])return e[0];if(n[0]===n[1]&&n[1]===n[2]&&n[0])return n[0]}const t=[[this._squares[0][0].getState.clicked,this._squares[1][1].getState.clicked,this._squares[2][2].getState.clicked],[this._squares[0][2].getState.clicked,this._squares[1][1].getState.clicked,this._squares[2][0].getState.clicked]];for(const e of t)if(e[0]===e[1]&&e[1]===e[2]&&e[0])return e[0];return""},this.render=()=>[0,1,2].map((t=>i("div",{class:"row"},[0,1,2].map((e=>i("div",{class:"col-4",onClick:()=>{const n=this._squares[t][e];""===(null==n?void 0:n.getState.clicked)&&(null==n||n.setState({clicked:m})),m="x"===m?"o":"x",this._checkForWinner()&&alert(`Player ${this._checkForWinner()} has won the game!`)}},this._squares[t][e]))))))}}class v extends f.Component{constructor(){super(),this.render=()=>i("div",{class:"tictactoe-square"},this.state.clicked),this.state={clicked:""}}}const E=document.getElementById("nested"),g=()=>{if(E){const t=new _(E),e=document.getElementById("nested-reset-btn");e&&e.addEventListener("click",(()=>{t.unmount(),g()})),t.mount()}};g()}();
