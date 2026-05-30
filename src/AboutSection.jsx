import React, { useState, useEffect } from 'react';
import { ScrollIndicator } from './HeroSection';

const AboutSection = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const setHeight = () => {
      const header = document.querySelector('header');
      const h = header ? Math.round(header.getBoundingClientRect().height) : 0;
      setHeaderHeight(h);
    };
    setHeight();
    window.addEventListener('resize', setHeight);
    return () => window.removeEventListener('resize', setHeight);
  }, []);

  return (
    // Main Container: Dark theme, full viewport height minus header, vertically centered content
    <div style={{ minHeight: `calc(100vh - ${headerHeight}px)` }} className="bg-black text-white flex items-center px-4 sm:px-8 py-6 relative">

      {/* Max-width container with a flex layout for the two main columns */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-40">

        {/* --- Column 1: "ABOUT ME /" Label --- */}
        {/* This is the "plane" section on the far left. 'pt-1.5' helps align it with the heading. */}
        <div className="pt-1.5 hidden lg:block">
          <p
            className="text-m font-semibold text-[#8A8A8A] tracking-[0.2em] uppercase whitespace-nowrap"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            ABOUT ME /
          </p>
        </div>

        {/* --- Column 2: Main Content --- */}
        {/* This container takes the remaining space */}
        <div className="flex-1">

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 sm:mb-8 text-white"
            style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.02em' }}
          >
            GREAT AI ISN’T MAGIC, IT’S GOOD ENGINEERING DONE WELL.
          </h2>

          {/* Container for the floating image and wrapping text */}
          <div>
            {/* Floating Image:
              - Smaller size: w-48 h-48
              - float-left: Pushes the image to the left, allowing text to wrap on its right.
              - mr-8 mb-4: Adds margin (space) to the right and bottom of the image.
              - shape-outside-circle: Makes the text wrap in a curve around the image.
            */}
            <img
              src="profile4.jpeg"
              alt="Hugo Vicario"
              className="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover float-right mr-0 sm:mr-6 mb-4 ml-4 sm:ml-8 shape-outside-circle border-2 border-[#8A8A8A]"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg width="192" height="192" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="96" cy="96" r="96" fill="%231A1A1A"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%238A8A8A" font-size="16" dy=".3em"%3EProfile%3C/text%3E%3C/svg%3E';
              }}
            />

            {/* Paragraph Text: This will automatically wrap around the floated image above. */}
            <p
              className="text-sm sm:text-base leading-relaxed text-white "
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Hello — I'm Prasham Titiya, a motivated computer science graduate student focused on artificial intelligence, machine learning, and scalable software systems. I build end-to-end AI applications including retrieval-augmented systems and multimodal reasoning pipelines.
              <br />
              <br />
              My work combines research and engineering: designing models and building reliable infrastructure to deploy them at scale. I enjoy Python development, improving system performance, and designing research-driven solutions across NLP, knowledge graphs, and vision-language tasks.
            </p>

          
          </div>

          {/* Button removed per request */}

        </div>
      </div>
      
      <ScrollIndicator targetId="experience-section" />
    </div>
  );
};

export default AboutSection;