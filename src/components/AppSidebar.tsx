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
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "./ui/sidebar";
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

  return (
    <Sidebar variant="floating">
      <SidebarContent className="!block">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    tooltip={item.title}
                    className="hover:bg-gray-100 dark:hover:bg-zinc-800"
                  >
                    <Link to={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>You</SidebarGroupLabel>
          <SidebarGroupContent>
            {isLoggedIn ? (
              <SidebarMenu>
                {userItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      tooltip={item.title}
                      className="hover:bg-gray-100 dark:hover:bg-zinc-800"
                    >
                      <Link to={item.url}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            ) : (
              <div className="p-4 text-sm text-gray-600 dark:text-gray-400">
                <p>Sign in to access your personal content</p>
                <Button variant="outline" className="mt-2 w-full" onClick={() => {}}>
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </div>
            )}
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Help</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {helpItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    tooltip={item.title}
                    className="hover:bg-gray-100 dark:hover:bg-zinc-800"
                  >
                    <Link to={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
          <Copyright className="h-4 w-4" />
          <span>2024 BlogTube</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}