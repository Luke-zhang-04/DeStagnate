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

/* eslint-disable multiline-comment-style, no-undef, no-magic-numbers, max-len */

/* Already declared
const DS = DeStagnate,
    {createElement} = DS
*/
var Calculator = /*#__PURE__*/function (_DS$default) {
  _inherits(Calculator, _DS$default);

  var _super = _createSuper(Calculator);

  function Calculator(parent) {
    var _this;

    _classCallCheck(this, Calculator);

    _this = _super.call(this, parent);

    _defineProperty(_assertThisInitialized(_this), "_calcButton", function (text, append) {
      return createElement("div", {
        "class": "col-3 calc-btn",
        // Bootstrap grid
        onClick: function onClick() {
          return _this.setState({
            calculation: _this.state.calculation + (append ? append : text)
          });
        }
      }, text);
    });

    _defineProperty(_assertThisInitialized(_this), "_evalCalc", function () {
      return eval(_this.state.calculation);
    });

    _defineProperty(_assertThisInitialized(_this), "_numBtns", [/*#__PURE__*/DeStagnate.createElement("div", {
      class: "calc-btns row"
    }, ["7", "8", "9", ["x", "*"]].map(function (val) {
      return _this._calcButton(val instanceof Array ? val[0] : val, val instanceof Array ? val[1] : val);
    })), /*#__PURE__*/DeStagnate.createElement("div", {
      class: "calc-btns row"
    }, ["4", "5", "6", "-"].map(function (val) {
      return _this._calcButton(val instanceof Array ? val[0] : val, val instanceof Array ? val[1] : val);
    })), /*#__PURE__*/DeStagnate.createElement("div", {
      class: "calc-btns row"
    }, ["1", "2", "3", "+"].map(function (val) {
      return _this._calcButton(val instanceof Array ? val[0] : val, val instanceof Array ? val[1] : val);
    }))]);

    _defineProperty(_assertThisInitialized(_this), "_calcDisplay", function () {
      return createElement("div", {
        "class": "calc-display"
      }, _this.state.calculation);
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return /*#__PURE__*/DeStagnate.createElement("div", null, _this._calcDisplay(), /*#__PURE__*/DeStagnate.createElement("div", {
        class: "calc-btns row"
      }, /*#__PURE__*/DeStagnate.createElement("div", {
        class: "col-3 calc-btn clear",
        onClick: function onClick() {
          return _this.setState({
            calculation: ""
          });
        }
      }, "C"), createElement("div", {
        "class": "col-3 calc-btn",
        onClick: function onClick() {
          return _this.setState({
            calculation: _this.state.calculation.slice(0, _this.state.calculation.length - 1)
          });
        }
      }, "\u2190"), _this._calcButton("%"), _this._calcButton("\xF7", "/")), _this._numBtns.map(function (btn) {
        return btn;
      }), createElement("div", {
        "class": "calc-btns row"
      }, [_this._calcButton("0"), _this._calcButton("."), createElement("div", {
        "class": "col-6 calc-btn equals",
        onClick: function onClick() {
          return _this.setState({
            calculation: _this._evalCalc()
          });
        }
      }, "=") // Equals
      ]));
    });

    _this.state = {
      calculation: ""
    };
    return _this;
  }
  /**
   * Create a calculator button
   * @param {string} text - text of button
   * @param {string | undefined} append - value to append to calculaton
   * @returns {HTMLElement} col element
   */


  return Calculator;
}(DS["default"]);

