import React from "react";
import { useState } from "react";
import Users from "./Users";

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  const [page, setPage] = useState(1);

  return (
    <div className="pagin">
      {/* {
        <button
          disabled={page <= 1}
          onClick={(num) => setPage((page) => page - 1)}
        >
          prev
        </button>
      }

      {pages.map((num) => (
        <button key={num} onClick={() => handleClick(num)}>
          {num}
        </button>
      ))}

      {
        <button
          disabled={page >= pages}
          onClick={() => setPage((num) => num + 1)}
        >
          next
        </button>
      } */}

      {
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </button>
      }

      {pages.map((num) => (
        <button key={num} onClick={() => handleClick(num)}>
          {num}
        </button>
      ))}

      {
        <button
          disabled={page >= pages}
          aria-disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      }
    </div>
  );
};
export default Pagination;
