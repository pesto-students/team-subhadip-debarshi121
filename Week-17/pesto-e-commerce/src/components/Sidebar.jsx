import { BsStarFill } from "react-icons/bs";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setPrice,
  addRatings,
  removeRatings,
  addDiscounts,
  removeDiscounts
} from "../redux/slices/filterSortSlice";

const Sidebar = () => {
  const { price, ratings, discounts } = useSelector(
    (state) => state.filterSort
  );
  const dispatch = useDispatch();

  return (
    <aside className="w-3/12 bg-white text-start text-gray-700 p-5">
      <h2 className="font-bold tracking-widest">Filters</h2>
      <div className="mt-10">
        <h3 className="mb-3">PRICE</h3>
        <InputRange
          step={100}
          maxValue={5000}
          minValue={0}
          formatLabel={(value) => `$${value}`}
          value={price}
          onChange={(value) => dispatch(setPrice(value))}
        />
      </div>
      <div className="mt-10">
        <h3 className="mb-3">CUSTOMER RATINGS</h3>
        {[4.5, 4.3, 4.1].map((star) => (
          <label key={star} className="flex gap-2 items-center mt-3">
            <input
              type="checkbox"
              name="ratings"
              checked={ratings.includes(star)}
              onChange={(e) =>
                e.target.checked
                  ? dispatch(addRatings(star))
                  : dispatch(removeRatings(star))
              }
              className="form-checkbox h-4 w-4 text-red-600"
            />
            <div className="flex items-center">
              <span>{star}</span> <BsStarFill className="h-3 w-3 ml-0.5" />
              <span className="ml-2">& above</span>
            </div>
          </label>
        ))}
      </div>
      <div className="mt-10">
        <h3 className="mb-3">DISCOUNTS</h3>
        {[5, 10, 15, 20].map((discount) => (
          <label key={discount} className="flex gap-2 items-center mt-3">
            <input
              type="checkbox"
              name="discount"
              checked={discounts.includes(discount)}
              onChange={(e) =>
                e.target.checked
                  ? dispatch(addDiscounts(discount))
                  : dispatch(removeDiscounts(discount))
              }
              className="form-checkbox h-4 w-4 text-red-600"
            />
            <div className="flex items-center">
              <span>{discount}%</span>
              <span className="ml-2">& above</span>
            </div>
          </label>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
