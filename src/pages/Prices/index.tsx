
const Price = () => {

    return (
      <main className="relative pt-24 pb-24 w-full bg-cover bg-center bg-no-repeat min-h-full bg-[url('/images/background/background.png')] bg-cover bg-[#5200FF64]">
        <nav className="fixed pt-5 pb-5 w-full bg-cover bg-center bg-no-repeat top-0 left-0 right-0 bg-[url('/images/background/header_bg.png')] rounded-b-3xl">
          <div className="flex justify-center">
            <h1 className="text-white font-bold text-2xl">Цена</h1>
          </div>
          <div className="flex justify-center">
              <p className="text-gray-600 text-xl ">Отмена</p>
          </div>
        </nav>
        <div className="flex-col px-4">
            <div className="text-sm flex justify-between text-[#ffffffc0] font-semibold mt-10 ">
                <p className="text-gray text-sm">Ваша вакансия будет размещена на 11 дней.</p>
            </div>
            <div className="flex mt-3">
                <img style={{zoom:1.5}} src="/images/tab/money.png"/>
                <p className="text-white text-2xl pl-3">680</p>
            </div>
            <div className="w-full h-15 bg-dark-blue mt-3 p-3 rounded-lg justify-between">
                <p className="text-white">Добавить рассылку</p> 
            </div>
            <div className="text-sm flex justify-between text-[#ffffffc0] font-semibold mt-3 ">
                <p className="text-gray text-sm">Вакансию получат 3 368 005 подписчиков новостной рассылки и ещё 40 000+ увидят её в соцсетях.</p>
            </div>
            <div className="flex mt-3">
                <img style={{zoom:1.5}} src="/images/tab/money.png"/>
                <p className="text-gray-600 text-2xl pl-3">2590</p>
            </div>
            <div className="w-full h-40 bg-[url('/images/background/job_item_bg.png')] text-xl border-sky-70  mt-40 p-3 rounded-lg">
                <p className="text-gray-600">Итоговая стоимость</p> 
                <p className="text-white">680</p>
                <button className="bg-blue-600 rounded-lg w-full h-10 mt-5 text-white">Продолжить</button>
            </div>
        </div>
      </main>
  
    );
  };
  
  export default Price;