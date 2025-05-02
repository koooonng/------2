
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type StoryCardProps = {
  title: string;
  paragraphs: string[];
};

const StoryCard = ({ title, paragraphs }: StoryCardProps) => {
  return (
    <Card className="mb-12 border-[#d6bcfa] bg-white/70 backdrop-blur-sm shadow-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-[#1A1F2C]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-48">
          {paragraphs.map((paragraph, index) => (
            <p 
              key={index} 
              className={`text-[#8E9196] leading-relaxed ${index < paragraphs.length - 1 ? 'mb-3' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
