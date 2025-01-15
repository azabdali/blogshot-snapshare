import React, { createContext, useContext, useState } from 'react';
import { User } from '../contexts/AuthContext';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  author: string;
  thumbnail: string;
  authorAvatar: string;
  views: string;
  timeAgo: string;
  excerpt: string;
  content: string;
  user: User | null;
  category: string;
  shares: string;
  reads: string;
  estimatedProfits?: string;
}

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Getting Started with React',
      description: 'Learn the basics of React and build your first component.',
      author: 'John Doe',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
      authorAvatar: 'https://i.pravatar.cc/150?u=john',
      views: '2.5K',
      timeAgo: '2 days ago',
      excerpt: 'Learn the basics of React and build your first component.',
      content: 'This is the full content of the first blog post.',
      user: { avatarUrl: 'https://i.pravatar.cc/150?u=john' },
      category: 'React',
      shares: '100',
      reads: '500',
      estimatedProfits: '100',
    },
    {
      id: '2',
      title: 'Understanding TypeScript',
      description: 'Explore the benefits of using TypeScript in your JavaScript projects.',
      author: 'John Doe',
      thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
      authorAvatar: 'https://i.pravatar.cc/150?u=john',
      views: '1.8K',
      timeAgo: '1 week ago',
      excerpt: 'Explore the benefits of using TypeScript in your JavaScript projects.',
      content: 'This is the full content of the second blog post.',
      user: { avatarUrl: 'https://i.pravatar.cc/150?u=john' },
      category: 'TypeScript',
      shares: '75',
      reads: '400',
      estimatedProfits: '75',
    },
    {
      id: '3',
      title: 'Advanced CSS Techniques',
      description: 'Discover advanced CSS techniques to create stunning layouts and animations.',
      author: 'Jane Smith',
      thumbnail: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd',
      authorAvatar: 'https://i.pravatar.cc/150?u=jane',
      views: '950',
      timeAgo: '3 weeks ago',
      excerpt: 'Discover advanced CSS techniques to create stunning layouts and animations.',
      content: 'This is the full content of the third blog post.',
      user: { avatarUrl: 'https://i.pravatar.cc/150?u=jane' },
      category: 'CSS',
      shares: '50',
      reads: '250',
      estimatedProfits: '50',
    },
    {
      id: '4',
      title: 'Introduction to GraphQL',
      description: 'Learn the fundamentals of GraphQL and how it can improve your API interactions.',
      author: 'Mike Brown',
      thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe9ef4f',
      authorAvatar: 'https://i.pravatar.cc/150?u=mike',
      views: '1.2K',
      timeAgo: '1 month ago',
      excerpt: 'Learn the fundamentals of GraphQL and how it can improve your API interactions.',
      content: 'This is the full content of the fourth blog post.',
      user: { avatarUrl: 'https://i.pravatar.cc/150?u=mike' },
      category: 'GraphQL',
      shares: '60',
      reads: '300',
      estimatedProfits: '60',
    },
    {
      id: '5',
      title: 'Best Practices for REST API Design',
      description: 'Follow these best practices to design robust and scalable REST APIs.',
      author: 'Emily White',
      thumbnail: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd5',
      authorAvatar: 'https://i.pravatar.cc/150?u=emily',
      views: '2.1K',
      timeAgo: '2 months ago',
      excerpt: 'Follow these best practices to design robust and scalable REST APIs.',
      content: 'This is the full content of the fifth blog post.',
      user: { avatarUrl: 'https://i.pravatar.cc/150?u=emily' },
      category: 'REST',
      shares: '90',
      reads: '450',
      estimatedProfits: '90',
    },
    {
      id: '6',
      title: 'The Future of JavaScript',
      description: 'Explore the upcoming features and trends in JavaScript development.',
      author: 'David Lee',
      thumbnail: 'https://images.unsplash.com/photo-1610737247043-155ed9448a87',
      authorAvatar: 'https://i.pravatar.cc/150?u=david',
      views: '1.5K',
      timeAgo: '3 months ago',
      excerpt: 'Explore the upcoming features and trends in JavaScript development.',
      content: 'This is the full content of the sixth blog post.',
      user: { avatarUrl: 'https://i.pravatar.cc/150?u=david' },
      category: 'JavaScript',
      shares: '70',
      reads: '350',
      estimatedProfits: '70',
    },
    {
      id: '7',
      title: 'A Comprehensive Guide to Webpack',
      description: 'Learn how to bundle your JavaScript applications using Webpack.',
      author: 'Sarah Green',
      thumbnail: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44',
      authorAvatar: 'https://i.pravatar.cc/150?u=sarah',
      views: '800',
      timeAgo: '4 months ago',
      excerpt: 'Learn how to bundle your JavaScript applications using Webpack.',
      content: 'This is the full content of the seventh blog post.',
      user: { avatarUrl: 'https://i.pravatar.cc/150?u=sarah' },
      category: 'Webpack',
      shares: '40',
      reads: '200',
      estimatedProfits: '40',
    },
    {
      id: '8',
      title: 'Mastering Asynchronous JavaScript',
      description: 'Understand promises, async/await, and other asynchronous programming techniques in JavaScript.',
      author: 'Kevin Clark',
      thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      authorAvatar: 'https://i.pravatar.cc/150?u=kevin',
      views: '2.3K',
      timeAgo: '5 months ago',
      excerpt: 'Understand promises, async/await, and other asynchronous programming techniques in JavaScript.',
      content: 'This is the full content of the eighth blog post.',
      user: { avatarUrl: 'https://i.pravatar.cc/150?u=kevin' },
      category: 'JavaScript',
      shares: '110',
      reads: '550',
      estimatedProfits: '110',
    },
  ]);

  const addPost = (post: BlogPost) => {
    setPosts([post, ...posts]);
  };

  return (
    <BlogContext.Provider value={{ posts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}
