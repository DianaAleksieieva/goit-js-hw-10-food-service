import menuItemTpl from '../templates/menuCard.hbs'
import menuCardItem from '../menu.json'
const menuEl = document.querySelector('.js-menu');
const menuMarkup = menuItemTpl(menuCardItem);
// function createMenuCard(menuCardItem) {
//     return menuCardItem.map(menuItemTpl).join('')   
// }
    menuEl.insertAdjacentHTML('afterbegin', menuMarkup);
    

