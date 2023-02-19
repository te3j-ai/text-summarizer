import React from "react";
import LightIcon from "@/assets/contrast.svg";
import EnlargeIcon from "@/assets/enlarge.svg";

type Props = {
  onClick: () => void;
  switchTheme: () => void;
  theme: string;
};

const Sidebar = ({ onClick, switchTheme, theme }: Props) => {
  return (
    <div>
      <div className="h-screen w-1/5 bg-[#262A36] border-[#424651] border-r-[1px] py-8 fixed">
        <div className="px-3 h-[90%]">
          <button
            onClick={onClick}
            className="text-white border-[#444654] border-[1px] w-[250px] py-3 rounded-full gap-3 px-6 flex items-center cursor-pointer"
          >
            <p className="text-xl">+</p>
            <span> New Summary</span>
          </button>
        </div>

        <div className="mt-auto px-5">
          <button className="gap-3 cursor-pointer inline-flex items-center" onClick={switchTheme}>
            <img src={LightIcon} alt="light icon" />
            <p className="font-medium my-6 text-white">{theme[0].toUpperCase() + theme.substring(1)} Mode</p>
          </button>
          <div className="flex gap-3 cursor-pointer">
            <img src={EnlargeIcon} alt="light icon" />
            <p className="font-medium text-white">Updates & FAQ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
