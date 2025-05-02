
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface LocationMapProps {
  title: string;
  address: string;
  venueTitle: string;
  mapUrl: string;
  directionsUrl: string;
  hideText?: boolean;
}

const LocationMap = ({
  mapUrl,
  directionsUrl,
  hideText = false
}: LocationMapProps) => {
  return (
    <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
      {!hideText && (
        <div className="bg-wedding-beige p-6 text-center">
          <Button
            className="bg-wedding-gold hover:bg-wedding-brown text-white font-medium px-4 py-2 rounded-md transition-colors mb-6"
            onClick={() => window.open(directionsUrl, '_blank')}
          >
            <Icon name="Navigation" className="mr-2" size={16} />
            Построить маршрут
          </Button>
        </div>
      )}
      
      <div className="relative h-[600px] w-full">
        <iframe
          src={mapUrl}
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта места проведения"
        ></iframe>
      </div>
      
      {hideText && (
        <div className="absolute bottom-6 right-6 z-10">
          <Button
            className="bg-wedding-gold hover:bg-wedding-brown text-white font-medium px-4 py-2 rounded-md transition-colors shadow-md"
            onClick={() => window.open(directionsUrl, '_blank')}
          >
            <Icon name="Navigation" className="mr-2" size={16} />
            <span className="sr-only">Построить маршрут</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default LocationMap;
