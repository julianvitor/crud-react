import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../types/userActions';
import { RootState } from '../src/reducers';
import { User } from '../actions/types';

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

const UserEditing: React.FC<Props> = ({ match }) => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const user = users.find((user) => user.id === parseInt(match.params.id));

  const [editedUser, setEditedUser] = useState<User>({
    id: user?.id || 0,
    username: user?.username || '',
    email: user?.email || '',
    password: user?.password || '',
  });

  useEffect(() => {
    setEditedUser({
      id: user?.id || 0,
      username: user?.username || '',
      email: user?.email || '',
      password: user?.password || '',
    });
  }, [user]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUser({
      ...editedUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateUser(editedUser));
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>User Editing</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={editedUser.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={editedUser.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UserEditing;
