import { CategoryBar } from "@/components/CategoryBar";
import { BlogCard } from "@/components/BlogCard";
import { FeaturedPost } from "@/components/FeaturedPost";

const FEATURED_POST = {
  title: "The Future of Web Development: What's Coming in 2024",
  author: "Sarah Johnson",
  thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  authorAvatar: "https://i.pravatar.cc/150?u=sarah",
  views: "125K",
  timeAgo: "2 days ago",
  excerpt: "Discover the upcoming trends and technologies that will shape the future of web development. From AI-powered tools to new frameworks, get ready for what's next.",
};

const BLOG_POSTS = [
  {
    title: "10 Essential VS Code Extensions for Developers",
    author: "Mike Chen",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    authorAvatar: "https://i.pravatar.cc/150?u=mike",
    views: "45K",
    timeAgo: "5 days ago",
  },
  {
    title: "Understanding TypeScript: A Beginner's Guide",
    author: "Emma Wilson",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    authorAvatar: "https://i.pravatar.cc/150?u=emma",
    views: "32K",
    timeAgo: "1 week ago",
  },
  {
    title: "Building Scalable APIs with Node.js",
    author: "David Kim",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    authorAvatar: "https://i.pravatar.cc/150?u=david",
    views: "78K",
    timeAgo: "3 days ago",
  },
  {
    title: "Mastering CSS Grid Layout",
    author: "Lisa Chen",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    authorAvatar: "https://i.pravatar.cc/150?u=lisa",
    views: "92K",
    timeAgo: "4 days ago",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-youtube-black w-full">
      <CategoryBar />
      <div className="container mx-auto px-4 py-6">
        <section className="mb-12">
          <FeaturedPost {...FEATURED_POST} />
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-6">Latest Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;