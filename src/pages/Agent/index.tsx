import { useState, useEffect} from "react";
import TonCard from "./toncard";

const Home = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [activeIndex, setActiveIndex] = useState<number>(0);
 
  useEffect(()=>{
    setCurrentTab(currentTab);
  },[])
  
  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
    setCurrentTab(index === 0 ? "" : index === 1 ? "" : "");
  };

  return (
    <main className="relative pt-24 pb-24 w-full bg-cover bg-center bg-no-repeat min-h-full bg-[url('/images/background/background.png')] bg-cover bg-[#5200FF64]">
      <nav className="fixed pt-5 pb-5 w-full bg-cover bg-center bg-no-repeat top-0 left-0 right-0 bg-[url('/images/background/header_bg.png')] rounded-b-3xl">
        <div className="flex justify-center rounded-lg overflow-hidden shadow-lg w-70">
          <button
            className={`custom-button px-2 py-2 text-white ${activeIndex === 0 ? 'bg-dark-blue' : 'bg-gray-700 hover:bg-gray-600'} rounded-l-lg focus:outline-none`}
            onClick={() => handleButtonClick(0)}
          >
            Пополнить 
          </button>
          <button
            className={`custom-button px-2 py-2 text-white ${activeIndex === 1 ? 'bg-dark-blue' : 'bg-gray-700 hover:bg-gray-600'} rounded-none focus:outline-none`}
            onClick={() => handleButtonClick(1)}
          >
            Вывести
          </button>
          <button
            className={`custom-button px-2 py-2 text-white ${activeIndex === 2 ? 'bg-dark-blue' : 'bg-gray-700 hover:bg-gray-600'} rounded-none focus:outline-none`}
            onClick={() => handleButtonClick(2)}
          >
            История
          </button>
          <button
            className={`custom-button px-2 py-2 text-white ${activeIndex === 3 ? 'bg-dark-blue' : 'bg-gray-700 hover:bg-gray-600'} rounded-r-lg focus:outline-none`}
            onClick={() => handleButtonClick(3)}
          >
            Статистика
          </button>
        </div>
        <div className="flex justify-center mt-2">
          <h1 className="text-white font-bold text-2xl">Финансы</h1>
        </div>
      </nav>
      <div className="flex flex-col px-4">
        <div className="text-sm text-[#ffffffc0] font-semibold mt-10 ">
          {activeIndex === 0 && (
            <div className="flex justify-center items-center">
              <TonCard 
                ton_amount={250}
                usdt_amount={2}
              />            
            </div>
          )}
          {activeIndex === 1 && (
            <div className="flex justify-center items-center">
              <div>
                
              </div>
            </div>
          )}
          {activeIndex === 2 && (
            <div className="flex justify-center items-center">
              <div>
                
              </div>
            </div>
          )}
          {activeIndex === 3 && (
            <div className="flex justify-center items-center">
              <div>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </main>

  );
};

export default Home;