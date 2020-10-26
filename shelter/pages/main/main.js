const activeMenuLink = document.querySelector('.list__link-active');
activeMenuLink.addEventListener('click', () => {
    window.scrollBy(0, -80);
});

const buttonGoPets = document.querySelectorAll('.goPets');
buttonGoPets.forEach(elem => elem.addEventListener('click', () => {
    location.href = "../pets/pets.html";
}))

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
        if (window.matchMedia('(max-width: 768px)').matches) {
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




function slider() {
    let allPets = [];
    const request = new XMLHttpRequest();
    request.open('GET', 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/markups/level-2/shelter/pets.json')
    request.onload = () => {
        allPets = JSON.parse(request.response);
        console.log(allPets);
    }
    request.send();
}


burgerMenu();
slider();
