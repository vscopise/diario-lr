"use client";

import { useUIStore } from "@/store";
import clsx from "clsx";
import { IoCloseOutline } from "react-icons/io5";

export const SideBar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);
  return (
    <div>
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}
      {isSideMenuOpen && (
        <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />
      )}
      <nav className={
        clsx(
            "fixed p-5 right-0 top-0 w-[500px] max-w-[75%] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
            {
                'translate-x-full': !isSideMenuOpen
            }
        )
        
      }>
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeSideMenu()}
        />
      </nav>
    </div>
  );
};
