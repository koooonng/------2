
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type StoryCardProps = {
  title: string;
  paragraphs: string[];
};

const StoryCard = ({ title, paragraphs }: StoryCardProps) => {
  return (
    <Card className="mb-12 border-[#F5DEB3] bg-white/70 backdrop-blur-sm shadow-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-[#3C3830]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-48">
          {paragraphs.map((paragraph, index) => (
            <p 
              key={index} 
              className={`text-[#59534D] leading-relaxed ${index < paragraphs.length - 1 ? 'mb-3' : ''}`}
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
