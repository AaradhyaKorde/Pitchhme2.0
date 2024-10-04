import React from "react";
import Image from "next/image";

const SolutionsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-32">
      {/* Solutions Heading */}
      <div className="text-center mb-10">
        <p className="text-black text-sm">Solutions</p>
        <h2 className="text-[48px] font-bold mt-2 font-['Satoshi_Variable'] leading-[56px] tracking-[-0.02em] text-center">
          If they resonate... you're not alone.
          <br />
          We can help.
        </h2>
        <p className="mt-4 text-[20px] font-['Inter'] font-normal leading-[32px] text-center">
          Led by{" "}
          <span className="text-[#5414F5] cursor-pointer">Arpit Pandey</span>{" "}
          and <span className="text-[#5414F5] cursor-pointer">Chirag Bum</span>,
          our studio delivers the quality of a big,
          <br /> expensive agency with the pace and agility of a dedicated team.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row md:justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
        {/* Our Mission Image */}
        <div className="relative">
          <h2 className="absolute text-[#5414F5] top-[17rem] left-[680px] flex items-center">
            Our Vision
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="#5414F5"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h2>
          <h2 className="absolute text-[#5414F5] top-[30rem] right-[680px] flex items-center">
            Our Mission
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="#5414F5"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h2>
          <Image
            src="/images/vm.webp"
            alt="Our Mission"
            width={1020}
            height={742}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
