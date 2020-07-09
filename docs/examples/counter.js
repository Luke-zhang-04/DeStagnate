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

var Counter = /*#__PURE__*/function (_DS$default) {
  _inherits(Counter, _DS$default);

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
}(DS["default"]);

var counter = new Counter(document.querySelector("#counter"));
counter.mount(); // Must call once
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRFMiLCJEZVN0YWduYXRlIiwiY3JlYXRlRWxlbWVudCIsIkNvdW50ZXIiLCJwYXJlbnQiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwiY291bnQiLCJzdGF0ZSIsImNvdW50ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ00sSUFBQUEsRUFBRSxHQUFHQyxVQUFMO0FBQUEsSUFDREMsYUFEQyxHQUNnQkYsRUFEaEIsQ0FDREUsYUFEQzs7SUFHQUMsTzs7Ozs7QUFFRixtQkFBYUMsTUFBYixFQUFxQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsTUFBTjs7QUFEaUIsd0VBUUQsWUFBTTtBQUN0QkMsTUFBQUEsV0FBVyxDQUFDLFlBQU07QUFDZCxjQUFLQyxRQUFMLENBQWM7QUFBQ0MsVUFBQUEsS0FBSyxFQUFFLE1BQUtDLEtBQUwsQ0FBV0QsS0FBWCxHQUFtQjtBQUEzQixTQUFkO0FBQ0gsT0FGVSxFQUVSLElBRlEsQ0FBWDtBQUdILEtBWm9COztBQUFBLDZEQWNaO0FBQUEsMEJBQU0sOENBQ1gsMENBRFcsZUFFWCwrQkFBSSxNQUFLQyxLQUFMLENBQVdELEtBQWYsQ0FGVyxDQUFOO0FBQUEsS0FkWTs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1RELE1BQUFBLEtBQUssRUFBRTtBQURFLEtBQWI7QUFIaUI7QUFNcEI7OztFQVJpQlAsRUFBRSxXOztBQXVCeEIsSUFBTVMsT0FBTyxHQUFHLElBQUlOLE9BQUosQ0FBWU8sUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQVosQ0FBaEI7QUFFQUYsT0FBTyxDQUFDRyxLQUFSLEcsQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtdWx0aWxpbmUtY29tbWVudC1zdHlsZSwgbm8tdW5kZWYgKi9cbmNvbnN0IERTID0gRGVTdGFnbmF0ZSxcbiAgICB7Y3JlYXRlRWxlbWVudH0gPSBEU1xuXG5jbGFzcyBDb3VudGVyIGV4dGVuZHMgRFMuZGVmYXVsdCB7XG5cbiAgICBjb25zdHJ1Y3RvciAocGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHBhcmVudClcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnQ6IHRoaXMuc3RhdGUuY291bnQgKyAxfSlcbiAgICAgICAgfSwgMTAwMClcbiAgICB9XG5cbiAgICByZW5kZXIgPSAoKSA9PiA8ZGl2PlxuICAgICAgICA8cD5TZWNvbmRzOjwvcD5cbiAgICAgICAgPHA+e3RoaXMuc3RhdGUuY291bnR9PC9wPlxuICAgIDwvZGl2PlxuXG59XG5cbmNvbnN0IGNvdW50ZXIgPSBuZXcgQ291bnRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50ZXJcIikpXG5cbmNvdW50ZXIubW91bnQoKSAvLyBNdXN0IGNhbGwgb25jZVxuIl19