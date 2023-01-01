import React from "react";
import { Header, Skenleton } from "../components";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <>
          {/* <Skenleton /> */}

          <div class="group relative flex cursor-pointer justify-between rounded-xl bg-blue-200 before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-blue-600 before:opacity-0 before:transition before:duration-500 hover:before:opacity-100">
            <div class="relative space-y-1 p-4">
              <div>
                <div class="relative h-6 text-blue-800 text-sm">
                  <span class="transition duration-300 group-hover:invisible group-hover:opacity-0">
                    plapla
                  </span>
                  <a
                    href=""
                    class="w-max flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0"
                  >
                    <span>Xem Ngay </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <img
              class="absolute bottom-0 right-6 w-[6rem] h-[6rem] rounded-full transition duration-300 group-hover:scale-[1.3]"
              src="https://i.ibb.co/pxBpkF4/Psyduck.png"
              alt=""
            />
          </div>
        </>
      </div>
    </div>
  );
}

export default Home;
