/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ app)\n/* harmony export */ });\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.scss */ \"./src/app.scss\");\n/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/player */ \"./src/factories/player.js\");\n/* harmony import */ var _factories_gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/gameboard */ \"./src/factories/gameboard.js\");\n/* harmony import */ var _dom_utils_displayBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom_utils/displayBoard */ \"./src/dom_utils/displayBoard.js\");\n/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/util */ \"./src/utils/util.js\");\n/* harmony import */ var _dom_utils_createGamePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom_utils/createGamePage */ \"./src/dom_utils/createGamePage.js\");\n/* harmony import */ var _dom_utils_displayBoards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom_utils/displayBoards */ \"./src/dom_utils/displayBoards.js\");\n/* eslint-disable no-use-before-define */\n/* eslint-disable no-shadow */\n\n\n\n\n\n\n\nvar player = new _factories_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('player');\nvar board = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](player.name, 10);\nvar cpu = new _factories_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('computer');\nvar cpuBoard = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](player.name, 10);\ncpuBoard.ships = cpu.fleet;\ncpuBoard.placeRandom(cpu.fleet);\ncpu.fleet = [];\nvar playerTurn = true;\nvar gameOver = false;\nconsole.log(cpu.fleet, cpuBoard);\nfunction app() {\n  if (!player.fleet.length) {\n    (0,_dom_utils_createGamePage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    (0,_dom_utils_displayBoards__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(player, board);\n    (0,_dom_utils_displayBoards__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(cpu, cpuBoard);\n    playerAttack();\n    gameLoop(player, board, cpu, cpuBoard);\n  } else {\n    (0,_dom_utils_displayBoard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(player, board);\n    // re-render setup screen after each cell cli\n    (0,_utils_util__WEBPACK_IMPORTED_MODULE_4__.clckHandler)(app);\n  }\n}\nfunction playerAttack() {\n  var cells = document.querySelectorAll('#cell-computer');\n  cells.forEach(function (cell) {\n    cell.addEventListener('click', function () {\n      if (playerTurn && !gameOver) {\n        var row = cell.getAttribute('data-row');\n        var col = cell.getAttribute('data-col');\n        if (cpuBoard.hits.has(\"\".concat(row, \",\").concat(col))) {\n          console.log('invalid move');\n          playerTurn = true;\n          return;\n        }\n        cell.classList.add('player-miss');\n        console.log('missed ');\n        var result = cpuBoard.receveAttack(Number(row), Number(col));\n        if (result) {\n          cell.classList.add('hit');\n          console.log('enemy is hit');\n          console.log(cpuBoard.ships);\n        }\n        if (cpuBoard.allShipsSunk() || board.allShipsSunk()) {\n          gameOver = true;\n        }\n        playerTurn = false;\n      }\n    });\n  });\n}\nfunction cpuAttack(board) {\n  var position = (0,_utils_util__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(board.size);\n  var result = board.receveAttack(position.row, position.col);\n  if (result) {\n    console.log('CPU Player: Hit!');\n  } else {\n    console.log('CPU Player: Miss!');\n  }\n  if (board.allShipsSunk()) {\n    gameOver = true;\n  }\n}\nfunction gameLoop(player, playerBoard, cpu, cpuBoard) {\n  if (gameOver) {\n    var winner = playerBoard.allShipsSunk() ? cpu : player;\n    var message = \"Game Over! \".concat(winner.name, \" wins!\");\n    (0,_utils_util__WEBPACK_IMPORTED_MODULE_4__.displayMessage)(message);\n    return;\n  }\n  if (cpuBoard.allShipsSunk() || playerBoard.allShipsSunk()) {\n    gameOver = true;\n  }\n  if (!playerTurn) {\n    cpuAttack(playerBoard);\n    (0,_dom_utils_displayBoards__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(player, playerBoard);\n    playerTurn = true;\n  }\n  requestAnimationFrame(function () {\n    return gameLoop(player, playerBoard, cpu, cpuBoard);\n  });\n}\n\n//# sourceURL=webpack://battleship/./src/App.js?");

/***/ }),

