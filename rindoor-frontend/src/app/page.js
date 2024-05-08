"use client";
import Image from "next/image";
import { Categories } from "@/Components/Categories/Categories";
import Carousel from "@/Components/Carousel/Carousel";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-gray-700 via-gray-300 to-gray-700 h-screen">
      {/* <div className="w-full bg-yellow-600 h-[300px]"></div> */}

      <Carousel />
      {/* <Categories /> */}
    </div>
  );
}
