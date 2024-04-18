// ResourceService.js
// This service handles API calls for CRUD operations

const API_URL = 'https://your-api-endpoint.com/resources';

export const getAllResources = async () => {
  // Fetch all resources from the API
  const response = await fetch(API_URL);
  return response.json();
};

export const createResource = async (resourceData) => {
  // Post a new resource to the API
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resourceData),
  });
  return response.json();
};

export const updateResource = async (id, resourceData) => {
  // Update an existing resource
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resourceData),
  });
  return response.json();
};

export const deleteResource = async (id) => {
  // Delete a resource
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
