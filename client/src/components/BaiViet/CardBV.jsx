import React from "react";
import { AiFillHeart, AiOutlineHeart, AiFillWechat } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io";
function CardBV({ data }) {
  return (
    <div className="">
      <>
        {data &&
          data.map((item, index) => {
            return (
              <div className=" bg-gray-100 my-1  hover:bg-white hover:shadow-lg hover:shadow-cyan-500/50  md:w-[95%]  md:h-[120px] h-[110px]   rounded-md shadow-md justify-center items-center ">
                <div className="flex justify-start items-center py-[2px] ml-2">
                  <img
                    src="https://lh3.googleusercontent.com/a-/ACNPEu91mDaPk1btJWORfRvd_fOkAQ1R4YTpTGeF8rlFeA=s96-c"
                    className="md:h-[37px] md:w-[37px] w-8 h-8 rounded-full mx-2 "
                  />
                  <span className="md:text-[13px] text-sm text-blue-400 ">
                    {" "}
                    {item.creater}
                  </span>
                  <span className=" mx-2 md:text-[13px] text-sm text-gray-400">
                    {" "}
                    22 Phút trước
                  </span>
                </div>
                <div className="mt-2 ml-2 justify-start">
                  <p className="text-[10px] text-gray-500 ">
                    <span className="uppercase bg-[#eaeaea] text-[#909399] rounded-md p-1 mx-1">
                      {item?.tag}
                    </span>
                    <span className="bg-[#eaeaea] text-[#909399] rounded-md p-1 mx-1">
                      {item?.nameTag}
                    </span>
                  </p>
                  <p className="md:text-[18px] text-[16px] font-light  ">
                    {item?.title}
                  </p>
                </div>
                <div className="flex justify-start items-center text-md ml-2">
                  <p className="mx-1 flex justify-center items-center">
                    <FaRegEye className="text-xl  text-gray-800" />
                    {item.view}
                  </p>
                  <p className="mx-1 flex justify-center items-center">
                    <AiFillWechat className="text-xl text-gray-800" />
                  </p>
                  <p className="mx-1 flex justify-center items-center">
                    <AiOutlineHeart className="text-xl text-gray-800" />
                    {item?.like.length}
                  </p>
                </div>
                <div></div>
              </div>
            );
          })}
      </>
    </div>
  );
}

export default CardBV;
