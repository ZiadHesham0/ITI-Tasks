import React, { useContext, useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { ItemsContext } from "../../providers/ItemsProvider";

function Cart(props) {

  const {cartItems, addItem, removeItem, resetItems, toggleAddToCart } = useContext(ItemsContext);

  return (
    <div className="w-[80%] mx-auto">
      {cartItems.length < 1 && (
        <p className="text-center bg-slate-300 text-slate-700 border-2 border-slate-700 p-7 rounded-2xl my-4">
          Empty Cart !
        </p>
      )}

      {cartItems.length > 0 && (
        <div className="">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              count={item.count}
              addItem={() => {
                addItem(item.id);
              }}
              removeItem={() => {
                removeItem(item.id);
              }}
              deleteCartItem={() => toggleAddToCart(item.id)}
            />
          ))}
          <button
            onClick={resetItems}
            className=" py-1.5 border cursor-pointer w-full border-slate-700 bg-slate-300 flex justify-center items-center text-slate-700 rounded-4xl"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
