import React from "react";
import background from "../assets/supply.png";

const Suppliers = () => {
  return (
    <div class="flex-1 w-full">
      <div class="flex flex-col w-full ">
        <div class="flex w-full h-[90vh] bg-[#C2C2C2] relative ">
          <div class="flex flex-col gap-3 w-full justify-start  border-2 items-center p-3">
            <div class="flex flex-col gap-1 w-full justify-center items-center">
              <div class="flex justify-start items-center w-full md:w-[80%] font-bold text-[2rem]">
                SUPPLY OF IT EQUIPMENTS AND ACCESSORIES
              </div>
              <div class="flex justify-start items-center w-full md:w-[80%] text-[1.5rem]">
                A good procurement strategy for IT hardware triangulates
                accurate demand planning, purchasing and ongoing service
                management and will prepare companies to efficiently and
                cost-effectively use technology in the future.
              </div>
            </div>
            <div class="flex justify-center z-10 mt-6 md:mt-20 w-full md:w-[70%] md:h-[70%] items-center ">
              <img
                src={background}
                alt=""
                loading="lazy"
                srcset=""
                class="w-[100%] h-[100%]"
              />
            </div>
          </div>
          {/* <img
            src={background}
            alt=""
            loading="lazy"
            srcset=""
            class="w-[100%] h-[100%]"
          /> */}
          {/* <div class="flex w-full justify-end items-center p-2 !px-4 text-white text-[0.9rem] md:text-[1.5rem] absolute bottom-4">
            Delivering Scalable and Efficient Software Solutions
          </div> */}
        </div>
        <div class="flex flex-col gap-3 p-4 justify-center items-center w-full bg-[#7F9DC7] relative ">
          <div class="flex w-full md:w-[80%] mt-[5rem] justify-start items-center text-[1rem] md:text-[2rem] font-semibold p-2">
            Our supplies range from:
          </div>
          <div class="flex   md:flex-row items-center gap-2  p-3 justify-center  w-full md:w-[80%]">
            <div class="flex w-[50%] justify-start items-center ">
              <ul  class="flex flex-col gap-4">
                <li class=" text-[0.7rem] md:text-[1.5rem] font-semibold list-disc ">Computer Hardware and Accessories</li>
                <li class=" text-[0.7rem] md:text-[1.5rem] font-semibold list-disc ">Desktops Computers</li>
                <li class=" text-[0.7rem] md:text-[1.5rem] font-semibold list-disc">Laptops</li>
                <li class=" text-[0.7rem] md:text-[1.5rem] font-semibold list-disc">Tablets</li>
                <li class=" text-[0.7rem] md:text-[1.5rem] font-semibold list-disc">Servers</li>
              </ul>
            </div>
            <div class="flex w-[50%] justify-start items-center ">
              <ul class="flex flex-col gap-4">
                <li class=" text-[0.7rem] md:text-[1.5rem] font-semibold list-disc">Printers, Scanners, Photocopiers</li>
                <li class=" text-[0.7rem] md:text-[1.5rem] font-semibold list-disc">Shredder</li>
                <li class=" text-[0.7rem] md:text-[1.5rem] font-semibold list-disc">Telephone and Fax Machines</li>
                <li class=" text-[0.7rem] md:text-[1.5rem] font-semibold list-disc">Toners</li>
                <li class=" text-[0.7rem] md:text-[1.5rem] font-semibold list-disc">etc.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
