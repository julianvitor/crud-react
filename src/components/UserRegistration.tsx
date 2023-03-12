import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../types/userActions';
import { User } from '../actions/types';

const UserRegistration = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState<User>({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addUser(user));
    setUser({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
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
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserRegistration;