import React from 'react';
import localFont from "next/font/local";
import Navbar from './subC/Navbar';

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

const SocialMediaSection = () => {
  return (
    <div className={`${satoshi.variable} font-sans bg-black text-white min-h-screen flex flex-col relative`}>
      <Navbar />
      <main className="px-4 md:px-14 flex-grow flex flex-col justify-center h-screen">
        <div className="text-gray-400 text-sm mb-4">01/</div>
        <h1 className="text-2xl md:text-[50px] font-bold leading-tight tracking-[-2%] mb-6">Social Media</h1>
        <p className="text-base md:text-base text-gray-400 max-w-2xl">
          Ignite your growth with a comprehensive social media marketing strategy that makes your target audience follow and engage with your brand. When you build an authentic relationship with your prospects, they'll choose you without thinking twice.
        </p>
      </main>
      {/* our approach */}
      <section className="bg-white text-black py-16 px-8 h-screen flex flex-col justify-center items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
          <p className="text-lg text-gray-700 mb-8">
            We provide multi-channel social media marketing expertise while collaborating with you to develop a genuine online presence that gets love, likes, and shares – without relying on paid advertising.
          </p>
          <p className="text-lg text-gray-700">
            No matter what stage you're at in your social media journey, we can help. We've assisted companies of all sizes in creating and implementing social media strategies that skyrocketed their growth. We know what works and what doesn't, and we can help you avoid common pitfalls and mistakes. While there's no "one size fits all" solution to digital marketing services, there is a perfect solution for your brand. Let us help you find it.
          </p>
        </div>
      </section>
      {/* we can help you */}
      <div className="flex flex-col items-center justify-center py-12 bg-gray-50 h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">We can help you</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl">
        {/* Win customers for life */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-purple-100 p-4 rounded-full">
            <svg className="w-6 h-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 19.364A8.962 8.962 0 0012 21c4.418 0 8-3.582 8-8s-3.582-8-8-8a8.962 8.962 0 00-6.879 3.364M12 8v4l2 2" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-700">Win customers for life</h3>
        </div>

        {/* Be shared with new audiences */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-purple-100 p-4 rounded-full">
            <svg className="w-6 h-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-700">Be shared with new audiences</h3>
        </div>

        {/* Drive viral awareness */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-purple-100 p-4 rounded-full">
            <svg className="w-6 h-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-700">Drive viral awareness</h3>
        </div>

        {/* Build a strong community */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-purple-100 p-4 rounded-full">
            <svg className="w-6 h-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-700">Build a strong community</h3>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SocialMediaSection;
