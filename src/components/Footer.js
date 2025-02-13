import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Source Code Marketplace</h5>
            <p>Tempat terbaik untuk membeli dan menjual source code website.</p>
          </Col>
          <Col md={3}>
            <h5>Menu</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/marketplace" className="text-light text-decoration-none">Marketplace</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Kontak</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Kami</h5>
            <p>
              <a href="https://facebook.com" className="text-light me-2">Facebook</a>
              <a href="https://twitter.com" className="text-light me-2">Twitter</a>
              <a href="https://instagram.com" className="text-light">Instagram</a>
            </p>
          </Col>
        </Row>
        <hr />
        <p className="text-center mb-0">© {new Date().getFullYear()} Source Code Marketplace. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
