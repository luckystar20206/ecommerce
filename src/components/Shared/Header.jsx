import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header bg-blue70 fixed top-0 right-0 left-0 text-center container mx-auto py-[20px]">
      <div className="flex justify-between items-center mx-auto w-[90%]">
        <div>
          <NavLink to="/">
            <img src={logo} alt="Ecommerce Logo" />
          </NavLink>
        </div>
        <div>
          <ul className="text-white flex gap-6">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/auth">Sing Up</NavLink>
            </li>
            <li>
              <NavLink to="/login">Sing IN</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