/***/ "./src/dom_utils/createGamePage.js":
/*!*****************************************!*\
  !*** ./src/dom_utils/createGamePage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createGamePage)\n/* harmony export */ });\n/* harmony import */ var _utils_createHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createHtml */ \"./src/utils/createHtml.js\");\n\nfunction createGamePage() {\n  var main = document.querySelector('.main');\n  var boards = (0,_utils_createHtml__WEBPACK_IMPORTED_MODULE_0__.createHtml)('div', 'boards-container', 'boards');\n  var playerCont = (0,_utils_createHtml__WEBPACK_IMPORTED_MODULE_0__.createHtml)('div', 'player', 'player');\n  var cpuCont = (0,_utils_createHtml__WEBPACK_IMPORTED_MODULE_0__.createHtml)('div', 'computer', 'computer');\n  boards.appendChild(playerCont);\n  boards.appendChild(cpuCont);\n  (0,_utils_createHtml__WEBPACK_IMPORTED_MODULE_0__.clearHtml)(main);\n  main.appendChild(boards);\n}\n\n//# sourceURL=webpack://battleship/./src/dom_utils/createGamePage.js?");

/***/ }),

/***/ "./src/dom_utils/createMainPage.js":
/*!*****************************************!*\
  !*** ./src/dom_utils/createMainPage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMainPage)\n/* harmony export */ });\n/* harmony import */ var _utils_createHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createHtml */ \"./src/utils/createHtml.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ \"./src/App.js\");\n\n\nfunction loadMainPage() {\n  // create main page\n  var main = document.querySelector('.main');\n  var container = (0,_utils_createHtml__WEBPACK_IMPORTED_MODULE_0__.createHtml)('div', 'container');\n  var pageTitle = (0,_utils_createHtml__WEBPACK_IMPORTED_MODULE_0__.createHtml)('h1', 'page-title');\n  var btn = (0,_utils_createHtml__WEBPACK_IMPORTED_MODULE_0__.createHtml)('button', 'start-game');\n  btn.textContent = 'start game';\n  pageTitle.textContent = 'BATTLESHIP';\n  container.appendChild(pageTitle);\n  container.appendChild(btn);\n  main.appendChild(container);\n  btn.addEventListener('click', _App__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}\n\n//# sourceURL=webpack://battleship/./src/dom_utils/createMainPage.js?");

/***/ }),

/***/ "./src/dom_utils/displayBoard.js":
/*!***************************************!*\
  !*** ./src/dom_utils/displayBoard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createBoard)\n/* harmony export */ });\n/* harmony import */ var _utils_createHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createHtml */ \"./src/utils/createHtml.js\");\n/* eslint-disable no-use-before-define */\n\n\nfunction createBoard(player, board) {\n  var main = document.querySelector('.main');\n  var container = (0,_utils_createHtml__WEBPACK_IMPORTED_MODULE_0__.createHtml)('div', 'setup-board');\n  var btn = (0,_utils_createHtml__WEBPACK_IMPORTED_MODULE_0__.createHtml)('button', 'rotate-btn');\n  btn.textContent = 'rotate';\n  btn.addEventListener('click', function () {\n    player.fleet[0].isVertical = !player.fleet[0].isVertical;\n  });\n  (0,_utils_createHtml__WEBPACK_IMPORTED_MODULE_0__.clearHtml)(main);\n  main.appendChild(container);\n  main.appendChild(btn);\n  var _loop = function _loop(row) {\n    var _loop2 = function _loop2(col) {\n      var cell = document.createElement('div');\n      if (board.gameboard[row][col] !== 0) {\n        cell.style.background = 'red';\n      }\n      cell.className = 'cell';\n      cell.dataset.row = row;\n      cell.dataset.col = col;\n      container.appendChild(cell);\n      cell.addEventListener('mouseenter', function () {\n        showHoverEffect(row, col, player);\n      }, false);\n      cell.addEventListener('mouseleave', clearHoverEffect, false);\n      cell.addEventListener('click', function (e) {\n        return handleClick(e, player, board);\n      }, false);\n    };\n    for (var col = 0; col < board.size; col++) {\n      _loop2(col);\n    }\n  };\n  for (var row = 0; row < board.size; row++) {\n    _loop(row);\n  }\n}\nfunction handleClick(e, player, board) {\n  var r = Number(e.target.getAttribute('data-row'));\n  var c = Number(e.target.getAttribute('data-col'));\n  if (player.fleet.length === 0) return;\n  if (board.moveIsValid(r, c, player.fleet[0])) {\n    board.placeShip(r, c, player.fleet[0]);\n    board.ships.push(player.fleet[0]);\n    player.fleet.shift();\n    createBoard(player, board);\n  }\n  createBoard(player, board);\n}\nfunction showHoverEffect(row, col, player) {\n  if (!player.fleet.length) return;\n  var currentShipLength = player.fleet[0].len;\n  var isVertical = player.fleet[0].isVertical;\n  for (var i = 0; i < currentShipLength; i++) {\n    var rowIndex = row + (isVertical ? i : 0);\n    var colIndex = col + (isVertical ? 0 : i);\n    var cell = document.querySelector(\"[data-row=\\\"\".concat(rowIndex, \"\\\"][data-col=\\\"\").concat(colIndex, \"\\\"]\"));\n    if (cell === null) return;\n    cell.classList.add('ship-hover');\n  }\n}\nfunction clearHoverEffect() {\n  var cells = document.querySelectorAll('.ship-hover');\n  cells.forEach(function (cell) {\n    return cell.classList.remove('ship-hover');\n  });\n}\n\n//# sourceURL=webpack://battleship/./src/dom_utils/displayBoard.js?");

