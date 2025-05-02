
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

interface LocationMapProps {
  title: string;
  address: string;
  venueTitle: string;
  mapUrl: string;
  directionsUrl: string;
  image?: string;
  coupleImage?: string;
  dressCodeImage?: string;
  footnoteImage?: string;
}

const LocationMap = ({
  title,
  address,
  venueTitle,
  mapUrl,
  directionsUrl,
  image,
  coupleImage,
  dressCodeImage,
  footnoteImage
}: LocationMapProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Add font loading
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Dancing+Script:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    link.onload = () => setLoaded(true);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="flex flex-col gap-12">
      {coupleImage && (
        <div className="mb-8 text-center">
          <img 
            src={coupleImage} 
            alt="Приглашение на свадьбу" 
            className="max-w-full h-auto mx-auto"
          />
        </div>
      )}

      {dressCodeImage && (
        <div className="mb-8 text-center">
          <img 
            src={dressCodeImage} 
            alt="Дресс-код" 
            className="max-w-full h-auto mx-auto"
          />
        </div>
      )}

      <div className="mb-12 rounded-lg overflow-hidden shadow-lg border border-wedding-light-beige">
        <div className="bg-white p-6 text-center">
          <h2 className="text-3xl font-dancing text-[#C19A70] mb-4">
            {title}
          </h2>
          
          <div className="flex flex-col items-center justify-center mb-6 text-[#A97B50]">
            <p className="text-lg font-playfair mb-3 max-w-2xl mx-auto">
              Не площадка делает свадьбу необычной а люди, которые на ней находятся!
            </p>
            <h3 className="text-xl font-playfair font-medium mb-2">
              {venueTitle}
            </h3>
            <p className="text-lg font-playfair">
              {address}
            </p>
          </div>
          
          {image && (
            <div className="mb-6">
              <img 
                src={image} 
                alt={venueTitle} 
                className="max-w-full h-auto mx-auto rounded-md"
              />
            </div>
          )}
          
          <Button
            className="bg-[#C19A70] hover:bg-[#A97B50] text-white font-medium px-4 py-2 rounded-md transition-colors mb-6"
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
      
      {footnoteImage && (
        <div className="mt-8 text-center">
          <img 
            src={footnoteImage} 
            alt="Подсказки и информация" 
            className="max-w-full h-auto mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default LocationMap;
