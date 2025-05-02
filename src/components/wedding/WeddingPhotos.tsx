
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface LocationDetails {
  venueName: string;
  address: string;
  mapUrl: string;
  directionsUrl: string;
}

interface CoordinatorContact {
  name: string;
  phone: string;
}

interface WeddingPhotosProps {
  coupleImage?: string;
  dressCodeImage?: string;
  locationImage?: string;
  footnoteImage?: string;
  locationDetails?: LocationDetails;
  coordinatorContact?: CoordinatorContact;
}

const WeddingPhotos = ({
  coupleImage,
  dressCodeImage,
  locationImage,
  footnoteImage,
  locationDetails,
  coordinatorContact
}: WeddingPhotosProps) => {
  useEffect(() => {
    // Add font loading
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Dancing+Script:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Функция для прямого перехода на официальный сайт отеля
  const openHotelWebsite = () => {
    window.open('https://realliance.activhotels.ru/?ysclid=ma6r5ss8a6180427940', '_blank');
  };

  return (
    <div className="flex flex-col items-center gap-10">
      {coupleImage && (
        <div className="w-full max-w-2xl">
          <img 
            src={coupleImage} 
            alt="Свадебное приглашение" 
            className="w-full h-auto"
          />
        </div>
      )}
      
      {dressCodeImage && (
        <div className="w-full max-w-2xl">
          <img 
            src={dressCodeImage} 
            alt="Дресс-код" 
            className="w-full h-auto"
          />
        </div>
      )}
      
      {/* Локация */}
      {locationImage && (
        <div className="w-full max-w-2xl">
          <img 
            src={locationImage} 
            alt="Место проведения" 
            className="w-full h-auto"
          />
          
          {locationDetails && (
            <div className="mt-6 p-6 border border-[#C19A70] rounded-md bg-white">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-playfair font-medium text-[#A97B50]">
                    {locationDetails.venueName}
                  </h3>
                  <p className="text-md font-playfair text-[#A97B50]">
                    {locationDetails.address}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    className="bg-[#C19A70] hover:bg-[#A97B50] text-white px-4 py-2 rounded-md transition-colors"
                    onClick={() => window.open(locationDetails.directionsUrl, '_blank')}
                  >
                    <Icon name="Navigation" className="mr-2" size={16} />
                    Как добраться
                  </Button>
                  
                  <Button
                    className="bg-white hover:bg-[#F3EDE4] text-[#A97B50] border border-[#C19A70] px-4 py-2 rounded-md transition-colors"
                    onClick={openHotelWebsite}
                  >
                    <Icon name="Globe" className="mr-2" size={16} />
                    Сайт отеля
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 h-[300px] w-full rounded-md overflow-hidden">
                <iframe
                  src={locationDetails.mapUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта места проведения"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      )}
      
      {footnoteImage && (
        <div className="w-full max-w-2xl">
          <img 
            src={footnoteImage} 
            alt="Дополнительная информация" 
            className="w-full h-auto"
          />
          
          {/* Координатор */}
          {coordinatorContact && (
            <div className="mt-6 p-6 border border-[#C19A70] rounded-md bg-white text-center">
              <h3 className="text-lg font-playfair font-medium text-[#A97B50] mb-2">
                Координатор свадьбы
              </h3>
              <p className="text-md font-playfair text-[#A97B50] mb-2">
                {coordinatorContact.name}
              </p>
              <Button
                className="bg-transparent hover:bg-[#F3EDE4] text-[#C19A70] border border-[#C19A70] px-4 py-2 rounded-md transition-colors"
                onClick={() => window.open(`tel:${coordinatorContact.phone.replace(/\D/g, '')}`)}
              >
                <Icon name="Phone" className="mr-2" size={16} />
                {coordinatorContact.phone}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WeddingPhotos;
