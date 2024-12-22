import {
  BarChart2,
  BookOpen,
  DollarSign,
  HelpCircle,
  Home,
  Info,
  Mail,
  MessageSquare,
  Settings,
  TrendingUp,
  FileText,
  Copyright,
} from "lucide-react";
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
  { title: "Blog", icon: BookOpen, url: "#" },
  { title: "Statistics", icon: BarChart2, url: "#" },
  { title: "Profits", icon: DollarSign, url: "#" },
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
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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