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
        else
            return;
    }
    return Coordinates;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_Coordinates__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Piece__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dragdrop__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Board__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });




var Game = (function () {
    function Game() {
        this.board = new __WEBPACK_IMPORTED_MODULE_3__models_Board__["a" /* Board */]();
        this.drag = new __WEBPACK_IMPORTED_MODULE_2__dragdrop__["a" /* DragnDrop */](this.getElement, this.removeHighlighting);
        //console.log(this.board.blackPieces.King.getPossibleCells(this.board.blackPieces.King.position))
        Game.self = this;
    }
    Game.prototype.getElement = function (elem) {
        if (elem.elem.className.indexOf("pawn") != -1) {
            Game.self.pawnAction(elem);
        }
    };
    Game.prototype.pawnAction = function (elem) {
        var pawn = {};
        var possibleMoves = [];
        var initCoords = new __WEBPACK_IMPORTED_MODULE_0__models_Coordinates__["a" /* Coordinates */](elem.elem.dataset.coords.charAt(1), elem.elem.dataset.coords.charAt(0));
        if (elem.elem.className.indexOf("black") != -1) {
            this.board.blackPieces.Pawns.forEach(function (element) {
                if (elem.elem.dataset.id == element.id) {
                    pawn = element;
                }
            });
            pawn.position = initCoords;
            possibleMoves = pawn.getPossibleCells(pawn.position, __WEBPACK_IMPORTED_MODULE_1__models_Piece__["a" /* Color */].Black);
            this.hightlightCells(possibleMoves);
            console.log(possibleMoves);
        }
        else {
            this.board.whitePieces.Pawns.forEach(function (element) {
                if (elem.elem.dataset.id == element.id) {
                    pawn = element;
                }
            });
            pawn.position = initCoords;
            possibleMoves = pawn.getPossibleCells(pawn.position, __WEBPACK_IMPORTED_MODULE_1__models_Piece__["a" /* Color */].White);
            this.hightlightCells(possibleMoves);
            console.log(possibleMoves);
        }
    };
    Game.prototype.hightlightCells = function (cellCoords) {
        cellCoords.forEach(function (element) {
            var buf = element.y.toString() + element.x.toString();
            var cell = document.getElementById(buf);
            cell.className += " possibleCell droppable";
        });
    };
    Game.prototype.removeHighlighting = function () {
        var cells = document.getElementsByClassName("cell");
        for (var i = 0; i < cells.length; i++) {
            cells[i].className = cells[i].className.replace(" possibleCell droppable", "");
        }
    };
    return Game;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Game__ = __webpack_require__(2);

var b = new __WEBPACK_IMPORTED_MODULE_0__src_Game__["a" /* Game */]();


/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cell__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Coordinates__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__King__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Queen__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pawn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Bishop__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Knight__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Rok__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Piece__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Board; });









