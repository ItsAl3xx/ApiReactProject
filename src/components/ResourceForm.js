// ResourceForm.js
// This component is a form for adding and editing resources

import React, { useState } from 'react';
import { createResource, updateResource } from './ResourceService';

const ResourceForm = ({ resource, onSave }) => {
  const [formData, setFormData] = useState(resource || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
      await updateResource(formData.id, formData);
    } else {
      await createResource(formData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
        />
      </label>
      {/* Add additional fields as necessary */}
      <button type="submit">Save</button>
    </form>
  );
};

export default ResourceForm;
