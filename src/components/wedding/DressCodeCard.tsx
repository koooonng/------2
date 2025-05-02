
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ColorChip = {
  color: string;
  label?: string;
};

type DressCodeCardProps = {
  title: string;
  description: string;
  colorPalette: ColorChip[];
  confirmationText: string;
  confirmationDate: string;
};

const DressCodeCard = ({ 
  title, 
  description, 
  colorPalette,
  confirmationText,
  confirmationDate
}: DressCodeCardProps) => {
  return (
    <Card className="mb-12 border-[#F5DEB3] bg-white/70 backdrop-blur-sm shadow-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-[#A89070]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-[#A89070] text-lg leading-relaxed">{description}</p>
        </div>
        
        <div className="flex justify-center items-center my-8">
          {colorPalette.map((chip, index) => (
            <div 
              key={index} 
              className="h-48 w-full" 
              style={{ backgroundColor: chip.color }}
              title={chip.label}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-[#A89070] text-lg leading-relaxed mb-2">{confirmationText}</p>
          <p className="text-[#A89070] text-lg font-semibold">{confirmationDate}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DressCodeCard;
