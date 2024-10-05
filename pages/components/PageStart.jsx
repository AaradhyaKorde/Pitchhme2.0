import React from 'react';
import localFont from "next/font/local";
import Navbar from './subC/Navbar';
import OurApproachSection from './subC/OurApproach';
import ourApproachData from '../../resources/ourApproach';
import helpSectionData from '../../resources/weCanHelpYou';
import WeCanHelpYou from './subC/WeCanHelpYou';
import ServicesIncluded from './subC/ServicesIncluded';
import servicesIncluded from '../../resources/servicesIncluded';
import TheProcessWeFollow from './subC/TheProcessWeFollow';
import OurResults from './subC/OurResults';
import ourResults from '../../resources/ourResults';
import OurPlatforms from './subC/OurPlatforms';
import platforms from '../../resources/ourPlateforms';

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const PageStartSection = (props) => {
  return (
    <div className={`${satoshi.variable} font-sans bg-black text-white min-h-screen flex flex-col relative`}>
      <Navbar />
      <main className="px-4 md:px-14 flex-grow flex flex-col justify-center min-h-screen">
        <h1 className="text-2xl md:text-[50px] font-bold leading-tight tracking-[-2%] mb-6">{props.title}</h1>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl">
          {props.description}
        </p>
      </main>
      <OurApproachSection description1={ourApproachData[props.number].description1} description2={ourApproachData[props.number].description2}/>
      <WeCanHelpYou text1={helpSectionData[props.number].text1} text2={helpSectionData[props.number].text2} text3={helpSectionData[props.number].text3} text4={helpSectionData[props.number].text4} />
      <ServicesIncluded service1={servicesIncluded[props.number].service1} service2={servicesIncluded[props.number].service2} service3={servicesIncluded[props.number].service3} service4={servicesIncluded[props.number].service4} service5={servicesIncluded[props.number].service5} service6={servicesIncluded[props.number].service6} service7={servicesIncluded[props.number].service7} service8={servicesIncluded[props.number].service8} />
      <TheProcessWeFollow />
      <OurResults result1={ourResults[props.number].result1} result2={ourResults[props.number].result2} result3={ourResults[props.number].result3} result4={ourResults[props.number].result4} />
      <OurPlatforms link1={platforms[props.number].link1} link2={platforms[props.number].link2} link3={platforms[props.number].link3} link4={platforms[props.number].link4} link5={platforms[props.number].link5} />
    </div>
  );
};

export default PageStartSection;
