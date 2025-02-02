import React, { useState, useEffect, useContext } from 'react';
import { FaYoutube, FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaBloggerB } from 'react-icons/fa';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Navbar } from '../components/Navbar';
import EditProfileForm from '../components/EditProfileForm';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from '../components/ui/alert-dialog';
import { useBlog } from '../contexts/BlogContext';
import { useAuth } from '../contexts/AuthContext';
import { BlogCard } from '../components/BlogCard';

export const BlogPosts = () => {
  const { posts } = useBlog();
  const { user: authUser } = useAuth();

  const userPosts = posts.filter(post => post.user?.avatarUrl === authUser?.avatarUrl);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {userPosts.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
};

const Blog = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user: authUser } = useAuth();
  const [profile, setProfile] = useState(() => ({
    name: authUser?.username || 'John Doe',
    username: authUser?.username || '',
    description:
      'Technical writer and software developer. Passionate about creating content that helps others learn and grow.',
    avatarUrl: authUser?.avatarUrl || 'https://i.pravatar.cc/150?u=user',
    website: '',
    twitter: '',
    github: '',
    instagram: '',
    linkedin: '',
    whatsapp: '',
    blogger: '',
  }));
  const { posts } = useBlog();

  useEffect(() => {
    if (authUser) {
      setProfile(prevProfile => ({
        ...prevProfile,
        name: authUser.username || 'Current User',
        username: authUser.username || '',
        avatarUrl: authUser.avatarUrl,
      }));
    }
  }, [authUser]);

  const updateProfile = (newProfile: { name: string; username: string; description: string; avatarUrl: string, website: string, twitter: string, github: string, instagram: string, linkedin: string, whatsapp: string, blogger: string }) => {
    setProfile(newProfile);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-youtube-lightGray">
      <Navbar avatarUrl={profile.avatarUrl} />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={profile.avatarUrl} />
              <AvatarFallback>
                {profile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-1">{profile.name}</h1>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                @{profile.username}
              </h2>
              <p className="text-gray-600 mb-4">{profile.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>Joined Jan 2024</span>
                  <span>{posts.length} Posts</span>
                  <span>12.5K Views</span>
                  <span>France</span>
                  </div>
                <div className="flex gap-4">
                  {profile.website && (
                    <a href={profile.website} className="text-gray-500 hover:text-gray-700">
                      <FaYoutube size={20} />
                    </a>
                  )}
                  {profile.twitter && (
                    <a href={profile.twitter} className="text-gray-500 hover:text-gray-700">
                      <FaTwitter size={20} />
                    </a>
                  )}
                  {profile.github && (
                    <a href={profile.github} className="text-gray-500 hover:text-gray-700">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {profile.instagram && (
                    <a href={profile.instagram} className="text-gray-500 hover:text-gray-700">
                      <FaInstagram size={20} />
                    </a>
                  )}
                  {profile.linkedin && (
                    <a href={profile.linkedin} className="text-gray-500 hover:text-gray-700">
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {profile.whatsapp && (
                    <a href={profile.whatsapp} className="text-gray-500 hover:text-gray-700">
                      <FaWhatsapp size={20} />
                    </a>
                  )}
                  {profile.blogger && (
                    <a href={profile.blogger} className="text-gray-500 hover:text-gray-700">
                      <FaBloggerB size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <AlertDialog open={isEditing} onOpenChange={setIsEditing}>
              <AlertDialogTrigger asChild>
                <Button>Edit Profile</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                </AlertDialogHeader>
                <EditProfileForm onSubmit={updateProfile} initialProfile={profile} onClose={() => setIsEditing(false)} />
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <BlogPosts />
      </main>
    </div >
  );
};

export default Blog;
