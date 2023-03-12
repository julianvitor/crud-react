import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserFormData } from './types';
import { RootState } from '../store';
import { getUsersAPI, createUserAPI, updateUserAPI, deleteUserAPI } from '../../api/users';

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await getUsersAPI();
  return response.data as User[];
});

export const createUser = createAsyncThunk('users/createUser', async (userData: UserFormData) => {
  const response = await createUserAPI(userData);
  return response.data as User;
});

export const updateUser = createAsyncThunk('users/updateUser', async (userData: { id: number, formData: UserFormData }) => {
  const response = await updateUserAPI(userData.id, userData.formData);
  return response.data as User;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id: number) => {
  await deleteUserAPI(id);
  return id;
});
