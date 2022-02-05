import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

export default function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  }

  const handleSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toString(),
        endDate: endDate.toString(),
        noOfGuests
      }
    })
    resetInput();
  }

  return (
    <header className="sticky top-0 z-50 bg-white grid grid-cols-3 p-3 shadow-md md:px-5 lg:px-8">
      {/* LEFT */}
      <div onClick={() => router.push("/")} className="relative flex items-center h-full cursor-pointer">
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full px-4 md:flex-grow bg-transparent outline-none text-gray-600 text-sm placeholder:text-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <div className="hidden md:inline-flex h-8 w-8 p-2 mr-2 bg-red-400 rounded-full text-white cursor-pointer hover:bg-red-500 transition-all duration-200" >
          <SearchIcon />
        </div>
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

      {searchInput && (
        <div className="col-span-3 flex flex-col mx-auto mt-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex justify-between border-b-2 pb-2">
            <span className="text-lg text-gray-800 font-semibold pl-4">Number of guest</span>
            <div className="flex items-center">
              <UsersIcon className="h-5" />
              <input
                onChange={(e) => setNoOfGuests(e.target.value)}
                value={noOfGuests}
                min={1}
                className="outline-none text-red-400 w-14 pl-2 text-right"
                type="number"
              />
            </div>
          </div>
          <div className="flex mt-2">
            <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
            <button onClick={handleSearch} className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}
