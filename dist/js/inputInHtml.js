const mobileMenu = document.querySelector('#mobile-menu-list')
const desktopMenu = document.querySelector('#desktop-menu-list')

const listItems = `<li><a href="#">About</a></li>
<li><a href="#">Work</a></li>
<li><a href="#">Blog</a></li>
<li><a href="#">Contact</a></li>`;

mobileMenu.innerHTML = listItems;
desktopMenu.innerHTML = listItems;