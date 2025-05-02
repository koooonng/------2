
import PageLayout from "@/components/wedding/PageLayout";
import WeddingPhotos from "@/components/wedding/WeddingPhotos";

const WeddingInvitation = () => {
  return (
    <PageLayout>
      <WeddingPhotos 
        coupleImage="https://cdn.poehali.dev/files/a9f095c0-ade1-4a62-a865-da08d8411b34.png"
        dressCodeImage="https://cdn.poehali.dev/files/8fdca835-b1a4-43e7-91bc-62b9a3d0aa57.png"
        locationImage="https://cdn.poehali.dev/files/bd902f33-0c9b-4fce-802e-71a8bedd3d17.png"
        footnoteImage="https://cdn.poehali.dev/files/1cf66902-0be4-4fc7-9a64-d2d26d774c47.png"
      />
    </PageLayout>
  );
};

export default WeddingInvitation;
