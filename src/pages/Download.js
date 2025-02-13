import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Download = () => {
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState("");

  useEffect(() => {
    const status = localStorage.getItem("paymentStatus");
    setPaymentStatus(status);
    if (status !== "Lunas") {
      alert("Pembayaran Anda belum dikonfirmasi oleh admin.");
      navigate("/checkout");
    }
  }, [navigate]);

  return (
    <Container className="mt-5 text-center">
      <h2>Download Source Code</h2>
      {paymentStatus === "Lunas" ? (
        <>
          <p>Terima kasih telah membeli! Klik tombol di bawah untuk mendownload.</p>
          <Button variant="primary" href="/files/source-code.zip" download>
            Download Sekarang
          </Button>
        </>
      ) : (
        <p>Menunggu konfirmasi pembayaran...</p>
      )}
    </Container>
  );
};

export default Download;
