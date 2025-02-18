// import React from "react";
// import { Container, Button, Card } from "react-bootstrap";

// const Komunitas = () => {
//   return (
//     <Container style={{ marginTop: "80px" }}>
//       <h2>Selamat Datang di Komunitas NadhimCode!</h2>
//       <p>Bergabunglah dengan komunitas pengembang dan belajar bersama!</p>

//       <Card className="p-4 mb-4">
//         <h4>💬 Grup Diskusi Developer</h4>
//         <p>Bergabung dengan komunitas kami untuk berbagi ilmu dan pengalaman:</p>
//         <Button
//           variant="primary"
//           href="https://t.me/grup-telegram" // Ganti dengan link grup Telegram atau Discord
//           target="_blank"
//         >
//           Join Telegram
//         </Button>{" "}
//         <Button
//           variant="success"
//           href="https://discord.gg/grup-discord" // Ganti dengan link Discord
//           target="_blank"
//         >
//           Join Discord
//         </Button>
//       </Card>

//       <h4>✨ Keuntungan Bergabung</h4>
//       <ul>
//         <li>  Diskusi seputar coding</li>
//         <li>  Berbagi project dan pengalaman</li>
//         <li>  Kolaborasi dengan sesama developer</li>
//         <li>  Update teknologi terbaru</li>
//       </ul>
//     </Container>
//   );
// };

// export default Komunitas;

// import React, { useEffect } from "react";
// import { Container, Button, Card } from "react-bootstrap";

// const Komunitas = () => {
//   useEffect(() => {
//     // Tambahkan script Disqus setelah komponen dimuat
//     const script = document.createElement("script");
//     script.src = "https://your-disqus-shortname.disqus.com/embed.js"; // Ganti dengan shortname Disqus-mu
//     script.setAttribute("data-timestamp", +new Date());
//     document.body.appendChild(script);
//   }, []);

//   return (
//     <Container style={{ marginTop: "80px" }}>
//       <h2>Selamat Datang di Komunitas NadhimCode!</h2>
//       <p>Bergabunglah dengan komunitas pengembang dan belajar bersama!</p>

//       <Card className="p-4 mb-4">
//         <h4>💬 Grup Diskusi Developer</h4>
//         <p>Bergabung dengan komunitas kami untuk berbagi ilmu dan pengalaman:</p>
//         <Button variant="primary" href="https://t.me/grup-telegram" target="_blank">
//           Join Telegram
//         </Button>{" "}
//         <Button variant="success" href="https://discord.gg/grup-discord" target="_blank">
//           Join Discord
//         </Button>
//       </Card>

//       <h4>✨ Keuntungan Bergabung</h4>
//       <ul>
//         <li>🔹 Diskusi seputar coding</li>
//         <li>🔹 Berbagi project dan pengalaman</li>
//         <li>🔹 Kolaborasi dengan sesama developer</li>
//         <li>🔹 Update teknologi terbaru</li>
//       </ul>

//       {/* Komentar Disqus */}
//       <div id="disqus_thread" style={{ marginTop: "40px" }}></div>
//     </Container>
//   );
// };

// export default Komunitas;

import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { DiscussionEmbed } from "disqus-react";

const Komunitas = () => {
  const disqusShortname = "nadhimcode"; // Ganti dengan shortname Disqus-mu
  const disqusConfig = {
    url: window.location.href, // URL halaman komunitas
    identifier: "komunitas", // ID unik untuk halaman ini
    title: "Komunitas NadhimCode",
    language: "id" // Bahasa Indonesia
  };

  return (
    <Container style={{ marginTop: "80px" }}>
      <h2>Selamat Datang di Komunitas NadhimCode!</h2>
      <p>Bergabunglah dengan komunitas pengembang dan belajar bersama!</p>

      <Card className="p-4 mb-4">
        <h4>💬 Grup Diskusi Developer</h4>
        <p>Bergabung dengan komunitas kami untuk berbagi ilmu dan pengalaman:</p>
        <Button variant="primary" href="https://t.me/grup-telegram" target="_blank">
          Join Telegram
        </Button>{" "}
        <Button variant="success" href="https://discord.gg/grup-discord" target="_blank">
          Join Discord
        </Button>
      </Card>

      <h4>✨ Keuntungan Bergabung</h4>
      <ul>
        <li>🔹 Diskusi seputar coding</li>
        <li>🔹 Berbagi project dan pengalaman</li>
        <li>🔹 Kolaborasi dengan sesama developer</li>
        <li>🔹 Update teknologi terbaru</li>
      </ul>

      {/* Komentar Disqus */}
      <div style={{ marginTop: "40px" }}>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    </Container>
  );
};

export default Komunitas;
