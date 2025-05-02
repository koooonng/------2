
import { useEffect } from "react";

interface WeddingPhotosProps {
  coupleImage?: string;
  dressCodeImage?: string;
  locationImage?: string;
  footnoteImage?: string;
}

const WeddingPhotos = ({
  coupleImage,
  dressCodeImage,
  locationImage,
  footnoteImage
}: WeddingPhotosProps) => {
  useEffect(() => {
    // Add font loading to maintain font consistency even though we don't show text
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Dancing+Script:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

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
      
      {locationImage && (
        <div className="w-full max-w-2xl">
          <img 
            src={locationImage} 
            alt="Место проведения" 
            className="w-full h-auto"
          />
        </div>
      )}
      
      {footnoteImage && (
        <div className="w-full max-w-2xl">
          <img 
            src={footnoteImage} 
            alt="Дополнительная информация" 
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default WeddingPhotos;
