

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

    // Set status pembayaran ke "Lunas"
    localStorage.setItem("paymentStatus", "Lunas");
    alert("Bukti transfer telah dikirim! Download akan dimulai otomatis.");

    // Buat link download otomatis
    const link = document.createElement("a");
    link.href = "/files/source-code.zip"; // Ganti dengan path file yang benar
    link.download = "source-code.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <h2>Checkout - Transfer Bank BRI</h2>
      <p>Silakan transfer ke rekening berikut:</p>
      <h5>Bank BRI</h5>
      <p>Nomor Rekening: <strong>1234-5678-9012-3456</strong></p>
      <p>Atas Nama: <strong>Muhammad Nadhim Alim</strong></p>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Unggah Bukti Transfer</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>

      <Button variant="success" onClick={handleSubmit}>
        Kirim Bukti Transfer & Download
      </Button>
    </Container>
  );
};

export default Checkout;
