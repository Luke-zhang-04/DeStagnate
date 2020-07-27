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
    {createElement} = DS
*/
// Declare previously undeclared variables
// @ts-ignore ignores ts(2451): Cannot redeclare block-scoped variable
var _DS = DS,
    createDSComponent = _DS.createDSComponent; // Current player

var currentPlayer = "x";

var TicTacToe = /*#__PURE__*/function (_DS$default) {
  _inherits(TicTacToe, _DS$default);

  var _super = _createSuper(TicTacToe);

  function TicTacToe() {
    var _this;

    _classCallCheck(this, TicTacToe);

    _this = _super.apply(this, arguments);
    _this._squares = [[createRef(), createRef(), createRef()], [createRef(), createRef(), createRef()], [createRef(), createRef(), createRef()]];

    _this._checkForWinner = function () {
      var _this$_squares$0$0$cu, _this$_squares$1$1$cu, _this$_squares$2$2$cu, _this$_squares$0$2$cu, _this$_squares$1$1$cu2, _this$_squares$2$0$cu;

      var _loop = function _loop(i) {
        var rows = [0, 1, 2].map(function (val) {
          var _this$_squares$i$val$;

          return (_this$_squares$i$val$ = _this._squares[i][val].current) === null || _this$_squares$i$val$ === void 0 ? void 0 : _this$_squares$i$val$.getState.clicked;
        });
        var columns = [0, 1, 2].map(function (val) {
          var _this$_squares$val$i$;

          return (_this$_squares$val$i$ = _this._squares[val][i].current) === null || _this$_squares$val$i$ === void 0 ? void 0 : _this$_squares$val$i$.getState.clicked;
        });

        if (rows[0] === rows[1] && rows[1] === rows[2] && rows[0]) {
          return {
            v: rows[0]
          };
        } else if (columns[0] === columns[1] && columns[1] === columns[2] && columns[0]) {
          return {
            v: columns[0]
          };
        }
      };

      for (var i = 0; i < 3; i++) {
        var _ret = _loop(i);

        if (_typeof(_ret) === "object") return _ret.v;
      }

      var diagonals = [[(_this$_squares$0$0$cu = _this._squares[0][0].current) === null || _this$_squares$0$0$cu === void 0 ? void 0 : _this$_squares$0$0$cu.getState.clicked, (_this$_squares$1$1$cu = _this._squares[1][1].current) === null || _this$_squares$1$1$cu === void 0 ? void 0 : _this$_squares$1$1$cu.getState.clicked, (_this$_squares$2$2$cu = _this._squares[2][2].current) === null || _this$_squares$2$2$cu === void 0 ? void 0 : _this$_squares$2$2$cu.getState.clicked], [(_this$_squares$0$2$cu = _this._squares[0][2].current) === null || _this$_squares$0$2$cu === void 0 ? void 0 : _this$_squares$0$2$cu.getState.clicked, (_this$_squares$1$1$cu2 = _this._squares[1][1].current) === null || _this$_squares$1$1$cu2 === void 0 ? void 0 : _this$_squares$1$1$cu2.getState.clicked, (_this$_squares$2$0$cu = _this._squares[2][0].current) === null || _this$_squares$2$0$cu === void 0 ? void 0 : _this$_squares$2$0$cu.getState.clicked]];

      for (var _i = 0, _diagonals = diagonals; _i < _diagonals.length; _i++) {
        var diagonal = _diagonals[_i];

        if (diagonal[0] === diagonal[1] && diagonal[1] === diagonal[2] && diagonal[0]) {
          return diagonal[0];
        }
      }

      return "";
    };

    _this.render = function () {
      return [0, 1, 2] // Create 3 rows
      .map(function (val) {
        return createElement("div", {
          "class": "row"
        }, // Create 3 columns
        [0, 1, 2].map(function (val2) {
          return createElement("div", {
            "class": "col-4",
            onClick: function onClick() {
              // Current square
              var square = _this._squares[val][val2].current; // Check if square isn't already clicked

              if ((square === null || square === void 0 ? void 0 : square.getState.clicked) === "") {
                square === null || square === void 0 ? void 0 : square.setState({
                  clicked: currentPlayer
                });
              } // Change current player


              if (currentPlayer === "x") {
                currentPlayer = "o";
              } else {
                currentPlayer = "x";
              }

              if (_this._checkForWinner()) {
                alert("Player ".concat(_this._checkForWinner(), " has won the game!"));
              }
            }
          }, createDSComponent(Square, {}, _this._squares[val][val2]));
        }));
      });
    };

    return _this;
  }

  return TicTacToe;
}(DS["default"]);

