import { Link } from "react-router-dom";

const Card = ({ url, name, price, id }) => {
  return (
    <div className="card">
      <img className="img" src={url} alt="Card image cap"></img>
      <div>
        <h5>{name}</h5>
        <p> ${price}</p>
        <Link to={`/item/${id}`}>
          <button className="botones">Ver mas detalle</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Card;
