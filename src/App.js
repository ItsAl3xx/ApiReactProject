// src/App.js
// The main app component that uses all the other components

import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import { getPosts, createPost, updatePost, deletePost } from './components/PostService';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]); // State to store the list of posts
  const [editingPost, setEditingPost] = useState(null); // State to store the post currently being edited

  // Effect hook to fetch posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // Function to handle saving a post (both new and updated posts)
  const handleSave = async (post) => {
    console.log('Saving post:', post); // Debug log
    try {
      if (post.id) {
        // If the post has an ID, it's an existing post, so we update it
        await updatePost(post.id, post);
      } else {
        // If the post doesn't have an ID, it's a new post, so we create it
        await createPost(post);
      }

      // After saving, we clear the editingPost state and fetch the updated posts list
      setEditingPost(null);
      const updatedPosts = await getPosts();
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  // Function to handle deleting a post
  const handleDelete = async (id) => {
    try {
      await deletePost(id); // Call the deletePost service function
      const updatedPosts = posts.filter(post => post.id !== id); // Remove post from local state
      setPosts(updatedPosts); // Update the posts state without the deleted post
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // The JSX returned by the App component
  return (
    <div className="app">
      <h1>Posts</h1>
      <PostForm onSave={handleSave} initialPost={editingPost || { title: '', body: '' }} />
      <PostList posts={posts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