var Square = /*#__PURE__*/function (_DS$default2) {
  _inherits(Square, _DS$default2);

  var _super2 = _createSuper(Square);

  function Square(parent) {
    var _this2;

    _classCallCheck(this, Square);

    _this2 = _super2.call(this, parent);

    _this2.render = function () {
      return createElement("div", {
        "class": "tictactoe-square"
      }, _this2.state.clicked);
    };

    _this2.state = {
      clicked: ""
    };
    return _this2;
  }

  return Square;
}(DS["default"]);

var tictactoeParent = document.getElementById("nested");

var mountTicTacToe = function mountTicTacToe() {
  if (tictactoeParent) {
    var tictactoe = new TicTacToe(tictactoeParent),
        resetBtn = document.getElementById("nested-reset-btn");

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        tictactoe.unmount();
        mountTicTacToe();
      });
    }

    tictactoe.mount();
  }
};

mountTicTacToe();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRFMiLCJjcmVhdGVEU0NvbXBvbmVudCIsImN1cnJlbnRQbGF5ZXIiLCJUaWNUYWNUb2UiLCJhcmd1bWVudHMiLCJfc3F1YXJlcyIsImNyZWF0ZVJlZiIsIl9jaGVja0Zvcldpbm5lciIsImkiLCJyb3dzIiwibWFwIiwidmFsIiwiY3VycmVudCIsImdldFN0YXRlIiwiY2xpY2tlZCIsImNvbHVtbnMiLCJkaWFnb25hbHMiLCJkaWFnb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJ2YWwyIiwib25DbGljayIsInNxdWFyZSIsInNldFN0YXRlIiwiYWxlcnQiLCJTcXVhcmUiLCJwYXJlbnQiLCJzdGF0ZSIsInRpY3RhY3RvZVBhcmVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb3VudFRpY1RhY1RvZSIsInRpY3RhY3RvZSIsInJlc2V0QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVubW91bnQiLCJtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUlBO0FBQ0E7VUFDOEJBLEU7SUFBdEJDLGlCLE9BQUFBLGlCLEVBQ1I7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHLEdBQXBCOztJQUNNQyxTOzs7OztBQUNGLHVCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0JBQVNDLFNBQVQ7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLENBQ1osQ0FBQ0MsU0FBUyxFQUFWLEVBQWNBLFNBQVMsRUFBdkIsRUFBMkJBLFNBQVMsRUFBcEMsQ0FEWSxFQUVaLENBQUNBLFNBQVMsRUFBVixFQUFjQSxTQUFTLEVBQXZCLEVBQTJCQSxTQUFTLEVBQXBDLENBRlksRUFHWixDQUFDQSxTQUFTLEVBQVYsRUFBY0EsU0FBUyxFQUF2QixFQUEyQkEsU0FBUyxFQUFwQyxDQUhZLENBQWhCOztBQUtBLFVBQUtDLGVBQUwsR0FBdUIsWUFBTTtBQUFBOztBQUFBLGlDQUNoQkMsQ0FEZ0I7QUFFckIsWUFB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QUFDRixrQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBOztBQUNoQixnQ0FBTUEsTUFBTjs7QUFDQSxXQUFLUixNQUFMLEdBQWM7QUFBQSxhQUFNQyxhQUFhLENBQUMsS0FBRCxFQUFRO0FBQUUsaUJBQU87QUFBVCxPQUFSLEVBQXdDLE9BQUtRLEtBQUwsQ0FBV2IsT0FBbkQsQ0FBbkI7QUFBQSxLQUFkOztBQUNBLFdBQUthLEtBQUwsR0FBYTtBQUNUYixNQUFBQSxPQUFPLEVBQUU7QUFEQSxLQUFiO0FBSGdCO0FBTW5COzs7RUFQZ0JkLEVBQUUsVzs7QUFTdkIsSUFBTTRCLGVBQWUsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQXhCOztBQUNBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QixNQUFJSCxlQUFKLEVBQXFCO0FBQ2pCLFFBQU1JLFNBQVMsR0FBRyxJQUFJN0IsU0FBSixDQUFjeUIsZUFBZCxDQUFsQjtBQUFBLFFBQWtESyxRQUFRLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBN0Q7O0FBQ0EsUUFBSUcsUUFBSixFQUFjO0FBQ1ZBLE1BQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBTTtBQUNyQ0YsUUFBQUEsU0FBUyxDQUFDRyxPQUFWO0FBQ0FKLFFBQUFBLGNBQWM7QUFDakIsT0FIRDtBQUlIOztBQUNEQyxJQUFBQSxTQUFTLENBQUNJLEtBQVY7QUFDSDtBQUNKLENBWEQ7O0FBWUFMLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtdWx0aWxpbmUtY29tbWVudC1zdHlsZSwgbm8tdW5kZWYsIG5vLW1hZ2ljLW51bWJlcnMgKi9cbi8qIEFscmVhZHkgZGVjbGFyZWRcbmNvbnN0IERTID0gRGVTdGFnbmF0ZSxcbiAgICB7Y3JlYXRlRWxlbWVudH0gPSBEU1xuKi9cbi8vIERlY2xhcmUgcHJldmlvdXNseSB1bmRlY2xhcmVkIHZhcmlhYmxlc1xuLy8gQHRzLWlnbm9yZSBpZ25vcmVzIHRzKDI0NTEpOiBDYW5ub3QgcmVkZWNsYXJlIGJsb2NrLXNjb3BlZCB2YXJpYWJsZVxuY29uc3QgeyBjcmVhdGVEU0NvbXBvbmVudCB9ID0gRFM7XG4vLyBDdXJyZW50IHBsYXllclxubGV0IGN1cnJlbnRQbGF5ZXIgPSBcInhcIjtcbmNsYXNzIFRpY1RhY1RvZSBleHRlbmRzIERTLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9zcXVhcmVzID0gW1xuICAgICAgICAgICAgW2NyZWF0ZVJlZigpLCBjcmVhdGVSZWYoKSwgY3JlYXRlUmVmKCldLFxuICAgICAgICAgICAgW2NyZWF0ZVJlZigpLCBjcmVhdGVSZWYoKSwgY3JlYXRlUmVmKCldLFxuICAgICAgICAgICAgW2NyZWF0ZVJlZigpLCBjcmVhdGVSZWYoKSwgY3JlYXRlUmVmKCldLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLl9jaGVja0Zvcldpbm5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93cyA9IFswLCAxLCAyXS5tYXAoKHZhbCkgPT4gdGhpcy5fc3F1YXJlc1tpXVt2YWxdXG4gICAgICAgICAgICAgICAgICAgIC5jdXJyZW50XG4gICAgICAgICAgICAgICAgICAgID8uZ2V0U3RhdGVcbiAgICAgICAgICAgICAgICAgICAgLmNsaWNrZWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbMCwgMSwgMl0ubWFwKCh2YWwpID0+IHRoaXMuX3NxdWFyZXNbdmFsXVtpXVxuICAgICAgICAgICAgICAgICAgICAuY3VycmVudFxuICAgICAgICAgICAgICAgICAgICA/LmdldFN0YXRlXG4gICAgICAgICAgICAgICAgICAgIC5jbGlja2VkKTtcbiAgICAgICAgICAgICAgICBpZiAocm93c1swXSA9PT0gcm93c1sxXSAmJlxuICAgICAgICAgICAgICAgICAgICByb3dzWzFdID09PSByb3dzWzJdICYmXG4gICAgICAgICAgICAgICAgICAgIHJvd3NbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvd3NbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbHVtbnNbMF0gPT09IGNvbHVtbnNbMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uc1sxXSA9PT0gY29sdW1uc1syXSAmJlxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW5zWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpYWdvbmFscyA9IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NxdWFyZXNbMF1bMF0uY3VycmVudD8uZ2V0U3RhdGUuY2xpY2tlZCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3F1YXJlc1sxXVsxXS5jdXJyZW50Py5nZXRTdGF0ZS5jbGlja2VkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcXVhcmVzWzJdWzJdLmN1cnJlbnQ/LmdldFN0YXRlLmNsaWNrZWQsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NxdWFyZXNbMF1bMl0uY3VycmVudD8uZ2V0U3RhdGUuY2xpY2tlZCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3F1YXJlc1sxXVsxXS5jdXJyZW50Py5nZXRTdGF0ZS5jbGlja2VkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcXVhcmVzWzJdWzBdLmN1cnJlbnQ/LmdldFN0YXRlLmNsaWNrZWQsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRpYWdvbmFsIG9mIGRpYWdvbmFscykge1xuICAgICAgICAgICAgICAgIGlmIChkaWFnb25hbFswXSA9PT0gZGlhZ29uYWxbMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgZGlhZ29uYWxbMV0gPT09IGRpYWdvbmFsWzJdICYmXG4gICAgICAgICAgICAgICAgICAgIGRpYWdvbmFsWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaWFnb25hbFswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiBbMCwgMSwgMl1cbiAgICAgICAgICAgIC8vIENyZWF0ZSAzIHJvd3NcbiAgICAgICAgICAgIC5tYXAoKHZhbCkgPT4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInJvd1wiIH0sIFxuICAgICAgICAvLyBDcmVhdGUgMyBjb2x1bW5zXG4gICAgICAgIFswLCAxLCAyXS5tYXAoKHZhbDIpID0+IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgY2xhc3M6IFwiY29sLTRcIixcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBDdXJyZW50IHNxdWFyZVxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuX3NxdWFyZXNbdmFsXVt2YWwyXVxuICAgICAgICAgICAgICAgICAgICAuY3VycmVudDtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBzcXVhcmUgaXNuJ3QgYWxyZWFkeSBjbGlja2VkXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZT8uZ2V0U3RhdGUuY2xpY2tlZCA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmU/LnNldFN0YXRlKHsgY2xpY2tlZDogY3VycmVudFBsYXllciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQ2hhbmdlIGN1cnJlbnQgcGxheWVyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBcIm9cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBcInhcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NoZWNrRm9yV2lubmVyKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoYFBsYXllciAke3RoaXMuX2NoZWNrRm9yV2lubmVyKCl9IGhhcyB3b24gdGhlIGdhbWUhYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwgY3JlYXRlRFNDb21wb25lbnQoU3F1YXJlLCB7fSwgdGhpcy5fc3F1YXJlc1t2YWxdW3ZhbDJdKSkpKSk7XG4gICAgfVxufVxuY2xhc3MgU3F1YXJlIGV4dGVuZHMgRFMuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gKCkgPT4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRpY3RhY3RvZS1zcXVhcmVcIiwgfSwgdGhpcy5zdGF0ZS5jbGlja2VkKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNsaWNrZWQ6IFwiXCIsXG4gICAgICAgIH07XG4gICAgfVxufVxuY29uc3QgdGljdGFjdG9lUGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXN0ZWRcIik7XG5jb25zdCBtb3VudFRpY1RhY1RvZSA9ICgpID0+IHtcbiAgICBpZiAodGljdGFjdG9lUGFyZW50KSB7XG4gICAgICAgIGNvbnN0IHRpY3RhY3RvZSA9IG5ldyBUaWNUYWNUb2UodGljdGFjdG9lUGFyZW50KSwgcmVzZXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5lc3RlZC1yZXNldC1idG5cIik7XG4gICAgICAgIGlmIChyZXNldEJ0bikge1xuICAgICAgICAgICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aWN0YWN0b2UudW5tb3VudCgpO1xuICAgICAgICAgICAgICAgIG1vdW50VGljVGFjVG9lKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aWN0YWN0b2UubW91bnQoKTtcbiAgICB9XG59O1xubW91bnRUaWNUYWNUb2UoKTtcbiJdfQ==