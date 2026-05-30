import React from 'react';
import { ScrollIndicator } from './HeroSection';
import project1Img from './assets/Project1/image4.png';
import project2Img from './assets/Project2/Project2.png';
import project3Img from './assets/Project3/image.png';


const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Conversational Speech Bot',
      description: 'NLP voice assistant for bus routes and timings designed for visually impaired users (placed 3rd in a hackathon).',
      date: 'Hackathon 2022',
      category: 'Accessibility / NLP',
      image: project1Img,
      link: 'https://github.com/prasham1515/Conversational-Speech-bot',
      details: [
        'Built a conversational assistant for public transit queries.',
        'Focused on accessibility for visually impaired users.',
        'Placed 3rd in a hackathon.'
      ]
    },
    {
      id: 2,
      title: 'Network-Based Intrusion Detection System (NIDS)',
      description: 'Machine learning and deep learning intrusion detection system achieving 93.9% accuracy; simulated DoS attacks and analyzed network flows.',
      date: '2022',
      category: 'Security / ML',
      image: project2Img,
      link: 'https://github.com/prasham1515/Network-Based-Intrusion-Detection-System',
      details: [
        'Achieved 93.9% accuracy with ML and deep learning models.',
        'Simulated DoS attacks to evaluate robustness.',
        'Analyzed network flows to detect malicious activity.'
      ]
    }
    ,
    {
      id: 3,
      title: 'HappinessVis: Interactive Data Visualization Platform',
      description: 'Engineered an interactive data visualization system to analyze multivariate happiness metrics, enabling user-driven exploration.',
      date: 'Personal Project',
      category: 'Visualization / Data',
      image: project3Img,
      link: 'https://github.com/prasham1515/HappinessVis',
      details: [
        'Engineered an interactive data visualization system to analyze multivariate happiness metrics, enabling user-driven exploration.',
        'Implemented skyline queries and skyline glyphs to surface top-performing countries across multiple dimensions.',
        'Supports temporal and geographic exploration via a year slider (2015–2019) and an interactive choropleth map for regional analysis.'
      ]
    }
  ];

  const [expandedProjectId, setExpandedProjectId] = React.useState(null);
  const activeProject = projects.find((project) => project.id === expandedProjectId) || null;
  const [fullscreenProjectId, setFullscreenProjectId] = React.useState(null);
  const fullscreenProject = projects.find((project) => project.id === fullscreenProjectId) || null;

  React.useEffect(() => {
    if (!fullscreenProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [fullscreenProject]);

  const getGridClass = () => {
    const count = projects.length;
    if (count === 4) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"; // 2x2 for 4 items
    if (count % 3 === 0) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"; // 3 columns for 3, 6, 9...
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"; // Default to 3
  };

  return (
    <div id="works-section" className="min-h-screen bg-black text-white flex items-start px-4 sm:px-8 py-8 overflow-y-auto lg:overflow-hidden relative">
      <div className="relative max-w-7xl mx-auto w-full h-full pt-8 lg:pt-0">

        {/* Left Label: PROJECTS / (absolute to align with content top) */}
        <div className="hidden lg:block absolute left-0 top-0">
          <p className="text-m font-semibold text-[#8A8A8A] tracking-[0.2em] uppercase whitespace-nowrap" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            PROJECTS /
          </p>
        </div>

        <div className="w-full h-full overflow-y-visible lg:overflow-y-auto lg:pt-14" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`.flex-1::-webkit-scrollbar { display: none; }`}</style>

          {!activeProject ? (
            <div className={`grid gap-6 mb-12 ${getGridClass()}`}>
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isActive={false}
                  onSelect={() => setExpandedProjectId(project.id)}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_0.7fr] gap-6 mb-12 items-stretch">
              <ExpandedProjectPanel
                project={activeProject}
                onClear={() => setExpandedProjectId(null)}
                onExpandImage={() => setFullscreenProjectId(activeProject?.id || null)}
              />

              <div className="flex flex-col gap-6 h-full">
                {projects
                  .filter((project) => project.id !== expandedProjectId)
                  .map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      isActive={false}
                      compact
                      onSelect={() => setExpandedProjectId(project.id)}
                    />
                  ))}
              </div>
            </div>
          )}

          {fullscreenProject && (
            <FullscreenImageModal
              project={fullscreenProject}
              onClose={() => setFullscreenProjectId(null)}
            />
          )}

          <AllProjectsButton />
        </div>
      </div>
      
      <ScrollIndicator targetId="skills-section" />
    </div>
  );
};

