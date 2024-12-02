import { useState, useEffect } from "react";
import Cad from "./cad";
import OngoingTask from "./ongoing"

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
        <div className="flex justify-center rounded-lg overflow-hidden shadow-lg">
          <button
            className={`custom-button px-4 py-2 text-white ${activeIndex === 0 ? 'bg-dark-blue' : 'bg-gray-700 hover:bg-gray-600'} rounded-l-lg focus:outline-none`}
            onClick={() => handleButtonClick(0)}
          >
            Новые
          </button>
          <button
            className={`custom-button px-4 py-2 text-white ${activeIndex === 1 ? 'bg-dark-blue' : 'bg-gray-700 hover:bg-gray-600'} rounded-none focus:outline-none`}
            onClick={() => handleButtonClick(1)}
          >
            В процессе
          </button>
          <button
            className={`custom-button px-4 py-2 text-white ${activeIndex === 2 ? 'bg-dark-blue' : 'bg-gray-700 hover:bg-gray-600'} rounded-r-lg focus:outline-none`}
            onClick={() => handleButtonClick(2)}
          >
            История
          </button>
        </div>
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-2xl">Задания</h1>
        </div>
      </nav>
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
                  imageSrc="/images/avatars/avatar1.png" // Replace with your image URL
                  title="Перевести на английский договор"
                  reward={1500}
                  author="Илья Краснов"
                />
                <OngoingTask
                  imageSrc="/images/avatars/avatar2.png" // Replace with your image URL
                  title="Разработка дизайна логоти..."
                  reward={1000}
                  author="Андрей Васатов"
                />
                <OngoingTask
                  imageSrc="/images/avatars/avatar3.png" // Replace with your image URL
                  title="Создание сайта-визитки"
                  reward={10000000}
                  author="Вася Центр"
                />
                <OngoingTask
                  imageSrc="/images/avatars/avatar4.png" // Replace with your image URL
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
                  imageSrc="/images/avatars/avatar1.png" // Replace with your image URL
                  title="Перевести на английский договор"
                  reward={1500}
                  author="Илья Краснов"
                />
                <OngoingTask
                  imageSrc="/images/avatars/avatar2.png" // Replace with your image URL
                  title="Разработка дизайна логоти..."
                  reward={1000}
                  author="Андрей Васатов"
                />
                <OngoingTask
                  imageSrc="/images/avatars/avatar3.png" // Replace with your image URL
                  title="Создание сайта-визитки"
                  reward={10000000}
                  author="Вася Центр"
                />
                <OngoingTask
                  imageSrc="/images/avatars/avatar4.png" // Replace with your image URL
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