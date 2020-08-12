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
// @ts-ignore ignores ts(2451): Cannot redeclare block-scoped variable
var DS = DeStagnate,
    createElement = DS.createElement,
    createRef = DS.createRef;

var RefExample = /*#__PURE__*/function (_DS$Component) {
  _inherits(RefExample, _DS$Component);

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
}(DS.Component);

var refParent = document.getElementById("ref");

if (refParent) {
  var refComponent = new RefExample(refParent);
  refComponent.mount();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRFMiLCJEZVN0YWduYXRlIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZVJlZiIsIlJlZkV4YW1wbGUiLCJhcmd1bWVudHMiLCJfaW5wdXRHcm91cFByZXBlbmQiLCJfZm9ybVJlZiIsIl9nZXRJbnB1dFZhbHVlcyIsInZhbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImFsZXJ0IiwicmVuZGVyIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVmIiwib25DbGljayIsIkNvbXBvbmVudCIsInJlZlBhcmVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZWZDb21wb25lbnQiLCJtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ00sSUFBQUEsRUFBRSxHQUFHQyxVQUFMO0FBQUEsSUFFSkMsYUFGSSxHQUV5QkYsRUFGekIsQ0FFSkUsYUFGSTtBQUFBLElBRVdDLFNBRlgsR0FFeUJILEVBRnpCLENBRVdHLFNBRlg7O0lBR0FDLFU7Ozs7O0FBQ0Ysd0JBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU0MsU0FBVDs7QUFDQSxVQUFLQyxrQkFBTCxHQUEwQjtBQUFBLGFBQU1KLGFBQWEsQ0FBQyxLQUFELEVBQVE7QUFBRSxpQkFBTztBQUFULE9BQVIsRUFBMENBLGFBQWEsQ0FBQyxNQUFELEVBQVM7QUFBRSxpQkFBTztBQUFULE9BQVQsRUFBeUMsT0FBekMsQ0FBdkQsQ0FBbkI7QUFBQSxLQUExQjs7QUFDQSxVQUFLSyxRQUFMLEdBQWdCSixTQUFTLEVBQXpCOztBQUNBLFVBQUtLLGVBQUwsR0FBdUIsWUFBTTtBQUFBOztBQUN6QixVQUFNQyxHQUFHLDRCQUFHLE1BQUtGLFFBQUwsQ0FBY0csT0FBakIsMERBQUcsc0JBQXVCQyxLQUFuQztBQUNBQyxNQUFBQSxLQUFLLDBCQUFrQkgsR0FBbEIsUUFBTDtBQUNILEtBSEQ7O0FBSUEsVUFBS0ksTUFBTCxHQUFjO0FBQUEsYUFBTSxDQUNoQlgsYUFBYSxDQUFDLEtBQUQsRUFBUTtBQUFFLGlCQUFPO0FBQVQsT0FBUixFQUFrQyxNQUFLSSxrQkFBTCxFQUFsQyxFQUE2REosYUFBYSxDQUFDLE9BQUQsRUFBVTtBQUM3RlksUUFBQUEsSUFBSSxFQUFFLE1BRHVGO0FBRTdGLGlCQUFPLG1CQUZzRjtBQUc3RkMsUUFBQUEsV0FBVyxFQUFFLGtCQUhnRjtBQUk3RkMsUUFBQUEsR0FBRyxFQUFFLE1BQUtUO0FBSm1GLE9BQVYsQ0FBMUUsQ0FERyxFQU9oQkwsYUFBYSxDQUFDLFFBQUQsRUFBVztBQUNwQixpQkFBTyxvQkFEYTtBQUVwQmUsUUFBQUEsT0FBTyxFQUFFLE1BQUtUO0FBRk0sT0FBWCxFQUdWLGlCQUhVLENBUEcsQ0FBTjtBQUFBLEtBQWQ7O0FBUlU7QUFvQmI7OztFQXJCb0JSLEVBQUUsQ0FBQ2tCLFM7O0FBdUI1QixJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFsQjs7QUFDQSxJQUFJRixTQUFKLEVBQWU7QUFDWCxNQUFNRyxZQUFZLEdBQUcsSUFBSWxCLFVBQUosQ0FBZWUsU0FBZixDQUFyQjtBQUNBRyxFQUFBQSxZQUFZLENBQUNDLEtBQWI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG11bHRpbGluZS1jb21tZW50LXN0eWxlLCBuby11bmRlZiwgbm8tbWFnaWMtbnVtYmVycyAqL1xuLy8gQHRzLWlnbm9yZSBpZ25vcmVzIHRzKDI0NTEpOiBDYW5ub3QgcmVkZWNsYXJlIGJsb2NrLXNjb3BlZCB2YXJpYWJsZVxuY29uc3QgRFMgPSBEZVN0YWduYXRlLCBcbi8vIEB0cy1pZ25vcmUgaWdub3JlcyB0cygyNDUxKTogQ2Fubm90IHJlZGVjbGFyZSBibG9jay1zY29wZWQgdmFyaWFibGVcbnsgY3JlYXRlRWxlbWVudCwgY3JlYXRlUmVmIH0gPSBEUztcbmNsYXNzIFJlZkV4YW1wbGUgZXh0ZW5kcyBEUy5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9pbnB1dEdyb3VwUHJlcGVuZCA9ICgpID0+IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpbnB1dC1ncm91cC1wcmVwZW5kXCIgfSwgY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzczogXCJpbnB1dC1ncm91cC10ZXh0XCIsIH0sIFwiSW5wdXRcIikpO1xuICAgICAgICB0aGlzLl9mb3JtUmVmID0gY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuX2dldElucHV0VmFsdWVzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5fZm9ybVJlZi5jdXJyZW50Py52YWx1ZTtcbiAgICAgICAgICAgIGFsZXJ0KGBJTlBVVCBWQUxVRTogXCIke3ZhbH1cImApO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlbmRlciA9ICgpID0+IFtcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpbnB1dC1ncm91cFwiIH0sIHRoaXMuX2lucHV0R3JvdXBQcmVwZW5kKCksIGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiZm9ybS1jb250cm9sIG1iLTNcIixcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJJbnNlcnQgdGV4dCBoZXJlXCIsXG4gICAgICAgICAgICAgICAgcmVmOiB0aGlzLl9mb3JtUmVmLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1saWdodCBtYi0zXCIsXG4gICAgICAgICAgICAgICAgb25DbGljazogdGhpcy5fZ2V0SW5wdXRWYWx1ZXNcbiAgICAgICAgICAgIH0sIFwiR2V0IGlucHV0IHZhbHVlXCIpXG4gICAgICAgIF07XG4gICAgfVxufVxuY29uc3QgcmVmUGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWZcIik7XG5pZiAocmVmUGFyZW50KSB7XG4gICAgY29uc3QgcmVmQ29tcG9uZW50ID0gbmV3IFJlZkV4YW1wbGUocmVmUGFyZW50KTtcbiAgICByZWZDb21wb25lbnQubW91bnQoKTtcbn1cbiJdfQ==