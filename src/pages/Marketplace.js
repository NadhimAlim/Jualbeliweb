import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Marketplace = () => {
  const products = [
    { id: 1, title: "E-Commerce React", price: "Rp 200.000", description: "Template e-commerce modern dengan React dan Bootstrap." },
    { id: 2, title: "Landing Page Bootstrap", price: "Rp 100.000", description: "Landing page profesional menggunakan Bootstrap 5." },
    { id: 3, title: "Admin Dashboard Vue", price: "Rp 250.000", description: "Dashboard admin responsif berbasis Vue.js dan Tailwind CSS." },
    { id: 4, title: "Admin Dashboard Vue", price: "Rp 250.000", description: "Dashboard admin responsif berbasis Vue.js dan Tailwind CSS." },
    { id: 5, title: "Admin Dashboard Vue", price: "Rp 250.000", description: "Dashboard admin responsif berbasis Vue.js dan Tailwind CSS." },
    { id: 6, title: "Admin Dashboard Vue", price: "Rp 250.000", description: "Dashboard admin responsif berbasis Vue.js dan Tailwind CSS." },
  ];

  return (
    <Container className="mt-5">
      <h2>Marketplace</h2>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary" as={Link} to={`/product/${product.id}`}>Detail</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Marketplace;
