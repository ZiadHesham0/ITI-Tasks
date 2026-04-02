import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ItemsContext = createContext();

function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const cartItems = items.filter((item) => item.isInCart);

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
  const deleteItemForAdmin = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`);
    toast.success("Product Deleted Successfully");
  };
  const addNewItemForAdmin = async (item) => {
    await axios.post("http://localhost:3000/products", item);
  };
  const updateItemForAdmin = async (item , id) => {
    await axios.put(`http://localhost:3000/products/${id}`, item);
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
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      setItems(data);
    };
    const getCategories = async () => {
      const res = await fetch("http://localhost:3000/categories");
      const data = await res.json();
      setCategories(data);
    };
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <ItemsContext.Provider
        value={{
          items,
          cartItems,
          categories,
          addItem,
          removeItem,
          resetItems,
          toggleAddToCart,
          deleteItemForAdmin,
          addNewItemForAdmin,
          updateItemForAdmin
        }}
      >
        {children}
      </ItemsContext.Provider>
    </>
  );
}

export default ItemsProvider;
