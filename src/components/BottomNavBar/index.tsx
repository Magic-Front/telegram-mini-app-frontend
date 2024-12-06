import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const BottomNavBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: "/images/tab/task.png", label: "Задания", path: "/" },
    { icon: "/images/tab/finance.png", label: "Финансы", path: "/agents" },
    { icon: "/images/tab/vacancy.png", label: "Вакансии", path: "/workforce" },
    { icon: "/images/tab/more.png", label: "Еще", path: "/earn" },
    { icon: "/images/tab/back.png", label: "Назад", action: () => navigate(-1) },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#040B18CC] rounded-t-3xl">
      <div className="flex justify-around items-center p-3">
        {navItems.map((item, idx) => (
          <div
            className="relative flex items-center justify-center"
            key={idx}
            onClick={item.action ? item.action : undefined} // Call action if provided
          >
            {/* Highlight background */}
            <div
              className={`absolute -top-4 bg-[url('/images/light_effect_1.png')] bg-cover w-10 h-10 ${
                location.pathname === item.path ? "block" : "hidden"
              }`}
            ></div>

            {/* Render the nav item */}
            {item.path ? (
              <Link
                key={item.path}
                to={item.path}
                className="flex justify-center flex-col items-center py-2 px-3"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`w-7 h-7 ${
                    location.pathname === item.path ? "opacity-100" : "opacity-60"
                  }`}
                />
                <span className="text-[14px] mt-1 text-white">{item.label}</span>
              </Link>
            ) : (
              <div className="flex justify-center flex-col items-center py-2 px-3 cursor-pointer">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-7 h-7 opacity-60"
                />
                <span className="text-[14px] mt-1 text-white">{item.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavBar;
