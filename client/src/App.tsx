import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
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
    </BrowserRouter>
  );
};

export default App;
