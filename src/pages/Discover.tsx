import React from 'react';
import { BlogCard } from '../components/BlogCard';
import { useBlog } from '../contexts/BlogContext';

const Discover = () => {
  const { posts } = useBlog();

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4">Discover</h1>
      {posts.length > 0 ? (
        [...new Set(posts.map((post) => post.category))].map((category: string) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {posts
                .filter((post) => post.category === category)
                .slice(0, 3)
                .map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
            </div>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Discover;
