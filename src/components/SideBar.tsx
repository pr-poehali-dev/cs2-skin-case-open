import React from "react";

type WeaponItem = {
  id: string;
  name: string;
  skin: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  image: string;
};

const weapons: WeaponItem[] = [
  {
    id: "1",
    name: "MAC-10",
    skin: "Янтарный градиент",
    rarity: "rare",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Glock-18",
    skin: "Пиксельный камуфляж",
    rarity: "common",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Tec-9",
    skin: "Литгуль",
    rarity: "rare",
    image: "/placeholder.svg"
  },
  {
    id: "4",
    name: "StatTrak™ P90",
    skin: "Неглубокий могила",
    rarity: "epic",
    image: "/placeholder.svg"
  },
  {
    id: "5",
    name: "AWP",
    skin: "Неонуар",
    rarity: "legendary",
    image: "/placeholder.svg"
  },
  {
    id: "6",
    name: "P250",
    skin: "Темные филигрань",
    rarity: "rare",
    image: "/placeholder.svg"
  },
  {
    id: "7",
    name: "CZ75-Auto",
    skin: "Виктория",
    rarity: "epic",
    image: "/placeholder.svg"
  },
  {
    id: "8",
    name: "StatTrak™ AWP",
    name: "Мортис",
    rarity: "legendary",
    image: "/placeholder.svg"
  }
];

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "common":
      return "from-blue-800 to-blue-900";
    case "rare":
      return "from-purple-800 to-purple-900";
    case "epic":
      return "from-pink-800 to-pink-900";
    case "legendary":
      return "from-amber-700 to-red-900";
    default:
      return "from-gray-700 to-gray-800";
  }
};

const SideBar = () => {
  return (
    <div className="w-64 bg-siteDark/90 border-r border-amber-500/30 overflow-y-auto h-[calc(100vh-60px)]">
      {weapons.map((weapon) => (
        <div
          key={weapon.id}
          className={`sidebar-item p-4 border-b border-gray-800 flex flex-col items-center cursor-pointer hover:bg-siteLightPurple/20 transition-all duration-200`}
        >
          <div className={`w-full h-24 flex justify-center items-center bg-gradient-to-b ${getRarityColor(weapon.rarity)} rounded-md mb-2 p-2`}>
            <img
              src={weapon.image}
              alt={weapon.name}
              className="h-20 object-contain"
            />
          </div>
          <div className="text-center">
            <div className="text-amber-400 font-medium">{weapon.name}</div>
            <div className="text-gray-400 text-sm">{weapon.skin}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
