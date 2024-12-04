
const Price = () => {

    return (
      <main className="relative pt-24 pb-24 w-full bg-cover bg-center bg-no-repeat min-h-full bg-[url('/images/background/background.png')] bg-cover bg-[#5200FF64]">
        <nav className="fixed pt-5 pb-5 w-full bg-cover bg-center bg-no-repeat top-0 left-0 right-0 bg-[url('/images/background/header_bg.png')] rounded-b-3xl">
          <div className="flex justify-center">
            <h1 className="text-white font-bold text-2xl">Жалоба на задание</h1>
          </div>
          <div className="flex justify-center">
              <p className="text-gray-600 text-xl ">Отмена</p>
          </div>
        </nav>
        <div className="flex-col px-4 flex justify-center">
            <div className="pt-10">
                <p className="text-sm text-white">Почему вы хотите пожаловаться на это задание?</p>
                <div className="flex pt-3 items-center">
                    <input type="radio"/>
                    <p className="text-white text-xl ml-3">Запрещенный контент</p>
                </div>
                <div className="flex pt-3 items-center">
                    <input type="radio"/>
                    <p className="text-white text-xl ml-3">Нарушение авторских и интеллектуальных прав</p>
                </div>
            </div>
        </div>
        <div className="flex-col px-4 mt-80">
            <div className="w-full h-20 bg-dark-blue mt-3 p-3 rounded-lg">
                <p className="items-center text-white">Круто</p>    
            </div>
            <button className="w-full h-16 bg-blue-600 mt-4 p-3 rounded-lg">
                <p className="text-xl text-white">Отправить</p>
            </button>
        </div>
      </main>
  
    );
  };
  
  export default Price;