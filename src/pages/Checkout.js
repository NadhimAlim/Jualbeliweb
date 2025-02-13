// import React from "react";
// import { Container, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Checkout = () => {
//   return (
//     <Container className="mt-5">
//       <h2>Checkout</h2>
//       <p>Silakan lakukan pembayaran untuk mendapatkan source code.</p>
//       <Button variant="success" as={Link} to="/download">Konfirmasi Pembelian</Button>
//     </Container>
//   );
// };

// export default Checkout;

import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";

const Checkout = () => {
  const [buktiTransfer, setBuktiTransfer] = useState(null);

  const handleFileChange = (e) => {
    setBuktiTransfer(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!buktiTransfer) {
      alert("Silakan unggah bukti transfer terlebih dahulu.");
      return;
    }

    // Simpan status pembayaran (di database atau localStorage sementara)
    localStorage.setItem("paymentStatus", "Menunggu Konfirmasi");
    alert("Bukti transfer telah dikirim! Admin akan melakukan verifikasi.");
  };

  return (
    <Container className="mt-5">
      <h2>Checkout - Transfer Bank BRI</h2>
      <p>Silakan transfer ke rekening berikut:</p>
      <h5>Bank BRI</h5>
      <p>Nomor Rekening: <strong>1234-5678-9012-3456</strong></p>
      <p>Atas Nama: <strong>Nama Pemilik Rekening</strong></p>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Unggah Bukti Transfer</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>

      <Button variant="success" onClick={handleSubmit}>
        Kirim Bukti Transfer
      </Button>
    </Container>
  );
};

export default Checkout;
