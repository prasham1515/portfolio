import React from 'react';
import { ScrollIndicator } from './HeroSection';
import awsImg from './assets/Skills/aws.jpg';
import cicdImg from './assets/Skills/cicd.jpg';
import d3Img from './assets/Skills/d3js.jpg';
import dockerImg from './assets/Skills/docker.jpg';
import gensimImg from './assets/Skills/gensim.jpg';
import jsImg from './assets/Skills/javascript.jpg';
import k8sImg from './assets/Skills/kubernetes.jpg';
import neo4jImg from './assets/Skills/neo4j.jpg';
import nltkImg from './assets/Skills/nltk.jpg';
import nodeImg from './assets/Skills/nodejs.jpg';
import opencvImg from './assets/Skills/opencv.jpg';
import pythonImg from './assets/Skills/python.jpg';
import pytorchImg from './assets/Skills/pytorch.jpg';
import rasaImg from './assets/Skills/rasa.jpg';
import sqlImg from './assets/Skills/sql.jpg';
import tfImg from './assets/Skills/tensorflow.jpg';
import mongoImg from './assets/Skills/mongodb.jpg';
import vllmImg from './assets/Skills/vllm.jpg';
import ollamaImg from './assets/Skills/ollama.jpg';
import librosaImg from './assets/Skills/librosa.jpg';
import faissImg from './assets/Skills/faiss.jpg';

