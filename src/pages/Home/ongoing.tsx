import React from "react";

interface TaskCardProps {
  imageSrc: string;
  title: string;
  reward: number;
  author: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ imageSrc, title, reward, author }) => {
  return (
    <div className="flex bg-cover bg-center bg-no-repeat items-center bg-[url('/images/background/job_item_bg.png')] text-white p-3 rounded-lg mb-1 w-80">
      <img
        src={imageSrc}
        alt={title}
        className="w-12 h-12 object-cover mr-3"
      />
      {/* Text Content */}
      <div className="flex-1">
        <h2 className="font-semibold truncate">{title}</h2>
        <img className="mb-3 mt-3" src="/images/white_line.png" />
        <div className="flex justify-between items-center text-sm mt-1 text-[#b0b3c1]">
          <div className="flex items-center">
            <img
              src="/images/money.png"
              alt="Coins"
              className="w-4 h-4 mr-1"
            />
            <span>{reward}</span>
          </div>
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
