
import PageLayout from "@/components/wedding/PageLayout";
import EventDetailsCard from "@/components/wedding/EventDetailsCard";
import RSVPForm from "@/components/wedding/RSVPForm";
import ContactCard from "@/components/wedding/ContactCard";
import LocationMap from "@/components/wedding/LocationMap";
import InvitationHeader from "@/components/wedding/InvitationHeader";
import PageHeader from "@/components/wedding/PageHeader";
import { WEDDING_CONFIG } from "@/components/wedding/constants";

const WeddingInvitation = () => {
  const { eventDetails, rsvp, contacts, location, dressCode } = WEDDING_CONFIG;

  return (
    <PageLayout>
      <PageHeader />
      
      <InvitationHeader 
        title="Дресс-код"
        description="Для нас главное-ваше присутствие! Но мы будем рады, если в своих нарядах вы поддержите цветовую гамму и стиль нашей свадьбы."
        confirmationText="Будем очень рады видеть вас! Просим подтвердить свое присутствие на торжество до"
        confirmationDate="1.06.2025"
      />
      
      <EventDetailsCard 
        title={eventDetails.title}
        description={eventDetails.description}
        details={eventDetails.items}
      />
      
      <LocationMap 
        title={location.title}
        address={location.address}
        venueTitle={location.venueTitle}
        mapUrl={location.mapUrl}
        directionsUrl={location.directionsUrl}
      />
      
      <RSVPForm deadline={rsvp.deadline} />
      
      <ContactCard 
        title={contacts.title}
        contacts={contacts.people}
        footerText={contacts.footerText}
      />
    </PageLayout>
  );
};

export default WeddingInvitation;