var calculator = new Calculator(document.querySelector("#calculator"));
calculator.mount(); // Must call once
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsInBhcmVudCIsInRleHQiLCJhcHBlbmQiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsInNldFN0YXRlIiwiY2FsY3VsYXRpb24iLCJzdGF0ZSIsImV2YWwiLCJtYXAiLCJ2YWwiLCJfY2FsY0J1dHRvbiIsIkFycmF5IiwiX2NhbGNEaXNwbGF5Iiwic2xpY2UiLCJsZW5ndGgiLCJfbnVtQnRucyIsImJ0biIsIl9ldmFsQ2FsYyIsIkRTIiwiY2FsY3VsYXRvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUFLTUEsVTs7Ozs7QUFFRixzQkFBYUMsTUFBYixFQUFxQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsTUFBTjs7QUFEaUIsa0VBY1AsVUFBQ0MsSUFBRCxFQUFPQyxNQUFQO0FBQUEsYUFBa0JDLGFBQWEsQ0FBQyxLQUFELEVBQVE7QUFDakQsaUJBQU8sZ0JBRDBDO0FBQ3hCO0FBQ3pCQyxRQUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFLQyxRQUFMLENBQWM7QUFDekJDLFlBQUFBLFdBQVcsRUFBRSxNQUFLQyxLQUFMLENBQVdELFdBQVgsSUFBMEJKLE1BQU0sR0FBR0EsTUFBSCxHQUFZRCxJQUE1QztBQURZLFdBQWQsQ0FBTjtBQUFBO0FBRndDLE9BQVIsRUFLMUNBLElBTDBDLENBQS9CO0FBQUEsS0FkTzs7QUFBQSxnRUEwQlQ7QUFBQSxhQUFNTyxJQUFJLENBQUMsTUFBS0QsS0FBTCxDQUFXRCxXQUFaLENBQVY7QUFBQSxLQTFCUzs7QUFBQSwrREFpQ1YsY0FDUDtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsT0FDSyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLENBQWhCLEVBQTRCRyxHQUE1QixDQUFnQyxVQUFDQyxH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Tm1DLE9BQWxDLENBbkJsQixDQURLO0FBQUEsS0F0RVk7O0FBR2pCLFVBQUtYLEtBQUwsR0FBYTtBQUNURCxNQUFBQSxXQUFXLEVBQUU7QUFESixLQUFiO0FBSGlCO0FBTXBCO0FBRUQ7Ozs7Ozs7OztFQVZxQmEsRUFBRSxXOztBQXlHM0IsSUFBTUMsVUFBVSxHQUFHLElBQUlyQixVQUFKLENBQWVzQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBZixDQUFuQjtBQUVBRixVQUFVLENBQUNHLEtBQVgsRyxDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG11bHRpbGluZS1jb21tZW50LXN0eWxlLCBuby11bmRlZiwgbm8tbWFnaWMtbnVtYmVycywgbWF4LWxlbiAqL1xuLyogQWxyZWFkeSBkZWNsYXJlZFxuY29uc3QgRFMgPSBEZVN0YWduYXRlLFxuICAgIHtjcmVhdGVFbGVtZW50fSA9IERTXG4qL1xuXG5jbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgRFMuZGVmYXVsdCB7XG5cbiAgICBjb25zdHJ1Y3RvciAocGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHBhcmVudClcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2FsY3VsYXRpb246IFwiXCIsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBjYWxjdWxhdG9yIGJ1dHRvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCBvZiBidXR0b25cbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZH0gYXBwZW5kIC0gdmFsdWUgdG8gYXBwZW5kIHRvIGNhbGN1bGF0b25cbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IGNvbCBlbGVtZW50XG4gICAgICovXG4gICAgX2NhbGNCdXR0b24gPSAodGV4dCwgYXBwZW5kKSA9PiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3M6IFwiY29sLTMgY2FsYy1idG5cIiwgLy8gQm9vdHN0cmFwIGdyaWRcbiAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYWxjdWxhdGlvbjogdGhpcy5zdGF0ZS5jYWxjdWxhdGlvbiArIChhcHBlbmQgPyBhcHBlbmQgOiB0ZXh0KSxcbiAgICAgICAgfSksXG4gICAgfSwgdGV4dClcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWV2YWwgKi9cbiAgICAvKipcbiAgICAgKiBFdmFsdWF0ZSBjdXJyZW50IGNhbGN1bGF0aW9uXG4gICAgICogQHJldHVybnMge251bWJlcn0gY2FsY3VsYXRpb25cbiAgICAgKi9cbiAgICBfZXZhbENhbGMgPSAoKSA9PiBldmFsKHRoaXMuc3RhdGUuY2FsY3VsYXRpb24pXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZXZhbCAqL1xuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRvciBidXR0b25zIGZvciAzIG51bWJlcmVkIHJvd3NcbiAgICAgKiBAdHlwZSB7QXJyYXkuPEhUTUxFbGVtZW50Pn1cbiAgICAgKi9cbiAgICBfbnVtQnRucyA9IFtcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjLWJ0bnMgcm93XCI+IFxuICAgICAgICAgICAge1tcIjdcIiwgXCI4XCIsIFwiOVwiLCBbXCJ4XCIsIFwiKlwiXV0ubWFwKCh2YWwpID0+IChcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxjQnV0dG9uKFxuICAgICAgICAgICAgICAgICAgICB2YWwgaW5zdGFuY2VvZiBBcnJheSA/IHZhbFswXSA6IHZhbCxcbiAgICAgICAgICAgICAgICAgICAgdmFsIGluc3RhbmNlb2YgQXJyYXkgPyB2YWxbMV0gOiB2YWwsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PixcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjLWJ0bnMgcm93XCI+IFxuICAgICAgICAgICAge1tcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIi1cIl0ubWFwKCh2YWwpID0+IChcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxjQnV0dG9uKFxuICAgICAgICAgICAgICAgICAgICB2YWwgaW5zdGFuY2VvZiBBcnJheSA/IHZhbFswXSA6IHZhbCxcbiAgICAgICAgICAgICAgICAgICAgdmFsIGluc3RhbmNlb2YgQXJyYXkgPyB2YWxbMV0gOiB2YWwsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PixcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjLWJ0bnMgcm93XCI+IFxuICAgICAgICAgICAge1tcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIitcIl0ubWFwKCh2YWwpID0+IChcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxjQnV0dG9uKFxuICAgICAgICAgICAgICAgICAgICB2YWwgaW5zdGFuY2VvZiBBcnJheSA/IHZhbFswXSA6IHZhbCxcbiAgICAgICAgICAgICAgICAgICAgdmFsIGluc3RhbmNlb2YgQXJyYXkgPyB2YWxbMV0gOiB2YWwsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PixcbiAgICBdXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdG9yIERpc3BsYXlcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IGRpc3BsYXlcbiAgICAgKi9cbiAgICBfY2FsY0Rpc3BsYXkgPSAoKSA9PiBjcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7Y2xhc3M6IFwiY2FsYy1kaXNwbGF5XCJ9LFxuICAgICAgICB0aGlzLnN0YXRlLmNhbGN1bGF0aW9uLFxuICAgIClcblxuICAgIHJlbmRlciA9ICgpID0+IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt0aGlzLl9jYWxjRGlzcGxheSgpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjLWJ0bnMgcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMyBjYWxjLWJ0biBjbGVhclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe2NhbGN1bGF0aW9uOiBcIlwifSl9XG4gICAgICAgICAgICAgICAgPkM8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Y3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImNvbC0zIGNhbGMtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRpb246IHRoaXMuc3RhdGUuY2FsY3VsYXRpb24uc2xpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgdGhpcy5zdGF0ZS5jYWxjdWxhdGlvbi5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgfSwgXCJcXHUyMTkwXCIpfVxuICAgICAgICAgICAgICAgIHt0aGlzLl9jYWxjQnV0dG9uKFwiJVwiKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5fY2FsY0J1dHRvbihcIlxcdTAwZjdcIiwgXCIvXCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dGhpcy5fbnVtQnRucy5tYXAoKGJ0bikgPT4gYnRuKX1cbiAgICAgICAgICAgIHtjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzczogXCJjYWxjLWJ0bnMgcm93XCJ9LCBbXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsY0J1dHRvbihcIjBcIiksXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsY0J1dHRvbihcIi5cIiksXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImNvbC02IGNhbGMtYnRuIGVxdWFsc1wiLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLnNldFN0YXRlKHtjYWxjdWxhdGlvbjogdGhpcy5fZXZhbENhbGMoKX0pLFxuICAgICAgICAgICAgICAgIH0sIFwiPVwiKSwgLy8gRXF1YWxzXG4gICAgICAgICAgICBdKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59XG5cbmNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ2FsY3VsYXRvcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbGN1bGF0b3JcIikpXG5cbmNhbGN1bGF0b3IubW91bnQoKSAvLyBNdXN0IGNhbGwgb25jZVxuIl19