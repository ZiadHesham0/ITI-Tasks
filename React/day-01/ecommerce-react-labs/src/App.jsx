import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import NotFound from "./Pages/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import Admin from "./Pages/Admin/Admin";
import ItemsProvider from "./providers/ItemsProvider";
import ProductForm from "./components/ProductForm/ProductForm";

function App() {
  return (
    <>
      <ItemsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/productForm/:id" element={<ProductForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ItemsProvider>
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
