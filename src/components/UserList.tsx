import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { getUsers, deleteUserAsync } from "./store/users/thunks";
import { RootState, AppDispatch } from "./store";

interface User {
id: number;
email: string;
username: string;
password: string;
}

export default function UserList() {
const dispatch: AppDispatch = useDispatch();
const users = useSelector((state: RootState) => state.users.items);

useEffect(() => {
dispatch(getUsers());
}, [dispatch]);

const handleDelete = (id: number) => {
if (window.confirm("Are you sure you want to delete this user?")) {
dispatch(deleteUserAsync(id));
}
};

return (
<div>
<h1>User List</h1>
<table>
<thead>
<tr>
<th>ID</th>
<th>Email</th>
<th>Username</th>
<th>Password</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{users.map((user: User) => (
<tr key={user.id}>
<td>{user.id}</td>
<td>{user.email}</td>
<td>{user.username}</td>
<td>{user.password}</td>
<td>
<button onClick={() => handleDelete(user.id)}>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
}