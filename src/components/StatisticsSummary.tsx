import React from 'react';
import { useBlog } from '../contexts/BlogContext';
import { Card, CardContent } from './ui/card';

const StatisticsSummary: React.FC = () => {
  const { posts } = useBlog();
  const totalReads = posts.reduce((sum, post) => sum + parseInt(post.reads), 0);
  const totalViews = posts.reduce((sum, post) => sum + parseInt(post.views), 0);
  const totalPosts = posts.length;

  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <h2 className="text-lg font-semibold">Total Reads</h2>
            <p className="text-4xl font-bold tracking-tight">{totalReads}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Total Views</h2>
            <p className="text-4xl font-bold tracking-tight">{totalViews}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Total Posts</h2>
            <p className="text-4xl font-bold tracking-tight">{totalPosts}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatisticsSummary;
