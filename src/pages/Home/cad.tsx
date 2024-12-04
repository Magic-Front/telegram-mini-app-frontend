import React from "react";

interface TaskCardProps {
  title: string;
  description: string;
  reward: number;
  timeLeft: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, reward, timeLeft }) => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-[url('/images/background/job_item_bg.png')] text-white w-full h-full p-4 rounded-lg shadow-md mb-3 w-90">
      <h2 className="text-lg font-semibold mb-2 truncate">{title}</h2>
      <p className="text-lg text-[#b0b3c1] mb-4">{description}</p>
      <img className="mb-3" src="/images/white_line.png" />
      <div className="flex justify-center items-center">
        <div className="flex items-center pr-20">
          <img src="/images/money.png" alt="Coins" className="w-4 h-4 mr-1" />
          <span className="text-sm font-semibold">{reward}</span>
        </div>
        <div className="flex items-center">
          <img src="/images/time.png" alt="Time" className="w-4 h-4 mr-1" />
          <span className="text-sm">{timeLeft}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
