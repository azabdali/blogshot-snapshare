import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface FeaturedPostProps {
  title: string;
  author: string;
  thumbnail: string;
  authorAvatar: string;
  views: string;
  timeAgo: string;
  excerpt: string;
  className?: string;
}

export const FeaturedPost = ({
  title,
  author,
  thumbnail,
  authorAvatar,
  views,
  timeAgo,
  excerpt,
  className,
}: FeaturedPostProps) => {
  return (
    <Card className={`rounded-xl overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow cursor-pointer ${className}`}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="aspect-video relative rounded-xl overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-youtube-gray mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={authorAvatar} />
              <AvatarFallback>{author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{author}</p>
              <p className="text-youtube-gray text-sm">
                {views} views • {timeAgo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
