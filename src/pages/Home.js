
import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container fluid className="vh-100 d-flex flex-column align-items-center justify-content-center text-center">
      <h1>Jual Beli Source Code Website</h1>
      <p>Tempat terbaik untuk mendapatkan source code berkualitas</p>
      <Button variant="primary" as={Link} to="/marketplace">
        Jelajahi Marketplace
      </Button>
    </Container>
  );
};

export default Home;

