import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsCardList, BsFillGrid3X3GapFill } from "react-icons/bs";
import { ProductContext } from "../../contexts/ProductContextProvider.jsx";
import { CategoryArr } from "../../data/CategoryDoc.js";
import CardDoc from "./CardDoc.jsx";

function CardTL() {
  const [category, setCategory] = useState("");
  const [layout, setLayout] = useState(false);

  function renderCategory(value) {
    const category = CategoryArr.find((item) => item.value === value);
    const categoryName = category ? category.name : "Tất cả Danh Mục";
    return categoryName;
  }
  useEffect(() => {
    localStorage.setItem("category", category);
  }, [category]);

  return (
    <>
      <div className="w-full flex justify-center items-center ">
        <div className="w-full flex justify-center items-center">
          <div className="w-[92%] mt-6">
            <div className="flex items-end justify-end z-1">
              <div className="flex rounded-md">
                {layout ? (
                  <span
                    className=" p-1 bg-green-300 rounded-md cursor-pointer z-5"
                    onClick={(e) => setLayout(!layout)}
                  >
                    <BsFillGrid3X3GapFill className="mx-1 text-xl" />
                  </span>
                ) : (
                  <span
                    className=" p-1 bg-green-300 rounded-md cursor-pointer z-5"
                    onClick={(e) => setLayout(!layout)}
                  >
                    <BsCardList className="mx-1 text-xl" />
                  </span>
                )}
              </div>
            </div>

            <div className="w-full   justify-center items-center   overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300">
              <div class="flex justify-center w-max mx-auto p-2 rounded border-2 border-gray-200">
                <button
                  onClick={(e) => setCategory("")}
                  class={` border-2 hover:border-transparent hover:bg-blue-500 ml-3 py-2 px-4 font-bold uppercase hover:text-white rounded transition-all border-blue-500 bg-transparent text-blue-500`}
                >
                  Tất cả
                </button>
                {CategoryArr?.map((i) => {
                  return (
                    <button
                      onClick={(e) => setCategory(i.value)}
                      class={`${
                        category == i.value
                          ? "bg-blue-500 text-white "
                          : " hover:border-transparent hover:bg-blue-500  hover:text-white border-blue-500 bg-transparent text-blue-500"
                      } border-2 ml-3 py-2 px-4 font-bold uppercase  rounded transition-all`}
                    >
                      {i.name}
                    </button>
                  );
                })}
              </div>
            </div>
            <CardDoc category={category} layout={layout} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTL;
