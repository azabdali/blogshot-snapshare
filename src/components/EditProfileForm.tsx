import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

interface EditProfileFormProps {
  onSubmit: (profile: { name: string; description: string; avatarUrl: string }) => void;
  initialProfile: { name: string; description: string; avatarUrl: string };
  onClose: () => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ onSubmit, initialProfile, onClose }) => {
  const [name, setName] = useState(initialProfile.name);
  const [description, setDescription] = useState(initialProfile.description);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(initialProfile.avatarUrl);

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
    onSubmit({ name, description, avatarUrl: avatarUrl || '' });
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
        </div>
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
