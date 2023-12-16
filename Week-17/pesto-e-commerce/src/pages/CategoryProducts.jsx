import CategoriesBar from "../components/CategoriesBar";
import { getCategoryProducts } from "../utils/apis";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy, resetFilterSort } from "../redux/slices/filterSortSlice";

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredSortedProducts, setFilteredSortedProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { price, ratings, discounts, sortBy } = useSelector(
    (state) => state.filterSort
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilterSort());
    const fetchProduct = async () => {
      try {
        const data = await getCategoryProducts(category);
        setProducts(data.products);
        setFilteredSortedProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [category]);

  useEffect(() => {
    let filtered = [];
    filtered = products.filter((product) =>
      ratings.every((rating) => product.rating >= rating)
    );
    filtered = filtered.filter((product) =>
      discounts.every((discount) => product.discountPercentage >= discount)
    );
    filtered = filtered.filter(
      (product) => product.price >= price.min && product.price <= price.max
    );

    switch (sortBy) {
      case "lowToHigh":
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case "bestRated":
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered = filtered;
    }
    setFilteredSortedProducts(filtered);
  }, [ratings, discounts, price, sortBy]);

  return (
    <>
      <CategoriesBar />
      <section>
        <div className="container mx-auto flex gap-5 my-5">
          <Sidebar />
          <main className="flex-1 bg-white p-5 min-h-[680px]">
            <div className="text-start text-gray-700 border-b pb-1.5">
              <h2 className="font-bold tracking-widest">
                {capitalizeFirstLetter(category)}
              </h2>
              <div className="flex gap-5 mt-2 text-sm">
                <span className="font-bold">Sort by</span>
                <span
                  className={
                    "cursor-pointer " +
                    (sortBy === "popularity" ? "text-gray-800 font-medium" : "")
                  }
                  onClick={() => dispatch(setSortBy("popularity"))}
                >
                  Popularity
                </span>
                <span
                  className={
                    "cursor-pointer " +
                    (sortBy === "lowToHigh" ? "text-gray-800 font-medium" : "")
                  }
                  onClick={() => dispatch(setSortBy("lowToHigh"))}
                >
                  Price -- Low to High
                </span>
                <span
                  className={
                    "cursor-pointer " +
                    (sortBy === "highToLow" ? "text-gray-800 font-medium" : "")
                  }
                  onClick={() => dispatch(setSortBy("highToLow"))}
                >
                  Price -- High to Low
                </span>
                <span
                  className={
                    "cursor-pointer " +
                    (sortBy === "bestRated" ? "text-gray-800 font-medium" : "")
                  }
                  onClick={() => dispatch(setSortBy("bestRated"))}
                >
                  Best Rated
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
              {filteredSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default CategoryProducts;
