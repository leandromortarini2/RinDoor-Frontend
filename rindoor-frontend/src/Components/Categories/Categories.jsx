import React from "react";
// imagenes
import ConstructorImg from "@/assets/constructor.jpg";
import pintor from "@/assets/pintura.png";
import electricidad from "@/assets/electricidad.png";
import plomeria from "@/assets/plomeria.png";
import Image from "next/image";
import Link from "next/link";

export const Categories = () => {
  return (
    <div className="w-full xl:min-h-[300px] flex justify-evenly items-center">
      <div className="w-[250px] xl:h-[250px]  bg-white shadow-2xl shadow-slate-900 overflow-hidden rounded-xl flex items-center justify-center hover:scale-105 duration-1000">
        <Link href="">
          <button>
            <Image
              src={ConstructorImg}
              alt=""
              className="w-50  ShadowEffectCards duration-1000 "
            />
          </button>
        </Link>
      </div>
      <div className="w-[250px] xl:h-[250px] bg-white shadow-2xl shadow-slate-900 overflow-hidden rounded-xl flex items-center justify-center hover:scale-105 duration-1000 ">
        <Link href="">
          <button>
            {" "}
            <Image
              src={pintor}
              alt=""
              className="w-50 ShadowEffectCards duration-1000 "
            />
          </button>
        </Link>
      </div>
      <div className="w-[250px] xl:h-[250px]  bg-white shadow-2xl shadow-slate-900 overflow-hidden rounded-xl flex items-center justify-center hover:scale-105 duration-1000">
        {" "}
        <Link href="">
          <button>
            {" "}
            <Image
              src={electricidad}
              alt=""
              className="w-40 ShadowEffectCards duration-1000 "
            />
          </button>
        </Link>
      </div>
      <div className="w-[250px] xl:h-[250px] bg-white shadow-2xl shadow-slate-900 overflow-hidden rounded-xl flex items-center justify-center hover:scale-105 duration-1000">
        {" "}
        <Link href="">
          {" "}
          <button>
            {" "}
            <Image
              src={plomeria}
              alt=""
              className="w-50 ShadowEffectCards duration-1000 "
            />
          </button>
        </Link>
      </div>
    </div>
  );
};
