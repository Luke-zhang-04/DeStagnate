// WARNING: THIS CODE WAS COMPILED FOR DEVELOPMENT, AND IS NOT OPTIMISED FOR PRODUCTION. FOR PRODUCTION, USE THE --prod FLAG, OR ADD mode: production TO YOU CONFIG FILE

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable multiline-comment-style, no-undef, no-magic-numbers */

/* Already declared
const DS = DeStagnate,
    {createElement, createRef} = DS,
*/
// Declare previously undeclared variables
// @ts-ignore ignores ts(2451): Cannot redeclare block-scoped variable
var _DS = DS,
    createRef = _DS.createRef;

var RefExample = /*#__PURE__*/function (_DS$default) {
  _inherits(RefExample, _DS$default);

  var _super = _createSuper(RefExample);

  function RefExample() {
    var _this;

    _classCallCheck(this, RefExample);

    _this = _super.apply(this, arguments);

    _this._inputGroupPrepend = function () {
      return createElement("div", {
        "class": "input-group-prepend"
      }, createElement("span", {
        "class": "input-group-text"
      }, "Input"));
    };

    _this._formRef = createRef();

    _this._getInputValues = function () {
      var _this$_formRef$curren;

      var val = (_this$_formRef$curren = _this._formRef.current) === null || _this$_formRef$curren === void 0 ? void 0 : _this$_formRef$curren.value;
      alert("INPUT VALUE: \"".concat(val, "\""));
    };

    _this.render = function () {
      return [createElement("div", {
        "class": "input-group"
      }, _this._inputGroupPrepend(), createElement("input", {
        type: "text",
        "class": "form-control mb-3",
        placeholder: "Insert text here",
        ref: _this._formRef
      })), createElement("button", {
        "class": "btn btn-light mb-3",
        onClick: _this._getInputValues
      }, "Get input value")];
    };

    return _this;
  }

  return RefExample;
}(DS["default"]);

var refParent = document.getElementById("ref");

