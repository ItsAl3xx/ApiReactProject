// Represents a single post

import React from 'react';

const Post = ({ post, onDelete }) => {
  return (
    <div className="post clearfix">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => onDelete(post.id)}>Delete Post</button>
    </div>
  );
};

export default Post;
