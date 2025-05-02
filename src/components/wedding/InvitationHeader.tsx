
import { useEffect, useState } from "react";

type InvitationHeaderProps = {
  title: string;
  description: string;
  confirmationText: string;
  confirmationDate: string;
};

const InvitationHeader = ({
  title,
  description,
  confirmationText,
  confirmationDate
}: InvitationHeaderProps) => {
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
    <div className="relative mb-12 p-6 rounded-lg shadow-md bg-white/90 backdrop-blur-sm border border-[#F5DEB3]">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl text-[#D4AF37] font-['Dancing_Script'] mb-8">
          {title}
        </h1>
        
        <p className="text-lg md:text-xl text-[#A89070] leading-relaxed font-['Playfair_Display'] mb-10 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
      
      <div className="flex justify-center items-center my-8">
        <div className="grid grid-cols-5 w-full max-w-lg">
          <div className="h-20 bg-[#E5D6C5]"></div>
          <div className="h-20 bg-[#C19A70]"></div>
          <div className="h-20 bg-[#A97B50]"></div>
          <div className="h-20 bg-[#DBCFC2]"></div>
          <div className="h-20 bg-[#5C3A21]"></div>
        </div>
      </div>
      
      <div className="text-center mt-10">
        <p className="text-xl text-[#A89070] font-['Playfair_Display'] mb-2">
          {confirmationText}
        </p>
        <p className="text-xl font-semibold text-[#D4AF37] font-['Dancing_Script']">
          {confirmationDate}
        </p>
      </div>
    </div>
  );
};

export default InvitationHeader;
