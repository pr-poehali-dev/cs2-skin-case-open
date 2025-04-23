
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

const Contract = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-siteDark to-siteDarkSecondary">
      <NavBar />
      
      <div className="flex flex-1">
        <SideBar />
        
        <div className="flex-1 p-4">
          <div className="bg-siteDarkTertiary rounded-lg shadow-lg border border-amber-500/20 p-6 mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold text-amber-500 mb-6 text-center">Контракты обмена</h1>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-siteDark rounded-lg p-4 border border-amber-500/30">
                <h2 className="text-xl font-bold text-amber-400 mb-4">Создание контракта</h2>
                <p className="text-gray-300 mb-4">Выберите предметы для обмена и создайте контракт с другими игроками.</p>
                <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold py-2 px-6 rounded-md">
                  Создать контракт
                </button>
              </div>
              
              <div className="bg-siteDark rounded-lg p-4 border border-amber-500/30">
                <h2 className="text-xl font-bold text-amber-400 mb-4">Активные контракты</h2>
                <div className="text-gray-400 text-center py-10">
                  У вас пока нет активных контрактов
                </div>
              </div>
              
              <div className="bg-siteDark rounded-lg p-4 border border-amber-500/30">
                <h2 className="text-xl font-bold text-amber-400 mb-4">История контрактов</h2>
                <div className="text-gray-400 text-center py-10">
                  История контрактов пуста
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
