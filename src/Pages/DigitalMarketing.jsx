import React from "react";
import background from "../assets/digitalMarketing.png";
import background2 from "../assets/DigitalMarket-side.png";

const DigitalMarketing = () => {
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
      <div class="flex flex-col justify-center items-center p-2 md:p-6 w-full min-h-[60%] bg-[#015892] ">
        <div class="flex flex-col w-full justify-center gap-3 items-center p-2">
          <div class="flex justify-center items-center flex-wrap text-white w-full text-center text-[1rem] font-bold">
            Driving Brand Growth Through Strategic Digital Marketing
          </div>
          <div class="flex justify-center items-center text-white flex-wrap w-full text-center text-[0.8rem] font-bold">
            We leverage cutting-edge strategies to ensure our clients’ brands
            reach the right audience, maximize engagement, and achieve
            measurable results.
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-start w-full md:p-2 items-center ">
          <div class="flex flex-col w-full md:w-[50%] min-h-[100%] order-2 mt-2 md:order-1 justify-start items-center">
            <div class="w-full justify-center mt-3 lg:mt-0 items-center text-center">
                <span class="p-2 px-4 justify-center items-center text-center font-bold text-[0.9rem] text-white">Key Areas</span>
            </div>
            <div class="flex flex-col gap-6 justify-center items-center w-full p-2 mt-3">
                <div class="flex justify-center gap-4 items-center w-full md:w-[90%]">
                    <div class="flex justify-center items-center w-[50%] md:w-[45%] p-2 md:p-3 text-[0.7rem] lg:text-[0.9rem] bg-[#D9D9D9] font-bold text-wrap text-center rounded-tl-3xl">Email Marketing</div>
                    <div class="flex justify-center items-center w-[50%] md:w-[45%] p-2 md:p-3 text-[0.7rem] lg:text-[0.9rem] bg-[#D9D9D9] font-bold text-wrap text-center rounded-tr-3xl">Affiliate Marketing</div>
                </div>
                <div class="flex justify-center gap-4 items-center w-full md:w-[90%]">
                    <div class="flex justify-center items-center w-[50%] md:w-[45%] p-2 md:p-3 text-[0.7rem] lg:text-[0.9rem] bg-[#D9D9D9] font-bold text-wrap text-center">Mobile Marketing</div>
                    <div class="flex justify-center items-center w-[50%] md:w-[45%] p-2 md:p-3 text-[0.7rem] lg:text-[0.9rem] bg-[#D9D9D9] font-bold text-wrap text-center">Content Marketing</div>
                </div>
                <div class="flex justify-center gap-4 items-center w-full md:w-[90%]">
                    <div class="flex justify-center items-center w-[50%] md:w-[45%] p-2 md:p-3 text-[0.7rem] lg:text-[0.9rem] bg-[#D9D9D9] font-bold text-wrap text-center">Influencer Marketing</div>
                    <div class="flex justify-center items-center w-[50%] md:w-[45%] p-2 md:p-3 text-[0.7rem] lg:text-[0.9rem] bg-[#D9D9D9] font-bold text-wrap text-center">Social Media Marketing</div>
                </div>
                <div class="flex justify-center gap-4 items-center w-full md:w-[90%]">
                    <div class="flex justify-center items-center w-[50%] md:w-[45%] p-2 md:p-3 text-[0.7rem] lg:text-[0.9rem] bg-[#D9D9D9] font-bold text-wrap text-center rounded-bl-3xl">Pay-Per-Click (PPC) Advertising</div>
                    <div class="flex justify-center items-center w-[50%] md:w-[45%] p-2 md:p-3 text-[0.7rem] lg:text-[0.9rem] bg-[#D9D9D9] font-bold text-wrap text-center rounded-br-3xl">Search Engine Optimization(SEO)</div>
                </div>
            </div>
          </div>
          <div class="flex w-full md:w-[50%] order-1 md:order-2 justify-center items-center">
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
    </div>
  );
};

export default DigitalMarketing;
