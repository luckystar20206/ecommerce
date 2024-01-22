import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import avatar from "../../assets/images/avatar.jpg";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const location = useLocation();
  const { user, logOut, clearUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(res => {
        clearUser()
      })
      .catch(err => console.log(err))
  }



  // DropDown hidden when click outside
  const popupRef = useRef(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsPopupVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    if (!isPopupVisible) {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPopupVisible]);
  // ref={popupRef} use in current DropDown div
  // Dropdown program End
  return (
    <div className="header bg-blue70 fixed top-0 right-0 left-0 text-center lg:container mx-auto py-[20px]">
      <div className="md:flex justify-between items-center mx-auto w-[90%]">
        <div>
          <NavLink to="/">
            <img className="mx-auto mb-3" src={logo} alt="Ecommerce Logo" />
          </NavLink>
        </div>
        <div className="flex justify-between items-center gap-10">
          <ul className="text-white flex gap-6 flex-wrap">
            <li>
              <NavLink to="/" className={location.pathname === '/'? "active-link text-sm md:text-xl": " text-sm md:text-xl"}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={location.pathname === '/shop'? "active-link text-sm md:text-xl": " text-sm md:text-xl"}>Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={location.pathname === '/about'?  "active-link text-sm md:text-xl": " text-sm md:text-xl"}>About Us</NavLink>
            </li>
            {!user && <li>
              <NavLink to="/register" className={location.pathname === '/register'? "active-link text-sm md:text-xl": " text-sm md:text-xl"}>Sing Up</NavLink>
            </li>}
            {!user && <li>
              <NavLink to="/login" className={location.pathname === '/login'?  "active-link text-sm md:text-xl": " text-sm md:text-xl"}>Sing IN</NavLink>
            </li>}
          </ul>
          <div ref={popupRef} className="">
            <img
              onClick={() => setIsPopupVisible(!isPopupVisible)}
              className="min-w-14 h-14 rounded-full cursor-pointer m-2"
              src={user?.photoURL || avatar}
              alt="your avatar"
            />
            {isPopupVisible &&
              <ul className="navbarDropdown w-[250px] rounded-lg absolute right-0 top-[180px] md:top-[120px] bg-black text-white p-4 space-y-3 mr-3 md:mr-0">
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
