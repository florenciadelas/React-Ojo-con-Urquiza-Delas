import Cartwidget from "../CartWidget/CartWidget"



const Navbar = (props) => {
  return <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" target={"_blank"} href="https://www.instagram.com/lamajadesnudaflamenca/">La Maja Indumentaria</a>
    <button className="navbar-toggler" type="button" data-bs-togglgit se="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" target={"_blank"} href="https://www.instagram.com/p/CfXDywogSXX/">Remeras</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" target={"_blank"} href="https://www.instagram.com/p/CeEm3BdAIMN/">Buzos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" target={"_blank"} href="https://www.instagram.com/p/CeywR37ghgb/">Pantalones</a>
        </li>
      </ul>
      <Cartwidget amount = {0}/>
    </div>
  </div>
</nav>
</div>
}

export default Navbar

