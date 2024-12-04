import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VacancyCard from "./vacancy";

const Home = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    setCurrentTab(currentTab);
  }, []);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
    setCurrentTab(index === 0 ? "" : index === 1 ? "" : "");
  };

  let navigate = useNavigate();
  const handleClick = () => {
    let path = "/vacancy_open";
    navigate(path);
  };

  const handleAddClick = () => {
    let path = "/new_vacancy";
    navigate(path);
  };

  return (
    <main className="relative pt-24 pb-24 w-full bg-cover bg-center bg-no-repeat min-h-full bg-[url('/images/background/background.png')] bg-cover bg-[#5200FF64]">
      <nav className="fixed pt-5 pb-5 w-full bg-cover bg-center bg-no-repeat top-0 left-0 right-0 bg-[url('/images/background/header_bg.png')] rounded-b-3xl">
        {/* Tab Buttons */}
        <div className="flex justify-center items-center mt-3">
          <div className="ml-[30px]">
            <img src="/images/alert.png" />
          </div>
          <div className="flex justify-center h-10 bg-[#1a1f36] rounded-[10px] overflow-hidden w-fit mx-auto border-dark-blue border-[1px]">
            <button
              className={`px-5 py-2 text-white text-sm transition-all duration-300 ${
                activeIndex === 0
                  ? "bg-[#314e89] rounded-[10px]"
                  : "hover:bg-[rgba(255,255,255,0.1)]"
              }`}
              onClick={() => handleButtonClick(0)}
            >
              Ищу работу
            </button>
            <button
              className={`px-5 py-2 text-white text-sm transition-all duration-300 ${
                activeIndex === 1
                  ? "bg-[#314e89] rounded-[10px]"
                  : "hover:bg-[rgba(255,255,255,0.1)]"
              }`}
              onClick={() => handleButtonClick(1)}
            >
              Ищу сотрудника
            </button>
          </div>
          <div className="mr-[30px]">
            <img src="/images/setting.png" />
          </div>
        </div>
        <div className="flex justify-center mt-2">
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
        </div>
      </div>

      {/* Absolute "+" Button */}
      <button
        onClick={handleAddClick}
        className="fixed bottom-28 right-4 bg-blue-600 text-white rounded-lg w-10 h-10 flex items-center justify-center shadow-lg hover:bg-blue transition duration-100"
      >
        <p className="text-white zoom-[1.5]">+</p>
      </button>
    </main>
  );
};

export default Home;
