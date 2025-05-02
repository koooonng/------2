
import { Separator } from "@/components/ui/separator";

type PageHeaderProps = {
  coupleNames: string;
  subtitle: string;
  date: string;
};

const PageHeader = ({ coupleNames, subtitle, date }: PageHeaderProps) => {
  return (
    <div className="text-center mb-16 mt-8 animate-fade-in">
      <h1 className="font-serif text-5xl md:text-6xl text-[#6E59A5] mb-4">{coupleNames}</h1>
      <p className="text-xl text-[#8E9196] italic">{subtitle}</p>
      <div className="mt-8 flex items-center justify-center">
        <Separator className="w-24 bg-[#d6bcfa]" />
        <span className="mx-4 text-2xl text-[#7E69AB]">{date}</span>
        <Separator className="w-24 bg-[#d6bcfa]" />
      </div>
    </div>
  );
};

export default PageHeader;
