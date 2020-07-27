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
var _DS = DS,
    createDSComponent = _DS.createDSComponent,
    createRef = _DS.createRef; // Current player

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRFMiLCJjcmVhdGVEU0NvbXBvbmVudCIsImNyZWF0ZVJlZiIsImN1cnJlbnRQbGF5ZXIiLCJUaWNUYWNUb2UiLCJhcmd1bWVudHMiLCJfc3F1YXJlcyIsIl9jaGVja0Zvcldpbm5lciIsImkiLCJyb3dzIiwibWFwIiwidmFsIiwiY3VycmVudCIsImdldFN0YXRlIiwiY2xpY2tlZCIsImNvbHVtbnMiLCJkaWFnb25hbHMiLCJkaWFnb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJ2YWwyIiwib25DbGljayIsInNxdWFyZSIsInNldFN0YXRlIiwiYWxlcnQiLCJTcXVhcmUiLCJwYXJlbnQiLCJzdGF0ZSIsInRpY3RhY3RvZVBhcmVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb3VudFRpY1RhY1RvZSIsInRpY3RhY3RvZSIsInJlc2V0QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVubW91bnQiLCJtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUlBO1VBQ3lDQSxFO0lBQWpDQyxpQixPQUFBQSxpQjtJQUFtQkMsUyxPQUFBQSxTLEVBQzNCOztBQUNBLElBQUlDLGFBQWEsR0FBRyxHQUFwQjs7SUFDTUMsUzs7Ozs7QUFDRix1QkFBYztBQUFBOztBQUFBOztBQUNWLCtCQUFTQyxTQUFUO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixDQUNaLENBQUNKLFNBQVMsRUFBVixFQUFjQSxTQUFTLEVBQXZCLEVBQTJCQSxTQUFTLEVBQXBDLENBRFksRUFFWixDQUFDQSxTQUFTLEVBQVYsRUFBY0EsU0FBUyxFQUF2QixFQUEyQkEsU0FBUyxFQUFwQyxDQUZZLEVBR1osQ0FBQ0EsU0FBUyxFQUFWLEVBQWNBLFNBQVMsRUFBdkIsRUFBMkJBLFNBQVMsRUFBcEMsQ0FIWSxDQUFoQjs7QUFLQSxVQUFLSyxlQUFMLEdBQXVCLFlBQU07QUFBQTs7QUFBQSxpQ0FDaEJDLENB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OEVwQnlCLE07Ozs7O0FBQ0Ysa0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFDaEIsZ0NBQU1BLE1BQU47O0FBQ0EsV0FBS1IsTUFBTCxHQUFjO0FBQUEsYUFBTUMsYUFBYSxDQUFDLEtBQUQsRUFBUTtBQUFFLGlCQUFPO0FBQVQsT0FBUixFQUF3QyxPQUFLUSxLQUFMLENBQVdiLE9BQW5ELENBQW5CO0FBQUEsS0FBZDs7QUFDQSxXQUFLYSxLQUFMLEdBQWE7QUFDVGIsTUFBQUEsT0FBTyxFQUFFO0FBREEsS0FBYjtBQUhnQjtBQU1uQjs7O0VBUGdCZCxFQUFFLFc7O0FBU3ZCLElBQU00QixlQUFlLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUF4Qjs7QUFDQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekIsTUFBSUgsZUFBSixFQUFxQjtBQUNqQixRQUFNSSxTQUFTLEdBQUcsSUFBSTVCLFNBQUosQ0FBY3dCLGVBQWQsQ0FBbEI7QUFBQSxRQUFrREssUUFBUSxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQTdEOztBQUNBLFFBQUlHLFFBQUosRUFBYztBQUNWQSxNQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQU07QUFDckNGLFFBQUFBLFNBQVMsQ0FBQ0csT0FBVjtBQUNBSixRQUFBQSxjQUFjO0FBQ2pCLE9BSEQ7QUFJSDs7QUFDREMsSUFBQUEsU0FBUyxDQUFDSSxLQUFWO0FBQ0g7QUFDSixDQVhEOztBQVlBTCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbXVsdGlsaW5lLWNvbW1lbnQtc3R5bGUsIG5vLXVuZGVmLCBuby1tYWdpYy1udW1iZXJzICovXG4vKiBBbHJlYWR5IGRlY2xhcmVkXG5jb25zdCBEUyA9IERlU3RhZ25hdGUsXG4gICAge2NyZWF0ZUVsZW1lbnR9ID0gRFNcbiovXG4vLyBEZWNsYXJlIHByZXZpb3VzbHkgdW5kZWNsYXJlZCB2YXJpYWJsZXNcbmNvbnN0IHsgY3JlYXRlRFNDb21wb25lbnQsIGNyZWF0ZVJlZiB9ID0gRFM7XG4vLyBDdXJyZW50IHBsYXllclxubGV0IGN1cnJlbnRQbGF5ZXIgPSBcInhcIjtcbmNsYXNzIFRpY1RhY1RvZSBleHRlbmRzIERTLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9zcXVhcmVzID0gW1xuICAgICAgICAgICAgW2NyZWF0ZVJlZigpLCBjcmVhdGVSZWYoKSwgY3JlYXRlUmVmKCldLFxuICAgICAgICAgICAgW2NyZWF0ZVJlZigpLCBjcmVhdGVSZWYoKSwgY3JlYXRlUmVmKCldLFxuICAgICAgICAgICAgW2NyZWF0ZVJlZigpLCBjcmVhdGVSZWYoKSwgY3JlYXRlUmVmKCldLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLl9jaGVja0Zvcldpbm5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93cyA9IFswLCAxLCAyXS5tYXAoKHZhbCkgPT4gdGhpcy5fc3F1YXJlc1tpXVt2YWxdXG4gICAgICAgICAgICAgICAgICAgIC5jdXJyZW50XG4gICAgICAgICAgICAgICAgICAgID8uZ2V0U3RhdGVcbiAgICAgICAgICAgICAgICAgICAgLmNsaWNrZWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbMCwgMSwgMl0ubWFwKCh2YWwpID0+IHRoaXMuX3NxdWFyZXNbdmFsXVtpXVxuICAgICAgICAgICAgICAgICAgICAuY3VycmVudFxuICAgICAgICAgICAgICAgICAgICA/LmdldFN0YXRlXG4gICAgICAgICAgICAgICAgICAgIC5jbGlja2VkKTtcbiAgICAgICAgICAgICAgICBpZiAocm93c1swXSA9PT0gcm93c1sxXSAmJlxuICAgICAgICAgICAgICAgICAgICByb3dzWzFdID09PSByb3dzWzJdICYmXG4gICAgICAgICAgICAgICAgICAgIHJvd3NbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvd3NbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbHVtbnNbMF0gPT09IGNvbHVtbnNbMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uc1sxXSA9PT0gY29sdW1uc1syXSAmJlxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW5zWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpYWdvbmFscyA9IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NxdWFyZXNbMF1bMF0uY3VycmVudD8uZ2V0U3RhdGUuY2xpY2tlZCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3F1YXJlc1sxXVsxXS5jdXJyZW50Py5nZXRTdGF0ZS5jbGlja2VkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcXVhcmVzWzJdWzJdLmN1cnJlbnQ/LmdldFN0YXRlLmNsaWNrZWQsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NxdWFyZXNbMF1bMl0uY3VycmVudD8uZ2V0U3RhdGUuY2xpY2tlZCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3F1YXJlc1sxXVsxXS5jdXJyZW50Py5nZXRTdGF0ZS5jbGlja2VkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcXVhcmVzWzJdWzBdLmN1cnJlbnQ/LmdldFN0YXRlLmNsaWNrZWQsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRpYWdvbmFsIG9mIGRpYWdvbmFscykge1xuICAgICAgICAgICAgICAgIGlmIChkaWFnb25hbFswXSA9PT0gZGlhZ29uYWxbMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgZGlhZ29uYWxbMV0gPT09IGRpYWdvbmFsWzJdICYmXG4gICAgICAgICAgICAgICAgICAgIGRpYWdvbmFsWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaWFnb25hbFswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiBbMCwgMSwgMl1cbiAgICAgICAgICAgIC8vIENyZWF0ZSAzIHJvd3NcbiAgICAgICAgICAgIC5tYXAoKHZhbCkgPT4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInJvd1wiIH0sIFxuICAgICAgICAvLyBDcmVhdGUgMyBjb2x1bW5zXG4gICAgICAgIFswLCAxLCAyXS5tYXAoKHZhbDIpID0+IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgY2xhc3M6IFwiY29sLTRcIixcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBDdXJyZW50IHNxdWFyZVxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuX3NxdWFyZXNbdmFsXVt2YWwyXVxuICAgICAgICAgICAgICAgICAgICAuY3VycmVudDtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBzcXVhcmUgaXNuJ3QgYWxyZWFkeSBjbGlja2VkXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZT8uZ2V0U3RhdGUuY2xpY2tlZCA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmU/LnNldFN0YXRlKHsgY2xpY2tlZDogY3VycmVudFBsYXllciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQ2hhbmdlIGN1cnJlbnQgcGxheWVyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBcIm9cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBcInhcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NoZWNrRm9yV2lubmVyKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoYFBsYXllciAke3RoaXMuX2NoZWNrRm9yV2lubmVyKCl9IGhhcyB3b24gdGhlIGdhbWUhYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwgY3JlYXRlRFNDb21wb25lbnQoU3F1YXJlLCB7fSwgdGhpcy5fc3F1YXJlc1t2YWxdW3ZhbDJdKSkpKSk7XG4gICAgfVxufVxuY2xhc3MgU3F1YXJlIGV4dGVuZHMgRFMuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gKCkgPT4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInRpY3RhY3RvZS1zcXVhcmVcIiwgfSwgdGhpcy5zdGF0ZS5jbGlja2VkKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNsaWNrZWQ6IFwiXCIsXG4gICAgICAgIH07XG4gICAgfVxufVxuY29uc3QgdGljdGFjdG9lUGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXN0ZWRcIik7XG5jb25zdCBtb3VudFRpY1RhY1RvZSA9ICgpID0+IHtcbiAgICBpZiAodGljdGFjdG9lUGFyZW50KSB7XG4gICAgICAgIGNvbnN0IHRpY3RhY3RvZSA9IG5ldyBUaWNUYWNUb2UodGljdGFjdG9lUGFyZW50KSwgcmVzZXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5lc3RlZC1yZXNldC1idG5cIik7XG4gICAgICAgIGlmIChyZXNldEJ0bikge1xuICAgICAgICAgICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aWN0YWN0b2UudW5tb3VudCgpO1xuICAgICAgICAgICAgICAgIG1vdW50VGljVGFjVG9lKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aWN0YWN0b2UubW91bnQoKTtcbiAgICB9XG59O1xubW91bnRUaWNUYWNUb2UoKTtcbiJdfQ==