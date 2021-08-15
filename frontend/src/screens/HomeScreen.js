import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setsProducts] = useState([]);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} lx={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
