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
	const menu = new VaPubMenu(menuContainer, menuItems); 
	menu.render();
}
