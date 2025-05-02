
import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type DetailItem = {
  icon: string;
  title: string;
  details: string[];
};

type EventDetailsCardProps = {
  title: string;
  description: string;
  details: DetailItem[];
};

const EventDetailsCard = ({ title, description, details }: EventDetailsCardProps) => {
  return (
    <Card className="mb-12 border-[#F5DEB3] bg-white/70 backdrop-blur-sm shadow-md hover-scale transition-all duration-300">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-[#3C3830]">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {details.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="mr-4 text-[#D2B48C]">
              <Icon name={item.icon} size={24} />
            </div>
            <div>
              <h3 className="font-medium">{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default EventDetailsCard;
