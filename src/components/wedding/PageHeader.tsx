
import { Separator } from "@/components/ui/separator";

type PageHeaderProps = {
  coupleNames: string;
  subtitle: string;
  date: string;
};

const PageHeader = ({ coupleNames, subtitle, date }: PageHeaderProps) => {
  return (
    <div className="text-center mb-16 mt-8 animate-fade-in">
      <h1 className="font-serif text-5xl md:text-6xl text-[#A89070] mb-4">{coupleNames}</h1>
      <p className="text-xl text-[#59534D] italic">{subtitle}</p>
      <div className="mt-8 flex items-center justify-center">
        <Separator className="w-24 bg-[#F5DEB3]" />
        <span className="mx-4 text-2xl text-[#A89070]">{date}</span>
        <Separator className="w-24 bg-[#F5DEB3]" />
      </div>
    </div>
  );
};

export default PageHeader;
