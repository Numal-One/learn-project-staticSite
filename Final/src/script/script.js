let accMenu = document.querySelectorAll('.menu__item');
let menu = document.querySelector('.menu');

let team = document.querySelector('.team');
let teamMemberHead = document.querySelector('.team__member-head');

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