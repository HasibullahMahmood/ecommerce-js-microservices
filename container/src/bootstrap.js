import { mount as mountCart } from 'cart/CartShow';
import { mount as mountProducts } from 'products/ProductsIndex';

const myCart = document.querySelector('#my-cart');
mountCart(myCart);

const myProducts = document.querySelector('#my-products');
mountProducts(myProducts);