var Side = (function () {
    function Side() {
        this.Pawns = new Array();
        this.Bishops = new Array();
        this.Knights = new Array();
        this.Roks = new Array();
    }
    return Side;
}());
var Board = (function () {
    function Board() {
        this.cells = [];
        this.reverseCells = [];
        this.board = document.getElementById('board');
        this.reverseBoard = document.getElementById('reverse-board');
        this.whitePieces = new Side();
        this.blackPieces = new Side();
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
                if (cell.id == '45')
                    cell.className = "cell dark droppable";
                board.appendChild(cell);
            }
        }
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
    };
    Board.prototype.addFigures = function () {
        for (var i = 0; i < 8; i++) {
            this.blackPieces.Pawns.push(new __WEBPACK_IMPORTED_MODULE_4__Pawn__["a" /* Pawn */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](i, 6), "pb" + i));
            this.drawFigure(this.blackPieces.Pawns[i]);
            this.whitePieces.Pawns.push(new __WEBPACK_IMPORTED_MODULE_4__Pawn__["a" /* Pawn */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](i, 1), "pw" + i));
            this.drawFigure(this.whitePieces.Pawns[i]);
        }
        this.blackPieces.Bishops.push(this.drawFigure(new __WEBPACK_IMPORTED_MODULE_5__Bishop__["a" /* Bishop */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](2, 7))), this.drawFigure(new __WEBPACK_IMPORTED_MODULE_5__Bishop__["a" /* Bishop */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](5, 7))));
        this.blackPieces.Knights.push(this.drawFigure(new __WEBPACK_IMPORTED_MODULE_6__Knight__["a" /* Knight */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](1, 7))), this.drawFigure(new __WEBPACK_IMPORTED_MODULE_6__Knight__["a" /* Knight */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](6, 7))));
        this.blackPieces.Roks.push(this.drawFigure(new __WEBPACK_IMPORTED_MODULE_7__Rok__["a" /* Rok */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](0, 7))), this.drawFigure(new __WEBPACK_IMPORTED_MODULE_7__Rok__["a" /* Rok */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](7, 7))));
        this.blackPieces.King = this.drawFigure(new __WEBPACK_IMPORTED_MODULE_2__King__["a" /* King */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](4, 7)));
        this.blackPieces.Queen = this.drawFigure(new __WEBPACK_IMPORTED_MODULE_3__Queen__["a" /* Queen */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].Black, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](3, 7)));
        this.whitePieces.Bishops.push(this.drawFigure(new __WEBPACK_IMPORTED_MODULE_5__Bishop__["a" /* Bishop */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](2, 0))), this.drawFigure(new __WEBPACK_IMPORTED_MODULE_5__Bishop__["a" /* Bishop */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](5, 0))));
        this.whitePieces.Knights.push(this.drawFigure(new __WEBPACK_IMPORTED_MODULE_6__Knight__["a" /* Knight */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](1, 0))), this.drawFigure(new __WEBPACK_IMPORTED_MODULE_6__Knight__["a" /* Knight */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](6, 0))));
        this.whitePieces.Roks.push(this.drawFigure(new __WEBPACK_IMPORTED_MODULE_7__Rok__["a" /* Rok */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](0, 0))), this.drawFigure(new __WEBPACK_IMPORTED_MODULE_7__Rok__["a" /* Rok */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](7, 0))));
        this.whitePieces.King = this.drawFigure(new __WEBPACK_IMPORTED_MODULE_2__King__["a" /* King */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](4, 0)));
        this.whitePieces.Queen = this.drawFigure(new __WEBPACK_IMPORTED_MODULE_3__Queen__["a" /* Queen */](__WEBPACK_IMPORTED_MODULE_8__Piece__["a" /* Color */].White, new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](3, 0)));
    };
    Board.prototype.drawFigure = function (figure) {
        var targetCell = figure.position.y.toString() + figure.position.x.toString();
        var cell = document.getElementById(targetCell);
        var piece = document.createElement("div");
        piece.className = figure.className;
        piece.dataset.coords = targetCell;
        piece.dataset.id = figure.id;
        cell.appendChild(piece);
        return figure;
    };
    return Board;
}());



/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Piece__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Coordinates__ = __webpack_require__(1);
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
    King.prototype.getPossibleCells = function (initCoords) {
        var newCoords = [];
        for (var i = -1; i < 2; i++) {
            for (var j = -1; j < 2; j++) {
                if (i == 0 && j == 0) {
                    continue;
                }
                var coords = new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](initCoords.x + i, initCoords.y + j);
                if (coords.x) {
                    newCoords.push(coords);
                }
            }
        }
        return newCoords;
    };
    return King;
}(__WEBPACK_IMPORTED_MODULE_0__Piece__["b" /* Piece */]));



/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Piece__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Coordinates__ = __webpack_require__(1);
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
    function Pawn(color, coordinates, id) {
        var _this = this;
        if (color == __WEBPACK_IMPORTED_MODULE_0__Piece__["a" /* Color */].Black) {
            _this = _super.call(this, coordinates, true, "pawn-black") || this;
        }
        else {
            _this = _super.call(this, coordinates, true, "pawn-white") || this;
        }
        _this.madeFirstMove = false;
        _this.id = id;
        return _this;
    }
    Pawn.prototype.getPossibleCells = function (initCoords, figureColor, beat) {
        var newCoords = [];
        if (figureColor == __WEBPACK_IMPORTED_MODULE_0__Piece__["a" /* Color */].Black) {
            if (this.madeFirstMove) {
                newCoords.push(new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](initCoords.x, initCoords.y - 1));
            }
            else {
                var c1 = new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](initCoords.x, initCoords.y - 1);
                var c2 = new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](initCoords.x, initCoords.y - 2);
                newCoords.push(c1, c2);
            }
            if (beat) {
                beat.forEach(function (element) {
                    newCoords.push(new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](element.x, element.y));
                });
            }
        }
        else {
            if (this.madeFirstMove) {
                newCoords.push(new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](+initCoords.x, +initCoords.y + 1));
            }
            else {
                var c1 = new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](+initCoords.x, +initCoords.y + 1);
                var c2 = new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](+initCoords.x, +initCoords.y + 2);
                newCoords.push(c1, c2);
            }
            if (beat) {
                beat.forEach(function (element) {
                    newCoords.push(new __WEBPACK_IMPORTED_MODULE_1__Coordinates__["a" /* Coordinates */](element.x, element.y));
                });
            }
        }
        return newCoords;
    };
    return Pawn;
}(__WEBPACK_IMPORTED_MODULE_0__Piece__["b" /* Piece */]));



