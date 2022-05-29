const mobileMenu = document.querySelector('#mobile-menu-list')
const desktopMenu = document.querySelector('#desktop-menu-list')
const footerMenu = document.querySelector('#footer-menu-list')

const listItems = 
`<li><a href="#about">About</a></li>
<li><a href="#work">Work</a></li>
<li><a href="https://sharull9.blogspot.com">Blog</a></li>
<li><a href="#contact">Contact</a></li>`;

mobileMenu.innerHTML = listItems;
desktopMenu.innerHTML = listItems;





// const exp = document.querySelector('#expYear');
// let d = new Date();
// let srtYear = 2015;
// let crtYear = d.getFullYear();
// let expYear = parseInt(crtYear - srtYear);

// exp.innerHTML = expYear;
// console.log(expYear);