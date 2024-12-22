import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowLeft, ImagePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-50">
        <div className="flex items-center justify-between h-full px-4 max-w-[2100px] mx-auto">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="outline">Save Draft</Button>
            <Button>Publish</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-12 max-w-3xl">
        <div className="mb-8">
          <Label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700 mb-2">
            Post Thumbnail
          </Label>
          <div className="relative">
            {thumbnail ? (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-2">
                <img src={thumbnail} alt="Thumbnail preview" className="w-full h-full object-cover" />
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute bottom-2 right-2"
                  onClick={() => setThumbnail(null)}
                >
                  Change
                </Button>
              </div>
            ) : (
              <label
                htmlFor="thumbnail"
                className="flex flex-col items-center justify-center w-full aspect-video bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <ImagePlus className="h-10 w-10 text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">Click to upload thumbnail</span>
              </label>
            )}
            <input
              id="thumbnail"
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
              className="hidden"
            />
          </div>
        </div>
        
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-4xl font-bold border-none px-0 focus-visible:ring-0 mb-8 placeholder:text-gray-400"
        />
        
        <Textarea
          placeholder="Tell your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[500px] text-lg border-none resize-none focus-visible:ring-0 placeholder:text-gray-400"
        />
      </main>
    </div>
  );
};

export default Editor;