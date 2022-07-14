import { useState } from "react";


const ItemCount =(props) => {
   
    const [contador, setCont] = useState(0)

    const controlOperacion = (operacion) =>{

        if(operacion==="-" && contador > 0){
            setCont(contador-1)
        }else if (operacion === "+" && contador < props.stock){
            setCont(contador+1)
        }
    }
        return ( 
            <div>
                <h3>{contador}</h3>
            <button onClick={()=> controlOperacion("+")} className="botones">+</button>
            <button onClick={()=> controlOperacion("-")} className="botones">-</button>
            </div>
         );
        }
 
export default ItemCount;