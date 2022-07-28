import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import { useContext } from "react";

const ItemDetail = ({items}) => {

  const [amount, setAmount] = useState(0)
  const { setCartItems } = useContext(CartContext);
 
  const onAdd = (amount) =>{
    setAmount(amount)
    setCartItems((prevState) => [...prevState, items]);
  };

  return ( 
<div>
    <div className="detalleItems">
      
      <img src={items.url} alt="Card image cap"></img>
      <div className="descripcionItems" >
        <h1>{items.name}</h1>
        <h5>Categoria: {items.categoria}</h5>
        <h6>Genero: {items.genero}</h6>
        <h1>{items.price}</h1>
        <a >
          {(amount == 0 && <ItemCount stock={items.stock} initial={0} onAdd={onAdd} />)}
      <Link to="/cart"><button>Ir al carrito</button> </Link>
        </a>
      </div>
    </div>  
    </div>
  );
};

export default ItemDetail;