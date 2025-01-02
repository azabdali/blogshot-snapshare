import { CategoryBar } from '../components/CategoryBar';
import { useBlog } from '../contexts/BlogContext';
import { BlogCard } from '../components/BlogCard';

const Index = () => {
  const { posts } = useBlog();

  return (
    <>
      <main className="container mx-auto max-w-7xl py-6">
        <CategoryBar />
        <section className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Index;
