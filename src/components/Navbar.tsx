import React, { useState } from "react";
import { Button } from "./ui/button";
import { MoreVertical, Menu, Search, Bell } from "lucide-react";
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

interface NavbarProps {
  avatarUrl?: string;
}

export const Navbar = ({ avatarUrl }: NavbarProps) => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
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
          <Menu onClick={() => setIsSideMenuOpen(true)} className="h-6 w-6 cursor-pointer dark:text-white" />
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
              <Button variant="ghost" size="icon" className="dark:text-white">
                <Bell />
              </Button>
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
                className="bg-youtube-red hover:bg-red-700 text-white"
                onClick={() => navigate("/editor")}
              >
                Create Post
              </Button>
            </>
          ) : (
            <div className="relative flex items-center gap-2">
              <Button className="bg-youtube-red hover:bg-red-700 text-white flex items-center gap-2" onClick={handleLogin}>
                Sign In
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
