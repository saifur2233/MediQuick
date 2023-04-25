import React from "react";

const About = () => {
  return (
    <div className="py-20">
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">MediQuick</h1>
            <p className="py-6">
              "Say no to fake drugs with MediQuick - Protecting your health is
              our top priority"
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/Zd90Tz7/menufacturer.jpg"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">About MediQuick!</h1>
            <p className="py-6">
              MediQuick is a sophisticated technology designed to detect
              counterfeit drugs and ensure that patients receive genuine
              pharmaceuticals. It is a state-of-the-art system that uses a
              combination of advanced software, hardware, and analytical methods
              to verify the authenticity of medications.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/mSVz0FV/pharmacy2.png"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Why You Choose MediQuick?</h1>
            <p className="py-6">
              There are several compelling reasons why one might choose to use
              MediQuick as their counterfeit drug detection system of choice.
              One of the main reasons is the reliability and effectiveness of
              its blockchain technology in preventing the distribution of
              counterfeit drugs. By using a secure and transparent record of
              each transaction in the supply chain, MediQuick can ensure the
              authenticity of every medication and detect any attempts to
              distribute counterfeit drugs. Another reason to choose MediQuick
              is its commitment to protecting public health.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
