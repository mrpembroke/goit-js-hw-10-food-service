import productCardsTpl from '../templates/product-cards.hbs';
import products from './menu.json';
// console.log(productCardsTpl);

const productsContainer = document.querySelector('.js-menu');
const productsMarkup = productCardsTpl(products);

productsContainer.insertAdjacentHTML('afterbegin', productsMarkup);