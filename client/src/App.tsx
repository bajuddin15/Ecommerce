import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Routes/Login";
import SignUp from "./Routes/SignUp";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import NotFound from "./Routes/NotFound";
import Products from "./Routes/Products";
import Wishlist from "./Routes/Wishlist";
import Cart from "./Routes/Cart";
import ProductDetails from "./Routes/ProductDetails";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
