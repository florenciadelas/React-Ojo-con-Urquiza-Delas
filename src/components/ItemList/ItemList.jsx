import React from "react";
import Card from "../Card/Card";

function ItemList(props) {
  return (
    <div>
      {props.items.map((item) => {
        return (
          <Card
            key={item.id}
            name={item.name}
            price={item.price}
            url={item.url}
            stock={item.stock}
          />
        );
      })}
    </div>
  );
}
export default ItemList;
