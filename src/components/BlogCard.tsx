import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useAuth } from "../contexts/AuthContext";

interface BlogCardProps {
  title: string;
  author: string;
  thumbnail: string;
  views: string;
  timeAgo: string;
  className?: string;
}

export const BlogCard = ({
  title,
  author,
  thumbnail,
  views,
  timeAgo,
  className,
}: BlogCardProps) => {
  const { user } = useAuth();
  const authorAvatar = user?.avatarUrl;

  return (
    <Card className={`${className} rounded-lg overflow-hidden border-none shadow-none hover:bg-gray-100 transition-colors cursor-pointer group`}>
      <div className="aspect-video relative rounded-xl overflow-hidden mb-3">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex gap-3 px-1">
        <Avatar className="h-9 w-9">
          <AvatarImage src={authorAvatar || '/placeholder.svg'} />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-sm line-clamp-2">
            <a href="/profile">{title}</a>
          </h3>
          <p className="text-youtube-gray text-sm mt-1">
            <a href="/profile">{author}</a>
          </p>
          <p className="text-youtube-gray text-sm">
            {views} views • {timeAgo}
          </p>
        </div>
      </div>
    </Card>
  );
};
