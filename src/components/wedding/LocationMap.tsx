
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

type LocationMapProps = {
  title: string;
  address: string;
  venueTitle: string;
  mapUrl: string;
  directionsUrl: string;
};

const LocationMap = ({ title, address, venueTitle, mapUrl, directionsUrl }: LocationMapProps) => {
  return (
    <Card className="mb-12 border-[#F5DEB3] bg-white/70 backdrop-blur-sm shadow-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-[#3C3830]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center mb-4">
          <h3 className="font-medium text-[#59534D]">{venueTitle}</h3>
          <p className="text-[#59534D]">{address}</p>
        </div>
        
        <div className="aspect-video w-full overflow-hidden rounded-md border border-[#F5DEB3]">
          <iframe 
            src={mapUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта места проведения"
            className="w-full h-full"
          />
        </div>
        
        <div className="flex justify-center pt-2">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 border-[#D2B48C] text-[#A89070] hover:bg-[#F5DEB3]/20"
            onClick={() => window.open(directionsUrl, '_blank')}
          >
            <Icon name="Navigation" size={16} />
            Проложить маршрут
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationMap;
