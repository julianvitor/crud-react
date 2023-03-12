import { createReducer } from "@reduxjs/toolkit";
import {
  getUsersRequest,
  getUsersSuccess,
  getUsersFailure,
  addUserRequest,
  addUserSuccess,
  addUserFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure,
} from "./actions";
import { User } from './types';


interface UsersState {
  loading: boolean;
  error: string | null;
  data: User[];
}

const initialState: UsersState = {
  loading: false,
  error: null,
  data: [],
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getUsersRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getUsersSuccess, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(getUsersFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(addUserRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(addUserSuccess, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    })
    .addCase(addUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(updateUserRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(updateUserSuccess, (state, action) => {
      state.loading = false;
      const userIndex = state.data.findIndex(
        (user) => user.id === action.payload.id
      );
      if (userIndex !== -1) {
        state.data[userIndex] = action.payload;
      }
    })
    .addCase(updateUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(deleteUserRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteUserSuccess, (state, action) => {
      state.loading = false;
      state.data = state.data.filter((user) => user.id !== action.payload);
    })
    .addCase(deleteUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});
