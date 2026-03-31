import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import NotFound from "./Pages/NotFound/NotFound";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Admin from "./Pages/Admin/Admin";

function App() {
  // **************** states *******************
  let [items, setItems] = useState([
    {
      id: 1,
      name: "Large Burger",
      count: 0,
      price: 50,
      categoryID: 1,
      isInCart: false,
    },
    {
      id: 2,
      name: "Large Beef",
      count: 0,
      price: 70,
      categoryID: 1,
      isInCart: false,
    },
    {
      id: 3,
      name: "Large Fries",
      count: 0,
      price: 30,
      categoryID: 1,
      isInCart: false,
    },
    {
      id: 4,
      name: "medium Burger",
      count: 0,
      price: 40,
      categoryID: 2,
      isInCart: false,
    },
    {
      id: 5,
      name: "medium Beef",
      count: 0,
      price: 60,
      categoryID: 2,
      isInCart: false,
    },
    {
      id: 6,
      name: "medium Fries",
      count: 0,
      price: 20,
      categoryID: 2,
      isInCart: false,
    },
    {
      id: 7,
      name: "small Burger",
      count: 0,
      price: 30,
      categoryID: 3,
      isInCart: false,
    },
    {
      id: 8,
      name: "small Beef",
      count: 0,
      price: 50,
      categoryID: 3,
      isInCart: false,
    },
    {
      id: 9,
      name: "small Fries",
      count: 0,
      price: 10,
      categoryID: 3,
      isInCart: false,
    },
  ]);

  const [displayedCatId, setDisplayedCatId] = useState(0);

  const filteredCategory = items.filter(
    (item) => displayedCatId === 0 || item.categoryID === displayedCatId,
  );

  // **************** Handlers *******************
  const addItem = (id) => {
    //clone && edit
    let newItems = items.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item,
    );
    // set
    setItems(newItems);
  };
  const removeItem = (id) => {
    //clone && edit
    let newItems = items.map((item) =>
      item.id === id
        ? { ...item, count: item.count < 1 ? item.count : item.count - 1 }
        : item,
    );
    // set
    setItems(newItems);
  };
  const resetItems = () => {
    //clone && edit
    let newItems = items.map((item) => ({ ...item, count: 0 }));
    // set
    setItems(newItems);
  };

  const toggleAddToCart = (id) => {
    let newItems = items.map((item) => {
      if (item.id === id && item.isInCart) {
        toast.error("Product Deleted Successfully");
      } else if (item.id === id && !item.isInCart) {
        toast.success("Product Added Successfully");
      }
      return item.id === id ? { ...item, isInCart: !item.isInCart } : item;
    });
    setItems(newItems);
  };

  const handleDisplayedCat = (categoryID) => {
    setDisplayedCatId(categoryID);
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={filteredCategory}
              selectedCategory={displayedCatId}
              handleDisplayedCat={(categoryID) =>
                handleDisplayedCat(categoryID)
              }
              handlePagination={(pageId) => handlePagination(pageId)}
              toggleAddToCart={(id) => toggleAddToCart(id)}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              items={filteredCategory.filter((item) => item.isInCart)}
              addItem={(id) => addItem(id)}
              removeItem={(id) => removeItem(id)}
              toggleAddToCart={(id) => toggleAddToCart(id)}
              resetItems={resetItems}
            />
          }
        />
        <Route path="/admin" element={<Admin/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
