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

    _defineProperty(_assertThisInitialized(_this), "_appendState", function (text, append) {
      return {
        calculation: _this.state.calculation + (append ? append : text)
      };
    });

    _defineProperty(_assertThisInitialized(_this), "_calcButton", function (text, append) {
      return createElement("div", {
        "class": "col-3 calc-btn",
        // Bootstrap grid
        onClick: function onClick() {
          return _this.setState(_this._appendState(text, append));
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
   * Appends new values to calculation
   * @param {string} text - text of button
   * @param {string | undefined} append - value to append to
   * calculation
   * @returns {Object.<string, string>} new state
   */


  return Calculator;
}(DS["default"]);

var calculator = new Calculator(document.querySelector("#calculator"));
calculator.mount(); // Must call once
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsInBhcmVudCIsInRleHQiLCJhcHBlbmQiLCJjYWxjdWxhdGlvbiIsInN0YXRlIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJzZXRTdGF0ZSIsIl9hcHBlbmRTdGF0ZSIsImV2YWwiLCJtYXAiLCJ2YWwiLCJfY2FsY0J1dHRvbiIsIkFycmF5IiwiX2NhbGNEaXNwbGF5Iiwic2xpY2UiLCJsZW5ndGgiLCJfbnVtQnRucyIsImJ0biIsIl9ldmFsQ2FsYyIsIkRTIiwiY2FsY3VsYXRvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUFLTUEsVTs7Ozs7QUFFRixzQkFBYUMsTUFBYixFQUFxQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsTUFBTjs7QUFEaUIsbUVBZU4sVUFBQ0MsSUFBRCxFQUFPQyxNQUFQO0FBQUEsYUFBbUI7QUFDOUJDLFFBQUFBLFdBQVcsRUFBRSxNQUFLQyxLQUFMLENBQVdELFdBQVgsSUFBMEJELE1BQU0sR0FBR0EsTUFBSCxHQUFZRCxJQUE1QztBQURpQixPQUFuQjtBQUFBLEtBZk07O0FBQUEsa0VBMEJQLFVBQUNBLElBQUQsRUFBT0MsTUFBUDtBQUFBLGFBQWtCRyxhQUFhLENBQ3pDLEtBRHlDLEVBRXpDO0FBQ0ksaUJBQU8sZ0JBRFg7QUFDNkI7QUFDekJDLFFBQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUtDLFFBQUwsQ0FBYyxNQUFLQyxZQUFMLENBQWtCUCxJQUFsQixFQUF3QkMsTUFBeEIsQ0FBZCxDQUFOO0FBQUE7QUFGYixPQUZ5QyxFQU16Q0QsSUFOeUMsQ0FBL0I7QUFBQSxLQTFCTzs7QUFBQSxnRUF3Q1Q7QUFBQSxhQUFNUSxJQUFJLENBQUMsTUFBS0wsS0FBTCxDQUFXRCxXQUFaLENBQVY7QUFBQSxLQXhDUzs7QUFBQSwrREErQ1YsY0FDUDtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsT0FDSyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLENBQWhCLEVBQTRCTyxHQUE1QixDQUFnQyxVQUFDQyxHQUFEO0FBQUEsYUFDN0IsTUFBS0MsV0FBTCxDQUNJRCxHQUFHLFlBQVlFLEtBQWYsR0FBdUJGLEdBQUcsQ0FBQyxDQUFELENBQTFCLEdBQWdDQSxHQURwQyxFQUVJQSxHQUFHLFlBQVlFLEtBQWYsR0FBdUJGLEdBQUcsQ0FBQyxDQUFELENBQTFCLEdBQWdDQSxHQUZwQyxDQUQ2QjtBQUFBLEtBQWhDLENBREwsQ0FETyxlQVNQO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUNLLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCRCxHQUFyQixDQUF5QixVQUFDQyxHQUFEO0FBQUEsYUFDdEIsTUFBS0MsV0FBTCxDQUNJRCxHQUFHLFlBQVlFLEtBQWYsR0FBdUJGLEdBQUcsQ0FBQyxDQUFELENBQTFCLEdBQWdDQSxHQURwQyxFQUVJQSxHQUFHLFlBQVlFLEtBQWYsR0FBdUJGLEdBQUcsQ0FBQyxDQUFELENBQTFCLEdBQWdDQSxHQUZwQyxDQURzQjtBQUFBLEtBQXpCLENBREwsQ0FUTyxlQWlCUDtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsT0FDSyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQkQsR0FBckIsQ0FBeUIsVUFBQ0MsR0FBRDtBQUFBLGFBQ3RCLE1BQUtDLFdBQUwsQ0FDSUQsR0FBRyxZQUFZRSxLQUFmLEdBQXVCRixHQUFHLENBQUMsQ0FBRCxDQUExQixHQUFnQ0EsR0FEcEMsRUFFSUEsR0FBRyxZQUFZRSxLQUFmLEdBQXVCRixHQUFHLENBQUMsQ0FBRCxDQUExQixHQUFnQ0EsR0FGcEMsQ0FEc0I7QUFBQSxLQUF6QixDQURMLENBakJPLENBL0NVOztBQUFBLG1FQThFTjtBQUFBLGFBQU1OLGFBQWEsQ0FDOUIsS0FEOEIsRUFFOUI7QUFBQyxpQkFBTztBQUFSLE9BRjhCLEVBRzlCLE1BQUtELEtBQUwsQ0FBV0QsV0FIbUIsQ0FBbkI7QUFBQSxLQTlFTTs7QUFBQSw2REFvRlo7QUFBQSwwQkFDTCxpQ0FDSyxNQUFLVyxZQUFMLEVBREwsZUFFSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsc0JBQ0k7QUFDSSxRQUFBLFNBQVMsRUFBQyxzQkFEZDtBQUVJLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU0sTUFBS1AsUUFBTCxDQUFjO0FBQUNKLFlBQUFBLFdBQVcsRUFBRTtBQUFkLFdBQWQsQ0FBTjtBQUFBO0FBRmIsYUFESixFQUtLRSxhQUFhLENBQUMsS0FBRCxFQUFRO0FBQ2xCLGlCQUFPLGdCQURXO0FBRWxCQyxRQUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFLQyxRQUFMLENBQWM7QUFDekJKLFlBQUFBLFdBQVcsRUFBRSxNQUFLQyxLQUFMLENBQVdELFdBQVgsQ0FBdUJZLEtBQXZCLENBQ1QsQ0FEUyxFQUNOLE1BQUtYLEtBQUwsQ0FBV0QsV0FBWCxDQUF1QmEsTUFBdkIsR0FBZ0MsQ0FEMUI7QUFEWSxXQUFkLENBQU47QUFBQTtBQUZTLE9BQVIsRUFPWCxRQVBXLENBTGxCLEVBYUssTUFBS0osV0FBTCxDQUFpQixHQUFqQixDQWJMLEVBY0ssTUFBS0EsV0FBTCxDQUFpQixNQUFqQixFQUEyQixHQUEzQixDQWRMLENBRkosRUFrQkssTUFBS0ssUUFBTCxDQUFjUCxHQUFkLENBQWtCLFVBQUNRLEdBQUQ7QUFBQSxlQUFTQSxHQUFUO0FBQUEsT0FBbEIsQ0FsQkwsRUFtQktiLGFBQWEsQ0FBQyxLQUFELEVBQVE7QUFBQyxpQkFBTztBQUFSLE9BQVIsRUFBa0MsQ0FDNUMsTUFBS08sV0FBTCxDQUFpQixHQUFqQixDQUQ0QyxFQUU1QyxNQUFLQSxXQUFMLENBQWlCLEdBQWpCLENBRjRDLEVBRzVDUCxhQUFhLENBQUMsS0FBRCxFQUFRO0FBQ2pCLGlCQUFPLHVCQURVO0FBRWpCQyxRQUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFLQyxRQUFMLENBQWM7QUFBQ0osWUFBQUEsV0FBVyxFQUFFLE1BQUtnQixTQUFMO0FBQWQsV0FBZCxDQUFOO0FBQUE7QUFGUSxPQUFSLEVBR1YsR0FIVSxDQUgrQixDQU1uQztBQU5tQyxPQUFsQyxDQW5CbEIsQ0FESztBQUFBLEtBcEZZOztBQUdqQixVQUFLZixLQUFMLEdBQWE7QUFDVEQsTUFBQUEsV0FBVyxFQUFFO0FBREosS0FBYjtBQUhpQjtBQU1wQjtBQUVEOzs7Ozs7Ozs7O0VBVnFCaUIsRUFBRSxXOztBQXVIM0IsSUFBTUMsVUFBVSxHQUFHLElBQUl0QixVQUFKLENBQWV1QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBZixDQUFuQjtBQUVBRixVQUFVLENBQUNHLEtBQVgsRyxDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG11bHRpbGluZS1jb21tZW50LXN0eWxlLCBuby11bmRlZiwgbm8tbWFnaWMtbnVtYmVycywgbWF4LWxlbiAqL1xuLyogQWxyZWFkeSBkZWNsYXJlZFxuY29uc3QgRFMgPSBEZVN0YWduYXRlLFxuICAgIHtjcmVhdGVFbGVtZW50fSA9IERTXG4qL1xuXG5jbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgRFMuZGVmYXVsdCB7XG5cbiAgICBjb25zdHJ1Y3RvciAocGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHBhcmVudClcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2FsY3VsYXRpb246IFwiXCIsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIG5ldyB2YWx1ZXMgdG8gY2FsY3VsYXRpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRleHQgb2YgYnV0dG9uXG4gICAgICogQHBhcmFtIHtzdHJpbmcgfCB1bmRlZmluZWR9IGFwcGVuZCAtIHZhbHVlIHRvIGFwcGVuZCB0b1xuICAgICAqIGNhbGN1bGF0aW9uXG4gICAgICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBuZXcgc3RhdGVcbiAgICAgKi9cbiAgICBfYXBwZW5kU3RhdGUgPSAodGV4dCwgYXBwZW5kKSA9PiAoe1xuICAgICAgICBjYWxjdWxhdGlvbjogdGhpcy5zdGF0ZS5jYWxjdWxhdGlvbiArIChhcHBlbmQgPyBhcHBlbmQgOiB0ZXh0KSxcbiAgICB9KVxuICAgIFxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGNhbGN1bGF0b3IgYnV0dG9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0ZXh0IG9mIGJ1dHRvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgdW5kZWZpbmVkfSBhcHBlbmQgLSB2YWx1ZSB0byBhcHBlbmQgdG9cbiAgICAgKiBjYWxjdWxhdG9uXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBjb2wgZWxlbWVudFxuICAgICAqL1xuICAgIF9jYWxjQnV0dG9uID0gKHRleHQsIGFwcGVuZCkgPT4gY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgICAgY2xhc3M6IFwiY29sLTMgY2FsYy1idG5cIiwgLy8gQm9vdHN0cmFwIGdyaWRcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuc2V0U3RhdGUodGhpcy5fYXBwZW5kU3RhdGUodGV4dCwgYXBwZW5kKSksXG4gICAgICAgIH0sXG4gICAgICAgIHRleHQsXG4gICAgKVxuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZXZhbCAqL1xuICAgIC8qKlxuICAgICAqIEV2YWx1YXRlIGN1cnJlbnQgY2FsY3VsYXRpb25cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBjYWxjdWxhdGlvblxuICAgICAqL1xuICAgIF9ldmFsQ2FsYyA9ICgpID0+IGV2YWwodGhpcy5zdGF0ZS5jYWxjdWxhdGlvbilcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1ldmFsICovXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdG9yIGJ1dHRvbnMgZm9yIDMgbnVtYmVyZWQgcm93c1xuICAgICAqIEB0eXBlIHtBcnJheS48SFRNTEVsZW1lbnQ+fVxuICAgICAqL1xuICAgIF9udW1CdG5zID0gW1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGMtYnRucyByb3dcIj4gXG4gICAgICAgICAgICB7W1wiN1wiLCBcIjhcIiwgXCI5XCIsIFtcInhcIiwgXCIqXCJdXS5tYXAoKHZhbCkgPT4gKFxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGNCdXR0b24oXG4gICAgICAgICAgICAgICAgICAgIHZhbCBpbnN0YW5jZW9mIEFycmF5ID8gdmFsWzBdIDogdmFsLFxuICAgICAgICAgICAgICAgICAgICB2YWwgaW5zdGFuY2VvZiBBcnJheSA/IHZhbFsxXSA6IHZhbCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+LFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGMtYnRucyByb3dcIj4gXG4gICAgICAgICAgICB7W1wiNFwiLCBcIjVcIiwgXCI2XCIsIFwiLVwiXS5tYXAoKHZhbCkgPT4gKFxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGNCdXR0b24oXG4gICAgICAgICAgICAgICAgICAgIHZhbCBpbnN0YW5jZW9mIEFycmF5ID8gdmFsWzBdIDogdmFsLFxuICAgICAgICAgICAgICAgICAgICB2YWwgaW5zdGFuY2VvZiBBcnJheSA/IHZhbFsxXSA6IHZhbCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+LFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGMtYnRucyByb3dcIj4gXG4gICAgICAgICAgICB7W1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiK1wiXS5tYXAoKHZhbCkgPT4gKFxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGNCdXR0b24oXG4gICAgICAgICAgICAgICAgICAgIHZhbCBpbnN0YW5jZW9mIEFycmF5ID8gdmFsWzBdIDogdmFsLFxuICAgICAgICAgICAgICAgICAgICB2YWwgaW5zdGFuY2VvZiBBcnJheSA/IHZhbFsxXSA6IHZhbCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+LFxuICAgIF1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0b3IgRGlzcGxheVxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gZGlzcGxheVxuICAgICAqL1xuICAgIF9jYWxjRGlzcGxheSA9ICgpID0+IGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtjbGFzczogXCJjYWxjLWRpc3BsYXlcIn0sXG4gICAgICAgIHRoaXMuc3RhdGUuY2FsY3VsYXRpb24sXG4gICAgKVxuXG4gICAgcmVuZGVyID0gKCkgPT4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3RoaXMuX2NhbGNEaXNwbGF5KCl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGMtYnRucyByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0zIGNhbGMtYnRuIGNsZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7Y2FsY3VsYXRpb246IFwiXCJ9KX1cbiAgICAgICAgICAgICAgICA+QzwvZGl2PlxuICAgICAgICAgICAgICAgIHtjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiY29sLTMgY2FsYy1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGlvbjogdGhpcy5zdGF0ZS5jYWxjdWxhdGlvbi5zbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCB0aGlzLnN0YXRlLmNhbGN1bGF0aW9uLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB9LCBcIlxcdTIxOTBcIil9XG4gICAgICAgICAgICAgICAge3RoaXMuX2NhbGNCdXR0b24oXCIlXCIpfVxuICAgICAgICAgICAgICAgIHt0aGlzLl9jYWxjQnV0dG9uKFwiXFx1MDBmN1wiLCBcIi9cIil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt0aGlzLl9udW1CdG5zLm1hcCgoYnRuKSA9PiBidG4pfVxuICAgICAgICAgICAge2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzOiBcImNhbGMtYnRucyByb3dcIn0sIFtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxjQnV0dG9uKFwiMFwiKSxcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxjQnV0dG9uKFwiLlwiKSxcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiY29sLTYgY2FsYy1idG4gZXF1YWxzXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuc2V0U3RhdGUoe2NhbGN1bGF0aW9uOiB0aGlzLl9ldmFsQ2FsYygpfSksXG4gICAgICAgICAgICAgICAgfSwgXCI9XCIpLCAvLyBFcXVhbHNcbiAgICAgICAgICAgIF0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn1cblxuY29uc3QgY2FsY3VsYXRvciA9IG5ldyBDYWxjdWxhdG9yKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FsY3VsYXRvclwiKSlcblxuY2FsY3VsYXRvci5tb3VudCgpIC8vIE11c3QgY2FsbCBvbmNlXG4iXX0=