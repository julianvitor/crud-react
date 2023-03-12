import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from './types';
import { getUsers, getUserById, createUser, updateUser, deleteUser as apiDeleteUser } from '../../api/users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', getUsers);

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id: number) => {
  const user = await getUserById(id);
  return user;
});

export const createUserAsync = createAsyncThunk('users/createUserAsync', async (newUser: User) => {
  const user = await createUser(newUser);
  return user;
});

export const updateUserAsync = createAsyncThunk('users/updateUserAsync', async (user: User) => {
  const updatedUser = await updateUser(user);
  return updatedUser;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id: number) => {
  await apiDeleteUser(id);
  return id;
});

export default { fetchUsers, fetchUserById, createUserAsync, updateUserAsync, deleteUser };
