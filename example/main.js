import { Menu } from '../src/menu.class';

window.addEventListener('DOMContentLoaded', () => {
	run();
});

function run() {
	const menuContainer = document.querySelector('.menu-container');
	const menuItems = [
		{
			title: 'Account',
		},
		{
			title: 'Transaction history',
		},
		{
			title: 'Gift notifications',
		},
		{
			title: 'Settings',
		},
		{
			title: 'Close account',
		},
	];
	const menu = new Menu(menuContainer, menuItems); 
	menu.render();
}
