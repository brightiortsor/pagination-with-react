import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <p>{`Government Name: ${user.name.title} ${user.name.first} ${user.name.last}`}</p>
      <p>{`Phone: ${user.phone}`}</p>
      <p>{`Email: ${user.email}`}</p>
      <p>{`Age: ${user.dob.age}`}</p>
      <p>{`Gender: ${user.gender}`}</p>
      <hr />
    </div>
  );
};

export default User;
