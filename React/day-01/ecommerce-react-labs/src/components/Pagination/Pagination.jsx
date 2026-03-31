import React from "react";

function Pagination(props) {
  const { handlePagination, itemsPerPage, totalItems , currentPage } = props;
//   console.log(itemsPerPage , totalItems , currentPage);

  

  const calculatePageNo = () => {
    const totalPages = Math.round(totalItems / itemsPerPage);
    let buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button key={i} onClick={() => handlePagination(i)} className={`join-item btn ${ currentPage === i? ' bg-slate-800': ''  } ` } >
          {i}
        </button>,
      );
    }
    return buttons;
  };

  return (
    <div className="join">
      {calculatePageNo()}
    </div>
  );
}

export default Pagination;