/***/ }),

/***/ "./src/dom_utils/displayBoards.js":
/*!****************************************!*\
  !*** ./src/dom_utils/displayBoards.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlayerBoard)\n/* harmony export */ });\n/* harmony import */ var _utils_createHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createHtml */ \"./src/utils/createHtml.js\");\n\nfunction createPlayerBoard(player, board) {\n  var playerBoard = document.querySelector(\".\".concat(player.name));\n  (0,_utils_createHtml__WEBPACK_IMPORTED_MODULE_0__.clearHtml)(playerBoard);\n  for (var row = 0; row < board.size; row++) {\n    for (var col = 0; col < board.size; col++) {\n      var cell = (0,_utils_createHtml__WEBPACK_IMPORTED_MODULE_0__.createHtml)('div', 'cell', \"cell-\".concat(player.name));\n      cell.className = 'cell';\n      cell.dataset.row = row;\n      cell.dataset.col = col;\n      if (board.gameboard[row][col] !== 0 && player.name === 'player') {\n        cell.style.background = 'red';\n      }\n      if (board.hits.has(\"\".concat(row, \",\").concat(col)) && board.gameboard[row][col] !== 0) {\n        cell.classList.add('hit');\n      }\n      if (board.hits.has(\"\".concat(row, \",\").concat(col))) {\n        cell.classList.add('cpu-miss');\n      }\n      playerBoard.appendChild(cell);\n    }\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/dom_utils/displayBoards.js?");

