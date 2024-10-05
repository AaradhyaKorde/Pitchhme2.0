import React from "react";
import Image from "next/image";

const Dservice = (props) => {
  const services = [props.s1, props.s2, props.s3, props.s4, props.s5].filter(
    Boolean
  ); // Filter out any undefined or null values

  return (
    <section>
      <div className="px-24 flex flex-col md:flex-row">
        <div className="flex-1 pr-6 mb-6 md:mb-0">
          <h3 className="text-3xl font-semibold mb-4">{props.title}</h3>
          <p className="text-gray-900 mb-6">{props.description}</p>
          <div className="flex flex-wrap gap-4">
            {services.map((service, index) => (
              <span
                key={index}
                className=" text-gray-900 bg-gray-100 py-2 px-4 rounded-full text-sm">
                {service}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/images/p1.png"
            alt="Social Media Illustration"
            width={500}
            height={300}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Dservice;
