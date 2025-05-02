
import PageLayout from "@/components/wedding/PageLayout";
import EventDetailsCard from "@/components/wedding/EventDetailsCard";
import RSVPForm from "@/components/wedding/RSVPForm";
import ContactCard from "@/components/wedding/ContactCard";
import LocationMap from "@/components/wedding/LocationMap";
import { WEDDING_CONFIG } from "@/components/wedding/constants";

const WeddingInvitation = () => {
  const { eventDetails, rsvp, contacts, location } = WEDDING_CONFIG;

  return (
    <PageLayout>
      <div className="relative mb-12">
        <div className="w-full max-w-lg mx-auto">
          <img 
            src="https://cdn.poehali.dev/files/f598e8f8-ed07-41de-8b47-7f4972f880d7.png" 
            alt="Свадебное приглашение" 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      
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
