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
    _this._squares = [[new Square(), new Square(), new Square()], [new Square(), new Square(), new Square()], [new Square(), new Square(), new Square()]];

    _this._checkForWinner = function () {
      var _loop = function _loop(i) {
        var rows = [0, 1, 2].map(function (val) {
          return _this._squares[i][val].getState.clicked;
        });
        var columns = [0, 1, 2].map(function (val) {
          return _this._squares[val][i].getState.clicked;
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

      var diagonals = [[_this._squares[0][0].getState.clicked, _this._squares[1][1].getState.clicked, _this._squares[2][2].getState.clicked], [_this._squares[0][2].getState.clicked, _this._squares[1][1].getState.clicked, _this._squares[2][0].getState.clicked]];

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
              var square = _this._squares[val][val2]; // Check if square isn't already clicked

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
          }, _this._squares[val][val2]);
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

  function Square() {
    var _this2;

    _classCallCheck(this, Square);

    _this2 = _super2.call(this);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRFMiLCJjcmVhdGVEU0NvbXBvbmVudCIsImN1cnJlbnRQbGF5ZXIiLCJUaWNUYWNUb2UiLCJhcmd1bWVudHMiLCJfc3F1YXJlcyIsIlNxdWFyZSIsIl9jaGVja0Zvcldpbm5lciIsImkiLCJyb3dzIiwibWFwIiwidmFsIiwiZ2V0U3RhdGUiLCJjbGlja2VkIiwiY29sdW1ucyIsImRpYWdvbmFscyIsImRpYWdvbmFsIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInZhbDIiLCJvbkNsaWNrIiwic3F1YXJlIiwic2V0U3RhdGUiLCJhbGVydCIsInN0YXRlIiwidGljdGFjdG9lUGFyZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1vdW50VGljVGFjVG9lIiwidGljdGFjdG9lIiwicmVzZXRCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwidW5tb3VudCIsIm1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBSUE7QUFDQTtVQUM4QkEsRTtJQUF0QkMsaUIsT0FBQUEsaUIsRUFDUjs7QUFDQSxJQUFJQyxhQUFhLEdBQUcsR0FBcEI7O0lBQ01DLFM7Ozs7O0FBQ0YsdUJBQWM7QUFBQTs7QUFBQTs7QUFDViwrQkFBU0MsU0FBVDtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsQ0FDWixDQUFDLElBQUlDLE1BQUosRUFBRCxFQUFlLElBQUlBLE1BQUosRUFBZixFQUE2QixJQUFJQSxNQUFKLEVBQTdCLENBRFksRUFFWixDQUFDLElBQUlBLE1BQUosRUFBRCxFQUFlLElBQUlBLE1BQUosRUFBZixFQUE2QixJQUFJQSxNQUFKLEVBQTdCLENBRlksRUFHWixDQUFDLElBQUlBLE1BQUosRUFBRCxFQUFlLElBQUlBLE1BQUosRUFBZixFQUE2QixJQUFJQSxNQUFKLEVBQTdCLENBSFksQ0FBaEI7O0FBS0EsVUFBS0MsZUFBTCxHQUF1QixZQUFNO0FBQUEsaUNBQ2hCQyxDQURnQjtBQUVy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QUFFLFc7O0FBU3ZCLElBQU15QixlQUFlLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUF4Qjs7QUFDQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekIsTUFBSUgsZUFBSixFQUFxQjtBQUNqQixRQUFNSSxTQUFTLEdBQUcsSUFBSTFCLFNBQUosQ0FBY3NCLGVBQWQsQ0FBbEI7QUFBQSxRQUFrREssUUFBUSxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQTdEOztBQUNBLFFBQUlHLFFBQUosRUFBYztBQUNWQSxNQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQU07QUFDckNGLFFBQUFBLFNBQVMsQ0FBQ0csT0FBVjtBQUNBSixRQUFBQSxjQUFjO0FBQ2pCLE9BSEQ7QUFJSDs7QUFDREMsSUFBQUEsU0FBUyxDQUFDSSxLQUFWO0FBQ0g7QUFDSixDQVhEOztBQVlBTCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbXVsdGlsaW5lLWNvbW1lbnQtc3R5bGUsIG5vLXVuZGVmLCBuby1tYWdpYy1udW1iZXJzICovXG4vKiBBbHJlYWR5IGRlY2xhcmVkXG5jb25zdCBEUyA9IERlU3RhZ25hdGUsXG4gICAge2NyZWF0ZUVsZW1lbnR9ID0gRFNcbiovXG4vLyBEZWNsYXJlIHByZXZpb3VzbHkgdW5kZWNsYXJlZCB2YXJpYWJsZXNcbi8vIEB0cy1pZ25vcmUgaWdub3JlcyB0cygyNDUxKTogQ2Fubm90IHJlZGVjbGFyZSBibG9jay1zY29wZWQgdmFyaWFibGVcbmNvbnN0IHsgY3JlYXRlRFNDb21wb25lbnQgfSA9IERTO1xuLy8gQ3VycmVudCBwbGF5ZXJcbmxldCBjdXJyZW50UGxheWVyID0gXCJ4XCI7XG5jbGFzcyBUaWNUYWNUb2UgZXh0ZW5kcyBEUy5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fc3F1YXJlcyA9IFtcbiAgICAgICAgICAgIFtuZXcgU3F1YXJlKCksIG5ldyBTcXVhcmUoKSwgbmV3IFNxdWFyZSgpXSxcbiAgICAgICAgICAgIFtuZXcgU3F1YXJlKCksIG5ldyBTcXVhcmUoKSwgbmV3IFNxdWFyZSgpXSxcbiAgICAgICAgICAgIFtuZXcgU3F1YXJlKCksIG5ldyBTcXVhcmUoKSwgbmV3IFNxdWFyZSgpXSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5fY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBbMCwgMSwgMl0ubWFwKCh2YWwpID0+IHRoaXMuX3NxdWFyZXNbaV1bdmFsXVxuICAgICAgICAgICAgICAgICAgICAuZ2V0U3RhdGVcbiAgICAgICAgICAgICAgICAgICAgLmNsaWNrZWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbMCwgMSwgMl0ubWFwKCh2YWwpID0+IHRoaXMuX3NxdWFyZXNbdmFsXVtpXVxuICAgICAgICAgICAgICAgICAgICAuZ2V0U3RhdGVcbiAgICAgICAgICAgICAgICAgICAgLmNsaWNrZWQpO1xuICAgICAgICAgICAgICAgIGlmIChyb3dzWzBdID09PSByb3dzWzFdICYmXG4gICAgICAgICAgICAgICAgICAgIHJvd3NbMV0gPT09IHJvd3NbMl0gJiZcbiAgICAgICAgICAgICAgICAgICAgcm93c1swXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm93c1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29sdW1uc1swXSA9PT0gY29sdW1uc1sxXSAmJlxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zWzFdID09PSBjb2x1bW5zWzJdICYmXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnNbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGlhZ29uYWxzID0gW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3F1YXJlc1swXVswXS5nZXRTdGF0ZS5jbGlja2VkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcXVhcmVzWzFdWzFdLmdldFN0YXRlLmNsaWNrZWQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NxdWFyZXNbMl1bMl0uZ2V0U3RhdGUuY2xpY2tlZCxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3F1YXJlc1swXVsyXS5nZXRTdGF0ZS5jbGlja2VkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcXVhcmVzWzFdWzFdLmdldFN0YXRlLmNsaWNrZWQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NxdWFyZXNbMl1bMF0uZ2V0U3RhdGUuY2xpY2tlZCxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZGlhZ29uYWwgb2YgZGlhZ29uYWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpYWdvbmFsWzBdID09PSBkaWFnb25hbFsxXSAmJlxuICAgICAgICAgICAgICAgICAgICBkaWFnb25hbFsxXSA9PT0gZGlhZ29uYWxbMl0gJiZcbiAgICAgICAgICAgICAgICAgICAgZGlhZ29uYWxbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpYWdvbmFsWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlbmRlciA9ICgpID0+IFswLCAxLCAyXVxuICAgICAgICAgICAgLy8gQ3JlYXRlIDMgcm93c1xuICAgICAgICAgICAgLm1hcCgodmFsKSA9PiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwicm93XCIgfSwgXG4gICAgICAgIC8vIENyZWF0ZSAzIGNvbHVtbnNcbiAgICAgICAgWzAsIDEsIDJdLm1hcCgodmFsMikgPT4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBjbGFzczogXCJjb2wtNFwiLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEN1cnJlbnQgc3F1YXJlXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gdGhpcy5fc3F1YXJlc1t2YWxdW3ZhbDJdO1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHNxdWFyZSBpc24ndCBhbHJlYWR5IGNsaWNrZWRcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlPy5nZXRTdGF0ZS5jbGlja2VkID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZT8uc2V0U3RhdGUoeyBjbGlja2VkOiBjdXJyZW50UGxheWVyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgY3VycmVudCBwbGF5ZXJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBsYXllciA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBsYXllciA9IFwib1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBsYXllciA9IFwieFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2hlY2tGb3JXaW5uZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChgUGxheWVyICR7dGhpcy5fY2hlY2tGb3JXaW5uZXIoKX0gaGFzIHdvbiB0aGUgZ2FtZSFgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCB0aGlzLl9zcXVhcmVzW3ZhbF1bdmFsMl0pKSkpO1xuICAgIH1cbn1cbmNsYXNzIFNxdWFyZSBleHRlbmRzIERTLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJlbmRlciA9ICgpID0+IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0aWN0YWN0b2Utc3F1YXJlXCIsIH0sIHRoaXMuc3RhdGUuY2xpY2tlZCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjbGlja2VkOiBcIlwiLFxuICAgICAgICB9O1xuICAgIH1cbn1cbmNvbnN0IHRpY3RhY3RvZVBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmVzdGVkXCIpO1xuY29uc3QgbW91bnRUaWNUYWNUb2UgPSAoKSA9PiB7XG4gICAgaWYgKHRpY3RhY3RvZVBhcmVudCkge1xuICAgICAgICBjb25zdCB0aWN0YWN0b2UgPSBuZXcgVGljVGFjVG9lKHRpY3RhY3RvZVBhcmVudCksIHJlc2V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXN0ZWQtcmVzZXQtYnRuXCIpO1xuICAgICAgICBpZiAocmVzZXRCdG4pIHtcbiAgICAgICAgICAgIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGljdGFjdG9lLnVubW91bnQoKTtcbiAgICAgICAgICAgICAgICBtb3VudFRpY1RhY1RvZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGljdGFjdG9lLm1vdW50KCk7XG4gICAgfVxufTtcbm1vdW50VGljVGFjVG9lKCk7XG4iXX0=