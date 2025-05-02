
import PageLayout from "@/components/wedding/PageLayout";
import LocationMap from "@/components/wedding/LocationMap";
import { WEDDING_CONFIG } from "@/components/wedding/constants";

const WeddingInvitation = () => {
  const { location } = WEDDING_CONFIG;

  return (
    <PageLayout>
      <LocationMap 
        title=""
        address=""
        venueTitle=""
        mapUrl={location.mapUrl}
        directionsUrl={location.directionsUrl}
        hideText={true}
      />
    </PageLayout>
  );
};

export default WeddingInvitation;
