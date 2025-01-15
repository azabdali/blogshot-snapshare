import React from 'react';
import { BlogCard } from '../components/BlogCard';
import { useBlog } from '../contexts/BlogContext';

const Popular = () => {
  const { posts } = useBlog();

  const popularPosts = posts.sort((a, b) => parseInt(b.views) - parseInt(a.views)).slice(0, 10);

  return (
    <div>
      <main className="container mx-auto max-w-7xl py-6">
        <h1 className="text-2xl font-bold">Popular</h1>
        <section className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Popular;
