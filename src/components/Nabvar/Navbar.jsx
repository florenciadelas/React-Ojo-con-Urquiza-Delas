import { Link, NavLink } from "react-router-dom";
import Cartwidget from "../CartWidget/CartWidget";

const Navbar = (props) => {
  return (
    <Link to="/">
      <nav className="navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid navbar">
          <div className="majaIndumentaria">
            <NavLink to={"/"} className="navbar-brand">
              La Maja Indumentaria
            </NavLink>
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to={"categoria/remeras"}
                className="nav-link active"
                aria-current="page"
              >
                Remeras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"categoria/buzos"}
                className="nav-link active"
                aria-current="page"
              >
                Buzos
              </NavLink>
            </li>
          </ul>
          <Cartwidget />
        </div>
      </nav>
    </Link>
  );
};

export default Navbar;
