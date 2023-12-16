import { Link } from "react-router-dom";
import { MdSearch, MdShoppingCart, MdOutlineLogin } from "react-icons/md";
import SearchResultContainer from "./SearchResultContainer";
import { useState, useRef } from "react";
import { getSearchResults } from "../utils/apis";
import { debounce } from "../utils/helpers";
import LoginModal from "./LoginModal";
import UserInfoDropdown from "./UserInfoDropdown";
import { useSelector } from "react-redux";

const Navbar = () => {
  const searchInputRef = useRef(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userInfoDropdown, setUserInfoDropdown] = useState(false);

  const [searchResultProducts, setSearchResultProducts] = useState([]);
  const { user, isLoggedIn } = useSelector((state) => state.user);

  const fetchSearchResult = async (keyword) => {
    if (keyword.length > 0) {
      const data = await getSearchResults(keyword);
      setSearchResultProducts(data.products);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  };

  const processFetchSearch = debounce((keyword) => fetchSearchResult(keyword));

  return (
    <>
      <header className="text-white bg-blue-600 body-font border-b">
        <div className="container mx-auto flex py-3 justify-evenly items-center">
          <Link to="/" className="font-medium">
            <span className="text-2xl">E-Cart</span>
          </Link>
          <div className="w-4/12 relative">
            <input
              type="text"
              ref={searchInputRef}
              onChange={(e) => processFetchSearch(e.target.value)}
              placeholder="Search for Products, Brands and More"
              className="border border-gray-200 text-gray-600 outline-none pl-3 pr-8 w-full h-10 focus:border-indigo-300"
            />
            <MdSearch className="absolute text-gray-400 w-5 h-5 top-3 right-2" />
            {showSearchResults && (
              <SearchResultContainer
                products={searchResultProducts}
                setShowSearchResults={setShowSearchResults}
              />
            )}
          </div>
          <div className="flex gap-3">
            {isLoggedIn ? (
              <div className="relative">
                <div
                  onClick={() => setUserInfoDropdown((prev) => !prev)}
                  className="inline-flex gap-1 items-center py-2 px-3 cursor-pointer"
                >
                  <img
                    src={user.image}
                    alt={user.firstName}
                    className="w-6 h-6 rounded-full bg-gray-100"
                  />
                  <span>{user.firstName}</span>
                </div>
                {userInfoDropdown && (
                  <UserInfoDropdown setUserInfoDropdown={setUserInfoDropdown} />
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="inline-flex gap-1 items-center py-2 px-3 hover:bg-blue-500 rounded"
              >
                <MdOutlineLogin className="w-5 h-5" />
                <span>Login</span>
              </button>
            )}

            <Link
              to="/cart"
              className="inline-flex gap-1 items-center py-2 px-3 hover:bg-blue-500 rounded"
            >
              <MdShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </header>

      {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
    </>
  );
};

export default Navbar;
