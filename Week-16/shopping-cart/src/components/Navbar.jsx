import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cartItems } = useSelector((state) => ({ ...state }));
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>

          <span className="ml-3 text-xl">E-Shop</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Electronics
          </Link>
          <Link to="/" className="mr-5 hover:text-gray-900">
            Men
          </Link>
          <Link to="/" className="mr-5 hover:text-gray-900">
            Women
          </Link>
          <Link to="/" className="mr-5 hover:text-gray-900">
            Kids
          </Link>
        </nav>
        <Link
          to="/cart"
          className="relative inline-flex items-center bg-indigo-100 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-200 rounded text-base mt-4 md:mt-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          {cartItems.length > 0 && (
            <div className="absolute -top-2 -right-2 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs bg-red-500">
              {cartItems.length}
            </div>
          )}
          Cart
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
