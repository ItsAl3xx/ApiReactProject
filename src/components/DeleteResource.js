// DeleteResource.js
// This component handles the deletion of a resource

import React from 'react';
import { deleteResource } from './ResourceService';

const DeleteResource = ({ resourceId, onDelete }) => {
  const handleDelete = async () => {
    await deleteResource(resourceId);
    onDelete();
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteResource;
