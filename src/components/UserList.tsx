import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchUsers } from '../types/userActions';
import { User } from '../types/User';

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector<RootState, User[]>((state) => state.users);
  const loading = useSelector<RootState, boolean>((state) => state.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;