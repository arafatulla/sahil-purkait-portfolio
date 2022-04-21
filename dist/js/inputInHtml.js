const mobileMenu = document.querySelector('#mobile-menu-list')
const desktopMenu = document.querySelector('#desktop-menu-list')
const footerMenu = document.querySelector('#footer-menu-list')

const listItems = 
`<li><a href="#about">About</a></li>
<li><a href="#work">Work</a></li>
<li><a href="#blog">Blog</a></li>
<li><a href="#contact">Contact</a></li>`;

mobileMenu.innerHTML = listItems;
desktopMenu.innerHTML = listItems;