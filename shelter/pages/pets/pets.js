const activeMenuLink = document.querySelector('.list__link-active');
activeMenuLink.addEventListener('click', () => {
    window.scrollBy(0, -80);
});

const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    location.href='../main/index.html'
})


function burgerMenu() {
    const header = document.querySelector('header');
    const menu = document.querySelector('.menu');
    const burgerMenu = document.querySelector('.hamburger');
    const listItem = document.querySelectorAll('.list__link-available');
    const overlay = document.querySelector('.overlay');

    burgerMenu.addEventListener('click', toggleMenu);
    listItem.forEach(elem => elem.addEventListener('click', toggleMenu));
    overlay.addEventListener('click', toggleMenu);

    function toggleMenu() {
        if (window.matchMedia('(max-width: 768px)').matches){
            overlay.classList.toggle('overlay_active');
            menu.classList.toggle('menu_active');
            burgerMenu.classList.toggle('hamburger_active');
            if (menu.classList.contains('menu_active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'visible';
            }
        }


    }
}



burgerMenu();