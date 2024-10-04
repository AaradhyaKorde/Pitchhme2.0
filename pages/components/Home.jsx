import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "./subC/Navbar";

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

const PitchhmeLanding = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div
      className={`${satoshi.variable} font-sans bg-black text-white min-h-screen flex flex-col relative overflow-hidden`}>
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="flex flex-col min-h-screen relative z-10">
        <Navbar />

        {/* Main Section */}
        <main className="px-4 md:px-14 flex-grow flex flex-col justify-end">
          <div className="mb-14">
            <div className=" text-white text-sm mb-4">
              Marketing agency studio
            </div>
            <h1 className="text-2xl md:text-[50px] font-bold leading-tight tracking-[-2%] mb-6">
              Don't let marketing be the reason your business fails.
            </h1>
            <p className="text-base md:text-base text-gray-400">
              Startups, SMEs, and large enterprises come to{" "}
              <br className="hidden md:inline" /> Pitchhme to market themselves
              better and faster.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PitchhmeLanding;
