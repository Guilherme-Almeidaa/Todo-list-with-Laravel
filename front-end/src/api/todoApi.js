import axios from "axios";

const URL = "http://localhost:8000/api/profile";

export const getAll = async (token) => {
  const options = {
    method: "GET",
    url: `${URL}/tasks`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const register = async (task, token) => {
  const options = {
    method: "POST",
    url: `${URL}/tasks/register`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: task,
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const update = async (id, task, token) => {
  const options = {
    method: "PUT",
    url: `${URL}/tasks/update/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    data: task,
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const exclude = async (id, token) => {
  const options = {
    method: "DELETE",
    url: `${URL}/tasks/delete/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const search = async (search, token) => {
  const options = {
    method: "GET",
    url: `${URL}/tasks/search`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { q: search },
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};

export const getById = async (id) => {
  const options = {
    method: "GET",
    url: `${URL}/todo/${id}`,
  };

  return axios.request(options).then((response) => {
    return response.data;
  });
};
