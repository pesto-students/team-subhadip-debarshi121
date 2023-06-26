let productViews = new WeakMap();
let cartItems = new WeakSet();

const incrementProductViews = (productId) => {
	if (productViews.has(productId)) {
		productViews.set(productId, productViews.get(productId) + 1);
	} else {
		productViews.set(productId, 1);
	}
};



const addToCart = (productId) => {
	if (cartItems.has(productId)) {
		console.log("Product already in cart");
	} else {
		cartItems.add(productId);
		console.log("Product added to cart");
	}
};

const product = {id: 123}

incrementProductViews(product);
incrementProductViews(product);

addToCart(product);
addToCart(product);

console.log(productViews)
console.log(cartItems)