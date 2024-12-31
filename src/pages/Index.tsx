import { useBlog } from '../contexts/BlogContext';
import { BlogCard } from "../components/BlogCard";
import { useLocation } from 'react-router-dom';
import { CategoryBar } from '../components/CategoryBar';

const Index = () => {
  const { posts } = useBlog();
  const { pathname } = useLocation();

  return (
    <>
      <main className="container mx-auto max-w-7xl py-6">
        <CategoryBar />
        {pathname === '/' && (
          <section className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {posts.map((post) => (
                  <BlogCard key={post.title} {...post} />
              ))}
              {posts.map((post) => (
                  <BlogCard key={post.title} {...post} />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default Index;
