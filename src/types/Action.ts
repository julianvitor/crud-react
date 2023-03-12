import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import { User, UserAction } from '.';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import { User, UserAction } from '.';
import * as UserActionTypes from 'userActions';


export const getUsers = (): ThunkAction<void, RootState, null, UserAction> => {
  return async (dispatch) => {
    try {
      const response = await axios.get<User[]>('https://fakestoreapi.com/users');
      const users = response.data;
      dispatch({
        type: UserActionTypes.GET_USERS,
        payload: users,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const createUser = (
  user: Omit<User, 'id'>
): ThunkAction<void, RootState, null, UserAction> => {
  return async (dispatch) => {
    try {
      const response = await axios.post<User>(
        'https://fakestoreapi.com/users',
        user
      );
      const createdUser = response.data;
      dispatch({
        type: UserActionTypes.CREATE_USER,
        payload: createdUser,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateUser = (
  user: User
): ThunkAction<void, RootState, null, UserAction> => {
  return async (dispatch) => {
    try {
      const response = await axios.put<User>(
        `https://fakestoreapi.com/users/${user.id}`,
        user
      );
      const updatedUser = response.data;
      dispatch({
        type: UserActionTypes.UPDATE_USER,
        payload: updatedUser,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteUser = (
  userId: number
): ThunkAction<void, RootState, null, UserAction> => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://fakestoreapi.com/users/${userId}`);
      dispatch({
        type: UserActionTypes.DELETE_USER,
        payload: userId,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
