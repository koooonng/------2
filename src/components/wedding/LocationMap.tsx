
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin } from "lucide-react";
import Icon from "@/components/ui/icon";

interface LocationMapProps {
  title: string;
  address: string;
  venueTitle: string;
  mapUrl: string;
  directionsUrl: string;
}

const LocationMap = ({
  title,
  address,
  venueTitle,
  mapUrl,
  directionsUrl
}: LocationMapProps) => {
  return (
    <div className="mb-12 rounded-lg overflow-hidden shadow-lg border border-wedding-light-beige">
      <div className="bg-wedding-beige p-6 text-center">
        <h2 className="text-3xl font-dancing text-wedding-gold mb-4">
          {title}
        </h2>
        
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="flex items-center gap-2 mb-2 text-wedding-dark-brown">
            <Icon name="MapPin" size={20} />
            <h3 className="text-xl font-playfair font-medium">
              {venueTitle}
            </h3>
          </div>
          
          <p className="text-lg font-playfair text-wedding-brown">
            {address}
          </p>
        </div>
        
        <Button
          className="bg-wedding-gold hover:bg-wedding-brown text-white font-medium px-4 py-2 rounded-md transition-colors mb-6"
          onClick={() => window.open(directionsUrl, '_blank')}
        >
          <Icon name="Navigation" className="mr-2" size={16} />
          Построить маршрут
        </Button>
      </div>
      
      <div className="relative h-[400px] w-full">
        <iframe
          src={mapUrl}
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта места проведения"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
