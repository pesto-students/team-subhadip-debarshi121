import { useNavigate } from "react-router-dom";
import { useDetectClickOutside } from "react-detect-click-outside";

const SearchResultContainer = ({ products, setShowSearchResults }) => {
  const navigate = useNavigate();

  const closeSearchResultContainer = () => {
    setShowSearchResults(false);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    closeSearchResultContainer();
  };

  const ref = useDetectClickOutside({
    onTriggered: closeSearchResultContainer
  });
  return (
    <div
      ref={ref}
      className="absolute border z-10 w-full bg-white h-72 shadow-lg flex flex-col overflow-y-auto"
    >
      {products.map((product) => (
        <div
          onClick={() => handleProductClick(product.id)}
          key={product.id}
          className="px-2 py-2 hover:bg-blue-50 cursor-pointer"
        >
          <div className="flex gap-2 ">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-9 h-9 rounded-sm"
            />
            <div className="flex-1 text-gray-700 flex flex-col justify-center font-medium">
              <p className="text-sm ">{product.title}</p>
              <p className="text-xs text-blue-500">in {product.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResultContainer;
