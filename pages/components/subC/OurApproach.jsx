import React from 'react';

const OurApproachSection = (props) => {
  return (
    <section className="bg-white text-center py-16 px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Approach</h2>
      <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
        {props.description1}
      </p>
      <p className="text-lg text-gray-500 max-w-3xl mx-auto">
        {props.description2}
      </p>
    </section>
  );
};

export default OurApproachSection;
