
import { WEDDING_CONFIG } from "./constants";

interface PageHeaderProps {
  showImage?: boolean;
}

const PageHeader = ({ showImage = false }: PageHeaderProps) => {
  const { couple } = WEDDING_CONFIG;

  return (
    <div className="text-center mb-10 py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-dancing text-wedding-gold mb-4">
        {couple.names}
      </h1>
      <p className="text-xl font-playfair text-wedding-brown mb-6">
        {couple.subtitle}
      </p>
      <p className="text-2xl font-dancing text-wedding-brown mb-4">
        {couple.inviteText}
      </p>
      <p className="text-xl font-playfair text-wedding-gold font-semibold">
        {couple.fullDate}
      </p>
    </div>
  );
};

export default PageHeader;
