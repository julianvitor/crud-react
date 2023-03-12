import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/users/thunks";

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
}

interface Props {
  user: User;
}

export default function UserEdit({ user }: Props) {
  const dispatch = useDispatch();
  const [editedUser, setEditedUser] = useState<User>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser(editedUser));
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={editedUser.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" value={editedUser.username} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={editedUser.password} onChange={handleChange} required />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
