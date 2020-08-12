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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable multiline-comment-style, no-undef */
var DS = DeStagnate,
    createElement = DS.createElement;

var Counter = /*#__PURE__*/function (_DS$Component) {
  _inherits(Counter, _DS$Component);

  var _super = _createSuper(Counter);

  function Counter(parent) {
    var _this;

    _classCallCheck(this, Counter);

    _this = _super.call(this, parent);

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      setInterval(function () {
        _this.setState({
          count: _this.state.count + 1
        });
      }, 1000);
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return /*#__PURE__*/DeStagnate.createElement("div", null, /*#__PURE__*/DeStagnate.createElement("p", null, "Seconds:"), /*#__PURE__*/DeStagnate.createElement("p", null, _this.state.count));
    });

    _this.state = {
      count: 0
    };
    return _this;
  }

  return Counter;
}(DS.Component);

var counter = new Counter(document.querySelector("#counter"));
counter.mount(); // Must call once
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRFMiLCJEZVN0YWduYXRlIiwiY3JlYXRlRWxlbWVudCIsIkNvdW50ZXIiLCJwYXJlbnQiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwiY291bnQiLCJzdGF0ZSIsIkNvbXBvbmVudCIsImNvdW50ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ00sSUFBQUEsRUFBRSxHQUFHQyxVQUFMO0FBQUEsSUFDREMsYUFEQyxHQUNnQkYsRUFEaEIsQ0FDREUsYUFEQzs7SUFHQUMsTzs7Ozs7QUFFRixtQkFBYUMsTUFBYixFQUFxQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsTUFBTjs7QUFEaUIsd0VBUUQsWUFBTTtBQUN0QkMsTUFBQUEsV0FBVyxDQUFDLFlBQU07QUFDZCxjQUFLQyxRQUFMLENBQWM7QUFBQ0MsVUFBQUEsS0FBSyxFQUFFLE1BQUtDLEtBQUwsQ0FBV0QsS0FBWCxHQUFtQjtBQUEzQixTQUFkO0FBQ0gsT0FGVSxFQUVSLElBRlEsQ0FBWDtBQUdILEtBWm9COztBQUFBLDZEQWNaO0FBQUEsMEJBQU0sOENBQ1gsMENBRFcsZUFFWCwrQkFBSSxNQUFLQyxLQUFMLENBQVdELEtBQWYsQ0FGVyxDQUFOO0FBQUEsS0FkWTs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1RELE1BQUFBLEtBQUssRUFBRTtBQURFLEtBQWI7QUFIaUI7QUFNcEI7OztFQVJpQlAsRUFBRSxDQUFDUyxTOztBQXVCekIsSUFBTUMsT0FBTyxHQUFHLElBQUlQLE9BQUosQ0FBWVEsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQVosQ0FBaEI7QUFFQUYsT0FBTyxDQUFDRyxLQUFSLEcsQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtdWx0aWxpbmUtY29tbWVudC1zdHlsZSwgbm8tdW5kZWYgKi9cbmNvbnN0IERTID0gRGVTdGFnbmF0ZSxcbiAgICB7Y3JlYXRlRWxlbWVudH0gPSBEU1xuXG5jbGFzcyBDb3VudGVyIGV4dGVuZHMgRFMuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yIChwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIocGFyZW50KVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb3VudDogdGhpcy5zdGF0ZS5jb3VudCArIDF9KVxuICAgICAgICB9LCAxMDAwKVxuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+IDxkaXY+XG4gICAgICAgIDxwPlNlY29uZHM6PC9wPlxuICAgICAgICA8cD57dGhpcy5zdGF0ZS5jb3VudH08L3A+XG4gICAgPC9kaXY+XG5cbn1cblxuY29uc3QgY291bnRlciA9IG5ldyBDb3VudGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRlclwiKSlcblxuY291bnRlci5tb3VudCgpIC8vIE11c3QgY2FsbCBvbmNlXG4iXX0=