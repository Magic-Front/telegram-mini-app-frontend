import React from "react";

interface VacancyCard {
  title: string;
  description: string;
  type: string;
  clicked: React.MouseEventHandler<HTMLDivElement>;
}

const VacancyCard: React.FC<VacancyCard> = ({ title, description, type, clicked }) => {
  return (
    <div onClick={clicked} className="bg-cover bg-center bg-no-repeat bg-[url('/images/background/job_item_bg.png')] text-white w-full h-full p-4 rounded-lg shadow-md mb-3 w-80">
      <h2 className="text-lg font-semibold mb-2 truncate">{title}</h2>
      <p className="text-sm text-[#b0b3c1] mb-4">{description}</p>
      <img className="mb-3 w-full" src="/images/white_line.png" />
      <div className="flex justify-between items-center">
        <div className="flex items-center pr-20">
          <button className="bg-blue-600 rounded-lg">
            <span className="p-3">{type}</span>
          </button>
        </div>
        <div className="flex items-center">
          <img src="/images/vacancy.png" alt="Time" className="w-4 h-4 mr-1" />
        </div>
      </div>
    </div>
  );
};

export default VacancyCard;
