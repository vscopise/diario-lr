'use client';

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { secondaryFont } from "@/config/fonts";
import { IoSearchOutline } from "react-icons/io5";
import { useUIStore } from "@/store";

export const TopMenu = () => {

  const openSideMenu = useUIStore((state) => state.openSideMenu);
  //const openMenu = useUIStore(state => state.openSideMenu);

  return (
    <nav className="flex px-5 py-4 justify-between items-center w-full shadow-md bg-fagrayblue-300 z-10 relative">
      <Link href="/" className="mx-5 hover:cursor-pointer">
        <Image
          src="../logo-gr.svg"
          alt="Diario La R"
          width={200}
          height={200}
        />
      </Link>
      <div
        className={`hidden text-sm lg:text-lg px-3 sm:block space-x-2 ${secondaryFont.className}`}
      >
        <Link href="#" className="hover:text-blue-500 hover:underline">
          Nacionales
        </Link>
        <Link href="#" className="hover:text-blue-500 hover:underline">
          Tribuna
        </Link>
        <Link href="#" className="hover:text-blue-500 hover:underline">
          Sociedad
        </Link>
        <Link href="#" className="hover:text-blue-500 hover:underline">
          Mundo
        </Link>
        <Link href="#" className="hover:text-blue-500 hover:underline">
          Opinión
        </Link>
        <Link href="#" className="hover:text-blue-500 hover:underline">
          Cultura
        </Link>
      </div>
      <div className="flex space-x-2">
        <Link href="#">
          <IoSearchOutline size={30} />
        </Link>
        <div className="space-y-1" onClick={openSideMenu}>
          <div className="h-1 w-5 bg-gray-700 rounded" />
          <div className="h-1 w-5 bg-gray-700 rounded" />
          <div className="h-1 w-5 bg-gray-700 rounded" />
        </div>
      </div>
    </nav>
  );
};
