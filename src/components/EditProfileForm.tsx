import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { FaYoutube, FaEnvelope, FaFacebook, FaGlobe, FaTwitter, FaTiktok, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaBloggerB } from 'react-icons/fa';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';

interface EditProfileFormProps {
  onSubmit: (profile: { name: string; description: string; avatarUrl: string; username: string; website: string; twitter: string; github: string, instagram: string, linkedin: string, whatsapp: string, blogger: string }) => void;
  initialProfile: { name: string; description: string; avatarUrl: string; username: string; website: string; twitter: string; github: string, instagram: string, linkedin: string, whatsapp: string, blogger: string };
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
  const [instagram, setInstagram] = useState(initialProfile.instagram || '');
  const [linkedin, setLinkedin] = useState(initialProfile.linkedin || '');
  const [whatsapp, setWhatsapp] = useState(initialProfile.whatsapp || '');
  const [blogger, setBlogger] = useState(initialProfile.blogger || '');
  const [activeInput, setActiveInput] = useState<string | null>(null);

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
    onSubmit({ name, username, description, avatarUrl: avatarUrl || '', website, twitter, github, instagram, linkedin, whatsapp, blogger });
  };

  const renderInputModal = (inputType: string) => {
    let inputField = null;
    let icon = null;
    let title = '';

    switch (inputType) {
      case 'website':
        inputField = <Input type="text" id="website" placeholder="Your YouTube URL" value={website} onChange={(e) => setWebsite(e.target.value)} />;
        icon = <FaYoutube size={20} style={{ color: '#FF0000' }} />;
        title = 'YouTube';
        break;
      case 'envelope':
        inputField = <Input type="email" id="envelope" placeholder="Your Email Address" value={''} onChange={(e) => {}} />;
        icon = <FaEnvelope size={20} style={{ color: '#777777' }} />;
        title = 'Email';
        break;
      case 'facebook':
        inputField = <Input type="text" id="facebook" placeholder="Your Facebook URL" value={''} onChange={(e) => {}} />;
        icon = <FaFacebook size={20} style={{ color: '#1877F2' }} />;
        title = 'Facebook';
        break;
      case 'globe':
        inputField = <Input type="text" id="globe" placeholder="Your Website URL" value={''} onChange={(e) => {}} />;
        icon = <FaGlobe size={20} style={{ color: '#000000' }} />;
        title = 'Website';
        break;
      case 'twitter':
        inputField = <Input type="text" id="twitter" placeholder="Your Twitter URL" value={twitter} onChange={(e) => setTwitter(e.target.value)} />;
        icon = <FaTwitter size={20} style={{ color: '#1DA1F2' }} />;
        title = 'Twitter';
        break;
      case 'tiktok':
        inputField = <Input type="text" id="tiktok" placeholder="Your TikTok URL" value={''} onChange={(e) => {}} />;
        icon = <FaTiktok size={20} style={{ color: '#000000' }} />;
        title = 'TikTok';
        break;
      case 'instagram':
        inputField = <Input type="text" id="instagram" placeholder="Your Instagram URL" value={''} onChange={(e) => setInstagram(e.target.value)} />;
        icon = <FaInstagram size={20} style={{ color: '#C13584' }} />;
        title = 'Instagram';
        break;
      case 'linkedin':
        inputField = <Input type="text" id="linkedin" placeholder="Your LinkedIn URL" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />;
        icon = <FaLinkedin size={20} style={{ color: '#0077B5' }} />;
        title = 'LinkedIn';
        break;
      case 'github':
        inputField = <Input type="text" id="github" placeholder="Your GitHub URL" value={github} onChange={(e) => setGithub(e.target.value)} />;
        icon = <FaGithub size={20} style={{ color: '#333' }} />;
        title = 'GitHub';
        break;
      case 'whatsapp':
        inputField = <Input type="text" id="whatsapp" placeholder="Your WhatsApp URL" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />;
        icon = <FaWhatsapp size={20} style={{ color: '#25D366' }} />;
        title = 'WhatsApp';
        break;
      case 'blogger':
        inputField = <Input type="text" id="blogger" placeholder="Your Blogger URL" value={blogger} onChange={(e) => setBlogger(e.target.value)} />;
        icon = <FaBloggerB size={20} style={{ color: '#F57C00' }} />;
        title = 'Blogger';
        break;
      default:
        return null;
    }

    return (
      <AlertDialog open={activeInput === inputType} onOpenChange={() => setActiveInput(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center space-x-2">{icon}<span>{title}</span></AlertDialogTitle>
          </AlertDialogHeader>
          {inputField}
          <Button onClick={() => setActiveInput(null)}>Close</Button>
        </AlertDialogContent>
      </AlertDialog>
    );
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
            <FaYoutube size={20} style={{ color: '#FF0000' }} className="cursor-pointer" onClick={() => setActiveInput('website')} />
            <FaEnvelope size={20} style={{ color: '#777777' }} className="cursor-pointer" onClick={() => setActiveInput('envelope')} />
            <FaFacebook size={20} style={{ color: '#1877F2' }} className="cursor-pointer" onClick={() => setActiveInput('facebook')} />
            <FaGlobe size={20} style={{ color: '#000000' }} className="cursor-pointer" onClick={() => setActiveInput('globe')} />
            <FaTwitter size={20} style={{ color: '#1DA1F2' }} className="cursor-pointer" onClick={() => setActiveInput('twitter')} />
            <FaTiktok size={20} style={{ color: '#000000' }} className="cursor-pointer" onClick={() => setActiveInput('tiktok')} />
            <FaInstagram size={20} style={{ color: '#C13584' }} className="cursor-pointer" onClick={() => setActiveInput('instagram')} />
            <FaLinkedin size={20} style={{ color: '#0077B5' }} className="cursor-pointer" onClick={() => setActiveInput('linkedin')} />
            <FaGithub size={20} style={{ color: '#333' }} className="cursor-pointer" onClick={() => setActiveInput('github')} />
            <FaWhatsapp size={20} style={{ color: '#25D366' }} className="cursor-pointer" onClick={() => setActiveInput('whatsapp')} />
            <FaBloggerB size={20} style={{ color: '#F57C00' }} className="cursor-pointer" onClick={() => setActiveInput('blogger')} />
          </div>
        </div>
        {renderInputModal('website')}
        {renderInputModal('envelope')}
        {renderInputModal('facebook')}
        {renderInputModal('globe')}
        {renderInputModal('twitter')}
        {renderInputModal('tiktok')}
        {renderInputModal('instagram')}
        {renderInputModal('linkedin')}
        {renderInputModal('github')}
        {renderInputModal('whatsapp')}
        {renderInputModal('blogger')}

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
