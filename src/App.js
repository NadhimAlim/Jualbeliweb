
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NavigationBar from "./components/Navbar";
// import Home from "./pages/Home";
// import Marketplace from "./pages/Marketplace";
// import ProductDetail from "./pages/ProductDetail";
// import Checkout from "./pages/Checkout";
// import Download from "./pages/Download";
// import { Container } from "react-bootstrap";


// function App() {
//   return (
//     <Router>
//       <NavigationBar />
//       <Container>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/marketplace" element={<Marketplace />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/download" element={<Download />} />
//         </Routes>
//       </Container>
      
      
//     </Router>
    
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Download from "./pages/Download";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        <Container className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </Container>
        <Footer /> {/* Tambahkan Footer di sini */}
      </div>
    </Router>
  );
}

export default App;
