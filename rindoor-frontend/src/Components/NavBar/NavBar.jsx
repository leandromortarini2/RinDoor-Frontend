"use client";
import React from "react";
import Image from "next/image";
import Login from "@/assets/login.svg";
import X from "@/assets/x.svg";
import { useState } from "react";
import BurgerImg from "@/assets/burger.svg";

export const NavBar = () => {
  const [login, setLogin] = useState(false);

  const [burger, setBurger] = useState(false);

  const handleBurger = (event) => {
    event.preventDefault();

    setBurger(!burger);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setLogin(!login);
  };

  return (
    <>
      <div className="w-full h-14 bg-gray-900 flex justify-evenly ">
        {/* CONTAINER MARCA/LOGO */}

        <div className="w-1/2  sm:w-1/4 h-14 flex items-center justify-center">
          {/* <Image src={MarcaImg} alt="" className=" w-6 md:w-8 mr-2" /> */}
          <h1 className=" md:text-2xl text-yellow-500 font-semibold  ">
            Rin|Door
          </h1>
        </div>

        {/* BURGER COMPONENT*/}
        <div className="w-full flex items-center justify-end sm:hidden">
          <button onClick={handleBurger}>
            <Image
              src={BurgerImg}
              alt=""
              className="w-8 mr-2 duration-1000  ShadowEffect "
            />
          </button>
        </div>

        {/* CONTAINER BOTONERA */}
        <div className="hidden  w-1/2 h-14 md:flex justify-evenly items-center">
          <button className="xl:text-xl text-yellow-500 font-semibold duration-1000 hover:text-yellow-300 hover:scale-110">
            Home
          </button>
          <button className="xl:text-xl text-yellow-500 font-semibold duration-1000 hover:text-yellow-300 hover:scale-110">
            Published Works
          </button>
          <button className="xl:text-xl text-yellow-500 font-semibold duration-1000 hover:text-yellow-300 hover:scale-110">
            Subscriptions
          </button>
        </div>
        {/* CONTAINER LOGIN */}
        <div className="hidden  w-1/4 h-14 md:flex justify-evenly items-center">
          {login === false ? (
            <button onClick={handleLogin}>
              <Image
                src={Login}
                alt=""
                className="w-8 mr-2 duration-1000 ShadowEffect "
              />
            </button>
          ) : (
            <button onClick={handleLogin}>
              <Image
                src={X}
                alt=""
                className="w-8 mr-2 duration-1000  ShadowEffect "
              />
            </button>
          )}
        </div>
      </div>
      {/* CONTAINER FLOTANTE */}
      {login === true ? (
        <div className="w-full flex justify-end">
          <div className="hidden w-1/4 h-40 bg-slate-600 z-20 md:flex flex-col justify-evenly items-center absolute">
            <button className="xl:text-xl text-yellow-500 font-semibold duration-1000 hover:text-yellow-300 hover:scale-110">
              Log In
            </button>
          </div>
        </div>
      ) : null}{" "}
      {/*  */}
      {/* CONTAINER MENU BURGER */}
      {burger === true ? (
        <div className="w-full bg-slate-600 min-h-40 sm:hidden absolute">
          <div className="w-full flex flex-col justify-evenly items-center h-[150px] ">
            {" "}
            <button className="text-md  text-yellow-500 font-medium duration-1000 hover:text-yellow-300 hover:scale-110">
              Home
            </button>
            <button className="text-md text-yellow-500 font-medium duration-1000 hover:text-yellow-300 hover:scale-110">
              Published Works
            </button>
            <button className="text-md text-yellow-500 font-medium duration-1000 hover:text-yellow-300 hover:scale-110">
              Subscriptions
            </button>
          </div>

          <div className="w-full flex  justify-evenly items-center h-[100px] ">
            <button className="w-[80px] h-[40px] xl:text-xl text-gray-700 border p-1 block rounded-lg border-yellow-500 font-semibold duration-1000 bg-yellow-500 hover:bg-gray-700  hover:text-yellow-500">
              {" "}
              Log In
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
