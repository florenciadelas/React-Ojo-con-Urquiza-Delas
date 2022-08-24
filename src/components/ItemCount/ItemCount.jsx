import { useState } from "react";

const ItemCount = ({ stock = 10, onAdd, initial = 0 }) => {
  const [contador, setCont] = useState(initial);

  const controlOperacion = (operacion) => {
    if (operacion === "-" && contador > 0) {
      setCont(contador - 1);
    } else if (operacion === "+" && contador < stock) {
      setCont(contador + 1);
    }
  };
  return (
    <div>
      <h4>{contador}</h4>
      <button onClick={() => controlOperacion("+")} className="botonesSuma">
        +
      </button>
      <button onClick={() => controlOperacion("-")} className="botonesSuma">
        -
      </button>
      <button
        onClick={() => onAdd(contador)}
        className="botones"
        disabled={contador === "" || contador === 0}
      >
        Comprar
      </button>
    </div>
  );
};

export default ItemCount;
