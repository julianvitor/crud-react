import { createAction } from "@reduxjs/toolkit";
import { User } from "../../types";

export const getUsersRequest = createAction("users/getUsersRequest");
export const getUsersSuccess = createAction<User[]>("users/getUsersSuccess");
export const getUsersFailure = createAction<string>("users/getUsersFailure");

export const addUserRequest = createAction<User>("users/addUserRequest");
export const addUserSuccess = createAction<User>("users/addUserSuccess");
export const addUserFailure = createAction<string>("users/addUserFailure");

export const updateUserRequest = createAction<User>("users/updateUserRequest");
export const updateUserSuccess = createAction<User>("users/updateUserSuccess");
export const updateUserFailure = createAction<string>("users/updateUserFailure");

export const deleteUserRequest = createAction<number>("users/deleteUserRequest");
export const deleteUserSuccess = createAction<number>("users/deleteUserSuccess");
export const deleteUserFailure = createAction<string>("users/deleteUserFailure");
