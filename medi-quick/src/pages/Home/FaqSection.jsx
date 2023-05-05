import React from "react";

const FaqSection = () => {
  return (
    <div className="hero py-12">
      <div className="hero-content flex-col gap-8 lg:flex-row">
        <img
          src="https://i.ibb.co/59qfG8f/faq-illustration.png"
          alt="faq-illustration"
        />
        <div>
          <p className="text-primary text-xl font-bold">FAQ</p>
          <h1 className="text-5xl font-bold pb-6">
            Frequently Asked Questions
          </h1>

          <div
            tabIndex={0}
            className="my-3 collapse collapse-plus border border-primary bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium text-primary">
              How does MediQuick detect counterfeit drugs?
            </div>
            <div className="collapse-content">
              <p className="text-white">
                MediQuick utilizes blockchain technology to track each
                transaction in the drug supply chain and ensure that medications
                are genuine and have not been tampered with or substituted with
                counterfeit versions.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="my-3 collapse collapse-plus border border-primary bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium text-primary">
              What are the benefits of using MediQuick?
            </div>
            <div className="collapse-content">
              <p className="text-white">
                Using MediQuick provides peace of mind, knowing that medications
                are safe and genuine, and that patients are protected from
                counterfeit drugs. Additionally, the system provides enhanced
                visibility and accountability in the supply chain, improving
                efficiency and reducing costs.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="my-3 collapse collapse-plus border border-primary bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium text-primary">
              How does MediQuick ensure the security of the drug supply chain?
            </div>
            <div className="collapse-content">
              <p className="text-white">
                The system utilizes a secure and transparent record of each
                transaction in the supply chain, ensuring that medications are
                tracked and accounted for at every step of the process. This
                helps to prevent fraud and reduce the risk of counterfeit drugs
                entering the market.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="my-3 collapse collapse-plus border border-primary bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium text-primary">
              Does MediQuick offer customer support?
            </div>
            <div className="collapse-content">
              <p className="text-white">
                Yes, MediQuick provides comprehensive customer support,
                including technical assistance and guidance on using the system
                effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
