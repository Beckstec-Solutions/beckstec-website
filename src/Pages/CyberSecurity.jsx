import React from "react";
import background from "../assets/cyber.png";

const CyberSecurity = () => {
  const services = [
    "Digital Forensics",
    "Application Security",
    "Cloud Security",
    "Physical Security Integration",
    "Vulnerability Assessment and Penetration Testing (VAPT)",
  ];
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
          <div class="flex flex-col w-[90%] md:w-[60%] lg:w-[50%] justify-start items-center p-2 md:!px-4 text-white absolute left-10 top-[10%] sm:top-[10%] md:top-[35%] lg:top-[40%]">
            <div class="flex w-full justify-start items-center md:p-1 text-[1rem] md:text-[2rem] lg:text-[3rem] font-bold">
              CyberSecurity
            </div>
            <div class="flex w-full flex-wrap justify-start items-center md:p-2 text-[0.8rem] md:text-[1rem] lg:text-[1.5rem] font-bold">
              In an increasingly interconnected world, safeguarding digital
              assets is paramount.
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center p-3 md:p-6 w-full min-h-[60%] bg-[#0B296B] ">
        <div class=" flex justify-center text-white items-center w-full text-[1.2rem] font-bold">
          Our commitment to top-tier cybersecurity practices ensures that our
          clients' data and systems remain safeguarded against evolving
          threats.Through robust security protocols, advanced threat
          intelligence, and continuous proactive monitoring, we don’t just
          mitigate existing vulnerabilities—we stay ahead of emerging risks,
          ensuring resilience in an ever-changing threat landscape.
        </div>
        <div class="flex flex-wrap justify-center gap-8 mt-5 items-center md:p-3 w-full">
          {services.map((text) => (
            <div className="flex flex-wrap w-[300px] h-[130px] text-center justify-center items-center p-3 text-[1rem] bg-gradient-to-t from-[#1B5177] to-[#737373] text-white font-bold rounded-lg">
             {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
