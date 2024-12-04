import React, { useState } from "react";
import axios from "axios";

const VacancyOpen: React.FC = () => {
    
    const [jobTitle, setJobTitle] = useState<string>("");
    const [Resp, setResp] = useState<string>("");
    const [Email, setEmail] = useState<string>("");
    const [Telegram, setTelegram] = useState<string>("");
    const [Phone, setPhone] = useState<string>("");
    const [Info, setInfo] = useState<string>("");
    const [Requirement, setRequirement] = useState<string>("");
    const [Condition, setCondition] = useState<string>("");
    const [Note, setNote] = useState<string>("");

    const postProject = async () => {
        const projData = {
          jobTitle,
          Resp,
          Email,
          Telegram,
          Phone,
          Info,
          Requirement,
          Condition,
          Note
        };
    
        try {
          const response = await axios.post(`http://localhost:4000/api/v1/client/postjob`, projData);
          console.log("Project posted:", response.data);
          alert("Project posted successfully!");
        } catch (error) {
          console.error("Error posting project:", error);
          alert("Failed to post project. Check console for details.");
        }
      };

  return (
    <main className="relative pt-24 pb-24 w-full bg-cover bg-center bg-no-repeat min-h-full bg-[url('/images/background/background.png')] bg-cover bg-[#5200FF64]">
      <nav className="fixed pt-5 pb-5 w-full bg-cover bg-center bg-no-repeat top-0 left-0 right-0 bg-[url('/images/background/header_bg.png')] rounded-b-3xl">
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-2xl">Новая вакансия</h1>
        </div>
        <div className="flex justify-center">
            <p className="text-gray-600 text-xl ">Отмена</p>
        </div>
      </nav>
      <div className="flex-col px-4">
        <div className="text-sm flex justify-between text-[#ffffffc0] bg-dark-blue rounded-lg p-2 font-semibold mt-10 ">
            <p className="text-white text-sm">Город</p>
            <p className="text-gray text-sm">Удалённая работа</p>
        </div>
        <div className="flex justify-between mt-10">
            <div className="w-1/2 bg-dark-blue rounded-lg pt-2 m-1">
                <div className="flex justify-center">
                    <input style={{zoom:2.5}} type="checkbox" />
                </div>
                <div className="flex justify-center">
                    <p className="text-white">Другое</p>
                </div>
            </div>
            <div className="w-1/2 bg-dark-blue rounded-lg pt-2 m-1">
                <div className="flex justify-center">
                    <input style={{zoom:2.5}} type="checkbox" />
                </div>
                <div className="flex justify-center">
                    <p className="text-white">Продажи</p>
                </div>
            </div>
        </div>
        <div className="flex justify-between mt-1">
            <div className="w-1/2 bg-dark-blue rounded-lg pt-2 m-1">
                <div className="flex justify-center">
                    <input style={{zoom:2.5}} type="checkbox" />
                </div>
                <div className="flex justify-center">
                    <p className="text-white">Маркетинг</p>
                </div>
            </div>
            <div className="w-1/2 bg-dark-blue rounded-lg pt-2 m-1">
                <div className="flex justify-center">
                    <input style={{zoom:2.5}} type="checkbox" />
                </div>
                <div className="flex justify-center">
                    <p className="text-white">Дизайн</p>
                </div>
            </div>
        </div>
        <div className="flex justify-between mt-1">
            <div className="w-1/2 bg-dark-blue rounded-lg pt-2 m-1">
                <div className="flex justify-center">
                    <input style={{zoom:2.5}} type="checkbox" />
                </div>
                <div className="flex justify-center">
                    <p className="text-white">Разработка</p>
                </div>
            </div>
            <div className="w-1/2 bg-dark-blue rounded-lg pt-2 m-1">
                <div className="flex justify-center">
                    <input style={{zoom:2.5}} type="checkbox" />
                </div>
                <div className="flex justify-center">
                    <p className="text-white">Менеджмент</p>
                </div>
            </div>
        </div>
        <div className="flex justify-between mt-1">
            <div className="w-1/2 bg-dark-blue rounded-lg pt-2 m-1">
                <div className="flex justify-center">
                    <input style={{zoom:2.5}} type="checkbox" />
                </div>
                <div className="flex justify-center">
                    <p className="text-white">Контент</p>
                </div>
            </div>
            <div className="w-1/2 bg-dark-blue rounded-lg pt-2 m-1">
                <div className="flex justify-center">
                    <input style={{zoom:2.5}} type="checkbox" />
                </div>
                <div className="flex justify-center">
                    <p className="text-white">Аналитика</p>
                </div>
            </div>
        </div>
        <div className="mt-5">
            <p className="text-white text-sm">Осталось 50 знаков</p>
            <p className="text-gray-500 text-sm pt-1">Укажите в названии вакансии должность, для которой открыта вакансия, или кратко сформулируйте суть предлагаемой работы.</p>
            <input className="text-sm w-full h-20 flex justify-between text-[#ffffffc0] bg-dark-blue rounded-lg p-2 font-semibold mt-1" placeholder="Введите название" type="textarea" onChange={(e) => setJobTitle(e.target.value)} value={jobTitle}/>
        </div>
        <div className="mt-5">
            <p className="text-gray-500 text-sm pt-1">Пожалуйста, опишите основные задачи сотрудника.</p>
            <input className="text-sm w-full h-20 flex justify-between text-[#ffffffc0] bg-dark-blue rounded-lg p-2 font-semibold mt-1" placeholder="Опишите основные обязанности" type="textarea" onChange={(e) => setResp(e.target.value)} value={Resp}/>
        </div>
        <div className="mt-5">
            <p className="text-gray-500 text-sm pt-1">Укажите хотя бы один контакт, по которому соискатели смогут с вами связаться: телефон или Telegram</p>
            <input className="text-sm w-full h-10 flex justify-between text-[#ffffffc0] bg-dark-blue rounded-lg p-2 font-semibold mt-2" placeholder="Email" type="text" onChange={(e) => setEmail(e.target.value)} value={Email}/>
            <input className="text-sm w-full h-10 flex justify-between text-[#ffffffc0] bg-dark-blue rounded-lg p-2 font-semibold mt-2" placeholder="Telegram" type="text" onChange={(e) => setTelegram(e.target.value)} value={Telegram}/>
            <input className="text-sm w-full h-10 flex justify-between text-[#ffffffc0] bg-dark-blue rounded-lg p-2 font-semibold mt-2" placeholder="Номер телефона" type="text" onChange={(e) => setPhone(e.target.value)} value={Phone}/>
        </div>
        <div className="mt-5">
            <p className="text-gray-500 text-sm pt-1">Эти данные не обязательны к заполнению, но подробно описанная вакансия привлекает внимание большего количества соискателей</p>
            <p className="text-gray-500 text-sm pt-1">Описание компании, рода деятельности</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            <input className="text-sm w-full h-10 flex justify-between text-[#ffffffc0] bg-dark-blue rounded-lg p-2 font-semibold mt-1" placeholder="Информация о работодателе" type="text" onChange={(e) => setInfo(e.target.value)} value={Info}/>
            <p className="text-gray-500 text-sm pt-1">Основные требования к кандидату: необходимые навыки, умения, качества</p>
            <input className="text-sm w-full h-10 flex justify-between text-[#ffffffc0] bg-dark-blue rounded-lg p-2 font-semibold mt-1" placeholder="Требования к кандидату" type="text" onChange={(e) => setRequirement(e.target.value)} value={Requirement}/>
            <p className="text-gray-500 text-sm pt-1">Условия работы: заработная плата, режим работы</p>
            <input className="text-sm w-full h-10 flex justify-between text-[#ffffffc0] bg-dark-blue rounded-lg p-2 font-semibold mt-1" placeholder="Условия работы: заработная плата, режим работы" type="text" onChange={(e) => setCondition(e.target.value)} value={Condition}/>
            <p className="text-gray-500 text-sm pt-1">Дополнительные сведения о вакансии</p>
            <input className="text-sm w-full h-10 flex justify-between text-[#ffffffc0] bg-dark-blue rounded-lg p-2 font-semibold mt-1" placeholder="Примечания" type="text" onChange={(e) => setNote(e.target.value)} value={Note}/>
        </div>
        <div className="flex justify-center">
            <button className="w-full h-12 mt-5 bg-blue-600 flex justify-center items-center rounded-lg" onClick={postProject}>
                <p className="text-white text-xl">Продолжить</p>
            </button>
        </div>
      </div>
    </main>

  );
};

export default VacancyOpen;