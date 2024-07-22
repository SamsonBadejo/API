// src/UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css"; // Import the CSS file for styling

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h1 className="title">User List</h1>
      <ul className="user-list">
        {listOfUsers.map((user) => (
          <li key={user.id} className="user-card">
            <h2 className="user-name">{user.name}</h2>
            <p className="user-email">{user.email}</p>
            <p className="user-username">@{user.username}</p>
            <p className="user-website">
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.website}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
