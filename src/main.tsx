import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './contexts/AuthContext';
import { BlogProvider } from './contexts/BlogContext';

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <BlogProvider>
      <App />
    </BlogProvider>
  </AuthProvider>
);
