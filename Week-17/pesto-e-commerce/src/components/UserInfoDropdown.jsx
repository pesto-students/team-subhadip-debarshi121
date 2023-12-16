import { useDispatch, useSelector } from "react-redux";
import { MdLogout } from "react-icons/md";
import { logout } from "../redux/slices/userSlice";

const UserInfoDropdown = ({ setUserInfoDropdown }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setUserInfoDropdown(false);
  };

  return (
    <div className="z-10 absolute flex flex-col justify-center items-center gap-3 rounded-sm shadow-xl border top-10 bg-white w-60 p-5">
      <img
        className="w-12 h-12 rounded-full border bg-gray-100"
        src={user.image}
        alt={user.firstName}
      />
      <span className="text-gray-600 font-medium">{`${user.firstName} ${user.lastName}`}</span>
      <button
        onClick={() => handleLogout()}
        className="flex gap-2 items-center border bg-gray-100 rounded-sm text-gray-700 hover:text-red-600 px-5 py-1"
      >
        <MdLogout />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default UserInfoDropdown;
