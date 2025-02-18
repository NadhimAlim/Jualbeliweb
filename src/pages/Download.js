import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

const Download = () => {
  const [paymentStatus, setPaymentStatus] = useState("");

  useEffect(() => {
    const status = localStorage.getItem("paymentStatus");
    setPaymentStatus(status);
  }, []);

  return (
    <Container className="text-center" style={{ marginTop: "100px" }}>
      <h2>Download Source Code</h2>
      {paymentStatus === "Lunas" ? (
        <>
          <p>Terima kasih telah membeli! Klik tombol di bawah untuk mendownload.</p>
          <Button variant="primary" href="/files/source-code.zip" download>
            Download Sekarang
          </Button>
        </>
      ) : (
        <p>Silakan unggah bukti transfer di halaman Checkout untuk mendownload.</p>
      )}
    </Container>
  );
};

export default Download;
