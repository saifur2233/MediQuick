import React from "react";
import HomeHeroSection from "./HomeHeroSection";
import FaqSection from "./FaqSection";
import QuestionSection from "./QuestionSection";
import AboutSection from "./AboutSection";

const Home = () => {
  return (
    <div>
      <HomeHeroSection></HomeHeroSection>
      <AboutSection></AboutSection>
      <FaqSection></FaqSection>
      <QuestionSection></QuestionSection>
    </div>
  );
};

export default Home;
