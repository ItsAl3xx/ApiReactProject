// Handles API calls for CRUD operations on posts

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createPost = async (postData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  return response.json();
};

export const updatePost = async (id, postData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  return response.json();
};

export const deletePost = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
