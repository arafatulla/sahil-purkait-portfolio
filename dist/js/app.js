const menuBtn = document.querySelector('.mobile-menu-btn');
const header = document.querySelector('header');


menuBtn.addEventListener('click', ()=>{
    if(!header.classList.contains('active')){
        header.classList.add('active');
        header.classList.remove('close');
    }
    else{
        header.classList.remove('active');
        header.classList.add('close');
    }
});

