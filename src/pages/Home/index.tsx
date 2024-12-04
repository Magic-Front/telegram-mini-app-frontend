import { useState, useEffect } from "react"; 
import Cad from "./cad";
import OngoingTask from "./ongoing";

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
              Новые
            </button>
            <button
              className={`px-5 py-2 text-white text-sm transition-all duration-300 ${
                activeIndex === 1
                  ? "bg-[#314e89] rounded-[10px]"
                  : "hover:bg-[rgba(255,255,255,0.1)]"
              }`}
              onClick={() => handleButtonClick(1)}
            >
              В процессе
            </button>
            <button
              className={`px-5 py-2 text-white text-sm transition-all duration-300 ${
                activeIndex === 2
                  ? "bg-[#314e89] rounded-[10px]"
                  : "hover:bg-[rgba(255,255,255,0.1)]"
              }`}
              onClick={() => handleButtonClick(2)}
            >
              История
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <h1 className="text-white font-bold text-2xl">Задания</h1>
        </div>
      </nav>

      {/* Tab Content */}
      <div className="flex flex-col px-4">
        <div className="text-sm text-[#ffffffc0] font-semibold mt-10 ">
          {activeIndex === 0 && (
            <div className="flex justify-center items-center">
              <div>
                <Cad
                  title="Перевести на английский договор"
                  description="на разработку ПО на английский язык, сделать двуязычную версию договора, чтобы слева был русский, справа — анг..."
                  reward={1500}
                  timeLeft="1д 3ч"
                />
                <Cad
                  title="Разработка дизайна логотипа и этике"
                  description="Разработка дизайна логотипа и этикетки. Разработка дизайна логотипа и этикетки. Несколько вариантов на выбор. Формат фотошоп и корел."
                  reward={1000}
                  timeLeft="5ч"
                />
                <Cad
                  title="Создание сайта-визитки"
                  description="Разработка простой одностраничной визитки с информацией о компании. Адаптивный дизайн, включающий контакты, краткое описание услуг и карту местоположения."
                  reward={1000}
                  timeLeft="10ч"
                />
              </div>
            </div>
          )}
          {activeIndex === 1 && (
            <div className="flex justify-center items-center">
              <div>
                <OngoingTask
                  imageSrc="/images/avatars/avatar1.png"
                  title="Перевести на английский договор"
                  reward={1500}
                  author="Илья Краснов"
                />
                <OngoingTask
                  imageSrc="/images/avatars/avatar2.png"
                  title="Разработка дизайна логоти..."
                  reward={1000}
                  author="Андрей Васатов"
                />
                <OngoingTask
                  imageSrc="/images/avatars/avatar3.png"
                  title="Создание сайта-визитки"
                  reward={10000000}
                  author="Вася Центр"
                />
                <OngoingTask
                  imageSrc="/images/avatars/avatar4.png"
                  title="Разработка дизайна логоти..."
                  reward={1000}
                  author="Скубиду Сафронов"
                />
              </div>
            </div>
          )}
          {activeIndex === 2 && (
            <div className="flex justify-center items-center">
              <div>
                <OngoingTask
                  imageSrc="/images/avatars/avatar1.png"
                  title="Перевести на английский договор"
                  reward={1500}
                  author="Илья Краснов"
                />
                <OngoingTask
                  imageSrc="/images/avatars/avatar2.png"
                  title="Разработка дизайна логоти..."
                  reward={1000}
                  author="Андрей Васатов"
                />
                <OngoingTask
                  imageSrc="/images/avatars/avatar3.png"
                  title="Создание сайта-визитки"
                  reward={10000000}
                  author="Вася Центр"
                />
                <OngoingTask
                  imageSrc="/images/avatars/avatar4.png"
                  title="Разработка дизайна логоти..."
                  reward={1000}
                  author="Скубиду Сафронов"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
