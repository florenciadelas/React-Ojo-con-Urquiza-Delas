import Cartwidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"



const Navbar = (props) => {
  return <Link to="/">
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" target={"_blank"} href="https://www.instagram.com/lamajadesnudaflamenca/">La Maja Indumentaria</a>
    <button className="navbar-toggler" type="button" data-bs-togglgit se="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <Link to={"categoria/remeras"}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" target={"_blank"}>Remeras</a>
        </li>
        </Link>
        <Link to={"categoria/buzos"}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" target={"_blank"}>Buzos</a>
        </li>
        </Link>
      </ul>
      <Cartwidget amount = {0}/>
    </div>
  </div>
</nav>
</Link>
}

export default Navbar

