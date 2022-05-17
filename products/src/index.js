import faker from 'faker';

const mount = (el) => {
	let products = '';
	for (let i = 0; i < 3; i++) {
		const name = faker.commerce.productName();
		products += `<li>${name}</li>`;
	}
	el.innerHTML = products;
};

if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#dev-products');
	if (el) {
		mount(el);
	}
}

export { mount };
