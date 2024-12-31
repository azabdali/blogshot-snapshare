import React, { useState } from 'react';
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

const Blog = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    description:
      'Technical writer and software developer. Passionate about creating content that helps others learn and grow.',
    avatarUrl: 'https://i.pravatar.cc/150?u=user',
  });

  const updateProfile = (newProfile: { name: string; description: string; avatarUrl: string }) => {
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
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
              <p className="text-gray-600 mb-4">{profile.description}</p>
              <div className="flex gap-4 text-sm text-gray-600">
                <span>42 Posts</span>
                <span>12.5K Views</span>
                <span>Joined Jan 2024</span>
              </div>
            </div>
            <AlertDialog open={isEditing} onOpenChange={setIsEditing}>
              <AlertDialogTrigger asChild>
                <Button>Edit Profile</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Edit Profile</AlertDialogTitle>
                  <AlertDialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <EditProfileForm onSubmit={updateProfile} initialProfile={profile} onClose={() => setIsEditing(false)} />
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
