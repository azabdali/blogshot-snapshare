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
} from "lucide-react";
import { Link } from "react-router-dom";
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
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
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
            <SidebarMenu>
              {userItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Help</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {helpItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
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
        <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500">
          <Copyright className="h-4 w-4" />
          <span>2024 BlogTube</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}