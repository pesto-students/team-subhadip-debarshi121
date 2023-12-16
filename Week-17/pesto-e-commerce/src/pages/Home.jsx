import ProductCard from "../components/ProductCard";
import { useEffect, useState, useReducer } from "react";
import { getProducts } from "../utils/apis";
import CategoriesBar from "../components/CategoriesBar";
import InfiniteScroll from "react-infinite-scroll-component";
import { productsReducer, INITIAL_STATE } from "../reducers/productsReducer";
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR
} from "../reducers/productsReducer";

const limit = 15;

const Home = () => {
  const [state, dispatch] = useReducer(productsReducer, INITIAL_STATE);
  const { products, hasMore, skip } = state;

  const fetchProducts = async () => {
    dispatch({ type: FETCH_START });
    try {
      const data = await getProducts(limit, skip);
      dispatch({
        type: FETCH_SUCCESS,
        payload: { products: data.products, skip: limit, total: data.total }
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.message || "Unknown Error!"
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <CategoriesBar />
      <div className="container mx-auto my-5 text-gray-600 bg-white p-5">
        <InfiniteScroll
          dataLength={products.length}
          next={fetchProducts}
          hasMore={hasMore}
          loader={
            <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5">
              {[...Array(5).keys()].map((item) => (
                <div key={item} className="p-3 bg-white">
                  <div className="h-40 bg-gray-200 animate-pulse"></div>
                </div>
              ))}
            </main>
          }
        >
          <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {state.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </main>
        </InfiniteScroll>
      </div>
    </>
  );
};
export default Home;
