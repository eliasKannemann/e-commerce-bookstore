import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./style.module.css";

function Item({ item }) {
  return (
    <Card className={style.container}>
      <Card.Img
        variant="top"
        src={item.pictureUrl}
        alt={"imagen product"}
        className={style.img}
      />
      <Card.Body>
        <Card.Title>{item.title.slice(0, 6)}</Card.Title>
        <h5>{item.title.slice(0, 6)}</h5>
        <p>$ {item.price}</p>

        <Link to={`/item/${item.id}`}>
          <Button variant="primary" className="rounded-0">
            Ver detalle
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
