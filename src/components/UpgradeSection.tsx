import React from "react";

const UpgradeSection = () => {
  return (
    <div className="p-8">
      <h2 className="text-amber-500 text-2xl font-bold text-center mb-8">
        Модернизация оружия
      </h2>
      
      <div className="flex items-center justify-between gap-8">
        <div className="w-1/3">
          <div className="p-4 bg-amber-500/80 rounded-md">
            <h3 className="text-black font-bold mb-2 text-center">
              Выберите до 5 предметов на апгрейд
            </h3>
            <div className="h-56 bg-black/30 rounded-md flex items-center justify-center">
              <img 
                src="/placeholder.svg" 
                alt="Weapon Selection" 
                className="h-40 object-contain opacity-60" 
              />
            </div>
          </div>
        </div>
        
        <div className="w-1/3 flex flex-col items-center">
          <div className="relative w-64 h-64">
            <div className="w-full h-full rounded-full border-4 border-amber-500/50 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-yellow-500 to-green-500 opacity-30"></div>
              <div className="absolute w-1 h-1/2 bg-amber-500 top-0 left-1/2 -ml-0.5 origin-bottom transform rotate-0 transition-all z-10"></div>
              <div className="relative z-20 w-3/4 h-3/4 rounded-full bg-siteDark flex items-center justify-center">
                <div className="text-white text-lg font-bold">50%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-1/3">
          <div className="p-4 bg-amber-500/80 rounded-md">
            <h3 className="text-black font-bold mb-2 text-center">
              Выберите оружие, которое хотите получить
            </h3>
            <div className="h-56 bg-black/30 rounded-md flex items-center justify-center">
              <img 
                src="/placeholder.svg" 
                alt="Target Weapon" 
                className="h-40 object-contain opacity-60" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeSection;
