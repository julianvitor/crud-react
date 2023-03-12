import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
}

export async function getUsers(): Promise<User[]> {
  const response = await axios.get<User[]>(`${BASE_URL}/users`);
  return response.data;
}

export async function createUser(user: User): Promise<User> {
  const response = await axios.post<User>(`${BASE_URL}/users`, user);
  return response.data;
}

export async function updateUser(user: User): Promise<User> {
  const response = await axios.put<User>(`${BASE_URL}/users/${user.id}`, user);
  return response.data;
}

export async function deleteUser(userId: number): Promise<void> {
  await axios.delete<void>(`${BASE_URL}/users/${userId}`);
}
