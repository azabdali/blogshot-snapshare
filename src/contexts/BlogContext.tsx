import React, { createContext, useContext, useState } from 'react';

interface BlogPost {
  title: string;
  author: string;
  thumbnail: string;
  authorAvatar: string;
  views: string;
  timeAgo: string;
  excerpt: string;
}

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      title: 'Getting Started with React',
      author: 'John Doe',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
      authorAvatar: 'https://i.pravatar.cc/150?u=john',
      views: '2.5K',
      timeAgo: '2 days ago',
      excerpt: 'Learn the basics of React and build your first component.',
    },
    {
      title: 'Understanding TypeScript',
      author: 'John Doe',
      thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
      authorAvatar: 'https://i.pravatar.cc/150?u=john',
      views: '1.8K',
      timeAgo: '1 week ago',
      excerpt: 'Explore the benefits of using TypeScript in your JavaScript projects.',
    },
    {
      title: 'Advanced CSS Techniques',
      author: 'Jane Smith',
      thumbnail: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd',
      authorAvatar: 'https://i.pravatar.cc/150?u=jane',
      views: '950',
      timeAgo: '3 weeks ago',
      excerpt: 'Discover advanced CSS techniques to create stunning layouts and animations.',
    },
    {
      title: 'Introduction to GraphQL',
      author: 'Mike Brown',
      thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe9ef4f',
      authorAvatar: 'https://i.pravatar.cc/150?u=mike',
      views: '1.2K',
      timeAgo: '1 month ago',
      excerpt: 'Learn the fundamentals of GraphQL and how it can improve your API interactions.',
    },
    {
      title: 'Best Practices for REST API Design',
      author: 'Emily White',
      thumbnail: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd5',
      authorAvatar: 'https://i.pravatar.cc/150?u=emily',
      views: '2.1K',
      timeAgo: '2 months ago',
      excerpt: 'Follow these best practices to design robust and scalable REST APIs.',
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
