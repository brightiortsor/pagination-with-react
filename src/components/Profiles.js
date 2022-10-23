import React from "react";
import { PageUsers } from "./PageUsers.js";
import User from "./user.js";

const Profiles = ({ users, page }) => {
  const startIndex = (page - 1) * PageUsers;
  const selectedUsers = users.slice(startIndex, startIndex + PageUsers);

  return selectedUsers.map((user) => <User user={user} key={user.login.uuid}/>);
};

export default Profiles;
