import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlog } from '../contexts/BlogContext';
import { BlogCard } from '../components/BlogCard'; // Import BlogCard
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar'; // Import Avatar components

const PostDetailsPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const { posts } = useBlog();
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-16 py-4 flex items-start">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-2 flex items-center gap-2"> {/* Flex container for user info and avatar */}
          <Avatar className="h-8 w-8"> {/* Avatar component */}
            <AvatarImage src={post.user?.avatarUrl || '/placeholder.svg'} />
            <AvatarFallback>{post.author[0]}</AvatarFallback>
          </Avatar>
          <span>By {post.author} | {post.timeAgo}</span> {/* User info */}
        </div>
        <img src={post.thumbnail} alt={post.title} className="w-full rounded-md mb-4 max-w-lg" />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <div className="ml-4 w-1/4 mt-16">
        <h2 className="text-2xl font-bold mb-2">Related Blogs</h2>
        {posts.map((relatedPost) => (
          <BlogCard key={relatedPost.id} post={relatedPost} className="mb-4" />
        ))}
      </div>
    </div>
  );
};

export default PostDetailsPage;
