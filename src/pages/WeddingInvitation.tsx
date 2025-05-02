
import PageLayout from "@/components/wedding/PageLayout";
import WeddingPhotos from "@/components/wedding/WeddingPhotos";
import { WEDDING_CONFIG } from "@/components/wedding/constants";

const WeddingInvitation = () => {
  const { location, contacts } = WEDDING_CONFIG;
  const coordinator = contacts.people.find(p => p.name === "Аргине") || 
                      { name: "Аргине", phone: "+7 927(695)84-58" };

  // Измененные URL без "poehali.dev"
  const imageBaseUrl = "https://wedding-karina-konstantin.ru/images";

  return (
    <PageLayout>
      <WeddingPhotos 
        coupleImage={`${imageBaseUrl}/couple.png`}
        dressCodeImage={`${imageBaseUrl}/dress-code.png`}
        locationImage={`${imageBaseUrl}/location.png`} 
        footnoteImage={`${imageBaseUrl}/footnote.png`}
        locationDetails={{
          address: location.address,
          venueName: location.venueTitle,
          mapUrl: location.mapUrl,
          directionsUrl: location.directionsUrl
        }}
        coordinatorContact={coordinator}
      />
    </PageLayout>
  );
};

export default WeddingInvitation;
