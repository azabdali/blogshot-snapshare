import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const categories = [
  "All",
  "Technology",
  "Design",
  "Programming",
  "Business",
  "Marketing",
  "Lifestyle",
  "Travel",
  "Food",
  "Health",
  "Finance",
  "Education",
  "Entertainment",
  "Science",
  "Environment",
  "Personal",
  "Fashion",
  "Sports",
  "History",
  "Photography",
  "Art",
];

export const CategoryBar = () => {
  return (
    <div className="w-full border-b border-gray-200 bg-white sticky top-14 z-40">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-full gap-2 px-4 py-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="secondary"
              className="rounded-full text-sm font-medium"
            >
              {category}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
