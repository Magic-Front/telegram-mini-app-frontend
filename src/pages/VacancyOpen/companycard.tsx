import React from "react";

interface CompanyCardProps {
  employeer: string;
  employeer_descr: string;
  resp: string;
  resp_descr:string;
  requirement:string;
  requirement_descr:string;
  condition:string;
  condition_descr:string;
  work_type:string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ employeer, employeer_descr, resp, resp_descr, requirement, requirement_descr, condition, condition_descr, work_type }) => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-dark-blue text-white w-full h-full p-4 rounded-lg shadow-md mb-3 w-80">
      <h2 className="text-lg font-semibold mb-2 truncate">{employeer}</h2>
      <p className="text-sm text-[#b0b3c1] mb-4">{employeer_descr}</p>
      <img className="mb-3" src="/images/white_line.png" />
      <h2 className="text-lg font-semibold mb-2 truncate">{resp}</h2>
      <p className="text-sm text-[#b0b3c1] mb-4">{resp_descr}</p>
      <img className="mb-3" src="/images/white_line.png" />
      <h2 className="text-lg font-semibold mb-2 truncate">{requirement}</h2>
      <p className="text-sm text-[#b0b3c1] mb-4">{requirement_descr}</p>
      <img className="mb-3" src="/images/white_line.png" />
      <h2 className="text-lg font-semibold mb-2 truncate">{condition}</h2>
      <p className="text-sm text-[#b0b3c1] mb-4">{condition_descr}</p>
      <img className="mb-3" src="/images/white_line.png" />
      <h2 className="text-lg font-semibold mb-2 truncate">Место работы</h2>
      <p className="text-sm text-[#b0b3c1] mb-4">{work_type}</p>
    </div>
  );
};

export default CompanyCard;
