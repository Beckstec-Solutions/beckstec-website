import React from "react";
import background from "../assets/ItConsulting.png"
import background2 from "../assets/ItConsulting2.png"
const ITConculting = () => {
  return (
    <div class="flex-1 flex-col w-full">
      <div class="flex w-full ">
        <div class="flex w-full h-[100%] items-center relative justify-center">
          <img
            src={background}
            alt=""
            loading="lazy"
            srcset=""
            class="w-[100%] h-[100%]"
          />
        </div>
      </div>
      <div class="flex w-full ">
        <div class="flex w-full h-[100%] items-center relative justify-center">
          <img
            src={background2}
            alt=""
            loading="lazy"
            srcset=""
            class="w-[100%] h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default ITConculting;
