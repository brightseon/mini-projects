const open = document.querySelector('.open');
const close = document.querySelector('.close');
const circle = document.querySelector('.circle');
const container = document.querySelector('.container');
const menus = document.querySelector('.menus');

const els = [circle, container, menus];
const ADD_CLASS = 'show-nav';

const openMenu = () => {
    open.addEventListener('click', () => els.forEach((el) => el.classList.add(ADD_CLASS)));
};

const closeMenu = () => {
    close.addEventListener('click', () => els.forEach((el) => el.classList.remove(ADD_CLASS)));
};

const init = () => {
    openMenu();
    closeMenu();
};

init();