if (refParent) {
  var refComponent = new RefExample(refParent);
  refComponent.mount();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRFMiLCJjcmVhdGVSZWYiLCJSZWZFeGFtcGxlIiwiYXJndW1lbnRzIiwiX2lucHV0R3JvdXBQcmVwZW5kIiwiY3JlYXRlRWxlbWVudCIsIl9mb3JtUmVmIiwiX2dldElucHV0VmFsdWVzIiwidmFsIiwiY3VycmVudCIsInZhbHVlIiwiYWxlcnQiLCJyZW5kZXIiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZWYiLCJvbkNsaWNrIiwicmVmUGFyZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlZkNvbXBvbmVudCIsIm1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBSUE7QUFDQTtVQUNzQkEsRTtJQUFkQyxTLE9BQUFBLFM7O0lBQ0ZDLFU7Ozs7O0FBQ0Ysd0JBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU0MsU0FBVDs7QUFDQSxVQUFLQyxrQkFBTCxHQUEwQjtBQUFBLGFBQU1DLGFBQWEsQ0FBQyxLQUFELEVBQVE7QUFBRSxpQkFBTztBQUFULE9BQVIsRUFBMENBLGFBQWEsQ0FBQyxNQUFELEVBQVM7QUFBRSxpQkFBTztBQUFULE9BQVQsRUFBeUMsT0FBekMsQ0FBdkQsQ0FBbkI7QUFBQSxLQUExQjs7QUFDQSxVQUFLQyxRQUFMLEdBQWdCTCxTQUFTLEVBQXpCOztBQUNBLFVBQUtNLGVBQUwsR0FBdUIsWUFBTTtBQUFBOztBQUN6QixVQUFNQyxHQUFHLDRCQUFHLE1BQUtGLFFBQUwsQ0FBY0csT0FBakIsMERBQUcsc0JBQXVCQyxLQUFuQztBQUNBQyxNQUFBQSxLQUFLLDBCQUFrQkgsR0FBbEIsUUFBTDtBQUNILEtBSEQ7O0FBSUEsVUFBS0ksTUFBTCxHQUFjO0FBQUEsYUFBTSxDQUNoQlAsYUFBYSxDQUFDLEtBQUQsRUFBUTtBQUFFLGlCQUFPO0FBQVQsT0FBUixFQUFrQyxNQUFLRCxrQkFBTCxFQUFsQyxFQUE2REMsYUFBYSxDQUFDLE9BQUQsRUFBVTtBQUM3RlEsUUFBQUEsSUFBSSxFQUFFLE1BRHVGO0FBRTdGLGlCQUFPLG1CQUZzRjtBQUc3RkMsUUFBQUEsV0FBVyxFQUFFLGtCQUhnRjtBQUk3RkMsUUFBQUEsR0FBRyxFQUFFLE1BQUtUO0FBSm1GLE9BQVYsQ0FBMUUsQ0FERyxFQU9oQkQsYUFBYSxDQUFDLFFBQUQsRUFBVztBQUNwQixpQkFBTyxvQkFEYTtBQUVwQlcsUUFBQUEsT0FBTyxFQUFFLE1BQUtUO0FBRk0sT0FBWCxFQUdWLGlCQUhVLENBUEcsQ0FBTjtBQUFBLEtBQWQ7O0FBUlU7QUFvQmI7OztFQXJCb0JQLEVBQUUsVzs7QUF1QjNCLElBQU1pQixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFsQjs7QUFDQSxJQUFJRixTQUFKLEVBQWU7QUFDWCxNQUFNRyxZQUFZLEdBQUcsSUFBSWxCLFVBQUosQ0FBZWUsU0FBZixDQUFyQjtBQUNBRyxFQUFBQSxZQUFZLENBQUNDLEtBQWI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG11bHRpbGluZS1jb21tZW50LXN0eWxlLCBuby11bmRlZiwgbm8tbWFnaWMtbnVtYmVycyAqL1xuLyogQWxyZWFkeSBkZWNsYXJlZFxuY29uc3QgRFMgPSBEZVN0YWduYXRlLFxuICAgIHtjcmVhdGVFbGVtZW50LCBjcmVhdGVSZWZ9ID0gRFMsXG4qL1xuLy8gRGVjbGFyZSBwcmV2aW91c2x5IHVuZGVjbGFyZWQgdmFyaWFibGVzXG4vLyBAdHMtaWdub3JlIGlnbm9yZXMgdHMoMjQ1MSk6IENhbm5vdCByZWRlY2xhcmUgYmxvY2stc2NvcGVkIHZhcmlhYmxlXG5jb25zdCB7IGNyZWF0ZVJlZiB9ID0gRFM7XG5jbGFzcyBSZWZFeGFtcGxlIGV4dGVuZHMgRFMuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX2lucHV0R3JvdXBQcmVwZW5kID0gKCkgPT4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImlucHV0LWdyb3VwLXByZXBlbmRcIiB9LCBjcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcImlucHV0LWdyb3VwLXRleHRcIiwgfSwgXCJJbnB1dFwiKSk7XG4gICAgICAgIHRoaXMuX2Zvcm1SZWYgPSBjcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5fZ2V0SW5wdXRWYWx1ZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLl9mb3JtUmVmLmN1cnJlbnQ/LnZhbHVlO1xuICAgICAgICAgICAgYWxlcnQoYElOUFVUIFZBTFVFOiBcIiR7dmFsfVwiYCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVuZGVyID0gKCkgPT4gW1xuICAgICAgICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImlucHV0LWdyb3VwXCIgfSwgdGhpcy5faW5wdXRHcm91cFByZXBlbmQoKSwgY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBjbGFzczogXCJmb3JtLWNvbnRyb2wgbWItM1wiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkluc2VydCB0ZXh0IGhlcmVcIixcbiAgICAgICAgICAgICAgICByZWY6IHRoaXMuX2Zvcm1SZWYsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJidG4gYnRuLWxpZ2h0IG1iLTNcIixcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLl9nZXRJbnB1dFZhbHVlc1xuICAgICAgICAgICAgfSwgXCJHZXQgaW5wdXQgdmFsdWVcIilcbiAgICAgICAgXTtcbiAgICB9XG59XG5jb25zdCByZWZQYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZlwiKTtcbmlmIChyZWZQYXJlbnQpIHtcbiAgICBjb25zdCByZWZDb21wb25lbnQgPSBuZXcgUmVmRXhhbXBsZShyZWZQYXJlbnQpO1xuICAgIHJlZkNvbXBvbmVudC5tb3VudCgpO1xufVxuIl19