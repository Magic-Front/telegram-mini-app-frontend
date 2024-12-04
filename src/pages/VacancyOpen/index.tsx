// import { useState } from "react";
import CompanyCard from "../VacancyOpen/companycard";
const VacancyOpen = () => {

  return (
    <main className="relative pt-24 pb-24 w-full bg-cover bg-center bg-no-repeat min-h-full bg-[url('/images/background/background.png')] bg-cover bg-[#5200FF64]">
      <nav className="fixed pt-5 pb-5 w-full bg-cover bg-center bg-no-repeat top-0 left-0 right-0 bg-[url('/images/background/header_bg.png')] rounded-b-3xl">
        <div className="flex justify-center rounded-lg overflow-hidden shadow-lg">
        </div>
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-2xl">Front-end разработчик</h1>
        </div>
        <div className="flex justify-center">
            <p className="text-gray-400 text-xl ">Вернуться назад</p>
        </div>
      </nav>
      <div className="flex flex-col px-4">
        <div className="text-sm text-[#ffffffc0] font-semibold mt-10 ">
          <CompanyCard
            employeer="Информация о работодателе"
            employeer_descr="«Франчайзинг5» — крупнейшая в России компания, оказывающая услуги бизнесу."
            resp="Основные обязанности"
            resp_descr="Оперативное взаимодействие с клиентами (переписка), предоставление информации об услугах компании, ответы на вопросы, сбор отчётов по клиентам."
            requirement="Требования к кандидату"
            requirement_descr="Готовность к обучению, коммуникативные навыки, организованность и внимание к срокам и деталям."
            condition="Условия работы"
            condition_descr="Удаленный формат, можно совмещать с учебой или основной работой, ежедневная оплата. "
            work_type="Удаленная работа"
          />
          <button className="bg-blue-600 rounded-lg text-[20px] h-15 p-3 w-full">
            Связаться
          </button>
        </div>
      </div>
    </main>

  );
};

export default VacancyOpen;