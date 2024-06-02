import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then().catch();
  };
  return (
    <div className="navbar  bg-opacity-30 bg-black text-white ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Babui Pakhir Basha </a>
      </div>
      <div className="flex-none gap-2">
        <div className=" ">
          <NavLink className="mr-4" to="/">
            Home
          </NavLink>
          <NavLink to="/apartment">Apartment</NavLink>
        </div>
        <div className="dropdown dropdown-end">
          {user ? (
            <div>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black"
              >
                <li>
                  <a className="justify-between"> {user?.displayName} </a>
                </li>
                <li>
                  <a>Dashboard</a>
                </li>
                <li>
                  <button onClick={handleLogout} className="btn">
                    {" "}
                    Logout{" "}
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to="/login">
                <button className="btn "> Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
