import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ items }) => {
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
          <ItemCount stock={items.stock} initial={0} />
        </a>
      </div>
    </div>
    </div>
  );
};

export default ItemDetail;