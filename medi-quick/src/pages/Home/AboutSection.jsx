import React from "react";

const AboutSection = () => {
  return (
    <div className="hero pb-6 ">
      <div className="hero-content flex-col gap-8 lg:flex-row lg:px-16">
        <img
          src="https://i.ibb.co/hVrhsb4/612x612.jpg"
          className="max-w-lg rounded-lg"
        />
        <div>
          <p className="font-bold text-primary">MEDIQUICK</p>
          <h1 className="text-5xl font-bold">Why You Choose MediQuick?</h1>
          <p className="py-6">
            There are several compelling reasons why one might choose to use
            MediQuick as their counterfeit drug detection system of choice. One
            of the main reasons is the reliability and effectiveness of its
            blockchain technology in preventing the distribution of counterfeit
            drugs. By using a secure and transparent record of each transaction
            in the supply chain, MediQuick can ensure the authenticity of every
            medication and detect any attempts to distribute counterfeit drugs.
            Another reason to choose MediQuick is its commitment to protecting
            public health.
          </p>
          <button className="btn btn-outline btn-primary gap-2">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
