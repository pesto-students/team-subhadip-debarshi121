import { MdShoppingCart } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { MdKeyboardArrowRight, MdPayment } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductDetails } from "../utils/apis";
import { addToCart } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import CategoriesBar from "../components/CategoriesBar";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(null);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products: cartProducts } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const handleAddToCart = async (productId) => {
    if (user) {
      await dispatch(
        addToCart({
          userId: user?.id,
          products: [
            ...cartProducts,
            {
              id: productId,
              quantity: 1
            }
          ]
        })
      );
      toast.success("Item added to cart!", { position: "bottom-center" });
    } else {
      toast.error("You must login first!", { position: "bottom-center" });
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductDetails(productId);
        setProduct(product);
        setActiveImage(product.thumbnail);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  return !loading && !error ? (
    <>
      <CategoriesBar />
      <div className="container mx-auto flex gap-8 my-5 text-gray-600 bg-white p-5 min-h-[700px]">
        <div className="w-4/12">
          <div className="flex gap-8">
            <div className="w-12 gap-1 flex flex-col">
              {product?.images?.map((image, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImage(image)}
                  className="border border-gray-300 w-12 flex items-center justify-center hover:cursor-pointer"
                >
                  <img
                    alt="https://m.media-amazon.com/images/I/61-r9zOKBCL._SL1500_.jpg"
                    className="w-12 h-12 object-cover"
                    src={image}
                  />
                </div>
              ))}
            </div>
            <div className="flex-1">
              <img
                className="w-full border bg-gray-50 h-80 object-cover"
                src={activeImage}
                alt={product?.title}
              />
              <div className="flex gap-2 mt-2">
                {cartProducts.some((item) => item.id === product.id) ? (
                  <Link
                    to="/cart"
                    className="flex items-center justify-center gap-2 bg-gray-400 text-white h-10 w-full rounded-sm"
                  >
                    <MdShoppingCart />
                    <span>GO TO CART</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="flex items-center justify-center gap-2 bg-amber-500 text-white h-10 w-full rounded-sm"
                  >
                    <MdShoppingCart />
                    <span>ADD TO CART</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <nav className="container mx-auto text-xs text-gray-500">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="hover:text-blue-500">
                  Home
                </Link>
                <MdKeyboardArrowRight className="mt-0.5" />
              </li>
              <li className="flex items-center">
                <Link
                  to={`/category/${product?.category}`}
                  className="hover:text-blue-500"
                >
                  {product?.category}
                </Link>
                <MdKeyboardArrowRight className="mt-0.5" />
              </li>
              <li className="flex items-center">
                <span>Products</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-2xl font-medium mt-5">{product?.title}</h1>
          <div className="bg-gray-100 text-gray-600 px-1.5 py-0.5 text-xs inline border rounded font-medium">
            {product?.brand}
          </div>
          <h2 className="mt-5">{product?.description}</h2>

          <div className="font-medium">
            <span className="text-xl text-gray-900">${product?.price}</span>
            <span className="text-green-600 ml-5">
              {product?.discountPercentage}% off
            </span>
          </div>
          <div className="bg-green-500 text-white px-2 py-0.5 text-xs inline rounded">
            <span>{product?.rating?.toFixed(1)}</span>
            <BsStarFill className="h-2 w-2 inline -mt-0.5 ml-0.5" />
          </div>
        </div>
        <Toaster />
      </div>
    </>
  ) : !loading && error ? (
    <div>{error}</div>
  ) : (
    <div className="container mx-auto my-5 min-h-[700px] animate-pulse bg-gray-200 p-5"></div>
  );
};

export default ProductDetails;
