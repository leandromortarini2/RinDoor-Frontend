"use client";
import Carousel from "@/Components/Carousel/Carousel";
import { Categories } from "@/Components/Categories/Categories";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 h-screen">
      <Carousel/>
      <Categories />
    </div>
  );
}
