import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="w-full flex flex-col bg-white border border-gray-200 hover:cursor-pointer hover:border-blue-300 p-3"
    >
      <div className="block relative h-40 overflow-hidden">
        <img
          alt={product.title}
          className="object-cover object-center w-full h-full block bg-gray-200"
          src={product.thumbnail}
        />
        <div className="absolute bg-green-500 text-white bottom-0 right-0 px-1 text-xs flex items-center gap-1">
          <span>{product.rating.toFixed(1)}</span>
          <BsStarFill className="h-2 w-2" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 justify-between items-center">
        <div className="mt-4 text-start w-full">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {product.brand}
          </h3>
          <h2 className="text-gray-900 title-font font-medium truncate">
            {product.title}
          </h2>
          <p className="mt-1">
            <span>${product.price}</span>
            <span className="ml-2 text-sm text-green-600">
              {product.discountPercentage}% off
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
