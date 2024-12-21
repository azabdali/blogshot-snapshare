import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface BlogCardProps {
  title: string;
  author: string;
  thumbnail: string;
  authorAvatar: string;
  views: string;
  timeAgo: string;
}

export const BlogCard = ({
  title,
  author,
  thumbnail,
  authorAvatar,
  views,
  timeAgo,
}: BlogCardProps) => {
  return (
    <Card className="rounded-lg overflow-hidden border-none shadow-none hover:bg-gray-100 transition-colors cursor-pointer group">
      <div className="aspect-video relative rounded-xl overflow-hidden mb-3">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex gap-3 px-1">
        <Avatar className="h-9 w-9">
          <AvatarImage src={authorAvatar} />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-sm line-clamp-2">{title}</h3>
          <p className="text-youtube-gray text-sm mt-1">{author}</p>
          <p className="text-youtube-gray text-sm">
            {views} views • {timeAgo}
          </p>
        </div>
      </div>
    </Card>
  );
};