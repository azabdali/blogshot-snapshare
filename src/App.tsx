import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SidebarProvider } from "./components/ui/sidebar";
import { AuthProvider } from "./contexts/AuthContext";
import { AppSidebar } from "./components/AppSidebar";
import { Navbar } from "./components/Navbar";
import Index from "./pages/Index";
import Editor from "./pages/Editor";
import Blog from "./pages/Blog";
import Statistics from "./pages/Statistics";
import Profits from "./pages/Profits";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="min-h-screen flex flex-col w-full">
              <Navbar />
              <div className="flex-1 flex">
                <AppSidebar />
                <main className="flex-1 relative">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/statistics" element={<Statistics />} />
                    <Route path="/profits" element={<Profits />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;