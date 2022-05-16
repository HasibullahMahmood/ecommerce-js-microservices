import faker from 'faker';

let products = '';

for (let i = 0; i < 3; i++) {
	const name = faker.commerce.productName();
	products += `<li>${name}</li>`;
}

const el = document.querySelector('#dev-products');
el.innerHTML = products;
