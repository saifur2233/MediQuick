import React from "react";

const HomeHeroSection = () => {
  return (
    <div className="hero min-h-screen py-6">
      <div className="hero-content flex-col gap-8 lg:flex-row-reverse lg:px-16">
        <img
          src="https://i.ibb.co/603BTD2/istockphoto-1022854424-612x612.jpg"
          className="max-w-lg rounded-lg"
        />

        <div>
          <p className="font-bold text-primary">MEDIQUICK</p>
          <h1 className="text-5xl font-bold">
            MediQuick The Solution of Drug Supply Chain
          </h1>
          <p className="py-6">
            MediQuick's blockchain technology provides a comprehensive solution
            to the challenges faced in the drug supply chain. The system allows
            for secure and transparent tracking of each transaction in the
            supply chain, from the manufacturer to the end user. This ensures
            that the drugs are genuine and have not been tampered with or
            substituted with counterfeit versions.
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

export default HomeHeroSection;
