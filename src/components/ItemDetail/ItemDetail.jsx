import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import { useContext } from "react";

const ItemDetail = ({ items }) => {
  const [compro, setCompro] = useState(false);
  const { addItem } = useContext(CartContext);

  const onAdd = (cant) => {
    addItem(items, cant);
    setCompro(true);
  };
  return (
    <div>
      <div className="detalleItems">
        <img src={items.url} alt="Card image cap"></img>
        <div className="descripcionItems">
          <h2>{items.name}</h2>
          <h4>Categoria: {items.categoria}</h4>
          <h4>Genero: {items.genero}</h4>
          <h1> $ {items.price}</h1>
          <a>
            {compro == 0 ? (
              <ItemCount
                key={items.id}
                stock={items.stock}
                initial={0}
                onAdd={onAdd}
              />
            ) : (
              <Link to="/cart">
                <button className="botones">Ir al carrito</button>{" "}
              </Link>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
