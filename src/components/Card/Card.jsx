import ItemCount from "../ItemCount/ItemCount";

const Card = ({ name, price, url, stock }) => {
  return ( 
<div className="cards">
    <div className="card" style={{ width: "18rem" }}>
      <img src={url} alt="Card image cap"></img>
      <div >
        <h5>{name}</h5>
        <p>{price}</p>
        <a href="#" class="btn btn-primary">
          <ItemCount stock={stock} initial={1} />
        </a>
      </div>
    </div>
    </div>
  );
};

export default Card;
