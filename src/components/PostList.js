// Displays a list of posts

import React from 'react';
import Post from './Post';

const PostList = ({ posts, onDelete }) => {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PostList;
