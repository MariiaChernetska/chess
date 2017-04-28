/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cell__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Coordinates__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__King__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Piece__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Board; });




var Board = (function () {
    function Board() {
        this.cells = [];
        this.board = document.getElementById('board');
        this.drawBoard(this.board);
        var kingB = new __WEBPACK_IMPORTED_MODULE_2__King__["a" /* King */](__WEBPACK_IMPORTED_MODULE_3__Piece__["a" /* Color */].Black, __WEBPACK_IMPORTED_MODULE_3__Piece__["a" /* Color */].White);
        var kingW = new __WEBPACK_IMPORTED_MODULE_2__King__["a" /* King */](__WEBPACK_IMPORTED_MODULE_3__Piece__["a" /* Color */].White, __WEBPACK_IMPORTED_MODULE_3__Piece__["a" /* Color */].White);
        this.drawFigure(kingB);
        this.drawFigure(kingW);
    }
    Board.prototype.drawBoard = function (board) {
        for (var i = 0; i < 8; i++) {
            this.cells[i] = new Array();
            for (var j = 0; j < 8; j++) {
                this.cells[i].push(new __WEBPACK_IMPORTED_MODULE_0__Cell__["a" /* Cell */](true, false, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](i, j)));
                var cell = document.createElement('div');
                cell.id = i.toString() + j.toString();
                if (i % 2 == 0) {
                    if (j % 2 == 0) {
                        cell.className = "cell light";
                    }
                    else {
                        cell.className = "cell dark";
                    }
                }
                else {
                    if (j % 2 == 0) {
                        cell.className = "cell dark";
                    }
                    else {
                        cell.className = "cell light";
                    }
                }
                board.appendChild(cell);
            }
        }
        console.log(this.cells);
    };
    Board.prototype.drawFigure = function (figure) {
        var elementId = figure.position.y.toString() + figure.position.x.toString();
        var cell = document.getElementById(elementId);
        var piece = document.createElement("div");
        piece.className = figure.className;
        cell.appendChild(piece);
    };
    return Board;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_Board__ = __webpack_require__(0);

var b = new __WEBPACK_IMPORTED_MODULE_0__models_Board__["a" /* Board */]();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cell; });
var Cell = (function () {
    function Cell(isAvailable, isOccupied, coordinates) {
        this.isAvailable = isAvailable;
        this.isOccupied = isOccupied;
        this.coordinates = coordinates;
    }
    Cell.prototype.setAvailability = function (state) {
        this.isAvailable = state;
    };
    Cell.prototype.setOccupacy = function (state) {
        this.isOccupied = state;
    };
    return Cell;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coordinates; });
var Coordinates = (function () {
    function Coordinates(x, y) {
        if (x >= 0 && x < 8 && y >= 0 && y < 8) {
            this.x = x;
            this.y = y;
        }
    }
    return Coordinates;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Piece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
var Piece = (function () {
    function Piece(position, onBoard, className, gameColor) {
        this.onBoard = onBoard;
        this.position = position;
        this.gameColor = gameColor;
        this.className = "piece " + className;
    }
    Piece.prototype.leaveBoard = function () {
        this.onBoard = false;
    };
    return Piece;
}());

var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["White"] = 1] = "White";
})(Color || (Color = {}));


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Piece__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Coordinates__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return King; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var King = (function (_super) {
    __extends(King, _super);
    function King(color, gameColor) {
        var _this = this;
        if (gameColor == __WEBPACK_IMPORTED_MODULE_0__Piece__["a" /* Color */].Black) {
            if (color == __WEBPACK_IMPORTED_MODULE_0__Piece__["a" /* Color */].Black) {
                _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](4, 7), true, "king-black", gameColor) || this;
            }
            else {
                _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](4, 0), true, "king-white", gameColor) || this;
            }
        }
        else {
            if (color == __WEBPACK_IMPORTED_MODULE_0__Piece__["a" /* Color */].Black) {
                _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](4, 0), true, "king-black", gameColor) || this;
            }
            else {
                _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](4, 7), true, "king-white", gameColor) || this;
            }
        }
        return _this;
    }
    return King;
}(__WEBPACK_IMPORTED_MODULE_0__Piece__["b" /* Piece */]));



/***/ })
/******/ ]);