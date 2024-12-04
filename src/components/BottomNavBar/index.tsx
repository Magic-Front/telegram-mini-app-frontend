import React from "react";
import { Link, useLocation } from "react-router-dom";

const BottomNavBar: React.FC = () => {
  const location = useLocation();

  // Update navItems to use PNG URLs instead of React components
  const navItems = [
    { icon: "/images/tab/task.png", label: "Задания", path: "/" },
    { icon: "/images/tab/finance.png", label: "Финансы", path: "/agents" },
    { icon: "/images/tab/vacancy.png", label: "Вакансии", path: "/workforce" },
    { icon: "/images/tab/more.png", label: "Еще", path: "/earn" },
    { icon: "/images/tab/back.png", label: "Назад", path: "/airdrop" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#040B18CC] rounded-t-3xl">
      <div className="flex justify-around items-center p-3">
        {navItems.map((item, idx) => (
          <div
            className="relative flex items-center justify-center"
            key={idx}
          >
            {/* Highlight background */}
            <div
              className={`absolute -top-4 bg-[url('/images/light_effect_1.png')] bg-cover w-10 h-10 ${
                location.pathname === item.path ? "block" : "hidden"
              }`}
            ></div>

            {/* Render the nav item */}
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center py-2 px-3"
            >
              {/* Render the PNG icon */}
              <img
                src={item.icon}
                alt={item.label}
                className={`w-6 h-6 ${
                  location.pathname === item.path ? "opacity-100" : "opacity-60"
                }`}
              />
              <span className="text-xs mt-1 text-white">{item.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavBar;
