import React from "react";
import { Row, Col, CardGroup } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

function HomeScreen() {
  return (
    <div>
      <h1>Last Production</h1>
      <CardGroup>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <h4>{product.name}</h4>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </div>
  );
}

export default HomeScreen;