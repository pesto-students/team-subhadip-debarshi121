import Logo from "../assets/shopping.svg";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/userSlice";

const LoginModal = ({ setShowLoginModal }) => {
  const [formData, setFormData] = useState({
    username: "kminchelle",
    password: "0lelplR"
  });
  const dispatch = useDispatch();

  const handleSetFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(login(formData));
    setShowLoginModal(false);
  };
  return (
    <section
      className="fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center"
      style={{ background: "rgba(0,0,0,.7)" }}
    >
      <div className="shadow-lg bg-white w-11/12 md:max-w-2xl mx-auto z-50 overflow-y-auto relative">
        <MdClose
          onClick={() => setShowLoginModal(false)}
          className="absolute top-2 right-2 h-6 w-6 text-gray-500 cursor-pointer"
        />
        <div className="flex">
          <div className="bg-blue-500 p-8 w-5/12 text-white">
            <h2 className="text-3xl mb-5 font-medium">Login</h2>
            <p>Get access to your orders, wishlist & recommendations</p>
            <img src={Logo} alt="login" className="w-8/12 mt-36 mx-auto" />
          </div>
          <div className="px-10 py-12 flex-1">
            <form onSubmit={handleLogin}>
              <input
                onChange={(e) => handleSetFormData(e)}
                type="text"
                name="username"
                value={formData.username}
                className="border-b w-full border-gray-300 outline-none h-10 mb-5"
                placeholder="Username"
              />
              <input
                onChange={(e) => handleSetFormData(e)}
                type="password"
                name="password"
                value={formData.password}
                className="border-b w-full border-gray-300 outline-none h-10 mb-5"
                placeholder="Password"
              />
              <p className="text-sm mb-5">
                By continuing, you agree to E-Cart's
                <span className="text-blue-500"> Terms of Use</span> &{" "}
                <span className="text-blue-500"> Privacy Policy</span>
              </p>
              <button
                type="submit"
                className="h-10 bg-orange-400 text-white w-full font-medium"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginModal;
