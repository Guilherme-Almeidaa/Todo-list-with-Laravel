import axios from "axios";

const URL = "http://localhost:8000/api";
export const login = async (user) => {
  const options = {
    method: "POST",
    url: `${URL}/auth/login`,
    headers: { "Content-Type": "application/json" },
    data: user,
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const requestUser = async (token) => {
  const options = {
    method: "POST",
    url: `${URL}/auth/me`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const updateUser = async (user, token) => {
  const options = {
    method: "POST",
    url: `${URL}/auth/update`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: user,
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const registerUser = async (user) => {
  const options = {
    method: "POST",
    url: `${URL}/auth/register`,
    data: user,
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};
