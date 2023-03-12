import { useDispatch } from "react-redux";
import { deleteUser } from "../store/users/thunks";

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
}

interface Props {
  user: User;
}

export default function UserDelete({ user }: Props) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${user.username}?`)) {
      dispatch(deleteUser(user.id));
    }
  };

  return (
    <div>
      <h1>Delete User</h1>
      <p>Are you sure you want to delete {user.username}?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
