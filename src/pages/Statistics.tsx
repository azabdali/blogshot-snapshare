import React from 'react';
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
import CardDetailsTable from '../components/CardDetailsTable';
import { useBlog } from '../contexts/BlogContext';

function Statistics() {
  const isOpen = false;
  const onClose = () => {};
  const { posts } = useBlog();
  const totalViews = posts.reduce((sum, post) => sum + Number(post.views || 0), 0);
  const totalReads = posts.reduce((sum, post) => sum + Number(post.reads || 0), 0);

  return (
    <main className="flex">
      <SideMenu isOpen={isOpen} onClose={onClose} />
      <div className="container mx-auto py-10 px-5 flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-center">Statistics</h1>
        <div className="mb-8 flex justify-center gap-8">
          <div>
            <div className="text-xl font-bold">{posts.length}</div>
            <div className="text-gray-500">Total Posts</div>
          </div>
          <div>
            <div className="text-xl font-bold">{totalViews}</div>
            <div className="text-gray-500">Total Views</div>
          </div>
          <div>
            <div className="text-xl font-bold">{totalReads}</div>
            <div className="text-gray-500">Total Readings</div>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search cards..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <CardDetailsTable page="statistics" />
      </div>
    </main>
  );
}

export default Statistics;
