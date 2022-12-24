import React from "react";
import { AiFillHeart, AiOutlineHeart, AiFillWechat } from "react-icons/ai";
import { FaLockOpen, FaLock, FaRegEye } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
function CardTL({ data }) {
  return (
    <div className="w-full  justify-center items-center ">
      <>
        {data &&
          data.map((item, index) => {
            return (
              <>
                <div className="flex justify-center items-center w-full">
                  <div class="flex justify-start items-start bg-white shadow-lg rounded-lg  my-1 shadow-green-200/30 w-[95%] ">
                    <div class="flex items-start px-4 py-4">
                      <img
                        class="w-12 h-12 rounded-full object-cover mr-4 shadow"
                        src={item.createrPhoto}
                        alt="avatar"
                      />
                      <div class="">
                        <div class="flex items-center justify-between">
                          <h2 class="text-lg font-semibold text-gray-900 mt-1">
                            {item.creater}
                          </h2>
                          <small class="text-sm text-gray-700 mx-2">
                            {item.date}
                          </small>
                        </div>
                        {/* <p class="text-gray-700">{item.date} </p> */}
                        <div>
                          <div class="inline-block relative py-1 text-xs mx-1">
                            <div class="absolute inset-0 text-blue-200 flex">
                              <svg height="100%" viewBox="0 0 50 100">
                                <path
                                  d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <div class="flex-grow h-full -ml-px bg-blue-200 rounded-md rounded-l-none"></div>
                            </div>
                            <span class="relative text-blue-500 uppercase font-semibold pr-px">
                              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              {item.tag}
                              <span>&nbsp;</span>
                            </span>
                          </div>
                          <div class="inline-block relative py-1 text-xs mx-1">
                            <div class="absolute inset-0 text-blue-200 flex">
                              <svg height="100%" viewBox="0 0 50 100">
                                <path
                                  d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <div class="flex-grow h-full -ml-px bg-blue-200 rounded-md rounded-l-none"></div>
                            </div>
                            <span class="relative text-blue-500 uppercase font-semibold pr-px">
                              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              {item.nameTag}
                              <span>&nbsp;</span>
                            </span>
                          </div>
                        </div>
                        <p class="mt-3 text-gray-700 text-sm">{item.title}</p>
                        <div class="mt-4 flex items-center">
                          <div class="flex mr-2 text-gray-700 text-sm mr-3 cursor-pointer">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              class="w-4 h-4 mr-1"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                            <span>{item.like.length}</span>
                          </div>
                          <div class="flex mr-2 text-gray-700 text-sm mr-8 cursor-pointer">
                            <svg
                              fill="#000000"
                              width="16px"
                              height="16px"
                              viewBox="0 0 56 56"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M 28.0103 46.4556 C 44.5664 46.4556 56 33.0754 56 28.8954 C 56 24.6949 44.5459 11.3351 28.0103 11.3351 C 11.6795 11.3351 0 24.6949 0 28.8954 C 0 33.0754 11.6590 46.4556 28.0103 46.4556 Z M 28.0103 43.2181 C 14.5277 43.2181 3.5858 31.7845 3.5858 28.8954 C 3.5858 26.4570 14.5277 14.5726 28.0103 14.5726 C 41.4518 14.5726 52.4142 26.4570 52.4142 28.8954 C 52.4142 31.7845 41.4518 43.2181 28.0103 43.2181 Z M 28.0103 40.3700 C 34.3828 40.3700 39.5055 35.1449 39.5055 28.8954 C 39.5055 22.4819 34.3828 17.4208 28.0103 17.4208 C 21.5968 17.4208 16.4537 22.4819 16.4947 28.8954 C 16.5152 35.1449 21.5968 40.3700 28.0103 40.3700 Z M 28.0103 32.7066 C 25.8793 32.7066 24.1581 30.9854 24.1581 28.8954 C 24.1581 26.7849 25.8793 25.0842 28.0103 25.0842 C 30.1208 25.0842 31.8420 26.7849 31.8420 28.8954 C 31.8420 30.9854 30.1208 32.7066 28.0103 32.7066 Z" />
                            </svg>
                            <span className="ml-1">{item.view}</span>
                          </div>
                          <div class="flex mr-2 text-gray-700 text-sm  hover:shadow-xl hover:font-extralight cursor-pointer hover:shadow-pink-200/30">
                            <svg
                              width="16px"
                              height="16px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.293 14.293a1 1 0 0 1 1.414 0L12 16.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414ZM11.293 5.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L12 7.414 9.707 9.707a1 1 0 0 1-1.414-1.414l3-3Z"
                                fill="#000"
                              />
                            </svg>
                            <span>Xem Chi Tiết</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </>
    </div>
  );
}

export default CardTL;
