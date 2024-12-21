import { Search, Bell, Video, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-50 px-4">
      <div className="flex items-center justify-between h-full max-w-[2100px] mx-auto">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">BlogTube</h1>
        </div>
        
        <div className="flex-1 max-w-xl mx-4">
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

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Video className="h-5 w-5" />
          </Button>
          <Button className="bg-youtube-red hover:bg-red-700 text-white">
            Create Post
          </Button>
        </div>
      </div>
    </nav>
  );
};