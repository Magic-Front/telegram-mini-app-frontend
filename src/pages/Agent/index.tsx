import { useState, useEffect } from "react";
import TonCard from "./toncard";

const Home = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState<"ton" | "usdt" | null>(null); // Track selected currency

  useEffect(() => {
    setCurrentTab(currentTab);
  }, []);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
    setCurrentTab(index === 0 ? "" : index === 1 ? "" : "");
  };

  const handlePresetClick = (value: number) => {
    setInputValue(value.toString());
    setWalletAddress(generateRandomWalletAddress());
  };

  const generateRandomWalletAddress = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const addressLength = 42;
    let address = "0x"; // Ethereum-style address prefix
    for (let i = 0; i < addressLength - 2; i++) {
      address += chars[Math.floor(Math.random() * chars.length)];
    }
    return address;
  };

  return (
    <main className="relative pt-24 pb-24 w-full bg-cover bg-center bg-no-repeat min-h-full bg-[url('/images/background/background.png')] bg-cover bg-[#5200FF64]">
      <nav className="fixed pt-5 pb-5 w-full bg-cover bg-center bg-no-repeat top-0 left-0 right-0 bg-[url('/images/background/header_bg.png')] rounded-b-3xl">
        <div className="flex justify-center items-center mt-3">
          <div className="flex justify-center h-10 bg-[#1a1f36] rounded-[10px] overflow-hidden border-dark-blue border-[1px] w-fit mx-auto">
            <button
              className={`px-5 py-2 text-white text-sm transition-all duration-300 ${
                activeIndex === 0
                  ? "bg-[#314e89] rounded-[10px]"
                  : "hover:bg-[rgba(255,255,255,0.1)]"
              }`}
              onClick={() => handleButtonClick(0)}
            >
              Пополнить
            </button>
            <button
              className={`px-5 py-2 text-white text-sm transition-all duration-300 ${
                activeIndex === 1
                  ? "bg-[#314e89] rounded-[10px]"
                  : "hover:bg-[rgba(255,255,255,0.1)]"
              }`}
              onClick={() => handleButtonClick(1)}
            >
              Вывести
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
            <button
              className={`px-5 py-2 text-white text-sm transition-all duration-300 ${
                activeIndex === 3
                  ? "bg-[#314e89] rounded-[10px]"
                  : "hover:bg-[rgba(255,255,255,0.1)]"
              }`}
              onClick={() => handleButtonClick(3)}
            >
              Статистика
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <h1 className="text-white font-bold text-2xl">Финансы</h1>
        </div>
      </nav>
      <div className="flex flex-col px-4">
        <div className="text-sm text-[#ffffffc0] font-semibold mt-10 ">
          {activeIndex === 0 && (
            <div className="items-center">
              <TonCard ton_amount={250} usdt_amount={2} />
              <div className="flex bg-cover bg-center bg-no-repeat bg-dark-blue h-full p-4 rounded-lg shadow-md mb-3 w-full mt-3 items-center">
                <div>
                  <p className="text-white">Укажите сумму пополнения</p>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="bg-gray-600 rounded-[5px] w-1/2 h-5 mt-2 text-white"
                  />
                </div>
                <div className="flex ml-4 space-x-3">
                  <p
                    className="text-gray cursor-pointer hover:text-white"
                    onClick={() => handlePresetClick(700)}
                  >
                    700
                  </p>
                  <p
                    className="text-gray cursor-pointer hover:text-white"
                    onClick={() => handlePresetClick(1000)}
                  >
                    1000
                  </p>
                  <p
                    className="text-gray cursor-pointer hover:text-white"
                    onClick={() => handlePresetClick(1500)}
                  >
                    1500
                  </p>
                </div>
              </div>
              {walletAddress && (
                <div className="flex bg-cover bg-center bg-no-repeat bg-dark-blue h-full p-4 flex justify-center rounded-lg shadow-md mb-3 w-full mt-3 items-center">
                  <div>
                    <img src="/images/wallet.png" />
                  </div>
                  <p className="text-white text-center items-center ml-2">
                    <span className="text-gray-400 truncate">{walletAddress}</span>
                  </p>
                </div>
              )}
              <button className="bg-blue-600 text-white text-lg w-full h-30 p-5 rounded-lg">
                Подключить кошелёк
              </button>
            </div>
          )}
          {activeIndex === 1 && (
            <div className="items-center">
              <TonCard ton_amount={250} usdt_amount={2} />
              <div className="flex bg-cover bg-center bg-no-repeat bg-dark-blue h-full p-4 rounded-lg shadow-md mb-3 w-full mt-3 items-center">
                <div>
                  <p className="text-white">Укажите сумму вывода</p>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="bg-gray-600 rounded-[5px] w-1/2 h-5 mt-1 text-white"
                  />
                  <p className="text-white mt-2">Выберите криптовалюту</p>
                  <div className="flex mt-1">
                    <button
                      className={`rounded-[5px] p-1 px-2 flex justify-center items-center ${
                        selectedCurrency === "ton"
                          ? "bg-blue-600"
                          : "bg-gray-600"
                      }`}
                      onClick={() => setSelectedCurrency("ton")}
                    >
                      <div>
                        <img src="/images/ton.png" />
                      </div>
                      <p className="text-white text-lg">TON</p>
                    </button>
                    <button
                      className={`rounded-[5px] p-1 px-2 flex justify-center items-center ml-1 ${
                        selectedCurrency === "usdt"
                          ? "bg-blue-600"
                          : "bg-gray-600"
                      }`}
                      onClick={() => setSelectedCurrency("usdt")}
                    >
                      <div>
                        <img src="/images/usdt.png" />
                      </div>
                      <p className="text-white text-lg">USDT</p>
                    </button>
                  </div>
                  <p className="text-gray-400 mt-3">Минимальная сумма вывода составляет 5 USDT или 10 TON. Удерживается комиссия блокчейна и комиссия платформы 2%.</p>
                </div>
              </div>
              {walletAddress && (
              <div className="flex bg-cover bg-center bg-no-repeat bg-dark-blue h-full p-4 flex justify-center rounded-lg shadow-md mb-3 w-full mt-3 items-center">
                <div>
                  <img src="/images/wallet.png" />
                </div>
                <p className="text-white text-center items-center ml-2">
                  <span className="text-gray-400 truncate">{walletAddress}</span>
                </p>
              </div>
              )}
              <button className="bg-blue-600 text-white text-lg w-full h-30 p-5 rounded-lg">
                Запросить вывод
              </button>
            </div>
          )}
          {activeIndex === 2 && (
            <div className="bg-cover bg-center bg-no-repeat bg-[#0B1B35] h-full p-4 rounded-lg shadow-md mb-3 w-full mt-3 items-center">
              <div className="flex items-center justify-between w-full">
                <div>
                  <p className="text-[#ff0000c0]">-990</p>
                  <p className="text-gray-400">Оплата подписки</p>
                </div>
                <div>
                  <p className="text-white">Сегодня</p>
                  <p className="text-gray-400">23:43</p>
                </div>
              </div>
              <img src="/images/white_line.png" className="w-full mt-1 mb-3"/>
              <div className="flex items-center justify-between w-full">
                <div>
                  <p className="text-[#3cff00c0]">+990</p>
                  <p className="text-gray-400">Пополнение счёта</p>
                </div>
                <div>
                  <p className="text-white">Сегодня</p>
                  <p className="text-gray-400">23:43</p>
                </div>
              </div>
            </div>
          )}
          {activeIndex === 3 && (
            <div className="items-center mt-5">
              <div className="bg-[#0B1B35] rounded-lg w-full p-3 h-10 flex justify-between items-center">
                <p className="text-white">Статистика</p>
                <div className="flex items-center">
                  <p className="text-bg-gray-400">за 7 дней</p>
                  <div className="ml-2">
                    <img src="/images/right_arrow.png" />
                  </div>
                </div>
              </div>
              <div className="bg-cover bg-center bg-no-repeat bg-[#0B1B35] h-full p-4 rounded-lg shadow-md mb-3 w-full mt-3 items-center">
                <div className="flex items-center justify-between w-full">
                  <p className="text-gray-400">Пополнено</p>
                  <p className="text-gray-400">1990</p>
                </div>
                <img src="/images/white_line.png" className="w-full mt-3 mb-3"/>
                <div className="flex items-center justify-between w-full">
                  <p className="text-gray-400">Выведено</p>
                  <p className="text-gray-400">0</p>
                </div>
                <img src="/images/white_line.png" className="w-full mt-3 mb-3"/>
                <div className="flex items-center justify-between w-full">
                  <p className="text-gray-400">Заработано</p>
                  <p className="text-gray-400">0</p>
                </div>
                <img src="/images/white_line.png" className="w-full mt-3 mb-3"/>
                <div className="flex items-center justify-between w-full">
                  <p className="text-gray-400">Оплачено</p>
                  <p className="text-gray-400">1980</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
