import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  removeProductFromCart,
  updateProductQuantityCart
} from "../redux/cart/cartActions";

const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const handleRemoveProduct = (productId) => {
    dispatch(removeProductFromCart(productId));
  };

  const handleUpdateQuantity = (productId, qty) => {
    dispatch(updateProductQuantityCart(productId, qty));
  };

  return (
    <section className="container  px-5 py-24 mx-auto bg-gray-50 rounded">
      <h1 className="text-3xl font-medium">Shopping Cart</h1>
      <hr className="my-5" />
      <div className="flex flex-wrap gap-5">
        <div className="flex flex-col gap-5 md:w-8/12 w-full">
          {cartItems.map((obj) => {
            return (
              <div
                key={obj.id}
                className="flex flex-wrap border border-gray-200 p-3 gap-3 bg-white rounded"
              >
                <div className="flex flex-wrap lg:w-8/12 md:w-full">
                  <div className="lg:w-2/12 md:w-3/12 w-full p-3 bg-white border border-gray-100 rounded">
                    <img alt={obj.title} src={obj.image} className="w-full" />
                  </div>
                  <div className="p-3 flex-1">
                    <h2 className="text-gray-900 title-font font-medium">
                      {obj.title}
                    </h2>
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {obj.category}
                    </h3>
                    <p className="mt-2">${obj.price}</p>
                  </div>
                </div>
                <div className="flex flex-1 md:mt-2 mt-3 justify-between">
                  <select
                    onChange={(e) =>
                      handleUpdateQuantity(obj.id, e.target.value)
                    }
                    value={obj.quantity}
                    className="custom-select border border-gray-200 px-8 py-1 rounded h-8 "
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <button
                    onClick={() => handleRemoveProduct(obj.id)}
                    className="p-2 -mr-1 h-8"
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
              </div>
            );
          })}
        </div>
        <div className="flex-1">
          <div className="bg-gray-100 p-5 rounded text-gray-700">
            <h3 className="text-gray-900 font-medium tracking-widest title-font mb-1">
              Order summary
            </h3>
            <div className="flex justify-between border-b py-3 border-gray-200">
              <p>Subtotal</p>
              <p>${totalPrice}</p>
            </div>
            <div className="flex justify-between border-b py-3 border-gray-200">
              <p>Discount</p>
              <p>$0</p>
            </div>
            <div className="flex justify-between border-b py-3 border-gray-200">
              <p>Delivery Charges</p>
              <p>Free</p>
            </div>
            <div className="flex tracking-widest justify-between font-medium py-3 border-gray-200">
              <p>Subtotal</p>
              <p>${totalPrice}</p>
            </div>
            <button className="bg-indigo-600 text-white w-full py-2 font-medium rounded mt-2">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
