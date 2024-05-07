import Image from "next/image";
import { Categories } from "@/Components/Categories/Categories";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-white">
      <Categories />
    </div>
  );
}
