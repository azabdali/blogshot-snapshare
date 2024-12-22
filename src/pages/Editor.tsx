import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

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