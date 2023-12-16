import { Link } from "react-router-dom";
import { updateToCart } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import CategoriesBar from "../components/CategoriesBar";
import ShoppingLogo from "../assets/ecommerce.svg";
import { capitalizeFirstLetter } from "../utils/helpers";

const Cart = () => {
  const dispatch = useDispatch();
  const {
    id,
    products,
    total,
    discountedTotal,
    totalProducts,
    totalQuantity,
    status,
    error
  } = useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.user);

  const handleUpdateQuantity = async (productId, qty) => {
    const index = products.findIndex((product) => product.id === productId);
    let updatedProducts = [...products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      quantity: Number(qty)
    };

    await dispatch(updateToCart({ cartId: id, products: updatedProducts }));

    toast.success("Quantity updated!", { position: "bottom-center" });
  };

  const handleRemoveProduct = async (productId) => {
    const index = products.findIndex((product) => product.id === productId);
    let updatedProducts = [...products];
    updatedProducts.splice(index, 1);

    await dispatch(updateToCart({ cartId: id, products: updatedProducts }));

    toast.success("Product removed from cart!", { position: "bottom-center" });
  };

  if (status === "succeeded" && error === null && user) {
    return (
      <>
        <CategoriesBar />
        {products.length > 0 ? (
          <section>
            <div className="container mx-auto flex justify-center gap-5 my-5">
              <main className="flex-1 bg-white p-5 min-h-[680px]">
                <div className="flex flex-col gap-5 w-full">
                  {products.map((product) => {
                    return (
                      <div
                        key={product.id}
                        className="flex relative flex-wrap border border-gray-200 p-3 gap-3 text-gray-700 bg-gray-50 rounded"
                      >
                        <div className="flex flex-col gap-3 lg:w-9/12 md:w-full">
                          <div>
                            <Link
                              to={`/product/${product.id}`}
                              className="text-lg font-medium hover:text-blue-500"
                            >
                              {capitalizeFirstLetter(product?.title)}
                            </Link>
                          </div>
                          <div className="flex-1 font-medium">
                            <span className="text-xl">${product?.price}</span>
                            <span className="text-green-600 ml-5">
                              {product?.discountPercentage}% off
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 flex-1 justify-between">
                          <select
                            onChange={(e) =>
                              handleUpdateQuantity(product.id, e.target.value)
                            }
                            value={product.quantity}
                            className="custom-select border border-gray-200 outline-none px-8 py-1 rounded h-8 w-20"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          <div>
                            <span className="text-lg line-through">
                              ${product?.total}
                            </span>
                            <span className="text-lg ml-5 font-medium">
                              ${product?.discountedPrice}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveProduct(product.id)}
                          className="absolute top-1 right-2 h-8"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4 text-gray-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </main>
              <aside className="w-4/12 bg-white text-start text-gray-700 p-5">
                <div className="bg-gray-100 p-5 rounded text-gray-700">
                  <h3 className="text-gray-900 font-medium tracking-widest title-font mb-1">
                    Order summary
                  </h3>
                  <div className="flex justify-between border-b py-3 border-gray-200">
                    <p>Total</p>
                    <p>${total}</p>
                  </div>
                  <div className="flex justify-between border-b py-3 border-gray-200">
                    <p>After Discount</p>
                    <p>${discountedTotal}</p>
                  </div>
                  <div className="flex justify-between border-b py-3 border-gray-200">
                    <p>Delivery Charges</p>
                    <p>Free</p>
                  </div>
                  <div className="flex justify-between border-b py-3 border-gray-200">
                    <p>Total Products</p>
                    <p>{totalProducts}</p>
                  </div>
                  <div className="flex justify-between border-b py-3 border-gray-200">
                    <p>Total Quantity</p>
                    <p>{totalQuantity}</p>
                  </div>
                  <div className="flex tracking-widest justify-between font-medium py-3 border-gray-200">
                    <p>Subtotal</p>
                    <p>${discountedTotal}</p>
                  </div>
                  <button className="bg-orange-600 text-white w-full py-2 font-medium rounded mt-2">
                    Checkout
                  </button>
                </div>
              </aside>
            </div>
            <Toaster />
          </section>
        ) : (
          <section>
            <div className="container bg-white p-10 mx-auto flex flex-col gap-3 justify-center items-center gap-5 my-5">
              <img src={ShoppingLogo} className="w-2/12" alt="Cart is empty" />
              <h1 className="text-lg font-medium">Your cart is empty!</h1>
              <p className="-mt-3">Add items to it now.</p>
              <Link
                to="/"
                className="bg-blue-500 text-white px-16 py-2 rounded-sm"
              >
                Shop now
              </Link>
            </div>
          </section>
        )}
      </>
    );
  }

  if (user === null) {
    return (
      <section>
        <div className="container bg-white p-10 mx-auto flex flex-col gap-3 justify-center items-center gap-5 my-5">
          <img src={ShoppingLogo} className="w-2/12" alt="Cart is empty" />
          <h1 className="text-lg font-medium">Your cart is empty!</h1>
          <p className="-mt-3">Add items to it now.</p>
          <Link to="/" className="bg-blue-500 text-white px-16 py-2 rounded-sm">
            Shop now
          </Link>
        </div>
      </section>
    );
  }

  if (status === "loading") {
    return (
      <>
        <CategoriesBar />
        <section>
          <div className="container flex bg-white min-h-[600px] p-10 mx-auto my-5">
            <div className="bg-gray-100 animate-pulse h-24 w-full rounded"></div>
          </div>
        </section>
      </>
    );
  }
};

export default Cart;
