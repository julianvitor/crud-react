import { Dispatch } from 'redux';
import { GetUsersAction } from './types';

import {
  UserActionTypes,
  User,
  GET_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from './types';

export const getUsers = () => async (dispatch: Dispatch<UserActionTypes>) => {
  try {
    const res = await fetch('https://fakestoreapi.com/users');
    const data = await res.json();
    dispatch({
      type: GET_USERS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const addUser = (user: User) => async (
  dispatch: Dispatch<UserActionTypes>
) => {
  try {
    const res = await fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    dispatch({
      type: ADD_USER,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateUser = (user: User) => async (
  dispatch: Dispatch<UserActionTypes>
) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_USER,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteUser = (id: number) => async (
  dispatch: Dispatch<UserActionTypes>
) => {
  try {
    await fetch(`https://fakestoreapi.com/users/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  } catch (err) {
    console.error(err);
  }
};
export type UserActionTypes = AddUserAction | UpdateUserAction | DeleteUserAction | GetUsersAction;
