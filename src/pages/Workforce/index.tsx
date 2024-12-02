import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import VacancyCard from "./vacancy";

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
  
  let navigate = useNavigate(); 
  const handleClick = () => {
    let path = "/vacancy_open"; 
    navigate(path);
  };

  return (
    <main className="relative pt-24 pb-24 w-full bg-cover bg-center bg-no-repeat min-h-full bg-[url('/images/background/background.png')] bg-cover bg-[#5200FF64]">
      <nav className="fixed pt-5 pb-5 w-full bg-cover bg-center bg-no-repeat top-0 left-0 right-0 bg-[url('/images/background/header_bg.png')] rounded-b-3xl">
        <div className="flex justify-center rounded-lg overflow-hidden shadow-lg">
          <button
            className={`custom-button px-4 py-2 text-white ${activeIndex === 0 ? 'bg-dark-blue' : 'bg-gray-700 hover:bg-gray-600'} rounded-l-lg focus:outline-none`}
            onClick={() => handleButtonClick(0)}
          >
            Ищу работу
          </button>
          <button
            className={`custom-button px-4 py-2 text-white ${activeIndex === 1 ? 'bg-dark-blue' : 'bg-gray-700 hover:bg-gray-600'} rounded-r-lg focus:outline-none`}
            onClick={() => handleButtonClick(1)}
          >
            Ищу сотрудника
          </button>
        </div>
        <div className="flex justify-center pt-2">
          <h1 className="text-white font-bold text-2xl">Вакансии</h1>
        </div>
      </nav>
      <div className="flex flex-col px-4">
        <div className="text-sm text-[#ffffffc0] font-semibold mt-10 ">
          {activeIndex === 0 && (
            <div className="items-center">
                <VacancyCard
                    clicked={handleClick}
                    title="Front-end разработчик"
                    description="Для разработки интерфейсов веб-приложений требуется front-end разработчик с опытом работы в Vue.js и Tailwind CSS. Постоянная удалённая работа, возможны краткосрочные проекты."
                    type="Удалённая работа"
                />
                <VacancyCard
                    clicked={handleClick}
                    title="Back-end разработчик"
                    description="Требуется back-end разработчик для создания и поддержки серверной части веб-приложений. Необходим опыт работы с Node.js и MongoDB. Постоянная удалённая работа, возможны краткосрочные проекты."
                    type="Удалённая работа"
                />
                <VacancyCard
                    clicked={handleClick}
                    title="Back-end разработчик"
                    description="Требуется back-end разработчик для создания и поддержки серверной части веб-приложений. Необходим опыт работы с Node.js и MongoDB. Постоянная удалённая работа, возможны краткосрочные проекты."
                    type="Удалённая работа"
                />    
            </div>
          )}
          {activeIndex === 1 && (
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