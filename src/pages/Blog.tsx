import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const BLOG_POSTS = [
  {
    title: "Getting Started with React",
    author: "John Doe",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    authorAvatar: "https://i.pravatar.cc/150?u=john",
    views: "2.5K",
    timeAgo: "2 days ago",
  },
  {
    title: "Understanding TypeScript",
    author: "John Doe",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    authorAvatar: "https://i.pravatar.cc/150?u=john",
    views: "1.8K",
    timeAgo: "1 week ago",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-youtube-lightGray">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://i.pravatar.cc/150?u=user" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">John Doe</h1>
              <p className="text-gray-600 mb-4">
                Technical writer and software developer. Passionate about creating content that helps others learn and grow.
              </p>
              <div className="flex gap-4 text-sm text-gray-600">
                <span>42 Posts</span>
                <span>12.5K Views</span>
                <span>Joined Jan 2024</span>
              </div>
            </div>
            <Button>Edit Profile</Button>
          </div>
        </div>

        <section>
          <h2 className="text-xl font-semibold mb-6">Published Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;