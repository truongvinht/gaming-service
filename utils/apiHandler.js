const BASE_URL = 'http://localhost:3000';
const KEY = process.env.JWT_SECRET;

// general API access

export const getAllObjects = async (path) => {
  const response = await fetch(`${BASE_URL}/api/${path}`, {
    headers: {
      'x-api-key': KEY,
    },
  });
  const json = await response.json();
  return json;
};

export const getSingleObject = async (path) => {
  const response = await fetch(`${BASE_URL}/api/${path}`, {
    headers: {
      'x-api-key': KEY,
    },
  });
  const json = await response.json();
  if (json) return json;
  return {};
};

// USER API

export const getUsers = async () => {
  return getAllObjects('users');
};

export const getUser = async (userId) => {
  return getSingleObject(`users/${userId}`);
};

// get genshin player object
export const getGenshinPlayer = async (userId) => {
  return getSingleObject(`users/${userId}/yuanshen`);
};

export const addUser = async (formData) => {
  try {
    const Options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': KEY,
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
        'x-api-key': KEY,
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
        'x-api-key': KEY,
      },
    };

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
};
export const deleteGenshinPlayer = async (userId, objId) => {
  try {
    const Options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': KEY,
      },
    };

    const response = await fetch(
      `${BASE_URL}/api/users/${userId}/yuanshen/${objId}`,
      Options
    );
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
};
export const insertGenshinPlayerItem = async (userId, objId) => {
  try {
    const Options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': KEY,
      },
    };

    const response = await fetch(
      `${BASE_URL}/api/users/${userId}/yuanshen/${objId}`,
      Options
    );
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
};