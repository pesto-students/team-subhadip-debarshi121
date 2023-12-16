import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../redux/cart/cartActions";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cartItems } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products?limit=18")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .finally(() => setLoading(false));
  };

  const isProductExistsInCart = (productId) => {
    return cartItems.find((item) => item.id === productId);
  };

  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {!loading && (
        <section className="container  px-5 py-24 mx-auto bg-gray-50 rounded">
          <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 gap-10">
            {products.map((obj) => {
              return (
                <div
                  key={obj.id}
                  className="p-4 w-full flex flex-col border border-gray-100 bg-white rounded"
                >
                  <Link
                    to="/"
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={obj.image}
                    />
                  </Link>
                  <div className="flex flex-1 flex-col gap-3 justify-between items-center">
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {obj.category}
                      </h3>
                      <h2 className="text-gray-900 title-font font-medium">
                        {obj.title}
                      </h2>
                      <p className="mt-2">${obj.price}</p>
                    </div>
                    {isProductExistsInCart(obj.id) ? (
                      <Link to="/cart">
                        <button
                          to="/cart"
                          className="bg-yellow-500 text-white rounded w-28 text-sm py-0.5 hover:bg-yellow-600"
                        >
                          Go To Cart
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(obj)}
                        className="bg-indigo-500 text-white rounded w-28 text-sm py-0.5 hover:bg-indigo-600"
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default ProductsList;
