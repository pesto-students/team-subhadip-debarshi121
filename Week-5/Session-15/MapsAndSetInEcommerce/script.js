let productViews = new WeakMap();
let cartItems = new WeakSet();

const incrementProductViews = (productId) => {
	const obj = { productId: productId };
	if (productViews.has(obj)) {
		productViews.set(obj, productViews.get(obj) + 1);
	} else {
		productViews.set(obj, 1);
	}
	console.log(productViews.get(obj));
};

// const addToCart = (productId) => {
// 	if (cartItems.has(productId)) {
// 		console.log("Product already in cart");
// 	} else {
// 		cartItems.add(productId);
// 		console.log("Product added to cart");
// 	}
// };

incrementProductViews(123);
incrementProductViews(123);

// addToCart(123);
// addToCart(123);