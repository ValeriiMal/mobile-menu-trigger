import { MainButton } from './menu-button.class';
import { MenuItem } from './menu-item.class';

export function Menu(container, items, options) {

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
	const mainBtn = new MainButton();
	mainBtn.element.addEventListener('click', this.toggle.bind(this));
	this.mainBtn = mainBtn.element;
	this.menuItems = this.items.map(item => {
		let newItem = new MenuItem(item.title);
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