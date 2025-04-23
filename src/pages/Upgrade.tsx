import React from "react";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import UpgradeSection from "@/components/UpgradeSection";

const Upgrade = () => {
  return (
    <div className="min-h-screen flex flex-col bg-siteDark text-white">
      <NavBar />
      
      <div className="flex flex-1">
        <SideBar />
        
        <div className="flex-1 overflow-y-auto">
          <UpgradeSection />
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
