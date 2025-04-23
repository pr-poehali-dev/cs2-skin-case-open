
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

const PrizeDraw = () => {
  return (
    <div className="flex flex-col min-h-screen bg-siteDark">
      <NavBar />
      <div className="flex flex-1">
        <SideBar />
        <div className="flex-1 p-4">
          <div className="bg-gradient-to-b from-siteDarkPurple to-siteDark rounded-lg p-6 border border-amber-500/20">
            <h1 className="text-3xl font-bold text-amber-500 mb-8">Розыгрыш призов</h1>
            
            <div className="grid gap-8">
              <div className="bg-black/30 rounded-lg p-6 border border-amber-500/20">
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">Ежедневные розыгрыши</h2>
                <p className="text-gray-300 mb-4">Участвуйте в ежедневных розыгрышах ценных скинов для CS2!</p>
                
                <div className="flex justify-between items-center bg-gradient-to-r from-amber-900/40 to-amber-800/40 rounded-lg p-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-amber-300">AWP | Драконий вихрь</h3>
                    <p className="text-amber-100">Розыгрыш через: 2ч 43мин</p>
                  </div>
                  <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 px-4 py-2 rounded text-white font-semibold">
                    Участвовать
                  </button>
                </div>
                
                <div className="flex justify-between items-center bg-gradient-to-r from-amber-900/40 to-amber-800/40 rounded-lg p-4">
                  <div>
                    <h3 className="text-xl font-semibold text-amber-300">M4A1-S | Механический вектор</h3>
                    <p className="text-amber-100">Розыгрыш через: 5ч 12мин</p>
                  </div>
                  <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 px-4 py-2 rounded text-white font-semibold">
                    Участвовать
                  </button>
                </div>
              </div>
              
              <div className="bg-black/30 rounded-lg p-6 border border-amber-500/20">
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">Еженедельный турнир</h2>
                <p className="text-gray-300 mb-4">Присоединяйтесь к еженедельному турниру и выигрывайте ножи и перчатки!</p>
                
                <div className="bg-gradient-to-r from-amber-900/40 to-amber-800/40 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-amber-300 mb-2">Главный приз: Керамбит | Градиент</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-amber-100">Участников: 1243</p>
                    <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 px-4 py-2 rounded text-white font-semibold">
                      Вступить в турнир
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizeDraw;
