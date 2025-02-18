import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "E-Commerce React",
    price: "Rp 200.000",
    description: "Template e-commerce modern dengan React dan Bootstrap.",
    image: "/images/profil.png",
    preview: "https://man4bantul.sch.id/" // Ganti dengan URL live preview asli
  },
  {
    id: 2,
    title: "Landing Page Bootstrap",
    price: "Rp 100.000",
    description: "Landing page profesional menggunakan Bootstrap 5.",
    image: "/images/website-design.jpg",
    preview: "https://your-demo-url.com/landingpage"
  },
  {
    id: 3,
    title: "Admin Dashboard Vue",
    price: "Rp 250.000",
    description: "Dashboard admin responsif berbasis Vue.js dan Tailwind CSS.",
    image: "/images/website.jpg",
    preview: "https://your-demo-url.com/admin-dashboard"
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container className="text-center" style={{ marginTop: "80px" }}>
        <h2>Produk tidak ditemukan</h2>
        <Button variant="primary" as={Link} to="/marketplace">
          Kembali ke Marketplace
        </Button>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: "80px" }}>
      <Card className="p-4">
        <Card.Img variant="top" src={product.image} alt={product.title} className="mb-3" />
        <Card.Body>
          <h2>{product.title}</h2>
          <h4 className="text-success">{product.price}</h4>
          <p>{product.description}</p>

          <Button variant="success" as={Link} to="/checkout">
            Beli Sekarang
          </Button>

          {product.preview && (
            <Button variant="info" href={product.preview} target="_blank" className="ms-2">
              Live Preview
            </Button>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetail;

