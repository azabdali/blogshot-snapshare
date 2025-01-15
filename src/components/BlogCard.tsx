import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BlogPost } from "../contexts/BlogContext";
import { useNavigate } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ReportModal } from "./ReportModal";
import { useState } from "react";
import React from "react";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export const BlogCard = ({ post, className }: BlogCardProps) => {
  const navigate = useNavigate();
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleReportClick = () => {
    setReportModalOpen(true);
  };

  const authorAvatar = post.user?.avatarUrl || '/placeholder.svg';
  const category = post.category || 'Uncategorized';

  const handleClick = (event: React.MouseEvent) => {
    if (!((event.target as HTMLElement).closest('[data-radix-dropdown-menu-content]'))) {
      navigate(`/blog/${post.id}`);
    }
  };

  return (
    <Card onClick={(event) => handleClick(event)} className={`${className} rounded-lg overflow-hidden border-none shadow-none hover:bg-gray-100 transition-colors cursor-pointer group`}>
      <div className="aspect-video relative rounded-xl overflow-hidden mb-3">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex justify-between items-end px-1">
        <div className="flex gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={authorAvatar} />
            <AvatarFallback>{post.author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-sm line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-2 mt-1">
              {post.description}
            </p>
            <p className="text-youtube-gray text-sm mt-1">
              {post.author}
            </p>
            <div className="flex items-center text-youtube-gray text-sm gap-1">
              <span>{post.views} views</span>
              <span className="text-xs">•</span>
              <span>{post.timeAgo}</span>
            </div>
          </div>
        </div>
        <span className="text-black text-sm">{category}</span>
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild onClick={(event) => event.stopPropagation()}>
            <button className="p-1 rounded-full hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-more-vertical"><circle cx="12" cy="2" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="22" r="1"/></svg>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleReportClick}>Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ReportModal open={reportModalOpen} onOpenChange={setReportModalOpen} />
    </Card>
  );
};
