import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ItemList from "../ItemList";
import { arrProducts } from "../../data/dataBase";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const { tipoProduct } = useParams();
  const [products, setProducts] = useState([]);

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arrProducts);
    }, 2000);
  });

  useEffect(() => {
    promesa.then((result) => {
      if (!tipoProduct) {
        setProducts(result);
      } else {
        const newList = result.filter((item) => item.categoria === tipoProduct);
        setProducts(newList);
      }
    });
  }, [tipoProduct]);

  return (
    <Container className="text-center">
      <div className="">
        <h2>{greeting}</h2>
        <ItemList items={products} />
      </div>
    </Container>
  );
}

export default ItemListContainer;
