import productCardsTpl from '../templates/product-cards';
import products from './menu.json';
// console.log(productCardsTpl);

const productsContainer = document.querySelector('.js-menu');
const productsMarkup = productCardsTpl(products);

productsContainer.insertAdjacentHTML('afterbegin', productsMarkup);