import React, { useState } from "react";
import { Button } from "./ui/button";
import { MoreVertical, Search, Bell } from "lucide-react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import SideMenu from "./SideMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "./ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface NavbarProps {
  avatarUrl?: string;
}

export const Navbar = ({ avatarUrl }: NavbarProps) => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState("notifications");

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      return;
    }
    navigate(`/search?q=${searchQuery}`);
  };

  const toggleTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("", { replace: true });
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("", { replace: true });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-white dark:bg-youtube-black border-b border-gray-200 dark:border-gray-800 z-50 px-4">
      <div className="flex items-center justify-between h-full max-w-[2100px] mx-auto">
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 cursor-pointer dark:text-white"
            onClick={() => setIsSideMenuOpen(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <h1 className="text-xl font-semibold dark:text-white">Blog</h1>
        </div>

        <div className="flex-1 max-w-xl">
          <div className="flex items-center">
            <Input
              type="search"
              placeholder="Search posts..."
              className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-zinc-900 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button onClick={handleSearch} className="rounded-l-none bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-black dark:text-white border border-l-0 border-gray-200 dark:border-gray-700">
              <Search />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 min-w-[200px] justify-end">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" className="dark:text-white relative" onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}>
                <Bell />
              </Button>
              {isNotificationsOpen && (
                <div className="absolute top-full right-0 mt-1 w-80 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-md z-50 origin-top-right">
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="notifications">Notifications</TabsTrigger>
                      <TabsTrigger value="liveChat">Live Chat</TabsTrigger>
                    </TabsList>
                    <TabsContent value="notifications" className="p-4">
                      <div>No new notifications</div>
                    </TabsContent>
                    <TabsContent value="liveChat" className="p-4">
                      <div>No active chats</div>
                    </TabsContent>
                  </Tabs>
                  <div className="p-4">
                    <Button variant="outline" className="w-full" onClick={() => setIsNotificationsOpen(false)}>
                      Close
                    </Button>
                  </div>
                </div>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src={avatarUrl || "https://i.pravatar.cc/150?u=user"} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Language
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Location</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <span>Appearance</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem onClick={() => toggleTheme("light")}>
                          Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toggleTheme("dark")}>
                          Dark
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem onClick={handleLogout}>
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                className="bg-black hover:bg-gray-800 text-white"
                onClick={() => navigate("/editor")}
              >
                Create Post
              </Button>
            </>
          ) : (
            <div className="relative flex items-center gap-2">
              <Button className="text-white flex items-center gap-2" onClick={handleLogin}>
                <img src="https://www.google.com/favicon.ico" alt="Google Logo" className="h-5 w-5 mr-2" />
                Sign up
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="dark:text-white">
                    <MoreVertical />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    Language
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Location</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <span>Appearance</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem onClick={() => toggleTheme("light")}>
                          Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toggleTheme("dark")}>
                          Dark
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
        <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
      </div>
    </nav>
  );
};

export default Navbar;
