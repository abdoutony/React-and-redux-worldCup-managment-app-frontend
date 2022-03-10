import "./navbar.css";
import { Outlet, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/delivery">Delivery</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default NavBar;
