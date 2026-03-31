import { useEffect, useState } from "react";
import IsInCart from "../../components/IsInCart/IsInCart";
import Pagination from "../../components/Pagination/Pagination";

function Home(props) {
  const { items, selectedCategory, toggleAddToCart, handleDisplayedCat } =
    props;

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsAfterFilterByPagination, setItemsAfterFilterByPagination] =
    useState([...items.slice(0, 3)]);

  const ActiveCategoryClass = " bg-slate-400 ";

  const handlePagination = (pageId) => {
    setItemsAfterFilterByPagination(items.slice((pageId - 1) * 3, pageId * 3));
    setCurrentPage(pageId); 
  };

  useEffect(() => {
    handlePagination(1);
  }, [items]);

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
              (selectedCategory === 0 ? ActiveCategoryClass : "")
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
              (selectedCategory === 1 ? ActiveCategoryClass : "")
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
              (selectedCategory === 2 ? ActiveCategoryClass : "")
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
              (selectedCategory === 3 ? ActiveCategoryClass : "")
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
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Cart</th>
          </tr>
        </thead>

        {items.length > 0 && (
          <>
            <tbody>
              {itemsAfterFilterByPagination.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
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
        )}
      </table>

        {/* Pagination */}
      <div className="flex justify-center my-3">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          handlePagination={(pageId) => handlePagination(pageId)}
        />
      </div>
    </>
  );
}

export default Home;
