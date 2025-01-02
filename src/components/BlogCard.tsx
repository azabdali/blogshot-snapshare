import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BlogPost } from "../contexts/BlogContext";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export const BlogCard = ({ post, className }: BlogCardProps) => {
  const navigate = useNavigate();
  const authorAvatar = post.user?.avatarUrl || '/placeholder.svg';

  const handleClick = () => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <Card onClick={handleClick} className={`${className} rounded-lg overflow-hidden border-none shadow-none hover:bg-gray-100 transition-colors cursor-pointer group`}>
      <div className="aspect-video relative rounded-xl overflow-hidden mb-3">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex gap-3 px-1">
        <Avatar className="h-9 w-9">
          <AvatarImage src={authorAvatar} />
          <AvatarFallback>{post.author[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-sm line-clamp-2">
            {post.title}
          </h3>
          <p className="text-youtube-gray text-sm mt-1">
            {post.author}
          </p>
          <p className="text-youtube-gray text-sm">
            {post.views} views • {post.timeAgo}
          </p>
        </div>
      </div>
    </Card>
  );
};
