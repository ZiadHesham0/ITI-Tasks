import React, { useState } from "react";
import CartItem from "../../components/CartItem/CartItem";

function Cart(props) {
    let {items ,toggleAddToCart} = props
    // console.log(props);
    

  return (
    <div className="w-[80%] mx-auto">
      {items.length < 1 && (
        <p className="text-center bg-slate-300 text-slate-700 border-2 border-slate-700 p-7 rounded-2xl my-4">
          Empty Cart !
        </p>
      )}

      {items.length > 0 && (
        <div className="">
          {items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              count={item.count}
              addItem={() => {
                props.addItem(item.id);
              }}
              removeItem={() => {
                props.removeItem(item.id);
              }}
              deleteCartItem={() => toggleAddToCart(item.id)}
            />
          ))}
          <button
            onClick={props.resetItems}
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
