import React, { Component } from "react";
import UserItem from "./UserItem";
import Spinner from '../layout/Spinner'

const Users = ({ users, loading }) => {
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
              {users.map(user => (
                <UserItem key={user.id} user={user} />
              ))}
            </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr",
  gridGap: "1rm"
};

export default Users;
