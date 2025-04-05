import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth";

const Navbar = () => {
  const { token, logout } = useAuth();
  const localToken = localStorage.getItem("token");

  return (
    <div className="w-full h-[50px] bg-black text-white flex justify-between items-center px-[20px]">
      <h4 className="font-semibold text-xl">
        <Link to="/">Main Home</Link>
      </h4>
      <div className="flex justify-between items-center gap-[20px]">
        {token || localToken ? (
          <div className="flex justify-between items-center gap-12">
            <button>Cart</button>
            <h4 className="hover:cursor-pointer" onClick={logout}>
              Logout
            </h4>
          </div>
        ) : (
          <h4>
            <Link to="/login">Login</Link>
          </h4>
        )}
      </div>
    </div>
  );
};

export default Navbar;