const SkillsSection = () => {
  const programming = ['Python', 'JavaScript'];
  const frameworks = ['RASA', 'PyTorch', 'TensorFlow', 'NLTK', 'Gensim', 'OpenCV', 'Node.js', 'D3.js', 'vLLM', 'Ollama', 'Librosa', 'FAISS'];
  const devops = ['Docker', 'Kubernetes', 'CI/CD', 'AWS'];
  const databases = ['SQL', 'Neo4j', 'MongoDB'];
  const ai = ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Data Visualization', 'Evaluation'];
  const llm = ['Multimodal LLMs', 'Fine-tuning', 'Machine Unlearning', 'Attention Mechanisms', 'Prompt Engineering'];
  const ir = ['RAG', 'VectorDB', 'Heterogeneous Data', 'Embeddings', 'ANNs', 'Sparse Retrieval','Hybrid Search', 'Reranking'];

  const certifications = [
    {
      title: 'IBM AI Analyst',
      issuer: 'IBM',
      link: 'https://courses.ibmcep.cognitiveclass.ai/certificates/97ea27a2a34044c38f2a6c346a2c2703'
    }
  ];

  const skillImages = [
    pythonImg, jsImg, sqlImg, neo4jImg, dockerImg, k8sImg, awsImg, cicdImg, nodeImg, d3Img, gensimImg, nltkImg, opencvImg, pytorchImg, tfImg, rasaImg, mongoImg
  ];

  const imageMap = {
    Python: pythonImg,
    JavaScript: jsImg,
    SQL: sqlImg,
    Neo4j: neo4jImg,
    Docker: dockerImg,
    Kubernetes: k8sImg,
    AWS: awsImg,
    'CI/CD': cicdImg,
    'Node.js': nodeImg,
    'D3.js': d3Img,
    Gensim: gensimImg,
    NLTK: nltkImg,
    'OpenCV': opencvImg,
    PyTorch: pytorchImg,
    TensorFlow: tfImg,
    RASA: rasaImg,
    MongoDB: mongoImg,
    vLLM: vllmImg,
    Ollama: ollamaImg,
    Librosa: librosaImg,
    FAISS: faissImg

  };

  return (
    <div id="skills-section" className="min-h-screen bg-black text-white flex items-start px-4 sm:px-8 py-8 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-40 h-full">
        <div className="pt-1.5 hidden lg:block">
          <p className="text-m font-semibold text-[#8A8A8A] tracking-[0.2em] uppercase whitespace-nowrap" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            SKILLS /
          </p>
        </div>

        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 sm:mb-8 text-white" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.02em' }}>
            Technical Skills & Certifications
          </h2>

          <div className="space-y-8 mb-6">
            <section>
              <h3 className="text-sm text-[#8A8A8A] mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {programming.map((s, i) => (
                  <div key={i} className="flex flex-col items-center w-36">
                    <div className="w-12 h-12 flex items-center justify-center mb-1">
                      {imageMap[s] ? (
                        <img src={imageMap[s]} alt={s} className="w-full h-full object-contain" />
                      ) : (
                        <div className="w-full h-full" />
                      )}
                    </div>
                    <span className="w-full px-3 py-1 bg-transparent text-white text-xs font-semibold border border-white/30 rounded text-center">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-sm text-[#8A8A8A] mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-3">
                {frameworks.map((s, i) => (
                  <div key={i} className="flex flex-col items-center w-36">
                    <div className="w-12 h-12 flex items-center justify-center mb-1">
                      {imageMap[s] ? (
                        <img src={imageMap[s]} alt={s} className="w-full h-full object-contain" />
                      ) : (
                        <div className="w-full h-full" />
                      )}
                    </div>
                    <span className="w-full px-3 py-1 bg-transparent text-white text-xs font-semibold border border-white/30 rounded text-center">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-sm text-[#8A8A8A] mb-3">DevOps & Cloud</h3>
              <div className="flex flex-wrap gap-3">
                {devops.map((s, i) => (
                  <div key={i} className="flex flex-col items-center w-36">
                    <div className="w-12 h-12 flex items-center justify-center mb-1">
                      {imageMap[s] ? (
                        <img src={imageMap[s]} alt={s} className="w-full h-full object-contain" />
                      ) : (
                        <div className="w-full h-full" />
                      )}
                    </div>
                    <span className="w-full px-3 py-1 bg-transparent text-white text-xs font-semibold border border-white/30 rounded text-center">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8 mb-6">
            <section>
              <h3 className="text-sm text-[#8A8A8A] mb-3">Database Systems</h3>
              <div className="flex flex-wrap gap-3">
                {databases.map((s, i) => (
                  <div key={i} className="flex flex-col items-center w-36">
                    <div className="w-12 h-12 flex items-center justify-center mb-1">
                      {imageMap[s] ? (
                        <img src={imageMap[s]} alt={s} className="w-full h-full object-contain" />
                      ) : (
                        <div className="w-full h-full" />
                      )}
                    </div>
                    <span className="w-full px-3 py-1 bg-transparent text-white text-xs font-semibold border border-white/30 rounded text-center">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-sm text-[#8A8A8A] mb-3">AI</h3>
              <div className="flex flex-wrap gap-2">
                {ai.map((s, i) => (
                  <div key={i} className="flex flex-col items-center w-36">
                    <span className="px-3 py-1 bg-transparent text-white text-xs font-semibold border border-white/30 rounded text-center w-full">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-sm text-[#8A8A8A] mb-3">Large Language Models</h3>
              <div className="flex flex-wrap gap-2">
                {llm.map((s, i) => (
                  <div key={i} className="flex flex-col items-center w-36">
                    <span className="px-3 py-1 bg-transparent text-white text-xs font-semibold border border-white/30 rounded text-center w-full">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mb-6">
            <h3 className="text-sm text-[#8A8A8A] mb-3">Information Retrieval</h3>
              <div className="flex flex-wrap gap-2">
                {ir.map((s, i) => (
                <div key={i} className="flex flex-col items-center w-36">
                  <span className="px-3 py-1 bg-transparent text-white text-xs font-semibold border border-white/30 rounded text-center w-full">
                    {s}
                  </span>
                </div>
              ))}
              </div>
          </div>

          <div>
            <h3 className="text-sm text-[#8A8A8A] mb-3">Certifications</h3>
            <ul className="list-disc list-inside text-sm">
              {certifications.map((c, i) => (
                <li key={i}>
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                    {c.title} — {c.issuer}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* icons are now rendered above each tag where available */}
        </div>
      </div>
      
      <ScrollIndicator targetId="contact-section" />
    </div>
  );
};

export default SkillsSection;
