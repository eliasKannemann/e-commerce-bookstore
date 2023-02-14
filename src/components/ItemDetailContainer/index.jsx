import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { arrProducts } from "../../data/dataBase";
import ItemDetail from "../ItemDetail";

function ItemDetailContainer() {
  const { productId } = useParams();

  const [item, setItem] = useState({});

  const getItem = (id) => {
    return new Promise((resolve, reject) => {
      const product = arrProducts.find((item) => item.id === parseInt(id));
      resolve(product);
    });
  };

  useEffect(() => {
    const getProduct = async () => {
      const productItem = await getItem(productId);
      setItem(productItem);
    };
    getProduct();
  }, [productId]);

  return (
    <div>
      <p style={{ width: "100%", color: "white" }}>item detail container</p>
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
