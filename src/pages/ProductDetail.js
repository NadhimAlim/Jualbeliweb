// import React from "react";
// import { Container, Button } from "react-bootstrap";
// import { useParams, Link } from "react-router-dom";

// const ProductDetail = () => {
//   const { id } = useParams();
//   return (
//     <Container className="mt-5">
//       <h2>Detail Produk {id}</h2>
//       <p>Deskripsi lengkap tentang produk ini.</p>
//       <Button variant="success" as={Link} to="/checkout">Beli Sekarang</Button>
//     </Container>
//   );
// };

// export default ProductDetail;

import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "E-Commerce React",
    price: "Rp 200.000",
    description: "Template e-commerce modern dengan React dan Bootstrap.",
    image: "/images/profil.png"
  },
  {
    id: 2,
    title: "Landing Page Bootstrap",
    price: "Rp 100.000",
    description: "Landing page profesional menggunakan Bootstrap 5.",
    image: "/images/website-design.jpg"
  },
  {
    id: 3,
    title: "Admin Dashboard Vue",
    price: "Rp 250.000",
    description: "Dashboard admin responsif berbasis Vue.js dan Tailwind CSS.",
    image: "/images/website.jpg"
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container className="mt-5 text-center">
        <h2>Produk tidak ditemukan</h2>
        <Button variant="primary" as={Link} to="/marketplace">
          Kembali ke Marketplace
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card className="p-4">
        <Card.Img variant="top" src={product.image} alt={product.title} className="mb-3" />
        <Card.Body>
          <h2>{product.title}</h2>
          <h4 className="text-success">{product.price}</h4>
          <p>{product.description}</p>
          <Button variant="success" as={Link} to="/checkout">
            Beli Sekarang
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetail;
