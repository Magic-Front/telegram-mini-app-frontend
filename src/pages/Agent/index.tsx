import React, { useState, useContext } from "react";
import { LabelTaskModal, AnnotationTaskModal, RewardModal } from '../Tasks';
import { MiniAppContext } from "../../routes/MiniAppContextProvider";
import { Task } from "../../routes/types";
import TonCard from "./toncard";
const Home = () => {
  const [currentTab, setCurrentTab] = useState("DeTask");
  const { isToggled, setToggle, coins, setCoins, power, setPower, currentUser, setCurrentUser, tasks } = useContext(MiniAppContext);
  const [isFinished, setFinished] = useState(true);
  const [index, setIndex] = useState("");
  const task = tasks.filter((task: Task) => task._id === index)[0];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleFinish = () => {
    setToggle(true);
    setFinished(true);
  };

  const handleGetReward = () => {
    if (task?.reward[0] > 0) {
      setCoins(coins + task.reward[0]);
      setCurrentUser({ ...currentUser, coins: currentUser.coins + task.reward[0] });
    }
    if (task?.reward[1] > 0) {
      setPower(power + task.reward[1]);
      setCurrentUser({ ...currentUser, power: currentUser.power + task.reward[1] });
    }
    setToggle(false);
  };

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

      {index !== "" && task?.type === "data_labeling" ? 
        (<LabelTaskModal isOpen={isToggled && !isFinished} onClose={() => setToggle(false)} taskIndex={index} onFinish={handleFinish} />) : 
        (index !== "" && task?.type === "Annotation" ? 
          (<AnnotationTaskModal isOpen={isToggled && !isFinished} onClose={() => setToggle(false)} taskIndex={index} onFinish={handleFinish} />) : 
          (<div></div>))}
      <RewardModal isOpen={isToggled && isFinished} onClose={() => setToggle(false)} taskIndex={index} onFinish={handleGetReward} />
    </main>

  );
};

export default Home;