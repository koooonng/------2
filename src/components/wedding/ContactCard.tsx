
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

type Contact = {
  name: string;
  phone: string;
};

type ContactCardProps = {
  title: string;
  contacts: Contact[];
  footerText: string;
};

const ContactCard = ({ title, contacts, footerText }: ContactCardProps) => {
  return (
    <Card className="mb-12 border-[#d6bcfa] bg-white/70 backdrop-blur-sm shadow-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-[#1A1F2C]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center gap-8">
        {contacts.map((contact, index) => (
          <div key={index} className="text-center">
            <h3 className="font-medium mb-2">{contact.name}</h3>
            <p className="text-[#8E9196]">{contact.phone}</p>
          </div>
        ))}
      </CardContent>
      {footerText && (
        <CardFooter className="flex justify-center">
          <p className="text-[#8E9196] text-sm">{footerText}</p>
        </CardFooter>
      )}
    </Card>
  );
};

export default ContactCard;
