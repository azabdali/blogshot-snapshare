import './index.css';
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Navbar } from "./components/Navbar";
import Index from "./pages/Index";
import Editor from "./pages/Editor";
import Blog from "./pages/Blog";
import Statistics from "./pages/Statistics";
import Profits from "./pages/Profits";
import SearchResults from "./pages/SearchResults";
import PostDetailsPage from "./pages/PostDetailsPage";
import Popular from "./pages/Popular";
import Discover from "./pages/Discover";
import Settings from "./pages/Settings";

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
        <BrowserRouter>
          <div className="min-h-screen w-full bg-background">
            <Navbar />
            <main className="w-full pt-14">
              <Routes>
                <Route index element={<Index />} />
                <Route path="popular" element={<Popular />} />
                <Route path="discover" element={<Discover />} />
                <Route path="editor" element={<Editor />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:postId" element={<PostDetailsPage />} />
                <Route path="search" element={<SearchResults />} />
                <Route path="settings" element={<Settings />} />
                <Route path="statistics" element={<Statistics />} />
                <Route path="profits" element={<Profits />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
