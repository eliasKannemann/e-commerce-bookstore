import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount";

function ItemDetail({ item }) {
  const { addProduct } = useContext(CartContext);

  const [quantity, setQuantity] = useState(10);

  const onAdd = (count) => {
    addProduct(item, count);
    setQuantity(count);
  };
  return (
    <div className="detail-container">
      <p style={{ width: "100%" }}>item detail</p>
      <div className="img-container">
        <img src={item.pictureUrl} alt={item.title} />
      </div>
      <div className="img-container">
        <h4>{item.title}</h4>
        <h5>$ {item.price}</h5>
      </div>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
      {quantity > 0 && (
        <Link to="/cart">
          <button>Ir al carrito</button>
        </Link>
      )}
    </div>
  );
}

export default ItemDetail;
