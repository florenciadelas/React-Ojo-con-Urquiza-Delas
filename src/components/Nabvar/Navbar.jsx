import Cartwidget from "../CartWidget/CartWidget"


const Menu = () => {
  return <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" target={"_blank"} href="https://www.instagram.com/lamajadesnudaflamenca/">La Maja Indumentaria</a>
    <button class="navbar-toggler" type="button" data-bs-togglgit se="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" target={"_blank"} href="https://www.instagram.com/p/CfXDywogSXX/">Remeras</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" target={"_blank"} href="https://www.instagram.com/p/CeEm3BdAIMN/">Buzos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" target={"_blank"} href="https://www.instagram.com/p/CeywR37ghgb/">Pantalones</a>
        </li>
      </ul>
      <Cartwidget />
    </div>
  </div>
</nav>
</div>
}

export default Menu

