import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import navImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 shadow-lg transform transition-transform hover:scale-105"
              : " py-2 px-4 rounded-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/place"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 shadow-lg transform transition-transform hover:scale-105"
              : " py-2 px-4 rounded-lg"
          }
        >
          Places
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 shadow-lg transform transition-transform hover:scale-105"
              : " py-2 px-4 rounded-lg"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 shadow-lg transform transition-transform hover:scale-105"
              : " py-2 px-4 rounded-lg"
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signUp"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 shadow-lg transform transition-transform hover:scale-105"
              : " py-2 px-4 rounded-lg"
          }
        >
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myProfile"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 shadow-lg transform transition-transform hover:scale-105"
              : " py-2 px-4 rounded-lg"
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.warn("LogOut successful.");
      })
      .catch(() => {
        // An error happened.
      });
  };
  return (
    <div className="navbar  bg-gradient-to-r from-green-800 to-teal-700 text-white px-4 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gradient-to-r from-green-800 to-teal-700  rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <div className="hidden lg:flex items-center space-x-3 mb-4">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current text-green-300"
          >
            <path d="M12 2C7.031 2 3 6.032 3 11s4.031 9 9 9 9-4.032 9-9-4.031-9-9-9zm1.003 14.97l-.004.002c-.032.01-.065.027-.097.042-1.187.523-2.65-.175-3.045-1.417-.312-1.01.032-2.178.856-2.891.683-.577 1.572-.867 2.358-.716.867.167 1.514.844 1.624 1.735.112.917-.339 1.826-1.023 2.298.062.198.111.41.111.628 0 .823-.671 1.494-1.495 1.494zm-3.526-7.05c-.507 0-.919-.412-.919-.918 0-.507.412-.918.919-.918s.918.411.918.918-.411.918-.918.918zm5.037 0c-.506 0-.918-.412-.918-.918 0-.507.412-.918.918-.918.507 0 .918.411.918.918 0 .506-.411.918-.918.918z" />
          </svg>
          <span className="text-2xl font-bold">EcoAdventure</span>
        </div>
        {/* <a className="btn btn-ghost text-xl">FusionDeck</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2">
        {/* <p>{user && user?.email}</p> */}
        {user && user?.photoURL ? (
          <div className="relative inline-block group">
            {/* User img */}
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={user?.photoURL}
              alt=""
            />
            {/* hover user name */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
              {user.displayName}
            </span>
          </div>
        ) : (
          <div className="relative inline-block group">
            {/* default image */}
            <img className="rounded-full" src={navImg} alt="" />
            {/* hover user name */}
          </div>
        )}

        {user ? (
          <Link
            to=""
            onClick={handleLogOut}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 shadow-lg transform transition-transform hover:scale-105"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className=" bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 shadow-lg transform transition-transform hover:scale-105 "
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
