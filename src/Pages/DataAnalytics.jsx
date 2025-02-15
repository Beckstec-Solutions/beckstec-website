import React from "react";
import background from "../assets/dataAnalytics.png";
import background2 from "../assets/dataAnalytic.png";
import { MoveRight } from "lucide-solid";

const DataAnalytics = () => {
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
          <div class="flex flex-col w-full text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] font-bold justify-start items-center p-2  text-white absolute top-[12%] sm:top-[15%] md:top-[22%] lg:top-[22%] text-center">
            We transform vast amounts of data and extract actionable insights
            with smarter decisions, innovation, and a competitive edge.
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-center items-center p-2 md:p-6 w-full min-h-[60%] bg-[#0B296B] ">
        <div class="flex flex-col order-2 md:order-1 justify-center items-center gap-1 w-full md:w-[50%]">
          <div class="flex justify-center text-center text-white font-bold text-[1.2rem] md:text-[1.5rem] items-center min-h-[20rem] w-full lg:w-[80%]">
            We leverage advanced analytics, machine learning, and data mining to
            help clients extract valuable insights, enabling informed decisions,
            predictive analysis, and business growth.
          </div>
          <div class="flex justify-center p-2 items-center w-full">
            <a href="#contact">
              <button class="flex justify-center items-center text-[0.9rem] font-medium p-2 text-white bg-[#D85A03] hover:bg-white hover:text-[#D85A03] rounded-r-3xl">
                Reach us <MoveRight class="ml-1 px-1 font-bold w-[2rem]" />
              </button>
            </a>
          </div>
        </div>
        <div class="flex justify-center mt-7 order-1 md:order-2 items-center w-full md:w-[50%] relative min-h-[100%] ">
          <div class="flex flex-col justify-center items-center w-[90%] md:w-[80%] relative rounded-b-3xl h-[16rem] md:h-[23rem]">
            <img
              src={background2}
              alt="Data Analytics"
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

export default DataAnalytics;
