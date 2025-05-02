
import PageLayout from "@/components/wedding/PageLayout";
import PageHeader from "@/components/wedding/PageHeader";
import EventDetailsCard from "@/components/wedding/EventDetailsCard";
import StoryCard from "@/components/wedding/StoryCard";
import RSVPForm from "@/components/wedding/RSVPForm";
import ContactCard from "@/components/wedding/ContactCard";
import { WEDDING_CONFIG } from "@/components/wedding/constants";

const WeddingInvitation = () => {
  const { couple, eventDetails, story, rsvp, contacts } = WEDDING_CONFIG;

  return (
    <PageLayout>
      <PageHeader 
        coupleNames={couple.names} 
        subtitle={couple.subtitle} 
        date={couple.date} 
      />
      
      <EventDetailsCard 
        title={eventDetails.title}
        description={eventDetails.description}
        details={eventDetails.items}
      />
      
      <StoryCard 
        title={story.title}
        paragraphs={story.paragraphs}
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