/***/ }),
/* 10 */
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
/* 11 */
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



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragnDrop; });
var DragElement = (function () {
    function DragElement() {
    }
    return DragElement;
}());
var DragnDrop = (function () {
    function DragnDrop(elementGetter, hightLightRemover) {
        this.element = new DragElement();
        document.onmousedown = this.mouseDown.bind(this);
        document.onmousemove = this.mouseMove.bind(this);
        document.onmouseup = this.mouseUp.bind(this);
        this.elementGetter = elementGetter;
        this.hightLightRemover = hightLightRemover;
    }
    DragnDrop.prototype.mouseDown = function (e) {
        if (e.which != 1)
            return;
        var elem = e.target;
        if (!elem)
            return;
        this.element.elem = elem;
        this.element.downX = e.pageX;
        this.element.downY = e.pageY;
        this.elementGetter(this.element);
        return false;
    };
    DragnDrop.prototype.mouseMove = function (e) {
        if (!this.element.elem)
            return;
        if (!this.element.clone) {
            var moveX = e.pageX - this.element.downX;
            var moveY = e.pageY - this.element.downY;
            if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
                return;
            }
            this.element.clone = this.createClone(e);
            if (!this.element.clone) {
                this.element = new DragElement();
                return;
            }
            var coords = this.getCoords(this.element.clone);
            this.element.shiftX = this.element.downX - coords.left;
            this.element.shiftY = this.element.downY - coords.top;
            this.startDrag(e);
        }
        this.element.clone.style.left = e.pageX - this.element.shiftX + 'px';
        this.element.clone.style.top = e.pageY - this.element.shiftY + 'px';
        return false;
    };
    DragnDrop.prototype.findDroppable = function (event) {
        this.element.clone.hidden = true;
        var elem = document.elementFromPoint(event.clientX, event.clientY);
        this.element.clone.hidden = false;
        if (elem == null) {
            return null;
        }
        return elem.closest('.droppable');
    };
    DragnDrop.prototype.startDrag = function (e) {
        var clone = this.element.clone;
        document.body.appendChild(clone);
        clone.style.zIndex = 9999;
        clone.style.position = 'absolute';
    };
    DragnDrop.prototype.mouseUp = function (e) {
        if (this.element.clone) {
            this.finishDrag(e);
        }
        if (this.element.elem) {
            this.element.elem.dataset.coords = this.element.elem.parentElement.id;
        }
        this.element = new DragElement();
        this.hightLightRemover();
    };
    DragnDrop.prototype.finishDrag = function (e) {
        var dropElem = this.findDroppable(e);
        if (!dropElem) {
            this.onDragCancel(this.element);
        }
        else {
            this.onDragEnd(this.element, dropElem);
        }
    };
    DragnDrop.prototype.onDragCancel = function (dragObject) {
        dragObject.clone.rollback();
    };
    ;
    DragnDrop.prototype.onDragEnd = function (dragObject, dropElem) {
        dropElem.appendChild(dragObject.elem);
    };
    ;
    DragnDrop.prototype.getCoords = function (elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    };
    DragnDrop.prototype.createClone = function (e) {
        var clone = this.element.elem;
        var old = {
            parent: clone.parentNode,
            nextSibling: clone.nextSibling,
            position: clone.position || '',
            left: clone.left || '',
            top: clone.top || '',
            zIndex: clone.zIndex || ''
        };
        clone.rollback = function () {
            old.parent.insertBefore(clone, old.nextSibling);
            clone.style.position = old.position;
            clone.style.left = old.left;
            clone.style.top = old.top;
            clone.style.zIndex = old.zIndex;
        };
        return clone;
    };
    return DragnDrop;
}());



/***/ })
/******/ ]);