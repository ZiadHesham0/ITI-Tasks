import React, { useState } from "react";

export default function CardItem(props) {
  const [itemsCounter, setItemsCount] = useState(0);

  return (
    <div className="bg-slate-950 rounded-xl mb-2 p-3 grid grid-cols-5 gap-5 items-center text-slate-400 ">
      <h3 className="col-span-4">
        {" "}
        {props.name} : {props.count}
      </h3>
      <div className="flex justify-between items-center  col-span-1">
        <button
          onClick={props.addItem}
          className="px-1.5 cursor-pointer border border-slate-400 bg-slate-200 flex justify-center items-center text-slate-500 rounded-4xl"
        >
          +
        </button>
        <button
          onClick={props.removeItem}
          className="px-2 cursor-pointer border border-slate-400 bg-slate-200 flex justify-center items-center text-slate-500 rounded-4xl"
        >
          -
        </button>
        <button
          onClick={props.deleteCartItem}
          className="px-1 py-1 cursor-pointer border border-red-400 bg-red-200 flex justify-center items-center text-red-500 rounded-4xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
