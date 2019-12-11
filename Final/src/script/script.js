let accMenu = document.querySelectorAll('.menu__item');
let menu = document.querySelector('.menu');

let team = document.querySelector('.team');
let teamMemberHead = document.querySelector('.team__member-head');

let composition = document.querySelector('.product-composition');

let modalMenuList = document.querySelector('.navigation__list-modal');

modalMenuList.addEventListener('click',({target})=>{
    let isMenuItm = target.closest('.navigation__list-itm--modal');
    
    if (!isMenuItm) {
        return;
    }

    $('#modal-menu').modal('toggle');
});

composition.addEventListener('click',({target}) =>{
    event.preventDefault();
    let isCompIco = target.closest('.product-composition__link');
    let isCloseIco = target.closest('.product-composition__close-wrapper');
    if (isCompIco) {
        target.closest('.product-composition').classList.toggle('product-composition--open');
        return;
    }
    if (isCloseIco) {
        target.closest('.product-composition').classList.remove('product-composition--open');
        return;
    }
});

menu.addEventListener('click', (event)=>{
    event.preventDefault();
    let target = event.target;
    let isMenuItm = target.closest('.menu__item-head-cont');
    let thisMenuItm = target.closest('.menu__item');
    let isCloseBtn = target.closest('.menu__item-description-close-btn');

    if (isMenuItm) {
        if (thisMenuItm.classList.contains('menu__item--active')) {
            thisMenuItm.classList.toggle('menu__item--active');
            return;
        }

        accMenu.forEach((menuElement)=>{
            menuElement.classList.remove('menu__item--active');
        });
        target.closest('.menu__item').classList.toggle('menu__item--active');
        return;
    }

    if(isCloseBtn) {
        thisMenuItm.classList.remove('menu__item--active');
        return;
    }


});

team.addEventListener('click',({target}) =>{
    let isTeamMemberHead = target.closest('.team__member-head');
    
    if (!isTeamMemberHead) {
        return;
    }
    target.closest('.team__member').classList.toggle('team__member--opened');
});