/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util */ \"./src/utils/util.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar Gameboard = /*#__PURE__*/function () {\n  function Gameboard(name, size) {\n    _classCallCheck(this, Gameboard);\n    this.size = size;\n    this.name = name;\n    this.gameboard = this.createBoard();\n    this.occupied = new Set();\n    this.hits = new Set();\n    this.misses = new Set();\n    this.ships = [];\n  }\n  _createClass(Gameboard, [{\n    key: \"allShipsSunk\",\n    value: function allShipsSunk() {\n      return this.ships.every(function (ship) {\n        return ship.isSunk;\n      });\n    }\n  }, {\n    key: \"createBoard\",\n    value: function createBoard() {\n      var arr = [];\n      for (var i = 0; i < this.size; i++) {\n        arr.push([]);\n        for (var j = 0; j < this.size; j++) {\n          arr[i].push(0);\n        }\n      }\n      return arr;\n    }\n  }, {\n    key: \"moveIsValid\",\n    value: function moveIsValid(row, col, ship) {\n      for (var i = 0; i < ship.len; i++) {\n        if (!ship.isVertical && col + i >= this.size || !ship.isVertical && this.occupied.has(\"\".concat(row, \",\").concat(col + i))) {\n          return false;\n        }\n        if (ship.isVertical && row + i >= this.size || ship.isVertical && this.occupied.has(\"\".concat(row + i, \",\").concat(col))) {\n          return false;\n        }\n      }\n      return true;\n    }\n  }, {\n    key: \"placeShip\",\n    value: function placeShip(row, col, ship) {\n      for (var i = 0; i < ship.len; i++) {\n        if (!ship.isVertical) {\n          this.gameboard[row][col + i] = \"\".concat(ship.name[0]);\n          this.occupied.add(\"\".concat(row, \",\").concat(col + i));\n        }\n        if (ship.isVertical) {\n          this.gameboard[row + i][col] = \"\".concat(ship.name[0]);\n          this.occupied.add(\"\".concat(row + i, \",\").concat(col));\n        }\n      }\n      return 'ship placed';\n    }\n  }, {\n    key: \"placeRandom\",\n    value: function placeRandom(arr) {\n      var _this = this;\n      arr.forEach(function (ship) {\n        var placed = false;\n        while (!placed) {\n          var position = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.size);\n          ship.isVertical = Math.random() < 0.5;\n          if (_this.moveIsValid(position.row, position.col, ship)) {\n            _this.placeShip(position.row, position.col, ship);\n            placed = true;\n          }\n        }\n      });\n      return true;\n    }\n  }, {\n    key: \"randomHit\",\n    value: function randomHit() {\n      var hit = false;\n      while (!hit) {\n        var position = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.size);\n        if (this.hits.has(\"\".concat(position.row, \",\").concat(position.col))) return false;\n        if (!this.hits.has(\"\".concat(position.row, \",\").concat(position.col)) && this.gameboard[position.row][position.col] !== 0) {\n          this.receveAttack(position.row, position.col);\n          this.hits.add(\"\".concat(position.row, \",\").concat(position.col));\n          hit = true;\n          return true;\n        }\n        this.misses.add(\"\".concat(position.row, \",\").concat(position.col));\n      }\n      return false;\n    }\n  }, {\n    key: \"receveAttack\",\n    value: function receveAttack(row, col) {\n      if (this.gameboard[row][col] !== 0) {\n        var shipId = this.gameboard[row][col];\n        var res = this.ships.find(function (ship) {\n          return ship.id === shipId;\n        });\n        res.hit(res, true);\n        res.destroyed(res);\n        this.hits.add(\"\".concat(row, \",\").concat(col));\n        return true;\n      }\n      this.hits.add(\"\".concat(row, \",\").concat(col));\n      return false;\n    }\n  }]);\n  return Gameboard;\n}();\n\n\n//# sourceURL=webpack://battleship/./src/factories/gameboard.js?");

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/factories/ship.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Player = /*#__PURE__*/_createClass(function Player(name) {\n  _classCallCheck(this, Player);\n  this.name = name;\n  this.fleet = [new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Carrier', 5), new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Battleship', 4), new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Submarine', 3), new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Destroyer', 3), new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Patrol ship', 2)];\n});\n\n\n//# sourceURL=webpack://battleship/./src/factories/player.js?");

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Ship = /*#__PURE__*/function () {\n  function Ship(name, len) {\n    _classCallCheck(this, Ship);\n    this.name = name;\n    this.id = name[0];\n    this.len = len;\n    this.isSunk = false;\n    this.isVertical = false;\n  }\n  _createClass(Ship, [{\n    key: \"hit\",\n    value: function hit(ship) {\n      var isHit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      isHit ? ship.len -= 1 : ship.len;\n      return ship.len;\n    }\n  }, {\n    key: \"destroyed\",\n    value: function destroyed(ship) {\n      ship.len === 0 ? ship.isSunk = true : ship.isSunk = false;\n      return ship.isSunk;\n    }\n  }]);\n  return Ship;\n}();\n\n\n//# sourceURL=webpack://battleship/./src/factories/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_utils_createMainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_utils/createMainPage */ \"./src/dom_utils/createMainPage.js\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.scss */ \"./src/app.scss\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_dom_utils_createMainPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/utils/createHtml.js":
/*!*********************************!*\
  !*** ./src/utils/createHtml.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearHtml: () => (/* binding */ clearHtml),\n/* harmony export */   createHtml: () => (/* binding */ createHtml)\n/* harmony export */ });\nfunction createHtml(el) {\n  var nameClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var idName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n  var element = document.createElement(el);\n  if (nameClass) {\n    element.className = nameClass;\n  }\n  if (idName) {\n    element.setAttribute('id', idName);\n  }\n  return element;\n}\nfunction clearHtml(element) {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/utils/createHtml.js?");

/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clckHandler: () => (/* binding */ clckHandler),\n/* harmony export */   \"default\": () => (/* binding */ getRandomPosition),\n/* harmony export */   displayMessage: () => (/* binding */ displayMessage)\n/* harmony export */ });\nfunction getRandomPosition(size) {\n  return {\n    row: Math.floor(Math.random() * size),\n    col: Math.floor(Math.random() * size)\n  };\n}\nfunction clckHandler(cb) {\n  var cells = document.querySelectorAll('.cell');\n  cells.forEach(function (cell) {\n    cell.addEventListener('click', function () {\n      cb();\n    });\n  });\n}\nfunction displayMessage(message) {\n  console.log(message);\n}\n\n\n//# sourceURL=webpack://battleship/./src/utils/util.js?");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://battleship/./src/app.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;