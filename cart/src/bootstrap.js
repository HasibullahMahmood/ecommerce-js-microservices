import faker from 'faker';

const cartContent = `<div>You have ${faker.random.number()} products in your cart</div>`;

document.querySelector('#dev-cart').innerHTML = cartContent;
