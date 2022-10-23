import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingIcon from "../images/Loading_icon.gif";
import Profiles from "./Profiles.js";
import Pagination from "./Pagination";
import { PageUsers } from "./PageUsers";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const resp = await axios.get("https://randomuser.me/api/?results=50");
      setLoading(false);
      setUsers(resp.data.results);

      setTotalPages(Math.ceil(resp.data.results.length / PageUsers));
    };
    fetchUsers();
  }, []);

  const handleClick = (num) => {
    setPage(num);
  };
  return (
    <div className="loader">
      {loading ? (
        <img src={LoadingIcon} alt="" />
      ) : (
        <div>
          <p>Page {page}</p>
          <hr />
          <Profiles users={users} page={page} />
        </div>
      )}

      <Pagination totalPages={totalPages} handleClick={handleClick} />
    </div>
  );
}