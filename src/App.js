// App.js
// This is the main component of our React application

import React, { useState, useEffect } from 'react';
import ResourceList from './components/ResourceList';
import ResourceForm from './components/ResourceForm';
import DeleteResource from './components/DeleteResource';
import { getAllResources } from './components/ResourceService';

const App = () => {
  const [resources, setResources] = useState([]);
  const [currentResource, setCurrentResource] = useState(null);
  
  // Fetch resources on component mount
  useEffect(() => {
    const fetchResources = async () => {
      const fetchedResources = await getAllResources();
      setResources(fetchedResources);
    };

    fetchResources();
  }, []);

  // Refresh resources list
  const refreshResources = async () => {
    const fetchedResources = await getAllResources();
    setResources(fetchedResources);
  };

  // Handle resource selection for editing
  const handleEdit = resource => {
    setCurrentResource(resource);
  };

  // Handle completion of resource add/edit
  const handleSave = () => {
    refreshResources();
    setCurrentResource(null); // Clear current resource to reset the form
  };

  // Handle resource deletion
  const handleDelete = async (resourceId) => {
    await DeleteResource(resourceId);
    refreshResources();
  };

  return (
    <div>
      <h1>My API Project</h1>
      <ResourceForm resource={currentResource} onSave={handleSave} />
      <ResourceList resources={resources} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
