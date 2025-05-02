
import PageLayout from "@/components/wedding/PageLayout";
import WeddingPhotos from "@/components/wedding/WeddingPhotos";
import { WEDDING_CONFIG } from "@/components/wedding/constants";

const WeddingInvitation = () => {
  const { location, contacts } = WEDDING_CONFIG;
  const coordinator = contacts.people.find(p => p.name === "Аргине") || 
                      { name: "Аргине", phone: "+7 927(695)84-58" };

  return (
    <PageLayout>
      <WeddingPhotos 
        coupleImage="https://cdn.poehali.dev/files/a9f095c0-ade1-4a62-a865-da08d8411b34.png"
        dressCodeImage="https://cdn.poehali.dev/files/8fdca835-b1a4-43e7-91bc-62b9a3d0aa57.png"
        locationImage="https://cdn.poehali.dev/files/bd902f33-0c9b-4fce-802e-71a8bedd3d17.png" 
        footnoteImage="https://cdn.poehali.dev/files/1cf66902-0be4-4fc7-9a64-d2d26d774c47.png"
        locationDetails={{
          address: location.address,
          venueName: location.venueTitle,
          // Чистая карта, как было изначально
          mapUrl: location.mapUrl,
          directionsUrl: location.directionsUrl
        }}
        coordinatorContact={coordinator}
      />
    </PageLayout>
  );
};

export default WeddingInvitation;
