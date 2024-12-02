import React from "react";
import AgentIcon from "../icons/agent";
import AirdropIcon from "../icons/airdrop";
import HomeIcon from "../icons/home";
import EarnIcon from "../icons/earn";
import WorkspaceIcon from "../icons/workspace";
import { Link, useLocation } from "react-router-dom";

const BottomNavBar: React.FC = () => {
  const location = useLocation();
  const navItems = [
    { icon: HomeIcon, label: "Задания", path: "/" },
    { icon: AgentIcon, label: "Финансы", path: "/agents" },
    { icon: WorkspaceIcon, label: "Вакансии", path: "/workforce" },
    { icon: EarnIcon, label: "Еще", path: "/earn" },
    { icon: AirdropIcon, label: "Назад", path: "/airdrop" },
  ];
  
  return (
    <nav className={`fixed bottom-0 left-0 right-0 bg-black border-[1px] border-[#FFFFFF40] rounded-t-3xl `}>
      <div className="flex justify-around items-center p-3">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              className="relative flex items-center justify-center"
              key={idx}
            >
              <div
                className={`absolute -top-4 bg-[url('/images/light_effect_1.png')] bg-cover w-10 h-10 ${
                  location.pathname === item.path ? "block" : "hidden"
                }`}
              ></div>
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center py-2 px-3`}
              >
                <Icon
                  selected={location.pathname === item.path ? true : false}
                />
                <span className="text-xs mt-1 text-white">{item.label}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavBar;
