import React from "react";
import { ScrollIndicator } from './HeroSection';
import Job1Img from "./assets/Job1/image.png";
import Job2Img from "./assets/Job2/image.png";
import Job3Img from "./assets/Job3/image.png";

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      logo: Job1Img,
      place: "43872 USA.jpg",
      company: "Arizona State University",
      role: "Graduate Research Assistant",
      duration: "2024.09 - present",
      description:
        "Developing a caption-guided context pruning pipeline for multimodal tables, improving reasoning by filtering irrelevant rows/columns.",
      website: "",
      responsibilities: [
        "Built a human-curated multimodal table QA dataset to evaluate large language model performance on real-world tabular data.",
        "Implemented caption-guided pruning to improve downstream reasoning quality for MLLMs.",
      ],
      skills: ["Multimodal ML", "Python", "Dataset Curation", "Evaluation"]
    },
    {
      id: 2,
      logo: Job2Img,
      place: "",
      company: "University of Pennsylvania",
      role: "Research Programmer",
      duration: "2025.05 - 2025.08",
      description:
        "Designed graph-augmented retrieval systems using knowledge graphs and LLMs, improving recall over baselines.",
      website: "",
      responsibilities: [
        "Developed structure-aware retrieval using Neo4j and dense retrieval hybrids.",
        "Built autonomous retrieval agents combining Cypher queries with HNSW for hybrid symbolic-semantic reasoning.",
      ],
      skills: ["Neo4j", "Retrieval", "Graph ML", "Dense Retrieval"]
    },
    {
      id: 3,
      logo: Job3Img,
      place: "",
      company: "ANYO",
      role: "Software Engineering Intern",
      duration: "2023.02 - 2023.05",
      description:
        "Deployed a RASA chatbot on AWS EKS and implemented scalable CI/CD pipelines for chatbot deployments.",
      website: "",
      responsibilities: [
        "Deployed RASA chatbot on AWS EKS, reducing customer response time.",
        "Implemented CI/CD automation for chatbot releases, reducing turnaround time.",
      ],
      skills: ["RASA", "Kubernetes", "CI/CD", "AWS"]
    }
  ];

  

  return (
    <div id="experience-section" className="min-h-screen bg-black text-white flex items-start px-4 sm:px-8 py-6 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start gap-6 lg:gap-16 h-full">
        <div className="pt-1 hidden lg:block">
          <p className="text-m font-semibold text-[#8A8A8A] tracking-[0.2em] uppercase whitespace-nowrap" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            EXPERIENCE /
          </p>
        </div>
        <div className="flex-1 h-full overflow-y-visible lg:overflow-y-auto pl-0 lg:pl-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`.flex-1::-webkit-scrollbar { display: none; }`}</style>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <React.Fragment key={exp.id}>
                <div className="transition-all duration-700 ease-out pb-0">
                  <div className="flex flex-col lg:flex-row gap-4 items-start">
                    {/* Left section: Logo, Company, Role, Duration */}
                    <div className="w-full lg:w-56 flex flex-col items-start lg:items-start gap-0 pt-0">
                      {exp.logo && (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-16 h-16 lg:w-28 lg:h-20 object-contain mb-2"
                        />
                      )}
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          {exp.company}
                        </h3>
                        <p className="text-base text-[#8A8A8A] mt-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          {exp.role}
                        </p>
                        <p className="text-sm text-[#8A8A8A] mt-0" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          {exp.duration}
                        </p>
                      </div>
                    </div>

                    {/* Right section: Description or expanded info on hover */}
                    <div className="flex-1 pl-0 lg:pl-6 w-full">
                      <div className="transition-all duration-700 ease-out rounded-lg p-3 lg:p-4 bg-black text-white scale-100 ring-0" style={{ willChange: 'transform, opacity', fontFamily: 'DM Sans, sans-serif' }}>
                        <div className="transition-all duration-500 ease-out translate-y-0 opacity-100">
                          <h4 className="text-base font-bold mb-3 uppercase tracking-wider">
                            Responsibilities
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm mb-3">
                            {exp.responsibilities.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 pt-1 mb-0 border-t border-white/20">
                            {exp.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 bg-transparent text-white text-[10px] font-bold border border-white/60 rounded"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-full h-px bg-white my-0"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      
      <ScrollIndicator targetId="publications-section" />
    </div>
  );
};

export default ExperiencePage;