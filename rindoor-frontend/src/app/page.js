import Image from "next/image";
import { Categories } from "@/Components/Categories/Categories";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-white">
      <div className="w-full bg-yellow-600 h-[300px]"></div>
      <Categories />
    </div>
  );
}
