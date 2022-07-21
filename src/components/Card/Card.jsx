import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom"

const Card = ({ items, id}) => {
  return ( 
<div className="cards">
    <div className="card" style={{ width: "18rem" }}>
      <img src={items.url} alt="Card image cap"></img>
      <div >
        <h5>{items.name}</h5>
        <p>{items.price}</p>
        <Link to={`/item/${id}`}><button>Ver mas detalle</button> </Link>
        <a href="#" class="btn btn-primary">
          <ItemCount stock={items.stock} initial={1} />
        </a>
      </div>
    </div>
    </div>  
  );
};

export default Card;
