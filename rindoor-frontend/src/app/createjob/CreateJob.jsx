"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
// import { postNewPublic } from "@/helpers/postNewPost";
import { validationsNewPost } from "@/helpers/validationsForm";

const CreateJob = () => {
  const [postState, setPostState] = useState({
    title: "",
    category: "",
    description: "",
    payment: "",
  });

  // VALIDACIONES
  const [errorForm, setErrorForm] = useState({
    title: "",
    category: "",
    description: "",
    payment: "",
  });

  useEffect(() => {
    const errors = validationsNewPost(postState);
    setErrorForm(errors);
  }, [postState]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setPostState({
      ...postState,
      [name]: value,
    });

    console.log(postState);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    // await postNewPublic(postState);
    alert("envio con exito");
    console.log(postState);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 h-screen">
      <div className="w-full  min-h-screen  flex flex-col md:flex-row justify-center items-center   ">
        <div className="w-full sm:w-1/2 md:w-1/3 md:h-[350px] lg:h-[400px]  overflow-hidden  sm:flex items-center justify-center shadow-2xl md:shadow-black  md:rounded-l-xl ">
          <img
            src="https://res.cloudinary.com/dtwiog6cy/image/upload/v1715265952/Proyecto%20FInal/p8glimcbog6egt4nihcg.jpg"
            alt=""
            className="w-full h-full sm:mt-10 sm:rounded-t-xl md:m-0   md:rounded-l-xl md:rounded-t-none"
          />
          <img
            src="https://res.cloudinary.com/dtwiog6cy/image/upload/v1715265952/Proyecto%20FInal/y7vhpbqtveqmyhoamjfi.jpg"
            alt=""
            className="w-full h-full sm:hidden  "
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 h-full flex justify-center items-center  border-b-4 border-yellow-500 sm:border-0 ">
          <form
            onSubmit={handleOnSubmit}
            className="w-full h-full md:h-[350px] lg:h-[400px]  bg-gray-900 flex flex-col items-center justify-evenly  shadow-2xl md:shadow-black sm:mb-10 sm:rounded-b-xl  md:rounded-none md:m-0 md:rounded-r-xl"
          >
            <h2 className="text-yellow-500 text-xl xl:text-3xl font-semibold mt-5 ">
              Create a new Post
            </h2>
            <input
              type="text"
              name="title"
              value={postState.title}
              onChange={handleOnChange}
              className="w-1/2 h-10 bg-transparent border-b-2  border-yellow-500   mt-3"
              placeholder="Title..."
            />
            {errorForm && errorForm.title && (
              <p className="text-yellow-700  text-md text-center ">
                {errorForm.title}
              </p>
            )}
            <select
              name="category"
              value={postState.category}
              onChange={handleOnChange}
              className="w-1/3 h-10 bg-transparent border-b-2  border-yellow-500  mt-3"
            >
              <option value="" disabled hidden>
                Category
              </option>
              <option value="electricity" className="bg-gray-900">
                Electricity
              </option>
              <option value="construction" className="bg-gray-900">
                Construction
              </option>
              <option value="plumber" className="bg-gray-900">
                Plumber
              </option>
              <option value="painter" className="bg-gray-900">
                Painter
              </option>
              {errorForm && errorForm.category && (
                <p className="text-yellow-700  text-md text-center ">
                  {errorForm.category}
                </p>
              )}
            </select>
            <textarea
              type="text"
              name="description"
              value={postState.description}
              onChange={handleOnChange}
              className="w-1/2 h-20 bg-transparent border-b-2  border-yellow-500    mt-3"
              placeholder="Description..."
            />
            {errorForm && errorForm.description && (
              <p className="text-yellow-700  text-md text-center ">
                {errorForm.description}
              </p>
            )}

            <input
              type="text"
              name="payment"
              value={postState.payment}
              onChange={handleOnChange}
              className="w-1/2 h-10 bg-transparent border-b-2  border-yellow-500 mt-3"
              placeholder="Maximum payment..."
            />

            {errorForm && errorForm.payment && (
              <p className="text-yellow-700  text-md text-center ">
                {errorForm.payment}
              </p>
            )}

            <button
              disabled={Object.keys(errorForm).length > 0}
              type="submit"
              className="w-[80px] h-[40px] xl:text-xl text-gray-700 border p-1 block rounded-lg border-yellow-500 font-semibold duration-1000 bg-yellow-500 hover:bg-gray-700  hover:text-yellow-500 mt-3 mb-3 disabled:bg-gray-500 hover:disabled:text-gray-700"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
