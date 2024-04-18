// ResourceList.js
// This component displays a list of resources

import React, { useState, useEffect } from 'react';
import { getAllResources } from './ResourceService';

const ResourceList = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      const resources = await getAllResources();
      setResources(resources);
    };

    fetchResources();
  }, []);

  return (
    <div>
      <h1>Resource List</h1>
      <ul>
        {resources.map(resource => (
          <li key={resource.id}>{resource.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
