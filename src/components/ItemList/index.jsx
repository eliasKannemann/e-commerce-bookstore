import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Item from "../Item";
import style from "./style.module.css";

function ItemList({ items }) {
  return (
    <Container className="d-flex align-items-center">
      <Row className=" d-flex col-18 justify-content-center  flex-wrap">
        {items.map((product) => (
          <Col className={`${style.itempr}`}>
            <Item key={product.id} item={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
