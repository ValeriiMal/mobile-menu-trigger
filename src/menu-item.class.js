export class MenuItem {
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
