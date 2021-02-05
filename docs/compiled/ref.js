(function () {
    'use strict';

    const createRef=()=>({current:null});

    var url = "https://luke-zhang-04.github.io/DeStagnate/error-codes";

    const bindProps=(a,b,c=!1)=>{if(b)for(const[d,e]of Object.entries(b))"string"==typeof e||"number"==typeof e?"innerHTML"===d?a.innerHTML=e.toString():c?a.setAttributeNS(null,d,e.toString()):a.setAttribute(d,e.toString()):"on"===d.slice(0,2)?"function"==typeof e&&a.addEventListener(d.slice(2).toLowerCase(),e):"ref"===d&&"object"==typeof e&&"current"in e?e.current=a:void 0!==e&&console.warn(`WARN: Code 7. See ${url}. Params: ${typeof e}, ${d}`);};const unpackChildren=a=>{const b=[];for(const c of a)"object"==typeof c&&c instanceof Array?b.push(...unpackChildren(c)):b.push(c);return b};const bindChildren=(a,b)=>{if(null!==b&&b!==void 0)if(b instanceof Array)for(const c of b)bindChildren(a,c);else if("string"==typeof b||"number"==typeof b)a.innerText=b.toString();else if(b instanceof DeStagnate){if(!b.didMount&&a instanceof window.HTMLElement)return void b.mount(a);if(!(a instanceof window.HTMLElement))throw new Error(`ERROR: code 8. See ${url}`);b.parent!==a&&(b.parent=a),b.forceUpdate();}else a.appendChild(b);};

    function createElement(a,b,c,...d){let e=c;if(c&&d&&(c instanceof Array?e=[...unpackChildren(c),...unpackChildren(d)]:e=[c,...unpackChildren(d)]),"string"==typeof a){const c=document.createElement(a);return bindProps(c,b),bindChildren(c,e),c}return "function"==typeof a?a(b,e):Error("tagNameOrComponent is of invalid type.")}

    const createElementNS=(a,b,c,d,...e)=>{const f=document.createElementNS(a,b);bindProps(f,c,!0);let g=d;return d&&e&&("object"==typeof d&&d instanceof Array?g=[...unpackChildren(d),...unpackChildren(e)]:g=[d,...unpackChildren(e)]),bindChildren(f,g),f};

    class Preset{constructor(){this.createElement=createElement,this.createElementNS=createElementNS,this.createRef=createRef,this.componentDidCatch=a=>console.error(a),this.componentDidWarn=a=>console.warn(a),this.shouldComponentUpdate=()=>!0,this.render=()=>null;}}Preset.createElement=createElement,Preset.createElementNS=createElementNS,Preset.createRef=createRef;

    class Events extends Preset{constructor(){super(...arguments),this.bindEventListeners=a=>{this._eventListener(a.addEventListener);},this.unbindEventListeners=a=>{this._eventListener(a.removeEventListener);},this._eventListener=a=>{for(const[b,c]of Object.entries(this._events()))void 0!==c&&a(b,c);},this._events=()=>({focus:this.onFocus,blur:this.onBlur,focusin:this.onFocusIn,focusout:this.onFocusOut,animationstart:this.onAnimationStart,animationcancel:this.onAnimationCancel,animationend:this.onAnimationEnd,animationiteration:this.onAnimationIteration,transitionstart:this.onTransitionStart,transitioncancel:this.onTransitionCancel,transitionend:this.onTransitionEnd,transitionrun:this.onTransitionRun,auxclick:this.onAuxClick,click:this.onClick,dblclick:this.onDblClick,mousedown:this.onMouseDown,mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave,mousemove:this.onMouseMove,mouseover:this.onMouseOver,mouseout:this.onMouseOut,mouseup:this.onMouseUp});}}

    class DeStagnate extends Events{constructor(a,b,c=!1){super(),this.props=b,this._strict=!0,this._state={},this._didSetInitialState=!1,this._didMount=!1,this.getSnapshotBeforeUpdate=(a,b)=>[a,b],this.useStrict=()=>{this._strict=!0;},this.disableStrict=()=>{this._strict=!1;},this.forceUpdate=()=>{var a;try{if(null===(a=this.componentDidUpdate)||void 0===a?void 0:a.call(this),void 0===this._parent)throw new Error(`ERROR: code 3. See ${url}.`);this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),this._update(this._execRender());}catch(a){return this.componentDidCatch(a),a}},this.setState=a=>{var b;try{if(null===(b=this.componentWillUpdate)||void 0===b?void 0:b.call(this),void 0===this._parent)throw new Error(`ERROR: code 3. See ${url}.`);this._strict&&this._checkKeys(a),this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),Object.assign(this._state,a);const c=this.shouldComponentUpdate()?this._execRender():void 0;this._update(c);}catch(a){return this.componentDidCatch(a),a}},this.mountComponent=a=>{var b,c;try{if(void 0!==a&&(this.parent=a),void 0===this._parent)throw new Error(`ERROR: code 3. See ${url}.`);const d=this.render();if(this._didSetInitialState=!0,null===(b=this.componentWillMount)||void 0===b?void 0:b.call(this),null===d)throw new Error(`ERROR: code 5. See ${url}.`);return this.bindEventListeners(this._parent),this._didMount=!0,null===(c=this.componentDidMount)||void 0===c?void 0:c.call(this),"object"==typeof d&&d instanceof Array?d.map(a=>this._parent.appendChild(a)):this._parent.appendChild(d)}catch(a){return this.componentDidCatch(a),a}},this.mount=this.mountComponent,this.unmountComponent=()=>{var a;try{if(void 0===this._parent)return void this.componentDidWarn(`WARN: code 4. See ${url}.`);null===(a=this.componentWillUnmount)||void 0===a?void 0:a.call(this),this.unbindEventListeners(this._parent),this._removeChildren(),this._didMount=!1;}catch(a){this.componentDidCatch(a);}},this.unmount=this.unmountComponent,this._removeChildren=()=>{if(this._parent===void 0)throw new Error(`ERROR: code 3. See ${url}.`);for(;this._parent.firstChild;)this._parent.lastChild&&this._parent.removeChild(this._parent.lastChild);},this._execRender=()=>(this._removeChildren(),this.render()),this._checkKeys=a=>{for(const b of Object.keys(a))Object.keys(this.state).includes(b)||this.componentDidWarn(`WARN: code 6. See ${url}. Params: ${b}, ${JSON.stringify(Object.keys(this.state))}.`);},this._update=a=>{var b;if("object"==typeof a&&a instanceof Array)for(const b of a)this._parent.appendChild(b);else a&&this._parent.appendChild(a);a&&(null===(b=this.componentDidUpdate)||void 0===b?void 0:b.call(this));},a&&0<a.childElementCount&&!c&&this._strict&&this.componentDidCatch(new Error(`ERROR: code 1. See ${url}. Params: ${a.tagName.toLowerCase()}`)),this._parent=a;}get getState(){return this.state}get state(){return this._state}set state(a){this._didSetInitialState&&this._strict?(this.componentDidCatch(new Error(`ERROR: code 2. See ${url}.`)),this.componentDidWarn(`ERROR: code 2. See ${url}.`),this.setState(a)):(this._state=a,this._didSetInitialState=!0);}get getProps(){return this.props}set parent(a){a&&0<a.childElementCount&&this._strict&&this.componentDidCatch(new Error(`ERROR: code 1. See ${url}. Params: ${a.tagName.toLowerCase()}`)),this._parent=a;}get parent(){return this._parent}get didMount(){return this._didMount}}

    const createRef$1=createRef;

    class RefExample extends DeStagnate {
      constructor() {
        super(...arguments);
        this._formRef = createRef$1();

        this.render = () => [DeStagnate.createElement("div", {
          class: "input-group"
        }, DeStagnate.createElement(RefExample._inputGroupPrepend, null), DeStagnate.createElement("input", {
          type: "text",
          class: "form-control mb-3",
          placeholder: "Insert text here",
          ref: this._formRef
        })), DeStagnate.createElement("button", {
          class: "btn btn-light mb-3",
          onClick: this._getInputValues
        }, "See Input Value")];

        this._getInputValues = () => {
          var _a;

          const val = (_a = this._formRef.current) === null || _a === void 0 ? void 0 : _a.value;
          alert(`INPUT VALUE: "${val}"`);
        };
      }

    }

    RefExample._inputGroupPrepend = () => DeStagnate.createElement("div", {
      class: "input-group-prepend"
    }, DeStagnate.createElement("span", {
      class: "input-group-text"
    }, "Input"));

    const refParent = document.getElementById("ref");

    if (refParent) {
      const refComponent = new RefExample(refParent);
      refComponent.mount();
    }

}());
