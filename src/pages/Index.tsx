import React from "react";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import CaseCard from "@/components/CaseCard";

// Временный массив данных для кейсов
const cases = [
  {
    id: "1",
    title: "ОФФНУЛ ИЛИ ДУМАЕТЕ?",
    price: 99,
    image: "https://cdn.poehali.dev/files/310ac99e-f076-4858-8e95-ab80bead85d2.jpg"
  },
  {
    id: "2",
    title: "МЫ НЕ КУРИМ!",
    price: 125,
    image: "https://cdn.poehali.dev/files/310ac99e-f076-4858-8e95-ab80bead85d2.jpg"
  },
  {
    id: "3",
    title: "ЗА ВАС И ЗА КАВКАЗ",
    price: 555,
    image: "https://cdn.poehali.dev/files/310ac99e-f076-4858-8e95-ab80bead85d2.jpg"
  },
  {
    id: "4",
    title: "ВЕНОМ ВЕНОМ",
    price: 999,
    image: "https://cdn.poehali.dev/files/310ac99e-f076-4858-8e95-ab80bead85d2.jpg"
  },
  {
    id: "5",
    title: "ЗДОРОВЫЙ СОН ЗАЛОГ УСПЕХА",
    price: 19,
    image: "https://cdn.poehali.dev/files/310ac99e-f076-4858-8e95-ab80bead85d2.jpg"
  },
  {
    id: "6",
    title: "ТРУДНЫЙ ВЫБОР",
    price: 79,
    image: "https://cdn.poehali.dev/files/310ac99e-f076-4858-8e95-ab80bead85d2.jpg"
  },
  {
    id: "7",
    title: "ЛАМПОВАЯ НИША",
    price: 299,
    image: "https://cdn.poehali.dev/files/310ac99e-f076-4858-8e95-ab80bead85d2.jpg"
  },
  {
    id: "8",
    title: "ЧУПЧИК",
    price: 499,
    image: "https://cdn.poehali.dev/files/310ac99e-f076-4858-8e95-ab80bead85d2.jpg"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-siteDark text-white">
      <NavBar />
      
      <div className="flex flex-1">
        <SideBar />
        
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((caseItem) => (
              <CaseCard
                key={caseItem.id}
                title={caseItem.title}
                price={caseItem.price}
                image={caseItem.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
