import React, { useContext } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

function CartItem({ item }) {
  const { removeProduct } = useContext(CartContext);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.pictureUrl} alt={item.title} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Precio unitario: {item.price}</ListGroup.Item>
          <ListGroup.Item>Cantidad: {item.quantity}</ListGroup.Item>
          <ListGroup.Item>Precio total: {item.totalPrice}</ListGroup.Item>
        </ListGroup>
        <Button variant="primary" onClick={() => removeProduct(item.id)}>
          Eliminar producto
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
