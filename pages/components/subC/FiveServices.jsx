import React from "react";
import Dservice from "./Dservice";
import dServices from "@/resources/dService";
const FiveServices = () => {
  const industries = [
    "HEALTH TECH",
    "FINTECH",
    "CRYPTO",
    "E-COMMERCE",
    "RETAIL",
    "NGOs",
    "SAAS",
    "PUBLIC SERVICE",
    "TRAVEL",
    "HOSPITALITY",
    "NON - PROFIT",
    "ENTERTAINMENT",
  ];
  return (
    <>
      <div className="text-center">
        <h4 className="text-base text-gray-500 mb-2 md:mb-4">Services</h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
          Expertise You Can Trust
        </h2>
      </div>
      {dServices.slice(0, 6).map((service, index) => (
        <Dservice key={index} {...service} />
      ))}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl md:text-2xl text-center text-gray-600 mb-6">
          We work with these industries
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {industries.map((industry, index) => (
            <div key={index} className="text-center">
              <p className="text-xs md:text-sm text-gray-500">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FiveServices;
