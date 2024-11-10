import { setLocalStorage } from './utils.mjs';
import { getLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';

const dataSource = new ProductData('tents');

function addProductToCart(product) {
  let cartItems = getLocalStorage('so-cart');

  if (!cartItems) {
    cartItems = [];
  } else if (!Array.isArray(cartItems)) {
    // Handle case where previous item was stored as a single object
    cartItems = [cartItems];
  }

  cartItems.push(product);
  setLocalStorage('so-cart', cartItems);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart buttonnpm
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);