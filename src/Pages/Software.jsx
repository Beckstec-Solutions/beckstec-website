import React from "react";
import background from "../assets/software.jpg";
import point from "../assets/point.png";

const Software = () => {
  return (
    <div class="flex-1 w-full">
      <div class="flex w-full ">
        <div class="flex w-full h-[100%] items-center relative justify-center">
          <img
            src={background}
            alt=""
            loading="lazy"
            srcset=""
            class="w-[100%] h-[100%]"
          />
          <div class="flex w-full justify-end items-center p-2 !px-4 text-white text-[0.9rem] md:text-[1.5rem] absolute bottom-4">
            Delivering Scalable and Efficient Software Solutions
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-center items-center p-3 md:p-6 w-full min-h-[60%] bg-[#32637A] ">
        <div class="flex flex-col justify-center gap-1 items-center h-[100%] w-full md:w-[50%] md:p-2 ">
          <div class="flex flex-col justify-center items-center w-full md:w-[70%] md:p-2  ">
            <div class="flex justify-between items-center gap-6 p-2 md:p-4  w-full">
              <div class="flex justify-center  items-center w-5 h-5">
                <img
                  src={point}
                  alt="Bullet"
                  loading="lazy"
                  srcset=""
                  class="w-[100%] h-[100%]"
                />
              </div>
              <div class="flex flex-1 justify-start items-center text-center text-white text-[0.9rem] md:text-[1rem] font-bold">
                Mobile App Development
              </div>
            </div>
            <div class="flex justify-between items-center gap-6 p-2 md:p-4  w-full">
              <div class="flex justify-center  items-center w-5 h-5">
                <img
                  src={point}
                  alt="Bullet"
                  loading="lazy"
                  srcset=""
                  class="w-[100%] h-[100%]"
                />
              </div>
              <div class="flex flex-1 justify-start items-center text-center text-white text-[0.9rem] md:text-[1rem] font-bold">
                Custom Software Development
              </div>
            </div>
            <div class="flex justify-between items-center gap-6 p-2 md:p-4  w-full">
              <div class="flex justify-center  items-center w-5 h-5">
                <img
                  src={point}
                  alt="Bullet"
                  loading="lazy"
                  srcset=""
                  class="w-[100%] h-[100%]"
                />
              </div>
              <div class="flex flex-1 justify-start items-center text-center text-white text-[0.9rem] md:text-[1rem] font-bold">
                Software Maintenance & support Service
              </div>
            </div>
            <div class="flex justify-between items-center gap-6 p-2 md:p-4  w-full">
              <div class="flex justify-center  items-center w-5 h-5">
                <img
                  src={point}
                  alt="Bullet"
                  loading="lazy"
                  srcset=""
                  class="w-[100%] h-[100%]"
                />
              </div>
              <div class="flex flex-1 justify-start items-center text-center text-white text-[0.9rem] md:text-[1rem] font-bold">
                Commercial off-the-shelf (COTS) software
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center w-full md:w-[50%] pt-3 mt-3 md:mt-0 md:pt-0 p-2 border-t-2 md:border-t-0 md:border-l-2 border-orange-700 ">
          <div class="flex justify- text-justify items-center flex-wrap w-full md:w-[60%] text-white text-[0.9rem] md:text-[1rem] ">
            We prioritise industry-leading development practices to ensure our
            clients' applications are scalable, efficient, and aligned with
            their business goals. Through innovative technologies, agile
            methodologies, and continuous optimisation, we don’t just develop
            software, we create solutions that drive growth, enhance user
            experience, and adapt to evolving needs.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
