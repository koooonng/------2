
import PageLayout from "@/components/wedding/PageLayout";
import LocationMap from "@/components/wedding/LocationMap";
import PageHeader from "@/components/wedding/PageHeader";
import { WEDDING_CONFIG } from "@/components/wedding/constants";

const WeddingInvitation = () => {
  const { location } = WEDDING_CONFIG;

  return (
    <PageLayout>
      <PageHeader />
      
      <LocationMap 
        title={location.title}
        address={location.address}
        venueTitle={location.venueTitle}
        mapUrl={location.mapUrl}
        directionsUrl={location.directionsUrl}
      />
    </PageLayout>
  );
};

export default WeddingInvitation;
