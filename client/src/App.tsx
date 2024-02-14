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
        <Route path="/wishlist" element={<Wishlist />} />
        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
