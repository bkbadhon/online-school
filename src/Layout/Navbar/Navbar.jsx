import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
    </>
  );

  const { user, logOut } = useContext(AuthContext);

  const [showLogout, setShowLogout] = useState(false);
  const handleLogout = () => {
    logOut();
    setShowLogout(false)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  return (
    <div className="w-full fixed bg-[#0bb7ae] ">
      <div className="navbar text-white w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown bg-[#0bb7ae] ">
            <label
              tabIndex={0}
              className="btn btn-ghost bg-[#0bb7ae] lg:hidden"
            >
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-[#0bb7ae] text-white rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a>
            <h2 className="font-semibold text-xl">
              TOTC<span className="text-orange-500">.e</span>
            </h2>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex md:flex">
          <ul className="menu menu-horizontal px-4">{navLinks}</ul>
        </div>
        <div className="navbar-end">

        {!user ? (
          <Link to={"/login"}>
            <button className="px-3 p-2 rounded bg-[#06524e] text-white">
              Login
            </button>
          </Link>
          
        ) : (

            <div className="flex justify-center items-center gap-2">
              <h2 className="font-bold">{user?.displayName}</h2>
          
            <div style={{ position: 'relative' }}>
              <img
                src={user?.photoURL} // Use user's photoURL or a placeholder
                alt="Avatar"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
                onClick={toggleLogout}
              />
              {showLogout && (
                <button
                  onClick={handleLogout}
                  style={{
                    position: 'absolute',
                    top: '40px',
                    left: '-15px',
                    backgroundColor: '#0bb7ae',
                    color: 'white',
                    border: 'none',
                    padding: '5px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Logout
                </button>
              )}
            </div>
            </div>
          
        )}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
