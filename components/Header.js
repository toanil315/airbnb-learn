import Image from "next/image";
import React from "react";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white grid grid-cols-3 p-3 shadow-md md:px-5 lg:px-8">
      {/* LEFT */}
      <div className="relative flex items-center h-full">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* MIDDLE */}
      <div className="flex items-center border-2 rounded-full shadow-sm py-1">
        <input
          className="w-full pl-4 md:flex-grow bg-transparent outline-none text-gray-600 text-sm placeholder:text-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 w-8 p-2 mx-2 bg-red-400 rounded-full text-white cursor-pointer hover:bg-red-500 transition-all duration-200" />
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-end space-x-2 md:space-x-4">
        <span className="hidden md:inline text-gray-600 text-sm">Become a host</span>
        <GlobeAltIcon className="h-5 text-gray-500 cursor-pointer" />
        <div className="flex items-center border-2 rounded-full space-x-2 py-1 px-2">
          <MenuIcon className="h-5 text-gray-500" />
          <UserCircleIcon className="h-5 text-gray-500" />
        </div>
      </div>
    </header>
  );
}
