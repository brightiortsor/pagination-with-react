import React from "react";
import Users from "./Users";

const Pagination = ({ totalPages, handlePrev, handleClick, handleNext, disabledPrev, disabledNext }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  // const [page, setPage] = useState(1);

  return (
    <div className="pagin">      
        <button
          disabled={disabledPrev}
          aria-disabled={disabledPrev}
          onClick={() => handlePrev()}>Prev</button>
      <div>{pages.map((num) => (
        <button key={num} onClick={() => handleClick(num)}>
          {num}
        </button>
      ))}</div>
        <button
          disabled={disabledNext}
          aria-disabled={disabledNext}
          onClick={() => handleNext()}
        >
          Next
        </button>
    </div>
  );
};
export default Pagination;
