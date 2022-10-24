import React from "react";

const User = ({ user }) => {
  return (
    <div className="data">
      <div>
        <img src={`${user.picture.medium}`} alt="" />
      </div>
      <div className="data-info">
        <p>{`Name: ${user.name.title} ${user.name.first} ${user.name.last}`}</p>
        <p>{`Phone: ${user.phone}`}</p>
        <p>{`Email: ${user.email}`}</p>
        <p>{`Age: ${user.dob.age} Years Old`}</p>
        <p>{`Gender: ${user.gender}`}</p>
      </div>
    </div>
  );
};

export default User;
