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