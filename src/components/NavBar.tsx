import { Link } from "react-router-dom";
import { LineChart, FileContract, Gift, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-siteDark to-siteDarkPurple border-b border-amber-500/30">
      <div className="flex items-center">
        <Link to="/" className="text-amber-500 font-bold text-3xl mr-8">
          ISAGORDROP
        </Link>
        
        <div className="flex gap-6">
          <Link to="/upgrade" className="flex items-center gap-2 text-gray-200 hover:text-amber-500 transition-colors">
            <LineChart size={20} />
            <span>Upgrade</span>
          </Link>
          
          <Link to="/contract" className="flex items-center gap-2 text-gray-200 hover:text-amber-500 transition-colors">
            <FileContract size={20} />
            <span>Contract</span>
          </Link>
          
          <Link to="/prize-draw" className="flex items-center gap-2 text-gray-200 hover:text-amber-500 transition-colors">
            <Gift size={20} />
            <span>Prize draw</span>
          </Link>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-white">
          <User size={20} className="text-amber-400" />
          <span className="text-amber-400">6543</span>
        </div>
        
        <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400">
          <img src="/favicon.svg" alt="Steam" className="w-5 h-5 mr-2" />
          ВОЙТИ ЧЕРЕЗ STEAM
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
