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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Piece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
var Piece = (function () {
    function Piece(position, onBoard, className) {
        this.onBoard = onBoard;
        this.position = position;
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
/* 1 */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cell__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Coordinates__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__King__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Queen__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pawn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Bishop__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Knight__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Rok__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Piece__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Board; });









var Board = (function () {
    function Board() {
        this.cells = [];
        this.reverseCells = [];
        this.board = document.getElementById('board');
        this.reverseBoard = document.getElementById('reverse-board');
        this.whitePieces = [];
        this.blackPieces = [];
        this.gameColor = 0;
        if (this.gameColor == __WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black) {
            this.drawBoard(this.board);
        }
        else {
            this.drawReverseBoard(this.reverseBoard);
        }
        this.addFigures();
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
    Board.prototype.drawReverseBoard = function (board) {
        for (var i = 7; i >= 0; i--) {
            this.reverseCells[i] = new Array();
            for (var j = 7; j >= 0; j--) {
                this.reverseCells[i].push(new __WEBPACK_IMPORTED_MODULE_0__Cell__["a" /* Cell */](true, false, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](i, j)));
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
    Board.prototype.addFigures = function () {
        var _this = this;
        for (var i = 0; i < 8; i++) {
            this.blackPieces.push(new __WEBPACK_IMPORTED_MODULE_4__Pawn__["a" /* Pawn */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](i, 6)));
            this.whitePieces.push(new __WEBPACK_IMPORTED_MODULE_4__Pawn__["a" /* Pawn */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](i, 1)));
        }
        this.blackPieces.push(new __WEBPACK_IMPORTED_MODULE_2__King__["a" /* King */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](4, 7)), new __WEBPACK_IMPORTED_MODULE_3__Queen__["a" /* Queen */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](3, 7)), new __WEBPACK_IMPORTED_MODULE_5__Bishop__["a" /* Bishop */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](2, 7)), new __WEBPACK_IMPORTED_MODULE_5__Bishop__["a" /* Bishop */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](5, 7)), new __WEBPACK_IMPORTED_MODULE_6__Knight__["a" /* Knight */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](1, 7)), new __WEBPACK_IMPORTED_MODULE_6__Knight__["a" /* Knight */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](6, 7)), new __WEBPACK_IMPORTED_MODULE_7__Rok__["a" /* Rok */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](0, 7)), new __WEBPACK_IMPORTED_MODULE_7__Rok__["a" /* Rok */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](7, 7)));
        this.whitePieces.push(new __WEBPACK_IMPORTED_MODULE_2__King__["a" /* King */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](4, 0)), new __WEBPACK_IMPORTED_MODULE_3__Queen__["a" /* Queen */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](3, 0)), new __WEBPACK_IMPORTED_MODULE_5__Bishop__["a" /* Bishop */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](2, 0)), new __WEBPACK_IMPORTED_MODULE_5__Bishop__["a" /* Bishop */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](5, 0)), new __WEBPACK_IMPORTED_MODULE_7__Rok__["a" /* Rok */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](1, 0)), new __WEBPACK_IMPORTED_MODULE_7__Rok__["a" /* Rok */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](6, 0)), new __WEBPACK_IMPORTED_MODULE_7__Rok__["a" /* Rok */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](0, 0)), new __WEBPACK_IMPORTED_MODULE_7__Rok__["a" /* Rok */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](7, 0)));
        this.blackPieces.forEach(function (element) {
            _this.drawFigure(element);
        });
        this.whitePieces.forEach(function (element) {
            _this.drawFigure(element);
        });
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_Board__ = __webpack_require__(2);

var b = new __WEBPACK_IMPORTED_MODULE_0__models_Board__["a" /* Board */]();


/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Piece__ = __webpack_require__(0);
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
    function King(color, coordinates) {
        var _this = this;
        if (color == __WEBPACK_IMPORTED_MODULE_0__Piece__["a" /* Color */].Black) {
            _this = _super.call(this, coordinates, true, "king-black") || this;
        }
        else {
            _this = _super.call(this, coordinates, true, "king-white") || this;
        }
        return _this;
    }
    return King;
}(__WEBPACK_IMPORTED_MODULE_0__Piece__["b" /* Piece */]));



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Piece__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Queen; });
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


var Queen = (function (_super) {
    __extends(Queen, _super);
    function Queen(color, coordinates) {
        var _this = this;
        if (color == __WEBPACK_IMPORTED_MODULE_0__Piece__["a" /* Color */].Black) {
            _this = _super.call(this, coordinates, true, "queen-black") || this;
        }
        else {
            _this = _super.call(this, coordinates, true, "queen-white") || this;
        }
        return _this;
    }
    return Queen;
}(__WEBPACK_IMPORTED_MODULE_0__Piece__["b" /* Piece */]));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Piece__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pawn; });
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


var Pawn = (function (_super) {
    __extends(Pawn, _super);
    function Pawn(color, coordinates) {
        var _this = this;
        if (color == __WEBPACK_IMPORTED_MODULE_0__Piece__["a" /* Color */].Black) {
            _this = _super.call(this, coordinates, true, "pawn-black") || this;
        }
        else {
            _this = _super.call(this, coordinates, true, "pawn-white") || this;
        }
        return _this;
    }
    return Pawn;
}(__WEBPACK_IMPORTED_MODULE_0__Piece__["b" /* Piece */]));



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Piece__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bishop; });
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


var Bishop = (function (_super) {
    __extends(Bishop, _super);
    function Bishop(color, coordinates) {
        var _this = this;
        if (color == __WEBPACK_IMPORTED_MODULE_0__Piece__["a" /* Color */].Black) {
            _this = _super.call(this, coordinates, true, "bishop-black") || this;
        }
        else {
            _this = _super.call(this, coordinates, true, "bishop-white") || this;
        }
        return _this;
    }
    return Bishop;
}(__WEBPACK_IMPORTED_MODULE_0__Piece__["b" /* Piece */]));



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Piece__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Knight; });
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


var Knight = (function (_super) {
    __extends(Knight, _super);
    function Knight(color, coordinates) {
        var _this = this;
        if (color == __WEBPACK_IMPORTED_MODULE_0__Piece__["a" /* Color */].Black) {
            _this = _super.call(this, coordinates, true, "knight-black") || this;
        }
        else {
            _this = _super.call(this, coordinates, true, "knight-white") || this;
        }
        return _this;
    }
    return Knight;
}(__WEBPACK_IMPORTED_MODULE_0__Piece__["b" /* Piece */]));



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Piece__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rok; });
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


var Rok = (function (_super) {
    __extends(Rok, _super);
    function Rok(color, coordinates) {
        var _this = this;
        if (color == __WEBPACK_IMPORTED_MODULE_0__Piece__["a" /* Color */].Black) {
            _this = _super.call(this, coordinates, true, "rok-black") || this;
        }
        else {
            _this = _super.call(this, coordinates, true, "rok-white") || this;
        }
        return _this;
    }
    return Rok;
}(__WEBPACK_IMPORTED_MODULE_0__Piece__["b" /* Piece */]));



/***/ })
/******/ ]);