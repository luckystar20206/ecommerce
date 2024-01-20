import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import avatar from "../../assets/images/avatar.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const location = useLocation();
  const { user, logOut, clearUser } = useContext(AuthContext);
  const [dorpDown, setDropDown] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(res => {
        clearUser()
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="header bg-blue70 fixed top-0 right-0 left-0 text-center container mx-auto py-[20px]">
      <div className="flex justify-between items-center mx-auto w-[90%]">
        <div>
          <NavLink to="/">
            <img src={logo} alt="Ecommerce Logo" />
          </NavLink>
        </div>
        <div className="flex justify-between items-center gap-10">
          <ul className="text-white flex gap-6">
            <li>
              <NavLink to="/" className={location.pathname === '/'? "active-link": ""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={location.pathname === '/shop'? "active-link": ""}>Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={location.pathname === '/about'? "active-link": ""}>About Us</NavLink>
            </li>
            {!user && <li>
              <NavLink to="/register" className={location.pathname === '/register'? "active-link": ""}>Sing Up</NavLink>
            </li>}
            {!user && <li>
              <NavLink to="/login" className={location.pathname === '/login'? "active-link": ""}>Sing IN</NavLink>
            </li>}
          </ul>
          <div className="relative">
            <img
              onClick={() => setDropDown(!dorpDown)}
              className="w-16 h-16 rounded-full cursor-pointer"
              src={user?.photoURL || avatar}
              alt="your avatar"
            />
            {dorpDown &&
              <ul className="navbarDropdown w-[250px] rounded-lg absolute top-[100px] bg-black text-white p-4 space-y-3">
                <li>{user?.displayName}</li>
                <li>{user?.email}</li>
                <li>
                  {user && <button
                    onClick={handleLogOut}
                    className="p-2 border border-red rounded-lg w-full hover:bg-red hover:text-white"
                  >
                    Logout
                  </button>}
                </li>
                
              {!user && <h2 className=" bg-black text-red rounded-xl">No user found!</h2>}
              </ul>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
