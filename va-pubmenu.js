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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_menu_class__ = __webpack_require__(1);


(function(window, Menu) {
	window.VaPubMenu = Menu;
})(window, __WEBPACK_IMPORTED_MODULE_0__src_menu_class__["a" /* Menu */]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Menu;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_button_class__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_item_class__ = __webpack_require__(3);



function Menu(container, items, options) {

	if (!isValidContainer(container)) {
		console.warn('menu can only be created within HTML element container');
		return;
	}

	this.holder = container;
	this.holder.style.textAlign = 'right';
	this.holder.style.zIndex = '1';
	this.expanded = false;
	this.mainBtn = null;
	this.items = items;
	this.menuItems = null;

	function isValidContainer(container) {
		return container instanceof HTMLElement;
	}
}

Menu.prototype.toggle = function() {
	if (this.expanded) {
		this.expanded = false;
		this.closeMenu();
		return;
	}
	this.openMenu();
	this.expanded = true;
};

Menu.prototype.openMenu = function() {
	if (!this.mainBtn) {
		console.warn('Create menu first');
		return;
	}
	this.mainBtn.style.transform = `rotate(45deg)`;
	this.showItems();
	this.showBackdrop();
};

Menu.prototype.showItems = function() {
	this.menuItems.forEach(item => {
		item.style.display = 'block';
	});
};

Menu.prototype.hideItems = function() {
	this.menuItems.forEach(item => {
		item.style.display = 'none';
	});
};

Menu.prototype.showBackdrop = function() {
	const backdrop = document.createElement('div');
	backdrop.className = 'popup-backdrop';
	backdrop.style.cssText = `
		display: block;
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(100, 100, 100, .3);
		z-index: 0;
	`;
	backdrop.addEventListener('click', (e) => {
		this.toggle();
	});
	document.body.appendChild(backdrop);
}

Menu.prototype.hideBackdrop = function() {
	const backdrop = document.querySelector('.popup-backdrop');
	backdrop.remove();
}

Menu.prototype.closeMenu = function() {
	if (!this.mainBtn) {
		console.warn('Create menu first');
		return;
	}
	this.mainBtn.style.transform = `rotate(0deg)`;
	this.hideItems();
	this.hideBackdrop();
}

Menu.prototype.render = function() {
	const mainBtn = new __WEBPACK_IMPORTED_MODULE_0__menu_button_class__["a" /* MainButton */]();
	mainBtn.element.addEventListener('click', this.toggle.bind(this));
	this.mainBtn = mainBtn.element;
	this.menuItems = this.items.map(item => {
		let newItem = new __WEBPACK_IMPORTED_MODULE_1__menu_item_class__["a" /* MenuItem */](item.title);
		newItem = newItem.element;
		newItem.addEventListener('click', (e) => {
			e.stopPropagation();
			this.toggle();
		});
		this.holder.insertBefore(newItem, this.holder.lastChild);
		return newItem;
	});
	this.holder.appendChild(mainBtn.element);
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class MainButton {
	constructor(text) {
		const mainBtn = document.createElement('button');
		const mainBtnText = document.createTextNode(text || '+');
		mainBtn.style.cssText = `
			width: 30px;
			height: 30px;
			background-color: green;
			color: white;
			text-align: center;
			font-size: 14px;
			font-weight: bold;
			border: 0;
			border-radius: 50%;
			cursor: pointer;
			transition: all .5s;
		`;
		mainBtn.appendChild(mainBtnText);
		this.element = mainBtn;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MainButton;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class MenuItem {
	constructor(title) {
		this.item = document.createElement('div');
		const titleNode = document.createTextNode(title || 'no title specified');
		this.item.appendChild(titleNode);
		this.item.style.cssText = `
			padding: 6px 0px;
			cursor: pointer;
			font-family: Arial;
			display: none;
		`;
		this.element = this.item;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuItem;



/***/ })
/******/ ]);