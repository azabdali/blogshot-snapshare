import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { FaYoutube, FaEnvelope, FaFacebook, FaGlobe, FaTwitter, FaGithub } from 'react-icons/fa';

interface EditProfileFormProps {
  onSubmit: (profile: { name: string; description: string; avatarUrl: string; username: string; website: string; twitter: string; github: string }) => void;
  initialProfile: { name: string; description: string; avatarUrl: string; username: string; website: string; twitter: string; github: string };
  onClose: () => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ onSubmit, initialProfile, onClose }) => {
  const [name, setName] = useState(initialProfile.name);
  const [username, setUsername] = useState(initialProfile.username);
  const [description, setDescription] = useState(initialProfile.description);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(initialProfile.avatarUrl);
  const [website, setWebsite] = useState(initialProfile.website || '');
  const [twitter, setTwitter] = useState(initialProfile.twitter || '');
  const [github, setGithub] = useState(initialProfile.github || '');
  const [showWebsiteInput, setShowWebsiteInput] = useState(false);
  const [showTwitterInput, setShowTwitterInput] = useState(false);
  const [showGithubInput, setShowGithubInput] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onSubmit({ name, username, description, avatarUrl: avatarUrl || '', website, twitter, github });
  };

  return (
    <div className="rounded-lg shadow-sm p-6 bg-white">
      <div className="flex justify-center mb-4">
        <Avatar className="h-32 w-32 cursor-pointer" onClick={() => document.getElementById('avatar-upload')?.click()}>
          <AvatarImage src={avatarUrl || "https://i.pravatar.cc/150?u=user"} alt="User Avatar" />
          <AvatarFallback>JD</AvatarFallback>
          <input type="file" id="avatar-upload" className="hidden" accept="image/*" onChange={handleImageChange} />
        </Avatar>
      </div>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <Input type="text" id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <Input type="text" id="username" placeholder="Your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <Textarea
            id="description"
            placeholder="A brief description about you"
            className="resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex items-center space-x-4 mt-2">
            <FaYoutube size={20} className="cursor-pointer" onClick={() => setShowWebsiteInput(!showWebsiteInput)} />
            <FaEnvelope size={20} className="cursor-pointer" onClick={() => setShowTwitterInput(!showTwitterInput)} />
            <FaFacebook size={20} className="cursor-pointer" onClick={() => setShowGithubInput(!showGithubInput)} />
            <FaGlobe size={20} className="cursor-pointer" onClick={() => setShowWebsiteInput(!showWebsiteInput)} />
            <FaTwitter size={20} className="cursor-pointer" onClick={() => setShowTwitterInput(!showTwitterInput)} />
            <FaGithub size={20} className="cursor-pointer" onClick={() => setShowGithubInput(!showGithubInput)} />
          </div>
        </div>
        {showWebsiteInput && (
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700">
              Website
            </label>
            <Input type="text" id="website" placeholder="Your website URL" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>
        )}
        {showTwitterInput && (
          <div>
            <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
              Twitter
            </label>
            <Input type="text" id="twitter" placeholder="Your Twitter URL" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
          </div>
        )}
        {showGithubInput && (
          <div>
            <label htmlFor="github" className="block text-sm font-medium text-gray-700">
              GitHub
            </label>
            <Input type="text" id="github" placeholder="Your GitHub URL" value={github} onChange={(e) => setGithub(e.target.value)} />
          </div>
        )}
        <div className="flex justify-end gap-2">
          <Button type="button" onClick={onClose} variant="outline">
            Close
          </Button>
          <Button type="submit" onClick={handleSubmit}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileForm;
