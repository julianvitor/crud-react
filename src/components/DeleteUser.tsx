import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../types/userActions';
import { RootState } from '../src/reducers';

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

const DeleteUser: React.FC<Props> = ({ match }) => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const user = users.find((user) => user.id === parseInt(match.params.id));

  const [confirmation, setConfirmation] = useState(false);

  const handleDelete = () => {
    dispatch(deleteUser(user?.id || 0));
  };

  const handleConfirmation = () => {
    setConfirmation(true);
  };

  if (!user) {
    return <div>User not found</div>;
  }

  if (confirmation) {
    return (
      <div>
        <h2>Delete User</h2>
        <p>Are you sure you want to delete {user.username}?</p>
        <button onClick={handleDelete}>Yes, delete</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Delete User</h2>
      <p>Are you sure you want to delete {user.username}?</p>
      <button onClick={handleConfirmation}>Yes</button>
      <button>No</button>
    </div>
  );
};

export default DeleteUser;