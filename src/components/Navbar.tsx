import { Search, Bell, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "./ui/sidebar";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-50 px-4">
      <div className="flex items-center justify-between h-full max-w-[2100px] mx-auto">
        <div className="flex items-center gap-4 min-w-[200px]">
          <SidebarTrigger>
            <Menu className="h-5 w-5" />
          </SidebarTrigger>
          <h1 className="text-xl font-semibold">BlogTube</h1>
        </div>
        
        <div className="flex-1 max-w-xl">
          <div className="flex items-center">
            <Input
              type="search"
              placeholder="Search posts..."
              className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button className="rounded-l-none bg-gray-100 hover:bg-gray-200 text-black border border-l-0 border-gray-200">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 min-w-[200px] justify-end">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://i.pravatar.cc/150?u=user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <Button 
            className="bg-youtube-red hover:bg-red-700 text-white"
            onClick={() => navigate("/editor")}
          >
            Create Post
          </Button>
        </div>
      </div>
    </nav>
  );
};