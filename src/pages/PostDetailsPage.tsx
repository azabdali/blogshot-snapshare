import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlog } from '../contexts/BlogContext';

const PostDetailsPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const { posts } = useBlog();
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-2">
        By {post.author} | {post.timeAgo}
      </div>
      <img src={post.thumbnail} alt={post.title} className="w-full rounded-md mb-4" />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default PostDetailsPage;
