import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header bg-blue70 fixed top-0 right-0 left-0 text-center container mx-auto py-[10px]">
      <div className="flex justify-between items-center mx-auto w-[90%]">
        <div>
          <a href="/">
            <img src={logo} alt="Ecommerce Logo" />
          </a>
        </div>
        <div>
          <ul className="text-white flex gap-6">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Order</a>
            </li>
            <li>
              <a href="#">Order Review</a>
            </li>
            <li>
              <a href="#">Manage Inventery</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
