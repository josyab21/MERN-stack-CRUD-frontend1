import axios, { AxiosResponse } from "axios";
import { User } from "../types/user";
import { APP_BASE_URL } from "../constants/constant";

export const createUser = async (userData: User): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await axios.post(
      `${APP_BASE_URL}/user`,
      userData
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get<User[]>(`${APP_BASE_URL}/user`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
export const updateUser = async (
  userId: string,
  updatedUser: User
): Promise<void> => {
  try {
    await axios.patch(`${APP_BASE_URL}/user/${userId}`, updatedUser);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const getUserById = async (userId: string): Promise<User> => {
  try {
    const response = await axios.get<User>(`${APP_BASE_URL}/user/${userId}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const deleteUser = async (userId: string): Promise<void> => {
  try {
    await axios.delete(`${APP_BASE_URL}/user/${userId}`);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
