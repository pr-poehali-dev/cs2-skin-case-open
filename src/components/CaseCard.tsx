import React from "react";
import { cn } from "@/lib/utils";

interface CaseCardProps {
  title: string;
  price: number;
  image: string;
  className?: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ title, price, image, className }) => {
  return (
    <div className={cn("case-card relative rounded-lg overflow-hidden flex flex-col items-center p-2", className)}>
      <div className="case-battle text-sm font-bold px-2 rounded-md mb-1">
        CASE BATTLE
      </div>
      
      <div className="w-full h-48 relative">
        <img 
          src={image || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover rounded-md" 
        />
      </div>
      
      <div className="w-full mt-2 text-center">
        <h3 className="text-white text-lg font-medium mb-1">{title}</h3>
        <div className="bg-amber-500 text-white font-bold py-1 px-3 rounded-md inline-block">
          {price} ₽
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
