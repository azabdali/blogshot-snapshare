import React from 'react';
import { useBlog } from '../contexts/BlogContext';
import { Card, CardContent } from './ui/card';

const TotalReadsChart: React.FC = () => {
  const { posts } = useBlog();
  const totalReads = posts.reduce((sum, post) => sum + parseInt(post.reads), 0);

  return (
    <Card>
      <CardContent>
        <div className="flex items-center space-x-4">
          <div>
            <h2 className="text-lg font-semibold">Total Reads</h2>
            <p className="text-4xl font-bold tracking-tight">{totalReads}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalReadsChart;
