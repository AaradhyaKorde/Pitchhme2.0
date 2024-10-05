import { HoverEffect } from "./ui/card-hover-effect";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CardHoverEffectDemo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#090a15] text-white py-10 px-4 md:px-8 lg:px-16">
      <HoverEffect items={isMobile ? projects.slice(0, 4) : projects} />
    </div>
  );
}

export const projects = [
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/1.svg"
        alt="Stripe Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/2.svg"
        alt="Netflix Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/3.svg"
        alt="Google Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/4.svg"
        alt="Meta Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/4.svg"
        alt="Amazon Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/4.svg"
        alt="Microsoft Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/7.svg"
        alt="Apple Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/8.svg"
        alt="Tesla Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/9.svg"
        alt="Adobe Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/4.svg"
        alt="Salesforce Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/4.svg"
        alt="Twitter Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
  {
    description: "Good marketers are hard to find, never stick long.",
    icon: (
      <Image
        src="/images/4.svg"
        alt="LinkedIn Icon"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
    ),
  },
];
