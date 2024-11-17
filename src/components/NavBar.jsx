import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import navImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signUp">Sign Up</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        alert("LogOut successful.");
      })
      .catch(() => {
        // An error happened.
      });
  };
  return (
    <div className="navbar  absolute z-50 backdrop-blur-xl top-0 left-0 ">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">FusionDeck</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2">
        {/* <p>{user && user?.email}</p> */}
        {user ? (
          <div className="relative inline-block group">
            {/* User img */}
            <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
            {/* hover user name */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {user.displayName}
            </span>
          </div>
        ) : (
          <img className="rounded-full" src={navImg} alt="" />
        )}

        {user ? (
          <Link
            to=""
            onClick={handleLogOut}
            className="btn rounded-none  bg-[#F9A51A] px-6"
          >
            Logout
          </Link>
        ) : (
          <Link to="/login" className="btn rounded-none  bg-[#F9A51A] px-6">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
