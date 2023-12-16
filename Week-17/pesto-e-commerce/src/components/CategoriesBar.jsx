import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/helpers";

const CategoriesBar = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <section className="border-b py-2 bg-white">
      <nav className="container mx-auto font-bold text-sm text-gray-700 flex gap-10 justify-center overflow-y-auto">
        {categories.slice(0, 10).map((category, i) => (
          <Link
            to={`/category/${category}`}
            key={i}
            className="hover:text-blue-600"
          >
            <span>{capitalizeFirstLetter(category)}</span>
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default CategoriesBar;
