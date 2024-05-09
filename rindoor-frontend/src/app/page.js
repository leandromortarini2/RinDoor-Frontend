"use client";
import Image from "next/image";
import { Categories } from "@/Components/Categories/Categories";
import Carousel from "@/Components/Carousel/Carousel";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 h-screen">
      {/* <div className="w-full bg-yellow-600 h-[300px]"></div> */}

      {/* <Carousel /> */}
      <Categories />
    </div>
  );
}
