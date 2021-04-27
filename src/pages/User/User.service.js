import { api } from "../../api";

export const getUserData = async (userAccount) => {
  const { data } = await api.get(`/users/${userAccount}`);
  return data;
};

export const getUserRepos = async (userAccount) => {
  const { data } = await api.get(`/users/${userAccount}/repos`);
  return data;
};

export const getUserStarred = async (userAccount) => {
  const { data } = await api.get(`/users/${userAccount}/starred`);
  return data;
};
