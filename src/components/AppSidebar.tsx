import {
  Home,
  TrendingUp,
  MessageSquare,
  BookOpen,
  BarChart2,
  DollarSign,
  Settings,
  Info,
  FileText,
  Mail,
  Copyright,
  LogIn,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "./ui/button";

const mainItems = [
  { title: "Home", icon: Home, url: "/" },
  { title: "Trending", icon: TrendingUp, url: "#" },
  { title: "Stories", icon: MessageSquare, url: "#" },
];

const userItems = [
  { title: "Blog", icon: BookOpen, url: "/blog" },
  { title: "Statistics", icon: BarChart2, url: "/statistics" },
  { title: "Profits", icon: DollarSign, url: "/profits" },
  { title: "Settings", icon: Settings, url: "#" },
];

const helpItems = [
  { title: "About", icon: Info, url: "#" },
  { title: "Terms of Service", icon: FileText, url: "#" },
  { title: "Privacy Policy", icon: FileText, url: "#" },
  { title: "Contact Us", icon: Mail, url: "#" },
];

export function AppSidebar() {
  const { isLoggedIn } = useAuth();
  const { state } = useSidebar();

  return (
    <>
      <div className="sidebar-overlay" data-state={state}>
        <nav className="flex flex-col h-full">
          <div className="flex-1 py-2">
            <div className="space-y-1 px-3">
              {mainItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className="flex items-center gap-4 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="lg:block hidden">{item.title}</span>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="px-6 text-sm font-semibold text-gray-500 dark:text-gray-400 lg:block hidden">
                You
              </h3>
              <div className="mt-2 space-y-1 px-3">
                {isLoggedIn ? (
                  userItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.url}
                      className="flex items-center gap-4 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="lg:block hidden">{item.title}</span>
                    </Link>
                  ))
                ) : (
                  <div className="p-4 text-sm text-gray-600 dark:text-gray-400 lg:block hidden">
                    <p>Sign in to access your personal content</p>
                    <Button variant="outline" className="mt-2 w-full" onClick={() => {}}>
                      <LogIn className="mr-2 h-4 w-4" />
                      Sign In
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="px-6 text-sm font-semibold text-gray-500 dark:text-gray-400 lg:block hidden">
                Help & Settings
              </h3>
              <div className="mt-2 space-y-1 px-3">
                {helpItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className="flex items-center gap-4 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="lg:block hidden">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Copyright className="h-4 w-4" />
              <span className="lg:block hidden">2024 BlogTube</span>
            </div>
          </div>
        </nav>
      </div>
      <div className="sidebar-backdrop" data-state={state} />
    </>
  );
}