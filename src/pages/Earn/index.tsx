import {useState } from "react";

const Price = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <main className="relative pt-24 pb-24 w-full bg-cover bg-center bg-no-repeat min-h-full bg-[url('/images/background/background.png')] bg-cover bg-[#5200FF64]">
      <nav className="fixed pt-5 pb-5 w-full bg-cover bg-center bg-no-repeat top-0 left-0 right-0 bg-[url('/images/background/header_bg.png')] rounded-b-3xl">
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-2xl">Еще</h1>
        </div>
        <div className="flex justify-center">
            <p className="text-gray-600 text-xl ">Страница вашего профиля</p>
        </div>
      </nav>
      <div className="flex-col px-4 mt-10">
        <div className="w-full h-10 bg-dark-blue mt-3 p-3 rounded-t-lg">
          <div className="flex">
            <svg style={{color:"white"}} className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
            </svg>
            <p className="pl-3 text-white">Профиль</p>
          </div>
          <img className="w-full" src="/images/white_line.png" /> 
        </div>
        <div className="w-full h-10 bg-dark-blue p-3">
          <div className="flex">
            <svg style={{color:"white"}} className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z"/>
            </svg>
            <p className="pl-3 text-white">Уведомления</p>
          </div>
          <img className="w-full" src="/images/white_line.png" /> 
        </div>
        <div className="w-full h-10 bg-dark-blue p-3 rounded-b-lg">
          <div className="flex">
            <svg style={{color:"white"}} className="w-[30px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <p className="pl-3 text-white">Уведомления</p>
          </div>
        </div>
      </div>
      <div className="flex-col px-4 mt-10">
        <div
          className={`w-full h-10 ${
            selectedOption === "customer" ? "bg-gray-600" : "bg-dark-blue"
          } mt-3 p-3 rounded-t-lg cursor-pointer items-center`}
          onClick={() => handleClick("customer")}
        >
          <div className="flex items-center">
            <p className="pl-3 text-white">Я заказчик</p>
            {selectedOption === "customer" && (
              <svg
                className="ml-auto w-[20px] h-[20px] text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <img className="w-full" src="/images/white_line.png" alt="line" />
        </div>
        <div
          className={`w-full h-10 ${
            selectedOption === "executor" ? "bg-gray-600" : "bg-dark-blue"
          } p-3 rounded-b-lg cursor-pointer items-center`}
          onClick={() => handleClick("executor")}
        >
          <div className="flex items-center">
            <p className="pl-3 text-white">Я исполнитель</p>
            {selectedOption === "executor" && (
              <svg
                className="ml-auto w-[20px] h-[20px] text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </main>

  );
};

export default Price;