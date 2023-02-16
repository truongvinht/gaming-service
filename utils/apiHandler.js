const BASE_URL = 'http://localhost:3000';

// general API access

export const getAllObjects = async (path) => {
  const response = await fetch(`${BASE_URL}/api/${path}`);
  const json = await response.json();
  return json;
};

export const getSingleObject = async (path) => {
  const response = await fetch(`${BASE_URL}/api/${path}`);
  const json = await response.json();
  if (json) return json;
  return {};
};

// USER API

export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/users`);
  const json = await response.json();
  return json;
};

export const getUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}`);
  const json = await response.json();

  if (json) return json;
  return {};
};

export const addUser = async (formData) => {
  try {
    const Options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users`, Options);
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
};

export const updateUser = async (userId, formData) => {
  try {
    const Options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
};

export const deleteUser = async (userId) => {
  try {
    const Options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
};