const ExpandedProjectPanel = ({ project, onClear, onExpandImage }) => {
  if (!project) return null;

  const isExternal = project.link && project.link.startsWith('http');

  return (
    <div
      className="border border-white rounded-2xl overflow-hidden bg-[#050505] shadow-[10px_10px_0px_white] min-h-[420px] flex flex-col lg:w-full"
      onClick={onClear}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClear();
        }
      }}
    >
      <div className="p-5 sm:p-6 lg:p-7">
        <div className="mb-4">
          <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {project.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_0.75fr] gap-6 items-stretch">
          <div
            className="relative bg-black overflow-hidden rounded-xl min-h-[220px] lg:min-h-[360px] border border-white/10 h-full flex items-center justify-center p-4 group cursor-zoom-in"
            onClick={(event) => {
              event.stopPropagation();
              onExpandImage();
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onExpandImage();
              }
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain"
              style={{ minHeight: '280px' }}
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white text-black text-[10px] font-bold rounded-full" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {project.category}
              </span>
            </div>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onExpandImage();
              }}
              className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/80 text-white opacity-90 transition-all hover:bg-white hover:text-black"
              aria-label="Expand image"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div>
              <div className="mb-2 text-[#8A8A8A] text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {project.date}
              </div>
              <p className="text-[#CFCFCF] text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {project.description}
              </p>
            </div>

            <div>
              <ul className="list-disc list-inside text-[#CFCFCF] text-sm leading-relaxed space-y-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {project.details.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onExpandImage();
                  }}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-transparent text-white text-xs font-bold rounded-full border border-white hover:bg-white hover:text-black transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Expand Image
                </button>
                <a
                  href={project.link}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-black text-xs font-bold rounded-full border border-white hover:bg-transparent hover:text-white transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Open Link
                </a>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onClear();
                  }}
                  className="inline-flex items-center justify-center px-4 py-2 border border-white/25 text-white text-xs rounded-full hover:bg-white hover:text-black transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Back to Grid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FullscreenImageModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black text-white hover:bg-white hover:text-black transition-colors"
        aria-label="Close fullscreen image"
      >
        <span className="text-xl leading-none">×</span>
      </button>

      <div className="w-full max-w-7xl max-h-[90vh] flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

const ProjectCard = ({ project, isActive, compact = false, onSelect }) => {

  return (
    <div onClick={onSelect} className="group relative block h-full text-left cursor-pointer">
      <div className={`relative bg-black border rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col ${isActive ? 'border-white' : 'border-[#8A8A8A] hover:border-white/70'}`}>
        <div className="relative bg-black overflow-hidden min-h-[220px] lg:min-h-[280px] rounded-md">
          <img src={project.image} alt={project.title} className="w-full h-full object-contain bg-black transition-all duration-300 group-hover:scale-[1.01]" style={{ aspectRatio: '16/9' }} onError={(e) => { e.target.src = `data:image/svg+xml,%3Csvg width='400' height='225' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='225' fill='%231A1A1A'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%238A8A8A' font-size='14' font-family='DM Sans'%3E${project.category}%3C/text%3E%3C/svg%3E`; }} />

          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-white text-black text-[10px] font-bold rounded" style={{ fontFamily: 'DM Sans, sans-serif' }}>{project.category}</span>
          </div>
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <h3 className={`text-sm font-bold text-white mb-2 leading-tight`} style={{ fontFamily: 'DM Sans, sans-serif' }}>{project.title}</h3>

          {!compact && (
            <>
              <div className="mb-1.5">
                <span className="text-[#8A8A8A] text-[10px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>{project.date}</span>
              </div>

              <p className="text-[#8A8A8A] text-xs leading-relaxed mt-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>{project.description}</p>
            </>
          )}

          <div className="mt-3 flex items-center justify-between gap-3">
            {!compact && (
              <span className={`text-[10px] uppercase tracking-[0.18em] ${isActive ? 'text-white' : 'text-white/45'}`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Click to open
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AllProjectsButton = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="flex items-center justify-center">
      <a href="https://github.com/prasham1515" target="_blank" rel="noopener noreferrer" className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="relative px-6 py-3 border-2 border-white transition-all duration-300 overflow-hidden group hover:bg-white hover:text-black" style={{ background: isHovered ? 'white' : 'transparent' }}>
          <div className="relative flex items-center gap-3">
            <span className="text-lg font-bold transition-colors duration-300 whitespace-nowrap" style={{ fontFamily: 'DM Sans, sans-serif', color: isHovered ? 'black' : 'white' }}>All Projects</span>
            <svg className="w-4 h-4 transition-all duration-300" style={{ stroke: isHovered ? 'black' : 'white', transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)' }} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectsPage;