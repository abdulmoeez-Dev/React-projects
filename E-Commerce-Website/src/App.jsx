import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/home";
import Product from "./Pages/ProductsPage/product";
import Navbar from "./Pages/Navbar/Nav";
import ProductDetail from "./ProductdetailsPages/ProductDetail";
import Welcome from "./Pages/WelcomePage/Welcome";  // ✅ New Welcome Page

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />   {/* Default Welcome Page */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
