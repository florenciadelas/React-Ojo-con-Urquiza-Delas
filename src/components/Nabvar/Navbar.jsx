import { Link } from "react-router-dom"
import Cartwidget from "../CartWidget/CartWidget"

const Navbar = (props) => {
  return <Link to="/">
   <nav className="navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid navbar">
    <div className="majaIndumentaria">
    <Link to={"/"} className="navbar-brand" >La Maja Indumentaria</Link>
    </div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <Link to={"categoria/remeras"}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Remeras</a>
        </li>
        </Link>
        <Link to={"categoria/buzos"}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Buzos</a>
        </li>
        </Link>
      </ul>
      <Cartwidget/>
  
  </div>
</nav>
</Link>
}

export default Navbar

