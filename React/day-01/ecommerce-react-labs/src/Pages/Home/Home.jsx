import { useContext, useEffect, useState } from "react";
import IsInCart from "../../components/IsInCart/IsInCart";
import Pagination from "../../components/Pagination/Pagination";
import { ItemsContext } from "../../providers/ItemsProvider";

function Home() {
  // ***************** States *****************
  const { items, toggleAddToCart } = useContext(ItemsContext);
  const [displayedCatId, setDisplayedCatId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const filteredCategory = items.filter(
    (item) => displayedCatId === 0 || item.categoryID === displayedCatId,
  );
  console.log(" filtered Category", filteredCategory);

  const itemsAfterFilterByPagination = [
    ...filteredCategory.slice((currentPage - 1) * 3, currentPage * 3),
  ];
  console.log("page", itemsAfterFilterByPagination);

  const ActiveCategoryClass = " bg-slate-400 ";
  const itemsPerPage = 3;

  // ***************** Handlers *****************

  const handleDisplayedCat = (categoryID) => {
    // console.log(categoryID);
    setDisplayedCatId(categoryID);
    setCurrentPage(1);
  };

  const handlePagination = (pageId) => {
    setCurrentPage(pageId);
  };

  return (
    <>
      {/* Categories */}
      <div className="bg-slate-800 w-[80%] mx-auto px-7 p-3 rounded-2xl mt-3">
        <ul className="flex text-sm flex-wrap gap-2 justify-between">
          <li
            onClick={() => {
              handleDisplayedCat(0);
            }}
            className={
              "cursor-pointer px-4 py-1 rounded-3xl " +
              (displayedCatId === 0 ? ActiveCategoryClass : "")
            }
          >
            <span>All</span>
          </li>
          <li
            onClick={() => {
              handleDisplayedCat(1);
            }}
            className={
              "cursor-pointer px-4 py-1 rounded-3xl" +
              (displayedCatId === 1 ? ActiveCategoryClass : "")
            }
          >
            <span>Large</span>
          </li>
          <li
            onClick={() => {
              handleDisplayedCat(2);
            }}
            className={
              "cursor-pointer px-4 py-1 rounded-3xl" +
              (displayedCatId === 2 ? ActiveCategoryClass : "")
            }
          >
            <span>Medium</span>
          </li>
          <li
            onClick={() => {
              handleDisplayedCat(3);
            }}
            className={
              "cursor-pointer px-4 py-1 rounded-3xl" +
              (displayedCatId === 3 ? ActiveCategoryClass : "")
            }
          >
            <span>small</span>
          </li>
        </ul>
      </div>

      {/* Items */}
      <table className="table">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Name</th>
            <th>Price</th>
            <th>Cart</th>
          </tr>
        </thead>

        {
          <>
            <tbody>
              {itemsAfterFilterByPagination.map((item) => (
                <tr key={item.id}>
                  {/* <td>{item.id}</td> */}
                  <td>{item.name}</td>
                  <td>{item.price} </td>
                  <td
                    className="cursor-pointer"
                    onClick={() => toggleAddToCart(item.id)}
                  >
                    <IsInCart isInCart={item.isInCart} />
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        }
      </table>

      {/* Pagination */}
      <div className="flex justify-center my-3">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={filteredCategory.length}
          handlePagination={(pageId) => handlePagination(pageId)}
        />
      </div>
    </>
  );
}

export default Home;
