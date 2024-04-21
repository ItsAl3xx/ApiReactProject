// src/components/PostForm.js
import React, { useState } from 'react';

const PostForm = ({ onSave, initialPost }) => {
  const [post, setPost] = useState(initialPost || { title: '', body: '' });

  console.log('Initial post in PostForm:', initialPost); // Log the initialPost value

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted, post data:', post);
    onSave(post);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  // If the post is null, don't render the form
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={post.title || ''}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="body"
        value={post.body || ''}
        onChange={handleChange}
        placeholder="Content"
      />
      <button type="submit">Save Post</button>
    </form>
  );
};

export default PostForm;
