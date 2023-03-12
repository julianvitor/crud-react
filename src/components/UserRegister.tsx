import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { User } from "../store/users/types";
import { createUserAsync } from "../store/users/thunks";
import { ThunkDispatch } from 'redux-thunk';
import AppDispatch from "./store";


const UserRegister: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<User, undefined, any>>();
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createUserAsync(user));
    setUser({ id: 0, name: "", email: "", username: "", password: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>User Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserRegister;
