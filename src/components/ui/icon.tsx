
import React from "react";
import * as LucideIcons from "lucide-react";

export type IconProps = {
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  fallback?: string;
};

const Icon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = ({
  name,
  color,
  size = 24,
  strokeWidth = 2,
  className = "",
  fallback = "Circle",
  ...props
}) => {
  // Check if the icon exists in lucide-react
  const LucideIcon = LucideIcons[name as keyof typeof LucideIcons] || 
                     LucideIcons[fallback as keyof typeof LucideIcons];

  if (!LucideIcon) {
    console.warn(`Icon ${name} not found and fallback ${fallback} also not found.`);
    return null;
  }

  return (
    <LucideIcon
      color={color}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
};

export default Icon;
